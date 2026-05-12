"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Car, House, AlertTriangle, Phone, Mail, ChevronDown, Linkedin, Facebook } from "lucide-react";
import { INSURANCE_LINKS } from "./constants/insuranceLinks";

// ── Constants ──────────────────────────────────────────────
const EMAIL = "calamb@acg.aaa.com";

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Request a Quote",
    desc: "Fill out the short form above and tell us what you need.",
  },
  {
    num: "02",
    title: "Policy Review",
    desc: "We look at your current coverage and identify gaps or overlaps.",
  },
  {
    num: "03",
    title: "Clear Options",
    desc: "We walk you through what you're actually getting. No jargon.",
  },
  {
    num: "04",
    title: "Get Covered",
    desc: "Choose what fits. We handle the paperwork and stay available after.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What does auto insurance cover in Florida?",
    a: "Florida requires a minimum of Personal Injury Protection (PIP) and Property Damage Liability. But minimum coverage often isn't enough. Depending on your vehicle and driving habits, you may also need collision, comprehensive, and uninsured motorist coverage. We review your full situation before making a recommendation.",
  },
  {
    q: "Why did my insurance rate go up?",
    a: "Rates increase due to regional risk factors, claims history, carrier adjustments, or market-wide changes. Florida has seen significant rate increases due to weather exposure and litigation trends. A policy review can identify whether you're still getting competitive value.",
  },
  {
    q: "How often should I review my insurance policy?",
    a: "At minimum, once a year — and immediately after any major life change like buying a vehicle, moving, or adding a driver. Policies get outdated fast and most people don't notice until it costs them.",
  },
  {
    q: "What is the difference between liability and full coverage?",
    a: "Liability covers damage you cause to others. Full coverage adds collision (damage to your own vehicle) and comprehensive (theft, weather, non-collision events). The right choice depends on your vehicle's value and your financial exposure.",
  },
  {
    q: "Do I need flood insurance in Sarasota?",
    a: "Yes, in most cases. Standard homeowners policies do not cover flood damage. Given Sarasota's coastal exposure, flood insurance is often essential — not optional. We'll tell you exactly what your current policy does and doesn't cover.",
  },
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
            src="/favicon.png"
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
              <div className="absolute top-full left-0 min-w-72 rounded-lg border border-white/10 bg-navy-950 shadow-lg shadow-black/20 py-2">
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
          <Link href="#contact" className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors">Contact</Link>
          <Link href="/espanol" className="nav-link text-sage-300 hover:text-white text-sm font-body tracking-wide transition-colors">Español</Link>
          <Link
            href="/quote"
            className={`btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold font-body tracking-wide${pathname === "/quote" ? " ring-2 ring-white/30" : ""}`}
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
        <div className="md:hidden bg-navy-950 border-t border-white/10">
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
            <Link href="#contact" className="text-navy-200 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/espanol" className="text-sage-300 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>Español</Link>
            <Link
              href="/quote"
              className={`min-h-11 py-3 px-3 rounded-lg font-body text-sm tracking-wide transition-colors ${pathname === "/quote" ? "text-white bg-white/10" : "text-navy-200 hover:text-white hover:bg-white/5"}`}
              onClick={() => setOpen(false)}
            >Get a Quote</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

