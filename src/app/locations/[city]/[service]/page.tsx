import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { cityServiceParams, getCityService } from "@/lib/cityServices";

interface Props {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  return cityServiceParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, service } = await params;
  const data = getCityService(city, service);
  if (!data) return {};
  return {
    title: { absolute: data.template.title(data.city) },
    description: data.template.metaDescription(data.city),
    alternates: {
      canonical: `https://ulloa-construction.com/locations/${city}/${service}`,
    },
  };
}

export default async function CityServicePage({ params }: Props) {
  const { city, service } = await params;
  const data = getCityService(city, service);
  if (!data) notFound();

  const { template, city: cityName, county } = data;
  const faqs = template.faqs(cityName);
  const trustPoints = template.trustPoints(cityName);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${template.name} in ${cityName}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Ulloa Construction",
      telephone: "+1-714-487-1860",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "CSLB License",
        serialNumber: "1144906",
      },
    },
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: { "@type": "AdministrativeArea", name: county },
    },
    description: template.metaDescription(cityName),
    url: `https://ulloa-construction.com/locations/${city}/${service}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#0f0f0f]"
        aria-labelledby="city-service-hero-heading"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={template.heroImage}
          alt={`${template.name} in ${cityName}, CA by Ulloa Construction`}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          fetchPriority="high"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-[#1565c0]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="inline-flex items-center gap-2 text-[#1e88e5] text-sm font-semibold tracking-widest uppercase mb-5 bg-[#1565c0]/10 border border-[#1565c0]/20 px-4 py-1.5 rounded-full">
            CSLB Lic. #1144906. Serving {cityName}
          </p>
          <h1
            id="city-service-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#f5f5f5] leading-tight mb-6"
          >
            {template.name} in
            <br />
            <span className="text-[#1e88e5]">{cityName}, CA</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-sm mx-auto sm:max-w-none">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1565c0] hover:bg-[#1e88e5] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg shadow-[#1565c0]/25"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:+17144871860"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#f5f5f5]/70 hover:border-[#f5f5f5] text-[#f5f5f5] font-semibold text-lg px-8 py-4 rounded-lg transition-all hover:bg-[#1a1a1a]"
            >
              (714) 487-1860
            </a>
          </div>
        </div>
      </section>

      {/* ── City Intro ────────────────────────────────────────── */}
      <section
        className="py-16 bg-[#0f0f0f]"
        aria-label="About our work in this city"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-[#a0a0a0] text-lg leading-relaxed">{data.intro}</p>
          <p className="text-[#a0a0a0] text-lg leading-relaxed">
            Want the full scope of what we do? See our{" "}
            <Link
              href={template.serviceHref}
              className="text-[#1e88e5] hover:text-[#1565c0] font-semibold transition-colors"
            >
              {template.name.toLowerCase()} service page
            </Link>
            , or explore all of our work across{" "}
            <Link
              href={`/locations/${city}`}
              className="text-[#1e88e5] hover:text-[#1565c0] font-semibold transition-colors"
            >
              {cityName}
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────── */}
      <section
        className="py-16 bg-[#1a1a1a]"
        aria-labelledby="city-service-services-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="city-service-services-heading"
            className="text-3xl font-black text-[#f5f5f5] mb-3"
          >
            {template.servicesHeading} in{" "}
            <span className="text-[#1565c0]">{cityName}</span>
          </h2>
          <p className="text-[#a0a0a0] mb-10">
            Every job is performed by our own licensed crew. CSLB #1144906,
            fully insured, and based in Orange County.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {template.services.map((item) => (
              <div
                key={item.title}
                className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl p-5 flex items-start gap-4"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-[#1565c0] flex-shrink-0 mt-1"
                  aria-hidden="true"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <div>
                  <h3 className="font-bold text-[#f5f5f5] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why This City ─────────────────────────────────────── */}
      <section
        className="py-16 bg-[#0f0f0f]"
        aria-labelledby="city-service-why-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="city-service-why-heading"
            className="text-3xl font-black text-[#f5f5f5] mb-10 text-center"
          >
            Why {cityName} Homeowners Choose{" "}
            <span className="text-[#1565c0]">Ulloa Construction</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustPoints.map((card) => (
              <div
                key={card.title}
                className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2a2a2a] flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7 fill-[#1565c0]"
                    aria-hidden="true"
                  >
                    <path d={card.iconPath} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#f5f5f5] text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section
        className="py-16 bg-[#1a1a1a]"
        aria-labelledby="city-service-faq-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="city-service-faq-heading"
            className="text-3xl font-black text-[#f5f5f5] mb-3 text-center"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[#a0a0a0] text-center mb-10">
            Common questions from {cityName} homeowners about{" "}
            {template.name.toLowerCase()}.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl overflow-hidden group"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-[#f5f5f5] font-semibold hover:text-amber-400 transition-colors">
                  {faq.q}
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current flex-shrink-0 ml-3 text-[#1565c0] group-open:rotate-180 transition-transform"
                    aria-hidden="true"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-[#a0a0a0] leading-relaxed border-t border-[#2a2a2a] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead Form ─────────────────────────────────────────── */}
      <section
        className="py-16 bg-[#0f0f0f]"
        aria-labelledby="city-service-form-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="city-service-form-heading"
            className="text-3xl font-black text-[#f5f5f5] mb-3 text-center"
          >
            Get a Free {template.name} Estimate in {cityName}
          </h2>
          <p className="text-[#a0a0a0] text-center mb-8">
            Fill out the form and we&apos;ll be in touch within 24 hours. No
            obligation, no pressure.
          </p>
          <LeadCaptureForm />
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="py-16 bg-[#1565c0]" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {template.name} in {cityName} Starts Here
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Call (714) 487-1860 or fill out the form for a free, no-obligation
            estimate.
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
