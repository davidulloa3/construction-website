import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ZigzagTimeline from "@/components/ZigzagTimeline";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getLocation, locationSlugList, allServiceSlugs, allServiceNames } from "@/lib/locations";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return locationSlugList.map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) return {};
  return {
    title: `General Contractor in ${location.name}, CA | Ulloa Construction`,
    description: `Licensed general contractor serving ${location.name}, CA. Kitchen remodels, bathroom renovations, room additions, and all of Orange County. CSLB #1144906. Call (714) 487-1860.`,
    alternates: { canonical: `https://ulloa-construction.com/locations/${city}` },
  };
}

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ulloa Construction",
    telephone: "+1-714-487-1860",
    url: "https://ulloa-construction.com",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "CSLB License",
      serialNumber: "1144906",
    },
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.county,
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Anaheim",
      addressRegion: "CA",
      addressCountry: "US",
    },
    priceRange: "$$",
  };

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#0f0f0f]"
        aria-labelledby="location-hero-heading"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.jpg"
          alt={`General contractor work in ${location.name}, CA by Ulloa Construction`}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          fetchPriority="high"
        />
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold tracking-widest uppercase mb-5 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
            CSLB Lic. #1144906. Serving {location.county}
          </p>
          <h1
            id="location-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#f5f5f5] leading-tight mb-6"
          >
            General Contractor in
            <br />
            <span className="text-amber-400">{location.name}, CA</span>
          </h1>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto mb-8">
            {location.callout}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg shadow-amber-500/25"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:+17144871860"
              className="inline-flex items-center gap-2 border-2 border-[#f5f5f5]/70 hover:border-[#f5f5f5] text-[#f5f5f5] font-semibold text-lg px-8 py-4 rounded-lg transition-all hover:bg-[#1a1a1a]"
            >
              (714) 487-1860
            </a>
          </div>
        </div>
      </section>

      {/* ── City Copy ─────────────────────────────────────────── */}
      <section className="py-16 bg-[#0f0f0f]" aria-label="About our work in this city">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-[#a0a0a0] text-lg leading-relaxed">{location.para1}</p>
          <p className="text-[#a0a0a0] text-lg leading-relaxed">{location.para2}</p>
        </div>
      </section>

      {/* ── Services in This City ─────────────────────────────── */}
      <section className="py-16 bg-[#1a1a1a]" aria-labelledby="services-city-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="services-city-heading"
            className="text-3xl font-black text-[#f5f5f5] mb-3"
          >
            Services We Offer in{" "}
            <span className="text-amber-500">{location.name}</span>
          </h2>
          <p className="text-[#a0a0a0] mb-10">
            All work is performed by our licensed crew. CSLB #1144906, fully insured, and based in Orange County.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allServiceSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="bg-[#0f0f0f] border border-[#2a2a2a] hover:border-amber-500 rounded-xl p-5 group transition-all hover:shadow-[0_0_20px_rgba(21,101,192,0.15)]"
              >
                <h3 className="font-bold text-[#f5f5f5] group-hover:text-amber-400 transition-colors mb-1">
                  {allServiceNames[slug]}
                </h3>
                <p className="text-amber-500 text-sm font-semibold flex items-center gap-1">
                  Learn more
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────── */}
      <ZigzagTimeline />

      {/* ── Why Ulloa ─────────────────────────────────────────── */}
      <section className="py-16 bg-[#0f0f0f]" aria-labelledby="why-loc-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="why-loc-heading"
            className="text-3xl font-black text-[#f5f5f5] mb-10 text-center"
          >
            Why {location.name} Homeowners Choose{" "}
            <span className="text-amber-500">Ulloa Construction</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "20+ Years Experience",
                desc: `Two decades serving ${location.name} and Orange County homeowners with proven craftsmanship.`,
                path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
              },
              {
                title: "CSLB Licensed #1144906",
                desc: "Full general liability and workers' compensation on every project. No unlicensed subs.",
                path: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
              },
              {
                title: "Seismic Code Specialists",
                desc: "All work meets California seismic requirements. This is critical for Orange County remodels and additions.",
                path: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2a2a2a] text-center"
              >
                <div className="flex justify-center mb-4">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-amber-500" aria-hidden="true">
                    <path d={card.path} />
                  </svg>
                </div>
                <h3 className="font-bold text-[#f5f5f5] text-lg mb-2">{card.title}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead Form ─────────────────────────────────────────── */}
      <section className="py-16 bg-[#0f0f0f]" aria-labelledby="location-form-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="location-form-heading" className="text-3xl font-black text-[#f5f5f5] mb-3 text-center">
            Get a Free Estimate in {location.name}
          </h2>
          <p className="text-[#a0a0a0] text-center mb-8">
            Fill out the form and we&apos;ll be in touch within 24 hours.
          </p>
          <LeadCaptureForm />
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="py-16 bg-[#1565c0]" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Serving {location.name} &amp; Surrounding OC Communities
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Call (714) 487-1860 or fill out the form for a free, no-obligation estimate.
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
