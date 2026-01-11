import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";

export const metadata = {
  title: "Terms",
  description: "Bizosto terms overview and service guidelines.",
};

export default function TermsPage() {
  return (
    <div className="space-y-12 pb-20 pt-12">
      <Container className="space-y-6">
        <SectionHeading
          eyebrow="Terms"
          title="Service terms overview"
          subtitle="This summary is provided for informational purposes and is not legal advice."
        />
        <Card className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Bizosto provides ERP software and implementation services for professional service providers.
            Plans, pricing, and onboarding scope are finalized in a signed agreement.
          </p>
          <p className="text-sm text-muted-foreground">
            Customers are responsible for maintaining accurate data, user permissions, and compliance with
            applicable regulations.
          </p>
          <p className="text-sm text-muted-foreground">
            To obtain the latest legal terms or service-level commitments, request the full agreement from
            the Bizosto team.
          </p>
        </Card>
      </Container>
    </div>
  );
}
