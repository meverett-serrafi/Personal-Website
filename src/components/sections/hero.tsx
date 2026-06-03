import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      {/* Soft ambient glow — sleek, subtle, dark-friendly. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,theme(colors.foreground/0.06),transparent_60%)]" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground">
            <MapPin className="size-3.5" aria-hidden />
            {site.location}
          </span>

          <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {site.name}
          </h1>

          <p className="font-mono text-base text-muted-foreground sm:text-lg">
            {site.role}
          </p>

          <p className="max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            {site.tagline}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View my work
                <ArrowDown className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                Get in touch
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
