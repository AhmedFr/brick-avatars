export function FooterSection() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-foreground">
              Brick Avatars
            </span>
            <span className="text-xs text-muted-foreground">
              MIT License &mdash; Free and open source
            </span>
          </div>

          <nav className="flex gap-4 flex-wrap">
            {[
              {
                href: "https://github.com/AhmedFr/brick-avatars",
                label: "GitHub",
              },
              {
                href: "https://npmjs.com/package/@brick-avatars/core",
                label: "npm",
              },
              { href: "#playground", label: "Playground" },
              { href: "#features", label: "Features" },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <span className="text-xs text-muted-foreground">
            Built with Next.js, Tailwind, shadcn
          </span>
        </div>
      </div>
    </footer>
  );
}
