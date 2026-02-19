import type { SlotName, SlotSelections } from "@brick-avatars/core";
import { defaultRegistry } from "@brick-avatars/core";

const SLOT_NAMES: SlotName[] = [
  "eyes",
  "mouth",
  "facialHair",
  "freckles",
  "glasses",
  "hair",
];

export const PARTS_PAGE_SLOTS = SLOT_NAMES;

export function getVariantCount(slot: SlotName): number {
  return defaultRegistry[slot].length;
}

export function buildSelectionsForPart(
  slot: SlotName,
  variantIndex: number
): SlotSelections {
  const selections: SlotSelections = {} as SlotSelections;
  for (const name of SLOT_NAMES) {
    const enabled =
      name === slot || name === "eyes" || name === "mouth";
    selections[name] = {
      variantIndex: name === slot ? variantIndex : 0,
      enabled,
    };
  }
  return selections;
}

export function getSlotLabel(slot: SlotName): string {
  return slot === "facialHair"
    ? "Facial hair"
    : slot.charAt(0).toUpperCase() + slot.slice(1);
}
