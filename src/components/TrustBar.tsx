const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-amber-400" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    value: "20+",
    label: "Years Experience",
    sub: "In Orange County, CA",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-amber-400" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
    value: "OC",
    label: "Licensed & Insured",
    sub: "California State Licensed",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-amber-400" aria-hidden="true">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
      </svg>
    ),
    value: "500+",
    label: "Projects Completed",
    sub: "Across Orange County",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-amber-400" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    value: "SoCal",
    label: "Seismic Code Specialists",
    sub: "CA Building Code Experts",
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
