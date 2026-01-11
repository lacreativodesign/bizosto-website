import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  variant?: "full" | "mark";
}

export default function LogoMark({ className, variant = "full" }: LogoMarkProps) {
  return (
    <div className={cn("flex items-center gap-2 text-foreground", className)}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-muted text-sm font-semibold">
        BZ
      </div>
      {variant === "full" ? (
        <span className="text-base font-semibold tracking-tight">Bizosto ERP</span>
      ) : null}
    </div>
  );
}
