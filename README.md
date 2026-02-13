# Brick Avatars

Deterministic, seed-based avatar generator that creates brick-toy-style profile pictures from modular SVG face components. One seed in, one avatar out — every time.

```
"ahmed" → 🧱 → <svg>...</svg>
```

## Features

- **Deterministic** — same seed always produces the same avatar. No randomness at render time — perfect for user profiles, consistent IDs, and reproducible tests.
- **SVG-first** — pure SVG output with a 128×128 viewBox. Scales to any resolution with zero pixelation. Embed inline, use in an `<img>`, or serve as a file.
- **Zero dependencies** — the entire core package has no runtime dependencies. Tiny bundle footprint.
- **Modular slots** — head, eyes, eyebrows, mouth — each slot is independently hashed. Adding new variants never changes existing avatars. Extend with your own components.
- **450+ combinations** — 3 heads × 5 eyes × 5 eyebrows × 6 mouths × 9 hair colors × 8 accent colors. Every combination feels distinct and recognizable.
- **Truly isomorphic** — one API across all JS runtimes. Works in Node, Bun, Deno, Cloudflare Workers, and the browser — identical output everywhere.

## Quick Start

```bash
pnpm add @brick-avatars/core
```

```ts
import { generateAvatar } from "@brick-avatars/core";

const { svg } = generateAvatar({ seed: "ahmed" });
// svg is a complete <svg>...</svg> string ready to use
```

That's it. Write the SVG to a file, inline it in HTML, or serve it from an API.

## Project Structure

```
brick-avatars/
├── packages/
│   └── core/          # Avatar generation engine
│       ├── src/
│       │   ├── index.ts           # Public exports
│       │   ├── api.ts             # generateAvatar() entry point
│       │   ├── types.ts           # All type definitions
│       │   ├── hash.ts            # MurmurHash3 implementation
│       │   ├── prng.ts            # Seed → slot selections + palette
│       │   ├── composer.ts        # SVG layering engine
│       │   └── components/        # SVG variant functions
│       │       ├── head.ts        # 4 variants
│       │       ├── eyes.ts        # 4 variants
│       │       ├── mouth.ts       # 4 variants
│       │       ├── eyebrows.ts    # 3 variants
│       │       └── index.ts       # Component registry
│       └── __tests__/
└── landing/           # Next.js landing page
```

## Tutorials

### Generate an avatar and save it to a file

```ts
import { writeFileSync } from "node:fs";
import { generateAvatar } from "@brick-avatars/core";

const { svg } = generateAvatar({ seed: "ahmed" });
writeFileSync("avatar.svg", svg);
```

Open `avatar.svg` in any browser to see the result.

### Control the output size

The default size is 128px. Pass `size` to change the pixel dimensions — the internal 128x128 viewBox scales automatically.

```ts
// Thumbnail
const small = generateAvatar({ seed: "ahmed", size: 32 });

// High-res profile picture
const large = generateAvatar({ seed: "ahmed", size: 512 });
```

Both produce identical artwork, only the `width` and `height` attributes differ.

### Override palette colors

Every seed deterministically picks a skin tone, hair color, accent color, and background. You can override any of them:

```ts
const { svg, palette } = generateAvatar({
  seed: "ahmed",
  palette: {
    skin: "#F5D6B8",
    background: "#1E293B",
  },
});

console.log(palette);
// { skin: "#F5D6B8", hair: "#...", accent: "#...", background: "#1E293B" }
```

Unspecified fields are still derived from the seed.

### Inspect what the engine picked

`generateAvatar` returns the full selections and palette alongside the SVG, which is useful for debugging or building UIs on top:

```ts
const result = generateAvatar({ seed: "ahmed" });

console.log(result.selections.head);
// { variantIndex: 2, enabled: true }

console.log(result.selections.glasses);
// { variantIndex: 0, enabled: false }  — this seed has no glasses

console.log(result.palette);
// { skin: "#D49E6A", hair: "#4A2912", accent: "#3B82F6", background: "#DBEAFE" }
```

### Use the lower-level API

For advanced use cases, the individual pipeline stages are all exported:

```ts
import {
  derivePalette,
  selectSlots,
  composeSvg,
  defaultRegistry,
} from "@brick-avatars/core";

// 1. Derive a color palette from a seed
const palette = derivePalette("ahmed");

// 2. Select which variant of each slot to render
const selections = selectSlots("ahmed", defaultRegistry);

// 3. Manually override a selection
selections.eyebrows.variantIndex = 0;

// 4. Compose the final SVG
const svg = composeSvg({
  selections,
  registry: defaultRegistry,
  palette,
  size: 256,
});
```

### Generate a batch of avatars

