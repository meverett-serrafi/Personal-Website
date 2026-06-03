import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading index="03" title="Skills" />

      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="bg-background p-6">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="secondary" className="font-normal">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
