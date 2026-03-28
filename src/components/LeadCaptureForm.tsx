"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function LeadCaptureForm() {
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
          Thank you! We&apos;ll be in touch within 24 hours.
        </h3>
        <p className="text-[#a0a0a0] mb-6">
          For urgent requests call us directly at (657) 400-2896
        </p>
        <a
          href="tel:+16574002896"
          className="inline-flex items-center gap-2 bg-[#1565c0] hover:bg-[#1e88e5] text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Call Now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Full Name */}
      <div>
        <label htmlFor="lead-name" className="block text-sm font-semibold text-[#f5f5f5] mb-1.5">
          Full Name <span className="text-[#1565c0]">*</span>
        </label>
        <input
          id="lead-name"
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
        <label htmlFor="lead-phone" className="block text-sm font-semibold text-[#f5f5f5] mb-1.5">
          Phone Number <span className="text-[#1565c0]">*</span>
        </label>
        <input
          id="lead-phone"
          type="tel"
          name="phone"
          required
          placeholder="(657) 000-0000"
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] placeholder-[#606060] text-base outline-none transition-colors"
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} className="mt-1 text-red-400 text-sm" />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="lead-email" className="block text-sm font-semibold text-[#f5f5f5] mb-1.5">
          Email Address <span className="text-[#1565c0]">*</span>
        </label>
        <input
          id="lead-email"
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] placeholder-[#606060] text-base outline-none transition-colors"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-red-400 text-sm" />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="lead-service" className="block text-sm font-semibold text-[#f5f5f5] mb-1.5">
          Service Needed <span className="text-[#1565c0]">*</span>
        </label>
        <select
          id="lead-service"
          name="service"
          required
          defaultValue=""
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] text-base outline-none transition-colors appearance-none"
        >
          <option value="" disabled>Select a service…</option>
          <option>Kitchen Remodeling</option>
          <option>Bathroom Renovation</option>
          <option>Flooring</option>
          <option>Roofing</option>
          <option>Painting</option>
          <option>Drywall</option>
          <option>Window Installation</option>
          <option>Door Installation</option>
          <option>Siding</option>
          <option>Room Addition</option>
          <option>New Construction</option>
          <option>Interior Remodeling</option>
        </select>
        <ValidationError prefix="Service" field="service" errors={state.errors} className="mt-1 text-red-400 text-sm" />
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="lead-timeline" className="block text-sm font-semibold text-[#f5f5f5] mb-1.5">
          Project Timeline
        </label>
        <select
          id="lead-timeline"
          name="timeline"
          defaultValue=""
          className="w-full h-12 px-4 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] text-base outline-none transition-colors appearance-none"
        >
          <option value="">Select timeline…</option>
          <option>ASAP</option>
          <option>Within 1 month</option>
          <option>1–3 months</option>
          <option>3–6 months</option>
          <option>Just planning</option>
        </select>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="lead-message" className="block text-sm font-semibold text-[#f5f5f5] mb-1.5">
          Project Description
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={4}
          placeholder="Briefly describe your project…"
          className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1565c0] rounded-xl text-[#f5f5f5] placeholder-[#606060] text-base outline-none transition-colors resize-none"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-red-400 text-sm" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full h-14 bg-[#1565c0] hover:bg-[#1e88e5] disabled:opacity-60 text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-[#1565c0]/25"
      >
        {state.submitting ? "Sending…" : "Send My Request"}
      </button>

      <p className="text-center text-xs text-[#606060]">
        CSLB #1144906 · Licensed & Insured · No spam, ever.
      </p>
    </form>
  );
}
