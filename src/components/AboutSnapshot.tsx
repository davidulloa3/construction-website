import Link from "next/link";

const values = [
  {
    title: "CSLB Licensed #1144906 and Fully Insured",
    description:
      "Our California contractor license and full insurance are on file and ready to verify. You are protected on every job, from demo day to final walkthrough.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    title: "Clean, Respectful Crews",
    description:
      "We clean up the job site every day before we leave. Crews show up when they say they will and treat your home the way they would want theirs treated.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
  },
  {
    title: "Clear, Upfront Pricing",
    description:
      "No surprise line items. You get a written scope with clear allowances before any work starts. What we quote is what you pay, unless the scope changes.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500" aria-hidden="true">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      </svg>
    ),
  },
  {
    title: "Direct Owner Communication",
    description:
      "You work directly with the owner throughout your project. Not a sales rep. Not a call center. Real answers from someone who knows the status of your job.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500" aria-hidden="true">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
      </svg>
    ),
  },
];

export default function AboutSnapshot() {
  return (
    <section
      className="py-24 bg-[#0f0f0f]"
      aria-labelledby="about-heading"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery-5.jpg"
                alt="Professional Ulloa Construction crew working on home renovation in Anaheim, Orange County California"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 bg-[#1a1a1a]/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-[#2a2a2a]">
                <p className="text-2xl font-black text-[#f5f5f5]">20+</p>
                <p className="text-sm text-[#a0a0a0] font-medium">
                  Years in Orange County
                </p>
              </div>
            </div>

            {/* Decorative crimson block */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-500/20 rounded-2xl -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -top-4 -left-4 w-20 h-20 bg-[#2a2a2a] rounded-xl -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2
              id="about-heading"
              className="text-4xl sm:text-5xl font-black text-[#f5f5f5] leading-tight mb-6"
            >
              The Contractor You
              <br />
              <span className="text-amber-500">Actually Deserve.</span>
            </h2>
            <p className="text-[#a0a0a0] text-lg leading-relaxed mb-6">
              We are a locally-owned company based in Anaheim. We built this business on one idea: show up, do the work right, and tell people what things actually cost. CSLB Lic. #1144906.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed mb-8">
              We focus on kitchens, bathrooms, interior remodeling, and additions. The work that changes how your family lives every day. Every project gets the same care, whether it is one bathroom or a full interior renovation.
            </p>

            {/* Values */}
            <ul className="space-y-5 mb-10" role="list">
              {values.map((value) => (
                <li key={value.title} className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#f5f5f5] mb-1">
                      {value.title}
                    </h3>
                    <p className="text-[#a0a0a0] text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105"
              aria-label="Learn more about Ulloa Construction's story and team"
            >
              Our Story
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
      </div>
    </section>
  );
}
