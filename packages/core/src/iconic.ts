// Iconic minifigure character overrides.
//
// When a seed exactly matches a known character name (case-insensitive),
// the normal randomized pipeline is bypassed and a dedicated SVG is
// rendered instead. Each character's SVG respects the standard 128x128
// viewBox and head geometry:
//
//   Head body: x=19  y=21  w=90  h=76  rx=18
//   Neck:      x=40  y=99  w=48  h=14
//   Stud:      x=48  y=6   w=32  h=13   (hidden when accessory present)
//   Face area: eyes ~y=55, mouth ~y=74

const VIEWBOX = 128;

type IconicRenderFn = () => string;

function wrapSvg(size: number, layers: string[]): string {
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${VIEWBOX} ${VIEWBOX}">`,
    ...layers,
    `</svg>`,
  ].join("\n");
}

// Shared head base (no stud — iconic characters always have headgear)
function headBase(skin: string): string {
  return `<rect x="40" y="99" width="48" height="14" fill="${skin}"/>
    <rect x="19" y="21" width="90" height="76" rx="18" fill="${skin}"/>`;
}

// Shared head base WITH stud (for characters without headgear covering the stud)
function headBaseWithStud(skin: string): string {
  return `${headBase(skin)}
    <path d="M 48 19 L 48 10 Q 48 6 52 6 L 76 6 Q 80 6 80 10 L 80 19 Z" fill="${skin}"/>`;
}

// ── Batman ──────────────────────────────────────────────────────────
// Light nougat head with white "headband" across forehead (white eyes
// when cowl is on) and a stern scowl. Dark cowl covers the head.
function batman(): string {
  const skin = "#F0C8A0";
  const cowl = "#1a1a1a";
  return `<rect width="${VIEWBOX}" height="${VIEWBOX}" fill="#2C2C2C" rx="12"/>
    <g id="iconic-batman">
      ${headBase(skin)}
      <!-- White eye band -->
      <rect x="32" y="48" width="64" height="14" rx="4" fill="white"/>
      <!-- Stern eyes (angular slits) -->
      <path d="M 40 54 L 46 51 L 54 54 L 46 56 Z" fill="${cowl}"/>
      <path d="M 88 54 L 82 51 L 74 54 L 82 56 Z" fill="${cowl}"/>
      <!-- Stern mouth -->
      <path d="M 50 76 L 64 78 L 78 76" fill="none" stroke="${cowl}" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Chin cleft -->
      <line x1="64" y1="82" x2="64" y2="86" stroke="${cowl}" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
      <!-- Cowl -->
      <path d="M 19 48 Q 19 10 64 10 Q 109 10 109 48 L 109 48 Q 109 50 107 50 L 21 50 Q 19 50 19 48 Z" fill="${cowl}"/>
      <!-- Ears -->
      <path d="M 32 28 L 26 4 L 38 22 Z" fill="${cowl}"/>
      <path d="M 96 28 L 102 4 L 90 22 Z" fill="${cowl}"/>
    </g>`;
}

