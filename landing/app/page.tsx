import { HeroSection } from "@/components/sections/hero";
import { PlaygroundSection } from "@/components/sections/playground";
import { FeaturesSection } from "@/components/sections/features";
import { CodeSnippetsSection } from "@/components/sections/code-snippets";
import { FooterSection } from "@/components/sections/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PlaygroundSection />
      <FeaturesSection />
      <CodeSnippetsSection />
      <FooterSection />
    </main>
  );
}
