import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import LogoMark from "@/components/LogoMark";

const productLinks = [
  ["Features", "/product"], ["Integrations", "/integrations"], ["Use Cases", "/use-cases"],
  ["How It Works", "/how-it-works"], ["AI Workforce", "/ai-workforce"], ["Pricing", "/pricing"],
] as const;

const companyLinks = [
  ["About", "/about"], ["Blog", "/blog"], ["Book a Demo", "/book-demo"], ["Contact", "/contact"], ["Security", "/security"],
] as const;

const legalLinks = [
  ["Privacy", "/privacy"], ["Terms", "/terms"], ["Refund Policy", "/refund-policy"], ["Cookie Policy", "/cookies"],
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer border-t border-white/10 bg-[#06101f] text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.35fr_0.65fr_0.65fr_0.65fr]">
          <div className="space-y-6">
            <LogoMark className="text-white" />
            <p className="max-w-md text-base leading-relaxed text-slate-400">
              One intelligent operating system for sales, delivery, finance, people, and every client relationship.
            </p>
            <a href="https://app.bizosto.com/signup" className="footer-trial-pill inline-flex items-center gap-2 text-sm font-bold text-white">
              Start your 14-day trial <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="text-xs text-slate-500">
              A product of <a href="https://www.lacreativogroup.com" target="_blank" rel="noopener noreferrer" className="underline decoration-white/20 underline-offset-4 transition hover:text-white">LA CREATIVO GROUP, LLC</a>
            </p>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        <div className="flex flex-col gap-5 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} LA CREATIVO GROUP, LLC. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="https://www.linkedin.com/company/bizosto/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">LinkedIn</a>
            <a href="https://app.bizosto.com/login" className="transition hover:text-white">Sign in</a>
            <span>Bizosto® — Business Operating System</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: ReadonlyArray<readonly [string, string]> }) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-200">{title}</p>
      <ul className="space-y-3 text-sm text-slate-400">
        {links.map(([label, href]) => (
          <li key={href}><Link href={href} className="transition hover:text-white">{label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
