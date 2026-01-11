import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Card from "@/components/Card";

export const metadata = {
  title: "Privacy",
  description: "Bizosto privacy overview and data handling summary.",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-12 pb-20 pt-12">
      <Container className="space-y-6">
        <SectionHeading
          eyebrow="Privacy"
          title="Privacy overview"
          subtitle="This summary is provided for informational purposes and is not legal advice."
        />
        <Card className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Bizosto collects the minimum data required to deliver the platform, onboarding, and support
            services. We do not sell customer data and only share information with service providers that
            help us operate the platform.
          </p>
          <p className="text-sm text-muted-foreground">
            You control access, retention policies, and user permissions in the Bizosto ERP. Contact us to
            request data access, updates, or deletion.
          </p>
          <p className="text-sm text-muted-foreground">
            For complete legal terms, request the latest privacy policy document from the Bizosto team.
          </p>
        </Card>
      </Container>
    </div>
  );
}
