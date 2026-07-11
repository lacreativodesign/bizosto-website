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
          <p>Effective Date: March 1, 2026</p>
          <p>Last Updated: July 7, 2026</p>
          <p>
            These Terms &amp; Conditions (&quot;Terms&quot;) constitute a legally binding agreement between
            you (&quot;Customer,&quot; &quot;you,&quot; or &quot;your&quot;) and LA CREATIVO GROUP, LLC, a Texas
            limited liability company (&quot;Bizosto,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), governing access to and
            use of the Bizosto platform, website, applications, and related services (collectively,
            the &quot;Platform&quot;). By accessing or using the Platform, you confirm that you have read,
            understood, and agree to be legally bound by these Terms.
          </p>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Definitions</h2>
            <p>
              &quot;Platform&quot; means the Bizosto business management and enterprise resource planning
              software, including all modules, APIs, interfaces, and associated services.
            </p>
            <p>
              &quot;Tenant&quot; means a business organization that has registered for and operates a
              workspace on the Platform.
            </p>
            <p>
              &quot;User&quot; means any individual granted access to the Platform under a Tenant&apos;s account.
            </p>
            <p>
              &quot;Subscription&quot; means a paid or trial plan granting access to the Platform.
            </p>
            <p>
              &quot;Stripe Connect&quot; means the payment processing feature allowing Tenants to accept
              payments from their own clients through the Platform.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Platform Access and Use</h2>
            <p>
              Bizosto grants Customers a limited, non-exclusive, non-transferable, revocable right to
              access and use the Platform solely for internal business operations in accordance with
              these Terms and applicable subscription terms. Unauthorized use, resale, sublicensing,
              or exploitation of the Platform is prohibited.
            </p>
            <p>
              Customers are responsible for ensuring that all Users accessing the Platform under their
              account comply with these Terms. Customers assume full responsibility for actions taken
              by their Users.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Free Trial</h2>
            <p>
              New accounts receive a fourteen (14) day free trial beginning on the date of
              registration. A valid payment method is required at signup to begin the trial. Full
              access to the modules included in the plan selected during signup is provided during
              the trial period.
            </p>
            <p>
              You will not be charged during the trial. Unless you cancel before the end of the
              fourteenth (14th) day, you expressly authorize Bizosto to begin billing your
              designated payment method on a recurring basis starting on day fifteen (15). If you
              cancel at any time before the end of the trial, you will not be charged.
            </p>
            <p>
              Bizosto reserves the right to modify or terminate free trial offers at any time without
              prior notice.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Subscription, Billing, and Payment</h2>
            <p>
              Subscriptions are billed monthly in advance on the date your paid subscription begins.
              Current subscription plans and pricing are as follows:
            </p>
            <p>Starter Plan: $79.00 per month</p>
            <p>Pro Plan: $149.00 per month</p>
            <p>Enterprise Plan: $299.00 per month</p>
            <p>
              Annual billing is available at a discounted rate equivalent to two months free.
              Annual subscriptions are billed yearly in advance.
            </p>
            <p>
              All prices are listed in United States Dollars (USD) and are exclusive of applicable
              taxes unless otherwise stated.
            </p>
            <p>
              By subscribing, you authorize Bizosto to charge your designated payment method for the
              applicable subscription fee on a recurring monthly basis until you cancel. You are
              responsible for maintaining accurate and valid payment information.
            </p>
            <p>
              Plan upgrades take effect immediately and are charged on a prorated basis. Plan
              downgrades take effect at the end of the current billing period. Cancellations take
              effect at the end of the current billing period — access continues until that date and
              no partial refunds are issued.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Automatic Tax Calculation</h2>
            <p>
              Bizosto uses Stripe Tax to automatically calculate and apply applicable taxes to
              subscription fees based on your billing address and applicable local, state, federal, or
              international tax regulations. The tax amount will be displayed on your invoice. LA
              CREATIVO GROUP, LLC complies with all applicable United States tax laws, including Texas
              state tax regulations and US economic nexus rules.
            </p>
            <p>
              By providing your billing address, you confirm it is accurate. Tax rates are determined
              by Stripe Tax based on your billing location. Bizosto is not responsible for errors
              arising from inaccurate billing address information provided by you.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              Failed Payments, Grace Period, and Account Lock
            </h2>
            <p>If a scheduled payment fails, the following process applies:</p>
            <p>
              Bizosto will retry the payment automatically. Your account enters a grace period of
              seven (7) days during which access continues normally. If payment is not successfully
              collected by day eight (8), your account is placed in a read-only state — your data
              remains accessible but changes are restricted. If payment remains outstanding on day
              twenty-one (21), your account will be hard-locked and access will be fully suspended.
              Data is retained for sixty (60) days after hard lock, after which it may be
              permanently deleted.
            </p>
            <p>
              To restore access during any lock state, update your payment method in your billing
              settings.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Platform Handling Fee</h2>
            <p>
              A platform handling fee of zero point five percent (0.5%) applies solely to invoice
              payments made by a Tenant&apos;s own clients through the Bizosto Stripe Connect payment
              infrastructure, which is available only on the Enterprise plan. This fee does not apply
              to Bizosto subscription charges, and it does not apply to the Starter or Pro plans. It is
              labeled &quot;Platform Handling Fee,&quot; is automatically deducted from each such client
              transaction at the time of processing, and is separate from and in addition to Stripe&apos;s
              own processing fees.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Stripe Connect — Merchant of Record</h2>
            <p>
              Tenants who enable payment acceptance through the Platform do so by connecting their own
              Stripe account via Stripe Connect. When a Tenant processes payments from their clients
              through the Platform:
            </p>
            <p>The Tenant is the merchant of record for all transactions between the Tenant and the Tenant&apos;s clients.</p>
            <p>LA CREATIVO GROUP, LLC and Bizosto are not a party to transactions between Tenants and their clients.</p>
            <p>
              Bizosto bears no liability for chargebacks, payment disputes, refunds, fraud, or any
              claim arising from transactions between a Tenant and the Tenant&apos;s clients.
            </p>
            <p>
              All payment disputes are handled directly between the Tenant, the Tenant&apos;s client, and
              Stripe, in accordance with Stripe&apos;s terms of service.
            </p>
            <p>
              Tenants are solely responsible for compliance with all applicable laws governing their
              payment processing activities, including consumer protection laws, card network rules,
              and anti-money-laundering regulations.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Tenant Tax Module</h2>
            <p>
              The Platform includes an optional Tax Module that provides tools for Tenants to
              configure, calculate, and report tax on invoices issued to their own clients. The Tax
              Module is provided as a convenience tool only.
            </p>
            <p>
              Each Tenant is solely responsible for the accuracy of tax rates configured within their
              workspace, compliance with all applicable tax laws in their jurisdiction, timely filing
              and remittance of taxes collected from their clients to the appropriate tax authorities,
              and all consequences arising from incorrect configuration, non-filing, or non-remittance.
            </p>
            <p>
              Bizosto provides no tax advice and makes no representations regarding the accuracy,
              completeness, or fitness of the Tax Module for any specific jurisdiction or tax
              obligation. Tenants should consult a qualified tax professional.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Consent Logging</h2>
            <p>
              At the time of account registration, Bizosto records your acceptance of these Terms
              including the timestamp of acceptance, the IP address from which acceptance was made,
              and the version of these Terms accepted. This record constitutes evidence of your
              agreement to be bound by these Terms.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Data Retention and Deletion</h2>
            <p>
              Customer data and content stored within the Platform is retained for the duration of the
              active subscription. Following cancellation or termination, data is retained for thirty
              (30) days to allow for data export requests. After this period, data is permanently
              deleted from Bizosto&apos;s systems unless a longer retention period is required by
              applicable law.
            </p>
            <p>
              Customers may request a data export at any time by contacting Bizosto support. Data
              export requests will be processed within ten (10) business days.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Account Responsibilities</h2>
            <p>
              Customers are responsible for maintaining accurate account information, controlling User
              access and permissions, safeguarding login credentials, and promptly notifying Bizosto of
              any unauthorized access. Bizosto is not liable for losses resulting from unauthorized
              access caused by Customer negligence or credential compromise.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Intellectual Property</h2>
            <p>
              Bizosto and its licensors retain all rights, title, and interest in the Platform,
              software, trademarks, service marks, trade names, designs, and all related intellectual
              property. These Terms do not grant you any ownership rights beyond the limited usage
              rights expressly stated herein.
            </p>
            <p>
              &quot;Bizosto&quot; and the Bizosto B-mark logo are trademarks of LA CREATIVO GROUP, LLC.
              Unauthorized use of Bizosto trademarks is prohibited.
            </p>
            <p>
              Customer data and content remain the exclusive property of the Customer. By using the
              Platform, you grant Bizosto a limited license to host, process, and transmit your data
              solely as necessary to deliver the Platform services.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Acceptable Use</h2>
            <p>
              Users agree not to: misuse or interfere with the Platform&apos;s operation; attempt
              unauthorized access to any system, network, or data; upload malicious code, viruses, or
              harmful content; use the Platform to violate applicable laws or regulations; infringe
              upon the intellectual property or privacy rights of others; use the Platform to engage in
              fraudulent, abusive, or deceptive practices; or resell, sublicense, or provide
              unauthorized access to the Platform.
            </p>
            <p>
              Bizosto reserves the right to investigate suspected violations and take appropriate
              action, including immediate suspension or termination of access.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Service Availability</h2>
            <p>
              Bizosto strives to maintain reliable service availability but does not guarantee
              uninterrupted or error-free operation. Temporary outages may occur for maintenance,
              upgrades, or circumstances beyond Bizosto&apos;s control. Planned maintenance windows will be
              communicated in advance where reasonably practicable.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BIZOSTO AND LA CREATIVO GROUP, LLC
              SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR
              EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, DATA,
              GOODWILL, OR BUSINESS OPPORTUNITIES, ARISING FROM OR RELATED TO YOUR USE OF OR INABILITY
              TO USE THE PLATFORM, REGARDLESS OF THE THEORY OF LIABILITY.
            </p>
            <p>
              BIZOSTO&apos;S TOTAL CUMULATIVE LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO
              THESE TERMS OR YOUR USE OF THE PLATFORM SHALL NOT EXCEED THE TOTAL AMOUNTS PAID BY YOU
              TO BIZOSTO IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Disclaimer of Warranties</h2>
            <p>
              THE PLATFORM IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF
              ANY KIND. BIZOSTO EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT
              NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
              AND NON-INFRINGEMENT. BIZOSTO DOES NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED,
              ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless LA CREATIVO GROUP, LLC, Bizosto, and
              their respective officers, directors, employees, and agents from and against any claims,
              liabilities, damages, losses, and expenses (including reasonable attorneys&apos; fees)
              arising from your use of the Platform, your violation of these Terms, your violation of
              any applicable law or regulation, or your infringement of any third-party rights.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Termination</h2>
            <p>
              Either party may terminate the subscription at any time. Customer termination takes
              effect at the end of the current billing period with continued access until that date and
              no refunds for unused time.
            </p>
            <p>
              Bizosto may suspend or terminate access immediately upon material breach of these Terms,
              non-payment of fees, misuse of the Platform, fraudulent activity, or as required by
              applicable law. Upon termination, Customer&apos;s access rights cease immediately and data
              retention policies described herein apply.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Modifications to Terms</h2>
            <p>
              Bizosto reserves the right to modify these Terms at any time. Material changes will be
              communicated to Customers via email or in-platform notification at least fourteen (14)
              days before taking effect. Continued use of the Platform after the effective date of
              updated Terms constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State
              of Texas, United States of America, without regard to its conflict-of-law provisions. Any
              disputes arising under these Terms shall be subject to the exclusive jurisdiction of the
              state and federal courts located in Texas.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Entire Agreement</h2>
            <p>
              These Terms, together with any applicable order forms, service agreements, and the
              Privacy Policy, constitute the entire agreement between Bizosto and the Customer
              regarding the Platform and supersede all prior agreements, representations, and
              understandings.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Contact</h2>
            <p>LA CREATIVO GROUP, LLC</p>
            <p>Operating as: Bizosto</p>
            <p>Email: support@bizosto.com</p>
            <p>Website: www.bizosto.com</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
