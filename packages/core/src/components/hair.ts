import type { ComponentFn, ComponentSet } from "../types.js";

const SCALE = 1;
const CENTER_X = 128;

function wrap(ctx: { slotPosition?: { x: number; y: number } }, w: number, _h: number, inner: string): string {
  const pos = ctx.slotPosition ?? { x: CENTER_X, y: 0 };
  return `<g transform="translate(${pos.x - w / 2}, ${pos.y}) scale(${SCALE})">${inner}</g>`;
}

const basic: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<path d="M24.7602 1.11257C-5.85102 3.16703 0.736216 62.1298 0.929958 67.4714L7.71098 51.0357L14.1045 61.1026L16.0419 36.2437L24.7602 51.0357L40.4534 21.0407L42.7783 45.6942L60.6026 18.7808L62.7337 34.8056C67.5127 27.6835 78.5043 13.4392 84.2391 13.4392C84.8849 16.7949 87.2227 25.4373 91.4076 33.162C97.2198 25.4236 103.082 13.4392 105.407 13.4392C107.732 13.4392 114.579 21.4927 125.119 38.9145C125.506 -25.1845 148.755 87.3996 147.98 48.365C147.36 17.1373 156.247 33.5729 160.767 45.6942L164.836 40.9689C164.991 50.3372 169.292 61.308 171.423 65.6224L175.685 51.0357C176.912 56.5143 179.831 67.4714 181.691 67.4714C186.031 14.5487 166.709 1.18107 156.505 1.11257C122.794 0.427756 49.2492 -0.530989 24.7602 1.11257Z" fill="${c}" stroke="${c}" stroke-width="0.410161"/>`;
  return wrap(ctx, 183, 68, inner);
};

const spiky: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<path d="M156.237 0.205078H18.2176L0.170532 27.2757L18.2176 17.842L25.3954 27.2757L46.3136 17.842L50.8254 27.2757L70.5131 17.842L83.8433 27.2757L96.1481 17.842L109.478 27.2757L124.449 13.9455L136.549 27.2757L146.598 13.9455L173.668 27.2757L156.237 0.205078Z" fill="${c}" stroke="${c}" stroke-width="0.410161"/>`;
  return wrap(ctx, 175, 28, inner);
};

const bubbly: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<path d="M152.777 0.205078H14.7576C7.0253 7.54257 -11.8438 27.7208 11.4762 36.5258C21.1245 41.2218 51.1017 41.5006 64.5682 18.2554C65.0472 25.4462 72.2047 39.1673 97.0027 36.5258C121.801 33.8843 129.916 23.2449 130.874 18.2554C142.997 44.8596 153.765 47.8696 175.335 46.1431C187.488 10.0426 162.075 0.205064 152.777 0.205078Z" fill="${c}" stroke="${c}" stroke-width="0.410161"/>`;
  return wrap(ctx, 179, 47, inner);
};

const long: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<path d="M156 0.205078H29.2601C-20.5745 0.205097 8.13677 90.2354 11.2126 139.455C20.031 162.629 39.5834 41.5006 53.0499 18.2554C53.5289 25.4462 75.0184 39.1673 99.8164 36.5258C124.614 33.8843 132.73 23.2449 133.688 18.2554C145.811 44.8596 145.094 140.976 166.664 139.25C178.817 103.149 202.348 0.205078 156 0.205078Z" fill="${c}" stroke="${c}" stroke-width="0.410161"/>`;
  return wrap(ctx, 184, 143, inner);
};

const longStyled: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<path d="M159.205 0.205078H36.2049C-12.295 1.20508 0.485013 59.5828 5.65446 136.205C3.92919 98.8349 20.492 28.6936 100.545 47.0913L112.814 28.502L124.508 47.0913L138.118 28.502L175.499 136.205L175.616 134.825C181.83 61.5385 187.03 0.205078 159.205 0.205078Z" fill="${c}" stroke="${c}" stroke-width="0.410161"/>`;
  return wrap(ctx, 181, 137, inner);
};

const shortBack: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<path d="M165 0.2H20C8 0.2 12 28 28 38C45 48 80 42 92 32C100 26 110 32 125 28C140 24 155 12 165 0.2Z" fill="${c}" stroke="${c}" stroke-width="0.410161"/>`;
  return wrap(ctx, 185, 40, inner);
};


const curlyTop: ComponentFn = (ctx) => {
  const c = ctx.palette.hair;
  const inner = `<path d="M155 0.2H30C10 5 15 35 40 42C65 49 95 42 115 35C135 28 150 12 155 0.2Z" fill="${c}" stroke="${c}" stroke-width="0.410161"/>
<path d="M75 8C78 18 85 25 92 22C99 19 102 10 99 5C96 0 88 2 82 8C76 14 72 0 75 8Z" fill="${c}" stroke="${c}" stroke-width="0.410161"/>`;
  return wrap(ctx, 185, 45, inner);
};


export const hairVariants: ComponentSet = [
  basic,
  spiky,
  bubbly,
  long,
  longStyled,
  shortBack,
  curlyTop,
];
