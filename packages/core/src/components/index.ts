import type { ComponentRegistry } from "../types.js";
import { eyesVariants } from "./eyes.js";
import { facialHairVariants } from "./facialHair.js";
import { frecklesVariants } from "./freckles.js";
import { glassesVariants } from "./glasses.js";
import { hairVariants } from "./hair.js";
import { mouthVariants } from "./mouth.js";

export const defaultRegistry: ComponentRegistry = {
  eyes: eyesVariants,
  mouth: mouthVariants,
  hair: hairVariants,
  facialHair: facialHairVariants,
  glasses: glassesVariants,
  freckles: frecklesVariants,
};
