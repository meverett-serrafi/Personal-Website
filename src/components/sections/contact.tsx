import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <SectionHeading index="04" title="Get in touch" />

      <div className="flex flex-col items-start gap-8 rounded-xl border border-border bg-muted/20 p-8 sm:p-12">
        <p className="max-w-2xl text-pretty text-lg text-muted-foreground">
          I&apos;m actively looking for software engineering internships and
          always happy to talk about interesting problems or just connect. Drop
          me a line and I&apos;ll get back to you.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Button asChild size="lg">
            <a href={`mailto:${site.email}`}>
              {site.email}
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
          {site.resumeUrl ? (
            <Button asChild variant="outline" size="lg">
              <a href={site.resumeUrl} target="_blank" rel="noreferrer">
                Résumé
              </a>
            </Button>
          ) : null}
        </div>

        <SocialLinks className="-ml-2" />
      </div>
    </section>
  );
}
