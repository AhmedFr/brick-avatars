![heads](./hero.png)

![heads](./heads.png)

## Features

- **Deterministic** — same seed always produces the same avatar. No randomness at render time — perfect for user profiles, consistent IDs, and reproducible tests.
- **SVG-first** — pure SVG output with a 128×128 viewBox. Scales to any resolution with zero pixelation. Embed inline, use in an `<img>`, or serve as a file.
- **Modular slots** — head, eyes, eyebrows, mouth — each slot is independently hashed. Adding new variants never changes existing avatars. Extend with your own components.

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

The default size is 128px. Pass `size` to change the pixel dimensions — the internal 128x128 viewBox scales automatically.

```ts
// Thumbnail
const small = generateAvatar({ seed: "ahmed", size: 32 });

// High-res profile picture
const large = generateAvatar({ seed: "ahmed", size: 512 });
```

Both produce identical artwork, only the `width` and `height` attributes differ.

Author: Ahmed Abouelleil
