import Badge from "@/components/Badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: HeadingTag = "h2",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left";

  return (
    <div className={cn("flex flex-col gap-4", alignment)}>
      {eyebrow ? <Badge className={align === "center" ? "mx-auto" : undefined}>{eyebrow}</Badge> : null}
      <div className="space-y-2">
        <HeadingTag
          className={
            HeadingTag === "h1"
              ? "text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
              : "text-2xl font-semibold text-foreground sm:text-3xl"
          }
        >
          {title}
        </HeadingTag>
        {subtitle ? (
          <p className="text-base text-muted-foreground sm:text-lg">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
