"use client";

import { useState } from "react";

const serviceTypes = [
  "Flooring",
  "Remodeling",
  "Kitchen Renovation",
  "Bathroom Upgrade",
  "New Construction",
  "Addition",
  "Siding",
  "Window Installation",
  "Door Installation",
  "Drywall",
  "Roofing",
  "Painting",
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
      className="py-24 bg-slate-900 relative overflow-hidden"
      aria-labelledby="cta-heading"
      id="contact"
    >
      {/* Decorative amber glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-amber-500"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Get Started Today
            </p>
            <h2
              id="cta-heading"
              className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6"
            >
              Ready to Build?
              <br />
              <span className="text-amber-400">Get Your Free</span>
              <br />
              Estimate Today.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              No pressure, no obligation. Just a free consultation with Orange
              County's most trusted construction team. We'll visit your Anaheim
              or OC property and give you a clear, detailed estimate.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <a
                href="tel:+16574002896"
                className="flex items-center gap-4 group"
                aria-label="Call us at (657) 400-2896"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-amber-400"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                    (657) 400-2896
                  </p>
                  <p className="text-slate-500 text-sm">Click to call</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-amber-400"
                    aria-hidden="true"
                  >
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Mon–Sat: 7:30am–5:30pm</p>
                  <p className="text-slate-500 text-sm">Sunday: Closed</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-amber-400"
                    aria-hidden="true"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Anaheim, CA 92806</p>
                  <p className="text-slate-500 text-sm">Serving all of Orange County</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
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
                <h3 className="text-2xl font-bold text-white mb-2">
                  We'll Be in Touch!
                </h3>
                <p className="text-slate-400">
                  Thanks for reaching out. Our Anaheim team will contact you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Free estimate request form">
                <h3 className="text-xl font-bold text-white mb-6">
                  Request a Free Estimate
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="cta-name"
                      className="block text-sm font-medium text-slate-300 mb-1.5"
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
                      className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cta-phone"
                      className="block text-sm font-medium text-slate-300 mb-1.5"
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
                      className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="(714) 555-0123"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cta-email"
                    className="block text-sm font-medium text-slate-300 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cta-service"
                    className="block text-sm font-medium text-slate-300 mb-1.5"
                  >
                    Service Needed *
                  </label>
                  <select
                    id="cta-service"
                    required
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  >
                    <option value="" disabled>
                      Select a service...
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
                    className="block text-sm font-medium text-slate-300 mb-1.5"
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
                    className="w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                    placeholder="Tell us about your project in Anaheim or Orange County..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-amber-500/20"
                  aria-label="Submit free estimate request"
                >
                  Get My Free Estimate
                </button>
                <p className="text-center text-slate-500 text-xs mt-3">
                  We'll respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
