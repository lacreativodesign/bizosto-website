"use client";

import type { ImageProps } from "next/image";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SmartImageProps extends Omit<ImageProps, "src"> {
  src: string;
  fallbackTitle?: string;
  fallbackLabel?: string;
  fallbackClassName?: string;
}

export default function SmartImage({
  src,
  alt,
  className,
  fallbackTitle = "Screenshot placeholder",
  fallbackLabel = "(drop file into /public/...)",
  fallbackClassName,
  ...props
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg border border-border-subtle bg-surface-muted px-4 py-6 text-center text-xs text-muted-foreground shadow-[inset_0_1px_2px_rgba(15,23,42,0.12)]",
          fallbackClassName,
          className
        )}
        role="img"
        aria-label={alt ? `${alt} placeholder` : "Placeholder image"}
      >
        <span className="text-sm font-semibold text-foreground">{fallbackTitle}</span>
        <span>{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
