import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import LogoMark from "@/components/LogoMark";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/book-demo", label: "Book a Demo" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="/book-demo">Book a Demo</Button>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
