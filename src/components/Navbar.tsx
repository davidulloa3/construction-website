"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoSrc from "../../public/favicon.png";

const serviceLinks = [
  { href: "/services/kitchen-remodeling", label: "Kitchen Remodeling" },
  { href: "/services/bathroom-renovation", label: "Bathroom Renovation" },
  { href: "/services/flooring", label: "Flooring Installation" },
  { href: "/services/roofing", label: "Roofing" },
  { href: "/services/painting", label: "Interior & Exterior Painting" },
  { href: "/services/drywall", label: "Drywall Installation & Repair" },
  { href: "/services/window-installation", label: "Window Installation" },
  { href: "/services/door-installation", label: "Door Installation" },
  { href: "/services/siding", label: "Siding Installation & Replacement" },
  { href: "/services/room-additions", label: "Room Additions & ADUs" },
  { href: "/services/new-construction", label: "New Home Construction" },
  { href: "/services/interior-remodeling", label: "Interior Remodeling" },
];

const locationLinks = [
  { href: "/locations/anaheim", label: "Anaheim" },
  { href: "/locations/fullerton", label: "Fullerton" },
  { href: "/locations/orange", label: "Orange" },
  { href: "/locations/irvine", label: "Irvine" },
  { href: "/locations/huntington-beach", label: "Huntington Beach" },
  { href: "/locations/santa-ana", label: "Santa Ana" },
];

function DropdownMenu({ items, onClose }: { items: { href: string; label: string }[]; onClose: () => void }) {
  return (
    <ul
      className="absolute top-full left-0 mt-1 w-56 bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl shadow-xl shadow-black/40 py-2 z-50"
      role="menu"
    >
      {items.map((item) => (
        <li key={item.href} role="none">
          <Link
            href={item.href}
            className="block px-4 py-2 text-sm text-[#a0a0a0] hover:text-[#f5f5f5] hover:bg-[#1a1a1a] transition-colors"
            role="menuitem"
            onClick={onClose}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  const servicesRef = useRef<HTMLLIElement>(null);
  const locationsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (locationsRef.current && !locationsRef.current.contains(e.target as Node)) {
        setLocationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f0f]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="Ulloa Construction - Home" className="flex-shrink-0">
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
          <li>
            <Link
              href="/"
              className="text-[#a0a0a0] hover:text-[#f5f5f5] px-3 py-2 rounded text-sm font-medium transition-colors"
            >
              Home
            </Link>
          </li>

          {/* Services dropdown */}
          <li ref={servicesRef} className="relative">
            <button
              type="button"
              className="flex items-center gap-1 text-[#a0a0a0] hover:text-[#f5f5f5] px-3 py-2 rounded text-sm font-medium transition-colors"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => { setServicesOpen(!servicesOpen); setLocationsOpen(false); }}
            >
              Services
              <svg viewBox="0 0 24 24" className={`w-3.5 h-3.5 fill-current transition-transform ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {servicesOpen && (
              <DropdownMenu items={serviceLinks} onClose={() => setServicesOpen(false)} />
            )}
          </li>

          {/* Locations dropdown */}
          <li ref={locationsRef} className="relative">
            <button
              type="button"
              className="flex items-center gap-1 text-[#a0a0a0] hover:text-[#f5f5f5] px-3 py-2 rounded text-sm font-medium transition-colors"
              aria-expanded={locationsOpen}
              aria-haspopup="true"
              onClick={() => { setLocationsOpen(!locationsOpen); setServicesOpen(false); }}
            >
              Locations
              <svg viewBox="0 0 24 24" className={`w-3.5 h-3.5 fill-current transition-transform ${locationsOpen ? "rotate-180" : ""}`} aria-hidden="true">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {locationsOpen && (
              <DropdownMenu items={locationLinks} onClose={() => setLocationsOpen(false)} />
            )}
          </li>

          <li>
            <Link href="/about" className="text-[#a0a0a0] hover:text-[#f5f5f5] px-3 py-2 rounded text-sm font-medium transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-[#a0a0a0] hover:text-[#f5f5f5] px-3 py-2 rounded text-sm font-medium transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-[#a0a0a0] hover:text-[#f5f5f5] px-3 py-2 rounded text-sm font-medium transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+16574002896"
            className="hidden sm:flex items-center gap-1.5 text-amber-400 hover:text-amber-400/80 text-sm font-medium transition-colors"
            aria-label="Call Ulloa Construction at (657) 400-2896"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            (657) 400-2896
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
            className="md:hidden text-[#f5f5f5] p-2 rounded hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#0f0f0f]/98 backdrop-blur-md border-t border-[#2a2a2a] max-h-[80vh] overflow-y-auto"
        >
          <ul className="px-4 py-4 space-y-1" role="list">
            <li>
              <Link href="/" className="block text-[#a0a0a0] hover:text-[#f5f5f5] hover:bg-white/10 px-4 py-2.5 rounded text-base font-medium transition-colors" onClick={closeAll}>
                Home
              </Link>
            </li>

            {/* Mobile Services accordion */}
            <li>
              <button
                type="button"
                className="w-full flex items-center justify-between text-[#a0a0a0] hover:text-[#f5f5f5] hover:bg-white/10 px-4 py-2.5 rounded text-base font-medium transition-colors"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen}
              >
                Services
                <svg viewBox="0 0 24 24" className={`w-4 h-4 fill-current transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} aria-hidden="true">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <ul className="mt-1 ml-4 space-y-1">
                  {serviceLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="block text-[#a0a0a0] hover:text-[#f5f5f5] hover:bg-white/10 px-4 py-2 rounded text-sm transition-colors" onClick={closeAll}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Mobile Locations accordion */}
            <li>
              <button
                type="button"
                className="w-full flex items-center justify-between text-[#a0a0a0] hover:text-[#f5f5f5] hover:bg-white/10 px-4 py-2.5 rounded text-base font-medium transition-colors"
                onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                aria-expanded={mobileLocationsOpen}
              >
                Locations
                <svg viewBox="0 0 24 24" className={`w-4 h-4 fill-current transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}`} aria-hidden="true">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              {mobileLocationsOpen && (
                <ul className="mt-1 ml-4 space-y-1">
                  {locationLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="block text-[#a0a0a0] hover:text-[#f5f5f5] hover:bg-white/10 px-4 py-2 rounded text-sm transition-colors" onClick={closeAll}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link href="/about" className="block text-[#a0a0a0] hover:text-[#f5f5f5] hover:bg-white/10 px-4 py-2.5 rounded text-base font-medium transition-colors" onClick={closeAll}>
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="block text-[#a0a0a0] hover:text-[#f5f5f5] hover:bg-white/10 px-4 py-2.5 rounded text-base font-medium transition-colors" onClick={closeAll}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block text-[#a0a0a0] hover:text-[#f5f5f5] hover:bg-white/10 px-4 py-2.5 rounded text-base font-medium transition-colors" onClick={closeAll}>
                Contact
              </Link>
            </li>
            <li className="pt-2">
              <Link href="/contact" className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-3 rounded transition-colors" onClick={closeAll}>
                Get a Free Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
