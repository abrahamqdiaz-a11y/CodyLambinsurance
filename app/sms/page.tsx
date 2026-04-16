import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Communication Policy",
  description:
    "SMS Communication Policy for Lamb Insurance Agency. Learn how we use SMS to communicate with clients.",
  robots: { index: true, follow: true },
};

export default function SmsCommunicationPolicy() {
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
          SMS Communication Policy
        </h1>
        <p className="text-navy-500 font-body text-sm mb-10">
          Last updated: April 15, 2026
        </p>

        <div className="prose max-w-none font-body text-navy-700 space-y-6">
          <p>
            By providing your phone number, you consent to receive SMS messages
            from Lamb Insurance Agency related to:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Insurance quotes</li>
            <li>Policy updates</li>
            <li>Customer support and service notifications</li>
          </ul>

          <p>
            Message frequency varies depending on your interaction with our
            agency. Message and data rates may apply.
          </p>

          <p>
            You can reply STOP at any time to opt out or reply HELP for
            assistance.
          </p>

          <p>
            We do not share or sell your phone number to third parties for
            marketing purposes.
          </p>

          <p>
            For more information, please review our{" "}
            <Link href="/privacy-policy" className="text-sage-600 hover:underline">
              Privacy Policy
            </Link>
            {" "}and{" "}
            <Link href="/terms" className="text-sage-600 hover:underline">
              Terms &amp; Conditions
            </Link>
            .
          </p>
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
