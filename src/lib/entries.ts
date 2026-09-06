import type { Row } from "@libsql/client";

import { MAX_BID, MIN_BID, OUTBID_STEP, RAISE_STEP } from "./bidding";
import { isCategory } from "./categories";
import { db, ready } from "./db";
import { parseVideoUrl, SUPPORTED_PROVIDERS, type VideoProvider } from "./video-url";

export type Entry = {
  id: number;
  url: string;
  title: string;
  description: string | null;
  category: string;
  amount_in_usd: number;
  clicks: number;
  rank: number;
  created_at: string;
  /** Derived from url at read time — not a stored column. */
  provider: VideoProvider;
  thumbnail: string | null;
};

function toEntry(row: Row): Entry {
  const url = String(row.url);
  const parsed = parseVideoUrl(url);

  return {
    id: Number(row.id),
    url,
    title: String(row.title),
    description: row.description === null ? null : String(row.description),
    category: String(row.category),
    amount_in_usd: Number(row.amount_in_usd),
    clicks: Number(row.clicks),
    rank: Number(row.rank),
    created_at: String(row.created_at),
    provider: parsed?.provider ?? "file",
    thumbnail: parsed?.thumbnail ?? null,
  };
}

/**
 * Rank is stored rather than computed per read so the API and the board agree
 * on one number. Ties break by who bid first.
 */
async function recomputeRanks(): Promise<void> {
  await db.execute(`
    UPDATE metadata SET "rank" = (
      SELECT COUNT(*) + 1 FROM metadata AS other
      WHERE other.amount_in_usd > metadata.amount_in_usd
         OR (other.amount_in_usd = metadata.amount_in_usd AND other.id < metadata.id)
    )
  `);
}

export async function listEntries(
  options: { category?: string; limit?: number } = {},
): Promise<Entry[]> {
  await ready();

  const { category, limit = 100 } = options;
  const filtered = category && isCategory(category);

  const result = await db.execute({
    sql: `SELECT * FROM metadata ${filtered ? "WHERE category = ?" : ""}
          ORDER BY "rank" ASC LIMIT ?`,
    args: filtered ? [category, limit] : [limit],
  });

  return result.rows.map(toEntry);
}

/**
 * Just the amounts column, so the bid form can work out which rank a given
 * bid would take without shipping the whole board to the client.
 */
export async function getBidAmounts(): Promise<number[]> {
  await ready();

  const result = await db.execute(
    `SELECT amount_in_usd FROM metadata ORDER BY amount_in_usd DESC`,
  );

  return result.rows.map((row) => Number(row.amount_in_usd));
}

export type Stats = {
  entries: number;
  totalUsd: number;
  totalClicks: number;
  topBid: number;
};

export async function getStats(): Promise<Stats> {
  await ready();

  const result = await db.execute(`
    SELECT COUNT(*) AS entries,
           COALESCE(SUM(amount_in_usd), 0) AS total_usd,
           COALESCE(SUM(clicks), 0) AS total_clicks,
           COALESCE(MAX(amount_in_usd), 0) AS top_bid
    FROM metadata
  `);

  const row = result.rows[0];
  return {
    entries: Number(row.entries),
    totalUsd: Number(row.total_usd),
    totalClicks: Number(row.total_clicks),
    topBid: Number(row.top_bid),
  };
}

export type CreateInput = {
  url: string;
  title: string;
  description?: string | null;
  category: string;
  amount_in_usd: number;
};

/** A submission that passed every rule, ready to be written or paid for. */
export type CheckedBid = {
  url: string;
  title: string;
  description: string | null;
  category: string;
  amount: number;
};

export type Validation =
  | { ok: true; bid: CheckedBid }
  | { ok: false; field: keyof CreateInput; message: string };

/**
 * Every rule, without writing anything. Checkout runs this before sending
 * anyone to pay, so a bid that would be rejected never reaches a card form.
 */
