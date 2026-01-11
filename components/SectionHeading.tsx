import Badge from "@/components/Badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left";

  return (
    <div className={cn("flex flex-col gap-4", alignment)}>
      {eyebrow ? <Badge className={align === "center" ? "mx-auto" : undefined}>{eyebrow}</Badge> : null}
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
