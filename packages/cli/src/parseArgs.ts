import { parseArgs as nodeParseArgs } from "node:util";

export interface ParsedArgs {
  seed: string | undefined;
  out: string | undefined;
  size: number;
  help: boolean;
  version: boolean;
}

export function parseArgs(argv: string[]): ParsedArgs {
  const { values } = nodeParseArgs({
    args: argv,
    options: {
      seed: { type: "string" },
      out: { type: "string" },
      size: { type: "string" },
      help: { type: "boolean", short: "h", default: false },
      version: { type: "boolean", short: "v", default: false },
    },
    strict: true,
  });

  const rawSize = values.size;
  const size = rawSize !== undefined ? parseInt(rawSize, 10) : 128;

  return {
    seed: values.seed,
    out: values.out,
    size,
    help: values.help ?? false,
    version: values.version ?? false,
  };
}
