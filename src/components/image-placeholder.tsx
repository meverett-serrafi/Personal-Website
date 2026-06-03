import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  /** Path under /public. If empty, a styled placeholder is rendered instead. */
  src?: string;
  alt: string;
  className?: string;
  /** Optional label shown inside the placeholder state. */
  label?: string;
};

/**
 * Renders a next/image when `src` is provided, otherwise a sleek gradient
 * placeholder. This lets the base look finished before you've added photos —
 * drop files into /public and set the `image`/`avatar` paths in content.ts.
 */
export function ImagePlaceholder({
  src,
  alt,
  className,
  label = "Add an image",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    );
  }

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-2",
        "bg-[radial-gradient(circle_at_30%_20%,theme(colors.muted/0.8),transparent_60%)]",
        "border-dashed",
        className,
      )}
      role="img"
      aria-label={alt}
    >
      <ImageIcon className="size-6 text-muted-foreground/60" aria-hidden />
      <span className="font-mono text-xs text-muted-foreground/60">
        {label}
      </span>
    </div>
  );
}
