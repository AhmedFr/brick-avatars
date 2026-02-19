import type { ComponentFn, ComponentSet } from "../types.js";

const SCALE = 1;
const CENTER_X = 128;

function wrap(ctx: { slotPosition?: { x: number; y: number } }, w: number, _h: number, inner: string): string {
  const pos = ctx.slotPosition ?? { x: CENTER_X, y: 0 };
  return `<g transform="translate(${pos.x - w / 2}, ${pos.y}) scale(${SCALE})">${inner}</g>`;
}

const square: ComponentFn = (ctx) => {
  const inner = `<mask id="path-1-inside-1_25_150" fill="white">
<path d="M74.142 4.97041C74.142 2.22532 76.3673 0 79.1124 0H121.775C124.52 0 126.746 2.22533 126.746 4.97041V18.2249C126.746 29.2052 117.844 38.1065 106.864 38.1065H94.0236C83.0433 38.1065 74.142 29.2052 74.142 18.2249V4.97041Z"/>
</mask>
<path d="M74.142 4.97041C74.142 2.22532 76.3673 0 79.1124 0H121.775C124.52 0 126.746 2.22533 126.746 4.97041V18.2249C126.746 29.2052 117.844 38.1065 106.864 38.1065H94.0236C83.0433 38.1065 74.142 29.2052 74.142 18.2249V4.97041Z" fill="none" stroke="black" stroke-width="11.5976" mask="url(#path-1-inside-1_25_150)"/>
<mask id="path-2-inside-2_25_150" fill="white">
<path d="M13.2543 4.97041C13.2543 2.22532 15.4796 0 18.2247 0H60.8874C63.6325 0 65.8578 2.22533 65.8578 4.97041V18.2249C65.8578 29.2052 56.9565 38.1065 45.9762 38.1065H33.1359C22.1556 38.1065 13.2543 29.2052 13.2543 18.2249V4.97041Z"/>
</mask>
<path d="M13.2543 4.97041C13.2543 2.22532 15.4796 0 18.2247 0H60.8874C63.6325 0 65.8578 2.22533 65.8578 4.97041V18.2249C65.8578 29.2052 56.9565 38.1065 45.9762 38.1065H33.1359C22.1556 38.1065 13.2543 29.2052 13.2543 18.2249V4.97041Z" fill="none" stroke="black" stroke-width="11.5976" mask="url(#path-2-inside-2_25_150)"/>
<path d="M0 10.355C0 8.75368 1.29811 7.45557 2.89941 7.45557H13.2544V13.2544H2.89941C1.29811 13.2544 0 11.9563 0 10.355V10.355Z"  stroke="black"/>
<path d="M126.746 7.45557H137.101C138.702 7.45557 140 8.75368 140 10.355V10.355C140 11.9563 138.702 13.2544 137.101 13.2544H126.746V7.45557Z"  stroke="black"/>
<rect x="65.858" y="7.45557" width="8.28402" height="5.79882" stroke="black"/>`;
  return wrap(ctx, 140, 39, inner);
};

const round: ComponentFn = (ctx) => {
  const inner = `<circle cx="37" cy="19" r="22" fill="none" stroke="black" stroke-width="11.6"/>
<circle cx="103" cy="19" r="22" fill="none" stroke="black" stroke-width="11.6"/>
<path d="M59 19H77" stroke="black" stroke-width="11.6" stroke-linecap="round"/>`;
  return wrap(ctx, 140, 42, inner);
};

const catEye: ComponentFn = (ctx) => {
  const inner = `<path d="M15 19Q15 0 37 0Q59 0 59 19Q59 38 37 38Q15 38 15 19Z" fill="none" stroke="black" stroke-width="11.6"/>
<path d="M81 19Q81 0 103 0Q125 0 125 19Q125 38 103 38Q81 38 81 19Z" fill="none" stroke="black" stroke-width="11.6"/>
<path d="M59 19H77" stroke="black" stroke-width="11.6" stroke-linecap="round"/>`;
  return wrap(ctx, 140, 40, inner);
};

const aviator: ComponentFn = (ctx) => {
  const inner = `<ellipse cx="35" cy="19" rx="28" ry="14" fill="none" stroke="black" stroke-width="11.6"/>
<ellipse cx="101" cy="19" rx="28" ry="14" fill="none" stroke="black" stroke-width="11.6"/>
<path d="M63 19H73" stroke="black" stroke-width="11.6" stroke-linecap="round"/>
<path d="M63 8L70 19L77 8" stroke="black" stroke-width="6" fill="none"/>`;
  return wrap(ctx, 140, 38, inner);
};

const narrowRect: ComponentFn = (ctx) => {
  const inner = `<rect x="8" y="4" width="38" height="28" rx="4" fill="none" stroke="black" stroke-width="11.6"/>
<rect x="94" y="4" width="38" height="28" rx="4" fill="none" stroke="black" stroke-width="11.6"/>
<path d="M46 18H90" stroke="black" stroke-width="11.6" stroke-linecap="round"/>`;
  return wrap(ctx, 140, 36, inner);
};

const monocle: ComponentFn = (ctx) => {
  const inner = `<circle cx="70" cy="19" r="28" fill="none" stroke="black" stroke-width="11.6"/>
<circle cx="70" cy="0" r="4" fill="none" stroke="black" stroke-width="6"/>`;
  return wrap(ctx, 140, 48, inner);
};

const thickFrames: ComponentFn = (ctx) => {
  const inner = `<rect x="10" y="2" width="48" height="34" rx="6" fill="none" stroke="black" stroke-width="14"/>
<rect x="82" y="2" width="48" height="34" rx="6" fill="none" stroke="black" stroke-width="14"/>
<rect x="58" y="16" width="16" height="6" stroke="black" stroke-width="14"/>`;
  return wrap(ctx, 140, 38, inner);
};

const thinWire: ComponentFn = (ctx) => {
  const inner = `<circle cx="38" cy="19" r="20" fill="none" stroke="black" stroke-width="4"/>
<circle cx="102" cy="19" r="20" fill="none" stroke="black" stroke-width="4"/>
<path d="M58 19H82" stroke="black" stroke-width="4" stroke-linecap="round"/>`;
  return wrap(ctx, 140, 42, inner);
};

const oversized: ComponentFn = (ctx) => {
  const inner = `<circle cx="35" cy="22" r="32" fill="none" stroke="black" stroke-width="11.6"/>
<circle cx="105" cy="22" r="32" fill="none" stroke="black" stroke-width="11.6"/>
<path d="M67 22H73" stroke="black" stroke-width="11.6" stroke-linecap="round"/>`;
  return wrap(ctx, 140, 55, inner);
};

const hexagon: ComponentFn = (ctx) => {
  const inner = `<path d="M37 0L59 0L70 19L59 38L37 38L26 19Z" fill="none" stroke="black" stroke-width="11.6"/>
<path d="M81 0L103 0L114 19L103 38L81 38L70 19Z" fill="none" stroke="black" stroke-width="11.6"/>
<path d="M59 19H81" stroke="black" stroke-width="11.6" stroke-linecap="round"/>`;
  return wrap(ctx, 140, 40, inner);
};

export const glassesVariants: ComponentSet = [
  square,
];
