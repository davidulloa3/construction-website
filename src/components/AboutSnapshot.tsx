import Link from "next/link";

const values = [
  {
    title: "Local Expertise",
    description:
      "Deep knowledge of SoCal building codes, seismic requirements, and OC climate considerations.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    title: "Quality Craftsmanship",
    description:
      "Every project receives our full attention to detail from foundation to final finish.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Transparent Communication",
    description:
      "No surprises — clear timelines, honest pricing, and regular project updates.",
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
      className="py-24 bg-slate-50"
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
                src="/api/image?type=crew"
                alt="Professional Ulloa Construction crew working on home renovation in Anaheim, Orange County California"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <p className="text-2xl font-black text-slate-900">20+</p>
                <p className="text-sm text-slate-500 font-medium">
                  Years in Orange County
                </p>
              </div>
            </div>

            {/* Decorative amber block */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-500/20 rounded-2xl -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -top-4 -left-4 w-20 h-20 bg-slate-200 rounded-xl -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
              About Ulloa Construction
            </p>
            <h2
              id="about-heading"
              className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-6"
            >
              Your Neighbors.
              <br />
              <span className="text-amber-500">Your Builders.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Founded in Anaheim, CA, Ulloa Construction has been building and
              renovating homes across Orange County for over two decades. We're
              not a national chain — we're your community contractors who
              understand the unique needs of Southern California homes.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              From Brea to San Juan Capistrano, our team brings local expertise,
              seismic code knowledge, and a genuine commitment to every project
              we take on. When you work with us, you're working with people who
              live and work right here in OC.
            </p>

            {/* Values */}
            <ul className="space-y-5 mb-10" role="list">
              {values.map((value) => (
                <li key={value.title} className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
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
