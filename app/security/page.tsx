import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Security",
  description: "How Bizosto protects your business data.",
  alternates: { canonical: "https://www.bizosto.com/security" },
};

export default function SecurityPage() {
  return (
    <div className="space-y-12 pb-20 pt-12">
      <Container className="space-y-6">
        <SectionHeading
          as="h1"
          title="Security"
          subtitle="Bizosto is designed around tenant boundaries, role-based access, secure sessions, encrypted infrastructure, and auditable financial history."
        />
        <div className="space-y-6 text-sm text-muted-foreground">
          <p>Last Updated: August 24, 2026</p>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Tenant Isolation</h2>
            <p>
              Bizosto is a multi-tenant platform where every workspace&apos;s data is isolated at the
              application layer. Records and requests are designed to be scoped to an authenticated
              workspace. Cross-tenant access is prohibited except for explicitly authorized Super
              Admin governance.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Role-Based Access Control</h2>
            <p>
              Access within a workspace is governed by eleven fixed roles spanning administration,
              sales, account management, production, finance, HR, and client access. Each role sees
              only the modules and data appropriate to it. Server-side authorization, not interface
              visibility alone, is the required enforcement standard for protected operations.
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
              Protected API routes are designed to enforce authentication, workspace, role, method,
              and resource ownership on the server. Additional provider- and platform-level safeguards
              may vary by deployment environment.
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
              Bizosto runs on Vercel and Google Cloud (Firebase). We do not operate our own physical
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
