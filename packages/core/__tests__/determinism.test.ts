import { describe, it, expect } from "vitest";
import { generateAvatar } from "../src/index.js";

describe("end-to-end determinism", () => {
  it("same seed produces identical SVG", () => {
    const a = generateAvatar({ seed: "ahmed" });
    const b = generateAvatar({ seed: "ahmed" });
    expect(a.svg).toBe(b.svg);
    expect(a.selections).toEqual(b.selections);
    expect(a.palette).toEqual(b.palette);
  });

  it("different seeds produce different SVGs", () => {
    const a = generateAvatar({ seed: "alice" });
    const b = generateAvatar({ seed: "bob" });
    expect(a.svg).not.toBe(b.svg);
  });

  it("size does not affect content, only wrapper dimensions", () => {
    const small = generateAvatar({ seed: "size-test", size: 64 });
    const large = generateAvatar({ seed: "size-test", size: 512 });
    const stripDimensions = (svg: string) =>
      svg.replace(/width="\d+"/, "").replace(/height="\d+"/, "");
    expect(stripDimensions(small.svg)).toBe(stripDimensions(large.svg));
  });

  it("palette overrides are applied", () => {
    const result = generateAvatar({
      seed: "override",
      palette: { skin: "#AABBCC" },
    });
    expect(result.palette.skin).toBe("#AABBCC");
    expect(result.svg).toContain("#AABBCC");
  });

  it("produces well-formed SVG across many seeds", () => {
    const seeds = [
      "a",
      "b",
      "test",
      "user@email.com",
      "12345",
      "",
      " ",
      "emoji-test",
    ];
    for (const seed of seeds) {
      const { svg } = generateAvatar({ seed });
      expect(svg).toMatch(/^<svg[\s\S]*<\/svg>$/);
    }
  });
});
