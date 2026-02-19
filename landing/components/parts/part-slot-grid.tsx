"use client";

import {
  composeSvg,
  derivePalette,
  defaultRegistry,
  type SlotName,
} from "@brick-avatars/core";
import {
  PARTS_PAGE_SLOTS,
  getVariantCount,
  buildSelectionsForPart,
  getSlotLabel,
} from "@/lib/parts";
import { useMemo } from "react";

const PARTS_SEED = "parts-gallery";
const AVATAR_SIZE = 120;

function PartSlotSection({ slot }: { slot: SlotName }) {
  const count = getVariantCount(slot);
  const palette = useMemo(() => derivePalette(PARTS_SEED), []);

  const avatars = useMemo(() => {
    return Array.from({ length: count }, (_, variantIndex) => {
      const selections = buildSelectionsForPart(slot, variantIndex);
      const svg = composeSvg({
        selections,
        registry: defaultRegistry,
        palette,
        size: AVATAR_SIZE,
      });
      return { variantIndex, svg };
    });
  }, [slot, count, palette]);

  return (
    <section className="border-b border-border last:border-b-0 py-10">
      <h2 className="text-xl font-bold text-foreground mb-6">
        {getSlotLabel(slot)}
      </h2>
      <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-10 gap-4">
        {avatars.map(({ variantIndex, svg }) => (
          <div
            key={variantIndex}
            className="flex flex-col items-center gap-2"
          >
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center ring-1 ring-border bg-white shrink-0 [&_svg]:w-full [&_svg]:h-full [&_svg]:object-contain"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
            <span className="text-xs text-muted-foreground font-mono">
              {variantIndex}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PartsGallery() {
  return (
    <div className="flex flex-col">
      {PARTS_PAGE_SLOTS.map((slot) => (
        <PartSlotSection key={slot} slot={slot} />
      ))}
    </div>
  );
}