// ── Darth Vader ─────────────────────────────────────────────────────
// Pale scarred face with dark eye circles and respirator print.
// Full black helmet covers the head.
function darthVader(): string {
  const skin = "#E8D8C8";
  const helmet = "#1a1a1a";
  return `<rect width="${VIEWBOX}" height="${VIEWBOX}" fill="#1a1a1a" rx="12"/>
    <g id="iconic-darth-vader">
      ${headBase(skin)}
      <!-- Scarred pale face -->
      <path d="M 38 42 L 50 68" fill="none" stroke="#B0A090" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
      <!-- Dark eye circles -->
      <ellipse cx="48" cy="55" rx="8" ry="6" fill="#4A3A30" opacity="0.3"/>
      <ellipse cx="80" cy="55" rx="8" ry="6" fill="#4A3A30" opacity="0.3"/>
      <!-- Eyes — menacing -->
      <ellipse cx="48" cy="55" rx="4" ry="3.5" fill="#C8A800"/>
      <circle cx="48" cy="55" r="2" fill="#1a1a1a"/>
      <ellipse cx="80" cy="55" rx="4" ry="3.5" fill="#C8A800"/>
      <circle cx="80" cy="55" r="2" fill="#1a1a1a"/>
      <!-- Brow ridge -->
      <path d="M 36 48 Q 48 44 58 48" fill="none" stroke="#4A3A30" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <path d="M 70 48 Q 80 44 92 48" fill="none" stroke="#4A3A30" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <!-- Respirator mouth -->
      <path d="M 44 70 Q 44 66 50 66 L 78 66 Q 84 66 84 70 L 84 80 Q 84 86 78 86 L 50 86 Q 44 86 44 80 Z" fill="#2A2A2A"/>
      <path d="M 48 72 L 80 72" fill="none" stroke="#444" stroke-width="1.5"/>
      <path d="M 48 76 L 80 76" fill="none" stroke="#444" stroke-width="1.5"/>
      <path d="M 48 80 L 80 80" fill="none" stroke="#444" stroke-width="1.5"/>
      <circle cx="58" cy="69" r="1.5" fill="#555"/>
      <circle cx="70" cy="69" r="1.5" fill="#555"/>
      <!-- Helmet -->
      <path d="M 14 52 Q 14 6 64 6 Q 114 6 114 52 L 114 52 Q 114 54 112 54 L 16 54 Q 14 54 14 52 Z" fill="${helmet}"/>
      <!-- Helmet dome highlight -->
      <path d="M 40 20 Q 64 12 88 20" fill="none" stroke="#444" stroke-width="1" opacity="0.3"/>
    </g>`;
}

// ── Harry Potter ────────────────────────────────────────────────────
// Light nougat head with round black spectacles and red lightning bolt
// scar on the forehead. Messy dark brown hair.
function harryPotter(): string {
  const skin = "#F0C8A0";
  const hair = "#2C1B0E";
  return `<rect width="${VIEWBOX}" height="${VIEWBOX}" fill="#7B1F1F" rx="12"/>
    <g id="iconic-harry-potter">
      ${headBase(skin)}
      <!-- Lightning bolt scar -->
      <path d="M 74 28 L 70 34 L 76 36 L 72 44" fill="none" stroke="#CC3333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Round spectacles -->
      <circle cx="48" cy="55" r="9" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
      <circle cx="80" cy="55" r="9" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
      <path d="M 57 55 L 71 55" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
      <path d="M 39 55 L 26 52" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
      <path d="M 89 55 L 102 52" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
      <!-- Eyes behind glasses -->
      <circle cx="48" cy="55" r="3.5" fill="#1a1a1a"/>
      <circle cx="49" cy="54" r="1" fill="white" opacity="0.9"/>
      <circle cx="80" cy="55" r="3.5" fill="#1a1a1a"/>
      <circle cx="81" cy="54" r="1" fill="white" opacity="0.9"/>
      <!-- Eyebrows -->
      <path d="M 38 45 Q 48 42 56 45" fill="none" stroke="${hair}" stroke-width="3" stroke-linecap="round"/>
      <path d="M 72 45 Q 80 42 90 45" fill="none" stroke="${hair}" stroke-width="3" stroke-linecap="round"/>
      <!-- Classic smile -->
      <path d="M 50 74 Q 64 82 78 74" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Messy hair -->
      <path d="M 20 34 Q 20 10 64 8 Q 108 10 108 34 L 108 38 Q 108 40 106 40 L 106 34 Q 106 22 64 20 Q 22 22 22 34 L 22 40 Q 20 40 20 38 Z" fill="${hair}"/>
      <!-- Messy hair tufts -->
      <path d="M 28 22 Q 24 14 32 16" fill="none" stroke="${hair}" stroke-width="4" stroke-linecap="round"/>
      <path d="M 80 16 Q 88 10 92 18" fill="none" stroke="${hair}" stroke-width="4" stroke-linecap="round"/>
      <path d="M 56 14 Q 60 8 66 14" fill="none" stroke="${hair}" stroke-width="3" stroke-linecap="round"/>
    </g>`;
}

