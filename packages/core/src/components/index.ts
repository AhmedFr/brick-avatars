import type { ComponentRegistry } from "../types.js";
import { headVariants } from "./head.js";
import { eyesVariants } from "./eyes.js";
import { mouthVariants } from "./mouth.js";
import { eyebrowsVariants } from "./eyebrows.js";
import { facialHairVariants } from "./facialHair.js";
import { glassesVariants } from "./glasses.js";
import { headAccessoryVariants } from "./headAccessory.js";
import { scarsMarksVariants } from "./scarsMarks.js";

export const defaultRegistry: ComponentRegistry = {
  head: headVariants,
  eyes: eyesVariants,
  eyebrows: eyebrowsVariants,
  mouth: mouthVariants,
  facialHair: facialHairVariants,
  glasses: glassesVariants,
  headAccessory: headAccessoryVariants,
  scarsMarks: scarsMarksVariants,
};
