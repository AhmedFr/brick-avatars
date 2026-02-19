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

export const glassesVariants: ComponentSet = [
  square,
];
