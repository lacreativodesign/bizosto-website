import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn("group card-hover rounded-2xl border border-border/80 bg-card p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)]", className)}>
      {children}
    </div>
  );
}
