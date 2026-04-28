import type { Metadata } from "next";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: "Florida Insurance FAQ | Lamb Insurance Agency",
  description:
    "Answers to common Florida insurance questions about auto, home, life, renewals, and coverage options in Sarasota and Bradenton. Get a free quote today.",
  alternates: {
    canonical: "https://lambinsuranceagency.com/faq",
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "InsuranceAgency"],
      name: "Lamb Insurance Agency",
      url: "https://lambinsuranceagency.com",
      email: "calamb@acg.aaa.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5893 Whitfield Ave",
        addressLocality: "Sarasota",
        addressRegion: "FL",
        postalCode: "34243",
        addressCountry: "US",
      },
      serviceArea: [
        { "@type": "City", name: "Sarasota" },
        { "@type": "City", name: "Bradenton" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Hablan español?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. En Lamb Insurance Agency atendemos en español para clientes de Sarasota, Bradenton y áreas cercanas. Puede llamarnos o visitarnos en la oficina y con gusto le ayudamos con seguro de auto, hogar y más.",
          },
        },
        {
          "@type": "Question",
          name: "Why did my auto insurance renewal go up in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Auto insurance renewal rates in Florida can rise because of repair costs, accident trends, weather risk, and carrier pricing updates. Even if your driving has not changed, market conditions can still affect your car insurance premium.",
          },
        },
        {
          "@type": "Question",
          name: "Can I switch auto insurance before my renewal date?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. You can switch auto insurance before your renewal date if you find better coverage or pricing. We can help you compare car insurance options and review cancellation details before you change policies.",
          },
        },
        {
          "@type": "Question",
          name: "How much is auto insurance in Sarasota or Bradenton?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Auto insurance costs depend on your car, driving history, age, coverage level, and location. We can compare insurance options for drivers in Sarasota, Bradenton, and surrounding areas based on your needs.",
          },
        },
        {
          "@type": "Question",
          name: "What does full coverage car insurance mean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Full coverage car insurance usually includes liability, comprehensive, and collision coverage. The right auto insurance setup depends on your vehicle, budget, and whether your car has a loan or lease.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need uninsured motorist auto insurance in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can be a smart option for many Florida drivers. Uninsured motorist coverage may help protect you if another car hits you and the driver has little or no insurance.",
          },
        },
        {
          "@type": "Question",
          name: "Is flood insurance included in home insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Standard home insurance policies usually do not include flood insurance coverage. Separate flood insurance may be important depending on your home, property location, and risk level.",
          },
        },
        {
          "@type": "Question",
          name: "How can I lower my car insurance premium?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You may be able to lower your car insurance premium by adjusting coverage, changing deductibles, or qualifying for discounts. We can review your current auto insurance policy and compare available options.",
          },
        },
        {
          "@type": "Question",
          name: "How much life insurance do I need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The right life insurance amount depends on your income, debts, family needs, and future goals. We can help you review options and choose coverage that fits your budget.",
          },
        },
        {
          "@type": "Question",
          name: "Can I bundle auto and home insurance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Bundling auto insurance and home insurance can make billing easier and may qualify you for discounts. Bundle options depend on the insurance carrier and your household situation.",
          },
        },
        {
          "@type": "Question",
          name: "Do I speak to a real insurance agent near Sarasota or Bradenton?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. When you call Lamb Insurance Agency, you speak with a real insurance agent who can explain your options clearly. If you prefer, stop by the office at 5893 Whitfield Ave, Sarasota, FL 34243, and we'll sit down, talk it through, and have a coffee.",
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
          name: "Florida Insurance FAQ",
          item: "https://lambinsuranceagency.com/faq",
        },
      ],
    },
  ],
};

export default function FAQPageRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FAQPageClient />
    </>
  );
}