// ── Spider-Man ──────────────────────────────────────────────────────
// Full red head with black web pattern and large white triangular eyes.
// No visible mouth or nose — full mask print.
function spiderMan(): string {
  const red = "#CC1C1C";
  const web = "#1a1a1a";
  return `<rect width="${VIEWBOX}" height="${VIEWBOX}" fill="#1E3A8A" rx="12"/>
    <g id="iconic-spider-man">
      <rect x="40" y="99" width="48" height="14" fill="${red}"/>
      <rect x="19" y="21" width="90" height="76" rx="18" fill="${red}"/>
      <path d="M 48 19 L 48 10 Q 48 6 52 6 L 76 6 Q 80 6 80 10 L 80 19 Z" fill="${red}"/>
      <!-- Large white eyes -->
      <path d="M 34 50 Q 38 40 48 44 Q 56 48 56 56 Q 56 64 48 66 Q 36 66 34 56 Z" fill="white"/>
      <path d="M 94 50 Q 90 40 80 44 Q 72 48 72 56 Q 72 64 80 66 Q 92 66 94 56 Z" fill="white"/>
      <!-- Eye outlines -->
      <path d="M 34 50 Q 38 40 48 44 Q 56 48 56 56 Q 56 64 48 66 Q 36 66 34 56 Z" fill="none" stroke="${web}" stroke-width="2"/>
      <path d="M 94 50 Q 90 40 80 44 Q 72 48 72 56 Q 72 64 80 66 Q 92 66 94 56 Z" fill="none" stroke="${web}" stroke-width="2"/>
      <!-- Web pattern — radial lines from center -->
      <line x1="64" y1="6" x2="64" y2="97" stroke="${web}" stroke-width="1" opacity="0.5"/>
      <line x1="19" y1="55" x2="109" y2="55" stroke="${web}" stroke-width="1" opacity="0.5"/>
      <line x1="28" y1="26" x2="100" y2="92" stroke="${web}" stroke-width="1" opacity="0.5"/>
      <line x1="100" y1="26" x2="28" y2="92" stroke="${web}" stroke-width="1" opacity="0.5"/>
      <line x1="19" y1="36" x2="109" y2="72" stroke="${web}" stroke-width="1" opacity="0.4"/>
      <line x1="109" y1="36" x2="19" y2="72" stroke="${web}" stroke-width="1" opacity="0.4"/>
      <!-- Web pattern — concentric arcs -->
      <ellipse cx="64" cy="55" rx="14" ry="10" fill="none" stroke="${web}" stroke-width="0.8" opacity="0.45"/>
      <ellipse cx="64" cy="55" rx="28" ry="20" fill="none" stroke="${web}" stroke-width="0.8" opacity="0.4"/>
      <ellipse cx="64" cy="55" rx="42" ry="30" fill="none" stroke="${web}" stroke-width="0.8" opacity="0.35"/>
    </g>`;
}

