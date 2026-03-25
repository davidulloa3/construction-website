import Link from "next/link";

const painPoints = [
  "Is your kitchen stuck in the 90s with dark cabinets, poor lighting, and not enough counter space?",
  "Does your bathroom feel cramped, outdated, or hard to clean no matter how much you scrub?",
  "Are you tired of mismatched flooring, old baseboards, and walls that make your home feel smaller than it is?",
  "Want clear, itemized pricing so you know exactly what you're investing in before any work starts?",
  "Looking for a contractor who actually shows up, communicates, and treats your home with respect?",
  "Need a team that can handle design, permits, and construction so you're not juggling multiple people?",
];

export default function PainPointsSection() {
  return (
    <section
      className="py-20 bg-slate-50"
      aria-labelledby="pain-points-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Sound Familiar?
          </p>
          <h2
            id="pain-points-heading"
            className="text-4xl sm:text-5xl font-black text-slate-900"
          >
            If Any of This Sounds
            <br />
            <span className="text-amber-500">Like You — Let's Talk.</span>
          </h2>
        </div>

        <ul className="space-y-4 mb-12" role="list">
          {painPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-4 bg-white rounded-xl px-6 py-5 border border-slate-100 shadow-sm"
            >
              <div
                className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-amber-500">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <p className="text-slate-700 leading-relaxed">{point}</p>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
            aria-label="Get a free estimate from Ulloa Construction"
          >
            Get a Free Estimate
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
