export type SlotName =
  | "eyes"
  | "mouth"
  | "facialHair"
  | "glasses"
  | "hair"
  | "freckles";

export const SLOT_RENDER_ORDER: SlotName[] = [
  "eyes",
  "mouth",
  "facialHair",
  "freckles",
  "glasses",
  "hair",
];

export interface ColorPalette {
  skin: string;
  hair: string;
  accent: string;
  background: string;
}

export interface ComponentContext {
  palette: ColorPalette;
  size: number;
  /** Slot selections — allows components to adapt based on what else is active. */
  selections: SlotSelections;
  /** Position (center x, top y) for the current slot in 256 space. Set by composer. */
  slotPosition?: { x: number; y: number };
}

export type ComponentFn = (ctx: ComponentContext) => string;

export type ComponentSet = ComponentFn[];

export type ComponentRegistry = Record<SlotName, ComponentSet>;

export interface SlotSelection {
  variantIndex: number;
  enabled: boolean;
}

export type SlotSelections = Record<SlotName, SlotSelection>;

export type OutputFormat = "svg";

export interface GenerateAvatarOptions {
  seed: string;
  size?: number;
  format?: OutputFormat;
  palette?: Partial<ColorPalette>;
}

export interface GenerateAvatarResult {
  svg: string;
  selections: SlotSelections;
  palette: ColorPalette;
}
