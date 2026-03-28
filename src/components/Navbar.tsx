"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoSrc from "../../public/logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Ulloa Construction - Home"
          className="flex-shrink-0"
        >
          <Image
            src={logoSrc}
            alt="Ulloa Construction"
            priority
            style={{ width: "auto" }}
            className="h-9 md:h-12 w-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-slate-300 hover:text-white px-3 py-2 rounded text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+17144871860"
            className="hidden sm:flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
            aria-label="Call Ulloa Construction at (714) 487-1860"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current"
              aria-hidden="true"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            (714) 487-1860
          </a>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            aria-label="Get a free quote from Ulloa Construction"
          >
            Get a Free Quote
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-white p-2 rounded hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-none stroke-current stroke-2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-none stroke-current stroke-2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-white/10"
        >
          <ul className="px-4 py-4 space-y-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-slate-200 hover:text-white hover:bg-white/10 px-4 py-2.5 rounded text-base font-medium transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-3 rounded transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
