import type { Metadata } from "next";
import AutoPageClient from "./AutoPageClient";

export const metadata: Metadata = {
  title: "Auto Insurance Sarasota FL | Lamb Insurance Agency",
  description:
    "Get auto insurance in Sarasota from Lamb Insurance Agency. Local agent, personalized coverage, same-day quotes. One call and you're covered.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/auto-insurance-sarasota-fl",
  },
};

const schemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "InsuranceAgency"],
      name: "Lamb Insurance Agency",
      url: "https://lambinsuranceagency.com",
      email: "calamb@acg.aaa.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sarasota",
        addressRegion: "FL",
        addressCountry: "US",
      },
      sameAs: [],
      serviceArea: { "@type": "City", name: "Sarasota" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I know if I have enough auto coverage in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Florida has specific minimum requirements, but minimums rarely provide enough protection in a real accident. A local agent reviews your full picture — your vehicles, assets, and risk — and recommends coverage levels that actually protect you, not just the legal minimum.",
          },
        },
        {
          "@type": "Question",
          name: "Can I save money by bundling my auto and home insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In most cases, yes. When you place both policies through the same agent, bundle discounts apply to your combined premium. The exact savings depend on your specific policies. Contact Lamb Insurance Agency for a same-day bundle quote that prices both together.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if I'm hit by an uninsured driver in Sarasota?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Florida has a high rate of uninsured drivers. Uninsured motorist coverage on your policy steps in to cover your costs when the at-fault driver has no insurance or not enough. It's one of the most important coverage components for Florida drivers and one we always walk through with every client.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need separate coverage for each vehicle in my household?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All vehicles in your household should be listed on your policy. Multi-vehicle households often qualify for multi-vehicle discounts. We review your full household situation and quote it accurately — no surprises when you need to file a claim.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can I get a quote?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Same day. Fill out the form below or email us directly, and we'll be back in touch promptly with your options. No pressure, no jargon — just clear information about your coverage.",
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
          name: "Auto Insurance Sarasota FL",
          item: "https://lambinsuranceagency.com/auto-insurance-sarasota-fl",
        },
      ],
    },
  ],
};

export default function AutoInsurancePageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <AutoPageClient />
    </>
  );
}
