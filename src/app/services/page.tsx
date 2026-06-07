import type { Metadata } from "next";
import Link from "next/link";

const servicesFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What remodeling services does Ulloa Construction offer in Orange County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ulloa Construction specializes in kitchen remodeling, bathroom remodeling, interior remodeling, room additions, and ADU construction throughout Anaheim and Orange County, CA. We are a licensed general contractor (CSLB #1144906) handling all trades under one contract from permits through final inspection.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a kitchen remodel cost in Orange County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen remodel costs in Orange County range from $15,000 for a cosmetic update to $80,000 or more for a full custom kitchen. A mid-range full remodel with new cabinetry, quartz countertops, and updated appliances typically runs $30,000 to $60,000. We provide free written estimates with itemized line items.",
      },
    },
    {
      "@type": "Question",
      name: "Do you pull permits for remodeling projects in Anaheim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Ulloa Construction handles all permit applications and city inspections for every project that requires permits in Anaheim and throughout Orange County. We never ask you to pull your own permits. Permit costs are included in our project proposals so there are no surprises.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a free estimate from Ulloa Construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call or text us at (714) 487-1860, or fill out the contact form on our website. We offer free, no-obligation in-home estimates throughout Anaheim and all of Orange County. We will walk the space with you, discuss your goals and budget, and provide a written estimate within a few days.",
      },
    },
    {
      "@type": "Question",
      name: "Is Ulloa Construction licensed and insured in California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ulloa Construction holds an active CSLB General Contractor license (#1144906) and carries full general liability and workers' compensation insurance on every project. You can verify our license at cslb.ca.gov in about 60 seconds.",
      },
    },
    {
      "@type": "Question",
      name: "What cities in Orange County does Ulloa Construction serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ulloa Construction serves all 34 cities in Orange County, including Anaheim, Irvine, Fullerton, Orange, Huntington Beach, Santa Ana, Brea, Yorba Linda, Mission Viejo, Laguna Niguel, Newport Beach, and more. We are based in Anaheim and work throughout the entire county.",
      },
    },
  ],
};

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
      "A kitchen remodel changes how your family actually uses the space every day. We handle layout changes, cabinets, countertops, backsplashes, lighting, and flooring. Every decision is built around how you live, not what looks good in a catalog.",
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
      "Your bathroom should feel calm and clean, not cramped and outdated. We build walk-in showers, handle the tile work, install vanities, and take care of waterproofing and ventilation. Built to last, not just to look good on day one.",
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
      "Sometimes it is not one room. It is the whole interior that needs to feel like it belongs together. We handle flooring, doors, trim, paint, lighting, and wall changes. Clean work environment, consistent progress updates throughout.",
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
      "Need more space but love where you live? We handle permits, planning, and construction for room additions, garage conversions, and ADUs that match your existing home. One contractor, one contract, no coordination headaches.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqJsonLd).replace(/</g, "\\u003c") }}
      />
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
            We specialize in the projects that matter most: kitchens, bathrooms, interiors, and additions,
            done with honest pricing, clear communication, and craftsmanship that lasts.
          </p>
          <p className="text-sm text-amber-400 font-medium mb-8">CSLB Lic. #1144906. Licensed &amp; Insured</p>
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
          <p className="text-amber-400 text-sm font-medium mb-8">CSLB Lic. #1144906. Licensed &amp; Insured</p>
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
