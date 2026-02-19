import { SectionHeader } from "@/components/section-header";
import { PartsGallery } from "@/components/parts/part-slot-grid";
import { FooterSection } from "@/components/sections/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "All parts — Brick Avatars",
  description:
    "Browse every eyes, mouth, hair, facial hair, glasses, and freckles variant.",
};

export default function PartsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>

        <SectionHeader
          title="All parts"
          description="Every variant for each category, shown on a fixed avatar. Same seed for consistent skin and hair color across the page."
          className="mb-12"
        />

        <PartsGallery />
      </div>
      <FooterSection />
    </main>
  );
}
