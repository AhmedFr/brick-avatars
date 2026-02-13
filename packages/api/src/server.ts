import { serve } from "@hono/node-server";
import { createApp } from "./app.js";

const PORT = parseInt(process.env.PORT ?? "3000", 10);

serve(
  {
    fetch: createApp().fetch,
    port: PORT,
  },
  (info) => {
    console.log(`brick-avatars API listening on http://localhost:${info.port}`);
  }
);
