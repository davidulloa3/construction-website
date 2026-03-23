import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service construction in Anaheim & Orange County, CA — flooring, remodeling, kitchen renovations, bathrooms, new construction, roofing, painting, and more. Call (657) 400-2896.",
  alternates: {
    canonical: "https://ulloaonstruction.com/services",
  },
};

const services = [
  {
    title: "Flooring",
    slug: "flooring",
    description:
      "From hardwood to luxury vinyl plank, we install all types of flooring in Anaheim and Orange County homes. Our team ensures precise measurements, proper underlayment, and flawless installation that stands up to SoCal living.",
    details: [
      "Hardwood & engineered wood",
      "Luxury vinyl plank (LVP)",
      "Tile & stone",
      "Carpet installation",
      "Subfloor repair & leveling",
    ],
    imageType: "commercial",
  },
  {
    title: "Remodeling",
    slug: "remodeling",
    description:
      "Complete home remodels that transform your Orange County property. Whether it's a full interior renovation or targeted upgrades, our Anaheim-based team handles every aspect with local expertise.",
    details: [
      "Full interior renovations",
      "Open-concept conversions",
      "Structural modifications",
      "Permit acquisition",
      "California building code compliance",
    ],
    imageType: "crew",
  },
  {
    title: "Kitchen Renovations",
    slug: "kitchen",
    description:
      "Dream kitchens are our specialty. From custom cabinetry to quartz countertops, we create beautiful, functional kitchens for Anaheim and OC homeowners that blend Southern California style with practical design.",
    details: [
      "Custom cabinet design & installation",
      "Countertop installation (quartz, granite, marble)",
      "Tile backsplash",
      "Kitchen island construction",
      "Appliance installation",
    ],
    imageType: "kitchen",
  },
  {
    title: "Bathroom Upgrades",
    slug: "bathroom",
    description:
      "Spa-inspired bathroom renovations for Orange County homes. We handle everything from simple fixture upgrades to complete gut renovations with heated floors, frameless glass, and custom vanities.",
    details: [
      "Complete gut renovations",
      "Shower & tub installation",
      "Custom vanity & mirror",
      "Heated floor systems",
      "Waterproofing & tile work",
    ],
    imageType: "bathroom",
  },
  {
    title: "New Construction",
    slug: "new-construction",
    description:
      "Custom homes built from the ground up in Anaheim and across Orange County. Our team has deep knowledge of California seismic codes and SoCal building requirements to ensure your new home is built right.",
    details: [
      "Custom home design consultation",
      "Foundation & framing",
      "Seismic compliance (California standards)",
      "Energy-efficient systems",
      "Full project management",
    ],
    imageType: "frame",
  },
  {
    title: "Additions",
    slug: "additions",
    description:
      "Expand your living space with seamlessly integrated room additions, ADUs, and second stories. We handle the permits, engineering, and construction to add value to your Orange County home.",
    details: [
      "Room additions",
      "ADU (Accessory Dwelling Units)",
      "Second story additions",
      "Garage conversions",
      "Sunrooms & patios",
    ],
    imageType: "frame",
  },
  {
    title: "Siding",
    slug: "siding",
    description:
      "Protect and beautify your Anaheim home with new siding installation. We work with all major siding materials and ensure proper installation that holds up to SoCal weather conditions.",
    details: [
      "Fiber cement (Hardie Board)",
      "Vinyl siding",
      "Wood siding",
      "Stucco application",
      "Siding repair & replacement",
    ],
    imageType: "commercial",
  },
  {
    title: "Window Installation",
    slug: "windows",
    description:
      "Energy-efficient window installation for Orange County homes. New windows improve comfort, reduce energy bills, and add curb appeal — essential upgrades for Southern California homeowners.",
    details: [
      "Dual-pane & triple-pane windows",
      "Energy Star certified products",
      "Bay & bow windows",
      "Sliding & casement windows",
      "Window repair & re-glazing",
    ],
    imageType: "commercial",
  },
  {
    title: "Door Installation",
    slug: "doors",
    description:
      "Interior and exterior door installation with precision fitting and quality hardware. From front entry doors to French doors, we enhance the beauty and security of your OC home.",
    details: [
      "Entry & front doors",
      "French & sliding doors",
      "Interior door replacement",
      "Garage door installation",
      "Door frame repair",
    ],
    imageType: "commercial",
  },
  {
    title: "Drywall",
    slug: "drywall",
    description:
      "Professional drywall installation, repair, and finishing for Anaheim and Orange County projects. We deliver smooth, flawless walls that paint beautifully — from new installations to hole repairs.",
    details: [
      "New drywall installation",
      "Texture matching & repair",
      "Water damage repair",
      "Skim coat finishing",
      "Soundproofing solutions",
    ],
    imageType: "crew",
  },
  {
    title: "Roofing",
    slug: "roofing",
    description:
      "Complete roofing solutions for Southern California homes. From storm repairs to full replacements, our Anaheim-based roofing team delivers durable, beautiful results for OC homeowners.",
    details: [
      "Asphalt shingle installation",
      "Tile roofing (clay & concrete)",
      "Flat roof systems",
      "Roof repair & patching",
      "Gutter installation",
    ],
    imageType: "commercial",
  },
  {
    title: "Painting",
    slug: "painting",
    description:
      "Interior and exterior painting with premium materials and meticulous prep. Our Anaheim painters deliver clean lines, smooth finishes, and color consultation for every Orange County project.",
    details: [
      "Interior painting",
      "Exterior painting",
      "Cabinet refinishing",
      "Deck staining & sealing",
      "Color consultation",
    ],
    imageType: "crew",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="bg-slate-900 py-20 relative overflow-hidden" aria-labelledby="services-page-heading">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-amber-500/20 to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">What We Offer</p>
          <h1 id="services-page-heading" className="text-5xl sm:text-6xl font-black text-white mb-6">
            Construction Services in
            <span className="text-amber-400"> Anaheim & Orange County</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            From flooring to full home builds, Ulloa Construction offers comprehensive construction
            services throughout Orange County, CA. 20+ years of local expertise, seismic code knowledge,
            and proven craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16574002896"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              aria-label="Call Ulloa Construction at (657) 400-2896"
            >
              Call (657) 400-2896
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-white" aria-label="Detailed services list">
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
                  <div className="rounded-2xl overflow-hidden shadow-xl aspect-[16/10] bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/api/image?type=${service.imageType}`}
                      alt={`${service.title} service in Anaheim and Orange County, CA`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "lg:order-1" : ""} flex flex-col justify-center`}>
                  <h2
                    id={`service-${service.slug}`}
                    className="text-3xl font-black text-slate-900 mb-4"
                  >
                    {service.title}{" "}
                    <span className="text-amber-500">in Anaheim & Orange County</span>
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2.5 mb-8" role="list" aria-label={`${service.title} service details`}>
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 text-slate-700">
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
      <section className="bg-slate-900 py-16" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to Start Your Orange County Project?
          </h2>
          <p className="text-slate-400 mb-8">
            Call our Anaheim, CA team today for a free, no-obligation estimate on any construction
            service throughout Orange County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16574002896"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              aria-label="Call (657) 400-2896"
            >
              (657) 400-2896
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Contact Us Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
