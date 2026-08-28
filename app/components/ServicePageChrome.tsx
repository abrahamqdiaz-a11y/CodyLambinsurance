import Link from "next/link";
import { INSURANCE_LINKS } from "../constants/insuranceLinks";
import { SERVICE_AREA_LINKS } from "../constants/serviceAreaLinks";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function ServicePageFooter({ email, phone }: { email: string; phone?: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-300" role="contentinfo">
      <div className="max-w-6xl mx-auto px-5 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <div className="mb-4">
            <p className="font-display text-white text-xl font-bold">Lamb Insurance Agency</p>
            <p className="text-sage-400 text-xs uppercase tracking-widest mt-1">Simple. Personal. Built for You.</p>
          </div>
          <p className="text-navy-400 font-body text-sm leading-relaxed max-w-xs">
            Protecting families, homes, vehicles, and businesses throughout Florida with coverage tailored to your life.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.linkedin.com/company/lamb-insurance-agency-llc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lamb Insurance Agency on LinkedIn"
              className="text-navy-500 hover:text-navy-200 transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="https://www.facebook.com/people/Lamb-Insurance-Agency-LLC/61572033134721/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lamb Insurance Agency on Facebook"
              className="text-navy-500 hover:text-navy-200 transition-colors"
            >
              <FacebookIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-5">Contact Us</h3>
          <ul className="space-y-3 font-body text-sm">
            {phone && (
              <li>
                <span className="text-navy-500 text-xs block mb-0.5 uppercase tracking-wider">Phone</span>
                <a href={`tel:${phone.replace(/\D/g, "").replace(/^/, "+")}`} className="text-navy-200 hover:text-white transition-colors" aria-label={`Call ${phone}`}>{phone}</a>
              </li>
            )}
            <li>
              <span className="text-navy-500 text-xs block mb-0.5 uppercase tracking-wider">Email</span>
              <a href={`mailto:${email}`} className="text-navy-200 hover:text-white transition-colors break-all" aria-label={`Send email to ${email}`}>{email}</a>
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

        <div>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-5">Insurance</h3>
          <ul className="space-y-2 font-body text-sm mb-8">
            {INSURANCE_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-navy-400 hover:text-navy-200 transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-4">Company</h3>
          <ul className="space-y-2 font-body text-sm mb-8">
            <li><Link href="/insights" className="text-navy-400 hover:text-navy-200 transition-colors">Insights</Link></li>
            <li><Link href="/faq" className="text-navy-400 hover:text-navy-200 transition-colors">FAQ</Link></li>
            <li><Link href="/careers" className="text-navy-400 hover:text-navy-200 transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div id="areas" className="scroll-mt-24">
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-5">Areas We Serve</h3>
          <ul className="space-y-2 font-body text-sm mb-8">
            {SERVICE_AREA_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-navy-400 hover:text-navy-200 transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
          <h3 className="font-body text-xs font-bold uppercase tracking-widest text-navy-500 mb-4">Legal</h3>
          <ul className="space-y-2 font-body text-sm">
            <li><Link href="/privacy-policy" className="text-navy-400 hover:text-navy-200 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-navy-400 hover:text-navy-200 transition-colors">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>


      <div className="border-t border-white/8">
        <div className="max-w-6xl mx-auto px-5 pt-5 pb-2 text-center">
          <p className="text-xs font-body text-navy-400">
            Cody Alexander Lamb &middot; FL License #G034846 &nbsp;&mdash;&nbsp;{" "}
            <a
              href="https://www.myfloridacfo.com/division/agents"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-navy-200 transition-colors"
            >
              Licensed in Florida — verify license
            </a>
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-navy-500">
          <p>© {year} Lamb Insurance Agency. All rights reserved.</p>
          <p>Licensed Insurance Agency &nbsp;|&nbsp; Florida</p>
        </div>
        <div className="max-w-6xl mx-auto px-5 pb-3 text-center">
          <p className="text-xs font-body text-navy-500">
            Member of the{" "}
            <a
              href="https://web.sarasotachamber.com/active-member-directory/Details/lamb-insurance-agency-4865336"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-navy-300 transition-colors duration-300"
            >
              Greater Sarasota Chamber of Commerce
            </a>
            {" "}&nbsp;&middot;&nbsp;{" "}
            <a
              href="https://locator.acg.aaa.com/fl/sarasota/aaa-insurance-lamb-insurance-agency-llc"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-navy-300 transition-colors duration-300"
            >
              Authorized AAA Agent
            </a>
          </p>
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
