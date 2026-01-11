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
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
        {subtitle ? (
          <p className="text-base text-muted-foreground sm:text-lg">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
