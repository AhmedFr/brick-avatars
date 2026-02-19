"use client";

import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { SlotName } from "@brick-avatars/core";
import { generateAvatar } from "@brick-avatars/core";
import { Download, Shuffle } from "lucide-react";
import { useDeferredValue, useMemo, useState } from "react";

const PRESET_SEEDS = [
  "alice",
  "bob",
  "you@company.com",
  "user_42",
  "42",
  "hello world",
];

const DISPLAY_SLOTS: SlotName[] = [
  "eyes",
  "mouth",
  "facialHair",
  "freckles",
  "glasses",
  "hair",
];

const RAND_WORDS = [
  "pixel",
  "ghost",
  "wave",
  "volt",
  "nova",
  "hex",
  "arc",
  "zen",
];

export function PlaygroundSection() {
  const [seed, setSeed] = useState("ahmed");
  const deferredSeed = useDeferredValue(seed);
  const isPending = seed !== deferredSeed;

  const avatar = useMemo(
    () => generateAvatar({ seed: deferredSeed || "default" }),
    [deferredSeed]
  );

  function randomize() {
    const word = RAND_WORDS[Math.floor(Math.random() * RAND_WORDS.length)];
    const num = Math.floor(Math.random() * 999);
    setSeed(`${word}${num}`);
  }

  function downloadSvg() {
    const blob = new Blob([avatar.svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${seed || "avatar"}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section id="playground" className="bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeader
          badge="Interactive"
          title="Try It Live"
          description="Type any string, name, email, or ID and get a deterministic avatar instantly."
        />

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 mt-12 items-start">
          {/* Controls */}
          <div className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="seed-input"
                className="text-xs font-medium text-foreground mb-1.5 block"
              >
                Seed string
              </label>
              <div className="flex gap-0">
                <Input
                  id="seed-input"
                  value={seed}
                  onChange={(e) => setSeed(e.target.value)}
                  placeholder="Enter any string..."
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={randomize}
                  title="Random seed"
                  className="border-l-0"
                >
                  <Shuffle />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-xs text-muted-foreground">Try:</span>
              {PRESET_SEEDS.map((s) => (
                <Badge
                  key={s}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setSeed(s)}
                >
                  {s}
                </Badge>
              ))}
            </div>

            <div>
              <p className="text-xs font-medium mb-2 text-foreground">
                Generated palette
              </p>
              <div className="flex gap-3">
                {(["skin", "hair", "accent", "background"] as const).map(
                  (key) => (
                    <div key={key} className="flex flex-col items-center gap-1">
                      <div
                        className="w-8 h-8 ring-1 ring-border"
                        style={{ backgroundColor: avatar.palette[key] }}
                        title={avatar.palette[key]}
                      />
                      <span className="text-xs text-muted-foreground capitalize">
                        {key}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium mb-2 text-foreground">
                Slot selections
              </p>
              <div className="ring-1 ring-border divide-y divide-border">
                {DISPLAY_SLOTS.map((slot) => {
                  const sel = avatar.selections[slot];
                  return (
                    <div
                      key={slot}
                      className="flex items-center justify-between px-3 py-1.5"
                    >
                      <span className="text-xs font-mono text-muted-foreground">
                        {slot}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-foreground">
                          variant {sel.variantIndex}
                        </span>
                        <Badge
                          variant={sel.enabled ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {sel.enabled ? "on" : "off"}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Avatar display */}
          <div className="flex flex-col items-center gap-4 lg:px-8">
            <div
              className={cn(
                "w-40 h-40 ring-1 ring-border bg-white flex items-center justify-center transition-opacity",
                isPending && "opacity-50"
              )}
              dangerouslySetInnerHTML={{ __html: avatar.svg }}
            />
            <Button size="sm" onClick={downloadSvg}>
              <Download data-icon="inline-start" />
              Download SVG
            </Button>
            <p className="text-xs text-muted-foreground font-mono text-center break-all max-w-[160px]">
              &quot;{deferredSeed || "..."}&quot;
            </p>
          </div>

          {/* Code preview */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium text-foreground">Usage</p>
            <div className="bg-background ring-1 ring-border p-4 font-mono text-xs leading-relaxed overflow-auto">
              <pre>{`import { generateAvatar } from "@brick-avatars/core";

const { svg, palette, selections } =
  generateAvatar({
    seed: "${deferredSeed || "your-seed"}",
  });`}</pre>
            </div>
            <p className="text-xs font-medium text-foreground">SVG output</p>
            <div className="bg-background ring-1 ring-border p-4 font-mono text-xs leading-relaxed overflow-auto max-h-44">
              <pre className="whitespace-pre-wrap break-all text-muted-foreground">
                {avatar.svg.slice(0, 300)}
                <span className="text-primary">&hellip;</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
