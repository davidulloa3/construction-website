import Image from "next/image";
import Link from "next/link";
import logoSrc from "../../public/favicon.png";

const services = [
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Interior Remodeling",
  "Room Additions & ADUs",
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
    <footer className="bg-[#0a0a0a] text-[#a0a0a0]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Ulloa Construction - Home" className="inline-block mb-4">
              <Image
                src={logoSrc}
                alt="Ulloa Construction"
                style={{ width: "auto", opacity: 0.9 }}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-1">
              Professional remodeling contractor serving Orange County & surrounding areas.
            </p>
            <p className="text-xs text-amber-400 font-medium mb-4">CSLB Lic. #1144906</p>
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
                Tustin, CA — Orange County
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
                  href="tel:+17144871860"
                  className="hover:text-amber-400 transition-colors"
                  aria-label="Call us at (714) 487-1860"
                >
                  (714) 487-1860
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-amber-500 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="mailto:info@ulloa-construction.com"
                  className="hover:text-amber-400 transition-colors text-xs"
                  aria-label="Email us at info@ulloa-construction.com"
                >
                  info@ulloa-construction.com
                </a>
              </p>
              <p className="flex items-center gap-2 pt-1">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-amber-500 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
                <span className="text-xs">Call or text anytime</span>
              </p>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#f5f5f5] font-semibold text-sm uppercase tracking-wider mb-4">
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
            <h3 className="text-[#f5f5f5] font-semibold text-sm uppercase tracking-wider mb-4">
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

          {/* Credentials & Reviews */}
          <div>
            <h3 className="text-[#f5f5f5] font-semibold text-sm uppercase tracking-wider mb-4">
              Credentials
            </h3>
            {/* CSLB Badge */}
            <div className="flex items-start gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 mb-4">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              <div>
                <p className="text-[#f5f5f5] font-bold text-sm">CSLB License #1144906</p>
                <p className="text-[#a0a0a0] text-xs mt-0.5">General Contractor B · Fully Insured</p>
                <p className="text-[#a0a0a0] text-xs">Workers&apos; Comp Included</p>
              </div>
            </div>
            <a
              href="https://www.yelp.com/biz/ulloa-construction-orange-county"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#d32323] hover:bg-[#b81c1c] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
              aria-label="Read our reviews on Yelp"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Read Our Yelp Reviews
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2a2a2a] bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#a0a0a0]">
            © {new Date().getFullYear()} Ulloa Construction. All rights reserved. CSLB Lic. #1144906 — Licensed & Insured.
          </p>
          <p className="text-xs text-[#a0a0a0]">
            Serving Orange County & surrounding areas
          </p>
        </div>
      </div>
    </footer>
  );
}
