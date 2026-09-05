import cors from "cors";
import express from "express";

import { config } from "./config.js";
import { pingDatabase } from "./db.js";

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/api", cors({ origin: config.corsOrigins, credentials: true }));

  app.get("/", (_req, res) => {
    res.type("text/plain").send("ok");
  });

  const health = (_req: express.Request, res: express.Response) => {
    let database: "up" | "down" = "down";
    try {
      database = pingDatabase() ? "up" : "down";
    } catch {
      database = "down";
    }

    res
      .status(database === "up" ? 200 : 503)
      .json({ status: database === "up" ? "up" : "down", database, time: new Date().toISOString() });
  };

  app.get("/health", health);
  app.get("/api/health", health);

  app.use((_req, res) => {
    res.status(404).json({ error: "not found" });
  });

  return app;
}
