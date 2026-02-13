import { describe, it, expect, vi } from "vitest";

vi.mock("@resvg/resvg-js", () => ({
  Resvg: class {
    render() {
      return {
        asPng: () => new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
      };
    }
  },
}));

import { createApp } from "../src/app.js";

describe("GET /health", () => {
  it("returns 200 with status ok", async () => {
    const app = createApp();
    const res = await app.request("/health");
    expect(res.status).toBe(200);
    const body = (await res.json()) as { status: string };
    expect(body.status).toBe("ok");
  });
});

describe("GET /avatar/:seed.svg", () => {
  it("returns 200 with SVG content-type", async () => {
    const app = createApp();
    const res = await app.request("/avatar/ahmed.svg");
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toContain("image/svg+xml");
  });

  it("returns valid SVG body", async () => {
    const app = createApp();
    const res = await app.request("/avatar/ahmed.svg");
    const text = await res.text();
    expect(text).toMatch(/^<svg[\s\S]*<\/svg>$/);
  });

  it("respects ?size query param", async () => {
    const app = createApp();
    const res = await app.request("/avatar/ahmed.svg?size=256");
    const text = await res.text();
    expect(text).toContain('width="256"');
    expect(text).toContain('height="256"');
  });

  it("is deterministic for the same seed", async () => {
    const app = createApp();
    const [r1, r2] = await Promise.all([
      app.request("/avatar/alice.svg"),
      app.request("/avatar/alice.svg"),
    ]);
    expect(await r1.text()).toBe(await r2.text());
  });

  it("different seeds produce different output", async () => {
    const app = createApp();
    const [r1, r2] = await Promise.all([
      app.request("/avatar/alice.svg"),
      app.request("/avatar/bob.svg"),
    ]);
    expect(await r1.text()).not.toBe(await r2.text());
  });

  it("handles seeds with dots", async () => {
    const app = createApp();
    const res = await app.request("/avatar/user.name.svg");
    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text).toMatch(/^<svg/);
  });

  it("has cache-control header", async () => {
    const app = createApp();
    const res = await app.request("/avatar/ahmed.svg");
    expect(res.headers.get("cache-control")).toContain("immutable");
  });
});

describe("GET /avatar/:seed.png", () => {
  it("returns 200 with PNG content-type", async () => {
    const app = createApp();
    const res = await app.request("/avatar/ahmed.png");
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("image/png");
  });

  it("returns non-empty body", async () => {
    const app = createApp();
    const res = await app.request("/avatar/ahmed.png");
    const buf = await res.arrayBuffer();
    expect(buf.byteLength).toBeGreaterThan(0);
  });

  it("has cache-control header", async () => {
    const app = createApp();
    const res = await app.request("/avatar/ahmed.png");
    expect(res.headers.get("cache-control")).toContain("immutable");
  });
});
