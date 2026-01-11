import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ForwardedRef,
  ReactNode,
} from "react";
import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

type ButtonSharedProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
};

type ButtonAsButton = ButtonSharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "disabled"> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonSharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_12px_30px_rgba(43,108,255,0.25)] hover:bg-primary-hover",
  secondary:
    "bg-surface-muted text-foreground hover:bg-surface-strong border border-border",
  ghost: "bg-transparent text-foreground hover:bg-surface-muted",
  outline: "border border-border text-foreground hover:border-primary/60 hover:text-foreground",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60";

function ButtonComponent(
  { children, className, href, variant = "primary", disabled, ...rest }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    if (disabled) {
      return (
        <span className={classes} aria-disabled="true">
          {children}
        </span>
      );
    }

    return (
      <Link className={classes} href={href} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      {...rest}
    >
      {children}
    </button>
  );
}

const Button = forwardRef(ButtonComponent);
Button.displayName = "Button";

export default Button;
