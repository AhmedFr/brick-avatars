import type { ComponentFn, ComponentSet } from "../types.js";

// LEGO minifig mouth placement (128x128 viewBox):
//
// Official LEGO proportions (from BrickNerd design analysis):
//   - Mouth terminates on each side in line with the centre of each eye
//   - Eyes at x=48 and x=80, so mouth spans ~x=48..80
//   - Mouth center line sits ~2 eye-widths below eye line (y≈75)
//   - Stroke weight ~3.0 to mimic thick pad-printing

/**
 * Classic Smile — The 1978 original.
 * A simple, thick upward arc from eye-center to eye-center.
 */
const classicSmile: ComponentFn = () => {
  return `<g id="mouth-classic-smile">
    <path d="M 48 74 Q 64 83 80 74" fill="none" stroke="#1a1a1a"
          stroke-width="3" stroke-linecap="round"/>
  </g>`;
};

/**
 * Modern Smile — The updated standard.
 * Features the tiny, iconic "dimple" lines at the corners of the mouth.
 */
const modernSmile: ComponentFn = () => {
  return `<g id="mouth-modern-smile">
    <path d="M 48 74 Q 64 83 80 74" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
    <path d="M 46 71 Q 47 73 48 74" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 82 71 Q 81 73 80 74" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
  </g>`;
};

/**
 * Big Grin — Wide open D-shaped smile showing teeth.
 * Classic LEGO grin with white teeth area and tooth separator line.
 */
const bigGrin: ComponentFn = () => {
  return `<g id="mouth-big-grin">
    <path d="M 46 73 Q 64 76 82 73 Q 64 89 46 73 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M 48 74.5 Q 64 77.5 80 74.5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  </g>`;
};

/**
 * Content — A very subtle, relaxed curve that feels neutral but friendly.
 */
const content: ComponentFn = () => {
  return `<g id="mouth-content">
    <path d="M 52 75 Q 64 78 76 75" fill="none" stroke="#1a1a1a"
          stroke-width="3" stroke-linecap="round"/>
  </g>`;
};

/**
 * Smirk — Confident/roguish half-smile.
 * Enhanced with the signature LEGO cheek crease on the raised side.
 */
const smirk: ComponentFn = () => {
  return `<g id="mouth-smirk">
    <path d="M 48 76 Q 58 78 66 75 Q 74 72 80 68" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
    <path d="M 82 66 Q 84 68 81 72" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
  </g>`;
};

/**
 * Surprised / Open O — Polished for a positive/neutral "Wow!" look.
 * Includes a dark red inner mouth for depth.
 */
const surprised: ComponentFn = () => {
  return `<g id="mouth-surprised">
    <ellipse cx="64" cy="77" rx="6" ry="7.5" fill="#1a1a1a"/>
    <ellipse cx="64" cy="78" rx="3.5" ry="5" fill="#6B0000"/>
  </g>`;
};

/**
 * Lipstick — Classic female-presenting smile.
 * Uses a thicker colored stroke to represent lipstick with a thin black core.
 */
const lipstick: ComponentFn = () => {
  return `<g id="mouth-lipstick">
    <path d="M 50 74 Q 64 82 78 74" fill="none" stroke="#D32F2F" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M 51 74 Q 64 80 77 74" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
  </g>`;
};

/**
 * Teeth Smile — Modern LEGO smile showing individual teeth.
 * Very common on post-2010 minifigs with two visible front teeth.
 */
const teethSmile: ComponentFn = () => {
  return `<g id="mouth-teeth-smile">
    <path d="M 48 74 Q 64 84 80 74 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="2.5" stroke-linejoin="round"/>
    <line x1="60" y1="74" x2="60" y2="79" stroke="#1a1a1a" stroke-width="1" opacity="0.5"/>
    <line x1="64" y1="74" x2="64" y2="80" stroke="#1a1a1a" stroke-width="1" opacity="0.5"/>
    <line x1="68" y1="74" x2="68" y2="79" stroke="#1a1a1a" stroke-width="1" opacity="0.5"/>
  </g>`;
};

export const mouthVariants: ComponentSet = [
  classicSmile,
  modernSmile,
  bigGrin,
  content,
  smirk,
  surprised,
  lipstick,
  teethSmile,
];
