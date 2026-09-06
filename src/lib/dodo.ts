import { createHmac, timingSafeEqual } from "node:crypto";

import DodoPayments from "dodopayments";

/**
 * Dodo Payments takes the money for a rank. Everything here is server-only:
 * the API key must never reach the browser.
 */

/** Live keys move real money, so the mode is explicit rather than inferred. */
export const DODO_MODE = process.env.DODO_MODE === "live" ? "live" : "test";

export const dodoConfigured = Boolean(
  process.env.DODO_API_KEY && process.env.DODO_PRODUCT_ID,
);

let cached: DodoPayments | null = null;

export function dodo(): DodoPayments {
  if (!process.env.DODO_API_KEY) {
    throw new Error("DODO_API_KEY is not set.");
  }

  cached ??= new DodoPayments({
    bearerToken: process.env.DODO_API_KEY,
    environment: DODO_MODE === "live" ? "live_mode" : "test_mode",
  });

  return cached;
}

/**
 * Rejects a webhook that is not from Dodo. Follows the Standard Webhooks
 * spec: HMAC-SHA256 over "id.timestamp.body", compared in constant time.
 */
export function verifyWebhook({
  id,
  timestamp,
  signature,
  body,
  secret,
}: {
  id: string | null;
  timestamp: string | null;
  signature: string | null;
  body: string;
  secret: string;
}): boolean {
  if (!id || !timestamp || !signature) return false;

  // A signature stays valid forever without this, so a captured request could
  // be replayed back at us indefinitely.
  const age = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (!Number.isFinite(age) || age > 300) return false;

  const key = Buffer.from(secret.replace(/^whsec_/, ""), "base64");
  const expected = createHmac("sha256", key)
    .update(`${id}.${timestamp}.${body}`)
    .digest("base64");

  // The header carries a space-separated list of "v1,<signature>" so a secret
  // can be rotated without downtime; any one match is enough.
  return signature.split(" ").some((entry) => {
    const [version, value] = entry.split(",");
    if (version !== "v1" || !value) return false;

    const a = Buffer.from(value);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
  });
}

/** Bid data carried through checkout, so no pending row is needed. */
export type BidMetadata = {
  url: string;
  title: string;
  description: string;
  category: string;
  amount: string;
};

export function toMetadata(bid: {
  url: string;
  title: string;
  description: string | null;
  category: string;
  amount: number;
}): BidMetadata {
  return {
    url: bid.url,
    title: bid.title,
    description: bid.description ?? "",
    category: bid.category,
    amount: String(bid.amount),
  };
}
