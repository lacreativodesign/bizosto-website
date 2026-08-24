import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Privacy",
  description: "Bizosto privacy policy.",
  alternates: { canonical: "https://www.bizosto.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="space-y-12 pb-20 pt-12">
      <Container className="space-y-6">
        <SectionHeading as="h1" title="Privacy Policy" />
        <div className="space-y-6 text-sm text-muted-foreground">
          <p>Effective Date: March 1, 2026</p>
          <p>Last Updated: August 24, 2026</p>
          <p>
            LA CREATIVO GROUP, LLC, operating as Bizosto (&quot;Bizosto,&quot; &quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;), is committed to protecting the privacy of individuals and organizations that access
            our platform, website, and related services. This Privacy Policy explains what information
            we collect, how we use it, how we protect it, and your rights with respect to it.
          </p>
          <p>
            By accessing or using Bizosto, you agree to the collection and use of information as
            described in this policy.
          </p>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Who We Are</h2>
            <p>
              Bizosto is a business management and enterprise resource planning (ERP) platform
              operated by LA CREATIVO GROUP, LLC, a Texas limited liability company. Our platform
              serves business customers who use Bizosto to manage clients, projects, finance, sales,
              and team operations.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Information We Collect</h2>
            <p>We collect information in three ways:</p>
            <p>
              Information you provide directly: This includes names, business names, job titles, email
              addresses, phone numbers, billing and payment details (processed by Stripe — we do not
              store card numbers), login credentials, company information, communications with our
              team, and any content or data you upload or enter into the Platform.
            </p>
            <p>
              Information generated through platform use: This includes operational data, client
              records, project data, invoices and financial records, workflow data, activity logs, user
              permissions, and configurations you create or store within your Bizosto workspace.
            </p>
            <p>
              Information collected automatically: This includes IP addresses, device identifiers,
              browser type and version, operating system, session timestamps, referring URLs, pages
              visited, session duration, and other technical metadata. This information is collected
              via server logs and, on the marketing website, optional analytics only after consent
              where analytics has been configured.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">How We Use Your Information</h2>
            <p>
              We use collected information to: operate, maintain, and improve the Platform; create and
              manage your account; process billing and subscription payments; provide customer support;
              send service-related communications including trial expiry notices, billing alerts, and
              system updates; monitor system performance and security; prevent fraud, abuse, and
              unauthorized access; comply with legal obligations; and enforce our Terms &amp;
              Conditions.
            </p>
            <p>
              We do not use your data for advertising. Bizosto products are ad-free and we do not sell
              data to advertisers or third-party data brokers.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Third-Party Service Providers</h2>
            <p>
              We work with trusted third-party service providers to operate the Platform. These
              providers process data on our behalf under strict confidentiality and data processing
              obligations:
            </p>
            <p>
              Firebase / Google Cloud (Google LLC): authentication, database, cloud infrastructure,
              and Firebase/Google Cloud Storage where that storage capability is activated. Privacy
              policy: policies.google.com/privacy
            </p>
            <p>
              Stripe, Inc.: Payment processing for subscriptions and Stripe Connect. Stripe processes
              payment card data directly — Bizosto never stores card numbers. Privacy policy:
              stripe.com/privacy
            </p>
            <p>
              Resend (Resend, Inc.): Transactional email delivery (account confirmations, billing
              notices, notifications).
            </p>
            <p>
              Vercel Inc.: hosting and delivery of the website and application. Runtime telemetry
              depends on the services configured for the applicable environment.
            </p>
            <p>We do not sell, rent, or trade your personal information to any third party.</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Cookies and Tracking</h2>
            <p>
              Bizosto uses cookies and similar technologies for session management, authentication, and
              platform functionality. We do not use third-party advertising cookies. Analytics may be
              collected to understand how the Platform is used and to improve it. You may disable
              cookies in your browser settings, but doing so may affect Platform functionality.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Data Ownership and Customer Content</h2>
            <p>
              You retain full ownership of all data and content you store within your Bizosto
              workspace. Bizosto acts as a data processor and processes your data solely to deliver the
              contracted services. We do not access your business data except as necessary for
              technical support, security, or legal compliance.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Data Retention</h2>
            <p>
              We retain account and usage data for the duration of your active subscription. Following
              voluntary or for-cause account termination, data is retained for thirty (30) days to
              allow for data export. After this period, data is permanently deleted from our systems
              unless a longer retention period is required by applicable law. A separate sixty (60)
              day window applies after a hard lock caused by non-payment.
            </p>
            <p>
              You may request a data export. Requests are subject to identity and authority
              verification and will be handled under the applicable legal and operational process.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Data Security</h2>
            <p>
              Bizosto implements administrative, technical, and organizational safeguards to protect
              your information against unauthorized access, disclosure, alteration, or destruction.
              Measures include encrypted data transmission (TLS/HTTPS), role-based access controls,
              Firebase and Google Cloud infrastructure, and environment-specific operational monitoring.
              Authentication features such as MFA or SSO are available only when configured for the
              applicable workspace and supported plan. No system can guarantee absolute security. In the
              event of a data breach that affects your personal information, we will notify you as
              required by applicable law.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Your Rights — US Residents</h2>
            <p>
              If you are a resident of California, you have rights under the California Consumer
              Privacy Act (CCPA) including the right to know what personal information we collect and
              how it is used; the right to request deletion of your personal information; the right to
              opt out of the sale of personal information (we do not sell personal information); and
              the right to non-discrimination for exercising your CCPA rights.
            </p>
            <p>To exercise your rights, contact us at privacy@bizosto.com.</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              Your Rights — EEA, UK, and International Users
            </h2>
            <p>
              If you are located in the European Economic Area, the United Kingdom, or other
              jurisdictions with data protection laws, you may have rights under the General Data
              Protection Regulation (GDPR) or equivalent legislation including: the right to access
              your personal data; the right to correct inaccurate data; the right to erasure
              (&quot;right to be forgotten&quot;); the right to restriction of processing; the right to data
              portability; and the right to object to processing.
            </p>
            <p>
              Our legal basis for processing personal data is the performance of a contract (your
              subscription), compliance with legal obligations, and our legitimate interests in
              operating a secure and functional platform.
            </p>
            <p>
              To exercise your rights, contact us at privacy@bizosto.com. You also have the right to
              lodge a complaint with your local data protection authority.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">International Data Transfers</h2>
            <p>
              Bizosto is operated from the United States. By using the Platform, you acknowledge that
              your data may be transferred to and processed in the United States and other countries
              where our service providers operate. We ensure that any such transfers are conducted in
              compliance with applicable data protection laws.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Children&apos;s Privacy</h2>
            <p>
              The Bizosto Platform is intended exclusively for business use by individuals 18 years of
              age and older. We do not knowingly collect personal information from individuals under
              the age of 18. If we become aware that we have collected information from a minor, we
              will take steps to delete it promptly.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Third-Party Links and Integrations</h2>
            <p>
              The Platform may integrate with or link to third-party services at your direction.
              Bizosto is not responsible for the privacy practices of third-party providers, which are
              governed by their own privacy policies. We encourage you to review those policies before
              enabling any integration.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Material changes will be communicated via
              email or in-platform notification. The &quot;Last Updated&quot; date at the top of this page
              reflects the most recent revision. Continued use of the Platform after the effective date
              of any changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Contact Us</h2>
            <p>For privacy inquiries, data requests, or to exercise your rights:</p>
            <p>LA CREATIVO GROUP, LLC</p>
            <p>Operating as: Bizosto</p>
            <p>Email: privacy@bizosto.com</p>
            <p>Website: www.bizosto.com</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
