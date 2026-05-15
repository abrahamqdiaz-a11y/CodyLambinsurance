"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ServicePageFooter, ServicePageHeader } from "../components/ServicePageChrome";
import HighLevelForm from "../components/HighLevelForm";

const EMAIL = "calamb@acg.aaa.com";
const PHONE_DISPLAY = "(941) 225-2335";
const PHONE_HREF = "+19412252335";

const lifeReasons = [
  {
    title: "Income Replacement",
    text: "If your family depends on your paycheck, life insurance helps replace that income so they can keep up with everyday expenses.",
  },
  {
    title: "Mortgage and Debt Protection",
    text: "A policy can help your spouse or family pay off the mortgage and other debts without financial strain.",
  },
  {
    title: "Your Children's Future",
    text: "Help fund education, childcare, and long-term goals even if you're no longer there to provide.",
  },
  {
    title: "Final Expense Coverage",
    text: "Funeral and end-of-life costs add up quickly. A policy ensures your family isn't left handling those bills alone.",
  },
];

const coverageItems = [
  {
    title: "Term Life Insurance",
    text: "Coverage for a set number of years—typically 10, 20, or 30. Often the most affordable option for income replacement and mortgage protection during your working years.",
  },
  {
    title: "Whole Life Insurance",
    text: "Permanent coverage that doesn't expire. Premiums stay level and the policy builds cash value over time that you can borrow against.",
  },
  {
    title: "Universal Life Insurance",
    text: "Flexible permanent coverage with adjustable premiums and death benefit amounts. A good fit if your needs may change over time.",
  },
  {
    title: "Final Expense Insurance",
    text: "Smaller policies designed to cover funeral costs and end-of-life expenses. Easier to qualify for and available at most ages.",
  },
];

const whoNeedsItems = [
  "Young families with dependents",
  "Homeowners with a mortgage",
  "Single parents supporting children",
  "Business owners protecting their company",
  "Adults caring for aging parents",
  "Anyone who wants to leave something behind",
];

