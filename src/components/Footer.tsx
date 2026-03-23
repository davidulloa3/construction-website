import Link from "next/link";

const services = [
  "Flooring",
  "Remodeling",
  "Kitchen Renovations",
  "Bathroom Upgrades",
  "New Construction",
  "Additions",
  "Siding",
  "Window Installation",
  "Door Installation",
  "Drywall",
  "Roofing",
  "Painting",
];

const cities = [
  "Anaheim",
  "Brea",
  "Buena Park",
  "Fullerton",
  "Garden Grove",
  "Huntington Beach",
  "Irvine",
  "Orange",
  "Santa Ana",
  "Tustin",
  "Yorba Linda",
  "San Juan Capistrano",
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-white"
                  aria-hidden="true"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg">
                Ulloa<span className="text-amber-400"> Construction</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Built on trust, quality, and reliability. Serving Orange County
              for 20+ years.
            </p>
            {/* NAP */}
            <address className="not-italic space-y-2 text-sm">
              <p className="flex items-start gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-amber-500 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Anaheim, CA 92806
              </p>
              <p className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-amber-500 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a
                  href="tel:+16574002896"
                  className="hover:text-amber-400 transition-colors"
                  aria-label="Call us at (657) 400-2896"
                >
                  (657) 400-2896
                </a>
              </p>
              <div className="flex items-start gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-amber-500 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
                <div className="text-xs leading-relaxed">
                  <p>Mon–Sat: 7:30am–5:30pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2" role="list">
              {services.map((svc) => (
                <li key={svc}>
                  <Link
                    href="/services"
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Service Area
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Proudly serving Orange County, CA
            </p>
            <ul
              className="grid grid-cols-2 gap-x-2 gap-y-1.5"
              role="list"
              aria-label="Cities we serve in Orange County"
            >
              {cities.map((city) => (
                <li key={city} className="text-xs text-slate-400">
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Ulloa Construction. All rights
            reserved. Licensed & Insured — Anaheim, CA 92806.
          </p>
          <p className="text-xs text-slate-600">
            Serving Orange County from Brea to San Juan Capistrano
          </p>
        </div>
      </div>
    </footer>
  );
}
