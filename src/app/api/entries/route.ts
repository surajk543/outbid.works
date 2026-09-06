import { NextResponse } from "next/server";

import { listEntries } from "@/lib/entries";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") ?? undefined;
  const limit = Number(searchParams.get("limit") ?? 100);

  const entries = await listEntries({
    category,
    limit: Number.isFinite(limit) ? Math.min(Math.max(limit, 1), 200) : 100,
  });

  return NextResponse.json({ entries });
}

/**
 * There is deliberately no POST here. A listing is created only by a confirmed
 * payment, in the Dodo webhook — an unauthenticated write endpoint would hand
 * out ranks for free and undercut everyone who paid for one.
 */
