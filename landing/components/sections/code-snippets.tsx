"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { CopyButton } from "@/components/ui/copy-button";
import { cn } from "@/lib/utils";

const TABS = [
  {
    id: "library",
    label: "Library",
    filename: "generate-avatar.ts",
    code: `import { generateAvatar } from "@brick-avatars/core";

// Basic usage
const { svg, palette, selections } = generateAvatar({
  seed: "ahmed",
});

// Set it as innerHTML
document.getElementById("avatar").innerHTML = svg;

// Custom size (scales the SVG)
const big = generateAvatar({ seed: "ahmed", size: 256 });

// Override palette colors
const custom = generateAvatar({
  seed: "ahmed",
  palette: { hair: "#3B82F6", accent: "#EF4444" },
});`,
  },
  //   {
  //     id: "cli",
  //     label: "CLI",
  //     filename: "terminal",
  //     code: `# Generate and save an SVG file
  // npx brick-avatar --seed "ahmed" --out avatar.svg

  // # Pipe SVG to stdout
  // npx brick-avatar --seed "ahmed"

  // # Custom output size
  // npx brick-avatar --seed "ahmed" --size 256 --out large.svg

  // # Show help
  // npx brick-avatar --help`,
  //   },
  //   {
  //     id: "http",
  //     label: "HTTP API",
  //     filename: "curl",
  //     code: `# SVG response
  // curl http://localhost:3000/avatar/ahmed.svg

  // # PNG response (server-rendered via resvg)
  // curl http://localhost:3000/avatar/ahmed.png -o avatar.png

  // # Custom size via query param
  // curl http://localhost:3000/avatar/ahmed.svg?size=256

  // # Start the API server
  // cd packages/api && pnpm start
  // # => brick-avatars API listening on http://localhost:3000`,
  //   },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function CodeSnippetsSection() {
  const [activeTab, setActiveTab] = useState<TabId>("library");
  const tab = TABS.find((t) => t.id === activeTab)!;

  return (
    <section className="bg-muted/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeader
          badge="Usage"
          title="Dead simple API"
          description="One function. Three deployment targets. Zero configuration."
        />

        <div className="flex gap-0 mt-12 ring-1 ring-border w-fit">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={cn(
                "px-4 py-2 text-xs font-medium transition-colors cursor-pointer",
                i < TABS.length - 1 && "border-r border-border",
                activeTab === t.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="ring-1 ring-border">
          <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
            <span className="text-xs text-muted-foreground font-mono">
              {tab.filename}
            </span>
            <CopyButton text={tab.code} />
          </div>
          <pre className="p-6 text-xs font-mono leading-relaxed overflow-auto bg-background text-foreground max-h-96">
            <code>{tab.code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
