import type { Metadata } from "next";
import Link from "next/link";
import { type CitySlug, locations } from "@/lib/locations";

export const metadata: Metadata = {
  // `absolute` keeps this self-contained title clear of the root layout's
  // "%s | Ulloa Construction …" template.
  title: { absolute: "Orange County Service Areas | Ulloa Construction" },
  description:
    "Ulloa Construction is a licensed general contractor (CSLB #1144906) serving all 34 cities of Orange County, CA. Find your city for local kitchen, bathroom, and remodeling details.",
  alternates: { canonical: "https://ulloa-construction.com/locations" },
};

/**
 * Region groupings for the 34 OC city pages, derived from each city's existing
 * `callout` copy (North / Central / South / Coastal). Together these cover
 * every CitySlug exactly once.
 */
const regions: { title: string; blurb: string; slugs: CitySlug[] }[] = [
  {
    title: "North Orange County",
    blurb:
      "From our Anaheim home base out to Fullerton, Brea, and Yorba Linda, we work across North OC's Craftsman bungalows, mid-century ranchers, and hillside custom homes.",
    slugs: [
      "anaheim",
      "brea",
      "buena-park",
      "cypress",
      "fullerton",
      "la-habra",
      "la-palma",
      "los-alamitos",
      "placentia",
      "stanton",
      "yorba-linda",
    ],
  },
  {
    title: "Central Orange County",
    blurb:
      "Historic Old Towne Orange, the Eastside of Costa Mesa, Tustin Ranch, and the neighborhoods of Santa Ana and Garden Grove, spanning nearly every construction era in the county.",
    slugs: [
      "costa-mesa",
      "fountain-valley",
      "garden-grove",
      "orange",
      "santa-ana",
      "tustin",
      "villa-park",
      "westminster",
    ],
  },
  {
    title: "South Orange County",
    blurb:
      "Master-planned communities and hillside neighborhoods from Irvine and Mission Viejo down through Rancho Santa Margarita, Laguna Niguel, and San Clemente, where HOA design review is part of nearly every project.",
    slugs: [
      "aliso-viejo",
      "dana-point",
      "irvine",
      "laguna-beach",
      "laguna-hills",
      "laguna-niguel",
      "laguna-woods",
      "lake-forest",
      "mission-viejo",
      "rancho-santa-margarita",
      "san-clemente",
      "san-juan-capistrano",
    ],
  },
  {
    title: "Coastal Orange County",
    blurb:
      "Salt air and tight setbacks call for marine-grade materials and Coastal Commission know-how in Newport Beach, Huntington Beach, and Seal Beach.",
    slugs: ["huntington-beach", "newport-beach", "seal-beach"],
  },
];

const nameBySlug = new Map(locations.map((l) => [l.slug, l.name]));

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ulloa Construction Orange County Service Areas",
  itemListElement: locations.map((loc, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: loc.name,
    url: `https://ulloa-construction.com/locations/${loc.slug}`,
  })),
};

export default function LocationsHubPage() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ── Header ────────────────────────────────────────────── */}
      <section
        className="bg-[#0f0f0f] py-20 relative overflow-hidden"
        aria-labelledby="locations-hub-heading"
      >
        <div
          className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#1565c0]/20 to-transparent"
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Where We Work
          </p>
          <h1
            id="locations-hub-heading"
            className="text-5xl sm:text-6xl font-black text-[#f5f5f5] mb-6"
          >
            Serving All of
            <span className="text-amber-400"> Orange County, CA</span>
          </h1>
          <p className="text-xl text-[#a0a0a0] max-w-3xl mx-auto mb-4">
            Ulloa Construction is based in Anaheim and works throughout all 34
            cities of Orange County. Pick your city below for local details on
            the neighborhoods we serve, permit and HOA specifics, and the
            remodeling work we do most in your area.
          </p>
          <p className="text-sm text-amber-400 font-medium mb-8">
            CSLB Lic. #1144906. Licensed &amp; Insured
          </p>
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

      {/* ── City grids by region ──────────────────────────────── */}
      {regions.map((region, i) => (
        <section
          key={region.title}
          className={`py-16 ${i % 2 === 0 ? "bg-[#1a1a1a]" : "bg-[#0f0f0f]"}`}
          aria-labelledby={`region-${i}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id={`region-${i}`}
              className="text-3xl font-black text-[#f5f5f5] mb-3"
            >
              {region.title}
            </h2>
            <p className="text-[#a0a0a0] mb-10 max-w-3xl">{region.blurb}</p>
            <ul
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              role="list"
            >
              {region.slugs.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/locations/${slug}`}
                    className="block h-full bg-[#0f0f0f] border border-[#2a2a2a] hover:border-[#1565c0] rounded-xl p-5 group transition-all hover:shadow-[0_0_20px_rgba(21,101,192,0.15)]"
                  >
                    <h3 className="font-bold text-[#f5f5f5] group-hover:text-[#1e88e5] transition-colors mb-1">
                      {nameBySlug.get(slug)}
                    </h3>
                    <p className="text-[#1565c0] text-sm font-semibold flex items-center gap-1">
                      View area
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5 fill-current"
                        aria-hidden="true"
                      >
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                      </svg>
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="py-16 bg-[#1565c0]" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Don&apos;t See Your City? We Still Serve You.
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            We work across every corner of Orange County. Call (714) 487-1860 or
            fill out the form for a free, no-obligation estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f5f5f5] text-[#1565c0] font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:+17144871860"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              (714) 487-1860
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
