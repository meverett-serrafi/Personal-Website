import type { ComponentType, SVGProps } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/brand-icons";
import { socials, type SocialLink } from "@/lib/content";
import { cn } from "@/lib/utils";

const ICONS: Record<SocialLink["icon"], ComponentType<SVGProps<SVGSVGElement>>> =
  {
    github: GithubIcon,
    linkedin: LinkedinIcon,
    mail: Mail,
    twitter: XIcon,
  };

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socials.map((social) => {
        const Icon = ICONS[social.icon];
        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={social.label}
            className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Icon className="size-[18px]" aria-hidden />
          </a>
        );
      })}
    </div>
  );
}
