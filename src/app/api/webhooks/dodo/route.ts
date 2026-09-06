import { NextResponse } from "next/server";

import { verifyWebhook } from "@/lib/dodo";
import { writeBid } from "@/lib/entries";
import { isCategory } from "@/lib/categories";
import { parseVideoUrl } from "@/lib/video-url";

export const dynamic = "force-dynamic";

/**
 * Where a listing actually goes live. Dodo confirms the payment here, which is
 * the moment the Terms say a rank is claimed.
 */
export async function POST(request: Request) {
  const secret = process.env.DODO_WEBHOOK_SECRET;
  if (!secret) {
    console.error("DODO_WEBHOOK_SECRET is not set; refusing the webhook.");
    return NextResponse.json({ error: "Not configured." }, { status: 503 });
  }

  // The signature covers the exact bytes sent, so this must read the raw body
  // before anything parses and re-serialises it.
  const body = await request.text();

  const verified = verifyWebhook({
    id: request.headers.get("webhook-id"),
    timestamp: request.headers.get("webhook-timestamp"),
    signature: request.headers.get("webhook-signature"),
    body,
    secret,
  });

  if (!verified) {
    // Anyone can POST here, and a forged event would mint a free listing.
    return NextResponse.json({ error: "Bad signature." }, { status: 401 });
  }

  let event: {
    type?: string;
    data?: { metadata?: Record<string, string> };
  };
  try {
    event = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Bad payload." }, { status: 400 });
  }

  // Anything else — refunds, disputes, subscriptions — is acknowledged and
  // ignored, so Dodo does not retry events we have no use for.
  if (event.type !== "payment.succeeded") {
    return NextResponse.json({ ignored: event.type ?? "unknown" });
  }

  const metadata = event.data?.metadata ?? {};
  const amount = Number(metadata.amount);
  const video = parseVideoUrl(metadata.url ?? "");

  // A payment whose metadata we cannot read is a payment we cannot fulfil.
  // Say so loudly rather than silently dropping someone's money.
  if (!video || !metadata.title || !isCategory(metadata.category ?? "") || !Number.isInteger(amount)) {
    console.error("payment.succeeded with unusable metadata", metadata);
    return NextResponse.json({ error: "Unusable metadata." }, { status: 422 });
  }

  // Re-delivery is expected; writeBid keeps the larger amount, so replaying
  // the same event lands on the same row with the same value.
  const entry = await writeBid({
    url: video.url,
    title: metadata.title,
    description: metadata.description || null,
    category: metadata.category,
    amount,
  });

  return NextResponse.json({ id: entry.id, rank: entry.rank });
}
