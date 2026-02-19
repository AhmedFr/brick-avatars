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

const stubble: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<circle cx="15" cy="8" r="1.5" fill="${c}"/><circle cx="28" cy="12" r="1.5" fill="${c}"/><circle cx="42" cy="10" r="1.5" fill="${c}"/>
<circle cx="55" cy="8" r="1.5" fill="${c}"/><circle cx="22" cy="18" r="1.5" fill="${c}"/><circle cx="38" cy="20" r="1.5" fill="${c}"/><circle cx="48" cy="16" r="1.5" fill="${c}"/>`;
  return wrap(ctx, 70, 25, inner);
};

const fullBeard: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<path d="M8 0L12 28L28 35L42 28L48 0Z" fill="${c}" stroke="${c}" stroke-width="0.280605"/>
<path d="M52 0L56 28L72 35L88 28L92 0Z" fill="${c}" stroke="${c}" stroke-width="0.280605"/>
<path d="M28 35L42 35L42 42L28 42Z" fill="${c}" stroke="${c}" stroke-width="0.280605"/>`;
  return wrap(ctx, 100, 43, inner);
};

const soulPatch: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<path d="M42 0V18H38V0H42Z" fill="${c}" stroke="${c}" stroke-width="0.280605"/>
<rect x="38" y="14" width="8" height="6" fill="${c}"/>`;
  return wrap(ctx, 94, 22, inner);
};

const sideburns: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<rect x="0" y="0" width="12" height="45" fill="${c}" stroke="${c}" stroke-width="0.280605"/>
<rect x="82" y="0" width="12" height="45" fill="${c}" stroke="${c}" stroke-width="0.280605"/>`;
  return wrap(ctx, 94, 46, inner);
};

const thinMoustache: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<path d="M25 10L0 12L25 14" fill="none" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/>
<path d="M51 10L76 12L51 14" fill="none" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/>`;
  return wrap(ctx, 76, 15, inner);
};

const muttonChops: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<path d="M0 5L8 5L12 35L4 38L0 5Z" fill="${c}" stroke="${c}" stroke-width="0.280605"/>
<path d="M94 5L86 5L82 35L90 38L94 5Z" fill="${c}" stroke="${c}" stroke-width="0.280605"/>`;
  return wrap(ctx, 94, 40, inner);
};

const chinStrap: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<path d="M15 0L12 25L25 32L38 25L42 0" fill="none" stroke="${c}" stroke-width="2.5"/>
<path d="M52 0L56 25L72 32L88 25L92 0" fill="none" stroke="${c}" stroke-width="2.5"/>
<path d="M25 32L38 32L38 38L25 38Z" fill="${c}" stroke="${c}" stroke-width="0.280605"/>`;
  return wrap(ctx, 92, 40, inner);
};

export const facialHairVariants: ComponentSet = [
  moustache,
  moustache2,
  goatee,
];
