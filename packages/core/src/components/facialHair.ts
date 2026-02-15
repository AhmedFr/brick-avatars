import type { ComponentFn, ComponentSet } from "../types.js";

// LEGO minifig facial hair (128x128 viewBox):
// Sits on the lower face, around and below the mouth region.
// Mouth center at x=64, y≈74-77. Chin at y≈90. Jaw edge at y≈97.
// Eyes at x=48/80, y=55.
// Uses ctx.palette.hair for color, matching eyebrows.

/**
 * Classic Beard — The iconic full-face printed beard.
 * A rounded trapezoidal shape covering the chin area,
 * similar to the original Castle/Pirate minifig beards.
 */
const classicBeard: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="facial-hair-classic-beard">
    <path d="M 38 68 Q 38 65 42 64 L 50 63 Q 52 68 64 68 Q 76 68 78 63 L 86 64 Q 90 65 90 68 L 90 82 Q 90 95 64 95 Q 38 95 38 82 Z" fill="${c}" opacity="0.9"/>
  </g>`;
};

/**
 * Goatee — Small pointed beard on the chin.
 * Common on many licensed minifigs (Tony Stark, etc.).
 */
const goatee: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="facial-hair-goatee">
    <path d="M 56 72 Q 56 70 59 69 L 69 69 Q 72 70 72 72 L 72 80 Q 72 91 64 91 Q 56 91 56 80 Z" fill="${c}" opacity="0.9"/>
  </g>`;
};

/**
 * Stubble — Five-o'clock shadow dots.
 * Subtle printed texture on the chin and jaw area, like many modern City minifigs.
 */
const stubble: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="facial-hair-stubble" opacity="0.35">
    <circle cx="48" cy="78" r="1" fill="${c}"/>
    <circle cx="53" cy="81" r="1" fill="${c}"/>
    <circle cx="58" cy="83" r="1" fill="${c}"/>
    <circle cx="64" cy="84" r="1" fill="${c}"/>
    <circle cx="70" cy="83" r="1" fill="${c}"/>
    <circle cx="75" cy="81" r="1" fill="${c}"/>
    <circle cx="80" cy="78" r="1" fill="${c}"/>
    <circle cx="50" cy="85" r="1" fill="${c}"/>
    <circle cx="56" cy="87" r="1" fill="${c}"/>
    <circle cx="64" cy="88" r="1" fill="${c}"/>
    <circle cx="72" cy="87" r="1" fill="${c}"/>
    <circle cx="78" cy="85" r="1" fill="${c}"/>
    <circle cx="45" cy="74" r="1" fill="${c}"/>
    <circle cx="83" cy="74" r="1" fill="${c}"/>
    <circle cx="54" cy="90" r="1" fill="${c}"/>
    <circle cx="64" cy="92" r="1" fill="${c}"/>
    <circle cx="74" cy="90" r="1" fill="${c}"/>
  </g>`;
};

/**
 * Moustache — Classic handlebar moustache.
 * Inspired by the original LEGO police officer and cowboy minifigs.
 * Centered below nose, above mouth.
 */
const moustache: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="facial-hair-moustache">
    <path d="M 48 70 Q 50 68 56 68 Q 62 68 64 71 Q 66 68 72 68 Q 78 68 80 70 Q 82 72 80 74 Q 76 76 72 74 Q 68 73 64 76 Q 60 73 56 74 Q 52 76 48 74 Q 46 72 48 70 Z" fill="${c}" opacity="0.9"/>
  </g>`;
};

/**
 * Full Beard — Large bushy beard covering most of the lower face.
 * The Hagrid / Blacksmith / Dwarf style, a LEGO staple since Castle sets.
 */
const fullBeard: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="facial-hair-full-beard">
    <path d="M 34 62 Q 34 58 40 60 Q 48 62 56 62 L 64 63 L 72 62 Q 80 62 88 60 Q 94 58 94 62 L 94 78 Q 94 97 64 97 Q 34 97 34 78 Z" fill="${c}" opacity="0.9"/>
    <path d="M 48 68 Q 56 66 64 68 Q 72 66 80 68" fill="none" stroke="${c}" stroke-width="1" opacity="0.3"/>
  </g>`;
};

/**
 * Moustache & Goatee — The Van Dyke combo.
 * Seen on many villain, wizard, and musketeer minifigs.
 */
const moustacheGoatee: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="facial-hair-moustache-goatee">
    <path d="M 48 70 Q 50 68 56 68 Q 62 68 64 71 Q 66 68 72 68 Q 78 68 80 70 Q 82 72 80 74 Q 76 76 72 74 Q 68 73 64 76 Q 60 73 56 74 Q 52 76 48 74 Q 46 72 48 70 Z" fill="${c}" opacity="0.9"/>
    <path d="M 58 77 Q 58 76 60 76 L 68 76 Q 70 76 70 77 L 70 84 Q 70 92 64 92 Q 58 92 58 84 Z" fill="${c}" opacity="0.9"/>
  </g>`;
};

/**
 * Sideburns — Mutton chops / sideburns only.
 * Seen on classic LEGO Town and Western minifigs.
 * Hugs the head shape along the jaw line.
 */
const sideburns: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  return `<g id="facial-hair-sideburns">
    <path d="M 22 48 Q 22 44 26 46 L 30 50 L 30 76 Q 30 84 36 84 L 34 76 L 34 50 Q 28 44 22 48 Z" fill="${c}" opacity="0.85"/>
    <path d="M 106 48 Q 106 44 102 46 L 98 50 L 98 76 Q 98 84 92 84 L 94 76 L 94 50 Q 100 44 106 48 Z" fill="${c}" opacity="0.85"/>
  </g>`;
};

export const facialHairVariants: ComponentSet = [
  classicBeard,
  goatee,
  stubble,
  moustache,
  fullBeard,
  moustacheGoatee,
  sideburns,
];