// ── Yoda ────────────────────────────────────────────────────────────
// Olive-green head with pointed ears, wrinkles, and white hair wisps.
// Custom ear shapes extend beyond the normal head boundary.
function yoda(): string {
  const skin = "#6B8E23";
  const skinDark = "#556B2F";
  return `<rect width="${VIEWBOX}" height="${VIEWBOX}" fill="#1A3A1A" rx="12"/>
    <g id="iconic-yoda">
      ${headBase(skin)}
      <!-- Pointed ears -->
      <path d="M 19 52 L -2 46 Q -4 44 -2 42 L 19 48 Z" fill="${skin}" stroke="${skinDark}" stroke-width="1"/>
      <path d="M 109 52 L 130 46 Q 132 44 130 42 L 109 48 Z" fill="${skin}" stroke="${skinDark}" stroke-width="1"/>
      <!-- Inner ear -->
      <path d="M 16 50 L 4 47" fill="none" stroke="${skinDark}" stroke-width="1" opacity="0.4"/>
      <path d="M 112 50 L 124 47" fill="none" stroke="${skinDark}" stroke-width="1" opacity="0.4"/>
      <!-- Wrinkle lines -->
      <path d="M 34 38 Q 64 34 94 38" fill="none" stroke="${skinDark}" stroke-width="1" opacity="0.3"/>
      <path d="M 36 44 Q 64 42 92 44" fill="none" stroke="${skinDark}" stroke-width="1" opacity="0.25"/>
      <path d="M 40 66 Q 50 64 58 66" fill="none" stroke="${skinDark}" stroke-width="0.8" opacity="0.25"/>
      <path d="M 70 66 Q 78 64 88 66" fill="none" stroke="${skinDark}" stroke-width="0.8" opacity="0.25"/>
      <!-- Heavy eyelids -->
      <path d="M 38 52 Q 48 48 56 52" fill="none" stroke="${skinDark}" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 72 52 Q 80 48 90 52" fill="none" stroke="${skinDark}" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Small wise eyes -->
      <ellipse cx="48" cy="56" rx="4" ry="3" fill="#1a1a1a"/>
      <circle cx="49" cy="55" r="1" fill="white" opacity="0.8"/>
      <ellipse cx="80" cy="56" rx="4" ry="3" fill="#1a1a1a"/>
      <circle cx="81" cy="55" r="1" fill="white" opacity="0.8"/>
      <!-- Subtle nose -->
      <path d="M 62 62 Q 64 66 66 62" fill="none" stroke="${skinDark}" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
      <!-- Gentle wise smile -->
      <path d="M 52 76 Q 64 80 76 76" fill="none" stroke="${skinDark}" stroke-width="2" stroke-linecap="round"/>
      <!-- White hair wisps -->
      <path d="M 30 30 Q 34 24 40 28" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <path d="M 88 28 Q 94 24 98 30" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <path d="M 48 24 Q 54 20 60 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
    </g>`;
}

// ── The Joker ───────────────────────────────────────────────────────
// White face paint with exaggerated red smile, yellowing teeth,
// and bright green eyebrows/hair.
function theJoker(): string {
  const skin = "#F0F0E8";
  const green = "#2ECC40";
  const red = "#E80000";
  return `<rect width="${VIEWBOX}" height="${VIEWBOX}" fill="#2D0854" rx="12"/>
    <g id="iconic-the-joker">
      ${headBase(skin)}
      <!-- Green eyebrows -->
      <path d="M 36 44 Q 48 38 58 46" fill="none" stroke="${green}" stroke-width="4" stroke-linecap="round"/>
      <path d="M 70 46 Q 80 38 92 44" fill="none" stroke="${green}" stroke-width="4" stroke-linecap="round"/>
      <!-- Menacing eyes -->
      <circle cx="48" cy="55" r="5" fill="#1a1a1a"/>
      <circle cx="49.5" cy="53.5" r="1.5" fill="white" opacity="0.9"/>
      <circle cx="80" cy="55" r="5" fill="#1a1a1a"/>
      <circle cx="81.5" cy="53.5" r="1.5" fill="white" opacity="0.9"/>
      <!-- Dark eye rings -->
      <ellipse cx="48" cy="55" rx="8" ry="7" fill="none" stroke="#6B3FA0" stroke-width="1.5" opacity="0.35"/>
      <ellipse cx="80" cy="55" rx="8" ry="7" fill="none" stroke="#6B3FA0" stroke-width="1.5" opacity="0.35"/>
      <!-- Exaggerated red smile (Glasgow grin) -->
      <path d="M 38 72 Q 42 68 46 72 Q 56 84 64 84 Q 72 84 82 72 Q 86 68 90 72" fill="none" stroke="${red}" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Yellowing teeth -->
      <path d="M 46 74 Q 64 85 82 74" fill="#FFFDD0" stroke="#1a1a1a" stroke-width="1.5"/>
      <line x1="56" y1="75" x2="56" y2="80" stroke="#1a1a1a" stroke-width="0.8" opacity="0.5"/>
      <line x1="64" y1="75" x2="64" y2="82" stroke="#1a1a1a" stroke-width="0.8" opacity="0.5"/>
      <line x1="72" y1="75" x2="72" y2="80" stroke="#1a1a1a" stroke-width="0.8" opacity="0.5"/>
      <!-- Green hair -->
      <path d="M 18 36 Q 18 6 64 4 Q 110 6 110 36 L 110 40 Q 110 42 108 42 L 108 36 Q 108 18 64 16 Q 20 18 20 36 L 20 42 Q 18 42 18 40 Z" fill="${green}"/>
      <!-- Wild hair tufts -->
      <path d="M 24 20 Q 18 8 28 12" fill="none" stroke="${green}" stroke-width="5" stroke-linecap="round"/>
      <path d="M 100 20 Q 108 8 98 12" fill="none" stroke="${green}" stroke-width="5" stroke-linecap="round"/>
      <path d="M 50 12 Q 46 2 56 6" fill="none" stroke="${green}" stroke-width="4" stroke-linecap="round"/>
      <path d="M 76 12 Q 80 2 72 6" fill="none" stroke="${green}" stroke-width="4" stroke-linecap="round"/>
    </g>`;
}

