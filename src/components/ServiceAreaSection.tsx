export default function ServiceAreaSection() {
  return (
    <section
      className="py-20 bg-[#0f0f0f] relative overflow-hidden"
      aria-labelledby="service-area-heading"
      id="service-area"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #f5f5f5 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
          Where We Work
        </p>
        <h2
          id="service-area-heading"
          className="text-4xl sm:text-5xl font-black text-[#f5f5f5] mb-6"
        >
          Serving Orange County
          <br />
          <span className="text-amber-500">&amp; Surrounding Areas</span>
        </h2>
        <p className="text-[#a0a0a0] text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
          Based in Anaheim, CA, we work throughout Orange County — Irvine, Anaheim,
          Fullerton, Garden Grove, Yorba Linda, Santa Ana, and surrounding communities.
        </p>
        <p className="text-[#a0a0a0] leading-relaxed mb-10 max-w-xl mx-auto">
          Not sure if we cover your area? Give us a call — we're happy to let you
          know and answer any questions about your project.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+16574002896"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            aria-label="Call Ulloa Construction at (657) 400-2896"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            (657) 400-2896
          </a>
          <div className="inline-flex items-center justify-center gap-2 text-[#a0a0a0] text-sm px-4">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-amber-400 flex-shrink-0"
              aria-hidden="true"
            >
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
            </svg>
            Call or text anytime
          </div>
        </div>
      </div>
    </section>
  );
}
