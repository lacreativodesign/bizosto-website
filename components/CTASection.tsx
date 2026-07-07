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
    <div className="cta-band relative overflow-hidden rounded-2xl border border-primary/20 p-8 md:p-10">
      <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-xl space-y-2">
          <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground sm:text-base">{description}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button href="/book-demo">{primaryAction}</Button>
          <Button href="/contact" variant="outline">
            {secondaryAction}
          </Button>
        </div>
      </div>
    </div>
  );
}
