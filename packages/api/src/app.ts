import { Hono } from "hono";
import { avatarRouter } from "./routes/avatar.js";

export function createApp(): Hono {
  const app = new Hono();

  app.get("/health", (c) => c.json({ status: "ok", version: "0.1.0" }));

  app.route("/", avatarRouter);

  return app;
}

export default createApp();
