import { describe, it, expect } from "vitest";
import { composeSvg } from "../src/composer.js";
import { selectSlots, derivePalette } from "../src/prng.js";
import { defaultRegistry } from "../src/components/index.js";

describe("composeSvg", () => {
  it("returns a valid SVG string", () => {
    const palette = derivePalette("test");
    const selections = selectSlots("test", defaultRegistry);
    const svg = composeSvg({
      selections,
      registry: defaultRegistry,
      palette,
      size: 128,
    });

    expect(svg).toContain("<svg");
    expect(svg).toContain("</svg>");
    expect(svg).toContain('xmlns="http://www.w3.org/2000/svg"');
  });

  it("includes the background rect", () => {
    const palette = derivePalette("bg-test");
    const selections = selectSlots("bg-test", defaultRegistry);
    const svg = composeSvg({
      selections,
      registry: defaultRegistry,
      palette,
      size: 128,
    });

    expect(svg).toContain(palette.background);
  });

  it("respects the size parameter", () => {
    const palette = derivePalette("size-test");
    const selections = selectSlots("size-test", defaultRegistry);
    const svg = composeSvg({
      selections,
      registry: defaultRegistry,
      palette,
      size: 256,
    });

    expect(svg).toContain('width="256"');
    expect(svg).toContain('height="256"');
    expect(svg).toContain('viewBox="0 0 256 256"');
  });

  it("skips disabled slots", () => {
    const palette = derivePalette("skip-test");
    const selections = selectSlots("skip-test", defaultRegistry);
    selections.glasses = { variantIndex: 0, enabled: false };

    const svg = composeSvg({
      selections,
      registry: defaultRegistry,
      palette,
      size: 128,
    });

    expect(svg).not.toContain("glasses");
  });
});
