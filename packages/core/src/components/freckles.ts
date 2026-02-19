import type { ComponentFn, ComponentSet } from "../types.js";

const SCALE = 1;
const CENTER_X = 128;

function wrap(ctx: { slotPosition?: { x: number; y: number } }, w: number, _h: number, inner: string): string {
  const pos = ctx.slotPosition ?? { x: CENTER_X, y: 0 };
  return `<g transform="translate(${pos.x - w / 2}, ${pos.y}) scale(${SCALE})">${inner}</g>`;
}

const freckles: ComponentFn = (ctx) => {
  const inner = `<circle cx="16.0606" cy="3.21212" r="3.21212" fill="#D77732"/>
<circle cx="3.21212" cy="3.21212" r="3.21212" fill="#D77732"/>
<circle cx="9.63632" cy="9.63619" r="3.21212" fill="#D77732"/>
<circle cx="155.788" cy="3.21212" r="3.21212" fill="#D77732"/>
<circle cx="142.939" cy="3.21212" r="3.21212" fill="#D77732"/>
<circle cx="149.364" cy="9.63619" r="3.21212" fill="#D77732"/>`;
  return wrap(ctx, 159, 13, inner);
};

export const frecklesVariants: ComponentSet = [
  freckles,
];
