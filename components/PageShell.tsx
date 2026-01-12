import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export default function PageShell({ children, className }: PageShellProps) {
  return (
    <div className={cn("page-shell", className)}>
      <div className="relative z-10 flex flex-col">{children}</div>
    </div>
  );
}
