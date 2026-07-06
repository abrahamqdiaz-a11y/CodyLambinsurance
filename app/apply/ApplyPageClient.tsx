"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ServicePageHeader, ServicePageFooter } from "../components/ServicePageChrome";

const ROLE_OPTIONS = [
  { value: "sales-agent", label: "Sales Agent" },
  { value: "csr", label: "CSR / Account Manager" },
  { value: "open", label: "Open / General" },
] as const;

type RoleValue = (typeof ROLE_OPTIONS)[number]["value"];

function roleLabel(v: string) {
  return ROLE_OPTIONS.find((r) => r.value === v)?.label ?? "Sales Agent";
}

function FileUploadField({
  id,
  label,
  required,
  accept,
  hint,
  value,
  onChange,
}: {
  id: string;
  label: string;
  required?: boolean;
  accept: string;
  hint: string;
  value: File | null;
  onChange: (f: File | null) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-body font-semibold text-navy-800 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`relative border-2 border-dashed rounded-xl p-5 transition-colors cursor-pointer
          ${value ? "border-sage-500/50 bg-sage-500/5" : "border-navy-300/50 hover:border-navy-400 bg-white"}`}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
        role="button"
        tabIndex={0}
        aria-label={`Upload ${label}`}
      >
        <input
          ref={inputRef}
          id={id}
          name={id}
          type="file"
          accept={accept}
          required={required}
          className="sr-only"
          onChange={(e) => onChange(e.target.files?.[0] ?? null)}
        />
        {value ? (
          <div className="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-sage-500">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="9" y1="17" x2="15" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="min-w-0">
              <p className="text-sm font-body font-semibold text-navy-800 truncate">{value.name}</p>
              <p className="text-xs font-body text-navy-500">{(value.size / 1024).toFixed(0)} KB</p>
            </div>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onChange(null); if (inputRef.current) inputRef.current.value = ""; }}
              className="ml-auto text-navy-400 hover:text-red-500 transition-colors"
              aria-label="Remove file"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-navy-400">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="17 8 12 3 7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p className="text-sm font-body text-navy-600">
              <span className="font-semibold text-navy-800">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs font-body text-navy-400">{hint}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function FormField({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-body font-semibold text-navy-800 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-navy-300/60 bg-white px-4 py-3 text-navy-900 font-body text-sm placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-sage-500/40 focus:border-sage-500 transition-colors";

function ApplyFormInner() {
  const searchParams = useSearchParams();
  const roleParam = (searchParams.get("role") ?? "sales-agent") as RoleValue;

  const [role, setRole] = useState<string>(roleParam);
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [eeoOpen, setEeoOpen] = useState(false);
  const [certChecked, setCertChecked] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setRole(roleParam);
  }, [roleParam]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!certChecked) return;
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    if (resume) data.set("resume", resume);
    if (coverLetter) data.set("coverLetter", coverLetter);

    try {
      const res = await fetch("/api/apply", { method: "POST", body: data });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Submission failed.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-16 px-5">
        <div className="w-16 h-16 rounded-full bg-sage-500/15 border border-sage-500/30 flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-sage-500">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="font-display text-navy-900 text-2xl sm:text-3xl font-bold mb-4">
          Application received
        </h2>
        <p className="text-navy-600 font-body text-base leading-relaxed mb-2 max-w-md mx-auto">
          Thank you for applying to Lamb Insurance Agency. We review every application and will
          reach out if it's a fit.
        </p>
        <p className="text-navy-500 font-body text-sm mb-10 max-w-md mx-auto">
          What's next: our hiring team will review your resume, typically within a few business
          days. If we'd like to move forward, we'll contact you by email or phone to set up a
          conversation.
        </p>
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-500 font-body text-sm font-semibold transition-colors"
        >
          ← Back to careers
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Role */}
      <FormField id="role" label="Role you're applying for" required>
        <select
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className={inputCls}
        >
          {ROLE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </FormField>

      <div className="grid sm:grid-cols-2 gap-5">
        <FormField id="fullName" label="Full name" required>
          <input id="fullName" name="fullName" type="text" required autoComplete="name" placeholder="Jane Smith" className={inputCls} />
        </FormField>
        <FormField id="email" label="Email address" required>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@example.com" className={inputCls} />
        </FormField>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <FormField id="phone" label="Phone number" required>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="(941) 555-0100" className={inputCls} />
        </FormField>
        <FormField id="linkedin" label="LinkedIn profile URL">
          <input id="linkedin" name="linkedin" type="url" placeholder="linkedin.com/in/yourname" className={inputCls} />
        </FormField>
      </div>

      {/* File uploads */}
      <FileUploadField
        id="resume"
        label="Resume / CV"
        required
        accept=".pdf,.doc,.docx"
        hint="PDF, DOC, or DOCX · Max 10 MB"
        value={resume}
        onChange={setResume}
      />

      <div>
        <label className="block text-sm font-body font-semibold text-navy-800 mb-1.5">
          Cover letter <span className="font-normal text-navy-400">(optional)</span>
        </label>
        <p className="text-xs font-body text-navy-500 mb-3">Upload a file or write a short note below — whichever is easier.</p>
        <FileUploadField
          id="coverLetter"
          label=""
          accept=".pdf,.doc,.docx"
          hint="PDF, DOC, or DOCX · Max 10 MB"
          value={coverLetter}
          onChange={setCoverLetter}
        />
        <div className="mt-3">
          <textarea
            id="coverNote"
            name="coverNote"
            rows={4}
            placeholder="Anything you'd like us to know?"
            className={`${inputCls} resize-none`}
          />
        </div>
      </div>

      <FormField id="floridaLicense" label="Do you currently hold a Florida insurance license? If so, which?">
        <input id="floridaLicense" name="floridaLicense" type="text" placeholder="e.g. 2-20 (General Lines), 2-14 (Life & Health), or None" className={inputCls} />
      </FormField>

      {/* Yes/No questions */}
      <fieldset className="bg-warm rounded-xl p-5 space-y-4 border border-navy-200/30">
        <legend className="font-body font-semibold text-sm text-navy-800 mb-3">A couple quick questions</legend>

        <div>
          <p className="text-sm font-body text-navy-700 mb-2">
            Are you legally authorized to work in the United States? <span className="text-red-500">*</span>
          </p>
          <div className="flex gap-5">
            {["Yes", "No"].map((v) => (
              <label key={v} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="workAuthorized" value={v} required className="accent-sage-500 w-4 h-4" />
                <span className="font-body text-sm text-navy-700">{v}</span>
              </label>
            ))}
          </div>
        </div>
      </fieldset>

      {/* EEO */}
      <div className="border border-navy-200/40 rounded-xl overflow-hidden">
        <button
          type="button"
          onClick={() => setEeoOpen((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-navy-50/50 transition-colors"
          aria-expanded={eeoOpen}
        >
          <span className="font-body text-xs text-navy-500 uppercase tracking-wide font-semibold">
            Equal Opportunity Employment Statement
          </span>
          <svg
            width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
            className={`text-navy-400 transition-transform ${eeoOpen ? "rotate-180" : ""}`}
          >
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {eeoOpen && (
          <div className="px-5 pb-5 bg-white border-t border-navy-100">
            <p className="font-body text-xs text-navy-500 leading-relaxed mt-4">
              Lamb Insurance Agency is an equal opportunity employer. We consider all qualified
              applicants without regard to race, color, religion, sex, national origin, age,
              disability, genetic information, or any other status protected by applicable federal,
              state, or local law. All employment decisions are based on merit, qualifications, and
              business need.
            </p>
          </div>
        )}
      </div>

      {/* Certification */}
      <label className="flex gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={certChecked}
          onChange={(e) => setCertChecked(e.target.checked)}
          required
          className="mt-0.5 w-4 h-4 shrink-0 accent-sage-500"
        />
        <span className="font-body text-sm text-navy-600 leading-relaxed">
          I certify that the information I have provided is accurate and complete. I understand
          that employment with Lamb Insurance Agency is at-will and that any false or misleading
          statements may be grounds for dismissal. <span className="text-red-500">*</span>
        </span>
      </label>

      {/* Error */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <p className="text-red-700 font-body text-sm">{errorMsg}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={!certChecked || status === "submitting"}
        className="w-full btn-primary py-4 rounded-lg text-base font-semibold font-body disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
      >
        {status === "submitting" ? "Submitting…" : "Submit application"}
      </button>

      <p className="text-center font-body text-xs text-navy-400">
        Applications typically take under 2 minutes. Your resume carries the detail — keep it brief.
      </p>
    </form>
  );
}

function ApplyPageInner() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role") ?? "sales-agent";

  return (
    <>
      <ServicePageHeader />

      <main className="bg-cream min-h-screen pt-24 pb-20 px-5">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 text-sage-600 hover:text-sage-500 font-body text-sm font-semibold transition-colors mb-6"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to careers
            </Link>
            <p className="text-sage-600 font-body text-xs uppercase tracking-[0.2em] font-semibold mb-2">
              Apply · Lamb Insurance Agency
            </p>
            <h1 className="font-display text-navy-900 text-3xl sm:text-4xl font-bold mb-2">
              {roleLabel(roleParam)}
            </h1>
            <p className="text-navy-500 font-body text-sm">
              Sarasota, FL · Full-time
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-navy-200/40 shadow-sm p-7 sm:p-10">
            <ApplyFormInner />
          </div>
        </div>
      </main>

      <ServicePageFooter email="contact@lambinsuranceagency.com" />
    </>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <p className="text-navy-400 font-body text-sm">Loading…</p>
      </div>
    }>
      <ApplyPageInner />
    </Suspense>
  );
}
