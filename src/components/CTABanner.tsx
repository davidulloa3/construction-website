import LeadCaptureForm from "./LeadCaptureForm";

export default function CTABanner() {
  return (
    <section
      className="py-24 bg-[#1565c0] relative overflow-hidden"
      aria-labelledby="cta-heading"
      id="contact"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-white/30" aria-hidden="true" />
      <div className="absolute -top-32 left-1/4 w-64 h-64 bg-black/10 rounded-full blur-3xl" aria-hidden="true" />

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

            <div className="space-y-4">
              <a
                href="tel:+17144871860"
                className="flex items-center gap-4 group"
                aria-label="Call us at (714) 487-1860"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">(714) 487-1860</p>
                  <p className="text-white/60 text-sm">Call or text anytime</p>
                </div>
              </a>
              <a
                href="mailto:info@ulloa-construction.com"
                className="flex items-center gap-4 group"
                aria-label="Email us at info@ulloa-construction.com"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">info@ulloa-construction.com</p>
                  <p className="text-white/60 text-sm">Email anytime</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Formspree form */}
          <div className="bg-[#0f0f0f] rounded-3xl p-8 border border-[#2a2a2a]">
            <h3 className="text-xl font-bold text-[#f5f5f5] mb-6">Request a Free Estimate</h3>
            <LeadCaptureForm />
          </div>
        </div>
      </div>
    </section>
  );
}
