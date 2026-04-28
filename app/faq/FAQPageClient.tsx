"use client";

import { useState } from "react";
import Link from "next/link";
import { ServicePageHeader, ServicePageFooter } from "../components/ServicePageChrome";

const EMAIL = "calamb@acg.aaa.com";

const FAQS = [
  {
    id: "spanish",
    question: "¿Hablan español?",
    answer:
      "Sí. En Lamb Insurance Agency atendemos en español para clientes de Sarasota, Bradenton y áreas cercanas. Puede llamarnos o visitarnos en la oficina y con gusto le ayudamos con seguro de auto, hogar y más.",
  },
  {
    id: "renewal-increase",
    question: "Why did my auto insurance renewal go up in Florida?",
    answer:
      "Auto insurance renewal rates in Florida can rise because of repair costs, accident trends, weather risk, and carrier pricing updates. Even if your driving has not changed, market conditions can still affect your car insurance premium.",
  },
  {
    id: "switch-early",
    question: "Can I switch auto insurance before my renewal date?",
    answer:
      "Yes. You can switch auto insurance before your renewal date if you find better coverage or pricing. We can help you compare car insurance options and review cancellation details before you change policies.",
  },
  {
    id: "cost",
    question: "How much is auto insurance in Sarasota or Bradenton?",
    answer:
      "Auto insurance costs depend on your car, driving history, age, coverage level, and location. We can compare insurance options for drivers in Sarasota, Bradenton, and surrounding areas based on your needs.",
  },
  {
    id: "full-coverage",
    question: "What does full coverage car insurance mean?",
    answer:
      "Full coverage car insurance usually includes liability, comprehensive, and collision coverage. The right auto insurance setup depends on your vehicle, budget, and whether your car has a loan or lease.",
  },
  {
    id: "uninsured",
    question: "Do I need uninsured motorist auto insurance in Florida?",
    answer:
      "It can be a smart option for many Florida drivers. Uninsured motorist coverage may help protect you if another car hits you and the driver has little or no insurance.",
  },
  {
    id: "flood",
    question: "Is flood insurance included in home insurance?",
    answer:
      "No. Standard home insurance policies usually do not include flood insurance coverage. Separate flood insurance may be important depending on your home, property location, and risk level.",
  },
  {
    id: "lower-premium",
    question: "How can I lower my car insurance premium?",
    answer:
      "You may be able to lower your car insurance premium by adjusting coverage, changing deductibles, or qualifying for discounts. We can review your current auto insurance policy and compare available options.",
  },
  {
    id: "life-amount",
    question: "How much life insurance do I need?",
    answer:
      "The right life insurance amount depends on your income, debts, family needs, and future goals. We can help you review options and choose coverage that fits your budget.",
  },
  {
    id: "bundle",
    question: "Can I bundle auto and home insurance?",
    answer:
      "Yes. Bundling auto insurance and home insurance can make billing easier and may qualify you for discounts. Bundle options depend on the insurance carrier and your household situation.",
  },
  {
    id: "real-agent",
    question: "Do I speak to a real insurance agent near Sarasota or Bradenton?",
    answer:
      "Yes. When you call Lamb Insurance Agency, you speak with a real insurance agent who can explain your options clearly. If you prefer, stop by the office at 5893 Whitfield Ave, Sarasota, FL 34243, and we'll sit down, talk it through, and have a coffee.",
  },
];

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-navy-100 rounded-xl overflow-hidden bg-white">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        id={`faq-question-${faq.id}`}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-display text-navy-800 font-bold text-base md:text-lg hover:bg-sage-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-inset"
      >
        <span>{faq.question}</span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-sage-400 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-45 bg-sage-500 border-sage-500" : "bg-transparent"
          }`}
          aria-hidden="true"
        >
          <svg
            className={`w-4 h-4 transition-colors ${isOpen ? "text-white" : "text-sage-500"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <div
        id={`faq-answer-${faq.id}`}
        role="region"
        aria-labelledby={`faq-question-${faq.id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-6 pt-1 text-navy-600 font-body text-base leading-relaxed border-t border-navy-50">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQPageClient() {
  const [openId, setOpenId] = useState<string | null>("spanish");

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="min-h-screen bg-cream">
      <ServicePageHeader />

      <main id="main-content">
        {/* Hero banner */}
        <section
          className="hero-pattern pt-28 pb-16 md:pt-36 md:pb-20"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-4xl mx-auto px-5 text-center">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" aria-hidden="true" />
              <span className="text-sage-300 text-xs font-body uppercase tracking-widest">
                Insurance Answers
              </span>
            </div>
            <h1
              id="faq-heading"
              className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
            >
              Florida Insurance FAQ
            </h1>
            <p className="text-navy-200 font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Frequently asked questions about auto, home, life, renewals, and coverage options
              for Sarasota, Bradenton, and nearby areas.
            </p>
            <Link
              href="/#contact"
              className="btn-primary inline-block px-8 py-4 rounded-lg font-semibold font-body text-base"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>

        {/* FAQ accordion */}
        <section className="py-16 md:py-24 bg-cream" aria-label="Frequently asked questions">
          <div className="max-w-3xl mx-auto px-5">
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => toggle(faq.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-navy-900 py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <div className="flex justify-center mb-5" aria-hidden="true">
              <span className="block w-14 h-0.5" style={{ background: "linear-gradient(90deg, #4a8050, #97c09a)", borderRadius: 2 }} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Still have questions?
            </h2>
            <p className="text-navy-300 font-body text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Our local agents are ready to walk you through your options — no pressure, no jargon.
              Call us, email us, or stop by the office at 5893 Whitfield Ave, Sarasota, FL 34243.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="btn-primary px-8 py-4 rounded-lg font-semibold font-body text-base text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href={`mailto:${EMAIL}`}
                className="btn-outline px-8 py-4 rounded-lg font-semibold font-body text-base text-center"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <ServicePageFooter email={EMAIL} />
    </div>
  );
}
