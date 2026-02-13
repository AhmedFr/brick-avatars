import { generateAvatar } from "@brick-avatars/core";
import type { ColorPalette } from "@brick-avatars/core";

export interface HeroAvatar {
  seed: string;
  svg: string;
  palette: ColorPalette;
}

const HERO_SEEDS = [
  "alice",
  "bob",
  "carol",
  "dave",
  "eve",
  "frank",
  "grace",
  "henry",
  "iris",
  "jack",
  "kara",
  "leo",
];

export function getHeroAvatars(): HeroAvatar[] {
  return HERO_SEEDS.map((seed) => {
    const { svg, palette } = generateAvatar({ seed, size: 128 });
    return { seed, svg, palette };
  });
}
