import { resolve } from "node:path";

export const config = {
  port: Number(process.env.PORT ?? 8080),
  /** SQLite file. ":memory:" gives a throwaway database. */
  databaseFile: resolve(process.env.DATABASE_FILE ?? "data/outbid.db"),
  corsOrigins: (process.env.CORS_ALLOWED_ORIGINS ?? "http://localhost:3000")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
};
