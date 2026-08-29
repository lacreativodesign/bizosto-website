import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "btn-sheen bg-primary text-primary-foreground shadow-[0_14px_40px_rgba(51,92,255,0.24)] hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_18px_48px_rgba(51,92,255,0.3)]",
  secondary: "bg-surface-muted text-foreground hover:-translate-y-0.5 hover:bg-surface",
  ghost: "bg-transparent text-foreground hover:bg-surface-muted",
  outline: "border border-border bg-transparent text-foreground hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary",
};

export default function Button({
  children,
  className,
  href,
  onClick,
  disabled = false,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition duration-200",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    "disabled:pointer-events-none disabled:opacity-60",
    variantStyles[variant],
    className
  );

  if (href) return <Link className={classes} href={href}>{children}</Link>;
  return <button className={classes} onClick={onClick} type={type} disabled={disabled}>{children}</button>;
}
