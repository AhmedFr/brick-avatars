import type { ComponentFn, ComponentSet } from "../types.js";

// LEGO minifig mouth placement (128x128 viewBox):
// Face center at (64, 59). Mouth at y ≈ 73-77.
// Stroke weight increased to 3.0 to mimic thick pad-printing.

/**
 * Classic Smile — The 1978 original.
 * A simple, perfect, slightly thick upward arc.
 */
const classicSmile: ComponentFn = () => {
  return `<g id="mouth-classic-smile">
    <path d="M 50 73 Q 64 82 78 73" fill="none" stroke="#1a1a1a"
          stroke-width="3" stroke-linecap="round"/>
  </g>`;
};

/**
 * Modern Smile — The updated standard.
 * Features the tiny, iconic "dimple" lines at the corners of the mouth.
 */
const modernSmile: ComponentFn = () => {
  return `<g id="mouth-modern-smile">
    <path d="M 50 73 Q 64 82 78 73" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
    <path d="M 47 70 Q 48 72 50 73" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 81 70 Q 80 72 78 73" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
  </g>`;
};

/**
 * Big Grin — Wide open smile.
 * Uses a classic sideways 'D' shape with a thin line to suggest teeth.
 */
const bigGrin: ComponentFn = () => {
  return `<g id="mouth-big-grin">
    <path d="M 48 73 Q 64 76 80 73 Q 64 88 48 73 Z" fill="#FFFFFF" stroke="#1a1a1a" stroke-width="3" stroke-linejoin="round"/>
    <path d="M 49 74.5 Q 64 77.5 79 74.5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  </g>`;
};

/**
 * Content — Replaces the harsh 'Straight' line.
 * A very subtle, relaxed curve that feels neutral but friendly.
 */
const content: ComponentFn = () => {
  return `<g id="mouth-content">
    <path d="M 52 75 Q 64 77 76 75" fill="none" stroke="#1a1a1a"
          stroke-width="3" stroke-linecap="round"/>
  </g>`;
};

/**
 * Smirk — Confident/roguish half-smile.
 * Enhanced with the signature LEGO cheek crease on the raised side.
 */
const smirk: ComponentFn = () => {
  return `<g id="mouth-smirk">
    <path d="M 50 75 Q 60 77 68 74 Q 76 71 80 68" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/>
    <path d="M 82 66 Q 84 68 81 72" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
  </g>`;
};

/**
 * Surprised / Open O — Polished for a positive/neutral "Wow!" look.
 * Includes a dark red inner mouth for depth.
 */
const surprised: ComponentFn = () => {
  return `<g id="mouth-surprised">
    <ellipse cx="64" cy="76" rx="6" ry="8" fill="#1a1a1a"/>
    <ellipse cx="64" cy="77" rx="3.5" ry="5" fill="#6B0000"/>
  </g>`;
};

/**
 * Lipstick — Classic female-presenting smile.
 * Uses a thicker colored stroke to represent lipstick with a thin black core.
 */
const lipstick: ComponentFn = () => {
  return `<g id="mouth-lipstick">
    <path d="M 52 74 Q 64 82 76 74" fill="none" stroke="#D32F2F" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M 53 74 Q 64 80 75 74" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
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
];
