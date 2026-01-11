"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  variant?: "full" | "mark";
}

export default function LogoMark({ className, variant = "full" }: LogoMarkProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn("flex items-center gap-3 text-foreground", className)}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-muted text-sm font-semibold">
        BZ
      </div>
      {variant === "full" ? (
        <div className="flex items-center">
          {!hasError ? (
            <img
              src="/brand/bizosto.png"
              alt="Bizosto"
              className="h-7 w-auto object-contain"
              onError={() => setHasError(true)}
            />
          ) : (
            <span className="text-base font-semibold tracking-tight">Bizosto</span>
          )}
        </div>
      ) : null}
    </div>
  );
}
