import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

import { createClient, type Client } from "@libsql/client";

/**
 * Local dev falls back to a file so `npm run dev` needs no setup. Vercel's
 * filesystem is ephemeral and read-only, so production must point at Turso
 * via TURSO_DATABASE_URL / TURSO_AUTH_TOKEN.
 */
function open(): Client {
  const configured = process.env.TURSO_DATABASE_URL;

  // Falling back to a file on a serverless host fails deep inside libSQL with
  // an unhelpful EROFS. Say what is actually wrong instead.
  if (!configured && process.env.VERCEL) {
    throw new Error(
      "TURSO_DATABASE_URL is not set. Vercel's filesystem is read-only and " +
        "ephemeral, so the SQLite file fallback cannot work there. Create a " +
        "Turso database and set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN in " +
        "the project's environment variables. See the README.",
    );
  }

  const url = configured ?? "file:data/outbid.db";

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

function client(): Client {
  globalForDb.libsql ??= open();
  return globalForDb.libsql;
}

/**
 * Connects on first use rather than on import. Next evaluates every route
 * module while collecting build configuration, and connecting there would make
 * a missing TURSO_DATABASE_URL fail the build instead of the request that
 * actually needs a database.
 */
export const db = new Proxy({} as Client, {
  get(_target, property) {
    const connection = client();
    const value = Reflect.get(connection, property);
    // Methods must keep the real client as their receiver, not the proxy.
    return typeof value === "function" ? value.bind(connection) : value;
  },
});

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
