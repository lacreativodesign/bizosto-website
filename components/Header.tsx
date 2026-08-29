"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
        "premium-header sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300",
        scrolled ? "premium-header--scrolled" : "border-white/10"
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between">
        <Link href="/" className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" aria-label="Bizosto home">
          <LogoMark className="text-white" />
        </Link>

        <nav className="hidden items-center gap-5 text-[0.82rem] font-medium text-slate-300 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link px-1 py-2 transition hover:text-white">
              {link.label}
            </Link>
          ))}
          <Link href="/book-demo" className="nav-link px-1 py-2 transition hover:text-white">
            Book a Demo
          </Link>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="https://app.bizosto.com/login" className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:text-white">
            Sign in
          </a>
          <ThemeToggle />
          <a
            href="https://app.bizosto.com/signup"
            className="btn-sheen inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#071225] shadow-[0_12px_34px_rgba(0,0,0,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Start free
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
