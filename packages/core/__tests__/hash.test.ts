import { describe, it, expect } from "vitest";
import { murmurhash3 } from "../src/hash.js";

describe("murmurhash3", () => {
  it("returns a number", () => {
    expect(typeof murmurhash3("hello")).toBe("number");
  });

  it("is deterministic", () => {
    expect(murmurhash3("test")).toBe(murmurhash3("test"));
  });

  it("produces different hashes for different inputs", () => {
    expect(murmurhash3("a")).not.toBe(murmurhash3("b"));
  });

  it("respects the seed parameter", () => {
    expect(murmurhash3("test", 0)).not.toBe(murmurhash3("test", 42));
  });

  it("returns unsigned 32-bit integers", () => {
    const hash = murmurhash3("negative-test");
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThanOrEqual(0xffffffff);
  });
});
