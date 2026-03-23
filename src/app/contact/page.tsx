"use client";

import { useState } from "react";

// Note: metadata export must be in a separate server component since this file uses "use client"
// See: src/app/contact/layout.tsx

const serviceTypes = [
  "Flooring",
  "Remodeling",
  "Kitchen Renovation",
  "Bathroom Upgrade",
  "New Construction",
  "Room Addition",
  "Siding",
  "Window Installation",
  "Door Installation",
  "Drywall",
  "Roofing",
  "Painting",
  "Other",
];

const hours = [
  { day: "Monday", time: "7:30am – 5:30pm" },
  { day: "Tuesday", time: "7:30am – 5:30pm" },
  { day: "Wednesday", time: "7:30am – 5:30pm" },
  { day: "Thursday", time: "7:30am – 5:30pm" },
  { day: "Friday", time: "7:30am – 5:30pm" },
  { day: "Saturday", time: "7:30am – 5:30pm" },
  { day: "Sunday", time: "Closed" },
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
      <section className="bg-slate-900 py-20" aria-labelledby="contact-page-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Let's Talk
          </p>
          <h1 id="contact-page-heading" className="text-5xl sm:text-6xl font-black text-white mb-6">
            Contact Ulloa
            <span className="text-amber-400"> Construction</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to start your Orange County construction project? Call us or fill out the form
            below for a free, no-obligation estimate.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white" aria-label="Contact information and form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact info */}
            <div className="lg:col-span-2 space-y-8">
              {/* NAP */}
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-6">
                  Get in Touch
                </h2>
                <address className="not-italic space-y-5">
                  <a
                    href="tel:+16574002896"
                    className="flex items-start gap-4 group"
                    aria-label="Call Ulloa Construction at (657) 400-2896"
                  >
                    <div className="w-12 h-12 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 group-hover:border-amber-500 transition-colors">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500 group-hover:fill-white transition-colors" aria-hidden="true">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">
                        (657) 400-2896
                      </p>
                      <p className="text-slate-500 text-sm">Click to call</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Anaheim, CA 92806</p>
                      <p className="text-slate-500 text-sm">
                        Serving all of Orange County, CA
                        <br />
                        From Brea to San Juan Capistrano
                      </p>
                    </div>
                  </div>
                </address>
              </div>

              {/* Hours */}
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-4">Business Hours</h3>
                <dl className="space-y-2">
                  {hours.map(({ day, time }) => (
                    <div
                      key={day}
                      className={`flex justify-between text-sm py-1.5 border-b border-slate-100 ${
                        day === "Sunday" ? "text-slate-400" : "text-slate-700"
                      }`}
                    >
                      <dt className="font-medium">{day}</dt>
                      <dd className={day === "Sunday" ? "text-red-400" : "text-amber-600 font-medium"}>
                        {time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Service area */}
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">Service Area</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We serve all cities in Orange County, CA — including Anaheim, Brea, Buena Park,
                  Fullerton, Garden Grove, Huntington Beach, Irvine, Orange, Santa Ana, Tustin,
                  Yorba Linda, and San Juan Capistrano.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-amber-500" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-black text-slate-900 mb-3">Message Sent!</h2>
                    <p className="text-slate-500 text-lg">
                      Thanks for reaching out to Ulloa Construction. Our Anaheim team will get back
                      to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} aria-label="Contact form for Ulloa Construction">
                    <h2 className="text-2xl font-black text-slate-900 mb-2">
                      Request a Free Estimate
                    </h2>
                    <p className="text-slate-500 text-sm mb-6">
                      Tell us about your Orange County construction project and we'll be in touch promptly.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-white border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                          placeholder="(714) 555-0123"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-city" className="block text-sm font-medium text-slate-700 mb-1.5">
                          City (Orange County)
                        </label>
                        <input
                          id="contact-city"
                          type="text"
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                          className="w-full bg-white border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                          placeholder="Anaheim, Irvine, Yorba Linda..."
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="contact-service" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        id="contact-service"
                        required
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full bg-white border border-slate-200 text-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      >
                        <option value="" disabled>Select a service...</option>
                        {serviceTypes.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Project Details *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white border border-slate-200 text-slate-900 placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                        placeholder="Describe your project in Anaheim or Orange County — what are you looking to build or renovate?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.01] shadow-lg shadow-amber-500/20 text-lg"
                      aria-label="Submit contact form to Ulloa Construction"
                    >
                      Send My Request
                    </button>
                    <p className="text-center text-slate-400 text-xs mt-3">
                      We respond within 24 hours. Based in Anaheim, serving all of Orange County.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section className="bg-slate-100" aria-label="Map of Anaheim, CA service area">
        <h2 className="sr-only">Ulloa Construction Service Area — Anaheim, CA and Orange County</h2>
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105799.08988600066!2d-118.04178847382812!3d33.83530689999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7d12b3b5e6d%3A0x2b10e17e7ac2f2d6!2sAnaheim%2C%20CA!5e0!3m2!1sen!2sus!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ulloa Construction service area — Anaheim and Orange County, California"
          />
        </div>
      </section>
    </div>
  );
}
