import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for using the Lamb Insurance Agency website and services.",
  robots: { index: true, follow: true },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-navy-950 py-5 px-5">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="font-display text-white text-xl font-bold hover:text-sage-300 transition-colors"
            aria-label="Lamb Insurance Agency — home"
          >
            Lamb Insurance <span className="text-sage-400">Agency</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-5 py-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-navy-500 font-body text-sm mb-10">
          Last updated: April 6, 2025
        </p>

        <div className="prose max-w-none font-body text-navy-700 space-y-8">
          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Lamb Insurance Agency website
              (lambinsuranceagency.com), you agree to be bound by these Terms
              &amp; Conditions. If you do not agree with any part of these
              terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              2. Services Described
            </h2>
            <p>
              Lamb Insurance Agency is an independent insurance agency licensed
              to operate in the State of Florida. Our website provides general
              information about insurance products and allows prospective clients
              to submit quote requests. Nothing on this website constitutes a
              binding insurance contract, policy, or guarantee of coverage.
              Coverage is subject to underwriting approval and policy terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              3. Not Insurance Advice
            </h2>
            <p>
              Content on this website is for informational purposes only and
              does not constitute professional insurance, legal, or financial
              advice. You should consult with a licensed insurance professional
              to determine the coverage that is right for your specific
              situation.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              4. Accuracy of Information
            </h2>
            <p>
              We strive to keep the information on our website current and
              accurate. However, we make no warranties or representations
              regarding the completeness, accuracy, or timeliness of any
              content. Insurance rates, coverage terms, and availability are
              subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              5. Use of the Contact Form
            </h2>
            <p>
              When you submit a quote request through our contact form, you
              consent to being contacted by Lamb Insurance Agency via phone,
              email, or text message in connection with your inquiry. Please
              review our{" "}
              <Link href="/privacy-policy" className="text-sage-600 hover:underline">
                Privacy Policy
              </Link>{" "}
              for full details on how your information is used.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content on this website — including text, design, logos,
              graphics, and code — is the property of Lamb Insurance Agency or
              its licensors and is protected by applicable copyright and
              trademark laws. You may not reproduce, distribute, or create
              derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. These links
              are provided for convenience only. We do not endorse, control, or
              assume responsibility for the content or practices of any
              third-party sites. Visiting them is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              8. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Lamb Insurance Agency
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of or
              inability to use this website or its content, even if we have been
              advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              9. Telephone Consumer Protection Act (TCPA)
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                We obtain prior express written consent before contacting
                individuals by phone, text, or autodialer.
              </li>
              <li>
                Consent is collected through our website contact form and is
                never a condition of purchase.
              </li>
              <li>
                Recipients may opt out at any time by replying STOP to any text
                message or by contacting us at{" "}
                <a href="tel:+19412252335" className="text-sage-600 hover:underline">
                  941.225.2335
                </a>{" "}
                or{" "}
                <a href="mailto:calamb@acg.aaa.com" className="text-sage-600 hover:underline">
                  calamb@acg.aaa.com
                </a>
                .
              </li>
              <li>
                We do not sell or share phone numbers with third parties for
                marketing purposes.
              </li>
              <li>Message and data rates may apply to SMS communications.</li>
              <li>
                We comply with all applicable TCPA regulations and FCC
                guidelines.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              10. Governing Law
            </h2>
            <p>
              These Terms &amp; Conditions are governed by the laws of the State
              of Florida, without regard to conflict-of-law principles. Any
              disputes arising under these terms shall be resolved in the courts
              of Sarasota County, Florida.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              11. Changes to These Terms
            </h2>
            <p>
              We reserve the right to update these Terms &amp; Conditions at any
              time. Changes will be posted on this page with an updated
              effective date. Your continued use of the website after changes
              are posted constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              12. Contact Us
            </h2>
            <p>
              For questions about these Terms &amp; Conditions, please contact
              us:
            </p>
            <address className="not-italic mt-3 space-y-1 text-navy-600">
              <p>
                <strong>Lamb Insurance Agency</strong>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:lambinsurance91@gmail.com"
                  className="text-sage-600 hover:underline"
                >
                  lambinsurance91@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+19412252335"
                  className="text-sage-600 hover:underline"
                >
                  941.225.2335
                </a>
              </p>
            </address>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-100">
          <Link
            href="/"
            className="btn-primary inline-block px-6 py-3 rounded-lg font-semibold font-body text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
