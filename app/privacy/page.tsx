import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Privacy",
  description: "Bizosto privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-12 pb-20 pt-12">
      <Container className="space-y-6">
        <SectionHeading title="Privacy Policy" />
        <div className="space-y-6 text-sm text-muted-foreground">
          <p>
            Bizosto (“Bizosto,” “we,” “our,” or “us”) operates a business management and enterprise
            resource planning platform designed for service-based organizations. This Privacy Policy
            explains how information is collected, used, stored, disclosed, and protected when
            individuals or organizations access or use the Bizosto platform, website, applications, and
            related services.
          </p>
          <p>
            Bizosto is committed to maintaining the confidentiality, integrity, and security of
            information entrusted to it by customers, authorized users, and website visitors.
          </p>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Information We Collect</h2>
            <p>
              Bizosto may collect information provided directly by users, information generated through
              use of the platform, and information collected automatically through technical systems.
            </p>
            <p>
              Information provided directly may include names, business names, job titles, email
              addresses, phone numbers, billing details, login credentials, communications, uploaded
              files, and other information submitted through forms, onboarding processes, or customer
              support interactions.
            </p>
            <p>
              Information generated through platform usage may include operational data, client
              records, project data, financial records, workflow information, system configurations,
              and activity logs created or stored by customers while using the Bizosto platform.
            </p>
            <p>
              Information collected automatically may include IP addresses, device identifiers,
              browser type, operating system, access timestamps, referring URLs, session activity,
              and other technical metadata necessary for platform performance, analytics, and
              security.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">How Information Is Used</h2>
            <p>
              Bizosto uses collected information to operate, maintain, secure, and improve the
              platform; provide customer support; process transactions; manage user access;
              communicate service-related notices; monitor system performance; prevent fraud and
              abuse; comply with legal obligations; and enforce contractual terms.
            </p>
            <p>
              Information may also be used internally for analytics, research, service optimization,
              and development of new features, provided such use does not compromise customer
              confidentiality.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Data Ownership and Customer Content</h2>
            <p>
              Customers retain all ownership rights to their data and content stored within the Bizosto
              platform. Bizosto acts as a service provider and processes customer data solely for the
              purpose of delivering the contracted services.
            </p>
            <p>Bizosto does not sell, rent, or trade customer data to third parties.</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Data Sharing and Disclosure</h2>
            <p>
              Bizosto may disclose information only in limited circumstances, including when required
              by law, court order, or governmental authority; to protect the rights, safety, and
              security of Bizosto, its customers, or others; or to trusted service providers who assist
              in operating the platform under strict confidentiality obligations.
            </p>
            <p>
              In the event of a corporate transaction such as a merger, acquisition, or asset sale,
              information may be transferred as part of that transaction subject to applicable
              confidentiality protections.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Data Security</h2>
            <p>
              Bizosto implements administrative, technical, and organizational safeguards designed to
              protect information against unauthorized access, disclosure, alteration, or
              destruction. These safeguards include access controls, encryption, monitoring, and
              secure infrastructure practices.
            </p>
            <p>While Bizosto takes reasonable measures to protect information, no system can guarantee absolute security.</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Data Retention</h2>
            <p>
              Information is retained only for as long as necessary to fulfill the purposes described in
              this policy, comply with legal obligations, resolve disputes, and enforce agreements.
              Customers may request data export or deletion in accordance with contractual terms.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">User Responsibilities</h2>
            <p>
              Users are responsible for maintaining the confidentiality of their login credentials and
              ensuring that access to the platform is authorized and appropriate. Bizosto is not
              responsible for unauthorized access resulting from compromised credentials.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Third-Party Services</h2>
            <p>
              The Bizosto platform may integrate with third-party services or tools at the customer’s
              direction. Bizosto is not responsible for the privacy practices of third-party providers,
              which are governed by their own policies.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Children’s Information</h2>
            <p>
              Bizosto services are intended for business use and are not directed to individuals under
              the age of 18. Bizosto does not knowingly collect personal information from minors.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Policy Enforcement</h2>
            <p>
              Violation of this Privacy Policy may result in suspension or termination of access to the
              platform, subject to contractual agreements.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
