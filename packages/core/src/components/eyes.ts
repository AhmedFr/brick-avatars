import type { ComponentFn, ComponentSet } from "../types.js";

// LEGO minifig eyes (128x128 viewBox):
//
// Official LEGO face proportions (from BrickNerd design analysis):
//   - Eyes are 2 eye-widths apart
//   - Post-2001 LEGO added white specular highlights inside the black dots
//     to bring the eyes to life
//
// Eye centers: x=48 and x=80, y=55
// Head body: x=19..109 (center=64, width=90)
// Eyes placed at ~1/3 and ~2/3 of face width for authentic feel.

/** Classic Dots — the original 1978 two black dots. No highlights. */
const classicDots: ComponentFn = () => {
  return `<g id="eyes-classic-dots">
    <circle cx="48" cy="55" r="3.5" fill="#1a1a1a"/>
    <circle cx="80" cy="55" r="3.5" fill="#1a1a1a"/>
  </g>`;
};

/** Modern Dots — Post-2001 style with white specular highlights. */
const modernDots: ComponentFn = () => {
  return `<g id="eyes-modern-dots">
    <circle cx="48" cy="55" r="5" fill="#1a1a1a"/>
    <circle cx="49.5" cy="53.5" r="1.5" fill="white" opacity="0.9"/>
    <circle cx="80" cy="55" r="5" fill="#1a1a1a"/>
    <circle cx="81.5" cy="53.5" r="1.5" fill="white" opacity="0.9"/>
  </g>`;
};

/** Oval — Tall oval eyes with highlights. Expressive, used on many themed minifigs. */
const oval: ComponentFn = () => {
  return `<g id="eyes-oval">
    <ellipse cx="48" cy="55" rx="4" ry="5.5" fill="#1a1a1a"/>
    <circle cx="49.5" cy="53" r="1.5" fill="white" opacity="0.9"/>
    <ellipse cx="80" cy="55" rx="4" ry="5.5" fill="#1a1a1a"/>
    <circle cx="81.5" cy="53" r="1.5" fill="white" opacity="0.9"/>
  </g>`;
};

/** Sleepy — Half-closed, horizontal slits. Cool/tired look. */
const sleepy: ComponentFn = () => {
  return `<g id="eyes-sleepy">
    <ellipse cx="48" cy="56" rx="5" ry="2.5" fill="#1a1a1a"/>
    <ellipse cx="80" cy="56" rx="5" ry="2.5" fill="#1a1a1a"/>
  </g>`;
};

/** Wide — Large round eyes with highlights. Surprised or cute look. */
const wide: ComponentFn = () => {
  return `<g id="eyes-wide">
    <circle cx="48" cy="55" r="6.5" fill="#1a1a1a"/>
    <circle cx="50" cy="53" r="2" fill="white" opacity="0.9"/>
    <circle cx="80" cy="55" r="6.5" fill="#1a1a1a"/>
    <circle cx="82" cy="53" r="2" fill="white" opacity="0.9"/>
  </g>`;
};

/** Side Glance — Eyes looking to one side, a common LEGO licensed-figure print. */
const sideGlance: ComponentFn = () => {
  return `<g id="eyes-side-glance">
    <ellipse cx="48" cy="55" rx="5" ry="5.5" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
    <circle cx="50" cy="55" r="3" fill="#1a1a1a"/>
    <circle cx="51" cy="54" r="1" fill="white" opacity="0.9"/>
    <ellipse cx="80" cy="55" rx="5" ry="5.5" fill="white" stroke="#1a1a1a" stroke-width="1.5"/>
    <circle cx="82" cy="55" r="3" fill="#1a1a1a"/>
    <circle cx="83" cy="54" r="1" fill="white" opacity="0.9"/>
  </g>`;
};

/** Wink — One open eye, one winking closed. Classic LEGO playful expression. */
const wink: ComponentFn = () => {
  return `<g id="eyes-wink">
    <circle cx="48" cy="55" r="5" fill="#1a1a1a"/>
    <circle cx="49.5" cy="53.5" r="1.5" fill="white" opacity="0.9"/>
    <path d="M 75 56 Q 80 53 85 56" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
  </g>`;
};

export const eyesVariants: ComponentSet = [
  classicDots,
  modernDots,
  oval,
  sleepy,
  wide,
  sideGlance,
  wink,
];
