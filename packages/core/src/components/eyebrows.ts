import type { ComponentFn, ComponentSet } from "../types.js";

// LEGO minifig eyebrow placement (128x128 viewBox):
// Eyes at y=55. Eyebrows sit at y=42 to y=48.
// The "Classic" look uses a slight taper (thicker at the inner edge).

/** Classic Tapered — The iconic 'standard' look. Thicker toward the nose. */
const classic: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-classic">
    <path d="M 38 46 Q 46 44 54 45.5" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M 74 45.5 Q 82 44 90 46" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round"/>
  </g>`;
};

/** High Arch — Used for expressive characters or licensed 'hero' types. */
const arched: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-arched">
    <path d="M 37 48 C 37 48, 44 39, 55 45" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
    <path d="M 73 45 C 84 39, 91 48, 91 48" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
  </g>`;
};

/** Grumpy/Angry — Angled sharply with a slight curve to avoid looking like a 'V'. */
const grumpy: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-grumpy">
    <path d="M 38 42 Q 46 47 54 49" fill="none" stroke="${c}" stroke-width="3.8" stroke-linecap="round"/>
    <path d="M 74 49 Q 82 47 90 42" fill="none" stroke="${c}" stroke-width="3.8" stroke-linecap="round"/>
  </g>`;
};

/** Concerned/Worried — High inner peaks, common in comedy-style figures. */
const worried: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-worried">
    <path d="M 38 50 Q 46 44 54 41" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
    <path d="M 74 41 Q 82 44 90 50" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
  </g>`;
};

/** The 'Bushy' — For older or more rugged characters. */
const bushy: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-bushy">
    <path d="M 36 47 Q 46 42 56 47" fill="none" stroke="${c}" stroke-width="5.5" stroke-linecap="round"/>
    <path d="M 72 47 Q 82 42 92 47" fill="none" stroke="${c}" stroke-width="5.5" stroke-linecap="round"/>
  </g>`;
};

/** Cocked/Skeptical — One up, one down. Very classic 'Han Solo' vibe. */
const skeptical: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-skeptical">
    <path d="M 38 43 Q 46 41 54 43" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
    <path d="M 74 49 Q 82 48 90 49" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
  </g>`;
};

/** Delicate / Feminine Arch — Thinner, graceful curves typical of classic female minifigures. */
const delicate: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-delicate">
    <path d="M 38 46 Q 45 41 53 45" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M 75 45 Q 83 41 90 46" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
  </g>`;
};

/** Determined / Action Hero — Low, thick, and relatively flat but angled slightly inward. */
const determined: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-determined">
    <path d="M 38 45 Q 46 46 54 47.5" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/>
    <path d="M 74 47.5 Q 82 46 90 45" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/>
  </g>`;
};

/** Villainous — Sharp, highly arched angles (often seen on Sith Lords or classic bad guys). */
const villainous: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-villainous">
    <path d="M 38 48 L 46 40 L 54 45" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 74 45 L 82 40 L 90 48" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>`;
};

/** Sad / Pouting — Extreme outer droop, high inner corners. Great for dramatic expressions. */
const sad: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-sad">
    <path d="M 37 52 C 40 44, 48 44, 54 47" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
    <path d="M 74 47 C 80 44, 88 44, 91 52" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
  </g>`;
};

/** Confident / Arrogant — One flat/lowered brow, one highly arched brow. The classic smirk companion. */
const confident: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="eyebrows-confident">
    <path d="M 38 47 Q 46 46.5 54 48" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M 74 44 C 80 37, 86 38, 91 46" fill="none" stroke="${c}" stroke-width="3.5" stroke-linecap="round"/>
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
