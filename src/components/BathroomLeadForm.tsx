"use client";

import { useState } from "react";

interface FormFields {
  name: string;
  phone: string;
  email: string;
  city: string;
  timeline: string;
  budget: string;
  homeowner_status: string;
}

type Status = "idle" | "submitting" | "succeeded" | "error";

const INITIAL: FormFields = {
  name: "",
  phone: "",
  email: "",
  city: "",
  timeline: "",
  budget: "",
  homeowner_status: "",
};

export default function BathroomLeadForm() {
  const [fields, setFields] = useState<FormFields>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof FormFields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setFields((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const payload = new FormData();
    // User-visible fields
    payload.append("name", fields.name);
    payload.append("phone", fields.phone);
    payload.append("email", fields.email);
    payload.append("city", fields.city);
    payload.append("timeline", fields.timeline);
    payload.append("budget", fields.budget);
    payload.append("homeowner_status", fields.homeowner_status);
    // Hidden tracking fields
    payload.append("source", "Meta Ad");
    payload.append("service", "Bathroom Remodeling");
    payload.append("landing_page", "Bathroom Remodel Orange County");

    try {
      const res = await fetch("https://formspree.io/f/xovznekk", {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "succeeded" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "succeeded") {
    return (
      <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-10 text-center">
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-green-400" aria-hidden="true">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-black text-[#f5f5f5] mb-3">
          You&apos;re all set — we&apos;ll reach out within 24 hours.
        </h3>
        <p className="text-[#a0a0a0] mb-6">
          For faster service, call us directly at (714) 487-1860
        </p>
        <a
          href="tel:+17144871860"
          className="inline-flex items-center gap-2 bg-[#1565c0] hover:bg-[#1e88e5] text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Call (714) 487-1860
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Full Name */}
      <div>
        <label htmlFor="bath-name" className="block text-sm font-semibold text-[#f5f5f5] mb-1.5">
          Full Name <span className="text-[#1565c0]">*</span>
        </label>
        <input
          id="bath-name"
          type="text"
          name="name"
          required
          value={fields.name}
          onChange={set("name")}
          placeholder="Your full name"
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] placeholder-[#606060] text-base outline-none transition-colors"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="bath-phone" className="block text-sm font-semibold text-[#f5f5f5] mb-1.5">
          Phone Number <span className="text-[#1565c0]">*</span>
        </label>
        <input
          id="bath-phone"
          type="tel"
          name="phone"
          required
          value={fields.phone}
          onChange={set("phone")}
          placeholder="(714) 000-0000"
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] placeholder-[#606060] text-base outline-none transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="bath-email" className="block text-sm font-semibold text-[#f5f5f5] mb-1.5">
          Email Address <span className="text-[#1565c0]">*</span>
        </label>
        <input
          id="bath-email"
          type="email"
          name="email"
          required
          value={fields.email}
          onChange={set("email")}
          placeholder="you@email.com"
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] placeholder-[#606060] text-base outline-none transition-colors"
        />
      </div>

      {/* City */}
      <div>
        <label htmlFor="bath-city" className="block text-sm font-semibold text-[#f5f5f5] mb-1.5">
          Your City in Orange County <span className="text-[#1565c0]">*</span>
        </label>
        <input
          id="bath-city"
          type="text"
          name="city"
          required
          value={fields.city}
          onChange={set("city")}
          placeholder="e.g. Irvine, Anaheim, Huntington Beach…"
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] placeholder-[#606060] text-base outline-none transition-colors"
        />
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="bath-timeline" className="block text-sm font-semibold text-[#f5f5f5] mb-1.5">
          Project Timeline
        </label>
        <select
          id="bath-timeline"
          name="timeline"
          value={fields.timeline}
          onChange={set("timeline")}
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] text-base outline-none transition-colors appearance-none"
        >
          <option value="">When are you looking to start?</option>
          <option value="ASAP">ASAP</option>
          <option value="1–3 months">1–3 months</option>
          <option value="3–6 months">3–6 months</option>
          <option value="Just researching">Just researching</option>
        </select>
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="bath-budget" className="block text-sm font-semibold text-[#f5f5f5] mb-1.5">
          Estimated Budget
        </label>
        <select
          id="bath-budget"
          name="budget"
          value={fields.budget}
          onChange={set("budget")}
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] text-base outline-none transition-colors appearance-none"
        >
          <option value="">Select a budget range…</option>
          <option value="Under $10,000">Under $10,000</option>
          <option value="$10,000–$25,000">$10,000–$25,000</option>
          <option value="$25,000–$50,000">$25,000–$50,000</option>
          <option value="$50,000+">$50,000+</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      {/* Homeowner status */}
      <div>
        <label htmlFor="bath-homeowner" className="block text-sm font-semibold text-[#f5f5f5] mb-1.5">
          Are You the Homeowner?
        </label>
        <select
          id="bath-homeowner"
          name="homeowner_status"
          value={fields.homeowner_status}
          onChange={set("homeowner_status")}
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] text-base outline-none transition-colors appearance-none"
        >
          <option value="">Select…</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="I'm helping make the decision">I&apos;m helping make the decision</option>
        </select>
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
        {status === "submitting" ? "Sending…" : "Schedule My Free Consultation"}
      </button>

      <p className="text-center text-xs text-[#606060]">
        CSLB #1144906 · Licensed &amp; Insured · No spam, ever.
      </p>
    </form>
  );
}
