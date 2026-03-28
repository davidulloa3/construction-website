import Link from "next/link";

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Layout changes, custom or semi-custom cabinets, countertops, backsplashes, lighting, and flooring built around how your family really uses the space.",
    href: "/services#kitchen",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.11.9 2 2 2h12c1.1 0 2-.89 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6V4h12v16zm-7.5-9h-1V7h-1v4h-1V7H7v4.5c0 1.17.86 2.13 2 2.4V19h2v-5.1c1.14-.27 2-1.23 2-2.4V7h-1.5v4zm4.5 0c0 1.1-.9 2-2 2s-2-.9-2-2V7h1.5v4h1V7H15v4z" />
      </svg>
    ),
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Walk-in showers, custom tile, vanities, waterproofing, and ventilation — designed for both durability and a calm, spa-like feel.",
    href: "/services#bathroom",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M7 6c0-.55-.45-1-1-1s-1 .45-1 1v13H3v2h18v-2h-2V9H8V6h-1zm1 3v10H5v-10h3zm6 0v10h-4V9h4zm5 0v10h-3V9h3z" />
      </svg>
    ),
  },
  {
    title: "Interior Remodeling",
    description:
      "Flooring, doors, trim, paint, lighting, and wall changes that modernize your home while keeping a clean, organized work environment.",
    href: "/services#interior",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    title: "Room Additions & ADUs",
    description:
      "Permits, planning, and construction for additions, garage conversions, and ADUs that blend seamlessly with your existing home.",
    href: "/services#additions",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="py-24 bg-[#0f0f0f]"
      aria-labelledby="services-heading"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl font-black text-[#f5f5f5] mb-4"
          >
            Focused on What
            <br />
            <span className="text-amber-500">Matters Most</span>
          </h2>
          <p className="text-lg text-[#a0a0a0] max-w-2xl mx-auto">
            We specialize in the remodeling work that transforms how you live —
            kitchens, bathrooms, interiors, and additions done right.
          </p>
        </div>

        {/* Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
        >
          {services.map((service) => (
            <li key={service.title}>
              <Link
                href={service.href}
                className="group flex flex-col h-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-amber-500 hover:shadow-[0_0_24px_rgba(21,101,192,0.15)] hover:-translate-y-1 transition-all duration-300"
                aria-label={`Learn more about ${service.title}`}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-[#f5f5f5] font-bold text-lg mb-2 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-amber-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            aria-label="View all services offered by Ulloa Construction"
          >
            View All Services
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
