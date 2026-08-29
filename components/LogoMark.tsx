"use client";

import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  variant?: "full" | "mark";
}

export default function LogoMark({ className, variant = "full" }: LogoMarkProps) {
  return (
    <div className={cn("flex items-center gap-2.5 text-foreground", className)}>
      <div className="logo-mark flex h-9 w-9 items-center justify-center rounded-xl text-sm font-extrabold text-white shadow-lg shadow-blue-950/20">
        B
      </div>
      {variant === "full" ? (
        <span className="text-[1.08rem] font-bold tracking-[-0.03em] text-current">Bizosto</span>
      ) : null}
    </div>
  );
}
