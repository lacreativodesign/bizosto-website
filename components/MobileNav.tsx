"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

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

  return (
    <div className="relative lg:hidden">
      <button
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition hover:bg-white/10"
        onClick={() => setOpen((current) => !current)}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
      >
        {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
      </button>

      {open ? (
        <div id="mobile-navigation" className="menu-pop absolute right-0 top-13 z-20 w-[min(19rem,calc(100vw-2rem))] rounded-2xl border border-white/10 bg-[#0a1830]/98 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <nav className="grid gap-1 text-sm text-white" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-slate-200 transition hover:bg-white/[0.07] hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
            <a href="https://app.bizosto.com/login" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.07] hover:text-white" onClick={() => setOpen(false)}>
              Sign in
            </a>
            <a href="https://app.bizosto.com/signup" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#071225]" onClick={() => setOpen(false)}>
              Start free trial
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
