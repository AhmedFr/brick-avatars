import { getHeroAvatars } from "@/lib/avatars";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CopyButton } from "@/components/ui/copy-button";
import { Github, ExternalLink } from "lucide-react";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-2xl font-black text-foreground leading-none">
        {value}
      </span>
      <span className="text-xs text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export function HeroSection() {
  const heroAvatars = getHeroAvatars();

  return (
    <section className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Badge variant="outline" className="mb-5">
            v0.1.0
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none mb-6">
            Brick
            <span className="text-primary block">Avatars</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-md mb-8 leading-relaxed">
            Deterministic LEGO-style avatar generator. Same seed, same face
            &mdash; always. 450+ combinations, SVG-first.
          </p>

          <div className="flex items-center gap-0 mb-6 ring-1 ring-border bg-muted w-fit">
            <span className="px-3 py-2 text-xs font-mono text-muted-foreground select-none border-r border-border bg-muted">
              $
            </span>
            <code className="px-3 py-2 text-xs font-mono text-foreground select-all">
              npm install @brick-avatars/core
            </code>
            <CopyButton
              text="npm install @brick-avatars/core"
              className="border-l border-border"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            <Button size="lg" asChild>
              <a
                href="https://github.com/ahmedabouelleil/brick-avatars"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github data-icon="inline-start" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.npmjs.com/package/@brick-avatars/core"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink data-icon="inline-start" />
                npm
              </a>
            </Button>
          </div>

          <div className="flex gap-8 mt-10 pt-6 border-t border-border flex-wrap">
            <Stat value="450+" label="Combinations" />
            <Stat value="128px" label="SVG base" />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-4 gap-px bg-border ring-1 ring-border">
            {heroAvatars.map(({ seed, svg }) => (
              <div
                key={seed}
                className="bg-background p-4 flex items-center justify-center aspect-square group hover:bg-primary/5 transition-colors"
              >
                <div
                  className="w-16 h-16 [&>svg]:w-full [&>svg]:h-full group-hover:scale-110 transition-transform"
                  dangerouslySetInnerHTML={{ __html: svg }}
                />
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3">
            12 avatars &mdash; each generated from a unique string seed
          </p>
        </div>
      </div>
    </section>
  );
}
