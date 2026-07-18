"use client";

import { useState } from "react";

// Same endpoint the site's LeadCaptureForm posts to, reused verbatim.
const RAILWAY_URL =
  "https://ulloa-nurture-production.up.railway.app/webhook/formspree";

// Homepage (LeadCaptureForm) service options, plus ADU Construction and Smart
// Home Upgrades.
const SERVICE_OPTIONS = [
  "Kitchen Remodeling",
  "Bathroom Renovation",
  "Flooring",
  "Roofing",
  "Painting",
  "Drywall",
  "Window Installation",
  "Door Installation",
  "Siding",
  "Room Addition",
  "New Construction",
  "Interior Remodeling",
  "ADU Construction",
  "Smart Home Upgrades",
];

type Status = "idle" | "submitting" | "succeeded" | "error";

interface Props {
  /** Section heading, e.g. "Get a Free Estimate in Irvine". */
  heading: string;
  /** Optional supporting line under the heading. */
  subheading?: string;
  /** Section background utility class, to preserve each page's alternating rhythm. */
  bg?: string;
}

export default function InlineEstimateForm({
  heading,
  subheading = "Fill out the form and we'll be in touch within 24 hours. No obligation, no pressure.",
  bg = "bg-[#0f0f0f]",
}: Props) {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const get = (name: string) =>
      (
        form.elements.namedItem(name) as
          | HTMLInputElement
          | HTMLSelectElement
          | HTMLTextAreaElement
          | null
      )?.value ?? "";

    try {
      const res = await fetch(RAILWAY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: get("name"),
          phone: get("phone"),
          email: "",
          service: get("service"),
          message: get("message"),
        }),
      });
      setStatus(res.ok ? "succeeded" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      className={`py-16 ${bg}`}
      aria-labelledby="inline-estimate-heading"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="inline-estimate-heading"
          className="text-3xl font-black text-[#f5f5f5] mb-3 text-center"
        >
          {heading}
        </h2>

        {status === "succeeded" ? (
          <div className="mt-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-10 text-center">
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-green-400"
                  aria-hidden="true"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-black text-[#f5f5f5] mb-3">
              Thank you! We&apos;ll be in touch within 24 hours.
            </h3>
            <p className="text-[#a0a0a0] mb-6">
              For urgent requests call us directly at (714) 487-1860
            </p>
            <a
              href="tel:+17144871860"
              className="inline-flex items-center gap-2 bg-[#1565c0] hover:bg-[#1e88e5] text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call Now
            </a>
          </div>
        ) : (
          <>
            <p className="text-[#a0a0a0] text-center mb-8">{subheading}</p>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Full Name */}
              <div>
                <label
                  htmlFor="inline-name"
                  className="block text-sm font-semibold text-[#f5f5f5] mb-1.5"
                >
                  Full Name <span className="text-[#1565c0]">*</span>
                </label>
                <input
                  id="inline-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] placeholder-[#606060] text-base outline-none transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="inline-phone"
                  className="block text-sm font-semibold text-[#f5f5f5] mb-1.5"
                >
                  Phone Number <span className="text-[#1565c0]">*</span>
                </label>
                <input
                  id="inline-phone"
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  placeholder="(714) 000-0000"
                  className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] placeholder-[#606060] text-base outline-none transition-colors"
                />
              </div>

              {/* Service Needed */}
              <div>
                <label
                  htmlFor="inline-service"
                  className="block text-sm font-semibold text-[#f5f5f5] mb-1.5"
                >
                  Service Needed <span className="text-[#1565c0]">*</span>
                </label>
                <select
                  id="inline-service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] text-base outline-none transition-colors appearance-none"
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Brief description (optional) */}
              <div>
                <label
                  htmlFor="inline-message"
                  className="block text-sm font-semibold text-[#f5f5f5] mb-1.5"
                >
                  Brief Description
                </label>
                <textarea
                  id="inline-message"
                  name="message"
                  rows={4}
                  placeholder="Briefly describe your project… (optional)"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] placeholder-[#606060] text-base outline-none transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again or call (714) 487-1860.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full h-14 bg-[#1565c0] hover:bg-[#1e88e5] disabled:opacity-60 text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-[#1565c0]/25"
              >
                {status === "submitting" ? "Sending…" : "Request Free Estimate"}
              </button>

              <p className="text-center text-xs text-[#606060]">
                CSLB #1144906 · Licensed &amp; Insured · No spam, ever.
              </p>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
