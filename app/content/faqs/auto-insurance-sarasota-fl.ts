import type { FaqItem } from "./types";

// Single source of truth for this page: rendered by the accordion in
// AutoPageClient.tsx and emitted as FAQPage JSON-LD by page.tsx.
export const faqs: FaqItem[] = [
  {
    question: "Is Florida a no-fault state?",
    answer:
      "Yes. Florida's no-fault system requires PIP coverage and limits when you can sue after an accident. You're covered for medical expenses regardless of fault — but that doesn't mean you're fully protected.",
  },
  {
    question: "What does \"full coverage\" mean?",
    answer:
      "Typically liability, collision, and comprehensive combined. The specifics vary by policy — we'll explain exactly what you're getting before you commit.",
  },
  {
    question: "Why did my rate go up — and will it come down?",
    answer:
      "Florida auto rates surged in 2022–2023 due to rising repair costs, litigation, and hurricane losses. The good news: tort reform enacted in 2023 has reversed that trend. Florida's top five auto insurers are averaging an 8% rate decrease for 2026. But filed rate cuts don't automatically reach your bill — you need to review your policy and compare options to capture the savings.",
  },
  {
    question: "Can I lower my premium?",
    answer:
      "Often yes. Adjusting deductibles, applying discounts, and bundling policies are common options. We'll review what's available based on your specific situation.",
  },
  {
    question: "How fast can I get a quote?",
    answer:
      "Most quotes are completed same-day.",
  },
  {
    question: "Do you offer Spanish-language service?",
    answer:
      "Yes. English and Spanish spoken.",
  },
];
