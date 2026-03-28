"use client";

import { useState } from "react";
import ProcessTimeline from "@/components/ProcessTimeline";

// Note: metadata export must be in a separate server component since this file uses "use client"
// See: src/app/contact/layout.tsx

const serviceTypes = [
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Whole-Home / Interior",
  "Room Addition / ADU",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#0f0f0f] py-20" aria-labelledby="contact-page-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Let&apos;s Talk
          </p>
          <h1 id="contact-page-heading" className="text-5xl sm:text-6xl font-black text-[#f5f5f5] mb-4">
            Contact Ulloa
            <span className="text-amber-400"> Construction</span>
          </h1>
          <p className="text-amber-400 text-sm font-medium mb-4">CSLB Lic. #1144906 — Licensed & Insured</p>
          <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto">
            Ready to start your remodeling project? Call us or fill out the form
            below for a free, no-obligation estimate.
          </p>
        </div>
      </section>

      {/* Process */}
      <ProcessTimeline />

      {/* Main content */}
      <section className="py-16 bg-[#0f0f0f]" aria-label="Contact information and form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact info */}
            <div className="lg:col-span-2 space-y-8">
              {/* NAP */}
              <div>
                <h2 className="text-2xl font-black text-[#f5f5f5] mb-6">
                  Get in Touch
                </h2>
                <address className="not-italic space-y-5">
                  <a
                    href="tel:+17144871860"
                    className="flex items-start gap-4 group"
                    aria-label="Call Ulloa Construction at (714) 487-1860"
                  >
                    <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:border-amber-500 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500 group-hover:fill-white transition-colors" aria-hidden="true">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#f5f5f5] group-hover:text-amber-400 transition-colors">
                        (714) 487-1860
                      </p>
                      <p className="text-[#a0a0a0] text-sm">Call or text anytime</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@ulloa-construction.com"
                    className="flex items-start gap-4 group"
                    aria-label="Email Ulloa Construction at info@ulloa-construction.com"
                  >
                    <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:border-amber-500 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500 group-hover:fill-white transition-colors" aria-hidden="true">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#f5f5f5] group-hover:text-amber-400 transition-colors">
                        info@ulloa-construction.com
                      </p>
                      <p className="text-[#a0a0a0] text-sm">Email anytime</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#f5f5f5]">Tustin, CA</p>
                      <p className="text-[#a0a0a0] text-sm">
                        Serving Orange County & surrounding areas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500" aria-hidden="true">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#f5f5f5]">CSLB Lic. #1144906</p>
                      <p className="text-[#a0a0a0] text-sm">Licensed & fully insured</p>
                    </div>
                  </div>
                </address>
              </div>

              {/* Yelp link */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6">
                <h3 className="font-bold text-[#f5f5f5] mb-2">Read Our Reviews</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
                  See what Orange County homeowners say about working with us on Yelp.
                </p>
                <a
                  href="https://www.yelp.com/biz/ulloa-construction-orange-county"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#d32323] hover:bg-[#b81c1c] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                  aria-label="View Ulloa Construction reviews on Yelp"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  View on Yelp
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-[#2a2a2a]">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-amber-500" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-black text-[#f5f5f5] mb-3">Message Sent!</h2>
                    <p className="text-[#a0a0a0] text-lg">
                      After you submit, we&apos;ll receive your details by email and follow up as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} aria-label="Contact form for Ulloa Construction">
                    <h2 className="text-2xl font-black text-[#f5f5f5] mb-2">
                      Request a Free Estimate
                    </h2>
                    <p className="text-[#a0a0a0] text-sm mb-6">
                      After you submit, we&apos;ll receive your details by email and follow up as soon as possible.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-[#a0a0a0] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-[#0f0f0f] border border-[#2a2a2a] text-[#f5f5f5] placeholder-[#a0a0a0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-[#a0a0a0] mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-[#0f0f0f] border border-[#2a2a2a] text-[#f5f5f5] placeholder-[#a0a0a0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                          placeholder="(714) 555-0123"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-[#a0a0a0] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-[#0f0f0f] border border-[#2a2a2a] text-[#f5f5f5] placeholder-[#a0a0a0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-city" className="block text-sm font-medium text-[#a0a0a0] mb-1.5">
                          City
                        </label>
                        <input
                          id="contact-city"
                          type="text"
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                          className="w-full bg-[#0f0f0f] border border-[#2a2a2a] text-[#f5f5f5] placeholder-[#a0a0a0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                          placeholder="Tustin, Irvine, Anaheim..."
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="contact-service" className="block text-sm font-medium text-[#a0a0a0] mb-1.5">
                        Project Type *
                      </label>
                      <select
                        id="contact-service"
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] text-[#f5f5f5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      >
                        <option value="" disabled>Select a project type...</option>
                        {serviceTypes.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="contact-message" className="block text-sm font-medium text-[#a0a0a0] mb-1.5">
                        Project Details
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-[#0f0f0f] border border-[#2a2a2a] text-[#f5f5f5] placeholder-[#a0a0a0] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                        placeholder="Tell us about your project — what are you looking to remodel or build?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.01] shadow-lg shadow-amber-500/20 text-lg"
                      aria-label="Submit contact form to Ulloa Construction"
                    >
                      Send My Request
                    </button>
                    <p className="text-center text-[#a0a0a0] text-xs mt-3">
                      After you submit, we&apos;ll receive your details by email and follow up as soon as possible.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
