export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Builds the FAQPage JSON-LD node from the same `faqs` array the page's
 * visible accordion renders. Schema text and accordion text are guaranteed to
 * match because there is only one source.
 */
export function faqPageSchema(faqs: readonly FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
