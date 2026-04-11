import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ZigzagTimeline from "@/components/ZigzagTimeline";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getRelatedServices, getService, serviceSlugList } from "@/lib/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceSlugList.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Anaheim CA | Ulloa Construction`,
    description: service.metaDescription,
    alternates: { canonical: `https://ulloa-construction.com/services/${slug}` },
  };
}

const valueCards = [
  {
    title: "20+ Years Experience",
    description: "Two decades serving Anaheim and Orange County homeowners with proven craftsmanship.",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  {
    title: "OC Licensed & Insured #1144906",
    description: "CSLB License #1144906, full general liability, and workers' compensation on every project.",
    iconPath: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
  },
  {
    title: "Seismic Code Specialists",
    description: "All work meets California seismic requirements. This is critical for Orange County remodels and additions.",
    iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z",
  },
];

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
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
    areaServed: "Orange County, CA",
    description: service.schemaDescription,
    url: `https://ulloa-construction.com/services/${slug}`,
  };

  return (
    <div className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" aria-labelledby="service-hero-heading">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={service.heroImage} alt={`${service.name} project in Anaheim and Orange County CA by Ulloa Construction`} className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" width={1600} height={900} />
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1565c0]" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="inline-flex items-center gap-2 text-[#1e88e5] text-sm font-semibold tracking-widest uppercase mb-5 bg-[#1565c0]/10 border border-[#1565c0]/20 px-4 py-1.5 rounded-full">
            CSLB Lic. #1144906. Licensed &amp; Insured.
          </p>
          <h1 id="service-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#f5f5f5] leading-tight mb-6">
            {service.name} in Anaheim<br /><span className="text-[#1e88e5]">&amp; Orange County</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-sm mx-auto sm:max-w-none">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#1565c0] hover:bg-[#1e88e5] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg shadow-[#1565c0]/25">Get a Free Estimate</Link>
            <a href="tel:+17144871860" className="inline-flex items-center justify-center gap-2 border-2 border-[#f5f5f5]/70 hover:border-[#f5f5f5] text-[#f5f5f5] font-semibold text-lg px-8 py-4 rounded-lg transition-all hover:bg-[#1a1a1a]">(714) 487-1860</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0f0f]" aria-label="Service overview">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#a0a0a0] text-lg leading-relaxed">{service.intro}</p>
          <p className="text-amber-500 font-semibold text-sm mt-6">
            Serving all of Orange County, from Anaheim to San Clemente and everywhere in between.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#1a1a1a]" aria-labelledby="included-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="included-heading" className="text-3xl font-black text-[#f5f5f5] mb-8">
            {"What's Included in Our "}<span className="text-[#1565c0]">{service.name} Service</span>
          </h2>
          <ul className="space-y-3" role="list">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-4 bg-[#0f0f0f] rounded-xl px-5 py-4 border border-[#2a2a2a]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1565c0] flex-shrink-0 mt-0.5" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                <span className="text-[#f5f5f5] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ZigzagTimeline />

      <section className="py-16 bg-[#0f0f0f]" aria-labelledby="ba-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="ba-heading" className="text-3xl font-black text-[#f5f5f5] mb-3 text-center">
            See the <span className="text-[#1565c0]">Transformation</span>
          </h2>
          <p className="text-[#a0a0a0] text-center mb-10">Drag the slider to compare. Real work by our crew in Orange County.</p>
          <BeforeAfterSlider beforeSrc={service.beforeImage} afterSrc={service.afterImage} beforeAlt={`Before ${service.name} project in Anaheim CA by Ulloa Construction`} afterAlt={`After ${service.name} completed by Ulloa Construction in Orange County CA`} />
        </div>
      </section>

      <section className="py-16 bg-[#1a1a1a]" aria-labelledby="why-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="why-heading" className="text-3xl font-black text-[#f5f5f5] mb-10 text-center">Why Choose <span className="text-[#1565c0]">Ulloa Construction</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueCards.map((card) => (
              <div key={card.title} className="bg-[#0f0f0f] rounded-2xl p-6 border border-[#2a2a2a] text-center">
                <div className="flex justify-center mb-4">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-[#1565c0]" aria-hidden="true"><path d={card.iconPath} /></svg>
                </div>
                <h3 className="font-bold text-[#f5f5f5] text-lg mb-2">{card.title}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0f0f]" aria-labelledby="lead-form-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="lead-form-heading" className="text-3xl font-black text-[#f5f5f5] mb-3 text-center">
            Get a Free {service.name} Estimate
          </h2>
          <p className="text-[#a0a0a0] text-center mb-8">Fill out the form and we&apos;ll be in touch within 24 hours. No obligation, no pressure.</p>
          <LeadCaptureForm />
        </div>
      </section>

      <section className="py-16 bg-[#1565c0]" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready to Start Your {service.name}?</h2>
          <p className="text-white/80 mb-8 text-lg">Call (714) 487-1860 or fill out the form for a free, no-obligation estimate.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f5f5f5] text-[#1565c0] font-bold px-8 py-4 rounded-xl transition-colors">Get a Free Estimate</Link>
            <a href="tel:+17144871860" className="inline-flex items-center justify-center gap-2 border-2 border-white/70 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors">(714) 487-1860</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0f0f0f]" aria-labelledby="related-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="related-heading" className="text-2xl font-black text-[#f5f5f5] mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((rel) => (
              <Link key={rel.slug} href={`/services/${rel.slug}`} className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#1565c0] rounded-xl p-6 group transition-all hover:shadow-[0_0_20px_rgba(21,101,192,0.15)]">
                <h3 className="font-bold text-[#f5f5f5] group-hover:text-[#1e88e5] transition-colors mb-2">{rel.name}</h3>
                <p className="text-[#1565c0] text-sm font-semibold flex items-center gap-1">Learn more <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" /></svg></p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
