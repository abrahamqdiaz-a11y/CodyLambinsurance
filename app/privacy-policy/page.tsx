import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Lamb Insurance Agency. Learn how we collect, use, and protect your personal information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-navy-500 font-body text-sm mb-10">
          Last updated: April 6, 2025
        </p>

        <div className="prose max-w-none font-body text-navy-700 space-y-8">
          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              1. Introduction
            </h2>
            <p>
              Lamb Insurance Agency (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;) is committed to protecting your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard information you provide when you visit our
              website or request insurance quotes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              2. Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Personal identifiers</strong> — name, email address,
                phone number, and mailing address.
              </li>
              <li>
                <strong>Insurance-related information</strong> — vehicle details
                (year, make, model, VIN), property details, and coverage
                preferences.
              </li>
              <li>
                <strong>Communications</strong> — messages you send us through
                the contact form or by phone/email.
              </li>
              <li>
                <strong>Usage data</strong> — pages visited, browser type, and
                general location derived from your IP address, collected
                automatically via standard web server logs and analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Respond to quote requests and service inquiries.</li>
              <li>Provide, improve, and personalize our insurance services.</li>
              <li>
                Contact you by phone, email, or text in accordance with your
                consent (see TCPA Compliance below).
              </li>
              <li>Comply with legal obligations.</li>
              <li>Prevent fraud and maintain website security.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              4. TCPA Compliance
            </h2>
            <p>
              By submitting our contact form and checking the consent box, you
              expressly consent to receive calls, texts, and/or emails from Lamb
              Insurance Agency at the number and address you provided, including
              via automated dialing systems or pre-recorded messages, regarding
              insurance products and services. Consent is not a condition of
              purchase. Message and data rates may apply. You may opt out at any
              time by replying STOP to any text, clicking unsubscribe in an
              email, or contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              5. Sharing Your Information
            </h2>
            <p>
              We do <strong>not</strong> sell your personal information. We may
              share it with:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                Insurance carriers and underwriters necessary to provide you
                with a quote or policy.
              </li>
              <li>
                Service providers who assist us in operating our website (e.g.,
                form processing via Netlify).
              </li>
              <li>
                Law enforcement or regulatory bodies when required by law.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              6. Data Retention
            </h2>
            <p>
              We retain your information only as long as necessary to fulfill
              the purposes described in this policy or as required by applicable
              law. Quote inquiry data is generally retained for up to 36 months.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              7. Your Rights
            </h2>
            <p>
              Depending on your state of residence, you may have the right to
              access, correct, or delete personal information we hold about you.
              Florida residents may also have rights under the Florida Digital
              Bill of Rights. To exercise your rights, contact us at{" "}
              <a
                href="mailto:lambinsurance91@gmail.com"
                className="text-sage-600 hover:underline"
              >
                lambinsurance91@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              8. Cookies &amp; Analytics
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to
              improve user experience and analyze site traffic. You can control
              cookies through your browser settings. Disabling cookies may limit
              some functionality.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              9. Security
            </h2>
            <p>
              We implement reasonable technical and organizational measures to
              protect your information from unauthorized access, alteration, or
              disclosure. However, no internet transmission is completely secure,
              and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated effective date. Continued
              use of our website after changes constitutes acceptance of the
              revised policy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-navy-800 mb-3">
              11. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact
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
