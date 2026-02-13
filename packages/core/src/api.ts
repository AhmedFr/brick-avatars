import type { GenerateAvatarOptions, GenerateAvatarResult } from "./types.js";
import { defaultRegistry } from "./components/index.js";
import { selectSlots, derivePalette } from "./prng.js";
import { composeSvg } from "./composer.js";

export function generateAvatar(
  options: GenerateAvatarOptions
): GenerateAvatarResult {
  const { seed, size = 128, palette: paletteOverrides } = options;

  const palette = derivePalette(seed, paletteOverrides);
  const selections = selectSlots(seed, defaultRegistry);

  const svg = composeSvg({
    selections,
    registry: defaultRegistry,
    palette,
    size,
  });

  return { svg, selections, palette };
}
