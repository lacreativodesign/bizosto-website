import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Cookie Policy",
  description: "Bizosto cookie policy.",
  alternates: { canonical: "https://www.bizosto.com/cookies" },
};

export default function CookiePolicyPage() {
  return (
    <div className="space-y-12 pb-20 pt-12">
      <Container className="space-y-6">
        <SectionHeading as="h1" title="Cookie Policy" />
        <div className="space-y-6 text-sm text-muted-foreground">
          <p>Effective Date: July 7, 2026</p>
          <p>Last Updated: August 24, 2026</p>
          <p>
            This Cookie Policy explains how LA CREATIVO GROUP, LLC, operating as Bizosto
            (&quot;Bizosto,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), uses cookies and similar technologies on our
            website (www.bizosto.com) and platform (app.bizosto.com). It should be read together
            with our Privacy Policy.
          </p>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">What Are Cookies</h2>
            <p>
              Cookies are small text files placed on your device by a website. They are widely used
              to make websites work, keep you signed in, and provide information about how a site
              is used. Similar technologies include browser local storage, which stores data on
              your device without transmitting it as a cookie.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Essential Cookies</h2>
            <p>
              The Bizosto platform (app.bizosto.com) uses strictly necessary cookies for
              authentication, session management, and security — including keeping you signed in
              and protecting against cross-site request forgery. These cookies are required for the
              Platform to function and cannot be switched off while using it.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Analytics</h2>
            <p>
              If analytics is configured and you choose &quot;Accept analytics,&quot; our website uses Google
              Tag Manager to manage measurement tags, which may include Google Analytics. These tags help us understand how visitors use our
              website — for example, which pages are visited and how visitors arrive at our site.
              Google may set cookies (such as &quot;_ga&quot;) on your device for this purpose. Information
              collected is used to improve our website. Analytics does not load before consent. For details on how Google
              processes this data, see policies.google.com/privacy.
            </p>
            <p>We do not use third-party advertising cookies.</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Security (reCAPTCHA)</h2>
            <p>
              Forms on our website are protected by Google reCAPTCHA to distinguish genuine
              visitors from automated bots. reCAPTCHA may set cookies (such as
              &quot;_GRECAPTCHA&quot;) and collects device and interaction information for this purpose.
              Use of reCAPTCHA is subject to Google&apos;s Privacy Policy and Terms of Service.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Local Storage</h2>
            <p>
              Our website stores your display theme preference (light, dark, or system) in your
              browser&apos;s local storage under the versioned key &quot;bizosto-theme:v1&quot;. This value stays on your
              device, is not transmitted to us, and is used only to remember your preferred
              appearance.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Managing Cookies</h2>
            <p>
              Most browsers let you refuse or delete cookies through their settings. If you block
              or delete essential cookies, parts of the Platform — including signing in — may not
              function correctly. Blocking analytics cookies does not affect your ability to use
              our website or the Platform.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy periodically, for example if the technologies we use
              change. The &quot;Last Updated&quot; date at the top of this page reflects the most recent
              revision.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">Contact</h2>
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
