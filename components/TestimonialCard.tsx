import Card from "@/components/Card";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export default function TestimonialCard({ quote, name, title, company }: TestimonialCardProps) {
  return (
    <Card className="space-y-4">
      <p className="text-sm text-muted-foreground">"{quote}"</p>
      <div>
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">
          {title} · {company}
        </p>
      </div>
    </Card>
  );
}
