import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "How it Works",
  description: "Discover the Bizosto 3-step flow from lead capture to delivery and reporting.",
};

const steps = [
  {
    title: "Capture leads",
    description:
      "Collect inbound requests, standardize intake, and route leads to the right owners with SLA controls.",
  },
  {
    title: "Manage pipeline",
    description:
      "Convert pipeline into scoped delivery plans with approval gates, resourcing, and commitments.",
  },
  {
    title: "Deliver, collect, and report",
    description:
      "Track milestones, issue invoices, and surface performance reporting with real-time dashboards.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="space-y-20 pb-20 pt-12">
      <Container className="space-y-6">
        <SectionHeading
          eyebrow="How it works"
          title="A connected operational flow built for services"
          subtitle="Bizosto turns every lead into a governed project with accountability and measurable outcomes."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-xl border border-border bg-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container>
        <SectionHeading
          eyebrow="Built for accountability"
          title="Operational ownership is designed into every workflow"
          subtitle="Bizosto assigns owners, due dates, and approval checkpoints so nothing slips between teams."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">Role-based execution</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Define who can create, approve, and execute across sales, delivery, and finance.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">Automated checkpoints</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Trigger alerts, escalations, and audit trails to keep every project on track.
            </p>
          </div>
        </div>
      </Container>

      <Container>
        <CTASection
          title="Map your workflow in a demo"
          description="We will help you align pipeline, delivery, and finance around a single accountability framework."
        />
      </Container>
    </div>
  );
}