export async function validateBid(input: CreateInput): Promise<Validation> {
  await ready();

  const video = parseVideoUrl(input.url ?? "");
  if (!video) {
    return {
      ok: false,
      field: "url",
      message: `That is not a video link. Use ${SUPPORTED_PROVIDERS}.`,
    };
  }

  const title = (input.title ?? "").trim();
  if (!title) {
    return { ok: false, field: "title", message: "Give the video a title." };
  }
  if (title.length > 120) {
    return { ok: false, field: "title", message: "Title is capped at 120 characters." };
  }

  const description = (input.description ?? "").trim();
  if (description.length > 280) {
    return {
      ok: false,
      field: "description",
      message: "Description is capped at 280 characters.",
    };
  }

  if (!isCategory(input.category)) {
    return { ok: false, field: "category", message: "Pick a category." };
  }

  const amount = Number(input.amount_in_usd);
  if (!Number.isInteger(amount)) {
    return {
      ok: false,
      field: "amount_in_usd",
      message: "Bids are whole US dollars.",
    };
  }
  if (amount < MIN_BID) {
    return {
      ok: false,
      field: "amount_in_usd",
      message: `Bids start at $${MIN_BID}.`,
    };
  }
  if (amount > MAX_BID) {
    return {
      ok: false,
      field: "amount_in_usd",
      message: `The most you can bid is $${MAX_BID.toLocaleString()}.`,
    };
  }

  const existing = await db.execute({
    sql: "SELECT id, amount_in_usd FROM metadata WHERE url = ?",
    args: [video.url],
  });

  // #1 is not for sale a dollar at a time. Clearing the leader costs a step on
  // top of their amount; anything less is allowed, it just lands lower down.
  const leader = await db.execute({
    sql: "SELECT COALESCE(MAX(amount_in_usd), 0) AS top FROM metadata WHERE url != ?",
    args: [video.url],
  });

  const rivalTop = Number(leader.rows[0].top);
  if (amount > rivalTop && amount < rivalTop + OUTBID_STEP) {
    return {
      ok: false,
      field: "amount_in_usd",
      message: `Taking #1 costs $${rivalTop + OUTBID_STEP} or more. Bid up to $${rivalTop} to land further down the board.`,
    };
  }

  if (existing.rows.length > 0) {
    const current = Number(existing.rows[0].amount_in_usd);
    if (amount < current + RAISE_STEP) {
      return {
        ok: false,
        field: "amount_in_usd",
        message: `This video is on the board at $${current}. Raising it costs at least $${current + RAISE_STEP}.`,
      };
    }
  }

  return {
    ok: true,
    bid: {
      url: video.url,
      title,
      description: description || null,
      category: input.category,
      amount,
    },
  };
}

/**
 * Writes the listing and re-ranks the board. Takes an already-checked bid, so
 * it cannot reject — which is what the paid path needs, since by the time this
 * runs the money is gone and refusing would take payment for nothing.
 *
 * An existing listing keeps the larger of the two amounts. Between checkout
 * and confirmation the same video may have been raised by another payment, and
 * lowering it here would quietly discard what that one bought.
 */
export async function writeBid(bid: CheckedBid): Promise<Entry> {
  await ready();

  const existing = await db.execute({
    sql: "SELECT id, amount_in_usd FROM metadata WHERE url = ?",
    args: [bid.url],
  });

  if (existing.rows.length > 0) {
    const current = Number(existing.rows[0].amount_in_usd);
    await db.execute({
      sql: `UPDATE metadata
            SET amount_in_usd = ?, title = ?, description = ?, category = ?
            WHERE id = ?`,
      args: [
        Math.max(current, bid.amount),
        bid.title,
        bid.description,
        bid.category,
        existing.rows[0].id!,
      ],
    });
  } else {
    await db.execute({
      sql: `INSERT INTO metadata (url, title, description, category, amount_in_usd)
            VALUES (?, ?, ?, ?, ?)`,
      args: [bid.url, bid.title, bid.description, bid.category, bid.amount],
    });
  }

  await recomputeRanks();

  const saved = await db.execute({
    sql: "SELECT * FROM metadata WHERE url = ?",
    args: [bid.url],
  });

  return toEntry(saved.rows[0]);
}

/**
 * Where a listing points, without counting anything. Used for a visitor who
 * has already been counted for this listing.
 */
export async function getEntryUrl(id: number): Promise<string | null> {
  await ready();

  const result = await db.execute({
    sql: "SELECT url FROM metadata WHERE id = ?",
    args: [id],
  });

  return result.rows.length > 0 ? String(result.rows[0].url) : null;
}

/**
 * Counts a click and hands back where to send the visitor. Returns null for an
 * unknown id so the route can 404 instead of redirecting nowhere.
 */
export async function recordClick(id: number): Promise<string | null> {
  await ready();

  const result = await db.execute({
    sql: "SELECT url FROM metadata WHERE id = ?",
    args: [id],
  });

  if (result.rows.length === 0) return null;

  await db.execute({
    sql: "UPDATE metadata SET clicks = clicks + 1 WHERE id = ?",
    args: [id],
  });

  return String(result.rows[0].url);
}
