import { type NextRequest, NextResponse } from "next/server";

import { getEntryUrl, recordClick } from "@/lib/entries";

// Every visit must be counted, so this can never be cached.
export const dynamic = "force-dynamic";

/**
 * Which listings this browser has already been counted for. The schema is a
 * single table with no per-visitor rows, so the record of who clicked what
 * lives in the visitor's own cookie rather than in the database.
 */
const SEEN_COOKIE = "outbid_seen";

/** A year, so a repeat visit months later still does not double-count. */
const SEEN_MAX_AGE = 60 * 60 * 24 * 365;

/**
 * Bounds the cookie well under the 4KB limit browsers enforce. Once past it
 * the oldest ids drop off, so a very long-lived visitor can eventually be
 * counted twice for a listing they clicked hundreds of listings ago.
 */
const SEEN_LIMIT = 500;

function parseSeen(header: string | undefined): number[] {
  if (!header) return [];
  return header
    .split(",")
    .map((part) => Number(part))
    .filter((id) => Number.isInteger(id) && id > 0);
}

/**
 * Outbound links point here instead of straight at the video, which is how a
 * creator sees the attention their bid bought. A given browser is counted once
 * per listing, so the number means people reached, not clicks made.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const entryId = Number(id);

  // Read through the cookie API rather than the raw header: the value is
  // percent-encoded on the way out, so a comma-separated list comes back as
  // "1%2C2" and a hand-rolled split would silently drop every id.
  const seen = parseSeen(request.cookies.get(SEEN_COOKIE)?.value);

  const alreadyCounted = seen.includes(entryId);

  // A repeat visitor still needs somewhere to go, so look the listing up
  // either way — just skip the increment.
  const url = alreadyCounted
    ? await getEntryUrl(entryId)
    : await recordClick(entryId);

  if (!url) {
    return NextResponse.json({ error: "No such entry." }, { status: 404 });
  }

  const response = NextResponse.redirect(url, 302);

  if (!alreadyCounted) {
    const next = [...seen, entryId].slice(-SEEN_LIMIT);
    response.cookies.set(SEEN_COOKIE, next.join(","), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: SEEN_MAX_AGE,
    });
  }

  return response;
}
