import type { ComponentFn, ComponentSet } from "../types.js";

// LEGO minifig eyes — all black, "printed on" the head surface.
// Eye centers: x=46 and x=82, y=55

/** Classic Dots — the original 1978 two black dots. */
const classicDots: ComponentFn = () => {
  return `<g id="eyes-classic-dots">
    <circle cx="46" cy="55" r="3.5" fill="#1a1a1a"/>
    <circle cx="82" cy="55" r="3.5" fill="#1a1a1a"/>
  </g>`;
};

/** Modern Dots — slightly larger dots, the standard modern minifig. */
const modernDots: ComponentFn = () => {
  return `<g id="eyes-modern-dots">
    <circle cx="46" cy="55" r="5" fill="#1a1a1a"/>
    <circle cx="82" cy="55" r="5" fill="#1a1a1a"/>
  </g>`;
};

/** Oval — tall oval eyes. Expressive, used on many themed minifigs. */
const oval: ComponentFn = () => {
  return `<g id="eyes-oval">
    <ellipse cx="46" cy="55" rx="4" ry="5.5" fill="#1a1a1a"/>
    <ellipse cx="82" cy="55" rx="4" ry="5.5" fill="#1a1a1a"/>
  </g>`;
};

/** Sleepy — half-closed, horizontal slits. Cool/tired look. */
const sleepy: ComponentFn = () => {
  return `<g id="eyes-sleepy">
    <ellipse cx="46" cy="56" rx="5" ry="2.5" fill="#1a1a1a"/>
    <ellipse cx="82" cy="56" rx="5" ry="2.5" fill="#1a1a1a"/>
  </g>`;
};

/** Wide — large round eyes. Surprised or cute look. */
const wide: ComponentFn = () => {
  return `<g id="eyes-wide">
    <circle cx="46" cy="55" r="6.5" fill="#1a1a1a"/>
    <circle cx="82" cy="55" r="6.5" fill="#1a1a1a"/>
  </g>`;
};

export const eyesVariants: ComponentSet = [
  classicDots,
  modernDots,
  oval,
  sleepy,
  wide,
];
