import type { ComponentRegistry } from "../types.js";
import { headVariants } from "./head.js";
import { eyesVariants } from "./eyes.js";
import { mouthVariants } from "./mouth.js";
import { eyebrowsVariants } from "./eyebrows.js";

export const defaultRegistry: ComponentRegistry = {
  head: headVariants,
  eyes: eyesVariants,
  eyebrows: eyebrowsVariants,
  mouth: mouthVariants,
  facialHair: [],
  glasses: [],
  headAccessory: [],
  scarsMarks: [],
};
