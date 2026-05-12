"use client";

import { useEffect } from "react";
import { ServicePageFooter, ServicePageHeader } from "../components/ServicePageChrome";
import HighLevelForm from "../components/HighLevelForm";

const EMAIL = "calamb@acg.aaa.com";
const PHONE_DISPLAY = "(941) 225-2335";
const PHONE_HREF = "+19412252335";

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
    <section
      className="bg-cream pt-28 pb-16 md:pt-36 md:pb-20"
      aria-labelledby="quote-hero-heading"
    >
      <div className="max-w-3xl mx-auto px-5 text-center animate-on-scroll">
        <div className="flex justify-center mb-4">
          <div className="section-rule" />
        </div>
        <h1
          id="quote-hero-heading"
          className="font-display text-4xl md:text-5xl font-bold text-navy-900 leading-tight mb-5"
        >
          Get a Free Insurance Quote
        </h1>
        <p className="text-navy-600 font-body text-base leading-relaxed max-w-xl mx-auto mb-8">
          Fill out the form below and Cody will follow up personally with coverage options
          that fit your situation — no jargon, no pressure.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_HREF}`}
            className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 border border-navy-100 hover:border-sage-300 transition-colors group"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <span
              className="w-8 h-8 rounded-full bg-sage-50 flex items-center justify-center text-base flex-shrink-0"
              aria-hidden="true"
            >
              📞
            </span>
            <div className="text-left">
              <p className="text-navy-400 font-body text-xs uppercase tracking-wider leading-none mb-0.5">
                Prefer to call?
              </p>
              <p className="font-display text-navy-800 font-bold text-sm group-hover:text-sage-700 transition-colors">
                {PHONE_DISPLAY}
              </p>
            </div>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 border border-navy-100 hover:border-sage-300 transition-colors group"
            aria-label={`Email ${EMAIL}`}
          >
            <span
              className="w-8 h-8 rounded-full bg-sage-50 flex items-center justify-center text-base flex-shrink-0"
              aria-hidden="true"
            >
              ✉️
            </span>
            <div className="text-left">
              <p className="text-navy-400 font-body text-xs uppercase tracking-wider leading-none mb-0.5">
                Send an email
              </p>
              <p className="font-display text-navy-800 font-bold text-sm group-hover:text-sage-700 transition-colors break-all">
                {EMAIL}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function FormSection() {
  return (
    <section className="bg-warm py-16 md:py-24" aria-label="Quote request form">
      <div className="max-w-3xl mx-auto px-5 animate-on-scroll">
        <HighLevelForm />
      </div>
    </section>
  );
}

export default function QuotePageClient() {
  useScrollReveal();

  return (
    <>
      <ServicePageHeader />
      <main id="main-content">
        <Hero />
        <FormSection />
      </main>
      <ServicePageFooter email={EMAIL} />
    </>
  );
}
