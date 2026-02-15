import type { ComponentFn, ComponentSet } from "../types.js";

// LEGO minifig head accessories (128x128 viewBox):
// Rendered LAST (top layer), so they overlay everything.
// Stud top at y=6. Head top at y=21. Head sides x=19 to x=109.
// Head body: x=19, y=21, w=90, h=76, rx=18
// Uses ctx.palette.hair or ctx.palette.accent for color.

/**
 * Classic Cap — The standard LEGO baseball cap.
 * A rounded dome sitting on top of the head with a flat visor in front.
 * The cap covers the stud and sits flush on the head.
 */
const classicCap: ComponentFn = (ctx) => {
  const c = ctx.palette.accent;
  return `<g id="head-accessory-classic-cap">
    <path d="M 22 28 Q 22 10 64 10 Q 106 10 106 28 L 106 30 Q 106 34 98 34 L 30 34 Q 22 34 22 30 Z" fill="${c}"/>
    <path d="M 22 30 L 10 35 Q 6 37 10 39 L 22 36 Z" fill="${c}"/>
    <rect x="22" y="28" width="84" height="3" rx="1" fill="black" opacity="0.08"/>
  </g>`;
};

/**
 * Beanie — Knit winter hat.
 * The classic LEGO knit cap, extends above the stud with a pom-pom.
 */
const beanie: ComponentFn = (ctx) => {
  const c = ctx.palette.accent;
  return `<g id="head-accessory-beanie">
    <path d="M 24 30 Q 24 4 64 4 Q 104 4 104 30 L 104 34 Q 104 38 96 38 L 32 38 Q 24 38 24 34 Z" fill="${c}"/>
    <path d="M 24 32 L 104 32" fill="none" stroke="${c}" stroke-width="4" opacity="0.15"/>
    <path d="M 24 28 L 104 28" fill="none" stroke="${c}" stroke-width="1" opacity="0.2"/>
    <circle cx="64" cy="4" r="5" fill="${c}"/>
    <circle cx="64" cy="4" r="5" fill="white" opacity="0.1"/>
  </g>`;
};

/**
 * Top Hat — Formal tall hat.
 * Classic LEGO gentleman / magician accessory. Tall cylinder with a brim.
 */
const topHat: ComponentFn = (ctx) => {
  const c = ctx.palette.accent;
  return `<g id="head-accessory-top-hat">
    <rect x="40" y="-8" width="48" height="34" rx="4" fill="${c}"/>
    <path d="M 30 26 Q 30 22 36 22 L 92 22 Q 98 22 98 26 L 98 30 Q 98 34 92 34 L 36 34 Q 30 34 30 30 Z" fill="${c}"/>
    <path d="M 42 22 L 86 22" fill="none" stroke="white" stroke-width="2.5" opacity="0.12"/>
    <rect x="40" y="-8" width="48" height="34" rx="4" fill="white" opacity="0.04"/>
  </g>`;
};

/**
 * Hair Short — Classic short cropped LEGO hair piece.
 * The standard male minifig hair from early sets. Smooth dome with side contour.
 */
const hairShort: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="head-accessory-hair-short">
    <path d="M 24 34 Q 24 12 64 12 Q 104 12 104 34 L 104 40 Q 104 42 102 42 L 102 34 Q 102 26 64 26 Q 26 26 26 34 L 26 42 Q 24 42 24 40 Z" fill="${c}"/>
    <path d="M 28 30 Q 64 18 100 30" fill="none" stroke="${c}" stroke-width="1" opacity="0.15"/>
  </g>`;
};

/**
 * Hair Long — Flowing long hair.
 * Classic LEGO female hair piece that drapes down the sides.
 * Covers the stud and extends past the jaw on both sides.
 */
const hairLong: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="head-accessory-hair-long">
    <path d="M 22 34 Q 22 10 64 10 Q 106 10 106 34 L 106 42 Q 106 44 104 44 L 104 34 Q 104 24 64 24 Q 24 24 24 34 L 24 44 Q 22 44 22 42 Z" fill="${c}"/>
    <path d="M 22 42 L 20 72 Q 18 84 24 84 L 26 84 Q 28 84 28 72 L 28 42 Z" fill="${c}"/>
    <path d="M 106 42 L 108 72 Q 110 84 104 84 L 102 84 Q 100 84 100 72 L 100 42 Z" fill="${c}"/>
    <path d="M 22 34 Q 22 38 24 42" fill="none" stroke="white" stroke-width="1" opacity="0.08"/>
  </g>`;
};

