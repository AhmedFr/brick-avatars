export type SlotName =
  | "head"
  | "eyes"
  | "eyebrows"
  | "mouth"
  | "facialHair"
  | "glasses"
  | "headAccessory"
  | "scarsMarks";

export const SLOT_RENDER_ORDER: SlotName[] = [
  "head",
  "scarsMarks",
  "eyebrows",
  "eyes",
  "mouth",
  "facialHair",
  "glasses",
  "headAccessory",
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
