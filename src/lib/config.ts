import { isAbsolute, join } from "node:path";

/**
 * SQLite file. ":memory:" gives a throwaway database. Relative paths are
 * joined onto the working directory rather than resolved, which keeps the
 * bundler from tracing the whole project into the server build.
 */
function databaseFile(): string {
  const value = process.env.DATABASE_FILE ?? "data/outbid.db";
  if (value === ":memory:" || isAbsolute(value)) {
    return value;
  }
  // The path is runtime config, so the bundler cannot know it statically.
  // Without this it traces the entire project into the server build.
  return join(/*turbopackIgnore: true*/ process.cwd(), value);
}

export const config = {
  databaseFile: databaseFile(),
};
