"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ServicePageHeader, ServicePageFooter } from "./ServicePageChrome";
import HighLevelForm from "./HighLevelForm";

export interface CoverageLink {
  label: string;
  href: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AreaPageConfig {
  areaName: string;
  heroHeadline: string;
  heroCopy: string;
  trustBadges: string[];
  localHeading: string;
  localParagraphs: string[];
  needsHeading: string;
  needsItems: string[];
  coverageLinks: CoverageLink[];
  faqItems: FaqItem[];
  ctaHeadline: string;
  ctaCopy: string;
}

const EMAIL = "calamb@acg.aaa.com";
const PHONE_DISPLAY = "(941) 225-2335";
const PHONE_HREF = "+19412252335";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Hero({ config }: { config: AreaPageConfig }) {
  return (
    <section id="home" className="hero-pattern min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-5 bg-sage-400 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full opacity-8 bg-navy-500 blur-2xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" aria-hidden="true" />
            <span className="text-sage-300 text-xs font-body uppercase tracking-widest">
              Local Agency · Free Quotes · Clear Answers
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {config.heroHeadline}
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            {config.heroCopy}
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
            {config.trustBadges.map((badge) => (
              <div key={badge} className="bg-white/8 border border-white/15 rounded-lg px-4 py-3 text-sm text-navy-100 font-body">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocalSection({ config }: { config: AreaPageConfig }) {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="local-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-4xl animate-on-scroll">
          <div className="section-rule" />
          <h2 id="local-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            {config.localHeading}
          </h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            {config.localParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NeedsSection({ config }: { config: AreaPageConfig }) {
  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="needs-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-10 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="needs-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            {config.needsHeading}
          </h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-4 text-navy-700 font-body">
          {config.needsItems.map((item, i) => (
            <li key={i} className="bg-white border border-navy-100 rounded-xl p-4 animate-on-scroll">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CoverageLinksSection({ config }: { config: AreaPageConfig }) {
  return (
    <section className="bg-navy-900 py-20 md:py-28" aria-labelledby="coverage-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="coverage-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Coverage Options We Offer in {config.areaName}
          </h2>
          <p className="text-navy-200 font-body text-base leading-relaxed">
            We work with multiple carriers to find the right fit. Select any coverage type below to learn more.
          </p>
        </div>
        <ul className="grid md:grid-cols-2 gap-4">
          {config.coverageLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group block bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-sage-400/40 transition-colors animate-on-scroll"
              >
                <p className="font-display text-lg font-bold text-white group-hover:text-sage-300 transition-colors mb-2">
                  {link.label} →
                </p>
                <p className="text-navy-300 font-body text-sm leading-relaxed">{link.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FAQSection({ config }: { config: AreaPageConfig }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-navy-600 font-body text-base">
            Questions specific to insurance in {config.areaName}.
          </p>
        </div>
        <div className="space-y-4">
          {config.faqItems.map((item, index) => {
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
                  <span className={`absolute right-0 top-1 text-sage-700 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true">
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

function ContactSection({ config }: { config: AreaPageConfig }) {
  return (
    <section id="contact" className="bg-cream py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="section-rule" />
            <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
              {config.ctaHeadline}
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              {config.ctaCopy}
            </p>
            <div className="space-y-4">
              <a
                href={`tel:${PHONE_HREF}`}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">📞</div>
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
                <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">✉️</div>
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

export default function AreaPageTemplate({ config }: { config: AreaPageConfig }) {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero config={config} />
        <LocalSection config={config} />
        <NeedsSection config={config} />
        <CoverageLinksSection config={config} />
        <FAQSection config={config} />
        <ContactSection config={config} />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
