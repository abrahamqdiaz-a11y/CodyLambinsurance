"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ServicePageFooter, ServicePageHeader } from "../components/ServicePageChrome";
import HighLevelForm from "../components/HighLevelForm";

const EMAIL = "calamb@acg.aaa.com";
const PHONE_DISPLAY = "(941) 225-2335";
const PHONE_HREF = "+19412252335";

const businessChallenges = [
  {
    title: "My Premium Went Up at Renewal",
    text: "Rising premiums push many business owners to shop. We help you compare current market options and identify where you may be over- or under-covered.",
  },
  {
    title: "I'm Not Sure What I Actually Have",
    text: "Many business owners inherit a policy they never fully reviewed. We read through your existing coverage and explain exactly what it does and doesn't protect.",
  },
  {
    title: "I'm Starting or Expanding a Business",
    text: "New location, new employees, new services — your coverage needs change as your business grows. We make sure your policy keeps pace.",
  },
  {
    title: "A Client or Lender Requires Proof of Insurance",
    text: "Contracts and lenders often require specific coverage levels and certificates of insurance. We help you meet those requirements without overpaying.",
  },
];

const coverageItems = [
  {
    title: "General Liability",
    text: "Covers third-party bodily injury and property damage claims arising from your business operations, products, or premises.",
  },
  {
    title: "Commercial Property",
    text: "Protects your building, equipment, inventory, and other physical assets from fire, theft, vandalism, and covered weather events.",
  },
  {
    title: "Business Owner's Policy (BOP)",
    text: "Combines general liability and commercial property into one policy — often a cost-effective option for small and mid-size businesses.",
  },
  {
    title: "Workers' Compensation",
    text: "Covers medical expenses and lost wages for employees injured on the job. Required for most Florida employers.",
  },
  {
    title: "Commercial Auto",
    text: "Covers vehicles used for business purposes, including liability, collision, and comprehensive protection.",
  },
  {
    title: "Professional Liability",
    text: "Also called Errors & Omissions (E&O), this covers claims that your professional advice or services caused a client financial harm.",
  },
];

const faqItems = [
  {
    question: "What commercial insurance does my Sarasota business need?",
    answer:
      "It depends on your industry, size, and risk exposure. Most businesses need at minimum general liability coverage. We review your specific situation and walk you through the options that make sense.",
  },
  {
    question: "What is a Business Owner's Policy (BOP)?",
    answer:
      "A BOP bundles general liability and commercial property coverage into one policy — often at a lower cost than buying them separately. It's a common starting point for small and mid-size businesses.",
  },
  {
    question: "Do I need workers' compensation insurance in Florida?",
    answer:
      "Florida law requires most employers to carry workers' compensation. Requirements vary by industry and number of employees. We can help you understand your obligations.",
  },
  {
    question: "Can I bundle commercial and personal insurance?",
    answer:
      "In some cases, yes. Bundling policies may simplify management and create savings opportunities. Ask us what options are available for your situation.",
  },
  {
    question: "How do I get a commercial insurance quote in Sarasota?",
    answer:
      "Fill out the form on this page or call our office. We'll ask a few questions about your business and walk you through coverage options at no obligation.",
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
              Free Quote · Local Help · Clear Answers
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Commercial Insurance in Sarasota
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            Your business works hard — your insurance should too. At Lamb Insurance Agency, we help Sarasota business owners find the right commercial coverage, understand what they&apos;re paying for, and stay protected as they grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#contact" className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center">
              Get a Free Business Quote
            </a>
            <a
              href={`tel:${PHONE_HREF}`}
              className="px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              Call: {PHONE_DISPLAY}
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" aria-label="Trust indicators">
            {["Local Sarasota Agency", "Bilingual Service", "Fast Quote Process", "Clear Guidance"].map((item) => (
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

function WhyBusinessesShopSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="challenges-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-10 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="challenges-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Why Business Owners Shop for New Coverage
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {businessChallenges.map((item, index) => (
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
            Commercial Coverage Options Explained
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
            Why Choose Lamb Insurance Agency
          </h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-4 text-navy-700 font-body">
          {[
            "Local Sarasota agency",
            "Real people, not a call center",
            "Straight answers without jargon",
            "Fast, simple quote process",
            "Help finding coverage within your budget",
            "Ongoing support after you buy",
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
            Local Help for Sarasota Businesses
          </h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              From retail shops and restaurants to contractors and professional service firms, Sarasota businesses face unique risks. Florida&apos;s weather exposure, liability environment, and workforce regulations all factor into the right commercial policy. We work with local business owners to build coverage that matches how they actually operate.
            </p>
            <p>
              Need personal coverage too? Ask about <Link href="/bundle-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">bundling options in Sarasota</Link> that may simplify your insurance and create additional savings.
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
              Get a Business Quote Today
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Don&apos;t wait for a claim or a contract requirement to review your commercial coverage. Get local help, clear answers, and options built around your business.
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

export default function CommercialPageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero />
        <WhyBusinessesShopSection />
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
