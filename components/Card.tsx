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
        "group card-hover rounded-xl border border-border bg-card p-6 shadow-sm shadow-slate-900/5",
        className
      )}
    >
      {children}
    </div>
  );
}
