import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ulloa Construction specializes in kitchen remodeling, bathroom remodeling, interior remodeling, and room additions/ADUs throughout Orange County, CA. CSLB Lic. #1144906. Call (714) 487-1860.",
  alternates: {
    canonical: "https://ulloa-construction.com/services",
  },
};

const services = [
  {
    title: "Kitchen Remodeling",
    slug: "kitchen",
    description:
      "A kitchen remodel is one of the highest-impact projects you can do for your home — and it shows in how your family actually uses the space every day. We handle layout changes, custom or semi-custom cabinets, countertops, backsplashes, lighting, and flooring. Every decision is built around how you live.",
    details: [
      "Layout changes & open-concept conversions",
      "Custom and semi-custom cabinet design & installation",
      "Countertop installation (quartz, granite, marble)",
      "Tile backsplash installation",
      "Lighting design & electrical updates",
      "Flooring throughout",
    ],
    image: "/images/gallery-1.jpg",
  },
  {
    title: "Bathroom Remodeling",
    slug: "bathroom",
    description:
      "Your bathroom should feel calm and clean — not cramped and outdated. We specialize in walk-in showers, custom tile work, vanities, waterproofing, and ventilation. Every detail is designed for durability and a spa-like feel that holds up over time.",
    details: [
      "Walk-in shower design & construction",
      "Custom tile installation (floor, walls, niches)",
      "Vanity, mirror, and fixture selection & install",
      "Waterproofing and moisture barriers",
      "Ventilation & lighting upgrades",
      "Freestanding tub installation",
    ],
    image: "/images/gallery-3.jpg",
  },
  {
    title: "Interior Remodeling",
    slug: "interior",
    description:
      "Sometimes it's not one room — it's the whole interior that needs to feel cohesive and updated. We handle flooring, doors, trim, paint, lighting, and wall changes that modernize your home while keeping a clean, organized work environment for your family.",
    details: [
      "Flooring installation (hardwood, LVP, tile, carpet)",
      "Interior door replacement & trim work",
      "Paint and wall texture",
      "Lighting and electrical updates",
      "Accent walls and custom built-ins",
      "Open-concept wall removal",
    ],
    image: "/images/gallery-8.jpg",
  },
  {
    title: "Room Additions & ADUs",
    slug: "additions",
    description:
      "Need more space but love your location? We handle the full process — permits, planning, and construction for room additions, garage conversions, and ADUs that blend seamlessly with your existing home. No juggling multiple contractors.",
    details: [
      "Room additions (master suite, family room, office)",
      "ADU (Accessory Dwelling Unit) construction",
      "Garage conversions",
      "Permit acquisition & coordination",
      "Foundation, framing, and finish work",
      "Architectural planning support",
    ],
    image: "/images/gallery-10.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="bg-[#0f0f0f] py-20 relative overflow-hidden" aria-labelledby="services-page-heading">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#1565c0]/20 to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">What We Offer</p>
          <h1 id="services-page-heading" className="text-5xl sm:text-6xl font-black text-[#f5f5f5] mb-6">
            Remodeling Services in
            <span className="text-amber-400"> Orange County, CA</span>
          </h1>
          <p className="text-xl text-[#a0a0a0] max-w-3xl mx-auto mb-4">
            We specialize in the projects that matter most — kitchens, bathrooms, interiors, and additions —
            done with honest pricing, clear communication, and craftsmanship that lasts.
          </p>
          <p className="text-sm text-amber-400 font-medium mb-8">CSLB Lic. #1144906 — Licensed & Insured</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17144871860"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              aria-label="Call Ulloa Construction at (714) 487-1860"
            >
              Call (714) 487-1860
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#f5f5f5]/30 hover:border-[#f5f5f5] text-[#f5f5f5] font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-[#0f0f0f]" aria-label="Detailed services list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => (
              <article
                key={service.slug}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                aria-labelledby={`service-${service.slug}`}
              >
                {/* Image - alternates side */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="rounded-2xl overflow-hidden shadow-xl aspect-[16/10] bg-[#2a2a2a]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={`${service.title} by Ulloa Construction in Orange County, CA`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} flex flex-col justify-center`}>
                  <h2
                    id={`service-${service.slug}`}
                    className="text-3xl font-black text-[#f5f5f5] mb-4"
                  >
                    {service.title}{" "}
                    <span className="text-amber-500">in Orange County</span>
                  </h2>
                  <p className="text-[#a0a0a0] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2.5 mb-8" role="list" aria-label={`${service.title} service details`}>
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 text-[#f5f5f5]">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500 flex-shrink-0" aria-hidden="true">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="self-start inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                    aria-label={`Get a free quote for ${service.title} in Orange County`}
                  >
                    Get a Free Quote
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f0f0f] py-16 border-t border-[#2a2a2a]" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#f5f5f5] mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-[#a0a0a0] mb-2">
            Call our team today for a free, no-obligation estimate.
          </p>
          <p className="text-amber-400 text-sm font-medium mb-8">CSLB Lic. #1144906 — Licensed & Insured</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17144871860"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              aria-label="Call (714) 487-1860"
            >
              (714) 487-1860
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-[#f5f5f5]/30 hover:border-[#f5f5f5] text-[#f5f5f5] font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
