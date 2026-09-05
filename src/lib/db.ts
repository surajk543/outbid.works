import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

import { createClient, type Client } from "@libsql/client";

/**
 * Local dev falls back to a file so `npm run dev` needs no setup. Vercel's
 * filesystem is ephemeral and read-only, so production must point at Turso
 * via TURSO_DATABASE_URL / TURSO_AUTH_TOKEN.
 */
function open(): Client {
  const url = process.env.TURSO_DATABASE_URL ?? "file:data/outbid.db";

  // libSQL opens a file database but will not create the directory holding
  // it, so a fresh clone fails with SQLITE_CANTOPEN without this.
  if (url.startsWith("file:")) {
    mkdirSync(dirname(url.slice("file:".length)), { recursive: true });
  }

  return createClient({
    url,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });
}

// Next reloads modules on every edit in dev, which would leak a client each
// time. Hang it off globalThis so reloads reuse one.
const globalForDb = globalThis as typeof globalThis & {
  libsql?: Client;
  schemaReady?: Promise<void>;
};

export const db = globalForDb.libsql ?? open();

if (process.env.NODE_ENV !== "production") {
  globalForDb.libsql = db;
}

// "rank" is a reserved word in SQLite (window functions), so every reference
// to the column stays double-quoted.
const SCHEMA = `
  CREATE TABLE IF NOT EXISTS metadata (
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    url            TEXT    NOT NULL,
    title          TEXT    NOT NULL,
    description    TEXT,
    category       TEXT    NOT NULL,
    amount_in_usd  REAL    NOT NULL,
    clicks         INTEGER NOT NULL DEFAULT 0,
    "rank"         INTEGER NOT NULL DEFAULT 0,
    created_at     TEXT    NOT NULL DEFAULT (datetime('now'))
  )
`;

/**
 * Creates the table on first use. Cached as a promise so concurrent requests
 * share one round trip instead of racing to create it.
 */
export function ready(): Promise<void> {
  globalForDb.schemaReady ??= db
    .execute(SCHEMA)
    .then(() => db.execute(`CREATE INDEX IF NOT EXISTS idx_metadata_amount ON metadata (amount_in_usd DESC)`))
    .then(() => undefined);

  return globalForDb.schemaReady;
}

/** Confirms the connection is usable. Throws if the database is unreachable. */
export async function pingDatabase(): Promise<boolean> {
  const result = await db.execute("SELECT 1 AS ok");
  return result.rows[0]?.ok === 1;
}