// ── Captain Rex ─────────────────────────────────────────────────────
// Light nougat clone trooper head with blonde buzz-cut print and
// scar/bandage detail on the side.
function captainRex(): string {
  const skin = "#F0C8A0";
  const hair = "#E8C46A";
  return `<rect width="${VIEWBOX}" height="${VIEWBOX}" fill="#1E3A6A" rx="12"/>
    <g id="iconic-captain-rex">
      ${headBase(skin)}
      <!-- Buzz cut hair (very short, printed on) -->
      <path d="M 24 34 Q 24 18 64 16 Q 104 18 104 34 L 104 36 Q 104 37 102 37 L 26 37 Q 24 37 24 36 Z" fill="${hair}" opacity="0.5"/>
      <!-- Scar on left side -->
      <path d="M 34 40 L 40 58" fill="none" stroke="#8B6040" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <path d="M 36 46 L 32 48" fill="none" stroke="#8B6040" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
      <!-- Bandage/tape on right temple -->
      <rect x="88" y="40" width="12" height="6" rx="1" fill="#E0D0C0" opacity="0.7"/>
      <line x1="90" y1="43" x2="98" y2="43" stroke="#C0B0A0" stroke-width="0.8"/>
      <!-- Determined eyebrows -->
      <path d="M 38 46 Q 48 48 56 49" fill="none" stroke="${hair}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M 72 49 Q 80 48 90 46" fill="none" stroke="${hair}" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Clone trooper eyes -->
      <circle cx="48" cy="55" r="4.5" fill="#1a1a1a"/>
      <circle cx="49.5" cy="53.5" r="1.5" fill="white" opacity="0.9"/>
      <circle cx="80" cy="55" r="4.5" fill="#1a1a1a"/>
      <circle cx="81.5" cy="53.5" r="1.5" fill="white" opacity="0.9"/>
      <!-- Determined mouth -->
      <path d="M 50 76 Q 64 78 78 76" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Chin detail -->
      <path d="M 58 84 Q 64 86 70 84" fill="none" stroke="#1a1a1a" stroke-width="1" stroke-linecap="round" opacity="0.2"/>
    </g>`;
}

