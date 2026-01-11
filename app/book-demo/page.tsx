import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata = {
  title: "Book a Demo",
  description: "Schedule a Bizosto ERP demo and align your workflow rollout.",
};

export default function BookDemoPage() {
  return (
    <div className="space-y-16 pb-20 pt-12">
      <Container className="space-y-6">
        <SectionHeading
          eyebrow="Book a demo"
          title="Walk through the Bizosto ERP master UI"
          subtitle="We will map your workflows and confirm the right module scope and rollout timeline."
        />
        <Card className="space-y-4">
          <p className="text-sm text-muted-foreground">
            A scheduling embed will appear here. Connect a Calendly or Google Calendar link in a future
            step.
          </p>
          <div className="h-64 rounded-lg border border-dashed border-border bg-surface-muted" />
        </Card>
        <Card className="flex flex-col items-start justify-between gap-4 bg-surface-muted sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-foreground">Prefer email?</p>
            <p className="text-sm text-muted-foreground">Reach us directly and we will schedule a demo.</p>
          </div>
          <Button href="mailto:hello@bizosto.com" variant="outline">
            Email us
          </Button>
        </Card>
      </Container>
    </div>
  );
}
