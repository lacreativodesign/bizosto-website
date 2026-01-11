"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";

const links = [
  { href: "/product", label: "Product" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/book-demo", label: "Book a Demo" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-xs font-semibold text-foreground"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
        aria-expanded={open}
      >
        Menu
      </button>
      {open ? (
        <div className="absolute right-0 top-12 z-20 w-56 rounded-lg border border-border bg-surface p-4 shadow-lg">
          <nav className="flex flex-col gap-3 text-sm text-foreground">
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
          <div className="mt-4">
            <Button href="/book-demo" className="w-full">
              Book a Demo
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
