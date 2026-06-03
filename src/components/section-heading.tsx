import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Two-digit index shown as a monospace label, e.g. "01". */
  index?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

/**
 * Consistent section header used across the page: a small monospace index,
 * a large title, and an optional subtitle. Keeps the rhythm identical
 * everywhere so new sections drop in cleanly.
 */
export function SectionHeading({
  index,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 flex flex-col gap-3", className)}>
      <div className="flex items-center gap-3">
        {index ? (
          <span className="font-mono text-sm text-muted-foreground">
            {index}
          </span>
        ) : null}
        <span className="h-px w-8 bg-border" aria-hidden />
      </div>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
