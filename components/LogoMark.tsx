import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  variant?: "full" | "mark";
}

export default function LogoMark({ className, variant = "full" }: LogoMarkProps) {
  return (
    <div className={cn("flex items-center gap-2.5 text-foreground", className)}>
      <div
        className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
        style={{ background: "linear-gradient(135deg, #012167 0%, #6692f9 100%)" }}
      >
        B
      </div>
      {variant === "full" ? (
        <span
          className="text-[1.05rem] font-semibold tracking-tight text-foreground"
          style={{ letterSpacing: "-0.01em" }}
        >
          Bizosto
        </span>
      ) : null}
    </div>
  );
}
