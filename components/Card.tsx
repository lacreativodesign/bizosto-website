import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn("group surface-card card-hover rounded-2xl border border-border/80 p-6", className)}>
      {children}
    </div>
  );
}
