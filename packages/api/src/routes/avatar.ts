import { Hono } from "hono";
import { generateAvatar } from "@brick-avatars/core";
import { svgToPng } from "../png.js";

export const avatarRouter = new Hono();

function parseSizeQuery(sizeParam: string | undefined): number {
  if (sizeParam === undefined) return 128;
  const n = parseInt(sizeParam, 10);
  return isNaN(n) || n <= 0 ? 128 : n;
}

avatarRouter.get("/avatar/:filename{.+\\.svg}", (c) => {
  const filename = c.req.param("filename");
  const seed = filename.slice(0, -4);
  const size = parseSizeQuery(c.req.query("size"));

  const { svg } = generateAvatar({ seed, size });

  return c.body(svg, 200, {
    "Content-Type": "image/svg+xml; charset=utf-8",
    "Cache-Control": "public, max-age=31536000, immutable",
  });
});

avatarRouter.get("/avatar/:filename{.+\\.png}", (c) => {
  const filename = c.req.param("filename");
  const seed = filename.slice(0, -4);
  const size = parseSizeQuery(c.req.query("size"));

  const { svg } = generateAvatar({ seed, size });
  const png = svgToPng(svg, size);

  return new Response(png.buffer as ArrayBuffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
});
