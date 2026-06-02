"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ServicePageFooter, ServicePageHeader } from "../components/ServicePageChrome";
import HighLevelForm from "../components/HighLevelForm";

const EMAIL = "calamb@acg.aaa.com";
const PHONE_DISPLAY = "(941) 225-2335";
const PHONE_HREF = "+19412252335";

const switchReasons = [
  {
    title: "Premium Increased",
    text: "We'll compare your current coverage against available options and identify applicable discounts — even if your record is clean.",
  },
  {
    title: "New Vehicle or Driver",
    text: "Adding a young driver or buying a new car affects premiums significantly. We help you update your policy correctly and explain each tradeoff.",
  },
  {
    title: "Moving to Florida",
    text: "New residents often don't know what Florida requires or what their prior coverage doesn't carry over. We walk you through it.",
  },
  {
    title: "Coverage Gaps",
    text: "Many drivers don't discover gaps in their policy until after a claim. We find them first.",
  },
];

const coverageItems = [
  {
    title: "Liability",
    text: "Covers injuries and property damage you cause to others. Required by Florida law.",
  },
  {
    title: "Collision",
    text: "Repairs or replaces your vehicle after a covered accident.",
  },
  {
    title: "Comprehensive",
    text: "Covers theft, vandalism, flooding, fire, hurricanes, and falling objects.",
  },
  {
    title: "Uninsured Motorist",
    text: "Protects you when the other driver doesn't have adequate coverage. Florida has one of the highest rates of uninsured drivers in the country.",
  },
  {
    title: "Medical Payments",
    text: "Additional coverage for accident-related medical expenses beyond what PIP covers.",
  },
  {
    title: "Roadside Assistance",
    text: "Covers breakdowns, dead batteries, flat tires, and lockouts.",
  },
  {
    title: "Rental Reimbursement",
    text: "Pays for transportation costs while your vehicle is being repaired after a covered claim.",
  },
];

const faqItems = [
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
    question: "Why did my rate go up?",
    answer:
      "Florida's insurance market is expensive and getting more so. Rising repair costs, increased medical claims, higher litigation rates, hurricane losses, and uninsured driver exposure all contribute — even if your driving record is clean.",
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
              Same-Day Quotes · English & Spanish · Local Agency
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Auto Insurance in Sarasota, FL
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            Florida rates are up. Coverage gaps are common. Lamb Insurance Agency helps Sarasota drivers compare options, understand what they&apos;re actually buying, and get protected — without the runaround.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#contact" className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center">
              Get a Free Quote
            </a>
            <a
              href={`tel:${PHONE_HREF}`}
              className="px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" aria-label="Trust indicators">
            {["Local Sarasota Agency", "Bilingual Service", "Same-Day Quotes", "Personalized Reviews"].map((item) => (
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

function WhyPeopleSwitchSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="switch-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-10 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="switch-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Situations We Handle Every Day
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {switchReasons.map((item, index) => (
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
            Coverage Options
          </h2>
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

function WhyChooseSection() {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="choose-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-10 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="choose-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Why Sarasota Drivers Work With Us
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed">
            Most insurance websites give you a number. We give you an explanation. We take the time to walk you through what each coverage does, what Florida requires, and where your current policy might leave you exposed.
          </p>
        </div>
        <ul className="grid md:grid-cols-2 gap-4 text-navy-700 font-body">
          {[
            "Local Sarasota agency",
            "Bilingual service (English & Spanish)",
            "Same-day quotes",
            "Personalized coverage reviews",
            "Ongoing policy support",
            "Florida compliance guidance",
          ].map((item) => (
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
            Sarasota&apos;s Driving Environment
          </h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Sarasota isn&apos;t a typical Florida market. Heavy seasonal traffic, consistent tourist volume, afternoon thunderstorms, and direct hurricane exposure create risk patterns that generic policies don&apos;t always address.
            </p>
            <p>
              Uninsured and underinsured motorists are a real factor on Florida roads. Flooding and wind damage are annual concerns, not hypotheticals. Knowing the local environment matters when you&apos;re selecting coverage.
            </p>
            <p>
              We serve Sarasota, Lakewood Ranch, Fruitville, Siesta Key, Palmer Ranch, Gulf Gate, Osprey, Nokomis, Venice, Bradenton, and Parrish.
            </p>
            <p>
              Need more than auto insurance? Ask about <Link href="/bundle-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">bundling options in Sarasota</Link> for added convenience and possible savings.
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
    <section id="contact" className="bg-warm py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="section-rule" />
            <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
              Get a Free Auto Insurance Quote
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Shopping for better rates. Reviewing existing coverage. Insuring a new vehicle. Moving to Florida. Whatever brought you here — we&apos;ll give you a straight answer.
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

export default function AutoPageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero />
        <WhyPeopleSwitchSection />
        <CoverageSection />
        <WhyChooseSection />
        <SarasotaSection />
        <FAQSection />
        <ContactForm />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
