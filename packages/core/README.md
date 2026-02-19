![heads](./hero.png)

![heads](./heads.png)

## Features

- **Deterministic** — same seed always produces the same avatar. No randomness at render time — perfect for user profiles, consistent IDs, and reproducible tests.
- **SVG-first** — pure SVG output with a 256×256 viewBox. Scales to any resolution with zero pixelation. Embed inline, use in an `<img>`, or serve as a file.
- **Modular slots** — eyes and mouth always on; optional hair, facial hair, glasses, and freckles. Each slot is independently hashed. Adding new variants never changes existing avatars. Extend with your own components.

## Quick Start

```bash
pnpm add @brick-avatars/core
```

```ts
import { generateAvatar } from "@brick-avatars/core";

const { svg } = generateAvatar({ seed: "ahmed" });
// svg is a complete <svg>...</svg> string ready to use
```

That's it. 

### Control the output size

The default size is 256px. Pass `size` to change the pixel dimensions — the internal 256×256 viewBox scales automatically.

```ts
// Thumbnail
const small = generateAvatar({ seed: "ahmed", size: 32 });

// High-res profile picture
const large = generateAvatar({ seed: "ahmed", size: 512 });
```

Both produce identical artwork, only the `width` and `height` attributes differ.

Author: Ahmed Abouelleil
