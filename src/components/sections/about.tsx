import { SectionHeading } from "@/components/section-heading";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { about, site } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading index="01" title={about.heading} />

      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
        <div className="flex flex-col gap-4">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          {/* Portrait — swap by setting `avatar` in content.ts. */}
          <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-muted/30">
            <ImagePlaceholder
              src={site.avatar}
              alt={`Portrait of ${site.name}`}
              label="Add a portrait"
            />
          </div>

          <dl className="flex flex-col divide-y divide-border/60">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-center justify-between gap-4 py-3"
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="text-right text-sm">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
