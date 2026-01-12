import Link from "next/link";
import Container from "@/components/Container";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-10">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Powered by LA CREATIVO GROUP, LLC
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {footerLinks.map((link, index) => (
              <span key={link.href} className="flex items-center gap-3">
                <Link href={link.href} className="transition hover:text-foreground">
                  {link.label}
                </Link>
                {index < footerLinks.length - 1 ? (
                  <span className="text-muted-foreground/60">|</span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
