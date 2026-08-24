import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Refund & Cancellation Policy",
  description: "Bizosto refund and cancellation policy.",
  alternates: { canonical: "https://www.bizosto.com/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <div className="space-y-12 pb-20 pt-12">
      <Container className="space-y-6">
        <SectionHeading as="h1" title="Refund & Cancellation Policy" />
        <div className="space-y-6 text-sm text-muted-foreground">
          <p>Effective Date: July 7, 2026</p>
          <p>Last Updated: August 24, 2026</p>
          <p>
            This Refund &amp; Cancellation Policy applies to all subscriptions to the Bizosto
            platform, operated by LA CREATIVO GROUP, LLC, a Texas limited liability company
            (&quot;Bizosto,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). It forms part of, and should be read together
            with, our Terms &amp; Conditions. By subscribing to the Platform, you agree to this
            policy.
          </p>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Free Trial</h2>
            <p>
              New accounts receive a fourteen (14) day free trial. A valid payment method is
              required at signup to begin the trial. You will not be charged during the trial
              period.
            </p>
            <p>
              If you cancel at any time before the end of the fourteenth (14th) day, you will not
              be charged anything. If you do not cancel, your subscription automatically converts
              to a paid subscription and billing begins on day fifteen (15) using the payment
              method provided at signup.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Cancelling Your Subscription</h2>
            <p>
              You may cancel your subscription at any time from your billing settings within the
              Platform. Cancellation takes effect at the end of your current billing period. You
              retain full access to the Platform until that date. No further charges are made after
              cancellation takes effect.
            </p>
            <p>
              If you change your mind before your billing period ends, you can reactivate your
              subscription with one click from your billing settings and your service continues
              uninterrupted.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Plan Upgrades and Downgrades</h2>
            <p>
              Plan upgrades take effect immediately. When you upgrade, you are charged a prorated
              amount for the remainder of the current billing period at the new plan&apos;s rate.
            </p>
            <p>
              Plan downgrades take effect at the end of the current billing period. You retain
              access to your current plan&apos;s features until that date, and the new lower rate
              applies from the next billing period onward.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Refunds</h2>
            <p>
              Subscription fees for billing periods that have already elapsed are non-refundable,
              except where a refund is required by applicable law. Cancelling your subscription
              stops future charges but does not entitle you to a refund of fees already paid, and
              no partial or prorated refunds are issued for unused time within a billing period.
            </p>
            <p>
              Where a refund is issued, it is processed through Stripe, our payment processor, to
              the original payment method used for the charge. Depending on your bank or card
              issuer, refunds may take five (5) to ten (10) business days to appear on your
              statement.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Failed Payments</h2>
            <p>
              If a scheduled subscription payment fails, Bizosto will retry the payment
              automatically and notify you. The following schedule then applies:
            </p>
            <p>
              Days 1–7: your account enters a seven (7) day grace period during which access
              continues normally while payment is retried.
            </p>
            <p>
              Day 8: if payment has not been collected, your account is placed in a read-only
              state. Your data remains accessible, but changes are restricted until payment is
              resolved.
            </p>
            <p>
              Day 21: if payment remains outstanding, your account is hard-locked and access is
              fully suspended.
            </p>
            <p>
              Data is retained for sixty (60) days after a hard lock, after which it may be
              permanently deleted. You can restore access at any point before deletion by updating
              your payment method in your billing settings.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">How to Cancel or Request a Refund</h2>
            <p>
              To cancel, use the billing settings within your Bizosto workspace. For refund
              requests or billing questions, contact us at the address below and include your
              account email and workspace name.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Material changes will be communicated
              via email or in-platform notification before taking effect. The &quot;Last Updated&quot; date
              at the top of this page reflects the most recent revision.
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
