import type { ComponentFn, ComponentSet } from "../types.js";

// LEGO minifig glasses (128x128 viewBox):
// Sit at eye level: eyes at cx=48/80, cy=55.
// Rendered AFTER eyes in layer order so frames overlay correctly.
// Uses ctx.palette.accent for frame color where appropriate.
// Head body: x=19..109, so temples extend to ~x=24 and ~x=104.

/**
 * Classic Round — The original LEGO round glasses.
 * Two perfect circles connected by a bridge, seen on professors and scientists.
 */
const classicRound: ComponentFn = (ctx) => {
  const c = ctx.palette.accent;
  return `<g id="glasses-classic-round">
    <circle cx="48" cy="55" r="11" fill="none" stroke="${c}" stroke-width="2.5"/>
    <circle cx="80" cy="55" r="11" fill="none" stroke="${c}" stroke-width="2.5"/>
    <path d="M 59 55 L 69 55" fill="none" stroke="${c}" stroke-width="2.5"/>
    <path d="M 37 55 L 26 52" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
    <path d="M 91 55 L 102 52" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
  </g>`;
};

/**
 * Square / Nerd — Rectangular frames.
 * Classic LEGO "nerd" look, seen on many City and Creator minifigs.
 */
const square: ComponentFn = (ctx) => {
  const c = ctx.palette.accent;
  return `<g id="glasses-square">
    <rect x="36" y="47" width="24" height="16" rx="3" fill="none" stroke="${c}" stroke-width="2.5"/>
    <rect x="68" y="47" width="24" height="16" rx="3" fill="none" stroke="${c}" stroke-width="2.5"/>
    <path d="M 60 53 L 68 53" fill="none" stroke="${c}" stroke-width="2.5"/>
    <path d="M 36 53 L 26 50" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
    <path d="M 92 53 L 102 50" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
  </g>`;
};

/**
 * Sunglasses — Dark opaque lenses.
 * The classic LEGO cop/pilot/cool-guy shades. Clean rectangular shape.
 */
const sunglasses: ComponentFn = () => {
  return `<g id="glasses-sunglasses">
    <path d="M 34 50 Q 34 46 38 46 L 56 46 Q 60 46 60 50 L 60 58 Q 60 64 54 64 L 40 64 Q 34 64 34 58 Z" fill="#1a1a1a" opacity="0.85"/>
    <path d="M 68 50 Q 68 46 72 46 L 90 46 Q 94 46 94 50 L 94 58 Q 94 64 88 64 L 74 64 Q 68 64 68 58 Z" fill="#1a1a1a" opacity="0.85"/>
    <path d="M 60 52 L 68 52" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
    <path d="M 34 50 L 26 48" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
    <path d="M 94 50 L 102 48" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
  </g>`;
};

/**
 * Aviator — Wire-frame aviator sunglasses with tinted lenses.
 * Inspired by LEGO Top Gun / Police pilot minifigs.
 * Distinctive teardrop-shaped lenses.
 */
const aviator: ComponentFn = (ctx) => {
  const c = ctx.palette.accent;
  return `<g id="glasses-aviator">
    <path d="M 34 50 Q 34 45 40 45 L 54 45 Q 60 45 60 50 L 59 60 Q 57 66 48 66 Q 38 66 36 60 Z" fill="#1a1a1a" opacity="0.25"/>
    <path d="M 34 50 Q 34 45 40 45 L 54 45 Q 60 45 60 50 L 59 60 Q 57 66 48 66 Q 38 66 36 60 Z" fill="none" stroke="${c}" stroke-width="2"/>
    <path d="M 68 50 Q 68 45 74 45 L 88 45 Q 94 45 94 50 L 93 60 Q 91 66 80 66 Q 70 66 68 60 Z" fill="#1a1a1a" opacity="0.25"/>
    <path d="M 68 50 Q 68 45 74 45 L 88 45 Q 94 45 94 50 L 93 60 Q 91 66 80 66 Q 70 66 68 60 Z" fill="none" stroke="${c}" stroke-width="2"/>
    <path d="M 60 50 L 68 50" fill="none" stroke="${c}" stroke-width="2"/>
    <path d="M 34 50 L 26 48" fill="none" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M 94 50 L 102 48" fill="none" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/>
  </g>`;
};

/**
 * Monocle — Single round lens on the right eye.
 * Seen on LEGO gentleman, butler, and Victorian-era minifigs.
 * Chain hangs down toward the chest.
 */
const monocle: ComponentFn = (ctx) => {
  const c = ctx.palette.accent;
  return `<g id="glasses-monocle">
    <circle cx="80" cy="55" r="11" fill="none" stroke="${c}" stroke-width="2.5"/>
    <path d="M 80 66 L 80 80 Q 80 84 76 84" fill="none" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/>
  </g>`;
};

/**
 * Visor — Sci-fi single-piece visor.
 * Inspired by LEGO Space, Cyclops, and futuristic minifigs.
 * Wraps across the full face width.
 */
const visor: ComponentFn = (ctx) => {
  const c = ctx.palette.accent;
  return `<g id="glasses-visor">
    <path d="M 30 49 Q 30 44 36 44 L 92 44 Q 98 44 98 49 L 98 58 Q 98 64 92 64 L 36 64 Q 30 64 30 58 Z" fill="${c}" opacity="0.35"/>
    <path d="M 30 49 Q 30 44 36 44 L 92 44 Q 98 44 98 49 L 98 58 Q 98 64 92 64 L 36 64 Q 30 64 30 58 Z" fill="none" stroke="${c}" stroke-width="2.5"/>
    <path d="M 32 48 L 96 48" fill="none" stroke="white" stroke-width="1" opacity="0.2"/>
  </g>`;
};

export const glassesVariants: ComponentSet = [
  classicRound,
  square,
  sunglasses,
  aviator,
  monocle,
  visor,
];
