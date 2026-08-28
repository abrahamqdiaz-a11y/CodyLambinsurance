import type { FaqItem } from "./types";

// Single source of truth for this page: rendered by the accordion in
// BradentonPageClient.tsx and emitted as FAQPage JSON-LD by page.tsx.
export const faqs: FaqItem[] = [
  {
    question: "My Bradenton home has a 15-year-old roof. Can I still get homeowners insurance?",
    answer:
      "Yes, but your options narrow. Most carriers require a 4-point inspection on roofs past a certain age, and some set hard cutoffs at 15 years. That doesn't mean no coverage — it means you need a carrier whose underwriting appetite includes older roofs, and in some cases a wind mitigation inspection that demonstrates the roof was properly installed and has remaining useful life. I work with multiple carriers specifically because of situations like this.",
  },
  {
    question: "What is a 4-point inspection and do I need one in Bradenton?",
    answer:
      "A 4-point inspection evaluates four systems: roof, electrical panel, plumbing, and HVAC. Florida insurers require it on homes roughly 25 years or older before issuing a new policy. In Bradenton, where the housing stock skews older than in Lakewood Ranch or newer developments to the south, this is a common requirement. The inspection itself is relatively inexpensive — typically $100 to $150 — and knowing what it will show before you apply for coverage lets us get ahead of any issues.",
  },
  {
    question: "What are wind mitigation credits and how much can they save me?",
    answer:
      "Wind mitigation credits are premium discounts Florida insurers are required to offer based on features that reduce hurricane damage: roof shape, roof-to-wall connections, roof deck attachment, and opening protection. A hip roof performs better than a gable roof. Hurricane straps, properly rated sheathing, and impact-rated windows and doors each generate their own credits. On a Bradenton home, stacking two or three of these credits can reduce the wind portion of a premium by hundreds of dollars annually. A wind mitigation inspection costs $75 to $150 and the report is valid for five years.",
  },
  {
    question: "Is flood insurance necessary in Bradenton even if I'm not on the coast?",
    answer:
      "In parts of Bradenton, yes. The Manatee River and Braden River create riverine flood risk in neighborhoods that have nothing to do with Gulf proximity — areas around downtown Bradenton, Terra Ceia, and parts of East Bradenton have experienced significant flooding from rainfall and river overflow during tropical events, not just direct storm surge. Standard homeowners policies exclude flooding entirely. A FEMA address lookup takes two minutes and tells you your zone.",
  },
  {
    question: "I'm buying a home in Bradenton. What should I know about coverage before closing?",
    answer:
      "Order the 4-point inspection before closing, not after. If the report flags a roof or electrical issue, you want to negotiate repairs or credits while you still can. Also confirm your flood zone designation and get a flood insurance quote before assuming cost. If the home is in an AE zone, your lender will require flood coverage at closing, and force-placed coverage from the lender is significantly more expensive than what you could buy independently.",
  },
];
