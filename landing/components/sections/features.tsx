import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/section-header";
import { Lock, Code2, Zap, Layers, Sparkles, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  Icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    Icon: Lock,
    badge: "Core",
    title: "Deterministic",
    description:
      "Same seed always produces the same avatar. No randomness at render time — perfect for user profiles, consistent IDs, and reproducible tests.",
  },
  {
    Icon: Code2,
    badge: "Format",
    title: "SVG-First",
    description:
      "Pure SVG output with a 128\u00D7128 viewBox. Scales to any resolution with zero pixelation. Embed inline, use in an <img>, or serve as a file.",
  },
  {
    Icon: Zap,
    badge: "Performance",
    title: "Zero Dependencies",
    description:
      "The entire core package has no runtime dependencies. Tiny bundle footprint. Works in Node, Bun, Deno, Cloudflare Workers, and the browser.",
  },
  {
    Icon: Layers,
    badge: "Architecture",
    title: "Modular Slots",
    description:
      "Head, eyes, eyebrows, mouth — each slot is independently hashed. Adding new variants never changes existing avatars. Extend with your own components.",
  },
  {
    Icon: Sparkles,
    badge: "Variety",
    title: "450+ Combinations",
    description:
      "3 heads \u00D7 5 eyes \u00D7 5 eyebrows \u00D7 6 mouths \u00D7 9 hair colors \u00D7 8 accent colors. Every combination feels distinct and recognizable.",
  },
  {
    Icon: Globe,
    badge: "Runtime",
    title: "Truly Isomorphic",
    description:
      "One API across all JS runtimes. Import in the browser, run in a Worker, call from a CLI, or integrate into an HTTP API — identical output everywhere.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeader
          badge="Why Brick Avatars"
          title="Everything you need"
          description="A complete avatar system designed for production use — from a single function call to a full HTTP API."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border ring-1 ring-border mt-12">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-background p-6 flex flex-col gap-4 hover:bg-muted/40 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="p-2 bg-primary/10">
                  <f.Icon className="size-4 text-primary" />
                </div>
                <Badge variant="outline">{f.badge}</Badge>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  {f.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
