import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[var(--shadow-card-hover)]",
        className
      )}
    >
      {children}
    </div>
  );
}