// ── Hero Quote Form ────────────────────────────────────────
function HeroQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
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
      alert("Something went wrong. Please call us directly or try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full rounded-lg px-4 py-3.5 pl-11 text-navy-900 font-body text-sm border border-slate-200 bg-white placeholder-navy-400 focus:outline-none focus:border-navy-600 focus:ring-2 focus:ring-navy-200/60 transition-all";

  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-navy-900/10 border border-slate-100 p-7 w-full">
      {submitted ? (
        <div className="text-center py-6" role="alert" aria-live="polite">
          <div
            className="w-14 h-14 bg-sage-50 border border-sage-200 rounded-full flex items-center justify-center mx-auto mb-4"
            aria-hidden="true"
          >
            <svg className="w-7 h-7 text-sage-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-display text-xl font-bold text-navy-800 mb-2">Request Received!</h3>
          <p className="text-navy-500 font-body text-sm mb-5">
            We&#39;ll be in touch shortly with your free quote.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-primary px-5 py-2.5 rounded-lg font-semibold font-body text-sm"
          >
            Submit Another
          </button>
        </div>
      ) : (
        <>
          <div className="mb-5 text-center">
            <h2 className="font-display text-xl font-bold text-navy-900 mb-1">
              Get Your Free Quote
            </h2>
            <p className="text-navy-400 font-body text-sm">Quick. Easy. No Obligation.</p>
          </div>

          <form
            ref={formRef}
            name="hero-quote"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            aria-label="Quick quote request form"
          >
            <input type="hidden" name="form-name" value="hero-quote" />
            <div hidden aria-hidden="true">
              <label>Don&#39;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
            </div>

            <div className="space-y-3">
              {/* Full Name */}
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-400 pointer-events-none" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="full-name"
                  required
                  autoComplete="name"
                  placeholder="Full Name"
                  className={inputCls}
                  aria-label="Full Name"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-400 pointer-events-none" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  placeholder="Phone Number"
                  className={inputCls}
                  aria-label="Phone Number"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-400 pointer-events-none" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Email Address"
                  className={inputCls}
                  aria-label="Email Address"
                />
              </div>

              {/* Insurance Type */}
              <select
                name="insurance-type"
                required
                defaultValue=""
                className="w-full rounded-lg px-4 py-3.5 text-navy-900 font-body text-sm border border-slate-200 bg-white focus:outline-none focus:border-navy-600 focus:ring-2 focus:ring-navy-200/60 transition-all cursor-pointer"
                aria-label="Insurance Type"
              >
                <option value="" disabled>Insurance Type</option>
                <option value="Auto">Auto Insurance</option>
                <option value="Home">Home Insurance</option>
                <option value="Life">Life Insurance</option>
                <option value="Commercial">Commercial Insurance</option>
                <option value="Other">Other</option>
              </select>

              {/* ZIP Code */}
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-400 pointer-events-none" aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="zip"
                  required
                  inputMode="numeric"
                  placeholder="ZIP Code"
                  maxLength={5}
                  className={inputCls}
                  aria-label="ZIP Code"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3.5 rounded-lg font-semibold font-body text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Sending…" : "Get My Quote →"}
              </button>

              {/* SMS Disclosure + Consent Checkbox */}
              <div className="mt-4 p-4 rounded-xl border-2 border-navy-100 bg-navy-50/50">
                <p className="text-xs text-navy-600 font-body leading-relaxed mb-3">
                  By checking the box below, you confirm your preference regarding SMS messages from Lamb Insurance Agency. Messages may include insurance quotes, policy updates, and customer support. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for assistance. Consent is not a condition of purchase. See our{" "}
                  <Link href="/terms" className="underline hover:text-sage-700 text-sage-600">
                    Terms &amp; Conditions
                  </Link>
                  {" "}and{" "}
                  <Link href="/privacy-policy" className="underline hover:text-sage-700 text-sage-600">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <label htmlFor="hero-tcpa-consent" className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input
                      id="hero-tcpa-consent"
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
                    I agree to receive SMS text messages from Lamb Insurance Agency at the phone number provided.
                  </p>
                </label>
              </div>
            </div>
          </form>

          <p className="text-center text-navy-400 font-body text-xs mt-4 flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your information is safe and secure.
          </p>
        </>
      )}
    </div>
  );
}

