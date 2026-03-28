import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero - Building Orange County's Future"
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero.jpg"
        alt="Modern construction project in Anaheim, Orange County California at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />

      {/* Crimson accent line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40 text-center">
        <div className="animate-fade-in-up">
          <p className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-widest uppercase mb-6 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current"
              aria-hidden="true"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            CSLB Lic. #1144906 — Licensed & Insured
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#f5f5f5] leading-tight tracking-tight mb-6">
            Professional Tustin
            <br />
            <span className="text-amber-400">Remodeling Contractor</span>
            <br />
            You Can Trust.
          </h1>

          <p className="text-xl sm:text-2xl text-[#a0a0a0] max-w-2xl mx-auto leading-relaxed mb-10">
            Highly-praised local OC general contractor specializing in kitchens,
            bathrooms, interior remodeling, and additions — with honest pricing
            and clear communication from start to finish.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+17144871860"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
              aria-label="Call Ulloa Construction at (714) 487-1860"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              (714) 487-1860
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#f5f5f5]/70 hover:border-[#f5f5f5] text-[#f5f5f5] font-semibold text-lg px-8 py-4 rounded-lg transition-all hover:bg-[#1a1a1a]"
              aria-label="Get a free estimate from Ulloa Construction"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
          aria-hidden="true"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
