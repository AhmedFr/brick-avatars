import type { ComponentFn, ComponentSet } from "../types.js";

const SCALE = 1;
const CENTER_X = 128;

function wrap(ctx: { slotPosition?: { x: number; y: number } }, w: number, h: number, inner: string): string {
  const pos = ctx.slotPosition ?? { x: CENTER_X, y: 0 };
  return `<g transform="translate(${pos.x - w / 2}, ${pos.y}) scale(${SCALE})">${inner}</g>`;
}

/** Classic Dots — the original 1978 two black dots. No highlights. */
const classicDots: ComponentFn = (ctx) => {
  const inner = `<path d="M19.6364 9.81818C19.6364 15.2406 15.2406 19.6364 9.81818 19.6364C4.39575 19.6364 0 15.2406 0 9.81818C0 4.39575 4.39575 0 9.81818 0C15.2406 0 19.6364 4.39575 19.6364 9.81818Z" fill="black"/>
<path d="M72 9.81818C72 15.2406 67.6043 19.6364 62.1818 19.6364C56.7594 19.6364 52.3636 15.2406 52.3636 9.81818C52.3636 4.39575 56.7594 0 62.1818 0C67.6043 0 72 4.39575 72 9.81818Z" fill="black"/>`;
  return wrap(ctx, 72, 20, inner);
};

/** Modern Dots — Post-2001 style with white specular highlights. */
const happy: ComponentFn = (ctx) => {
  const inner = `<path d="M19.6364 9.81818C19.6364 15.2406 15.2406 19.6364 9.81818 19.6364C4.39575 19.6364 0 15.2406 0 9.81818C0 4.39575 4.39575 0 9.81818 0C15.2406 0 19.6364 4.39575 19.6364 9.81818Z" fill="black"/>
<path d="M19.6364 23.3182C19.6364 28.7406 15.2406 33.1364 9.81818 33.1364C4.39575 33.1364 0 28.7406 0 23.3182C0 17.8957 4.39575 13.5 9.81818 13.5C15.2406 13.5 19.6364 17.8957 19.6364 23.3182Z" fill="#FFDD15"/>
<path d="M72 9.81818C72 15.2406 67.6043 19.6364 62.1818 19.6364C56.7594 19.6364 52.3636 15.2406 52.3636 9.81818C52.3636 4.39575 56.7594 0 62.1818 0C67.6043 0 72 4.39575 72 9.81818Z" fill="black"/>
<path d="M72 23.3182C72 28.7406 67.6043 33.1364 62.1818 33.1364C56.7594 33.1364 52.3636 28.7406 52.3636 23.3182C52.3636 17.8957 56.7594 13.5 62.1818 13.5C67.6043 13.5 72 17.8957 72 23.3182Z" fill="#FFDD15"/>`;
  return wrap(ctx, 72, 34, inner);
};

/** Wink — One open eye, one winking closed. */
const wink: ComponentFn = (ctx) => {
  const inner = `<path d="M18.5806 9.29032C18.5806 14.4212 14.4212 18.5806 9.29032 18.5806C4.15942 18.5806 0 14.4212 0 9.29032C0 4.15942 4.15942 0 9.29032 0C14.4212 0 18.5806 4.15942 18.5806 9.29032Z" fill="black"/>
<path d="M49.5483 12.387C58.316 4.36561 63.2325 3.89553 72 12.387" fill="none" stroke="black" stroke-width="5.41935" stroke-linecap="round"/>`;
  return wrap(ctx, 75, 19, inner);
};

export const eyesVariants: ComponentSet = [
  classicDots,
  happy,
  wink,
];
