export const VERSION = "0.2.0";

export const HELP_TEXT = `
brick-avatar — generate a brick-toy avatar

USAGE
  brick-avatar --seed <string> [options]

OPTIONS
  --seed <string>   Seed string for the avatar (required)
  --out <path>      Write SVG to this file path (default: stdout)
  --size <number>   Avatar size in pixels (default: 128)
  --help, -h        Show this help message
  --version, -v     Show version number

EXAMPLES
  brick-avatar --seed "ahmed"
  brick-avatar --seed "ahmed" --size 256 --out avatar.svg
`.trim();
