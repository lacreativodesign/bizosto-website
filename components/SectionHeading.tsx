import Badge from "@/components/Badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: HeadingTag = "h2",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("section-heading flex flex-col gap-5", centered ? "items-center text-center" : "text-left", className)}>
      {eyebrow ? <Badge className={centered ? "mx-auto" : undefined}>{eyebrow}</Badge> : null}
      <div className="space-y-4">
        <HeadingTag
          className={cn(
            "text-balance font-display font-semibold tracking-[-0.04em] text-foreground",
            HeadingTag === "h1"
              ? "max-w-[17ch] text-[2.75rem] leading-[1.02] sm:text-5xl lg:text-[4.25rem]"
              : "max-w-[20ch] text-3xl leading-[1.08] sm:text-4xl lg:text-[3.25rem]",
            centered && "mx-auto"
          )}
        >
          {title}
        </HeadingTag>
        {subtitle ? (
          <p className={cn("max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg", centered && "mx-auto")}>{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
