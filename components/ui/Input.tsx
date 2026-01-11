import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-md border bg-surface px-3 py-2 text-sm text-foreground shadow-[inset_0_1px_2px_rgba(15,23,42,0.08)] placeholder:text-muted-foreground transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60",
        hasError ? "border-primary/60" : "border-border",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";

export default Input;
