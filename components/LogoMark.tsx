import SmartImage from "@/components/SmartImage";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  variant?: "full" | "mark";
}

export default function LogoMark({ className, variant = "full" }: LogoMarkProps) {
  return (
    <div className={cn("flex items-center gap-2 text-foreground", className)}>
      <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-muted">
        <SmartImage
          src="/brand/bizosto.png"
          alt="Bizosto"
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
          fallbackTitle="Logo placeholder"
          fallbackLabel="(drop file into /public/brand/bizosto.png)"
        />
      </div>
      {variant === "full" ? (
        <span className="text-base font-semibold tracking-tight">Bizosto ERP</span>
      ) : null}
    </div>
  );
}
