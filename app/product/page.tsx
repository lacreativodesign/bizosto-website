import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { BarChart3, ClipboardCheck, CreditCard, ShieldCheck, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Agency ERP Platform",
  description:
    "Explore the Bizosto Agency ERP and Business Operating System connecting pipeline, delivery, finance, and reporting.",
};

const modules = [
  {
    title: "Sales pipeline",
    description:
      "Capture leads, qualify opportunities, and standardize proposals with approval workflows and SLA tracking.",
    icon: <TrendingUp className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Delivery",
    description:
      "Launch projects with templates, enforce milestones, and keep teams aligned with automated handoffs.",
    icon: <ClipboardCheck className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Finance",
    description:
      "Manage retainers, invoices, and collections alongside delivery to protect margins and cash flow.",
    icon: <CreditCard className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Reporting",
    description:
      "Monitor utilization, profitability, and risk with live dashboards across every account.",
    icon: <BarChart3 className="h-4 w-4" aria-hidden="true" />,
  },
  {
    title: "Roles and permissions",
    description:
      "Define access levels for leadership, operations, and client stakeholders with audit-ready controls.",
    icon: <ShieldCheck className="h-4 w-4" aria-hidden="true" />,
  },
];

const outcomes = [
  {
    title: "Single source of truth",
    description:
      "Every team works from the same project data, eliminating duplicate tools and hidden status updates.",
  },
  {
    title: "Workflow accountability",
    description:
      "Standardized checkpoints ensure every task has an owner, a due date, and a measurable outcome.",
  },
  {
    title: "Predictable delivery",
    description:
      "Align pipeline commitments with capacity and financial outcomes in one operational view.",
  },
];

export default function ProductPage() {
  return (
    <div className="flex flex-col">
      <Container className="section-spacing space-y-6">
        <SectionHeading
          eyebrow="Product"
          title="A master ERP UI purpose-built for service delivery"
          subtitle="Bizosto connects every department with a unified, outcome-driven workflow stack."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {outcomes.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="section-spacing">
        <SectionHeading
          eyebrow="Modules"
          title="From pipeline to reporting, every module drives outcomes"
          subtitle="Each module is designed as a connected system, not a standalone tool."
        />
        <div className="mt-8">
          <FeatureGrid items={modules} />
        </div>
      </Container>

      <Container className="section-spacing">
        <SectionHeading
          eyebrow="Unified outcomes"
          title="Operational intelligence without the tool sprawl"
          subtitle="Move from disconnected apps to a clean, enterprise-grade surface that keeps teams aligned."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">Delivery control center</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Combine project timelines, capacity, and approvals into a single operational dashboard.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">Executive reporting layer</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Track margin, forecast, and risk across all engagements without manual reporting cycles.
            </p>
          </div>
        </div>
      </Container>

      <Container className="section-spacing">
        <CTASection
          title="See Bizosto in action"
          description="Walk through the ERP master UI and plan the right modules for your service business."
        />
      </Container>
    </div>
  );
}
