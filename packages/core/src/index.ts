export { generateAvatar } from "./api.js";
export type {
  GenerateAvatarOptions,
  GenerateAvatarResult,
  ColorPalette,
  SlotName,
  SlotSelections,
  ComponentFn,
  ComponentSet,
  ComponentRegistry,
  ComponentContext,
} from "./types.js";
export { defaultRegistry } from "./components/index.js";
export { composeSvg } from "./composer.js";
export { selectSlots, derivePalette } from "./prng.js";
export { renderIconic, getIconicNames } from "./iconic.js";