// ── Hero ───────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen"
      aria-labelledby="hero-heading"
    >
      {/* Background house */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/backgorund.house.image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.12) contrast(1.12) saturate(1.08)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      {/* Directional overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, rgba(238,242,248,0.95) 0%, rgba(238,242,248,0.88) 28%, rgba(238,242,248,0.58) 50%, rgba(238,242,248,0.22) 68%, rgba(238,242,248,0.06) 85%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "#1e3a5f", opacity: 0.04, filter: "blur(90px)", transform: "translate(35%, -35%)", zIndex: 2 }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "#2b4f7a", opacity: 0.03, filter: "blur(70px)", transform: "translate(-30%, 30%)", zIndex: 2 }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-24 pb-14 md:pt-32 md:pb-20">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_440px] lg:gap-12 xl:gap-16 lg:items-center">

          {/* Col 1: Left copy */}
          <div>
            <p className="text-navy-700 font-body text-xs font-bold uppercase tracking-[0.18em] mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-navy-600 inline-block" aria-hidden="true" />
              Local Insurance You Can Trust
            </p>

            <h1
              id="hero-heading"
              className="font-display text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-navy-900 leading-[1.08] mb-6"
            >
              Sarasota Insurance Agent — Coverage You Can Actually Understand
            </h1>

            <p className="text-navy-600 font-body text-base leading-relaxed mb-7 max-w-lg">
              Local, licensed, and available when you need us. We explain your policy clearly, respond fast, and make sure you&apos;re covered for what actually matters — not just what&apos;s cheapest.
            </p>

            <ul className="space-y-2.5 mb-8" aria-label="Key benefits">
              {["Licensed Florida Agent", "Thorough Policy Reviews", "Real People, Fast Responses"].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-navy-800 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-navy-700 font-body text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#quote-form"
                className="btn-primary px-7 py-3.5 rounded-lg font-semibold font-body text-base text-center flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Get a Free Quote
              </a>
              <a
                href="tel:+19412252335"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold font-body text-base border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white transition-all"
                aria-label="Call Lamb Insurance Agency at (941) 225-2335"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (941) 225-2335
              </a>
            </div>
          </div>

          {/* Col 2: Quote form card */}
          <div id="quote-form" className="w-full">
            <HeroQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── How It Works ───────────────────────────────────────────
function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-cream py-20 md:py-28"
      aria-labelledby="how-heading"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-xl mb-14 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="how-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight"
          >
            How It Works
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed">
            Getting the right coverage shouldn&apos;t be complicated. Here&apos;s what to expect when you reach out to us.
          </p>
        </div>

        {/* Steps — horizontal timeline on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connector line on desktop */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-navy-200"
            aria-hidden="true"
          />

          {HOW_IT_WORKS.map((step, i) => (
            <article
              key={step.num}
              className={`relative flex flex-col items-start lg:items-center lg:text-center animate-on-scroll animate-on-scroll-delay-${i + 1}`}
            >
              {/* Step number circle */}
              <div className="relative z-10 mb-5">
                <div className="w-20 h-20 rounded-full bg-navy-900 border-4 border-cream flex items-center justify-center shadow-lg shadow-navy-900/10">
                  <span className="font-display text-2xl font-bold text-sage-300">{step.num}</span>
                </div>
              </div>
              <h3 className="font-display text-lg font-bold text-navy-800 mb-2">{step.title}</h3>
              <p className="text-navy-600 font-body text-sm leading-relaxed">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Coverage Explained ─────────────────────────────────────
function CoverageExplained() {
  const cards = [
    {
      icon: <Car className="w-6 h-6" aria-hidden="true" />,
      title: "Auto Insurance",
      body: "Covers liability, collision, and comprehensive protection. Many Florida drivers are underinsured without realizing it. We review your policy against how you actually drive and what you actually own.",
    },
    {
      icon: <House className="w-6 h-6" aria-hidden="true" />,
      title: "Home Insurance",
      body: "Protects your structure, belongings, and liability. In Florida, coverage gaps are common due to weather exposure and policy exclusions. We make sure you understand what's included before you need it.",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" aria-hidden="true" />,
      title: "Why Coverage Fails",
      body: "Most gaps come from outdated policies, unclear language, or choosing coverage based on price alone. We identify those gaps early — before a claim forces the issue.",
    },
  ];

  return (
    <section
      id="coverage"
      className="bg-navy-900 py-20 md:py-28"
      aria-labelledby="coverage-heading"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-14 animate-on-scroll">
          <div className="section-rule" />
          <h2
            id="coverage-heading"
            className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
          >
            Understanding Your Coverage
          </h2>
          <p className="text-navy-300 font-body text-base leading-relaxed">
            Most people don&apos;t know what their insurance actually covers until they&apos;re filing a claim. We break it down clearly so you understand exactly what you have — and where you may be exposed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <article
              key={card.title}
              className={`bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors animate-on-scroll animate-on-scroll-delay-${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl bg-sage-600/20 border border-sage-500/30 flex items-center justify-center mb-5 text-sage-300"
              >
                {card.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-3">{card.title}</h3>
              <p className="text-navy-300 font-body text-sm leading-relaxed">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About the Agent ────────────────────────────────────────
function AboutAgent() {
  const badges = [
    "Licensed Florida Insurance Agency",
    "AAA Authorized Agent",
    "Sarasota-Based, Locally Focused",
  ];

  return (
    <section
      id="about-agent"
      className="bg-white py-20 md:py-28"
      aria-labelledby="about-agent-heading"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div className="animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="about-agent-heading"
              className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-6 leading-tight"
            >
              You&apos;re Talking to a Local Agent, Not a Call Center
            </h2>
            <div className="space-y-4 text-navy-600 font-body text-base leading-relaxed mb-8">
              <p>
                Lamb Insurance Agency is a licensed, AAA-authorized insurance agency based in Sarasota, Florida. We work directly with clients — no handoffs, no hold music, no automated systems.
              </p>
              <p>
                We focus on auto and home coverage for Florida drivers and homeowners who want to understand their policy, not just have one.
              </p>
              <p>
                When you reach out, you hear back from a real person who knows your file.
              </p>
            </div>

            {/* Trust badges */}
            <ul className="flex flex-col gap-3" aria-label="Agency credentials">
              {badges.map((badge) => (
                <li key={badge} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-sage-600 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-navy-700 font-body text-sm font-semibold">{badge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — trust visual */}
          <div className="animate-on-scroll animate-on-scroll-delay-2 flex justify-center">
            <div className="w-full max-w-sm">
              {/* AAA badge card */}
              <div className="bg-navy-900 rounded-2xl p-8 text-center border border-navy-800 shadow-xl shadow-navy-900/20 mb-6">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-5 border-4 border-sage-400">
                  <Image
                    src="/favicon.png"
                    alt="Lamb Insurance Agency"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="font-display text-white text-xl font-bold mb-1">Lamb Insurance Agency</p>
                <p className="text-sage-400 text-xs uppercase tracking-[0.2em] font-body mb-5">AAA Authorized Agent</p>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-navy-300 font-body text-sm">Sarasota, Florida</p>
                  <a
                    href="tel:+19412252335"
                    className="text-sage-300 font-body text-sm font-semibold hover:text-white transition-colors mt-1 block"
                  >
                    (941) 225-2335
                  </a>
                </div>
              </div>

              {/* Credential pills */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Licensed", sub: "Florida DOI" },
                  { label: "AAA Auth.", sub: "Authorized Agent" },
                  { label: "Local", sub: "Sarasota, FL" },
                  { label: "Direct", sub: "No Call Centers" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-cream rounded-xl p-4 border border-navy-100 text-center"
                  >
                    <p className="font-display text-navy-800 font-bold text-base">{item.label}</p>
                    <p className="text-navy-500 font-body text-xs mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ────────────────────────────────────────────────────
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      id="faq"
      className="bg-warm py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-14 animate-on-scroll">
          <div className="flex justify-center mb-4">
            <div className="section-rule w-12" />
          </div>
          <h2
            id="faq-heading"
            className="font-display text-3xl md:text-4xl font-bold text-navy-800 mb-4 leading-tight"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-navy-600 font-body text-base leading-relaxed">
            Common questions from Florida drivers and homeowners we work with.
          </p>
        </div>

        <dl className="space-y-3 animate-on-scroll">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-navy-100 overflow-hidden"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 font-display font-bold text-navy-800 text-base hover:text-navy-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-inset"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-navy-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </dt>
                {isOpen && (
                  <dd className="px-6 pb-6">
                    <p className="text-navy-600 font-body text-sm leading-relaxed">{item.a}</p>
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

// ── Bottom CTA ─────────────────────────────────────────────
function BottomCTA() {
  return (
    <section
      id="contact"
      className="bg-navy-900 py-20 md:py-28"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — copy */}
          <div className="animate-on-scroll">
            <div className="section-rule" />
            <h2
              id="cta-heading"
              className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
            >
              Get Clear on Your Coverage
            </h2>
            <p className="text-navy-300 font-body text-base leading-relaxed mb-8">
              We&apos;ll review your options, explain what you&apos;re actually getting, and help you choose coverage that fits. No pressure. No jargon. Just straight answers from a local agent.
            </p>

            <ul className="space-y-3" aria-label="What we offer">
              {[
                "Full policy review at no cost",
                "Clear explanation of every option",
                "Fast, direct responses",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-sage-600/40 border border-sage-500/50 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3 text-sage-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-navy-200 font-body text-sm font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — CTA cards */}
          <div className="flex flex-col gap-4 animate-on-scroll animate-on-scroll-delay-2">

            {/* Card 1 — Get a Free Quote */}
            <a
              href="#home"
              className="group flex items-center justify-between gap-4 bg-sage-600 hover:bg-sage-500 rounded-2xl px-7 py-6 transition-colors"
              aria-label="Get a free quote — scroll to form"
            >
              <div>
                <p className="font-display text-white text-lg font-bold mb-0.5">Get a Free Quote</p>
                <p className="text-sage-100 font-body text-sm">Fill out the short form — takes about 60 seconds.</p>
              </div>
              <svg
                className="w-6 h-6 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Card 2 — Call Us Directly */}
            <a
              href="tel:+19412252335"
              className="group flex items-center gap-5 bg-white/5 border border-white/15 hover:border-white/30 hover:bg-white/8 rounded-2xl px-7 py-6 transition-colors"
              aria-label="Call Lamb Insurance Agency at (941) 225-2335"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-800 border border-white/10 flex items-center justify-center text-sage-300">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display text-white text-lg font-bold mb-0.5">Call Us Directly</p>
                <p className="text-sage-300 font-body text-sm font-semibold">(941) 225-2335</p>
              </div>
            </a>

            {/* Card 3 — Send an Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-5 bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/8 rounded-2xl px-7 py-6 transition-colors"
              aria-label={`Send an email to ${EMAIL}`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-800/60 border border-white/8 flex items-center justify-center text-navy-400 group-hover:text-navy-300 transition-colors">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display text-white text-base font-bold mb-0.5">Send an Email</p>
                <p className="text-navy-400 font-body text-sm">Quick questions welcome.</p>
              </div>
            </a>

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
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.linkedin.com/company/lamb-insurance-agency-llc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lamb Insurance Agency on LinkedIn"
              className="text-navy-500 hover:text-navy-200 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.facebook.com/people/Lamb-Insurance-Agency-LLC/61572033134721/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lamb Insurance Agency on Facebook"
              className="text-navy-500 hover:text-navy-200 transition-colors"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-5">
            Contact Us
          </h3>
          <ul className="space-y-3 font-body text-sm">
            <li>
              <span className="text-navy-500 text-xs block mb-0.5 uppercase tracking-wider">Phone</span>
              <a
                href="tel:+19412252335"
                className="text-navy-200 hover:text-white transition-colors"
                aria-label="Call (941) 225-2335"
              >
                (941) 225-2335
              </a>
            </li>
            <li>
              <span className="text-navy-500 text-xs block mb-0.5 uppercase tracking-wider">Email</span>
              <a
                href={`mailto:${EMAIL}`}
                className="text-navy-200 hover:text-white transition-colors break-all"
                aria-label={`Send email to ${EMAIL}`}
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <span className="text-navy-500 text-xs block mb-0.5 uppercase tracking-wider">Address</span>
              <address className="text-navy-200 not-italic text-sm leading-snug">
                5893 Whitfield Ave<br />
                Sarasota, FL 34243<br />
                United States
              </address>
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
              <Link href="/privacy-policy" className="text-navy-400 hover:text-navy-200 transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="text-navy-400 hover:text-navy-200 transition-colors">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link href="/faq" className="text-navy-400 hover:text-navy-200 transition-colors">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-navy-500">
          <p>© {year} Lamb Insurance Agency. All rights reserved.</p>
          <p>Licensed Insurance Agency &nbsp;|&nbsp; Florida</p>
        </div>
        <div className="max-w-6xl mx-auto px-5 pb-5 text-center">
          <p className="text-xs font-body text-navy-600 opacity-75">
            Built by{" "}
            <a
              href="https://echelonfox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy-400 transition-colors duration-300"
            >
              EchelonFox AI
            </a>
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
        <HowItWorks />
        <CoverageExplained />
        <AboutAgent />
        <FAQSection />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
