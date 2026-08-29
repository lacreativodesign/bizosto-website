import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Security",
  description: "How Bizosto protects your business data.",
};

export default function SecurityPage() {
  return (
    <div className="legal-page">
      <Container className="legal-shell">
        <SectionHeading
          as="h1"
          eyebrow="Trust Center"
          title="Security"
          subtitle="Security is built into the core of Bizosto — not bolted on after the fact. Here is how we protect your business data."
        />
        <div className="legal-content space-y-6 text-sm text-muted-foreground">
          <p>Last Updated: July 7, 2026</p>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Tenant Isolation</h2>
            <p>
              Bizosto is a multi-tenant platform where every workspace&apos;s data is isolated at the
              application layer. Every record is scoped to your workspace, and every data access is
              validated server-side against the authenticated user&apos;s workspace — your data is
              never visible to another tenant.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Role-Based Access Control</h2>
            <p>
              Access within a workspace is governed by eleven fixed roles spanning administration,
              sales, account management, production, finance, HR, and client access. Each role sees
              only the modules and data appropriate to it, and permissions are enforced on the
              server for every request — not just hidden in the interface.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Authentication and Sessions</h2>
            <p>
              Authentication is handled by Firebase Authentication (Google). Sessions are managed
              with secure, HTTP-only cookies and support server-side revocation — when a user is
              deactivated or credentials change, existing sessions can be invalidated immediately
              rather than lingering until expiry.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Financial Data Integrity</h2>
            <p>
              Financial activity in Bizosto is recorded in an append-only ledger. Paid invoices are
              immutable, and corrections are made through explicit, audited actions such as void
              entries and credit notes — so your financial history can never be silently rewritten.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">API Security</h2>
            <p>
              Every API route in the platform is covered by an enforced route contract that defines
              its authentication and access requirements, verified by automated tests in our
              continuous integration pipeline. Server-side rate limiting protects against abuse.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Encryption</h2>
            <p>
              All data in transit between your browser and Bizosto is encrypted using TLS (HTTPS).
              Data at rest is stored on Google Cloud infrastructure, which encrypts stored data by
              default.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Infrastructure</h2>
            <p>
              Bizosto runs on Vercel and Google Cloud (Firebase), enterprise-grade providers with
              extensive physical and network security programs. We do not operate our own physical
              servers. Payment card data is processed by Stripe and is never stored on Bizosto
              systems.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Our Approach to Compliance</h2>
            <p>
              We believe in truthful security claims. Bizosto does not currently hold third-party
              certifications such as SOC 2, and we will not claim certifications we have not
              earned. Our security program is built on the concrete controls described on this
              page, and we are working toward formal certification as the platform grows.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Reporting a Vulnerability</h2>
            <p>
              If you believe you have found a security vulnerability in Bizosto, please report it
              to support@bizosto.com with enough detail for us to reproduce the issue. We
              investigate all good-faith reports and ask that you give us reasonable time to
              address confirmed issues before public disclosure.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
