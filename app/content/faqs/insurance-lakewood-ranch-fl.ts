import type { FaqItem } from "./types";

// Single source of truth for this page: rendered by the accordion in
// LakewoodRanchPageClient.tsx and emitted as FAQPage JSON-LD by page.tsx.
export const faqs: FaqItem[] = [
  {
    question: "Do I need flood insurance in Lakewood Ranch?",
    answer:
      "Parts of Lakewood Ranch fall within FEMA-designated flood zones, and more properties than residents expect carry at least a moderate flood risk. Your lender may require flood coverage based on your specific parcel — but even without a lender requirement, standard homeowners policies exclude flooding entirely. A quick FEMA address lookup tells you your zone; we can walk you through what that means for your premium.",
  },
  {
    question: "Does my HOA insurance cover my personal belongings?",
    answer:
      "No. The HOA master policy covers common areas and shared amenities — sometimes building exteriors, depending on the association documents — but it does not cover the inside of your home, your furniture, electronics, or personal liability. That's what your individual homeowners or HO-6 policy is for. Most LWR neighborhood associations require you to carry your own policy regardless.",
  },
  {
    question: "I just moved from New Jersey — what do I need to change about my coverage?",
    answer:
      "Quite a bit. Florida operates differently than most northeastern states: windstorm coverage is often excluded from standard homeowners policies and requires a separate endorsement or Citizens policy; flood is always separate; and Florida's auto insurance requirements differ from New Jersey's no-fault structure. Your out-of-state plates also need to be transferred within 90 days of establishing Florida residency, which is a natural moment to re-shop your auto policy for Florida-specific discounts and requirements.",
  },
  {
    question: "How fast can I get proof of insurance for a closing?",
    answer:
      "Same day in most cases. Closing deadlines are one of the most common urgent requests we handle, and we've turned around binders on short notice for LWR buyers more than once. Call us directly with your closing date — we'll prioritize it.",
  },
  {
    question: "Is windstorm coverage included in Florida homeowners policies?",
    answer:
      "Not always. Many Florida carriers exclude windstorm or hurricane damage from their standard homeowners policy, particularly in coastal counties. Coverage may require a separate windstorm endorsement or a Citizens Insurance policy. This surprises most out-of-state buyers who assumed a homeowners policy covered storm damage. We'll make sure you know exactly what your policy does and doesn't cover before you close.",
  },
];
