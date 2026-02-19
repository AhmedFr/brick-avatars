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

/** Sleepy — half-moon curved lines. */
const sleepy: ComponentFn = (ctx) => {
  const inner = `<path d="M4 12C12 4 24 4 26 12" fill="none" stroke="black" stroke-width="5" stroke-linecap="round"/>
<path d="M48 12C56 4 68 4 70 12" fill="none" stroke="black" stroke-width="5" stroke-linecap="round"/>`;
  return wrap(ctx, 74, 16, inner);
};

/** Wide — larger circles. */
const wide: ComponentFn = (ctx) => {
  const inner = `<path d="M26.1818 9.81818C26.1818 16.5692 20.5692 22.1818 13.8182 22.1818C7.06717 22.1818 1.45455 16.5692 1.45455 9.81818C1.45455 3.06717 7.06717 -2.54545 13.8182 -2.54545C20.5692 -2.54545 26.1818 3.06717 26.1818 9.81818Z" fill="black"/>
<path d="M73.5455 9.81818C73.5455 16.5692 67.9328 22.1818 61.1818 22.1818C54.4308 22.1818 48.8182 16.5692 48.8182 9.81818C48.8182 3.06717 54.4308 -2.54545 61.1818 -2.54545C67.9328 -2.54545 73.5455 3.06717 73.5455 9.81818Z" fill="black"/>`;
  return wrap(ctx, 75, 25, inner);
};

/** Single dot — one centered eye. */
const singleDot: ComponentFn = (ctx) => {
  const inner = `<path d="M36 9.81818C36 15.2406 31.6043 19.6364 26.1818 19.6364C20.7594 19.6364 16.3636 15.2406 16.3636 9.81818C16.3636 4.39575 20.7594 0 26.1818 0C31.6043 0 36 4.39575 36 9.81818Z" fill="black"/>`;
  return wrap(ctx, 72, 20, inner);
};

/** Crossed — X eyes. */
const crossed: ComponentFn = (ctx) => {
  const inner = `<path d="M0 4L18 22M18 4L0 22" stroke="black" stroke-width="5" stroke-linecap="round"/>
<path d="M54 4L72 22M72 4L54 22" stroke="black" stroke-width="5" stroke-linecap="round"/>`;
  return wrap(ctx, 72, 22, inner);
};

/** Surprised — big circles with brows. */
const surprised: ComponentFn = (ctx) => {
  const inner = `<path d="M22 9.81818C22 15.2406 17.6043 19.6364 12.1818 19.6364C6.75935 19.6364 2.36364 15.2406 2.36364 9.81818C2.36364 4.39575 6.75935 0 12.1818 0C17.6043 0 22 4.39575 22 9.81818Z" fill="black"/>
<path d="M72 9.81818C72 15.2406 67.6043 19.6364 62.1818 19.6364C56.7594 19.6364 52.3636 15.2406 52.3636 9.81818C52.3636 4.39575 56.7594 0 62.1818 0C67.6043 0 72 4.39575 72 9.81818Z" fill="black"/>
<path d="M12 0L12 -6" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path d="M62 0L62 -6" stroke="black" stroke-width="3" stroke-linecap="round"/>`;
  return wrap(ctx, 74, 26, inner);
};

/** Narrow — horizontal ellipses. */
const narrow: ComponentFn = (ctx) => {
  const inner = `<ellipse cx="18" cy="10" rx="12" ry="6" fill="black"/>
<ellipse cx="54" cy="10" rx="12" ry="6" fill="black"/>`;
  return wrap(ctx, 72, 20, inner);
};

/** Angled — slightly tilted dots. */
const angled: ComponentFn = (ctx) => {
  const inner = `<ellipse cx="18" cy="10" rx="9.8" ry="9.8" fill="black" transform="rotate(-8 18 10)"/>
<ellipse cx="54" cy="10" rx="9.8" ry="9.8" fill="black" transform="rotate(8 54 10)"/>`;
  return wrap(ctx, 72, 20, inner);
};

export const eyesVariants: ComponentSet = [
  classicDots,
  happy,
  wink,
  sleepy,
  crossed,
  surprised,
  angled,
];
