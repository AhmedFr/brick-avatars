import type { ComponentFn, ComponentSet } from "../types.js";

// LEGO minifig scars & marks (128x128 viewBox):
// Rendered early (after head, before eyes) so facial features print on top.
// These are "printed" details on the face surface.
// Face area: x=19 to x=109, y=21 to y=97. Eyes at x=48/80, y=55, mouth at y=74.

/**
 * Scar — Classic diagonal scar across the left cheek/eye.
 * Seen on LEGO pirate captains, villains, and battle-worn characters.
 */
const scar: ComponentFn = () => {
  return `<g id="scars-marks-scar">
    <path d="M 38 42 L 50 68" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
    <path d="M 40 50 L 36 52" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
    <path d="M 44 57 L 48 55" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
  </g>`;
};

/**
 * Freckles — Small dots across the cheeks and nose bridge.
 * Common on LEGO kid, Ron Weasley, and friendly character minifigs.
 * Positioned symmetrically around the nose bridge area.
 */
const freckles: ComponentFn = () => {
  return `<g id="scars-marks-freckles" opacity="0.3">
    <circle cx="38" cy="62" r="1.2" fill="#8B4513"/>
    <circle cx="42" cy="58" r="1" fill="#8B4513"/>
    <circle cx="35" cy="66" r="1" fill="#8B4513"/>
    <circle cx="44" cy="64" r="1.2" fill="#8B4513"/>
    <circle cx="40" cy="68" r="1" fill="#8B4513"/>
    <circle cx="60" cy="60" r="1" fill="#8B4513"/>
    <circle cx="64" cy="58" r="1.2" fill="#8B4513"/>
    <circle cx="68" cy="60" r="1" fill="#8B4513"/>
    <circle cx="84" cy="62" r="1.2" fill="#8B4513"/>
    <circle cx="88" cy="58" r="1" fill="#8B4513"/>
    <circle cx="93" cy="66" r="1" fill="#8B4513"/>
    <circle cx="86" cy="64" r="1.2" fill="#8B4513"/>
    <circle cx="90" cy="68" r="1" fill="#8B4513"/>
  </g>`;
};

/**
 * Blush — Rosy cheek circles.
 * Seen on LEGO Friends-style minifigs and many female characters.
 * Positioned below the eyes on each cheek.
 */
const blush: ComponentFn = () => {
  return `<g id="scars-marks-blush">
    <ellipse cx="38" cy="66" rx="7" ry="4" fill="#E57373" opacity="0.25"/>
    <ellipse cx="90" cy="66" rx="7" ry="4" fill="#E57373" opacity="0.25"/>
  </g>`;
};

/**
 * Eye Patch — Pirate-style patch over the right eye.
 * The absolute LEGO classic, from every pirate captain since 1989.
 * Centered over the right eye (x=80, y=55) with strap lines.
 */
const eyePatch: ComponentFn = () => {
  return `<g id="scars-marks-eye-patch">
    <path d="M 70 48 Q 70 44 76 44 L 84 44 Q 90 44 90 48 L 90 62 Q 90 68 84 68 L 76 68 Q 70 68 70 62 Z" fill="#1a1a1a"/>
    <path d="M 80 44 L 36 28" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 80 44 L 100 30" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
  </g>`;
};

/**
 * Battle Damage — Scratches and worn paint marks.
 * Seen on LEGO Ninjago villains, robot, and skeleton minifigs.
 */
const battleDamage: ComponentFn = () => {
  return `<g id="scars-marks-battle-damage" opacity="0.35">
    <path d="M 86 38 L 92 44 L 88 42 L 94 48" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M 30 60 L 34 58 L 32 62 L 36 60" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M 90 72 L 96 78" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M 88 74 L 94 76" fill="none" stroke="#1a1a1a" stroke-width="1" stroke-linecap="round"/>
  </g>`;
};

/**
 * Tattoo — Tribal/face paint mark on one side.
 * Inspired by LEGO Ninjago, Islanders, and tribal warrior minifigs.
 */
const tattoo: ComponentFn = (ctx) => {
  const c = ctx.palette.accent;
  return `<g id="scars-marks-tattoo" opacity="0.5">
    <path d="M 88 40 Q 96 48 96 60 Q 96 68 92 72" fill="none" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 92 44 L 98 46" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
    <path d="M 94 52 L 100 52" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
    <path d="M 94 60 L 98 62" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
  </g>`;
};

/**
 * Beauty Mark — Small mole/beauty spot.
 * A subtle detail seen on many LEGO celebrity and classic character minifigs.
 * Positioned near the mouth on the right side.
 */
const beautyMark: ComponentFn = () => {
  return `<g id="scars-marks-beauty-mark">
    <circle cx="76" cy="72" r="1.8" fill="#1a1a1a" opacity="0.6"/>
  </g>`;
};

/**
 * Dirt Smudge — A smudge of dirt/grease on the face.
 * Common on LEGO mechanic, miner, and adventure minifigs.
 */
const dirtSmudge: ComponentFn = () => {
  return `<g id="scars-marks-dirt-smudge">
    <ellipse cx="86" cy="68" rx="8" ry="5" fill="#5D4037" opacity="0.15" transform="rotate(-15 86 68)"/>
    <ellipse cx="38" cy="46" rx="5" ry="3" fill="#5D4037" opacity="0.1" transform="rotate(10 38 46)"/>
  </g>`;
};

export const scarsMarksVariants: ComponentSet = [
  scar,
  freckles,
  blush,
  eyePatch,
  battleDamage,
  tattoo,
  beautyMark,
  dirtSmudge,
];