/**
 * Mohawk — Punk-style LEGO mohawk.
 * Tall central ridge of hair, tapers to a point. Very iconic collectible-series style.
 */
const mohawk: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="head-accessory-mohawk">
    <path d="M 54 22 Q 54 -6 64 -6 Q 74 -6 74 22 Z" fill="${c}"/>
    <path d="M 56 24 Q 56 6 64 6 Q 72 6 72 24 Z" fill="${c}" opacity="0.8"/>
    <path d="M 58 22 Q 58 10 64 10 Q 70 10 70 22" fill="none" stroke="white" stroke-width="0.8" opacity="0.1"/>
  </g>`;
};

/**
 * Crown — Royal golden crown.
 * The classic LEGO Castle king/queen crown piece with pointed tips and gems.
 */
const crown: ComponentFn = (ctx) => {
  const _ = ctx; // Crown is always gold
  return `<g id="head-accessory-crown">
    <path d="M 30 30 L 30 16 L 40 24 L 50 8 L 64 20 L 78 8 L 88 24 L 98 16 L 98 30 Q 98 34 92 34 L 36 34 Q 30 34 30 30 Z" fill="#FFD700"/>
    <path d="M 30 30 Q 30 34 36 34 L 92 34 Q 98 34 98 30" fill="none" stroke="#DAA520" stroke-width="2"/>
    <circle cx="50" cy="30" r="2.5" fill="#E53935"/>
    <circle cx="64" cy="28" r="2.5" fill="#1E88E5"/>
    <circle cx="78" cy="30" r="2.5" fill="#43A047"/>
    <path d="M 30 30 L 30 16" fill="none" stroke="#FFF8DC" stroke-width="0.8" opacity="0.3"/>
    <path d="M 98 30 L 98 16" fill="none" stroke="#FFF8DC" stroke-width="0.8" opacity="0.3"/>
  </g>`;
};

/**
 * Headband — Simple athletic/ninja headband.
 * Common on LEGO Ninjago and Sports minifigs. Wraps around the head
 * with a trailing tail on one side.
 */
const headband: ComponentFn = (ctx) => {
  const c = ctx.palette.accent;
  return `<g id="head-accessory-headband">
    <path d="M 19 30 Q 19 26 24 26 L 104 26 Q 109 26 109 30 L 109 34 Q 109 38 104 38 L 24 38 Q 19 38 19 34 Z" fill="${c}"/>
    <path d="M 100 32 L 114 38 Q 116 40 114 42 L 100 44 Q 104 40 100 36 Z" fill="${c}"/>
    <path d="M 19 32 L 109 32" fill="none" stroke="white" stroke-width="0.8" opacity="0.1"/>
  </g>`;
};

/**
 * Pirate Hat — Tricorn pirate hat.
 * The iconic LEGO Pirates captain hat, wide brimmed and folded up on the sides.
 */
const pirateHat: ComponentFn = (ctx) => {
  const c = ctx.palette.accent;
  return `<g id="head-accessory-pirate-hat">
    <path d="M 14 30 Q 14 26 20 26 L 108 26 Q 114 26 114 30 L 114 34 Q 114 36 108 36 L 20 36 Q 14 36 14 34 Z" fill="${c}"/>
    <path d="M 28 26 Q 28 4 64 -2 Q 100 4 100 26" fill="${c}"/>
    <path d="M 28 26 Q 28 4 64 -2 Q 100 4 100 26" fill="white" opacity="0.04"/>
    <path d="M 46 16 L 82 16" fill="none" stroke="#FFD700" stroke-width="1.5" opacity="0.7"/>
    <circle cx="64" cy="10" r="3" fill="#FFD700" opacity="0.8"/>
  </g>`;
};

export const headAccessoryVariants: ComponentSet = [
  classicCap,
  beanie,
  topHat,
  hairShort,
  hairLong,
  mohawk,
  crown,
  headband,
  pirateHat,
];
