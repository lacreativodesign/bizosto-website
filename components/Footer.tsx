import Link from "next/link";
import Container from "@/components/Container";
import LogoMark from "@/components/LogoMark";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <LogoMark />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              The all-in-one platform for service businesses. CRM, projects, finance, HR, and
              client portal — connected, automated, and built to scale with you.
            </p>
            <p className="text-xs text-muted-foreground">
              A product of{" "}
              <a
                href="https://www.lacreativogroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition hover:text-foreground"
              >
                LA CREATIVO GROUP, LLC
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
              Product
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/product" className="transition hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="transition hover:text-foreground">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="transition hover:text-foreground">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="transition hover:text-foreground">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="https://app.bizosto.com/signup" className="transition hover:text-foreground">
                  Start Free Trial
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
              Company
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="transition hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/book-demo" className="transition hover:text-foreground">
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/bizosto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
              Account
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://app.bizosto.com/login" className="transition hover:text-foreground">
                  Sign In
                </a>
              </li>
              <li>
                <a href="https://app.bizosto.com/signup" className="transition hover:text-foreground">
                  Create Account
                </a>
              </li>
              <li>
                <Link href="/privacy" className="transition hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-foreground">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {currentYear} LA CREATIVO GROUP, LLC. All rights reserved.</p>
          <p>Bizosto® — Business Operating System</p>
        </div>
      </Container>
    </footer>
  );
}
