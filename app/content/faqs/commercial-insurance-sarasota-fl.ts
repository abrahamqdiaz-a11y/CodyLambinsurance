import type { FaqItem } from "./types";

// Single source of truth for this page: rendered by the accordion in
// CommercialPageClient.tsx and emitted as FAQPage JSON-LD by page.tsx.
export const faqs: FaqItem[] = [
  {
    question: "What commercial insurance does my Sarasota business need?",
    answer:
      "It depends on your industry, size, and operations. Most businesses need general liability as a minimum. From there, workers' comp requirements, professional liability needs, property coverage, and industry-specific exposures all factor in. We review your specific situation and walk you through what makes sense — not a one-size-fits-all package.",
  },
  {
    question: "What is a Business Owner's Policy (BOP) and is it right for my business?",
    answer:
      "A BOP bundles general liability and commercial property into one policy, typically at a lower combined cost than buying both separately. It's a useful starting point for many small businesses — but it excludes professional liability, cyber, employment practices, and most industry-specific risks. Whether it's the right foundation depends on what you do.",
  },
  {
    question: "Does my business need workers' compensation insurance in Florida?",
    answer:
      "Most non-construction businesses with four or more employees are required to carry workers' compensation. Construction businesses must carry it with even one employee. Penalties for non-compliance are significant — including stop-work orders that can shut your business down. If you're unsure where you stand, we'll tell you.",
  },
  {
    question: "Do I need separate insurance for my business vehicle?",
    answer:
      "Yes, if it's used for business purposes. Personal auto policies typically exclude business use. If an employee drives their own car for work-related tasks and has an accident, both your business and the employee may be exposed. Commercial auto or hired/non-owned auto coverage addresses this.",
  },
  {
    question: "What is professional liability insurance and do I need it?",
    answer:
      "Professional liability — also called Errors and Omissions (E&O) — covers claims that your professional services or advice caused a client financial harm. General liability does not cover this. If you provide any professional service, give advice, or make recommendations that clients rely on financially, professional liability is a separate conversation worth having.",
  },
  {
    question: "My business is small. Do I really need cyber coverage?",
    answer:
      "Small businesses are frequently targeted in cyberattacks precisely because they're considered easier targets than large companies. If you store customer data, process credit cards, use email for client communication, or operate any software, a breach is a real possibility. Cyber liability coverage is more affordable than most business owners expect and more relevant than most assume.",
  },
  {
    question: "How quickly can I get a commercial insurance quote?",
    answer:
      "Most quotes are completed same-day. More complex operations may take a day or two depending on the coverage needed.",
  },
  {
    question: "Do you offer Spanish-language service?",
    answer: "Yes. English and Spanish spoken.",
  },
];
