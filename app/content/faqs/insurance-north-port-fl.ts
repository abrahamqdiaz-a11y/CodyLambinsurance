import type { FaqItem } from "./types";

// Single source of truth for this page: rendered by the accordion in
// NorthPortPageClient.tsx and emitted as FAQPage JSON-LD by page.tsx.
export const faqs: FaqItem[] = [
  {
    question: "Do I need flood insurance in North Port?",
    answer:
      "Parts of North Port fall within FEMA flood zones, particularly near the Myakka River, Cocoplum Waterway, and other drainage channels that run through the city. Standard homeowners policies exclude flooding under all circumstances. If your property has a federally-backed mortgage and falls in a Special Flood Hazard Area, flood coverage is required. Even outside those zones, flooding from intense rainfall is common in North Port during tropical systems, and the NFIP premium for a low-risk property is often manageable.",
  },
  {
    question: "Does new construction in Wellen Park come with any insurance advantages?",
    answer:
      "Yes, in most cases. Homes built under Florida's current building code -- post-2001 and especially post-2007 -- typically qualify for better windstorm terms than older construction. Builder warranties and newer roof materials also help at underwriting. That said, even new homes need to carry their own flood and windstorm coverage, which aren't automatically included in a standard homeowners policy. A wind mitigation inspection can document your home's specific features and unlock premium discounts.",
  },
  {
    question: "What should I know about insurance for a home with a well and septic system?",
    answer:
      "Standard homeowners policies do not cover well or septic system failures as part of the base policy. You can add equipment breakdown coverage or a service line endorsement to address some of these risks, but limits vary by carrier. Water backup coverage is a separate endorsement worth considering as well -- it covers damage from sewer backup or sump pump overflow, which can occur during heavy rain events. North Port has a significant number of properties on well and septic, so this comes up regularly.",
  },
  {
    question: "Does North Port's size affect my insurance or emergency services?",
    answer:
      "North Port is geographically large -- one of the largest cities by area in Florida -- which means some properties are farther from fire stations than they would be in a denser city. Carriers use fire protection class ratings that account for distance to the nearest fire station. Properties in lower protection classes (farther from fire stations) can see higher premiums. It's worth knowing your property's rating. If you're on the outer edges of North Port near Charlotte County, this is particularly relevant.",
  },
  {
    question: "I'm building new in North Port -- when do I need to get insurance?",
    answer:
      "If you're financing construction, your lender will typically require builder's risk coverage during the build phase. At closing on a completed new home, you'll need a standard homeowners policy in place, and your lender may require flood insurance if the property is in a designated flood zone. If you're buying from a builder, you'll often have a specific closing date with a deadline for proof of insurance. Call us with your timeline and we'll get it handled.",
  },
];
