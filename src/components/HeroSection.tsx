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

      {/* Amber accent line at bottom */}
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
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            20+ Years Serving Orange County, CA
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
            Building{" "}
            <span className="text-amber-400">Orange County's</span>
            <br />
            Future
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Your trusted Anaheim contractor for remodeling, flooring, roofing,
            and new construction. Deep roots in Southern California — we're your
            neighbors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
              aria-label="Get a free construction quote from Ulloa Construction"
            >
              Get a Free Quote
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border-2 border-white/70 hover:border-white text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all hover:bg-white/10"
              aria-label="View Ulloa Construction portfolio and completed projects"
            >
              View Our Work
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
