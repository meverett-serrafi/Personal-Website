import { SocialLinks } from "@/components/social-links";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {site.name}. Built with Next.js & Tailwind.
        </p>
        <SocialLinks className="-mr-2" />
      </div>
    </footer>
  );
}
