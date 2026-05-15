"use client";

import AreaPageTemplate, { AreaPageConfig } from "../components/AreaPageTemplate";

const config: AreaPageConfig = {
  areaName: "Bradenton",
  heroHeadline: "Insurance for Bradenton, FL Residents & Businesses",
  heroCopy:
    "Bradenton is a working city with a broad range of coverage needs — SR-22 filings, commercial auto, small business liability, and residential policies for a diverse population across neighborhoods from Palma Sola to East Bradenton. Lamb Insurance Agency serves clients across Manatee County without judgment and without unnecessary complexity.",
  trustBadges: ["Local Agency", "Bilingual Service", "SR-22 Filings", "Free Quote"],

  localHeading: "Insurance in a Real Working Community",
  localParagraphs: [
    "US-41 and SR-64 carry a daily mix of commuter traffic, commercial vehicles, and long-haul freight through Bradenton — and the insurance questions that come into our office reflect that. SR-22 filings come up here more often than in most surrounding areas; so does commercial coverage for contractors, retail operators, and service businesses working the Cortez Road and 14th Street corridors. Bradenton also has a significant rental housing stock and multi-family property base, which means landlord policies and renters insurance come up regularly alongside standard homeowners. Add in the Manatee River and lower-elevation neighborhoods near the bay, and flood exposure is real for residents who don't think of themselves as coastal."
  ],

  needsHeading: "Why Coverage Needs Are Specific to Bradenton",
  needsItems: [
    "SR-22 filings required after DUI, serious violations, or coverage lapses — we handle non-standard auto",
    "High concentration of commercial corridors along US-41, Cortez Road, and SR-64 drives small business coverage needs",
    "Rental housing stock means landlord policies and renters insurance are common coverage conversations",
    "Low-lying areas near the Manatee River, Braden River, and Terra Ceia Bay carry real flood exposure",
    "Working-class commuter households benefit from competitive auto rates and multi-policy discounts",
    "Growing immigrant and Spanish-speaking population — we offer fully bilingual service",
  ],

  coverageLinks: [
    {
      label: "Auto Insurance",
      href: "/auto-insurance-sarasota-fl",
      description: "Standard and non-standard auto coverage, including SR-22 filings for Manatee County residents.",
    },
    {
      label: "Commercial Insurance",
      href: "/commercial-insurance-sarasota-fl",
      description: "General liability, commercial property, and BOP options for Bradenton-area businesses.",
    },
    {
      label: "Flood Insurance",
      href: "/flood-insurance-sarasota-fl",
      description: "Coverage for low-lying Bradenton neighborhoods near the Manatee and Braden Rivers.",
    },
    {
      label: "Bundle Insurance",
      href: "/bundle-insurance-sarasota-fl",
      description: "Multi-policy discounts for households that can benefit from bundling auto and home.",
    },
    {
      label: "Life Insurance",
      href: "/life-insurance-sarasota-fl",
      description: "Affordable term and final expense options for Bradenton families across income levels.",
    },
    {
      label: "Condo Insurance",
      href: "/condo-insurance-sarasota-fl",
      description: "HO-6 coverage for condo owners in Bradenton whose association policy doesn't cover their unit.",
    },
  ],

  faqItems: [
    {
      question: "Can you help me with an SR-22 in Bradenton?",
      answer:
        "Yes. An SR-22 is a certificate your insurer files with the Florida DMV confirming you carry the state-required minimum liability coverage — typically required after a DUI conviction, serious traffic violation, license suspension, or lapse in coverage. We work with carriers that write non-standard auto policies and can get the filing submitted quickly. The SR-22 itself doesn't cost much; the underlying policy cost depends on your driving record and the carrier.",
    },
    {
      question: "I run a small business in Bradenton. What coverage do I need?",
      answer:
        "At minimum, most small businesses need general liability coverage to protect against third-party injury or property damage claims. Depending on your operation, you may also need commercial property, commercial auto, workers' compensation, or a Business Owner's Policy (BOP) that bundles several coverages at a reduced rate. We look at what you actually do — not just a business category — and recommend accordingly.",
    },
    {
      question: "Is flood insurance needed in Bradenton?",
      answer:
        "In many parts of the city, yes. Low-lying areas near the Manatee River, Braden River, and Terra Ceia Bay carry FEMA flood zone designations. Heavy rainfall and tropical storms have caused significant flooding in parts of Bradenton even without a direct hurricane making landfall nearby. Don't assume you're in the clear because you're not on the Gulf coast — inland and riverine flooding is a real risk in Manatee County.",
    },
    {
      question: "I'm renting my home in Bradenton. Do I need insurance?",
      answer:
        "If you're a tenant, your landlord's policy covers the building — not your belongings or your personal liability. A renters policy is typically one of the least expensive insurance purchases available and covers your personal property and protects you if someone is injured in your unit. If you're the landlord renting property to others, you need a dwelling or landlord policy rather than a standard homeowners policy, which generally doesn't apply to non-owner-occupied properties.",
    },
  ],

  ctaHeadline: "Get a Quote in Bradenton",
  ctaCopy:
    "Whether you need SR-22 filing, small business coverage, or a straightforward auto or home policy, we'll help you find the right fit without unnecessary friction.",
};

export default function BradentonPageClient() {
  return <AreaPageTemplate config={config} />;
}
