"use client";

import AreaPageTemplate, { AreaPageConfig } from "../components/AreaPageTemplate";

const config: AreaPageConfig = {
  areaName: "Venice",
  heroHeadline: "Insurance for Venice, FL Residents",
  heroCopy:
    "Venice has one of the highest concentrations of retirees in Florida, a historic island district with homes dating to the 1920s, and coastal exposure that doesn't always show up on a standard flood map lookup. Lamb Insurance Agency understands the specific coverage picture here.",
  trustBadges: ["Local Agency", "Bilingual Service", "Older Home Expertise", "Free Quote"],

  localHeading: "Why Venice Requires a Different Approach",
  localParagraphs: [
    "Venice Island's historic district was largely built between the 1920s and 1950s, and those homes carry construction characteristics — original electrical systems, older plumbing, clay tile roofs — that affect how underwriters evaluate risk and what they're willing to write. That's not a barrier, but it does mean working with carriers who are familiar with the housing stock rather than defaulting to whoever quotes lowest online. The city also skews significantly older than the rest of Sarasota County, which means life insurance decisions look different here: final expense coverage, estate planning considerations, and fixed-income premium sensitivity all come up regularly. Add in flood exposure near the Venice Inlet, Roberts Bay, and Caspersen Beach, and the coverage conversation here is genuinely distinct from what a resident in Sarasota proper or Lakewood Ranch needs."
  ],

  needsHeading: "Why Coverage Needs Are Specific to Venice",
  needsItems: [
    "Pre-1980 homes may face stricter underwriting due to electrical, plumbing, or roofing characteristics",
    "Retirees on fixed incomes benefit from final expense and permanent life options over high-premium term coverage",
    "Coastal areas near Venice Beach, the Inlet, and Roberts Bay carry FEMA flood zone designations",
    "Estate and legacy planning considerations make life insurance structurally important for many residents",
    "Golf carts are common in Venice — road use may require separate coverage beyond homeowners",
    "Seasonal residents may have vacancy gaps that affect coverage eligibility and claims",
  ],

  coverageLinks: [
    {
      label: "Life Insurance",
      href: "/life-insurance-sarasota-fl",
      description: "Term, whole life, and final expense options for retirees and fixed-income households.",
    },
    {
      label: "Flood Insurance",
      href: "/flood-insurance-sarasota-fl",
      description: "Coverage for properties near the Venice Inlet, Roberts Bay, and low-lying coastal areas.",
    },
    {
      label: "Auto Insurance",
      href: "/auto-insurance-sarasota-fl",
      description: "Coverage for Venice residents, including low-mileage discounts common among retirees.",
    },
    {
      label: "Bundle Insurance",
      href: "/bundle-insurance-sarasota-fl",
      description: "Combine homeowners, auto, and life for a simplified coverage picture and potential savings.",
    },
    {
      label: "Condo Insurance",
      href: "/condo-insurance-sarasota-fl",
      description: "HO-6 coverage for Venice condo owners — what the association policy doesn't include.",
    },
    {
      label: "Commercial Insurance",
      href: "/commercial-insurance-sarasota-fl",
      description: "Coverage for Venice-area small businesses, including professional liability and property.",
    },
  ],

  faqItems: [
    {
      question: "My Venice home is older. Will that affect my homeowners coverage?",
      answer:
        "It can. Homes with original knob-and-tube or aluminum wiring, galvanized plumbing, or aging roofs may be rated differently by carriers — and some standard insurers won't write them at all. That doesn't mean coverage isn't available; it means the right carrier matters. We work with companies familiar with Venice's older housing stock who can find appropriate coverage without unnecessary exclusions or inflated premiums.",
    },
    {
      question: "Is flood insurance necessary in Venice?",
      answer:
        "For parts of the city, yes. Areas near the Venice Inlet, Caspersen Beach, Roberts Bay, and low-lying streets along the Intracoastal sit in FEMA designated flood zones. Venice's flat terrain also means rainfall-driven flooding can affect neighborhoods that aren't technically in a high-risk zone on paper. Standard homeowners does not cover flooding. If you're unsure of your zone, we can help you look it up.",
    },
    {
      question: "I'm retired and on a fixed income. What life insurance options make sense?",
      answer:
        "Final expense policies are worth a close look — they're designed specifically to cover funeral costs and end-of-life expenses, carry lower premiums than traditional life coverage, and often require no medical exam. Depending on your health, age, and goals, a small permanent policy may also be appropriate. We don't push a one-size-fits-all product; we start with your budget and work from there.",
    },
    {
      question: "Do I need special coverage for my golf cart in Venice?",
      answer:
        "Possibly. Golf cart use is common in Venice, and where you drive it determines what coverage applies. On private property or within a closed community, it may fall under your homeowners policy up to a low dollar limit. If you're operating on public roads — which is permitted in designated areas of Venice — you likely need a separate golf cart endorsement or standalone policy that covers liability and physical damage.",
    },
  ],

  ctaHeadline: "Get a Quote for Your Venice Property",
  ctaCopy:
    "Older home, coastal exposure, or fixed-income planning — we'll find coverage that fits Venice's specific landscape without overcharging for risks that don't apply to you.",
};

export default function VenicePageClient() {
  return <AreaPageTemplate config={config} />;
}
