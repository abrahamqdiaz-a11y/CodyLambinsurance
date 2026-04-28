"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { INSURANCE_LINKS } from "../constants/insuranceLinks";

export function ServicePageHeader() {
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
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Lamb Insurance Agency — home"
        >
          <Image
            src="/Untitled design (15).png"
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
            <span className="text-sage-400 text-xs uppercase tracking-[0.2em] font-body">Agency</span>
          </span>
        </Link>

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
          <Link href="/espanol" className="nav-link text-sage-300 hover:text-white text-sm font-body tracking-wide transition-colors">Español</Link>
          <Link href="/get-a-quote" className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold font-body tracking-wide">
            Get a Quote
          </Link>
        </nav>

        <button
          className="md:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sage-400"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

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
            <Link href="/espanol" className="text-sage-300 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>Español</Link>
            <Link href="/get-a-quote" className="text-navy-200 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>Get a Quote</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function ServicePageFooter({ email }: { email: string }) {
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
              <a href={`mailto:${email}`} className="text-navy-200 hover:text-white transition-colors break-all" aria-label={`Send email to ${email}`}>{email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-5">Insurance</h3>
          <ul className="space-y-2 font-body text-sm mb-8">
            {INSURANCE_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-navy-400 hover:text-navy-200 transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-4">Legal</h3>
          <ul className="space-y-2 font-body text-sm">
            <li><Link href="/privacy-policy" className="text-navy-400 hover:text-navy-200 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-navy-400 hover:text-navy-200 transition-colors">Terms &amp; Conditions</Link></li>
            <li><Link href="/faq" className="text-navy-400 hover:text-navy-200 transition-colors">FAQ</Link></li>
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
