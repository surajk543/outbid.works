import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

import Database from "better-sqlite3";

import { config } from "./config.js";

if (config.databaseFile !== ":memory:") {
  mkdirSync(dirname(config.databaseFile), { recursive: true });
}

export const db = new Database(config.databaseFile);

// WAL lets reads run alongside a write, which matters as soon as there is
// more than one request in flight.
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

/** Confirms the connection is usable. Throws if the file is unreadable. */
export function pingDatabase(): boolean {
  const row = db.prepare("SELECT 1 AS ok").get() as { ok: number } | undefined;
  return row?.ok === 1;
}
