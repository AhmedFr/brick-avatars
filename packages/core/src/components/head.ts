import type { ComponentFn } from "../types.js";

/**
 * Single head shape in 256 space. Stud is always present.
 * Returns inner SVG content (no wrapper) for use in composer.
 */
export const head: ComponentFn = (ctx) => {
  const skin = ctx.palette.skin;
  return `<path d="M83.1206 24.0515C83.1206 19.5277 86.7879 15.8604 91.3118 15.8604H161.346C165.87 15.8604 169.538 19.5277 169.538 24.0515V49.0346H83.1206V24.0515Z" fill="${skin}"/>
<rect x="31.7209" y="52.311" width="189.216" height="164.643" rx="32.7647" fill="${skin}"/>
<path d="M69.6051 220.23H183.053V239.889H69.6051V220.23Z" fill="${skin}"/>`;
};
