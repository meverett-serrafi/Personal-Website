import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24"
    >
      <SectionHeading index="02" title="Experience" />

      <ol className="relative flex flex-col gap-12 border-l border-border/60 pl-8">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative">
            {/* Timeline node */}
            <span
              aria-hidden
              className="absolute -left-[2.1rem] top-1.5 size-3 rounded-full border-2 border-background bg-foreground"
            />

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-medium">
                  {item.role}{" "}
                  <span className="text-muted-foreground">· {item.company}</span>
                </h3>
                <span className="font-mono text-sm text-muted-foreground">
                  {item.period}
                </span>
              </div>

              {item.location ? (
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {item.location}
                </p>
              ) : null}

              <p className="text-pretty text-muted-foreground">{item.summary}</p>

              <ul className="flex list-disc flex-col gap-1.5 pl-5 text-sm text-muted-foreground marker:text-muted-foreground/40">
                {item.highlights.map((highlight, i) => (
                  <li key={i} className="text-pretty">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
