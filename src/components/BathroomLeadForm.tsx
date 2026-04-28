"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function BathroomLeadForm() {
  const [state, handleSubmit] = useForm("xovznekk");

  if (state.succeeded) {
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
      {/* Hidden tracking fields */}
      <input type="hidden" name="source" value="Meta Ad" />
      <input type="hidden" name="service" value="Bathroom Remodeling" />
      <input type="hidden" name="landing_page" value="Bathroom Remodel Orange County" />

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
          placeholder="Your full name"
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] placeholder-[#606060] text-base outline-none transition-colors"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-red-400 text-sm" />
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
          placeholder="(714) 000-0000"
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] placeholder-[#606060] text-base outline-none transition-colors"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} className="mt-1 text-red-400 text-sm" />
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
          placeholder="you@email.com"
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] placeholder-[#606060] text-base outline-none transition-colors"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-red-400 text-sm" />
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
          placeholder="e.g. Irvine, Anaheim, Huntington Beach…"
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] placeholder-[#606060] text-base outline-none transition-colors"
        />
        <ValidationError prefix="City" field="city" errors={state.errors} className="mt-1 text-red-400 text-sm" />
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="bath-timeline" className="block text-sm font-semibold text-[#f5f5f5] mb-1.5">
          Project Timeline
        </label>
        <select
          id="bath-timeline"
          name="timeline"
          defaultValue=""
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] text-base outline-none transition-colors appearance-none"
        >
          <option value="">When are you looking to start?</option>
          <option>ASAP</option>
          <option>1–3 months</option>
          <option>3–6 months</option>
          <option>Just researching</option>
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
          defaultValue=""
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] text-base outline-none transition-colors appearance-none"
        >
          <option value="">Select a budget range…</option>
          <option>Under $10,000</option>
          <option>$10,000–$25,000</option>
          <option>$25,000–$50,000</option>
          <option>$50,000+</option>
          <option>Not sure yet</option>
        </select>
      </div>

      {/* Homeowner */}
      <div>
        <label htmlFor="bath-homeowner" className="block text-sm font-semibold text-[#f5f5f5] mb-1.5">
          Are You the Homeowner?
        </label>
        <select
          id="bath-homeowner"
          name="homeowner"
          defaultValue=""
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] text-base outline-none transition-colors appearance-none"
        >
          <option value="">Select…</option>
          <option>Yes</option>
          <option>No</option>
          <option>I&apos;m helping make the decision</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full h-14 bg-[#1565c0] hover:bg-[#1e88e5] disabled:opacity-60 text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-[#1565c0]/25"
      >
        {state.submitting ? "Sending…" : "Schedule My Free Consultation"}
      </button>

      <p className="text-center text-xs text-[#606060]">
        CSLB #1144906 · Licensed &amp; Insured · No spam, ever.
      </p>
    </form>
  );
}
