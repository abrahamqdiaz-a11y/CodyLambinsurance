"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const EMAIL = "calamb@acg.aaa.com";

const bundleBenefits = [
  "Bundle savings applied to your combined premium",
  "One renewal date for both policies",
  "One local agent manages everything",
  "One call for questions, changes, or claims support",
  "Coverage built around your specific Sarasota property and vehicle",
  "No 800-number runaround — real local service",
];

const processSteps = [
  "Tell us about your home and your vehicle",
  "We build your bundle quote — same day",
  "Review your coverage and savings together",
  "We handle everything from there — one agent, one call",
];

const faqItems = [
  {
    question: "How much can I save by bundling home and auto in Sarasota?",
    answer:
      "Bundle savings vary by household depending on your home, your vehicles, and your coverage levels. The best way to know your exact savings is to get a quote that prices both policies together. Contact Lamb Insurance Agency for a same-day bundle quote.",
  },
  {
    question: "Do I need to switch both policies at the same time?",
    answer:
      "Not necessarily. We can review your current policies and timing and find the cleanest transition that avoids any gaps in coverage. We often align both renewals so everything moves together cleanly going forward.",
  },
  {
    question: "What if my home and auto have different renewal dates?",
    answer:
      "Very common. We handle this regularly. We review both current policies, map out the timing, and make the transition in a way that makes financial sense — minimizing any penalties and maximizing your savings from day one of the bundle.",
  },
  {
    question: "Does bundling affect how my claims are handled?",
    answer:
      "Each policy responds independently according to its own terms. Bundling affects your premium — not your coverage or claims process. What it does change is who you call. One local agent handles both — no bouncing between departments or call centers.",
  },
  {
    question: "Can I bundle condo insurance and auto instead of home and auto?",
    answer:
      "Yes. The same bundling approach applies whether you own a house or a condo in Sarasota. We build your coverage around your actual property — not a generic template.",
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

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#why-bundle", label: "Why Bundle" },
    { href: "#how-it-works", label: "How It Works" },
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
          <span className="text-sage-400 text-xs uppercase tracking-[0.2em] font-body">Agency</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.slice(0, 3).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors"
            >
              {l.label}
            </a>
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
              className={`block h-0.5 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`}
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
              <a
                key={l.href}
                href={l.href}
                className="text-navy-200 hover:text-white py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
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
              Sarasota Bundle Coverage
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Bundle Home and Auto Insurance Sarasota FL — One Agent, One Call, Real Savings
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            Bundling your home and auto through one local Sarasota agent means simpler coverage, a single point of contact, and real savings on your combined premium.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a href="#contact" className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center">
              Get Your Bundle Quote — Same Day Response
            </a>
          </div>

          <div className="flex flex-wrap gap-6" aria-label="Trust indicators">
            {[{ text: "Trusted Coverage" }, { text: "Personalized Service" }, { text: "Local Expertise" }].map((b) => (
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

function ContentSections() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 space-y-20">
        <div id="why-bundle" className="animate-on-scroll max-w-4xl">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">Why Bundle Your Home and Auto?</h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              When you place your home and auto insurance through the same local agent, everything gets simpler. One agent who knows both policies. One renewal conversation each year. One call when you have a question or need to make a change.
            </p>
            <p>
              And for most Sarasota households, bundling means real savings on your combined premium — not just a marketing claim, but an actual reduction in what you pay each year.
            </p>
            <p>
              At Lamb Insurance Agency we handle both your home and auto coverage from our Sarasota office. You deal with one person who knows your full situation — not a different call center representative every time you call.
            </p>
          </div>
        </div>

        <div className="animate-on-scroll">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-8 leading-tight">What Bundling Actually Gets You</h2>
          <ul className="grid sm:grid-cols-2 gap-5" aria-label="Bundling benefits list">
            {bundleBenefits.map((item, index) => (
              <li key={item} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-navy-100">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-50 border border-sage-100 flex items-center justify-center mt-0.5" aria-hidden="true">
                  <svg className="w-4 h-4 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-navy-700 font-body text-base leading-relaxed">{item}</p>
                <span className="sr-only">Benefit {index + 1}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-on-scroll max-w-4xl">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">Built for Sarasota Homeowners and Drivers</h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Whether you own a home in Lakewood Ranch, a condo on Siesta Key, or a house in Venice or North Port — and whether you drive one vehicle or three — your bundle is built around your actual situation.
            </p>
            <p>
              We know Sarasota&#39;s neighborhoods, the local coverage considerations that matter here, and what makes sense for homes and vehicles in this specific market. That local knowledge is something a national website or call center cannot offer.
            </p>
            <p>
              If you need standalone coverage, we can also help with <Link href="/home-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">home insurance in Sarasota</Link>, <Link href="/auto-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">auto insurance in Sarasota</Link>, and <Link href="/condo-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">condo insurance</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="how-it-works" className="bg-navy-900 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">How It Works</h2>
        </div>
        <ol className="grid md:grid-cols-2 gap-6" aria-label="Bundle insurance process">
          {processSteps.map((step, index) => (
            <li key={step} className="bg-white/5 border border-white/10 rounded-2xl p-6 animate-on-scroll">
              <div className="w-10 h-10 rounded-full bg-sage-500/20 border border-sage-400/40 text-sage-300 font-display text-lg font-bold flex items-center justify-center mb-4">
                {index + 1}
              </div>
              <p className="text-navy-100 font-body text-base leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="bg-white border border-navy-100 rounded-xl p-6 group animate-on-scroll">
              <summary className="font-display text-lg font-bold text-navy-800 cursor-pointer list-none pr-8 relative">
                {item.question}
                <span className="absolute right-0 top-1 text-sage-700 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-navy-600 font-body text-base leading-relaxed mt-4">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section id="contact" className="bg-warm py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="section-rule" />
            <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">
              Get Your Bundle Quote — Same Day Response
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Ready to bundle your home and auto? Fill out the form and we&#39;ll review your options, pricing, and bundle savings with you.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group"
                aria-label={`Email ${EMAIL}`}
              >
                <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">
                  ✉️
                </div>
                <div>
                  <p className="text-navy-400 font-body text-xs uppercase tracking-wider mb-0.5">Email Us</p>
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
                  <h3 className="font-display text-2xl font-bold text-navy-800 mb-3">Thank You!</h3>
                  <p className="text-navy-600 font-body text-base leading-relaxed mb-6 max-w-sm mx-auto">
                    Your quote request has been received. We&#39;ll review your information and reach out to you shortly!
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary px-6 py-3 rounded-lg font-semibold font-body text-sm">
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
                      Don&#39;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <h3 className="font-display text-xl font-bold text-navy-800 mb-7">Request a Free Quote</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label htmlFor="full-name" className={labelClass}>Full Name <span className="text-red-500">*</span></label>
                      <input id="full-name" type="text" name="full-name" required autoComplete="name" placeholder="Jane Smith" className={inputClass} />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="address" className={labelClass}>Address <span className="text-red-500">*</span></label>
                      <input id="address" type="text" name="address" required autoComplete="street-address" placeholder="123 Main St, Sarasota, FL 34230" className={inputClass} />
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClass}>Email <span className="text-red-500">*</span></label>
                      <input id="email" type="email" name="email" required autoComplete="email" placeholder="jane@example.com" className={inputClass} />
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number <span className="text-red-500">*</span></label>
                      <input id="phone" type="tel" name="phone" required autoComplete="tel" placeholder="(941) 555-0100" className={inputClass} />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="insurance-type" className={labelClass}>Insurance Type <span className="text-red-500">*</span></label>
                      <select id="insurance-type" name="insurance-type" required className={`${inputClass} cursor-pointer`} value={insuranceType} onChange={(e) => setInsuranceType(e.target.value)}>
                        <option value="" disabled>Select coverage type…</option>
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
                          <label htmlFor="vehicle-year-make-model" className={labelClass}>Year, Make &amp; Model <span className="ml-1 text-navy-400 font-normal">(optional)</span></label>
                          <input id="vehicle-year-make-model" type="text" name="vehicle-year-make-model" autoComplete="off" placeholder="e.g. 2022 Honda Accord" className={inputClass} />
                        </div>
                        <div>
                          <label htmlFor="vin-number" className={labelClass}>VIN Number <span className="ml-1 text-navy-400 font-normal">(if handy)</span></label>
                          <input id="vin-number" type="text" name="vin-number" autoComplete="off" placeholder="17-character VIN" maxLength={17} className={inputClass} />
                        </div>
                      </>
                    )}

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className={labelClass}>Message / Additional Details <span className="ml-1 text-navy-400 font-normal">(optional)</span></label>
                      <textarea id="message" name="message" rows={4} placeholder="Tell us anything that would help us find the right coverage for you…" className={inputClass} />
                    </div>
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary mt-7 w-full py-4 rounded-lg font-semibold font-body text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                    {loading ? "Sending…" : "Submit My Quote Request →"}
                  </button>

                  <div className="mt-6 p-4 rounded-xl border-2 border-navy-100 bg-navy-50/50">
                    <p className="text-xs text-navy-600 font-body leading-relaxed mb-3">
                      By checking the box below, you confirm your preference regarding SMS messages from Lamb Insurance Agency. Messages may include insurance quotes, policy updates, and customer support. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for assistance. Consent is not a condition of purchase. See our <Link href="/terms" className="underline hover:text-sage-700 text-sage-600">Terms &amp; Conditions</Link> and <Link href="/privacy-policy" className="underline hover:text-sage-700 text-sage-600">Privacy Policy</Link>.
                    </p>
                    <label htmlFor="tcpa-consent" className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex-shrink-0 mt-0.5">
                        <input id="tcpa-consent" type="checkbox" name="tcpa-consent-checkbox" checked={tcpaConsent} onChange={(e) => setTcpaConsent(e.target.checked)} className="sr-only" />
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${tcpaConsent ? "bg-sage-600 border-sage-600" : "border-navy-300 bg-white group-hover:border-sage-400"}`} aria-hidden="true">
                          {tcpaConsent && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-navy-600 font-body leading-relaxed">I agree to receive SMS text messages from Lamb Insurance Agency at the phone number provided.</p>
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

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-300" role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <div className="mb-4">
            <p className="font-display text-white text-xl font-bold">Lamb Insurance Agency</p>
            <p className="text-sage-400 text-xs uppercase tracking-widest mt-1">Simple. Personal. Built for You.</p>
          </div>
          <p className="text-navy-400 font-body text-sm leading-relaxed max-w-xs">
            Protecting families, homes, vehicles, and businesses throughout Florida with coverage tailored to your life.
          </p>
        </div>

        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-5">Contact Us</h3>
          <ul className="space-y-3 font-body text-sm">
            <li>
              <span className="text-navy-500 text-xs block mb-0.5 uppercase tracking-wider">Email</span>
              <a href={`mailto:${EMAIL}`} className="text-navy-200 hover:text-white transition-colors break-all" aria-label={`Send email to ${EMAIL}`}>
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-5">Coverage</h3>
          <ul className="space-y-2 font-body text-sm mb-8">
            <li><Link href="/home-insurance-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Home Insurance</Link></li>
            <li><Link href="/auto-insurance-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Auto Insurance</Link></li>
            <li><Link href="/condo-insurance-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Condo Insurance</Link></li>
          </ul>

          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-4">Legal</h3>
          <ul className="space-y-2 font-body text-sm">
            <li><Link href="/privacy-policy" className="text-navy-400 hover:text-navy-200 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-navy-400 hover:text-navy-200 transition-colors">Terms &amp; Conditions</Link></li>
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

function JsonLdSchemas() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "InsuranceAgency"],
    name: "Lamb Insurance Agency",
    url: "https://lambinsuranceagency.com/bundle-insurance-sarasota-fl",
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
    },
    serviceArea: {
      "@type": "State",
      name: "Florida",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Insurance Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto Insurance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Insurance" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bundle Home and Auto Insurance" } },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://lambinsuranceagency.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bundle Insurance Sarasota FL",
        item: "https://lambinsuranceagency.com/bundle-insurance-sarasota-fl",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

export default function BundleInsurancePage() {
  useScrollReveal();

  return (
    <>
      <JsonLdSchemas />
      <Header />
      <main id="main-content">
        <Hero />
        <ContentSections />
        <ProcessSection />
        <ContactForm />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