```ts
import { writeFileSync, mkdirSync } from "node:fs";
import { generateAvatar } from "@brick-avatars/core";

mkdirSync("avatars", { recursive: true });

const users = ["alice", "bob", "charlie", "dana", "eve"];

for (const user of users) {
  const { svg } = generateAvatar({ seed: user });
  writeFileSync(`avatars/${user}.svg`, svg);
}
```

### Inline in HTML

```ts
import { generateAvatar } from "@brick-avatars/core";

const { svg } = generateAvatar({ seed: "ahmed", size: 48 });

const html = `<div class="avatar">${svg}</div>`;
```

Since the output is a plain SVG string, it can be directly inlined without Base64 encoding or `<img>` tags.

### Use as a data URI

```ts
import { generateAvatar } from "@brick-avatars/core";

const { svg } = generateAvatar({ seed: "ahmed" });
const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

// Use in an <img> tag or as a CSS background
const img = `<img src="${dataUri}" alt="avatar" />`;
```

### Serve from an HTTP endpoint

A minimal example using Node's built-in HTTP server:

```ts
import { createServer } from "node:http";
import { generateAvatar } from "@brick-avatars/core";

createServer((req, res) => {
  const seed = req.url?.slice(1) || "default";
  const { svg } = generateAvatar({ seed, size: 256 });

  res.writeHead(200, {
    "Content-Type": "image/svg+xml",
    "Cache-Control": "public, max-age=31536000, immutable",
  });
  res.end(svg);
}).listen(3000);

// GET http://localhost:3000/ahmed → SVG avatar
```

Avatars are deterministic and pure, so they can be cached forever for a given seed.

## How It Works

The generation pipeline has three stages:

```
seed ──→ [PRNG] ──→ [Composer] ──→ SVG
           │             │
           ▼             ▼
     SlotSelections   Layered SVG
     ColorPalette     fragments
```

1. **Hashing** — The seed string is hashed with MurmurHash3 (x86 32-bit) per slot (`seed:head`, `seed:eyes`, etc.). Per-slot hashing means adding variants to one slot never changes selections in other slots.

2. **Selection** — Each hash maps to a variant index and an enabled flag. Required slots (head, eyes, mouth, eyebrows) are always enabled. Optional slots (glasses, facial hair, hats, scars) are probabilistically toggled using a separate hash.

3. **Composition** — The composer iterates slots in z-order (back to front), calls each selected component function with the color palette, and assembles the SVG fragments into a complete document. All components are authored in a shared 128x128 coordinate space.

## Available Slots

| Slot | Variants | Required | Notes |
|------|----------|----------|-------|
| `head` | 4 | Yes | Classic, round, tall, square — all with brick stud |
| `eyes` | 4 | Yes | Dots, round with pupils, sleepy, wide |
| `eyebrows` | 3 | Yes | Flat, raised, angry — uses hair color |
| `mouth` | 4 | Yes | Line, smile, open smile, smirk |
| `facialHair` | — | No (30%) | Coming soon |
| `glasses` | — | No (25%) | Coming soon |
| `headAccessory` | — | No (35%) | Coming soon |
| `scarsMarks` | — | No (15%) | Coming soon |

## Color Palette

Each seed deterministically selects from curated color arrays:

- **Skin** — 6 tones from light to deep
- **Hair** — 9 colors including natural tones and fun colors (blue, purple)
- **Accent** — 8 colors used for accessories and frames
- **Background** — 8 soft pastel backgrounds

## API Reference

### `generateAvatar(options)`

The main entry point.

```ts
function generateAvatar(options: GenerateAvatarOptions): GenerateAvatarResult;
```

**Options:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `seed` | `string` | *(required)* | Any string — usernames, emails, UUIDs |
| `size` | `number` | `128` | Output pixel dimensions (square) |
| `format` | `"svg"` | `"svg"` | Output format |
| `palette` | `Partial<ColorPalette>` | — | Override individual palette colors |

**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `svg` | `string` | Complete SVG document string |
| `selections` | `SlotSelections` | Which variant was picked per slot |
| `palette` | `ColorPalette` | Resolved color palette |

### `derivePalette(seed, overrides?)`

Derive a color palette from a seed, with optional overrides.

```ts
function derivePalette(seed: string, overrides?: Partial<ColorPalette>): ColorPalette;
```

### `selectSlots(seed, registry)`

Produce deterministic slot selections from a seed and component registry.

```ts
function selectSlots(seed: string, registry: ComponentRegistry): SlotSelections;
```

### `composeSvg(options)`

Compose a complete SVG string from selections, a registry, a palette, and a size.

```ts
function composeSvg(options: ComposerOptions): string;
```

### `defaultRegistry`

The built-in component registry containing all available slot variants.

```ts
const defaultRegistry: ComponentRegistry;
```

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Type check
pnpm lint

# Watch mode (core package)
cd packages/core
pnpm dev        # rebuild on changes
pnpm test:watch # rerun tests on changes
```

## License

MIT
