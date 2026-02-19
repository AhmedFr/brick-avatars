import type { ComponentFn, ComponentSet } from "../types.js";

const SCALE = 1;
const CENTER_X = 128;

function wrap(ctx: { slotPosition?: { x: number; y: number } }, w: number, _h: number, inner: string): string {
  const pos = ctx.slotPosition ?? { x: CENTER_X, y: 0 };
  return `<g transform="translate(${pos.x - w / 2}, ${pos.y}) scale(${SCALE})">${inner}</g>`;
}

const moustache: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<path d="M25.4556 12.4295V0.223145L0.060791 12.4295H25.4556Z" fill="${c}" stroke="${c}" stroke-width="0.280605"/>
<path d="M28.8229 12.4295V0.223145L54.2177 12.4295H28.8229Z" fill="${c}" stroke="${c}" stroke-width="0.280605"/>`;
  return wrap(ctx, 55, 13, inner);
};

const moustache2: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<path d="M51.2233 12.6278C48.8381 12.6278 48.2769 0.140787 51.2233 0.140869H73.5314C73.5314 0.140869 78.9121 0.646437 80.5465 4.63055C82.1809 8.61466 86.5621 28.8056 93.4543 33.3926C79.2232 35.1399 73.0468 31.2608 66.3759 12.6278H51.2233Z" fill="${c}" stroke="${c}" stroke-width="0.280605"/>
<path d="M42.6242 12.6278C45.0093 12.6278 45.5705 0.140787 42.6242 0.140869H20.316C20.316 0.140869 14.9353 0.646437 13.3009 4.63055C11.6665 8.61466 7.28536 28.8056 0.393066 33.3926C14.6242 35.1399 20.8006 31.2608 27.4715 12.6278H42.6242Z" fill="${c}" stroke="${c}" stroke-width="0.280605"/>`;
  return wrap(ctx, 94, 34, inner);
};

const goatee: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<rect x="0.117554" y="50.4597" width="20.7648" height="9.54058" fill="${c}"/>
<rect x="0.117554" y="47.9341" width="2.52545" height="2.52545" fill="${c}"/>
<rect x="3.76538" y="47.9341" width="2.52545" height="2.52545" fill="${c}"/>
<rect x="7.41333" y="47.9341" width="2.52545" height="2.52545" fill="${c}"/>
<rect x="11.0612" y="47.9341" width="2.52545" height="2.52545" fill="${c}"/>
<rect x="14.709" y="47.9341" width="2.52545" height="2.52545" fill="${c}"/>
<rect x="18.3569" y="47.9341" width="2.52545" height="2.52545" fill="${c}"/>`;
  return wrap(ctx, 21, 60, inner);
};

export const facialHairVariants: ComponentSet = [
  moustache,
  moustache2,
  goatee,
];
