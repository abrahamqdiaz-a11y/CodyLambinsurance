"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { INSURANCE_LINKS } from "./constants/insuranceLinks";

// ── Constants ──────────────────────────────────────────────
const EMAIL = "calamb@acg.aaa.com";

const SERVICES = [
  {
    emoji: "🚗",
    title: "Auto Insurance",
    desc: "Customized coverage to keep you protected on the road, with options that fit your driving habits and budget.",
    id: "auto",
  },
  {
    emoji: "🏡",
    title: "Home Insurance",
    desc: "Reliable protection for your home and everything inside it—so you can have peace of mind no matter what comes your way.",
    id: "home",
  },
  {
    emoji: "❤️",
    title: "Life Insurance",
    desc: "Secure your family's future with flexible life insurance options designed to provide long-term financial protection.",
    id: "life",
  },
  {
    emoji: "🏢",
    title: "Commercial Insurance",
    desc: "Smart coverage solutions to protect your business, employees, and operations—so you can focus on growth.",
    id: "commercial",
  },
];

const WHY_US = [
  "We review your policies with you so you actually understand your coverage",
  "Personalized service — not one-size-fits-all",
  "Local expertise with a customer-first approach",
  "Fast, friendly, and reliable support",
];

// ── Scroll animation hook ──────────────────────────────────
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
  const [insuranceOpen, setInsuranceOpen] = useState(false);
  const [mobileInsuranceOpen, setMobileInsuranceOpen] = useState(false);
  const pathname = usePathname();
  const insuranceMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (insuranceMenuRef.current && !insuranceMenuRef.current.contains(event.target as Node)) {
        setInsuranceOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/97 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-navy-900/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16 md:h-20">
        {/* Logo + Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Lamb Insurance Agency — home"
        >
          <Image
            src="/FullLogo.png"
            alt="Lamb Insurance Agency logo"
            width={40}
            height={44}
            className="h-9 md:h-11 w-auto"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-white text-lg md:text-xl font-bold tracking-tight group-hover:text-sage-300 transition-colors">
              Lamb Insurance
            </span>
            <span className="text-sage-400 text-xs uppercase tracking-[0.2em] font-body">
              Agency
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <Link href="/" className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors">Home</Link>
          <div
            ref={insuranceMenuRef}
            className="relative"
            onMouseEnter={() => setInsuranceOpen(true)}
            onMouseLeave={() => setInsuranceOpen(false)}
          >
            <Link
              href="/#services"
              onClick={() => setInsuranceOpen(false)}
              className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors"
            >
              Insurance
            </Link>
            {insuranceOpen && (
              <div className="absolute top-full left-0 min-w-72 rounded-lg border border-white/10 bg-navy-950/98 backdrop-blur-md shadow-lg shadow-black/20 py-2">
                {INSURANCE_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 text-sm font-body tracking-wide transition-colors ${pathname === item.href ? "text-white bg-white/10" : "text-navy-200 hover:text-white hover:bg-white/5"}`}
                    onClick={() => setInsuranceOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors">About</Link>
          <Link href="/contact" className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors">Contact</Link>
          <Link
            href="/get-a-quote"
            className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold font-body tracking-wide"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile menu button */}
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

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col px-5 py-4 gap-1" aria-label="Mobile navigation">
            <Link href="/" className="text-navy-200 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>Home</Link>
            <button
              type="button"
              onClick={() => setMobileInsuranceOpen((prev) => !prev)}
              className="text-left text-navy-200 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors"
              aria-expanded={mobileInsuranceOpen}
            >
              Insurance
            </button>
            {mobileInsuranceOpen && (
              <div className="pl-4">
                {INSURANCE_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block min-h-11 py-3 px-3 rounded-lg font-body text-sm tracking-wide transition-colors ${pathname === item.href ? "text-white bg-white/10" : "text-navy-200 hover:text-white hover:bg-white/5"}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/about" className="text-navy-200 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" className="text-navy-200 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/get-a-quote" className="text-navy-200 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>Get a Quote</Link>
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
      {/* Decorative circles */}
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
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" aria-hidden="true" />
            <span className="text-sage-300 text-xs font-body uppercase tracking-widest">
              Insurance Built Around You
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ animation: "fadeUp 0.7s ease 0.1s both" }}
          >
            Welcome to{" "}
            <span className="text-sage-300">Lamb Insurance</span>{" "}
            Agency
          </h1>

          <p
            className="text-navy-200 text-base md:text-lg leading-relaxed mb-4 font-body max-w-2xl"
            style={{ animation: "fadeUp 0.7s ease 0.25s both" }}
          >
            At Lamb Insurance Agency, we believe insurance should be{" "}
            <strong className="text-sage-300 font-semibold">simple, personal, and built around you</strong>.
            Our mission is to protect what matters most—your family, your assets, and your future—while
            making the process easy and stress-free.
          </p>

          <p
            className="text-navy-300 text-sm md:text-base leading-relaxed mb-10 font-body max-w-2xl"
            style={{ animation: "fadeUp 0.7s ease 0.35s both" }}
          >
            We take the time to understand your needs and tailor coverage that fits your lifestyle and
            budget. Whether you&#39;re insuring your first car, your dream home, or your growing
            business, our team is here to guide you every step of the way.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 mb-12"
            style={{ animation: "fadeUp 0.7s ease 0.45s both" }}
          >
            <a
              href="#contact"
              className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center"
            >
              Get Your Free Quote
            </a>
          </div>

          {/* Trust badges */}
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

// ── Services ───────────────────────────────────────────────
function Services() {
  useScrollReveal();

  return (
    <section
      id="services"
      className="bg-cream py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="max-w-xl mb-14 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="services-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight"
          >
            What We Offer
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed">
            Comprehensive coverage options tailored to protect every part of your life—
            from your car to your career.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              className={`service-card bg-white rounded-2xl p-7 border border-navy-100 animate-on-scroll animate-on-scroll-delay-${i + 1}`}
              aria-labelledby={`service-${s.id}-title`}
            >
              <div
                className="w-14 h-14 rounded-xl bg-sage-50 flex items-center justify-center text-3xl mb-5 border border-sage-100"
                aria-hidden="true"
              >
                {s.emoji}
              </div>
              <h3
                id={`service-${s.id}-title`}
                className="font-display text-lg font-bold text-navy-800 mb-3"
              >
                {s.title}
              </h3>
              <p className="text-navy-600 font-body text-sm leading-relaxed">{s.desc}</p>
              <a
                href="#contact"
                className="inline-block mt-5 text-sage-600 text-sm font-semibold font-body hover:text-sage-700 transition-colors"
                aria-label={`Get a quote for ${s.title}`}
              >
                Get a quote →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Why Us ─────────────────────────────────────────────────
function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-navy-900 py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="why-heading"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="why-heading"
              className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
            >
              Why Choose{" "}
              <span className="text-sage-300">Lamb Insurance?</span>
            </h2>
            <p className="text-navy-300 font-body text-base leading-relaxed mb-8">
              We&#39;re not a faceless call center. We&#39;re a local agency that takes the time
              to know you, your family, and your goals—so your coverage actually makes sense for
              your life.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-block px-7 py-3.5 rounded-lg font-semibold font-body text-base"
            >
              Start with a Free Consultation
            </a>
          </div>

          {/* Right — checklist */}
          <ul className="space-y-4" aria-label="Reasons to choose Lamb Insurance Agency">
            {WHY_US.map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-4 animate-on-scroll animate-on-scroll-delay-${i + 1}`}
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
                <p className="text-navy-200 font-body text-base leading-relaxed pt-0.5">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-on-scroll"
          aria-label="Agency highlights"
        >
          {[
            { value: "4", label: "Coverage Types" },
            { value: "100%", label: "Personalized Service" },
            { value: "Local", label: "Florida Expertise" },
            { value: "Free", label: "Quotes & Consultations" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl md:text-4xl font-bold text-sage-300 mb-1">
                {s.value}
              </div>
              <div className="text-navy-400 font-body text-sm uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
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
          {/* Left info panel */}
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="contact-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-5 leading-tight"
            >
              Get Your Free Quote
            </h2>
            <p className="text-navy-600 font-body text-base leading-relaxed mb-8">
              Ready to find the right coverage? Fill out the form and we&#39;ll be in touch promptly
              to walk you through your options—no pressure, no jargon.
            </p>

            {/* Contact info cards */}
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

          {/* Form */}
          <div className="lg:col-span-3 animate-on-scroll animate-on-scroll-delay-2">
            <div className="bg-white rounded-2xl shadow-xl shadow-navy-100/50 p-8 md:p-10 border border-navy-100">
              {submitted ? (
                /* Thank-you state */
                <div className="text-center py-10" role="alert" aria-live="polite">
                  <div className="mb-5" aria-hidden="true"></div>
                  <h3 className="font-display text-2xl font-bold text-navy-800 mb-3">
                    Thank You!
                  </h3>
                  <p className="text-navy-600 font-body text-base leading-relaxed mb-6 max-w-sm mx-auto">
                    Your quote request has been received. We&#39;ll review your information and
                    reach out to you shortly!
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
                  {/* Netlify hidden fields */}
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
                    {/* Full Name */}
                    <div className="sm:col-span-2">
                      <label htmlFor="full-name" className={labelClass}>
                        Full Name <span className="text-red-500" aria-label="required">*</span>
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

                    {/* Address */}
                    <div className="sm:col-span-2">
                      <label htmlFor="address" className={labelClass}>
                        Address <span className="text-red-500" aria-label="required">*</span>
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

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email <span className="text-red-500" aria-label="required">*</span>
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

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone Number <span className="text-red-500" aria-label="required">*</span>
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

                    {/* Insurance Type */}
                    <div className="sm:col-span-2">
                      <label htmlFor="insurance-type" className={labelClass}>
                        Insurance Type <span className="text-red-500" aria-label="required">*</span>
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

                    {/* Vehicle fields — shown for Auto */}
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

                    {/* Message */}
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

                  {/* SMS Disclosure + Consent Checkbox */}
                  <div className="mt-6 p-4 rounded-xl border-2 border-navy-100 bg-navy-50/50">
                    <p className="text-xs text-navy-600 font-body leading-relaxed mb-3">
                      By checking the box below, you confirm your preference regarding SMS
                      messages from Lamb Insurance Agency. Messages may include insurance
                      quotes, policy updates, and customer support. Message frequency varies.
                      Message and data rates may apply. Reply STOP to unsubscribe or HELP for
                      assistance. Consent is not a condition of purchase. See our{" "}
                      <Link href="/terms" className="underline hover:text-sage-700 text-sage-600">
                        Terms &amp; Conditions
                      </Link>
                      {" "}and{" "}
                      <Link href="/privacy-policy" className="underline hover:text-sage-700 text-sage-600">
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
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-navy-600 font-body leading-relaxed">
                        I agree to receive SMS text messages from Lamb Insurance Agency at the
                        phone number provided.
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
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-5 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-4">
            <p className="font-display text-white text-xl font-bold">Lamb Insurance Agency</p>
            <p className="text-sage-400 text-xs uppercase tracking-widest mt-1">
              Simple. Personal. Built for You.
            </p>
          </div>
          <p className="text-navy-400 font-body text-sm leading-relaxed max-w-xs">
            Protecting families, homes, vehicles, and businesses throughout Florida with coverage
            tailored to your life.
          </p>
        </div>

        {/* Contact */}
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

        {/* Services + Legal */}
        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-5">
            Insurance
          </h3>
          <ul className="space-y-2 font-body text-sm mb-8">
            <li><Link href="/auto-insurance-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Auto Insurance</Link></li>
            <li><Link href="/condo-insurance-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Condo Insurance</Link></li>
            <li><Link href="/flood-insurance-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Flood Insurance</Link></li>
            <li><Link href="/bundle-insurance-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Bundle Insurance</Link></li>
            <li><Link href="/citizens-insurance-alternative-sarasota-fl" className="text-navy-400 hover:text-navy-200 transition-colors">Citizens Insurance Alternative</Link></li>
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
            <li>
              <Link
                href="/faq"
                className="text-navy-400 hover:text-navy-200 transition-colors"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-navy-500">
          <p>© {year} Lamb Insurance Agency. All rights reserved.</p>
          <p>
            Licensed Insurance Agency &nbsp;|&nbsp; Florida
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Page ───────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
