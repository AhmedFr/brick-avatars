import { murmurhash3 } from "./hash.js";
import type {
  ColorPalette,
  ComponentRegistry,
  SlotName,
  SlotSelections,
} from "./types.js";

const REQUIRED_SLOTS: Set<SlotName> = new Set(["eyes", "mouth"]);

const OPTIONAL_SLOT_PROBABILITY: Partial<Record<SlotName, number>> = {
  facialHair: 0.3,
  glasses: 0.25,
  hair: 0.5,
  freckles: 0.3,
};

export function selectSlots(
  seed: string,
  registry: ComponentRegistry,
): SlotSelections {
  const selections = {} as SlotSelections;

  for (const slotName of Object.keys(registry) as SlotName[]) {
    const variants = registry[slotName];
    const hash = murmurhash3(`${seed}:${slotName}`);
    const variantIndex = variants.length > 0 ? hash % variants.length : 0;

    let enabled = true;
    if (!REQUIRED_SLOTS.has(slotName)) {
      const enableHash = murmurhash3(`${seed}:${slotName}:enabled`);
      const probability = OPTIONAL_SLOT_PROBABILITY[slotName] ?? 0.5;
      enabled = (enableHash % 1000) / 1000 < probability;
    }

    selections[slotName] = { variantIndex, enabled };
  }

  return selections;
}

const SKIN_TONES = ["#FFDD15"];

const HAIR_COLORS = [
  "#000000",
  "#FF0009",
  "#844D26",
  "#C4A574",
  "#E8D5B7",
  "#4A3728",
  "#6B4423",
  "#9CA3AF",
  "#1E3A5F",
  "#5B21B6",
];

const ACCENT_COLORS = [
  "#EF4444",
  "#F97316",
  "#EAB308",
  "#22C55E",
  "#3B82F6",
  "#8B5CF6",
  "#EC4899",
  "#6B7280",
];

const BACKGROUND_COLORS = ["#FFFFFF"];

export function derivePalette(
  seed: string,
  overrides?: Partial<ColorPalette>,
): ColorPalette {
  const skinHash = murmurhash3(`${seed}:skin`);
  const hairHash = murmurhash3(`${seed}:hair`);
  const accentHash = murmurhash3(`${seed}:accent`);
  const bgHash = murmurhash3(`${seed}:background`);

  return {
    skin: overrides?.skin ?? SKIN_TONES[skinHash % SKIN_TONES.length],
    hair: overrides?.hair ?? HAIR_COLORS[hairHash % HAIR_COLORS.length],
    accent:
      overrides?.accent ?? ACCENT_COLORS[accentHash % ACCENT_COLORS.length],
    background:
      overrides?.background ??
      BACKGROUND_COLORS[bgHash % BACKGROUND_COLORS.length],
  };
}
