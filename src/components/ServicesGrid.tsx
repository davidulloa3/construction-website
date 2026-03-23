import Link from "next/link";

const services = [
  {
    title: "Flooring",
    description:
      "Hardwood, tile, vinyl, and carpet installation for every room in your Anaheim home.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
      </svg>
    ),
  },
  {
    title: "Remodeling",
    description:
      "Full-scale home remodeling that transforms your OC living spaces with modern design.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    title: "Kitchen Renovations",
    description:
      "Dream kitchen designs with custom cabinetry, countertops, and fixtures in Orange County.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.11.9 2 2 2h12c1.1 0 2-.89 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6V4h12v16zm-7.5-9h-1V7h-1v4h-1V7H7v4.5c0 1.17.86 2.13 2 2.4V19h2v-5.1c1.14-.27 2-1.23 2-2.4V7h-1.5v4zm4.5 0c0 1.1-.9 2-2 2s-2-.9-2-2V7h1.5v4h1V7H15v4z" />
      </svg>
    ),
  },
  {
    title: "Bathroom Upgrades",
    description:
      "Spa-like bathroom renovations with modern tile, fixtures, and custom vanities.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M7 6c0-.55-.45-1-1-1s-1 .45-1 1v13H3v2h18v-2h-2V9H8V6h-1zm1 3v10H5v-10h3zm6 0v10h-4V9h4zm5 0v10h-3V9h3z" />
      </svg>
    ),
  },
  {
    title: "New Construction",
    description:
      "Custom home builds from the ground up — built to SoCal seismic and code standards.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2v-2h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
      </svg>
    ),
  },
  {
    title: "Additions",
    description:
      "Expand your living space with well-designed room and ADU additions in Orange County.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
      </svg>
    ),
  },
  {
    title: "Siding",
    description:
      "Durable siding installation and replacement that protects and beautifies your home.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
      </svg>
    ),
  },
  {
    title: "Window Installation",
    description:
      "Energy-efficient window installation and replacement for Anaheim and OC homes.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M20 3H4v18h16V3zm-2 2v7h-5V5h5zm-7 0v7H6V5h5zm-5 9h5v5H6v-5zm7 5v-5h5v5h-5z" />
      </svg>
    ),
  },
  {
    title: "Door Installation",
    description:
      "Interior and exterior door installation with precision fitting and quality hardware.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-8-6v-2h2v2h-2z" />
      </svg>
    ),
  },
  {
    title: "Drywall",
    description:
      "Professional drywall installation, repair, and finishing for flawless walls.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
    ),
  },
  {
    title: "Roofing",
    description:
      "Complete roofing solutions — installation, repair, and replacement for SoCal homes.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M12 3L2 12h3v9h6v-5h2v5h6v-9h3L12 3zm-1 13v-3h2v3h-2zm1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
      </svg>
    ),
  },
  {
    title: "Painting",
    description:
      "Interior and exterior painting with premium finishes and meticulous preparation.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="py-24 bg-white"
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
            className="text-4xl sm:text-5xl font-black text-slate-900 mb-4"
          >
            Comprehensive Construction
            <br />
            <span className="text-amber-500">Services in Orange County</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            From Anaheim to San Juan Capistrano, we handle every phase of your
            construction project with local expertise and proven craftsmanship.
          </p>
        </div>

        {/* Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          role="list"
        >
          {services.map((service) => (
            <li key={service.title}>
              <Link
                href="/services"
                className="group flex flex-col h-full bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-amber-200 hover:-translate-y-1 transition-all duration-300"
                aria-label={`Learn more about ${service.title} services in Orange County`}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center mb-4 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">
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
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            aria-label="View all construction services offered by Ulloa Construction"
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
