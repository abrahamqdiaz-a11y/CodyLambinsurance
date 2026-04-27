"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const EMAIL = "calamb@acg.aaa.com";

const SERVICES = [
  { emoji: "🚗", title: "Auto Insurance", id: "auto" },
  { emoji: "🏡", title: "Home Insurance", id: "home" },
  { emoji: "❤️", title: "Life Insurance", id: "life" },
  { emoji: "🏢", title: "Commercial Insurance", id: "commercial" },
];

const BUNDLE_FEATURES = [
  "Bundle savings applied to your combined premium",
  "One renewal date for both policies",
  "One local agent manages everything",
  "One call for questions, changes, or claims support",
  "Coverage built around your specific Sarasota property and vehicle",
  "No 800-number runaround — real local service",
];

const HOW_IT_WORKS = [
  { step: 1, title: "Tell us about your home and your vehicle" },
  { step: 2, title: "We build your bundle quote — same day" },
  { step: 3, title: "Review your coverage and savings together" },
  { step: 4, title: "We handle everything from there — one agent, one call" },
];

const FAQS = [
  {
    q: "How much can I save by bundling home and auto in Sarasota?",
    a: "Bundle savings vary by household depending on your home, your vehicles, and your coverage levels. The best way to know your exact savings is to get a quote that prices both policies together. Contact Lamb Insurance Agency for a same-day bundle quote.",
  },
  {
    q: "Do I need to switch both policies at the same time?",
    a: "Not necessarily. We can review your current policies and timing and find the cleanest transition that avoids any gaps in coverage. We often align both renewals so everything moves together cleanly going forward.",
  },
  {
    q: "What if my home and auto have different renewal dates?",
    a: "Very common. We handle this regularly. We review both current policies, map out the timing, and make the transition in a way that makes financial sense — minimizing any penalties and maximizing your savings from day one of the bundle.",
  },
  {
    q: "Does bundling affect how my claims are handled?",
    a: "Each policy responds independently according to its own terms. Bundling affects your premium — not your coverage or claims process. What it does change is who you call. One local agent handles both — no bouncing between departments or call centers.",
  },
  {
    q: "Can I bundle condo insurance and auto instead of home and auto?",
    a: "Yes. The same bundling approach applies whether you own a house or a condo in Sarasota. We build your coverage around your actual property — not a generic template.",
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

// ── Header ─────────────────────────────────────────────────
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#why-us", label: "Why Us" },
    { href: "#contact", label: "Get a Quote" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/97 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="flex flex-col leading-none group"
          aria-label="Lamb Insurance Agency — home"
        >
          <span className="font-display text-white text-lg md:text-xl font-bold tracking-tight group-hover:text-sage-300 transition-colors">
            Lamb Insurance
          </span>
          <span className="text-sage-400 text-xs uppercase tracking-[0.2em] font-body">
            Agency
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.slice(0, 3).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#contact"
            className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold font-body tracking-wide"
          >
            Get a Free Quote
          </a>
        </nav>

        <button
          className="md:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-400"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-all duration-200 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-200 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col px-5 py-4 gap-1" aria-label="Mobile navigation">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-navy-200 hover:text-white py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

// ── Hero ───────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="hero-pattern min-h-screen flex flex-col justify-center relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-5 bg-sage-400 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full opacity-8 bg-navy-500 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" aria-hidden="true" />
            <span className="text-sage-300 text-xs font-body uppercase tracking-widest">
              Home &amp; Auto Bundle — Sarasota FL
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ animation: "fadeUp 0.7s ease 0.1s both" }}
          >
            Bundle Home and Auto Insurance{" "}
            <span className="text-sage-300">Sarasota FL</span>{" "}
            — One Agent, One Call, Real Savings
          </h1>

          <p
            className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-2xl"
            style={{ animation: "fadeUp 0.7s ease 0.25s both" }}
          >
            Bundling your home and auto through one local Sarasota agent means simpler
            coverage, a single point of contact, and real savings on your combined premium.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 mb-12"
            style={{ animation: "fadeUp 0.7s ease 0.45s both" }}
          >
            <a
              href="#contact"
              className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center"
            >
              Get Your Bundle Quote
            </a>
          </div>

          <div
            className="flex flex-wrap gap-6"
            style={{ animation: "fadeUp 0.7s ease 0.55s both" }}
            aria-label="Trust indicators"
          >
            {[
              { text: "Trusted Coverage" },
              { text: "Personalized Service" },
              { text: "Local Expertise" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2">
                <span className="text-navy-300 text-sm font-body">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 1: Why Bundle ──────────────────────────────────
function WhyBundle() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="why-bundle-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="why-bundle-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-6 leading-tight"
          >
            Why Bundle Your Home and Auto?
          </h2>
          <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed">
            <p>
              When you place your{" "}
              <Link
                href="/home-insurance-sarasota-fl"
                className="text-sage-600 hover:text-sage-700 underline underline-offset-2 transition-colors"
              >
                home insurance in Sarasota
              </Link>{" "}
              and{" "}
              <Link
                href="/auto-insurance-sarasota-fl"
                className="text-sage-600 hover:text-sage-700 underline underline-offset-2 transition-colors"
              >
                auto insurance in Sarasota
              </Link>{" "}
              through the same local agent, everything gets simpler. One agent who knows
              both policies. One renewal conversation each year. One call when you have a
              question or need to make a change.
            </p>
            <p>
              And for most Sarasota households, bundling means real savings on your combined
              premium — not just a marketing claim, but an actual reduction in what you pay
              each year.
            </p>
            <p>
              At Lamb Insurance Agency we handle both your home and auto coverage from our
              Sarasota office. You deal with one person who knows your full situation — not a
              different call center representative every time you call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 2: What Bundling Gets You ─────────────────────
function BundleFeatures() {
  return (
    <section
      className="bg-navy-900 py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="bundle-features-heading"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="bundle-features-heading"
              className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
            >
              What Bundling{" "}
              <span className="text-sage-300">Actually Gets You</span>
            </h2>
            <p className="text-navy-300 font-body text-base leading-relaxed mb-8">
              Bundling is more than a discount. It changes how your coverage works day to
              day — and who you deal with when it matters.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-block px-7 py-3.5 rounded-lg font-semibold font-body text-base"
            >
              Get Your Bundle Quote
            </a>
          </div>

          <ul className="space-y-4" aria-label="Benefits of bundling home and auto insurance">
            {BUNDLE_FEATURES.map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-4 animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)}`}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-600/30 border border-sage-500/40 flex items-center justify-center mt-0.5"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4 text-sage-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-navy-200 font-body text-base leading-relaxed pt-0.5">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ── Section 3: Built for Sarasota ─────────────────────────
function BuiltForSarasota() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="built-for-sarasota-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="built-for-sarasota-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-6 leading-tight"
          >
            Built for Sarasota Homeowners and Drivers
          </h2>
          <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Whether you own a home in Lakewood Ranch, a condo on Siesta Key, or a house in
              Venice or North Port — and whether you drive one vehicle or three — your bundle
              is built around your actual situation.
            </p>
            <p>
              We know Sarasota&apos;s neighborhoods, the local coverage considerations that
              matter here, and what makes sense for homes and vehicles in this specific
              market. That local knowledge is something a national website or call center
              cannot offer.
            </p>
            <p>
              Whether you&apos;re bundling home and auto, or pairing your auto policy with{" "}
              <Link
                href="/condo-insurance-sarasota-fl"
                className="text-sage-600 hover:text-sage-700 underline underline-offset-2 transition-colors"
              >
                condo insurance
              </Link>{" "}
              in Sarasota, we build your coverage around your actual property — not a generic
              template.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 4: How It Works ────────────────────────────────
function HowItWorks() {
  return (
    <section
      className="bg-navy-900 py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="max-w-3xl">
          <div className="animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="how-it-works-heading"
              className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
            >
              How It Works
            </h2>
            <p className="text-navy-300 font-body text-base leading-relaxed mb-10">
              Getting your bundle quote is straightforward. One conversation covers everything.
            </p>
          </div>

          <ol className="space-y-6" aria-label="Bundle quote process steps">
            {HOW_IT_WORKS.map((item, i) => (
              <li
                key={item.step}
                className={`flex items-start gap-5 animate-on-scroll animate-on-scroll-delay-${i + 1}`}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-600/30 border border-sage-500/40 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="font-display text-sage-300 font-bold text-base leading-none">
                    {item.step}
                  </span>
                </div>
                <div className="pt-2">
                  <p className="text-navy-200 font-body text-base leading-relaxed">
                    <span className="font-semibold text-white">Step {item.step}:</span>{" "}
                    {item.title}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 animate-on-scroll">
            <a
              href="#contact"
              className="btn-primary inline-block px-7 py-3.5 rounded-lg font-semibold font-body text-base"
            >
              Get Your Bundle Quote — Same Day Response
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ────────────────────────────────────────────────────
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-warm py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mx-auto">
          <div className="animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="faq-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-10 leading-tight"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <dl className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl border border-navy-100 overflow-hidden animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 4)}`}
              >
                <dt>
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left font-body font-semibold text-navy-800 text-sm md:text-base hover:text-sage-700 transition-colors"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span>{faq.q}</span>
                    <svg
                      className={`flex-shrink-0 w-5 h-5 ml-4 text-sage-500 transition-transform duration-200 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-navy-600 font-body text-sm md:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

// ── Contact Form ───────────────────────────────────────────
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [insuranceType, setInsuranceType] = useState("");
  const [loading, setLoading] = useState(false);
  const [tcpaConsent, setTcpaConsent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.set("tcpa-consent", "yes");
    formData.set("tcpa-consent-timestamp", new Date().toISOString());

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`);
      setSubmitted(true);
      setTcpaConsent(false);
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong submitting the form. Please call us directly or try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "form-input w-full rounded-lg px-4 py-3 text-navy-900 font-body text-sm placeholder-navy-400 focus:ring-0";
  const labelClass = "block font-body text-sm font-semibold text-navy-700 mb-1.5";

  return (
    <section
      id="contact"
      className="bg-warm py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="contact-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight"
            >
              Get Your Free Quote
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Ready to find the right coverage? Fill out the form and we&#39;ll be in touch
              promptly to walk you through your options—no pressure, no jargon.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
                aria-label={`Email ${EMAIL}`}
              >
                <div
                  className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0"
                  aria-hidden="true"
                >
                  ✉️
                </div>
                <div>
                  <p className="text-navy-400 font-body text-xs uppercase tracking-wider mb-0.5">
                    Email Us
                  </p>
                  <p className="font-display text-navy-800 font-bold text-sm group-hover:text-sage-700 transition-colors break-all">
                    {EMAIL}
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 animate-on-scroll animate-on-scroll-delay-2">
            <div className="bg-white rounded-2xl shadow-xl shadow-navy-100/50 p-8 md:p-10 border border-navy-100">
              {submitted ? (
                <div className="text-center py-10" role="alert" aria-live="polite">
                  <div className="mb-5" aria-hidden="true"></div>
                  <h3 className="font-display text-2xl font-bold text-navy-800 mb-3">
                    Thank You!
                  </h3>
                  <p className="text-navy-600 font-body text-base leading-relaxed mb-6 max-w-sm mx-auto">
                    Your quote request has been received. We&#39;ll review your information
                    and reach out to you shortly!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary px-6 py-3 rounded-lg font-semibold font-body text-sm"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  name="quote-request"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  aria-label="Quote request form"
                  noValidate
                >
                  <input type="hidden" name="form-name" value="quote-request" />
                  <div hidden aria-hidden="true">
                    <label>
                      Don&#39;t fill this out:{" "}
                      <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <h3 className="font-display text-xl font-bold text-navy-800 mb-7">
                    Request a Free Quote
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label htmlFor="full-name" className={labelClass}>
                        Full Name{" "}
                        <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <input
                        id="full-name"
                        type="text"
                        name="full-name"
                        required
                        autoComplete="name"
                        placeholder="Jane Smith"
                        className={inputClass}
                        aria-required="true"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="address" className={labelClass}>
                        Address{" "}
                        <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        required
                        autoComplete="street-address"
                        placeholder="123 Main St, Sarasota, FL 34230"
                        className={inputClass}
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email{" "}
                        <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="jane@example.com"
                        className={inputClass}
                        aria-required="true"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone Number{" "}
                        <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        autoComplete="tel"
                        placeholder="(941) 555-0100"
                        className={inputClass}
                        aria-required="true"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="insurance-type" className={labelClass}>
                        Insurance Type{" "}
                        <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <select
                        id="insurance-type"
                        name="insurance-type"
                        required
                        className={`${inputClass} cursor-pointer`}
                        value={insuranceType}
                        onChange={(e) => setInsuranceType(e.target.value)}
                        aria-required="true"
                      >
                        <option value="" disabled>
                          Select coverage type…
                        </option>
                        <option value="Home">Home Insurance</option>
                        <option value="Auto">Auto Insurance</option>
                        <option value="Life">Life Insurance</option>
                        <option value="Commercial">Commercial Insurance</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {(insuranceType === "Auto" || insuranceType === "") && (
                      <>
                        <div>
                          <label htmlFor="vehicle-year-make-model" className={labelClass}>
                            Year, Make &amp; Model
                            <span className="ml-1 text-navy-400 font-normal">(optional)</span>
                          </label>
                          <input
                            id="vehicle-year-make-model"
                            type="text"
                            name="vehicle-year-make-model"
                            autoComplete="off"
                            placeholder="e.g. 2022 Honda Accord"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="vin-number" className={labelClass}>
                            VIN Number
                            <span className="ml-1 text-navy-400 font-normal">(if handy)</span>
                          </label>
                          <input
                            id="vin-number"
                            type="text"
                            name="vin-number"
                            autoComplete="off"
                            placeholder="17-character VIN"
                            maxLength={17}
                            className={inputClass}
                          />
                        </div>
                      </>
                    )}

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className={labelClass}>
                        Message / Additional Details
                        <span className="ml-1 text-navy-400 font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us anything that would help us find the right coverage for you…"
                        className={inputClass}
                        aria-describedby="message-hint"
                      />
                      <p id="message-hint" className="text-xs text-navy-400 font-body mt-1.5">
                        Current coverage provider, specific questions, budget, etc.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary mt-7 w-full py-4 rounded-lg font-semibold font-body text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    aria-live="polite"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      "Submit My Quote Request →"
                    )}
                  </button>

                  <div className="mt-6 p-4 rounded-xl border-2 border-navy-100 bg-navy-50/50">
                    <p className="text-xs text-navy-600 font-body leading-relaxed mb-3">
                      By checking the box below, you confirm your preference regarding SMS
                      messages from Lamb Insurance Agency. Messages may include insurance
                      quotes, policy updates, and customer support. Message frequency varies.
                      Message and data rates may apply. Reply STOP to unsubscribe or HELP for
                      assistance. Consent is not a condition of purchase. See our{" "}
                      <Link
                        href="/terms"
                        className="underline hover:text-sage-700 text-sage-600"
                      >
                        Terms &amp; Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy-policy"
                        className="underline hover:text-sage-700 text-sage-600"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                    <label
                      htmlFor="tcpa-consent"
                      className="flex items-start gap-3 cursor-pointer group"
                    >
                      <div className="relative flex-shrink-0 mt-0.5">
                        <input
                          id="tcpa-consent"
                          type="checkbox"
                          name="tcpa-consent-checkbox"
                          checked={tcpaConsent}
                          onChange={(e) => setTcpaConsent(e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            tcpaConsent
                              ? "bg-sage-600 border-sage-600"
                              : "border-navy-300 bg-white group-hover:border-sage-400"
                          }`}
                          aria-hidden="true"
                        >
                          {tcpaConsent && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-navy-600 font-body leading-relaxed">
                        I agree to receive SMS text messages from Lamb Insurance Agency at
                        the phone number provided.
                      </p>
                    </label>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-300" role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <div className="mb-4">
            <p className="font-display text-white text-xl font-bold">Lamb Insurance Agency</p>
            <p className="text-sage-400 text-xs uppercase tracking-widest mt-1">
              Simple. Personal. Built for You.
            </p>
          </div>
          <p className="text-navy-400 font-body text-sm leading-relaxed max-w-xs">
            Protecting families, homes, vehicles, and businesses throughout Florida with
            coverage tailored to your life.
          </p>
        </div>

        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-5">
            Contact Us
          </h3>
          <ul className="space-y-3 font-body text-sm">
            <li>
              <span className="text-navy-500 text-xs block mb-0.5 uppercase tracking-wider">
                Email
              </span>
              <a
                href={`mailto:${EMAIL}`}
                className="text-navy-200 hover:text-white transition-colors break-all"
                aria-label={`Send email to ${EMAIL}`}
              >
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-5">
            Coverage
          </h3>
          <ul className="space-y-2 font-body text-sm mb-8">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <a
                  href="/#services"
                  className="text-navy-400 hover:text-navy-200 transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-4">
            Legal
          </h3>
          <ul className="space-y-2 font-body text-sm">
            <li>
              <Link
                href="/privacy-policy"
                className="text-navy-400 hover:text-navy-200 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-navy-400 hover:text-navy-200 transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-navy-500">
          <p>© {year} Lamb Insurance Agency. All rights reserved.</p>
          <p>Licensed Insurance Agency &nbsp;|&nbsp; Florida</p>
        </div>
      </div>
    </footer>
  );
}

// ── Page ───────────────────────────────────────────────────
export default function BundleInsurancePage() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <WhyBundle />
        <BundleFeatures />
        <BuiltForSarasota />
        <HowItWorks />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
