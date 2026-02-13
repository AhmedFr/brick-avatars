import { writeFileSync } from "node:fs";
import { generateAvatar } from "@brick-avatars/core";
import { parseArgs } from "./parseArgs.js";
import { HELP_TEXT, VERSION } from "./help.js";

export function run(argv: string[] = process.argv.slice(2)): void {
  let args;
  try {
    args = parseArgs(argv);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    process.stderr.write(`Error: ${message}\n\nRun brick-avatar --help for usage.\n`);
    process.exit(1);
  }

  if (args.help) {
    process.stdout.write(HELP_TEXT + "\n");
    process.exit(0);
  }

  if (args.version) {
    process.stdout.write(VERSION + "\n");
    process.exit(0);
  }

  if (args.seed === undefined) {
    process.stderr.write(
      "Error: --seed is required.\n\nRun brick-avatar --help for usage.\n"
    );
    process.exit(1);
  }

  if (isNaN(args.size) || args.size <= 0) {
    process.stderr.write(
      `Error: --size must be a positive integer.\n`
    );
    process.exit(1);
  }

  const { svg } = generateAvatar({ seed: args.seed, size: args.size });

  if (args.out) {
    writeFileSync(args.out, svg, "utf8");
  } else {
    process.stdout.write(svg + "\n");
  }
}
