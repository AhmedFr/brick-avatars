import type { ComponentFn, ComponentSet } from "../types.js";

const SCALE = 1;
const CENTER_X = 128;

function wrap(ctx: { slotPosition?: { x: number; y: number } }, w: number, _h: number, inner: string): string {
  const pos = ctx.slotPosition ?? { x: CENTER_X, y: 0 };
  return `<g transform="translate(${pos.x - w / 2}, ${pos.y}) scale(${SCALE})">${inner}</g>`;
}

const classicSmile: ComponentFn = (ctx) => {
  const inner = `<path d="M3.30249 3.30249C22.8281 13.6634 33.7772 14.2706 53.3025 3.30249" fill="none" stroke="black" stroke-width="6.60377" stroke-linecap="round"/>`;
  return wrap(ctx, 57, 15, inner);
};

const mouth: ComponentFn = (ctx) => {
  const inner = `<line x1="3.38132" y1="3.38137" x2="54.5842" y2="3.38137" stroke="black" stroke-width="6.76264" stroke-linecap="round"/>`;
  return wrap(ctx, 58, 7, inner);
};

const chocked: ComponentFn = (ctx) => {
  const inner = `<circle cx="16" cy="16" r="16" fill="black"/>`;
  return wrap(ctx, 32, 32, inner);
};

const redLips: ComponentFn = (ctx) => {
  const inner = `<ellipse cx="28" cy="12.2927" rx="28" ry="12.2927" fill="#FF0009"/>`;
  return wrap(ctx, 56, 25, inner);
};

const chockedTeeth: ComponentFn = (ctx) => {
  const inner = `<path d="M0 8.28363C0 4.01347 3.3564 0.490561 7.62418 0.347897C28.1762 -0.339118 46.8354 0.151416 55.2639 0.458751C57.9249 0.555781 60 2.74553 60 5.40832V13.656C60 18.0742 56.4183 21.656 52 21.656H8C3.58172 21.656 0 18.0742 0 13.656V8.28363Z" fill="black"/>
<path d="M2.5 9.15601C2.5 5.29001 5.63401 2.15601 9.5 2.15601H35C35.6517 5.67067 35.7157 7.64151 35 11.156C22.3085 12.0893 15.1905 12.1304 2.5 11.156V9.15601Z" fill="white"/>`;
  return wrap(ctx, 60, 22, inner);
};

const smirk: ComponentFn = (ctx) => {
  const inner = `<path d="M2.53589 18.6574C17.532 18.6574 42.3849 22.8234 50.5359 2.53662" fill="none" stroke="black" stroke-width="5.0717" stroke-linecap="round"/>`;
  return wrap(ctx, 54, 22, inner);
};

const smileTeeth: ComponentFn = (ctx) => {
  const inner = `<path d="M0 0H69.0217L65.2431 23.1759C65.0716 24.2276 64.1631 25 63.0975 25H3.66719C2.5215 25 1.57245 24.1108 1.49788 22.9676L0 0Z" fill="black"/>
<path d="M2.17389 2.17383H66.3043V7.60861C66.3043 8.80923 65.331 9.78252 64.1304 9.78252H4.3478C3.14718 9.78252 2.17389 8.80923 2.17389 7.60861V2.17383Z" fill="white"/>
<path d="M3.26085 22.826H63.0435V13.0434C63.0435 11.8428 62.0702 10.8695 60.8695 10.8695H5.43476C4.23414 10.8695 3.26085 11.8428 3.26085 13.0434V22.826Z" fill="white"/>
<path d="M14.1304 5.4347H54.8913V15.2173H14.1304V5.4347Z" fill="white"/>`;
  return wrap(ctx, 70, 25, inner);
};

export const mouthVariants: ComponentSet = [
  classicSmile,
  mouth,
  chocked,
  redLips,
  chockedTeeth,
  smirk,
  smileTeeth,
];
