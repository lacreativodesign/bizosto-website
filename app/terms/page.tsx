import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Terms",
  description: "Bizosto terms and conditions.",
};

export default function TermsPage() {
  return (
    <div className="space-y-12 pb-20 pt-12">
      <Container className="space-y-6">
        <SectionHeading title="Terms & Conditions" />
        <div className="space-y-6 text-sm text-muted-foreground">
          <p>
            These Terms & Conditions govern access to and use of the Bizosto platform, website,
            applications, and related services. By accessing or using Bizosto, users agree to be
            legally bound by these terms.
          </p>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Platform Access and Use</h2>
            <p>
              Bizosto grants customers a limited, non-exclusive, non-transferable right to access and
              use the platform solely for internal business operations in accordance with applicable
              agreements. Unauthorized use, resale, sublicensing, or exploitation of the platform is
              prohibited.
            </p>
            <p>
              Customers are responsible for ensuring that all users accessing the platform comply with
              these terms.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Account Responsibilities</h2>
            <p>
              Customers are responsible for maintaining accurate account information and controlling
              user access. Bizosto is not liable for losses resulting from unauthorized access caused by
              customer negligence.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Fees and Payments</h2>
            <p>
              Use of Bizosto may require payment of subscription fees or other charges as agreed upon.
              Failure to pay applicable fees may result in suspension or termination of access.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Intellectual Property</h2>
            <p>
              Bizosto and its licensors retain all rights, title, and interest in the platform,
              software, trademarks, designs, and related intellectual property. These terms do not
              grant ownership rights to customers beyond the limited usage rights expressly stated.
            </p>
            <p>Customer data and content remain the exclusive property of the customer.</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Acceptable Use</h2>
            <p>
              Users agree not to misuse the platform, interfere with its operation, attempt unauthorized
              access, upload malicious code, violate laws, or infringe upon the rights of others.
            </p>
            <p>Bizosto reserves the right to investigate and take appropriate action against violations.</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Service Availability</h2>
            <p>
              Bizosto strives to maintain reliable service availability but does not guarantee
              uninterrupted or error-free operation. Temporary outages may occur for maintenance,
              upgrades, or circumstances beyond Bizosto’s control.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Bizosto shall not be liable for indirect,
              incidental, consequential, or special damages, including loss of profits, data, or
              business opportunities, arising from use of the platform.
            </p>
            <p>
              Bizosto’s total liability shall not exceed the amounts paid by the customer for the
              services giving rise to the claim.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Disclaimer of Warranties</h2>
            <p>
              The platform is provided on an “as is” and “as available” basis. Bizosto disclaims all
              warranties, express or implied, including warranties of merchantability, fitness for a
              particular purpose, and non-infringement.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Termination</h2>
            <p>
              Bizosto may suspend or terminate access for material breach of these terms, misuse of the
              platform, or legal compliance reasons. Upon termination, access rights cease, and
              customers remain responsible for outstanding obligations.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the United
              States, without regard to conflict-of-law principles.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Entire Agreement</h2>
            <p>
              These Terms & Conditions, together with applicable service agreements, constitute the
              entire agreement between Bizosto and the customer regarding platform use.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
