import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

import Database from "better-sqlite3";

import { config } from "./config";

function open() {
  if (config.databaseFile !== ":memory:") {
    mkdirSync(dirname(config.databaseFile), { recursive: true });
  }

  const database = new Database(config.databaseFile);

  // WAL lets reads run alongside a write, which matters as soon as there is
  // more than one request in flight.
  database.pragma("journal_mode = WAL");
  database.pragma("foreign_keys = ON");

  return database;
}

// Next reloads modules on every edit in dev, which would leak a new connection
// each time. Hang the handle off globalThis so reloads reuse one.
const globalForDb = globalThis as typeof globalThis & {
  sqlite?: Database.Database;
};

export const db = globalForDb.sqlite ?? open();

if (process.env.NODE_ENV !== "production") {
  globalForDb.sqlite = db;
}

/** Confirms the connection is usable. Throws if the file is unreadable. */
export function pingDatabase(): boolean {
  const row = db.prepare("SELECT 1 AS ok").get() as { ok: number } | undefined;
  return row?.ok === 1;
}