// ── Mickey Mouse ────────────────────────────────────────────────────
// Custom shaped head with large circular ears, protruding black nose area,
// and pie-cut style eyes. Non-standard cylinder feel.
function mickeyMouse(): string {
  const skin = "#F5F0E0";
  const black = "#1a1a1a";
  return `<rect width="${VIEWBOX}" height="${VIEWBOX}" fill="#CC1C1C" rx="12"/>
    <g id="iconic-mickey-mouse">
      ${headBase(black)}
      <!-- Face / muzzle area (lighter oval) -->
      <ellipse cx="64" cy="66" rx="26" ry="24" fill="${skin}"/>
      <!-- Iconic round ears -->
      <circle cx="30" cy="18" r="18" fill="${black}"/>
      <circle cx="98" cy="18" r="18" fill="${black}"/>
      <!-- Pie-cut eyes -->
      <ellipse cx="50" cy="52" rx="7" ry="9" fill="white"/>
      <ellipse cx="78" cy="52" rx="7" ry="9" fill="white"/>
      <ellipse cx="52" cy="52" rx="4" ry="6" fill="${black}"/>
      <ellipse cx="76" cy="52" rx="4" ry="6" fill="${black}"/>
      <circle cx="53" cy="50" r="1.5" fill="white" opacity="0.8"/>
      <circle cx="77" cy="50" r="1.5" fill="white" opacity="0.8"/>
      <!-- Nose -->
      <ellipse cx="64" cy="64" rx="5" ry="4" fill="${black}"/>
      <circle cx="62" cy="63" r="1" fill="white" opacity="0.2"/>
      <!-- Smile -->
      <path d="M 46 72 Q 64 84 82 72" fill="none" stroke="${black}" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Mouth interior -->
      <path d="M 50 74 Q 64 82 78 74" fill="#CC1C1C" opacity="0.4"/>
    </g>`;
}

// ── Iron Man ────────────────────────────────────────────────────────
// Tony Stark face with goatee and smirk on one side, and a blue
// HUD (Heads-Up Display) interface over his eyes on the other.
function ironMan(): string {
  const skin = "#F0C8A0";
  const hair = "#2C1B0E";
  const hud = "#00BFFF";
  return `<rect width="${VIEWBOX}" height="${VIEWBOX}" fill="#8B0000" rx="12"/>
    <g id="iconic-iron-man">
      ${headBase(skin)}
      <!-- Goatee -->
      <path d="M 48 70 Q 50 68 56 68 Q 62 68 64 71 Q 66 68 72 68 Q 78 68 80 70 Q 82 72 80 74 Q 76 76 72 74 Q 68 73 64 76 Q 60 73 56 74 Q 52 76 48 74 Q 46 72 48 70 Z" fill="${hair}" opacity="0.9"/>
      <path d="M 58 77 Q 58 76 60 76 L 68 76 Q 70 76 70 77 L 70 84 Q 70 90 64 90 Q 58 90 58 84 Z" fill="${hair}" opacity="0.9"/>
      <!-- Eyebrows -->
      <path d="M 38 46 Q 48 44 56 46" fill="none" stroke="${hair}" stroke-width="3" stroke-linecap="round"/>
      <path d="M 72 46 Q 80 44 90 46" fill="none" stroke="${hair}" stroke-width="3" stroke-linecap="round"/>
      <!-- Eyes -->
      <circle cx="48" cy="55" r="4.5" fill="#1a1a1a"/>
      <circle cx="49.5" cy="53.5" r="1.5" fill="white" opacity="0.9"/>
      <circle cx="80" cy="55" r="4.5" fill="#1a1a1a"/>
      <circle cx="81.5" cy="53.5" r="1.5" fill="white" opacity="0.9"/>
      <!-- HUD overlay on one eye -->
      <circle cx="80" cy="55" r="10" fill="${hud}" opacity="0.15"/>
      <circle cx="80" cy="55" r="10" fill="none" stroke="${hud}" stroke-width="1" opacity="0.5"/>
      <path d="M 74 50 L 76 52" fill="none" stroke="${hud}" stroke-width="0.8" opacity="0.5"/>
      <path d="M 84 58 L 86 60" fill="none" stroke="${hud}" stroke-width="0.8" opacity="0.5"/>
      <rect x="76" y="59" width="8" height="3" rx="1" fill="${hud}" opacity="0.2"/>
      <!-- Smirk -->
      <path d="M 48 76 Q 58 78 66 75 Q 74 72 80 68" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 82 66 Q 84 68 81 72" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Short dark hair -->
      <path d="M 24 34 Q 24 14 64 12 Q 104 14 104 34 L 104 38 Q 104 40 102 40 L 102 34 Q 102 24 64 22 Q 26 24 26 34 L 26 40 Q 24 40 24 38 Z" fill="${hair}"/>
    </g>`;
}

