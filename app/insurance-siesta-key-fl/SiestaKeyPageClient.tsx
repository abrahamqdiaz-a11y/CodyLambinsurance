"use client";

import AreaPageTemplate, { AreaPageConfig } from "../components/AreaPageTemplate";

const config: AreaPageConfig = {
  areaName: "Siesta Key",
  heroHeadline: "Insurance for Siesta Key Residents & Property Owners",
  heroCopy:
    "Siesta Key's Gulf-front exposure, high property values, and active vacation rental market create coverage questions that a generic policy rarely answers well. Lamb Insurance Agency helps Siesta Key residents, condo owners, and property investors get coverage that actually fits.",
  trustBadges: ["Local Sarasota Agency", "Bilingual Service", "Flood Zone Expertise", "Free Quote"],

  localHeading: "What Makes Siesta Key Different",
  localParagraphs: [
    "Siesta Key draws more than two million visitors per year, and that volume shows up on Midnight Pass Road and Stickney Point Road every weekend from February through October — beach traffic that creates real auto exposure for residents who commute on and off the island daily. Most of the island sits in FEMA flood zones AE or VE, where storm surge from the Gulf isn't a seasonal worry but a recurring planning reality. And because short-term vacation rentals generate significant income for many property owners here, the gap between what a standard homeowners policy covers and what actually happens at a rental property is a risk worth understanding before a claim."
  ],

  needsHeading: "Why Coverage Needs Are Different on Siesta Key",
  needsItems: [
    "Most of the island is in FEMA AE or VE flood zones — standard homeowners does not cover storm surge",
    "Short-term vacation rentals (Airbnb, VRBO) typically void standard homeowners coverage",
    "High property values mean replacement cost calculations matter more than the state minimum",
    "Boats and watercraft docked at private slips need dedicated coverage beyond homeowners limits",
    "Condo association master policies cover the building — not your unit contents or personal liability",
    "Seasonal and part-year residents may have gaps during months they're away",
  ],

  coverageLinks: [
    {
      label: "Flood Insurance",
      href: "/flood-insurance-sarasota-fl",
      description: "Required by most lenders in AE and VE zones. Covers storm surge and rising water that homeowners insurance excludes.",
    },
    {
      label: "Condo Insurance",
      href: "/condo-insurance-sarasota-fl",
      description: "HO-6 coverage for your unit interior, personal belongings, and liability — what the association policy leaves out.",
    },
    {
      label: "Auto Insurance",
      href: "/auto-insurance-sarasota-fl",
      description: "Coverage for residents navigating heavy seasonal traffic and the Siesta Drive and Stickney Point corridors.",
    },
    {
      label: "Bundle Insurance",
      href: "/bundle-insurance-sarasota-fl",
      description: "Combine auto, condo, and flood policies for potential savings and simplified management.",
    },
    {
      label: "Life Insurance",
      href: "/life-insurance-sarasota-fl",
      description: "Term and permanent options for property owners and families planning around a coastal asset.",
    },
    {
      label: "Commercial Insurance",
      href: "/commercial-insurance-sarasota-fl",
      description: "General liability and property coverage for businesses operating on Siesta Key.",
    },
  ],

  faqItems: [
    {
      question: "Do I need flood insurance on Siesta Key?",
      answer:
        "Yes — and not just because your lender requires it. The majority of Siesta Key sits in FEMA high-risk flood zones AE and VE, where storm surge from the Gulf is the primary threat. Standard homeowners policies specifically exclude flooding regardless of zone. Given the island's direct Gulf exposure and the storm history of Southwest Florida, flood coverage is a foundational piece of protection here, not an add-on.",
    },
    {
      question: "Does my homeowners policy cover my short-term vacation rental?",
      answer:
        "Typically no. Most standard homeowners policies include language that voids or limits coverage when the property is rented on a short-term basis. If you're listing on Airbnb, VRBO, or a similar platform, you need either a short-term rental endorsement or a separate dwelling/landlord policy that addresses the actual occupancy pattern. We can help you identify the coverage gap and close it.",
    },
    {
      question: "What about my boat or watercraft tied at the dock?",
      answer:
        "Homeowners and condo policies rarely extend meaningful coverage to watercraft beyond a low dollar threshold — typically $1,000 to $2,000. A standalone boat or watercraft policy covers physical damage, liability while on the water, and often towing or emergency assistance. That matters when you're operating around Big Pass, the Intracoastal, or out into the Gulf.",
    },
    {
      question: "I own a condo on Siesta Key. What does the association's policy cover?",
      answer:
        "The association's master policy covers the building structure and common areas — roofs, hallways, exterior walls, shared amenities. It does not cover your unit's interior finishes, personal belongings, appliances you own, or your personal liability if someone is injured inside your unit. An HO-6 condo policy fills those gaps and is typically required by lenders and many association bylaws.",
    },
  ],

  ctaHeadline: "Get a Quote for Your Siesta Key Property",
  ctaCopy:
    "Whether you own a condo, a vacation rental, or a primary residence on the island, we'll help you find coverage that reflects the actual risk — not a template built for somewhere else.",
};

export default function SiestaKeyPageClient() {
  return <AreaPageTemplate config={config} />;
}
