"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import LogoMark from "@/components/LogoMark";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/integrations", label: "Integrations" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/ai-workforce", label: "AI Workforce" },
  { href: "/pricing", label: "Pricing" },
  { href: "/book-demo", label: "Book a Demo" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 border-b backdrop-blur transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-border bg-background/95 shadow-md shadow-slate-900/5"
          : "border-transparent bg-background/80"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://app.bizosto.com/login"
            className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            Sign In
          </a>
          <ThemeToggle />
          <a
            href="https://app.bizosto.com/signup"
            className="btn-sheen inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Start Free Trial
          </a>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
