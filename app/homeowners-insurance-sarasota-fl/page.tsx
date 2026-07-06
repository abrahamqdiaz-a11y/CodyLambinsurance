import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageHeader, ServicePageFooter } from "../components/ServicePageChrome";

export const metadata: Metadata = {
  title: { absolute: "Homeowners Insurance Sarasota, FL | Same-Day Quotes | Lamb" },
  description:
    "Homeowners insurance in Sarasota, FL from a local agent. Wind, hurricane, and replacement-cost coverage explained plainly. Same-day quotes.",
  alternates: { canonical: "/homeowners-insurance-sarasota-fl" },
  openGraph: { images: ["/og-image.png"] },
  twitter: { card: "summary_large_image" },
};

// TODO: Build out full homeowners insurance page content to match other coverage pages.
// This stub ensures the route is indexable and the metadata is live.
export default function HomeownersInsurancePage() {
  return (
    <>
      <ServicePageHeader />
      <main className="bg-cream min-h-screen pt-32 pb-20 px-5">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-navy-900 text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Homeowners Insurance in Sarasota, FL
          </h1>
          <p className="text-navy-600 font-body text-lg leading-relaxed mb-8">
            Protecting your Sarasota home starts with understanding what your policy actually covers
            — wind, hurricane, replacement cost, and more. Get a same-day quote from a local
            licensed agent.
          </p>
          <Link
            href="/quote"
            className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold font-body"
          >
            Get a free quote
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </main>
      <ServicePageFooter email="contact@lambinsuranceagency.com" />
    </>
  );
}
