"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const EMAIL = "calamb@acg.aaa.com";

const coveredItems = [
  "Physical structure of your home — foundation, walls, roof, electrical, plumbing, HVAC",
  "Built-in appliances — water heaters, dishwashers, refrigerators",
  "Flooring — carpet, tile, hardwood",
  "Personal property — furniture, electronics, clothing",
  "Detached garages — up to 10% of building coverage",
  "Debris removal following a flood event",
];

const notCoveredItems = [
  "Temporary housing while your home is being repaired — additional living expenses are not covered",
  "Vehicles — covered under comprehensive auto insurance",
  "Outdoor property — landscaping, fences, pools, patios",
  "Damage caused by moisture or mold that could have been avoided",
  "Property below the lowest elevated floor in some elevated structures",
];

const faqItems = [
  {
    question: "Does homeowners insurance cover flooding in Florida?",
    answer:
      "No. Standard homeowners insurance policies in Florida specifically exclude flooding. Water that enters your home from outside — storm surge, rising water, rainfall-driven flooding — is not covered under any standard HO-3 or HO-5 policy. Separate flood insurance is required to cover this type of damage.",
  },
  {
    question: "Do I need flood insurance if I am not in a high-risk flood zone?",
    answer:
      "Your flood zone designation determines whether your lender requires flood insurance — not whether your property can flood. Approximately 25% of flood insurance claims nationally come from properties outside designated high-risk zones. In Sarasota County's flat terrain, any property can be affected by flooding during a significant storm event. We strongly recommend flood coverage regardless of zone designation.",
  },
  {
    question: "How much does flood insurance cost in Sarasota FL?",
    answer:
      "Flood insurance premiums in Sarasota vary based on your property's flood zone, elevation, age, construction type, coverage amount, and deductible. The only accurate number is one built around your specific property. Contact Lamb Insurance Agency for a same-day flood insurance quote.",
  },
  {
    question: "How long does it take for flood insurance to go into effect?",
    answer:
      "Standard flood insurance has a 30-day waiting period from the date of purchase before coverage becomes active. Limited exceptions apply for loan closings. This waiting period means you cannot purchase flood insurance in response to an approaching storm and expect to be covered. Do not wait until hurricane season to act.",
  },
  {
    question: "What is an elevation certificate and do I need one?",
    answer:
      "An elevation certificate documents your property's elevation relative to the Base Flood Elevation in your flood zone. It is often required for properties in AE zones to determine flood insurance rates accurately. Properties with elevation certificates above the Base Flood Elevation typically qualify for lower premiums. We can help you understand whether you need one and how to get it.",
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
    { href: "#flood-basics", label: "Flood Basics" },
    { href: "#coverage", label: "Coverage" },
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
            <span className="text-sage-300 text-xs font-body uppercase tracking-widest">Flood Insurance — Sarasota FL</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Flood Insurance Sarasota FL — Your Home Policy Does Not Cover This
          </h1>

          <p className="text-navy-200 text-base md:text-lg leading-relaxed mb-10 font-body max-w-3xl">
            Standard homeowners insurance excludes flooding entirely. In Sarasota County — with Gulf exposure, flat terrain, and active hurricane seasons — that gap in your coverage is not a minor detail. It is one of the most financially devastating mistakes a homeowner can make.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a href="#contact" className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center">
              Find Out Your Flood Zone — Get a Free Quote Today
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
        <div id="flood-basics" className="animate-on-scroll max-w-4xl">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">What Your Home Insurance Does Not Cover</h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>Every standard homeowners insurance policy in Florida — HO-3, HO-5, HO-6 — specifically excludes flooding. This means:</p>
            <p>Water that enters your home from outside during a storm is not covered. Storm surge from a hurricane is not covered. Rising water from heavy rainfall overwhelming drainage systems is not covered. Groundwater flooding is not covered.</p>
            <p>The only water damage typically covered by a standard homeowners policy is damage from internal sources — a burst pipe, an appliance leak, or an HVAC failure. The moment water enters from outside the structure, your homeowners policy stops responding.</p>
            <p>In Sarasota County that distinction matters more than almost anywhere else in the country.</p>
          </div>
        </div>

        <div className="animate-on-scroll max-w-4xl">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">Sarasota County Flood Risk — What You Need to Know</h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>Sarasota County&apos;s geography creates real flood exposure across multiple scenarios:</p>
            <p>Storm surge from Gulf-facing properties during hurricane events is the most severe risk — and the most expensive. Tropical Storm Debby in 2024 produced significant flooding across parts of Sarasota County that had not flooded in decades.</p>
            <p>Inland flooding from heavy rainfall overwhelming the county&apos;s drainage capacity affects properties miles from the coast. Flat terrain means water has nowhere to go quickly.</p>
            <p>Tidal flooding in low-lying coastal areas during king tide events is becoming more frequent and affects properties that have historically never flooded.</p>
            <p>FEMA designates flood risk through Flood Insurance Rate Maps. Your property falls into one of several flood zone designations that determine your risk level and whether your lender requires flood coverage:</p>
            <p><strong>Zone VE</strong> — Coastal high-hazard area. Highest risk. Wave action combined with flooding. Flood insurance almost always required by lenders.</p>
            <p><strong>Zone AE</strong> — High-risk area. Base Flood Elevation applies. Flood insurance typically required by lenders.</p>
            <p><strong>Zone X Shaded</strong> — Moderate risk. Flood insurance not usually required but strongly recommended in Sarasota County.</p>
            <p><strong>Zone X Unshaded</strong> — Lower risk on paper. But 25% of all flood insurance claims nationally come from properties in Zone X. In Florida that percentage is higher.</p>
            <p>Do you know which zone your property is in? We can tell you — and explain exactly what it means for your coverage. We can also review how this works alongside your <Link href="/home-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">home insurance in Sarasota</Link> or <Link href="/condo-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">condo insurance</Link> policy.</p>
          </div>
        </div>

        <div className="animate-on-scroll max-w-4xl">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">The 30-Day Rule That Catches Homeowners Off Guard</h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>Flood insurance has a 30-day waiting period from the date of purchase before coverage goes into effect. There are limited exceptions — primarily for loan closings.</p>
            <p>This means you cannot buy flood insurance when a storm is forecast and expect to be covered. By the time a hurricane is named and tracking toward Sarasota, it is too late. The window to get flood coverage is right now — before storm season, before a weather event, before a lender requires it at closing.</p>
            <p>Hurricane season starts June 1st. The time to act is before that date — not after.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverageSection() {
  return (
    <section id="coverage" className="bg-navy-900 py-20 md:py-28" aria-labelledby="coverage-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-3xl mb-12 animate-on-scroll">
          <div className="section-rule" />
          <h2 id="coverage-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">What Flood Insurance Covers</h2>
        </div>

        <ul className="grid md:grid-cols-2 gap-6" aria-label="Flood coverage items">
          {coveredItems.map((item, index) => (
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

        <div className="max-w-3xl mb-12 mt-16 animate-on-scroll">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">What Flood Insurance Does Not Cover</h2>
        </div>

        <ul className="grid md:grid-cols-2 gap-6" aria-label="Flood exclusions">
          {notCoveredItems.map((item, index) => (
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

function DisclosureSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 space-y-20">
        <div className="animate-on-scroll max-w-4xl">
          <div className="section-rule" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">New Florida Flood Disclosure Law</h2>
          <div className="space-y-5 text-navy-600 font-body text-base leading-relaxed">
            <p>As of October 2025 Florida law requires sellers and landlords to provide clearer flood risk disclosures to buyers and tenants before a transaction closes. If you are buying a home in Sarasota, flood insurance should be part of your coverage conversation before closing — not after.</p>
            <p>If you received a flood disclosure notice and are not sure what it means for your coverage needs, call us. We explain flood zones and coverage requirements in plain English.</p>
            <p>You can also ask us to <Link href="/bundle-insurance-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">bundle your home and auto coverage</Link> and review whether your current carrier is still the right <Link href="/citizens-insurance-alternative-sarasota-fl" className="text-sage-700 underline hover:text-sage-800">Citizens Insurance alternative</Link> for your household.</p>
          </div>
        </div>

        <div className="animate-on-scroll bg-navy-900 border border-navy-700 rounded-2xl p-8 md:p-10">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">Find Out Your Flood Zone — Get a Free Quote Today</h3>
          <p className="text-navy-200 font-body text-base leading-relaxed mb-6 max-w-3xl">Know your zone, understand your risk, and make sure you are covered before the next storm. Our Sarasota team can provide a same-day flood insurance quote.</p>
          <a href="#contact" className="btn-primary inline-flex px-7 py-3.5 rounded-lg font-semibold font-body text-base">Get Your Flood Quote</a>
        </div>
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
          <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight">Frequently Asked Questions</h2>
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

  const inputClass = "form-input w-full rounded-lg px-4 py-3 text-navy-900 font-body text-sm placeholder-navy-400 focus:ring-0";
  const labelClass = "block font-body text-sm font-semibold text-navy-700 mb-1.5";

  return (
    <section id="contact" className="bg-warm py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="section-rule" />
            <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight">Find Out Your Flood Zone — Get a Free Quote Today</h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">Tell us about your property and we&apos;ll provide a same-day flood insurance quote tailored to your Sarasota address.</p>
            <div className="space-y-4">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-navy-100 hover:border-sage-300 transition-colors group" aria-label={`Email ${EMAIL}`}>
                <div className="w-10 h-10 rounded-full bg-sage-50 flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">✉️</div>
                <div>
                  <p className="text-navy-400 font-body text-xs uppercase tracking-wider mb-0.5">Email Us</p>
                  <p className="font-display text-navy-800 font-bold text-sm group-hover:text-sage-700 transition-colors break-all">{EMAIL}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 animate-on-scroll animate-on-scroll-delay-2">
            <div className="bg-white rounded-2xl shadow-xl shadow-navy-100/50 p-8 md:p-10 border border-navy-100">
              {submitted ? (
                <div className="text-center py-10" role="alert" aria-live="polite">
                  <h3 className="font-display text-2xl font-bold text-navy-800 mb-3">Thank You!</h3>
                  <p className="text-navy-600 font-body text-base leading-relaxed mb-6 max-w-sm mx-auto">Your quote request has been received. We&apos;ll review your information and reach out to you shortly!</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary px-6 py-3 rounded-lg font-semibold font-body text-sm">Submit Another Request</button>
                </div>
              ) : (
                <form ref={formRef} name="quote-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} aria-label="Quote request form" noValidate>
                  <input type="hidden" name="form-name" value="quote-request" />
                  <div hidden aria-hidden="true">
                    <label>
                      Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
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
          <p className="text-navy-400 font-body text-sm leading-relaxed max-w-xs">Protecting families, homes, vehicles, and businesses throughout Florida with coverage tailored to your life.</p>
        </div>
        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-5">Contact Us</h3>
          <ul className="space-y-3 font-body text-sm">
            <li>
              <span className="text-navy-500 text-xs block mb-0.5 uppercase tracking-wider">Email</span>
              <a href={`mailto:${EMAIL}`} className="text-navy-200 hover:text-white transition-colors break-all" aria-label={`Send email to ${EMAIL}`}>{EMAIL}</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-5">Coverage</h3>
          <ul className="space-y-2 font-body text-sm mb-8">
            <li><Link href="/home-insurance-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Home Insurance</Link></li>
            <li><Link href="/auto-insurance-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Auto Insurance</Link></li>
            <li><Link href="/condo-insurance-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Condo Insurance</Link></li>
            <li><Link href="/flood-insurance-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Flood Insurance</Link></li>
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

export default function FloodPageClient() {
  useScrollReveal();
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ContentSections />
        <CoverageSection />
        <DisclosureSection />
        <ContactForm />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
