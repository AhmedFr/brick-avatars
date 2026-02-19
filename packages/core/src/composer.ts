import { head } from "./components/head.js";
import type {
  ColorPalette,
  ComponentContext,
  ComponentRegistry,
  SlotName,
  SlotSelections,
} from "./types.js";
import { SLOT_RENDER_ORDER } from "./types.js";

export interface ComposerOptions {
  selections: SlotSelections;
  registry: ComponentRegistry;
  palette: ColorPalette;
  size: number;
}

const VIEWBOX = 256;

/** Top of head shape (y) in 256 space. Slot Y positions are derived from this. */
export const HEAD_TOP_Y = 52;

const SLOT_Y: Record<SlotName, number> = {
  hair: HEAD_TOP_Y + 5,
  eyes: HEAD_TOP_Y + 56,
  glasses: HEAD_TOP_Y + 50,
  freckles: HEAD_TOP_Y + 76,
  mouth: HEAD_TOP_Y + 120,
  facialHair: HEAD_TOP_Y + 105,
};

export function composeSvg(options: ComposerOptions): string {
  const { selections, registry, palette, size } = options;

  const ctx: ComponentContext = {
    palette,
    size: VIEWBOX,
    selections,
  };

  const layers: string[] = [];

  layers.push(
    `<rect width="${VIEWBOX}" height="${VIEWBOX}" fill="${palette.background}" rx="12"/>`,
  );

  layers.push(head(ctx));

  for (const slotName of SLOT_RENDER_ORDER) {
    const selection = selections[slotName];
    const variants = registry[slotName];

    if (!selection.enabled || variants.length === 0) continue;

    const variantFn = variants[selection.variantIndex];
    if (!variantFn) continue;

    ctx.slotPosition = { x: VIEWBOX / 2, y: SLOT_Y[slotName] };
    layers.push(variantFn(ctx));
  }

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${VIEWBOX} ${VIEWBOX}">`,
    ...layers,
    `</svg>`,
  ].join("\n");
}
