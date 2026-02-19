import { writeFileSync, mkdirSync } from "node:fs";
import { generateAvatar } from "./dist/index.js";

mkdirSync("demo-output", { recursive: true });

const seeds = [
  "ahmed",
  "alice",
  "bob",
  "charlie",
  "dana",
  "eve",
  "frank",
  "grace",
  "hiro",
  "luna",
];

for (const seed of seeds) {
  const { svg, selections, palette } = generateAvatar({ seed, size: 256 });
  writeFileSync(`demo-output/${seed}.svg`, svg);
  console.log(
    `${seed}: eyes=${selections.eyes.variantIndex} mouth=${selections.mouth.variantIndex} skin=${palette.skin}`,
  );
}

console.log(
  `\nGenerated ${seeds.length} avatars in packages/core/demo-output/`,
);
console.log("Open any .svg file in your browser to see the result.");
