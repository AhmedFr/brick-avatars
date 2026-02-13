import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/app.ts", "src/server.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: "dist",
  external: ["@resvg/resvg-js"],
});
