const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-amber-400" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
    value: "#1144906",
    label: "CSLB Licensed",
    sub: "California State License Board",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-amber-400" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    value: "5-Star",
    label: "Yelp Reviews",
    sub: "Highly-praised by OC homeowners",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-amber-400" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    value: "Fully",
    label: "Licensed & Insured",
    sub: "Orange County & surrounding areas",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-amber-400" aria-hidden="true">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      </svg>
    ),
    value: "Free",
    label: "Estimates",
    sub: "No pressure, no obligation",
  },
];

export default function TrustBar() {
  return (
    <section
      className="bg-slate-800 border-y border-slate-700"
      aria-label="Ulloa Construction trust and credentials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-3"
            >
              <div
                className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20"
                aria-hidden="true"
              >
                {stat.icon}
              </div>
              <div>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-black text-white">
                    {stat.value}
                  </span>
                  <span className="block text-sm font-semibold text-amber-400 mt-0.5">
                    {stat.label}
                  </span>
                  <span className="block text-xs text-slate-400 mt-0.5">
                    {stat.sub}
                  </span>
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
