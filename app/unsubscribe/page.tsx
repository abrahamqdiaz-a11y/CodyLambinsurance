"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Mail, MessageSquare, Phone } from "lucide-react";

export default function Unsubscribe() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [channels, setChannels] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const toggleChannel = (channel: string) => {
    setChannels((prev) =>
      prev.includes(channel) ? prev.filter((c) => c !== channel) : [...prev, channel]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email && !phone) {
      setError("Please provide at least an email address or phone number.");
      return;
    }
    if (channels.length === 0) {
      setError("Please select at least one communication type to unsubscribe from.");
      return;
    }

    // Submission is handled by Netlify Forms
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setError("Something went wrong. Please email us directly at contact@lambinsuranceagency.com."));
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-navy-950 py-5 px-5">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="font-display text-white text-xl font-bold hover:text-sage-300 transition-colors"
            aria-label="Lamb Insurance Agency — home"
          >
            Lamb Insurance <span className="text-sage-400">Agency</span>
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-5 py-16">
        {submitted ? (
          <div className="text-center py-16">
            <CheckCircle className="w-16 h-16 text-sage-500 mx-auto mb-6" aria-hidden="true" />
            <h1 className="font-display text-3xl font-bold text-navy-900 mb-4">
              You&rsquo;ve Been Unsubscribed
            </h1>
            <p className="font-body text-navy-600 mb-2">
              We&rsquo;ve received your request and will process it within 10 business days.
            </p>
            <p className="font-body text-navy-500 text-sm mb-10">
              If you have questions, reach us at{" "}
              <a href="mailto:contact@lambinsuranceagency.com" className="text-sage-600 hover:underline">
                contact@lambinsuranceagency.com
              </a>
              .
            </p>
            <Link
              href="/"
              className="btn-primary inline-block px-6 py-3 rounded-lg font-semibold font-body text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        ) : (
          <>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-3">
              Unsubscribe
            </h1>
            <p className="font-body text-navy-600 mb-10">
              We&rsquo;re sorry to see you go. Fill out the form below and we&rsquo;ll remove you
              from the selected communications within 10 business days. You can also opt out
              instantly by replying <strong>STOP</strong> to any text message or{" "}
              <strong>UNSUBSCRIBE</strong> to any email from us.
            </p>

            {/* Hidden form for Netlify form detection */}
            <form name="unsubscribe" data-netlify="true" hidden>
              <input type="text" name="email" />
              <input type="text" name="phone" />
              <input type="text" name="channels" />
            </form>

            <form
              name="unsubscribe"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              noValidate
              className="space-y-7"
            >
              <input type="hidden" name="form-name" value="unsubscribe" />

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-sm font-semibold text-navy-700 mb-1.5"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input w-full pl-9 pr-4 py-3 rounded-lg border border-navy-200 font-body text-sm text-navy-800 focus:outline-none focus:ring-2 focus:ring-sage-400 bg-white"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block font-body text-sm font-semibold text-navy-700 mb-1.5"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input w-full pl-9 pr-4 py-3 rounded-lg border border-navy-200 font-body text-sm text-navy-800 focus:outline-none focus:ring-2 focus:ring-sage-400 bg-white"
                  />
                </div>
              </div>

              {/* Channel selection */}
              <fieldset>
                <legend className="block font-body text-sm font-semibold text-navy-700 mb-3">
                  Unsubscribe From <span className="text-red-500" aria-hidden="true">*</span>
                </legend>
                <input type="hidden" name="channels" value={channels.join(", ")} />
                <div className="space-y-3">
                  {[
                    {
                      id: "email-marketing",
                      label: "Marketing Emails",
                      description: "Newsletters, promotions, and insurance tips",
                      icon: Mail,
                    },
                    {
                      id: "sms",
                      label: "Text Messages (SMS)",
                      description: "Quotes, policy updates, and reminders via text",
                      icon: MessageSquare,
                    },
                    {
                      id: "calls",
                      label: "Phone Calls",
                      description: "Outbound marketing and follow-up calls",
                      icon: Phone,
                    },
                  ].map(({ id, label, description, icon: Icon }) => (
                    <label
                      key={id}
                      htmlFor={id}
                      className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                        channels.includes(id)
                          ? "border-sage-500 bg-sage-50"
                          : "border-navy-100 bg-white hover:border-navy-200"
                      }`}
                    >
                      <input
                        id={id}
                        type="checkbox"
                        checked={channels.includes(id)}
                        onChange={() => toggleChannel(id)}
                        className="mt-0.5 accent-sage-600 w-4 h-4 shrink-0"
                      />
                      <Icon
                        className={`w-5 h-5 mt-0.5 shrink-0 ${
                          channels.includes(id) ? "text-sage-600" : "text-navy-400"
                        }`}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-body text-sm font-semibold text-navy-800">{label}</p>
                        <p className="font-body text-xs text-navy-500 mt-0.5">{description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </fieldset>

              {error && (
                <p role="alert" className="font-body text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="btn-primary w-full py-3 rounded-lg font-semibold font-body text-sm"
              >
                Submit Unsubscribe Request
              </button>
            </form>

            <p className="font-body text-xs text-navy-400 mt-8 text-center">
              For immediate assistance, contact us at{" "}
              <a href="mailto:contact@lambinsuranceagency.com" className="text-sage-600 hover:underline">
                contact@lambinsuranceagency.com
              </a>
              . See our{" "}
              <Link href="/privacy-policy" className="text-sage-600 hover:underline">
                Privacy Policy
              </Link>{" "}
              for details on how we handle your data.
            </p>
          </>
        )}
      </main>
    </div>
  );
}
