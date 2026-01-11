import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/Card";

export const metadata = {
  title: "Contact",
  description: "Contact Bizosto to align on workflows, integrations, and implementation scope.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-20 pt-12">
      <Container className="space-y-6">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your service operation"
          subtitle="Share your goals and we will tailor the Bizosto ERP rollout to your workflows."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />
          <div className="space-y-6">
            <Card className="space-y-3">
              <p className="text-sm font-semibold text-foreground">What happens next</p>
              <p className="text-sm text-muted-foreground">
                A Bizosto specialist will review your request and map the next steps for demo and onboarding.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Response within 1 business day</li>
                <li>Guided walkthrough of modules</li>
                <li>Operational assessment + rollout plan</li>
              </ul>
            </Card>
            <Card className="space-y-3">
              <p className="text-sm font-semibold text-foreground">Direct contact</p>
              <p className="text-sm text-muted-foreground">hello@bizosto.com</p>
              <p className="text-sm text-muted-foreground">+1 (555) 212-9090</p>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
