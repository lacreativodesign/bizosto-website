import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionVariant = "default" | "premium" | "muted";

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: SectionVariant;
}

const variantStyles: Record<SectionVariant, string> = {
  default: "section-default section-spacing",
  premium: "premium-section page-hero section-spacing",
  muted: "section-muted section-spacing",
};

export default function Section({
  children,
  className,
  variant = "default",
}: SectionProps) {
  return <section className={cn(variantStyles[variant], className)}>{children}</section>;
}