const faqItems = [
  {
    question: "How much life insurance do I need?",
    answer:
      "A common starting point is 10 to 12 times your annual income, but the right amount depends on your debts, dependents, income, and goals. We'll walk through the numbers with you so the coverage actually fits your life.",
  },
  {
    question: "What's the difference between term and whole life insurance?",
    answer:
      "Term life covers you for a set period—like 20 years—and is typically more affordable. Whole life is permanent, never expires, and builds cash value. Neither is universally better; the right choice depends on your situation.",
  },
  {
    question: "Is life insurance expensive in Florida?",
    answer:
      "Rates vary based on age, health, coverage amount, and policy type. Many people find term life more affordable than they expected. The best way to know what you'll pay is to get a personalized quote.",
  },
  {
    question: "When is the best time to buy life insurance?",
    answer:
      "The earlier, the better. Premiums are lower when you're younger and healthier. Waiting means paying more—or potentially losing the ability to qualify for certain coverage.",
  },
  {
    question: "Can I get life insurance if I have health issues?",
    answer:
      "Often, yes. Some policies have simplified underwriting or no medical exam required. We can help you understand your options based on your health history.",
  },
  {
    question: "Do you offer bilingual life insurance help?",
    answer:
      "Yes. We proudly serve English- and Spanish-speaking customers throughout the Sarasota area.",
  },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Hero() {
  return (
    <section id="home" className="hero-pattern min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-5 bg-sage-400 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full opacity-8 bg-navy-500 blur-2xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" aria-hidden="true" />
            <span className="text-sage-300 text-xs font-body uppercase tracking-widest">
              Free Quote · Fast Answers · Local Help
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Life Insurance in Sarasota, FL
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            Life insurance gives your family financial protection when they need it most. At Lamb Insurance Agency, we help Sarasota residents find term and permanent coverage options that fit their budget and their goals—without the confusion.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#contact" className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center">
              Get a Free Quote
            </a>
            <a
              href={`tel:${PHONE_HREF}`}
              className="px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Call: {PHONE_DISPLAY}
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" aria-label="Trust indicators">
            {["Bilingual Service", "Local Sarasota Team", "Term & Permanent Options", "Clear Guidance"].map((item) => (
              <div key={item} className="bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-sm text-navy-100 font-body">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyLifeInsuranceSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="why-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-10 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="why-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Why Life Insurance Matters for Sarasota Families
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed">
            A life insurance policy is one of the most direct ways to protect the people who depend on you. Whether you&apos;re raising a family, paying off a home, or running a business, the right policy creates a safety net that lasts.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {lifeReasons.map((item, index) => (
            <article key={item.title} className={`bg-white border border-navy-100 rounded-2xl p-6 animate-on-scroll animate-on-scroll-delay-${Math.min(index + 1, 4)}`}>
              <h3 className="font-display text-xl font-bold text-navy-800 mb-3">{item.title}</h3>
              <p className="text-navy-600 font-body text-base leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoverageSection() {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="coverage-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="coverage-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Life Insurance Options Explained Clearly
          </h2>
          <p className="text-navy-200 font-body text-base leading-relaxed">
            Not every policy works the same way. Here are the main types of life insurance we can help you explore.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {coverageItems.map((item) => (
            <article key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 animate-on-scroll">
              <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-navy-200 font-body text-base leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoNeedsSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="who-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-10 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="who-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Who Should Consider Life Insurance
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed">
            Life insurance isn&apos;t only for older adults or those with large estates. Most people who have someone depending on them benefit from having coverage in place.
          </p>
        </div>
        <ul className="grid md:grid-cols-2 gap-4 text-navy-700 font-body">
          {whoNeedsItems.map((item) => (
            <li key={item} className="bg-white border border-navy-100 rounded-xl p-4 animate-on-scroll">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SarasotaSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="sarasota-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="animate-on-scroll max-w-4xl">
          <div className="section-rule" />
          <h2 id="sarasota-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Local Life Insurance Help in Sarasota
          </h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Sarasota is home to a wide mix of residents—young families putting down roots, professionals mid-career, retirees planning for the next chapter. Life insurance needs look different at every stage, and we take the time to understand yours before recommending anything.
            </p>
            <p>
              We work with multiple carriers so we can compare options and find coverage that fits your budget. There&apos;s no pressure and no jargon—just clear answers and straightforward guidance from a local agency that knows this community.
            </p>
            <p>
              Looking to protect more than just your life? Ask about our{" "}
              <Link href="/bundle-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">
                bundle insurance options in Sarasota
              </Link>{" "}
              or explore our full range of{" "}
              <Link href="/" className="text-sage-700 underline hover:text-sage-800">
                insurance services
              </Link>{" "}
              to see how we can help with your complete coverage picture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed">
            Common questions about life insurance in Sarasota and how we can help.
          </p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={item.question} className="bg-white border border-navy-100 rounded-xl p-6 animate-on-scroll">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left font-display text-lg font-bold text-navy-800 pr-8 relative"
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span className={`absolute right-0 top-1 text-sage-700 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 mt-4" : "max-h-0"}`}>
                  <p className="text-navy-600 font-body text-base leading-relaxed">{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section id="contact" className="bg-cream py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="section-rule" />
            <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
              Get a Life Insurance Quote Today
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              The best time to lock in coverage is before you need it. Get a free, no-pressure quote from a local Sarasota agency that takes the time to understand your situation.
            </p>

            <div className="space-y-4">
              <a
                href={`tel:${PHONE_HREF}`}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">
                  📞
                </div>
                <div>
                  <p className="text-navy-400 font-body text-xs uppercase tracking-wider mb-0.5">Call Now</p>
                  <p className="font-display text-navy-800 font-bold text-sm group-hover:text-sage-700 transition-colors">{PHONE_DISPLAY}</p>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
                aria-label={`Email ${EMAIL}`}
              >
                <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">
                  ✉️
                </div>
                <div>
                  <p className="text-navy-400 font-body text-xs uppercase tracking-wider mb-0.5">Email</p>
                  <p className="font-display text-navy-800 font-bold text-sm group-hover:text-sage-700 transition-colors break-all">{EMAIL}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 animate-on-scroll animate-on-scroll-delay-2">
            <HighLevelForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LifePageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero />
        <WhyLifeInsuranceSection />
        <CoverageSection />
        <WhoNeedsSection />
        <SarasotaSection />
        <FAQSection />
        <ContactForm />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
