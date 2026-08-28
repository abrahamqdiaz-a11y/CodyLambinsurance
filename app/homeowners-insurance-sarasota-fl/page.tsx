import type { Metadata } from "next";
import HomeownersPageClient from "./HomeownersPageClient";

export const metadata: Metadata = {
  title: { absolute: "Homeowners Insurance Sarasota, FL | Same-Day Quotes | Lamb Insurance" },
  description:
    "Homeowners insurance in Sarasota, FL from a licensed local agent. Wind, hurricane, flood gap, and replacement-cost coverage explained plainly. Same-day quotes. FL License #G034846.",
  alternates: { canonical: "/homeowners-insurance-sarasota-fl" },
  openGraph: {
    title: "Homeowners Insurance Sarasota, FL | Lamb Insurance Agency",
    description:
      "Local licensed agent explains what Sarasota homeowners insurance actually covers — wind, hurricane deductibles, flood gaps, replacement cost, and 4-point inspections. Same-day quotes.",
    url: "https://lambinsuranceagency.com/homeowners-insurance-sarasota-fl",
    type: "website",
    images: ["/lamb.logo.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

const schemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Homeowners Insurance",
      serviceType: "Homeowners Insurance",
      url: "https://lambinsuranceagency.com/homeowners-insurance-sarasota-fl",
      provider: { "@id": "https://lambinsuranceagency.com/#organization" },
      areaServed: { "@type": "City", name: "Sarasota" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does homeowners insurance cover in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A standard Florida homeowners policy (HO-3 or HO-5) covers your home's structure against named perils — wind, fire, lightning, and others — along with your personal belongings, personal liability, and additional living expenses if your home is uninhabitable. It does not cover flooding, which requires a separate flood insurance policy.",
          },
        },
        {
          "@type": "Question",
          name: "Does homeowners insurance cover hurricane damage in Sarasota?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wind damage from a hurricane is typically covered under a standard Florida homeowners policy — but with a separate hurricane or named storm deductible, usually 2%–5% of your dwelling coverage. On a $400,000 home, that's $8,000–$20,000 before insurance pays anything. Storm surge and flooding from the hurricane are not covered under homeowners insurance.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need flood insurance if I have homeowners insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, in almost all cases. Homeowners insurance never covers flooding — rising water, storm surge, or rainfall-driven flooding all require a separate flood policy. In Sarasota County, even properties outside designated high-risk flood zones can flood during significant storms. Approximately 25% of flood insurance claims nationwide come from lower-risk zones.",
          },
        },
        {
          "@type": "Question",
          name: "What is a wind mitigation inspection and is it worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A wind mitigation inspection documents features of your home that reduce hurricane damage — roof shape, roof-to-wall connections, roof deck attachment, and opening protection. Florida insurers are required to give premium credits for qualifying features. The inspection costs $75–$150 and can reduce your annual premium by several hundred dollars. It's almost always worth it.",
          },
        },
        {
          "@type": "Question",
          name: "How much homeowners insurance do I need in Sarasota?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your dwelling coverage should match what it would cost to rebuild your home today — not its market value. Construction costs in Sarasota County have increased significantly since most policies were originally written. We review your dwelling limit against current local construction costs to make sure you're not underinsured before a major loss.",
          },
        },
        {
          "@type": "Question",
          name: "What is a 4-point inspection and when is it required?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 4-point inspection evaluates four systems: roof, electrical, plumbing, and HVAC. Most Florida carriers require it for homes roughly 25 years or older before issuing a new policy. The inspection typically costs $100–$150. If your home has aging systems, knowing what the report will show before you apply lets us work with the right carriers from the start.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get homeowners insurance if my roof is older?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, though your options narrow as a roof ages. Most carriers set limits — commonly 15–20 years — and some require documentation of remaining useful life. We work with multiple carriers, including those willing to write older roofs when a wind mitigation inspection shows the roof was properly installed and is in serviceable condition.",
          },
        },
        {
          "@type": "Question",
          name: "What is an umbrella policy and do I need one with homeowners insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An umbrella policy adds excess liability coverage above your homeowners and auto limits — typically $1M or more. If you have a pool, a dog, guests regularly on your property, or meaningful assets to protect, umbrella coverage is worth serious consideration at relatively low cost.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://lambinsuranceagency.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Homeowners Insurance in Sarasota",
          item: "https://lambinsuranceagency.com/homeowners-insurance-sarasota-fl",
        },
      ],
    },
  ],
};

export default function HomeownersInsurancePageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <HomeownersPageClient />
    </>
  );
}
