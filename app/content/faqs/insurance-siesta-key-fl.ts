import type { FaqItem } from "./types";

// Single source of truth for this page: rendered by the accordion in
// SiestaKeyPageClient.tsx and emitted as FAQPage JSON-LD by page.tsx.
export const faqs: FaqItem[] = [
  {
    question: "Do I need flood insurance on Siesta Key?",
    answer:
      "Yes — and not just because your lender requires it. The majority of Siesta Key sits in FEMA high-risk flood zones AE and VE, where storm surge from the Gulf is the primary threat. Standard homeowners and HO-6 condo policies exclude flooding entirely. Given the island's direct Gulf exposure and the storm history of Southwest Florida, flood coverage is foundational protection here, not an add-on.",
  },
  {
    question: "Does my HO-6 condo policy cover short-term rentals on Airbnb or VRBO?",
    answer:
      "Typically no. Most standard HO-6 policies include language that voids or significantly limits coverage when the unit is rented on a short-term basis. If you're listing on Airbnb, VRBO, or a similar platform, you need either a short-term rental endorsement or a separate dwelling policy that addresses the actual occupancy pattern. The gap is real and we close it regularly for Siesta Key property owners.",
  },
  {
    question: "What is loss assessment coverage and why does it matter for Siesta Key condos?",
    answer:
      "Loss assessment coverage pays your share of costs the association passes to unit owners after a covered loss that exceeds the master policy limits. On a barrier island where a hurricane or flooding event could exceed the association's coverage capacity, this is one of the most important HO-6 endorsements to carry. Standard base limits are often too low — we review the association's master policy documents to recommend an appropriate amount.",
  },
  {
    question: "What's the difference between a VE zone and an AE zone on Siesta Key?",
    answer:
      "Both are high-risk FEMA flood zones, but VE zones are coastal high-hazard areas that account for wave action in addition to flooding. Much of Siesta Key's Gulf-facing shoreline sits in VE. AE zones cover areas within the 100-year floodplain without the added wave-action risk. Insurance in VE zones is typically more expensive and construction standards are stricter. Your specific flood designation determines your required coverage and your premium.",
  },
  {
    question: "My boat is docked at the property. Is it covered under my condo or homeowners policy?",
    answer:
      "Homeowners and condo policies rarely extend meaningful coverage to watercraft beyond a token threshold — typically $1,000 to $2,000. A standalone boat or watercraft policy covers physical damage, on-water liability, towing, and emergency assistance. That matters when you're operating around Big Pass, the Intracoastal, or out into the Gulf.",
  },
];
