import Link from "next/link";
import Container from "@/components/Container";
import LogoMark from "@/components/LogoMark";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="flex flex-col gap-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <LogoMark />
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          Powered by LA CREATIVO GROUP, LLC
        </p>
      </Container>
    </footer>
  );
}
