import type { ComponentFn, ComponentSet } from "../types.js";

const SCALE = 1;
const CENTER_X = 128;

function wrap(ctx: { slotPosition?: { x: number; y: number } }, w: number, _h: number, inner: string): string {
  const pos = ctx.slotPosition ?? { x: CENTER_X, y: 0 };
  return `<g transform="translate(${pos.x - w / 2}, ${pos.y}) scale(${SCALE})">${inner}</g>`;
}

const FRECKLE_COLOR = "#D77732";

const freckles: ComponentFn = (ctx) => {
  const inner = `<circle cx="16.0606" cy="3.21212" r="3.21212" fill="${FRECKLE_COLOR}"/>
<circle cx="3.21212" cy="3.21212" r="3.21212" fill="${FRECKLE_COLOR}"/>
<circle cx="9.63632" cy="9.63619" r="3.21212" fill="${FRECKLE_COLOR}"/>
<circle cx="155.788" cy="3.21212" r="3.21212" fill="${FRECKLE_COLOR}"/>
<circle cx="142.939" cy="3.21212" r="3.21212" fill="${FRECKLE_COLOR}"/>
<circle cx="149.364" cy="9.63619" r="3.21212" fill="${FRECKLE_COLOR}"/>`;
  return wrap(ctx, 159, 13, inner);
};

const frecklesFew: ComponentFn = (ctx) => {
  const inner = `<circle cx="20" cy="5" r="2.5" fill="${FRECKLE_COLOR}"/>
<circle cx="139" cy="5" r="2.5" fill="${FRECKLE_COLOR}"/>`;
  return wrap(ctx, 159, 12, inner);
};

const frecklesDense: ComponentFn = (ctx) => {
  const inner = `<circle cx="8" cy="2" r="2.2" fill="${FRECKLE_COLOR}"/><circle cx="18" cy="4" r="2.2" fill="${FRECKLE_COLOR}"/><circle cx="28" cy="2" r="2.2" fill="${FRECKLE_COLOR}"/>
<circle cx="12" cy="8" r="2.2" fill="${FRECKLE_COLOR}"/><circle cx="22" cy="10" r="2.2" fill="${FRECKLE_COLOR}"/>
<circle cx="128" cy="2" r="2.2" fill="${FRECKLE_COLOR}"/><circle cx="138" cy="4" r="2.2" fill="${FRECKLE_COLOR}"/><circle cx="148" cy="2" r="2.2" fill="${FRECKLE_COLOR}"/>
<circle cx="134" cy="8" r="2.2" fill="${FRECKLE_COLOR}"/><circle cx="144" cy="10" r="2.2" fill="${FRECKLE_COLOR}"/>`;
  return wrap(ctx, 159, 13, inner);
};

const frecklesNoseBridge: ComponentFn = (ctx) => {
  const inner = `<circle cx="76" cy="4" r="2.5" fill="${FRECKLE_COLOR}"/><circle cx="82" cy="6" r="2.5" fill="${FRECKLE_COLOR}"/><circle cx="79" cy="9" r="2.5" fill="${FRECKLE_COLOR}"/>`;
  return wrap(ctx, 159, 12, inner);
};

const frecklesCheeksOnly: ComponentFn = (ctx) => {
  const inner = `<circle cx="25" cy="6" r="3" fill="${FRECKLE_COLOR}"/><circle cx="35" cy="8" r="3" fill="${FRECKLE_COLOR}"/><circle cx="30" cy="11" r="3" fill="${FRECKLE_COLOR}"/>
<circle cx="124" cy="6" r="3" fill="${FRECKLE_COLOR}"/><circle cx="134" cy="8" r="3" fill="${FRECKLE_COLOR}"/><circle cx="129" cy="11" r="3" fill="${FRECKLE_COLOR}"/>`;
  return wrap(ctx, 159, 14, inner);
};

const frecklesScattered: ComponentFn = (ctx) => {
  const inner = `<circle cx="30" cy="2" r="2.2" fill="${FRECKLE_COLOR}"/><circle cx="55" cy="7" r="2.2" fill="${FRECKLE_COLOR}"/><circle cx="90" cy="3" r="2.2" fill="${FRECKLE_COLOR}"/>
<circle cx="166" cy="6" r="2.2" fill="${FRECKLE_COLOR}"/><circle cx="100" cy="10" r="2.2" fill="${FRECKLE_COLOR}"/><circle cx="140" cy="5" r="2.2" fill="${FRECKLE_COLOR}"/>`;
  return wrap(ctx, 159, 13, inner);
};

const frecklesDoubleCluster: ComponentFn = (ctx) => {
  const inner = `<circle cx="20" cy="3" r="2.8" fill="${FRECKLE_COLOR}"/><circle cx="28" cy="3" r="2.8" fill="${FRECKLE_COLOR}"/><circle cx="24" cy="8" r="2.8" fill="${FRECKLE_COLOR}"/>
<circle cx="131" cy="3" r="2.8" fill="${FRECKLE_COLOR}"/><circle cx="139" cy="3" r="2.8" fill="${FRECKLE_COLOR}"/><circle cx="135" cy="8" r="2.8" fill="${FRECKLE_COLOR}"/>`;
  return wrap(ctx, 159, 12, inner);
};

const frecklesSubtle: ComponentFn = (ctx) => {
  const inner = `<circle cx="22" cy="5" r="1.8" fill="${FRECKLE_COLOR}" opacity="0.8"/>
<circle cx="30" cy="6" r="1.8" fill="${FRECKLE_COLOR}" opacity="0.8"/>
<circle cx="129" cy="5" r="1.8" fill="${FRECKLE_COLOR}" opacity="0.8"/>
<circle cx="137" cy="6" r="1.8" fill="${FRECKLE_COLOR}" opacity="0.8"/>`;
  return wrap(ctx, 159, 10, inner);
};

const frecklesWide: ComponentFn = (ctx) => {
  const inner = `<circle cx="5" cy="4" r="3" fill="${FRECKLE_COLOR}"/><circle cx="18" cy="5" r="3" fill="${FRECKLE_COLOR}"/><circle cx="10" cy="10" r="3" fill="${FRECKLE_COLOR}"/>
<circle cx="154" cy="4" r="3" fill="${FRECKLE_COLOR}"/><circle cx="141" cy="5" r="3" fill="${FRECKLE_COLOR}"/><circle cx="149" cy="10" r="3" fill="${FRECKLE_COLOR}"/>`;
  return wrap(ctx, 159, 14, inner);
};

const frecklesSmall: ComponentFn = (ctx) => {
  const inner = `<circle cx="15" cy="4" r="2" fill="${FRECKLE_COLOR}"/><circle cx="24" cy="3" r="2" fill="${FRECKLE_COLOR}"/><circle cx="19" cy="9" r="2" fill="${FRECKLE_COLOR}"/>
<circle cx="144" cy="4" r="2" fill="${FRECKLE_COLOR}"/><circle cx="153" cy="3" r="2" fill="${FRECKLE_COLOR}"/><circle cx="148" cy="9" r="2" fill="${FRECKLE_COLOR}"/>`;
  return wrap(ctx, 159, 12, inner);
};

export const frecklesVariants: ComponentSet = [
  freckles,
  frecklesFew,
  frecklesDense,
  frecklesNoseBridge,
  frecklesCheeksOnly,
  frecklesScattered,
  frecklesDoubleCluster,
  frecklesSubtle,
  frecklesWide,
  frecklesSmall,
];
