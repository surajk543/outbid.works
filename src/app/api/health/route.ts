import { NextResponse } from "next/server";

import { pingDatabase } from "@/lib/db";

// Health reflects live state, so it must never be cached or prerendered.
export const dynamic = "force-dynamic";

export function GET() {
  let database: "up" | "down" = "down";
  try {
    database = pingDatabase() ? "up" : "down";
  } catch {
    database = "down";
  }

  return NextResponse.json(
    { status: database === "up" ? "up" : "down", database, time: new Date().toISOString() },
    { status: database === "up" ? 200 : 503 },
  );
}
