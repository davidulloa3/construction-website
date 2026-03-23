const cities = [
  { name: "Anaheim", note: "Our Home Base" },
  { name: "Brea", note: "North OC" },
  { name: "Buena Park", note: "North OC" },
  { name: "Fullerton", note: "North OC" },
  { name: "Garden Grove", note: "Central OC" },
  { name: "Huntington Beach", note: "Coastal OC" },
  { name: "Irvine", note: "South OC" },
  { name: "La Habra", note: "North OC" },
  { name: "Mission Viejo", note: "South OC" },
  { name: "Orange", note: "Central OC" },
  { name: "Placentia", note: "North OC" },
  { name: "Santa Ana", note: "Central OC" },
  { name: "Stanton", note: "Central OC" },
  { name: "Tustin", note: "Central OC" },
  { name: "Westminster", note: "Central OC" },
  { name: "Yorba Linda", note: "North OC" },
  { name: "San Juan Capistrano", note: "South OC" },
  { name: "Dana Point", note: "South OC" },
];

export default function ServiceAreaSection() {
  return (
    <section
      className="py-24 bg-white relative overflow-hidden"
      aria-labelledby="service-area-heading"
      id="service-area"
    >
      {/* Subtle map-like background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0f172a 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Where We Work
            </p>
            <h2
              id="service-area-heading"
              className="text-4xl sm:text-5xl font-black text-slate-900 mb-6"
            >
              Serving All of
              <br />
              <span className="text-amber-500">Orange County</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Based in Anaheim, CA, we serve homeowners and businesses
              throughout Orange County — from Brea in the north to San Juan
              Capistrano in the south. Our crews know every neighborhood in OC.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Whether you're in coastal Huntington Beach, inland Yorba Linda, or
              anywhere in between, Ulloa Construction brings the same level of
              quality and local expertise to every Southern California project.
            </p>

            {/* Call to action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+16574002896"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
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
              <div className="text-sm text-slate-400 flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-amber-400"
                  aria-hidden="true"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
                Mon–Sat: 7:30am–5:30pm
              </div>
            </div>
          </div>

          {/* Right: City grid */}
          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
              Cities We Serve in Orange County, CA
            </h3>
            <ul
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              role="list"
              aria-label="Orange County cities served by Ulloa Construction"
            >
              {cities.map((city) => (
                <li key={city.name}>
                  <div
                    className={`rounded-xl px-4 py-3 border transition-colors ${
                      city.name === "Anaheim"
                        ? "bg-amber-50 border-amber-200"
                        : "bg-slate-50 border-slate-100 hover:border-amber-200 hover:bg-amber-50"
                    }`}
                  >
                    <p
                      className={`font-semibold text-sm ${city.name === "Anaheim" ? "text-amber-600" : "text-slate-700"}`}
                    >
                      {city.name}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{city.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
