import type {
  SlotSelections,
  ComponentRegistry,
  ComponentContext,
  ColorPalette,
} from "./types.js";
import { SLOT_RENDER_ORDER } from "./types.js";

export interface ComposerOptions {
  selections: SlotSelections;
  registry: ComponentRegistry;
  palette: ColorPalette;
  size: number;
}

const VIEWBOX = 128;

export function composeSvg(options: ComposerOptions): string {
  const { selections, registry, palette, size } = options;

  const ctx: ComponentContext = {
    palette,
    size: VIEWBOX,
  };

  const layers: string[] = [];

  layers.push(
    `<rect width="${VIEWBOX}" height="${VIEWBOX}" fill="${palette.background}" rx="12"/>`
  );

  for (const slotName of SLOT_RENDER_ORDER) {
    const selection = selections[slotName];
    const variants = registry[slotName];

    if (!selection.enabled || variants.length === 0) continue;

    const variantFn = variants[selection.variantIndex];
    if (!variantFn) continue;

    layers.push(variantFn(ctx));
  }

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${VIEWBOX} ${VIEWBOX}">`,
    ...layers,
    `</svg>`,
  ].join("\n");
}
