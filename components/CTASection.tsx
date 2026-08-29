import { ArrowUpRight } from "lucide-react";
import Button from "@/components/Button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryAction?: string;
  secondaryAction?: string;
}

export default function CTASection({
  title,
  description,
  primaryAction = "Book a Demo",
  secondaryAction = "Contact",
}: CTASectionProps) {
  return (
    <div className="cta-band relative overflow-hidden rounded-[2rem] border border-white/10 p-8 sm:p-10 lg:p-14">
      <div className="cta-band__brand" aria-hidden="true">
        <span className="cta-band__brand-ring" />
        <span className="cta-band__brand-mark">B</span>
      </div>
      <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Build the operating advantage</p>
          <h3 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl">{title}</h3>
          <p className="max-w-xl text-base text-slate-300">{description}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button href="/book-demo" className="cta-band__primary bg-white hover:bg-cyan-50">
            {primaryAction}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="/contact" variant="outline" className="border-white/20 text-white hover:border-cyan-300 hover:text-cyan-200">
            {secondaryAction}
          </Button>
        </div>
      </div>
    </div>
  );
}
