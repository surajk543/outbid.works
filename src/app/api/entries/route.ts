import { NextResponse } from "next/server";

import { createEntry, listEntries } from "@/lib/entries";

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

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Expected a JSON body." }, { status: 400 });
  }

  const input = body as Record<string, unknown>;
  const result = await createEntry({
    url: String(input.url ?? ""),
    title: String(input.title ?? ""),
    description: input.description == null ? null : String(input.description),
    category: String(input.category ?? ""),
    amount_in_usd: Number(input.amount_in_usd),
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: result.message, field: result.field },
      { status: 400 },
    );
  }

  return NextResponse.json({ entry: result.entry }, { status: 201 });
}
