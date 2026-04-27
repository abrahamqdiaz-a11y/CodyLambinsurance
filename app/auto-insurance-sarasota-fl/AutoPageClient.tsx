"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const EMAIL = "calamb@acg.aaa.com";

const autoCoverageItems = [
  "Liability coverage — bodily injury and property damage",
  "Collision coverage for your vehicle",
  "Comprehensive coverage — theft, weather, and more",
  "Uninsured and underinsured motorist protection",
  "Medical payments and personal injury protection",
  "Roadside assistance and rental reimbursement options",
];

const processSteps = [
  "Tell us about your vehicles and drivers",
  "We build your auto quote — same day",
  "Review your coverage options together",
  "We handle everything from there — one agent, one call",
];

const faqItems = [
  {
    question: "How do I know if I have enough auto coverage in Florida?",
    answer:
      "Florida has specific minimum requirements, but minimums rarely provide enough protection in a real accident. A local agent reviews your full picture — your vehicles, assets, and risk — and recommends coverage levels that actually protect you, not just the legal minimum.",
  },
  {
    question: "Can I save money by bundling my auto and home insurance?",
    answer:
      "In most cases, yes. When you place both policies through the same agent, bundle discounts apply to your combined premium. The exact savings depend on your specific policies. Contact Lamb Insurance Agency for a same-day bundle quote that prices both together.",
  },
  {
    question: "What happens if I'm hit by an uninsured driver in Sarasota?",
    answer:
      "Florida has a high rate of uninsured drivers. Uninsured motorist coverage on your policy steps in to cover your costs when the at-fault driver has no insurance or not enough. It's one of the most important coverage components for Florida drivers and one we always walk through with every client.",
  },
  {
    question: "Do I need separate coverage for each vehicle in my household?",
    answer:
      "All vehicles in your household should be listed on your policy. Multi-vehicle households often qualify for multi-vehicle discounts. We review your full household situation and quote it accurately — no surprises when you need to file a claim.",
  },
  {
    question: "How quickly can I get a quote?",
    answer:
      "Same day. Fill out the form below or email us directly, and we'll be back in touch promptly with your options. No pressure, no jargon — just clear information about your coverage.",
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
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#why-us", label: "Why Us" },
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
          {navLinks.map((l) => (
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
            Get Your Auto Quote
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
            {[...navLinks, { href: "#contact", label: "Get Your Auto Quote" }].map((l) => (
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
              Auto Insurance — Sarasota FL
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Auto Insurance Sarasota FL — Local Agent, Personalized Coverage, Same-Day Quote
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            Getting the right auto coverage in Sarasota starts with a local agent who knows your situation — not a website form and a call center. One conversation, same-day quote, coverage built around you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a href="#contact" className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center">
              Get Your Auto Quote
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

function WhyLocalSection() {
  return (
    <section id="why-auto" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="animate-on-scroll max-w-4xl">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">Why Work With a Local Sarasota Auto Insurance Agent?</h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Most drivers in Sarasota can find a lower rate on a national website — until something goes wrong. A local agent means someone who knows your policy when you call, can advocate for you at claim time, and takes the time to build coverage that actually fits your life.
            </p>
            <p>
              At Lamb Insurance Agency, we review your coverage with you so you understand what you have and what you don&#39;t. We look at your vehicles, your driving habits, and your household — then we build a quote that makes sense for your situation.
            </p>
            <p>
              And when you <Link href="/bundle-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">bundle your home and auto</Link> through the same agent, you typically save more and deal with far less paperwork. But whether you bundle or not, you get one local person who handles everything.
            </p>
          </div>
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
          <h2 id="coverage-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">What Your Auto Policy Can Cover</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-6" aria-label="Auto coverage checklist">
          {autoCoverageItems.map((item, index) => (
            <li key={item} className={`flex items-start gap-4 animate-on-scroll animate-on-scroll-delay-${Math.min(index + 1, 4)}`}>
              <div className="w-9 h-9 rounded-full bg-sage-500/20 border border-sage-400/40 flex items-center justify-center mt-0.5" aria-hidden="true">
                <svg className="w-4 h-4 text-sage-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-navy-200 font-body text-base leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SarasotaSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="animate-on-scroll max-w-4xl">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">Built Around Your Sarasota Situation</h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>
              Whether you drive one car or have multiple vehicles in your household, your auto policy is quoted around your actual situation — your vehicles, your drivers, your coverage history, and your budget.
            </p>
            <p>
              We work with households across Sarasota, Lakewood Ranch, Venice, North Port, and the surrounding area. We know the local roads, the coverage requirements that matter here, and what Sarasota drivers are typically paying — and overpaying — for auto coverage.
            </p>
            <p>
              If you&#39;re also looking to protect your home, we can build a bundle that covers both. You can also explore <Link href="/home-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">home insurance in Sarasota</Link> and <Link href="/condo-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">condo insurance</Link> options through the same local agency.
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
        <ol className="grid md:grid-cols-2 gap-6" aria-label="Auto insurance process">
          {processSteps.map((step, index) => (
            <li key={step} className="bg-white/5 border border-white/10 rounded-2xl p-6 animate-on-scroll">
              <div className="w-10 h-10 rounded-full bg-sage-500/20 border border-sage-400/40 text-sage-300 font-display text-lg font-bold flex items-center justify-center mb-4">
                {index + 1}
              </div>
              <p className="text-white font-display text-lg leading-tight mb-2">Step {index + 1}</p>
              <p className="text-navy-200 font-body text-base leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 animate-on-scroll animate-on-scroll-delay-2">
          <a href="#contact" className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base inline-flex">
            Get Your Auto Quote — Same Day Response
          </a>
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

export default function AutoPageClient() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <WhyLocalSection />
        <CoverageSection />
        <SarasotaSection />
        <ProcessSection />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
