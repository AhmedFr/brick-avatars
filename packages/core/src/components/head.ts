import type { ComponentContext, ComponentFn, ComponentSet } from "../types.js";

// LEGO minifig head geometry (128x128 viewBox)
//
// Real LEGO heads have visible gaps/steps between the three parts:
//   - The stud sits ON TOP with a gap before the head body
//   - The neck sits BELOW with a gap after the head body
//   - Background shows through in both gaps
//
// When a head accessory (hat, hair, crown, etc.) is active, the stud
// is hidden — just like real LEGO where the accessory clips over it.
//
// Layout with gaps:
//   Stud:       x=48  y=6   w=32  h=13  rx=4
//   GAP:        2px of background showing (y=19 to y=21)
//   Head body:  x=19  y=21  w=90  h=76  rx=18
//   GAP:        2px of background showing (y=97 to y=99)
//   Neck:       x=40  y=99  w=48  h=14  rx=3

function headShape(skin: string, showStud: boolean): string {
  const stud = showStud
    ? `<path d="M 48 19 L 48 10 Q 48 6 52 6 L 76 6 Q 80 6 80 10 L 80 19 Z" fill="${skin}"/>`
    : "";
  const neck = `<rect x="40" y="99" width="48" height="14" fill="${skin}"/>`;
  const head = `<rect x="19" y="21" width="90" height="76" rx="18" fill="${skin}"/>`;

  return [neck, head, stud].filter(Boolean).join("\n    ");
}

function hasHeadAccessory(ctx: ComponentContext): boolean {
  return ctx.selections.headAccessory?.enabled === true;
}

const classic: ComponentFn = (ctx) => {
  return `<g id="head-classic">
    ${headShape(ctx.palette.skin, !hasHeadAccessory(ctx))}
  </g>`;
};

const shaded: ComponentFn = (ctx) => {
  return `<g id="head-shaded">
    ${headShape(ctx.palette.skin, !hasHeadAccessory(ctx))}
    <rect x="19" y="25" width="6" height="68" rx="3" fill="white" opacity="0.08"/>
    <rect x="103" y="25" width="6" height="68" rx="3" fill="black" opacity="0.05"/>
  </g>`;
};

const glossy: ComponentFn = (ctx) => {
  return `<g id="head-glossy">
    ${headShape(ctx.palette.skin, !hasHeadAccessory(ctx))}
    <ellipse cx="54" cy="36" rx="14" ry="7" fill="white" opacity="0.12"/>
  </g>`;
};

export const headVariants: ComponentSet = [classic, shaded, glossy];
