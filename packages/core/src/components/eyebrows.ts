import type { ComponentFn, ComponentSet } from "../types.js";

// LEGO minifig eyebrow placement (128x128 viewBox):
// Eyes at x=48/80, y=55. Eyebrows sit at y=42 to y=48.
// Eyebrows span roughly from outer-face to nose-bridge above each eye.
// Left brow: ~x=38..56, Right brow: ~x=72..90

/** Classic Tapered — The iconic 'standard' look. Thicker toward the nose. */
const classic: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-classic">
    <path d="M 38 46 Q 48 44 56 45.5" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M 72 45.5 Q 80 44 90 46" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round"/>
  </g>`;
};

/** High Arch — Used for expressive characters or licensed 'hero' types. */
const arched: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-arched">
    <path d="M 37 48 C 37 48, 46 39, 57 45" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
    <path d="M 71 45 C 82 39, 91 48, 91 48" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
  </g>`;
};

/** Grumpy/Angry — Angled sharply downward toward the outer edges. */
const grumpy: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-grumpy">
    <path d="M 38 42 Q 48 47 56 49" fill="none" stroke="${c}" stroke-width="3.8" stroke-linecap="round"/>
    <path d="M 72 49 Q 80 47 90 42" fill="none" stroke="${c}" stroke-width="3.8" stroke-linecap="round"/>
  </g>`;
};

/** Concerned/Worried — High inner peaks, common in comedy-style figures. */
const worried: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-worried">
    <path d="M 38 50 Q 48 44 56 41" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
    <path d="M 72 41 Q 80 44 90 50" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
  </g>`;
};

/** The 'Bushy' — For older or more rugged characters. */
const bushy: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-bushy">
    <path d="M 36 47 Q 48 42 58 47" fill="none" stroke="${c}" stroke-width="5.5" stroke-linecap="round"/>
    <path d="M 70 47 Q 80 42 92 47" fill="none" stroke="${c}" stroke-width="5.5" stroke-linecap="round"/>
  </g>`;
};

/** Cocked/Skeptical — One up, one down. Very classic 'Han Solo' vibe. */
const skeptical: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-skeptical">
    <path d="M 38 43 Q 48 41 56 43" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
    <path d="M 72 49 Q 80 48 90 49" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
  </g>`;
};

/** Delicate / Feminine Arch — Thinner, graceful curves typical of classic female minifigures. */
const delicate: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-delicate">
    <path d="M 38 46 Q 47 41 55 45" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M 73 45 Q 81 41 90 46" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
  </g>`;
};

/** Determined / Action Hero — Low, thick, and relatively flat but angled slightly inward. */
const determined: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-determined">
    <path d="M 38 45 Q 48 46 56 47.5" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/>
    <path d="M 72 47.5 Q 80 46 90 45" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/>
  </g>`;
};

/** Villainous — Sharp, highly arched angles (often seen on Sith Lords or classic bad guys). */
const villainous: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-villainous">
    <path d="M 38 48 L 48 40 L 56 45" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 72 45 L 80 40 L 90 48" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>`;
};

/** Sad / Pouting — Extreme outer droop, high inner corners. Great for dramatic expressions. */
const sad: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-sad">
    <path d="M 37 52 C 40 44, 50 44, 56 47" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
    <path d="M 72 47 C 78 44, 88 44, 91 52" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
  </g>`;
};

/** Confident / Arrogant — One flat/lowered brow, one highly arched brow. The classic smirk companion. */
const confident: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-confident">
    <path d="M 38 47 Q 48 46.5 56 48" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M 72 44 C 78 37, 86 38, 91 46" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round"/>
  </g>`;
};

export const eyebrowsVariants: ComponentSet = [
  classic,
  arched,
  grumpy,
  worried,
  bushy,
  skeptical,
  delicate,
  determined,
  villainous,
  sad,
  confident,
];
