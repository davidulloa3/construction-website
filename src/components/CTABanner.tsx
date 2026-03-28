"use client";

import { useState } from "react";

const serviceTypes = [
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Whole-Home / Interior",
  "Room Addition / ADU",
  "Other",
];

export default function CTABanner() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, submit to your backend/CRM
    setSubmitted(true);
  };

  return (
    <section
      className="py-24 bg-[#c0392b] relative overflow-hidden"
      aria-labelledby="cta-heading"
      id="contact"
    >
      {/* Decorative top line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-white/30"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 left-1/4 w-64 h-64 bg-black/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <p className="text-white/80 font-semibold text-sm uppercase tracking-widest mb-4">
              Get Started Today
            </p>
            <h2
              id="cta-heading"
              className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6"
            >
              Ready to Start?
              <br />
              Get Your Free
              <br />
              Estimate Today.
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              No pressure, no obligation. Just an honest conversation about your
              project and a clear, detailed estimate from a contractor you can
              trust. CSLB Lic. #1144906.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <a
                href="tel:+17144871860"
                className="flex items-center gap-4 group"
                aria-label="Call us at (714) 487-1860"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">
                    (714) 487-1860
                  </p>
                  <p className="text-white/60 text-sm">Call or text anytime</p>
                </div>
              </a>
              <a
                href="mailto:info@ulloa-construction.com"
                className="flex items-center gap-4 group"
                aria-label="Email us at info@ulloa-construction.com"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">
                    info@ulloa-construction.com
                  </p>
                  <p className="text-white/60 text-sm">Email anytime</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-white"
                    aria-hidden="true"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Tustin, CA</p>
                  <p className="text-white/60 text-sm">Serving Orange County & surrounding areas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#0f0f0f] rounded-3xl p-8 border border-[#2a2a2a]">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 fill-amber-400"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#f5f5f5] mb-2">
                  We&apos;ll Be in Touch!
                </h3>
                <p className="text-[#a0a0a0]">
                  After you submit, we&apos;ll receive your details by email and follow up
                  as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Free estimate request form">
                <h3 className="text-xl font-bold text-[#f5f5f5] mb-6">
                  Request a Free Estimate
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="cta-name"
                      className="block text-sm font-medium text-[#a0a0a0] mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#f5f5f5] placeholder-[#a0a0a0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cta-phone"
                      className="block text-sm font-medium text-[#a0a0a0] mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="cta-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#f5f5f5] placeholder-[#a0a0a0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="(714) 555-0123"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cta-email"
                    className="block text-sm font-medium text-[#a0a0a0] mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#f5f5f5] placeholder-[#a0a0a0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cta-service"
                    className="block text-sm font-medium text-[#a0a0a0] mb-1.5"
                  >
                    Project Type *
                  </label>
                  <select
                    id="cta-service"
                    required
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#f5f5f5] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  >
                    <option value="" disabled>
                      Select a project type...
                    </option>
                    {serviceTypes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="cta-message"
                    className="block text-sm font-medium text-[#a0a0a0] mb-1.5"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="cta-message"
                    rows={3}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#f5f5f5] placeholder-[#a0a0a0] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-[#c0392b] text-[#c0392b] hover:text-white font-bold py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-black/20 border-2 border-white hover:border-[#c0392b]"
                  aria-label="Submit free estimate request"
                >
                  Get My Free Estimate
                </button>
                <p className="text-center text-[#a0a0a0] text-xs mt-3">
                  After you submit, we&apos;ll receive your details by email and follow up as soon as possible.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
