"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { signupCtaLabel, signupHref } from "@/lib/launch-stage";

const links = [
  { href: "/product", label: "Product" },
  { href: "/integrations", label: "Integrations" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/ai-workforce", label: "AI Workforce" },
  { href: "/pricing", label: "Pricing" },
  { href: "/book-demo", label: "Book a Demo" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="relative md:hidden">
      <button
        className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-xs font-semibold text-foreground"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation-menu"
      >
        Menu
      </button>
      {open ? (
        <div
          id="mobile-navigation-menu"
          className="menu-pop absolute right-0 top-12 z-20 w-56 rounded-lg border border-border bg-surface p-4 shadow-lg"
        >
          <nav className="flex flex-col gap-3 text-sm text-foreground" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-1 transition hover:bg-surface-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 space-y-2 border-t border-border pt-4">
            <a
              href="https://app.bizosto.com/login"
              className="block rounded-md px-2 py-1 text-sm font-medium text-muted-foreground transition hover:bg-surface-muted hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Sign In
            </a>
            <a
              href={signupHref()}
              className="block rounded-md bg-primary px-2 py-2 text-center text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              onClick={() => setOpen(false)}
            >
              {signupCtaLabel}
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
