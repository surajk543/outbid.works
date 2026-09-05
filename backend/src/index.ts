import { createApp } from "./app.js";
import { config } from "./config.js";
import { db } from "./db.js";

const server = createApp().listen(config.port, () => {
  console.log(`backend listening on http://localhost:${config.port}`);
  console.log(`sqlite: ${config.databaseFile}`);
});

for (const signal of ["SIGINT", "SIGTERM"] as const) {
  process.on(signal, () => {
    server.close(() => {
      db.close();
      process.exit(0);
    });
  });
}
