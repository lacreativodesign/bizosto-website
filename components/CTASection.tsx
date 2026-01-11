import Button from "@/components/Button";
import Card from "@/components/Card";

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
    <Card className="flex flex-col items-start justify-between gap-6 bg-surface-muted md:flex-row md:items-center">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/book-demo">{primaryAction}</Button>
        <Button href="/contact" variant="outline">
          {secondaryAction}
        </Button>
      </div>
    </Card>
  );
}