// ── Homer Simpson ───────────────────────────────────────────────────
// Bright yellow with bulging white eyes, 3D snout/muzzle area,
// stubble muzzle print, and signature M-shaped hair line.
function homerSimpson(): string {
  const skin = "#FFD90F";
  const outline = "#1a1a1a";
  return `<rect width="${VIEWBOX}" height="${VIEWBOX}" fill="#5B9BD5" rx="12"/>
    <g id="iconic-homer-simpson">
      ${headBaseWithStud(skin)}
      <!-- Bulging white eyes -->
      <ellipse cx="46" cy="48" rx="12" ry="14" fill="white" stroke="${outline}" stroke-width="1.5"/>
      <ellipse cx="76" cy="48" rx="12" ry="14" fill="white" stroke="${outline}" stroke-width="1.5"/>
      <!-- Pupils -->
      <circle cx="50" cy="50" r="3" fill="${outline}"/>
      <circle cx="72" cy="50" r="3" fill="${outline}"/>
      <circle cx="51" cy="49" r="1" fill="white" opacity="0.8"/>
      <circle cx="73" cy="49" r="1" fill="white" opacity="0.8"/>
      <!-- Nose/snout bump -->
      <ellipse cx="64" cy="62" rx="8" ry="6" fill="${skin}" stroke="${outline}" stroke-width="1"/>
      <!-- Stubble dots around mouth/chin -->
      <g opacity="0.25">
        <circle cx="48" cy="78" r="1" fill="#666"/>
        <circle cx="54" cy="80" r="1" fill="#666"/>
        <circle cx="60" cy="82" r="1" fill="#666"/>
        <circle cx="66" cy="82" r="1" fill="#666"/>
        <circle cx="72" cy="80" r="1" fill="#666"/>
        <circle cx="78" cy="78" r="1" fill="#666"/>
        <circle cx="52" cy="84" r="1" fill="#666"/>
        <circle cx="64" cy="86" r="1" fill="#666"/>
        <circle cx="74" cy="84" r="1" fill="#666"/>
      </g>
      <!-- Mouth -->
      <path d="M 48 74 Q 64 82 80 74" fill="none" stroke="${outline}" stroke-width="2.5" stroke-linecap="round"/>
      <!-- M-shaped hair (two strands on top) -->
      <path d="M 48 22 Q 50 14 54 22 Q 56 14 60 22" fill="none" stroke="${outline}" stroke-width="3" stroke-linecap="round"/>
      <!-- Ear -->
      <ellipse cx="108" cy="55" rx="5" ry="7" fill="${skin}" stroke="${outline}" stroke-width="1"/>
    </g>`;
}

// ─────────────────────────────────────────────────────────────────────
// Registry — maps lowercase character names to render functions.
// ─────────────────────────────────────────────────────────────────────

const ICONIC_REGISTRY: Record<string, IconicRenderFn> = {
  batman,
  "darth vader": darthVader,
  "harry potter": harryPotter,
  "spider-man": spiderMan,
  spiderman: spiderMan,
  yoda,
  "the joker": theJoker,
  joker: theJoker,
  "captain rex": captainRex,
  "mickey mouse": mickeyMouse,
  mickey: mickeyMouse,
  "iron man": ironMan,
  "tony stark": ironMan,
  "homer simpson": homerSimpson,
  homer: homerSimpson,
};

/**
 * Look up an iconic character by seed.
 * Returns the full SVG string if the seed matches, or null otherwise.
 */
export function renderIconic(seed: string, size: number): string | null {
  const key = seed.trim().toLowerCase();
  const renderFn = ICONIC_REGISTRY[key];
  if (!renderFn) return null;

  const layers = renderFn();
  return wrapSvg(size, [layers]);
}

/** Returns all registered iconic character names (primary names only). */
export function getIconicNames(): string[] {
  return [
    "Batman",
    "Darth Vader",
    "Harry Potter",
    "Spider-Man",
    "Yoda",
    "The Joker",
    "Captain Rex",
    "Mickey Mouse",
    "Iron Man",
    "Homer Simpson",
  ];
}
