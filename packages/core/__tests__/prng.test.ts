import { describe, it, expect } from "vitest";
import { selectSlots, derivePalette } from "../src/prng.js";
import { defaultRegistry } from "../src/components/index.js";

describe("selectSlots", () => {
  it("returns selections for all slots", () => {
    const sel = selectSlots("test-seed", defaultRegistry);
    expect(Object.keys(sel)).toHaveLength(6);
  });

  it("is deterministic", () => {
    const a = selectSlots("ahmed", defaultRegistry);
    const b = selectSlots("ahmed", defaultRegistry);
    expect(a).toEqual(b);
  });

  it("different seeds produce different selections", () => {
    const a = selectSlots("seed-1", defaultRegistry);
    const b = selectSlots("seed-2", defaultRegistry);
    expect(JSON.stringify(a)).not.toBe(JSON.stringify(b));
  });

  it("required slots are always enabled", () => {
    const sel = selectSlots("any-seed", defaultRegistry);
    expect(sel.eyes.enabled).toBe(true);
    expect(sel.mouth.enabled).toBe(true);
  });

  it("variant indices are within bounds", () => {
    const sel = selectSlots("bounds-test", defaultRegistry);
    for (const [slotName, selection] of Object.entries(sel)) {
      const variants = defaultRegistry[slotName as keyof typeof defaultRegistry];
      if (variants.length > 0) {
        expect(selection.variantIndex).toBeGreaterThanOrEqual(0);
        expect(selection.variantIndex).toBeLessThan(variants.length);
      }
    }
  });
});

describe("derivePalette", () => {
  it("is deterministic", () => {
    const a = derivePalette("seed");
    const b = derivePalette("seed");
    expect(a).toEqual(b);
  });

  it("respects overrides", () => {
    const p = derivePalette("seed", { skin: "#FF0000" });
    expect(p.skin).toBe("#FF0000");
  });

  it("returns valid hex colors", () => {
    const p = derivePalette("color-test");
    const hexPattern = /^#[0-9A-Fa-f]{6}$/;
    expect(p.skin).toMatch(hexPattern);
    expect(p.hair).toMatch(hexPattern);
    expect(p.accent).toMatch(hexPattern);
    expect(p.background).toMatch(hexPattern);
  });
});
