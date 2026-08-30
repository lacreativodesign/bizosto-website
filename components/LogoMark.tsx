"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  variant?: "full" | "mark";
}

export default function LogoMark({ className, variant = "full" }: LogoMarkProps) {
  return (
    <div className={cn("flex items-center gap-2.5 text-foreground", className)}>
      <Image
        src="/brand/bizosto-mark.png"
        alt=""
        width={36}
        height={36}
        sizes="36px"
        className="logo-mark h-9 w-9 shrink-0 object-contain"
      />
      {variant === "full" ? (
        <span className="text-[1.08rem] font-bold tracking-[-0.03em] text-current">Bizosto</span>
      ) : null}
    </div>
  );
}
