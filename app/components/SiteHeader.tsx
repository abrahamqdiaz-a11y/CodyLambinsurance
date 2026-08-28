"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { INSURANCE_LINKS } from "../constants/insuranceLinks";
import { SERVICE_AREA_LINKS } from "../constants/serviceAreaLinks";

// The one header for every page, homepage included. The dropdown panels are
// always rendered and only their visibility is toggled, so every link exists
// in the server HTML for crawlers while the closed panel stays out of the tab
// order and the accessibility tree.
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [insuranceOpen, setInsuranceOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileInsuranceOpen, setMobileInsuranceOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const pathname = usePathname();
  const insuranceMenuRef = useRef<HTMLDivElement>(null);
  const areasMenuRef = useRef<HTMLDivElement>(null);
  const insuranceTriggerRef = useRef<HTMLAnchorElement>(null);
  const areasTriggerRef = useRef<HTMLAnchorElement>(null);

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
      if (areasMenuRef.current && !areasMenuRef.current.contains(event.target as Node)) {
        setAreasOpen(false);
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
            onFocus={() => setInsuranceOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setInsuranceOpen(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                insuranceTriggerRef.current?.focus();
                setInsuranceOpen(false);
              }
            }}
          >
            <Link
              ref={insuranceTriggerRef}
              href="/#coverage"
              aria-haspopup="true"
              aria-expanded={insuranceOpen}
              onClick={() => setInsuranceOpen(false)}
              className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors"
            >
              Insurance
            </Link>
            <div
              className={`absolute top-full left-0 min-w-72 rounded-lg border border-white/10 bg-navy-950 shadow-lg shadow-black/20 py-2 transition-opacity duration-150 ${insuranceOpen ? "visible opacity-100" : "invisible opacity-0"}`}
            >
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
          </div>
          <div
            ref={areasMenuRef}
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
            onFocus={() => setAreasOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setAreasOpen(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                areasTriggerRef.current?.focus();
                setAreasOpen(false);
              }
            }}
          >
            {/* There is no service areas index route, so the trigger points at
                the footer list of every area page, which renders on all pages. */}
            <Link
              ref={areasTriggerRef}
              href="/#areas"
              aria-haspopup="true"
              aria-expanded={areasOpen}
              onClick={() => setAreasOpen(false)}
              className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors"
            >
              Service Areas
            </Link>
            <div
              className={`absolute top-full left-0 min-w-56 rounded-lg border border-white/10 bg-navy-950 shadow-lg shadow-black/20 py-2 transition-opacity duration-150 ${areasOpen ? "visible opacity-100" : "invisible opacity-0"}`}
            >
              {SERVICE_AREA_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 text-sm font-body tracking-wide transition-colors ${pathname === item.href ? "text-white bg-white/10" : "text-navy-200 hover:text-white hover:bg-white/5"}`}
                  onClick={() => setAreasOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors">About</Link>
          <Link href="/insights" className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors">Insights</Link>
          <Link href="/#contact" className="nav-link text-navy-200 hover:text-white text-sm font-body tracking-wide transition-colors">Contact</Link>
          <Link href="/espanol" className="nav-link text-sage-300 hover:text-white text-sm font-body tracking-wide transition-colors">Español</Link>
          <Link
            href="/quote"
            className={`btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold font-body tracking-wide${pathname === "/quote" ? " ring-2 ring-white/30" : ""}`}
          >
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
            <button
              type="button"
              onClick={() => setMobileAreasOpen((prev) => !prev)}
              className="text-left text-navy-200 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors"
              aria-expanded={mobileAreasOpen}
            >
              Service Areas
            </button>
            {mobileAreasOpen && (
              <div className="pl-4">
                {SERVICE_AREA_LINKS.map((item) => (
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
            <Link href="/insights" className="text-navy-200 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>Insights</Link>
            <Link href="/#contact" className="text-navy-200 hover:text-white min-h-11 py-3 px-3 rounded-lg hover:bg-white/5 font-body text-sm tracking-wide transition-colors" onClick={() => setOpen(false)}>Contact</Link>
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
