import { Resvg } from "@resvg/resvg-js";

export function svgToPng(svg: string, size: number): Uint8Array {
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: size,
    },
  });
  const rendered = resvg.render();
  return new Uint8Array(rendered.asPng());
}
