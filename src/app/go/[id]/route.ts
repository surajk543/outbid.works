import { NextResponse } from "next/server";

import { recordClick } from "@/lib/entries";

// Every visit must be counted, so this can never be cached.
export const dynamic = "force-dynamic";

/**
 * Outbound links point here instead of straight at the video, which is how a
 * creator sees the attention their bid bought.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const url = await recordClick(Number(id));

  if (!url) {
    return NextResponse.json({ error: "No such entry." }, { status: 404 });
  }

  return NextResponse.redirect(url, 302);
}
