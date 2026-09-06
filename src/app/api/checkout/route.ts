import { NextResponse } from "next/server";

import { dodo, dodoConfigured, toMetadata } from "@/lib/dodo";
import { validateBid } from "@/lib/entries";

export const dynamic = "force-dynamic";

/**
 * Starts a paid bid. The listing is deliberately not written here — the Terms
 * say rank is assigned when payment confirms, so the row is created by the
 * webhook and the bid rides along in the session metadata until then.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Expected a JSON body." }, { status: 400 });
  }

  const input = body as Record<string, unknown>;

  // Check every rule before sending anyone to a card form, so a bid that the
  // board would reject never reaches checkout.
  const checked = await validateBid({
    url: String(input.url ?? ""),
    title: String(input.title ?? ""),
    description: input.description == null ? null : String(input.description),
    category: String(input.category ?? ""),
    amount_in_usd: Number(input.amount_in_usd),
  });

  if (!checked.ok) {
    return NextResponse.json(
      { error: checked.message, field: checked.field },
      { status: 400 },
    );
  }

  if (!dodoConfigured) {
    return NextResponse.json(
      {
        error:
          "Payments are not configured yet, so no bid can be placed. Set DODO_API_KEY and DODO_PRODUCT_ID.",
        field: "amount_in_usd",
      },
      { status: 503 },
    );
  }

  const origin = new URL(request.url).origin;

  try {
    const session = await dodo().checkoutSessions.create({
      product_cart: [
        {
          product_id: process.env.DODO_PRODUCT_ID!,
          quantity: 1,
          // Pay-what-you-want takes the amount in cents; the bid is whole
          // dollars, so this is the only place the two units meet.
          amount: checked.bid.amount * 100,
        },
      ],
      metadata: toMetadata(checked.bid),
      return_url: `${origin}/bid/complete`,
    });

    if (!session.checkout_url) {
      return NextResponse.json(
        { error: "Checkout could not be started. Try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ checkout_url: session.checkout_url });
  } catch (error) {
    console.error("dodo checkout failed", error);

    // Dodo refuses live sessions until the business is verified. That is a
    // dashboard problem, not a retry problem, so say which one it is instead
    // of asking the bidder to try again forever.
    const code =
      typeof error === "object" && error && "error" in error
        ? String((error as { error?: { code?: string } }).error?.code ?? "")
        : "";

    if (code === "MERCHANT_NOT_LIVE") {
      return NextResponse.json(
        {
          error:
            "Payments are not switched on yet, so bids cannot be taken. Nothing was charged.",
          field: "amount_in_usd",
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { error: "Could not reach the payment provider. Try again." },
      { status: 502 },
    );
  }
}
