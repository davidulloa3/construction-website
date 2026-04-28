import type { Metadata } from "next";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BathroomLeadForm from "@/components/BathroomLeadForm";

export const metadata: Metadata = {
  title: "Luxury Bathroom Remodeling in Orange County | Ulloa Construction",
  description:
    "Transform your outdated bathroom into a beautiful luxury space. Free design consultation + free estimate. Financing available. Licensed & Insured. CSLB #1144906. Serving all of Orange County, CA.",
  robots: {
    index: false,
    follow: false,
  },
};

const benefits = [
  {
    title: "Designed Around Your Lifestyle",
    description:
      "We start with how you actually use your bathroom — your morning routine, your storage needs, your style preferences — then design a space that works beautifully for you every day.",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
  },
  {
    title: "Luxury Finishes & Thoughtful Details",
    description:
      "From large-format porcelain tile and frameless glass showers to heated floors and custom vanities, every detail is chosen to make your bathroom feel like a true retreat.",
    iconPath:
      "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
  },
  {
    title: "Clear Communication From Start to Finish",
    description:
      "No surprises. Before work begins you&apos;ll have a detailed written estimate, a clear project timeline, and a direct line to our crew. We communicate daily so you&apos;re never left wondering.",
    iconPath:
      "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",
  },
  {
    title: "Licensed, Insured & Local to Orange County",
    description:
      "Ulloa Construction is CSLB Licensed #1144906 with full general liability and workers&apos; comp insurance. We&apos;ve been serving OC homeowners for years and stand behind every project we complete.",
    iconPath:
      "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Schedule Your Free Consultation",
    description:
      "Fill out the form or call us directly. We&apos;ll set a time to come see your bathroom in person — no pressure, no obligation.",
  },
  {
    number: "02",
    title: "Review Your Goals, Style & Budget",
    description:
      "We walk through your bathroom together and talk about what you love, what isn&apos;t working, and what kind of space you&apos;re imagining. We listen first.",
  },
  {
    number: "03",
    title: "Get a Clear Estimate & Design Direction",
    description:
      "You&apos;ll receive a detailed written estimate with a clear scope of work, material selections, and a realistic project timeline — before anything is committed.",
  },
  {
    number: "04",
    title: "Bring Your Bathroom Transformation to Life",
    description:
      "Our licensed crew handles everything from demo through final installation. We keep you updated daily and leave your home clean at the end of every workday.",
  },
];

const reviews = [
  {
    name: "Susan H.",
    city: "Fullerton, CA",
    rating: 5,
    text: "We were beyond pleased with the work David and his team did on remodeling our entire bathroom!! Their skills, work ethic, communication and quality of work were top notch. We felt confident in the work they were doing and they did not disappoint! The overall experience was exceptional!",
    project: "Bathroom Renovation",
    source: "Yelp",
  },
  {
    name: "Allison K.",
    city: "Tustin, CA",
    rating: 5,
    text: "Ulloa Construction has done many projects for us over the past 10 years. David and his team did our full master bathroom and laundry room remodels, and has built beautiful built-ins and custom cabinets. They always do amazing work, are efficient and keep the project area very clean. Their prices are reasonable and they are great to work with!",
    project: "Bathroom Remodel",
    source: "Yelp",
  },
  {
    name: "Joel A.",
    city: "Orange Hills, CA",
    rating: 5,
    text: "David remodeled our master bathroom and the results exceeded every expectation. From start to finish, David was fair-priced, super clean, and punctual — qualities that are surprisingly hard to find. There were no surprise charges. Everything was transparent and exactly as discussed.",
    project: "Bathroom & Kitchen Remodel",
    source: "Yelp",
  },
];

const faqs = [
  {
    question: "How much does a bathroom remodel cost in Orange County?",
    answer:
      "Most bathroom remodels in Orange County range from $15,000 to $50,000+, depending on the size of the space, the finishes you choose, and the scope of work. A focused update (new tile, vanity, fixtures) typically costs less than a full gut remodel with a custom walk-in shower. During your free consultation, we&apos;ll walk through your goals and give you a clear, itemized estimate before anything is committed.",
  },
  {
    question: "How long does a bathroom remodel usually take?",
    answer:
      "A typical full bathroom remodel takes 2–4 weeks from demo to completion, depending on the complexity of the project and material lead times. We provide a detailed project schedule before work begins so you always know what to expect.",
  },

  {
    question: "Do you handle both design and construction?",
    answer:
      "Yes. We work with you on material selections, layout, and finish choices, then manage the full construction process from demo through final installation. You get one point of contact from start to finish.",
  },
  {
    question: "Can you remodel showers, vanities, tile, and full bathrooms?",
    answer:
      "Absolutely. We handle everything from targeted updates — like a new shower enclosure, vanity swap, or tile refresh — to complete gut remodels with custom walk-in showers, heated floors, freestanding tubs, and new layouts. No project is too focused or too comprehensive.",
  },
  {
    question: "Do I need to own the home to request an estimate?",
    answer:
      "Homeownership is typical for our projects, but if you&apos;re helping a family member or in the process of purchasing a home, we&apos;re happy to talk through options. Just let us know your situation in the form and we&apos;ll follow up.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bathroom Remodeling",
  provider: {
    "@type": "LocalBusiness",
    name: "Ulloa Construction",
    telephone: "+1-714-487-1860",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Anaheim",
      addressRegion: "CA",
      addressCountry: "US",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "CSLB License",
      serialNumber: "1144906",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "80",
    },
  },
  areaServed: "Orange County, CA",
  description:
    "Luxury bathroom remodeling in Orange County, CA. Custom walk-in showers, tile, vanities, heated floors, and full gut remodels. Free design consultation and estimate. Financing available.",
  offers: {
    "@type": "Offer",
    description: "Free design consultation and free estimate",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function BathroomRemodelingPage() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── 1. HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/gallery-5.jpg"
          alt="Luxury bathroom remodel completed by Ulloa Construction in Orange County, CA"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1565c0]" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center animate-fade-in-up">
          <p className="inline-flex items-center gap-2 text-[#1e88e5] text-sm font-semibold tracking-widest uppercase mb-5 bg-[#1565c0]/10 border border-[#1565c0]/20 px-4 py-1.5 rounded-full">
            CSLB Lic. #1144906 &middot; Licensed &amp; Insured &middot; Financing Available
          </p>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#f5f5f5] leading-tight mb-6"
          >
            Luxury Bathroom Remodeling
            <br />
            <span className="text-[#1e88e5]">in Orange County</span>
          </h1>

          <p className="text-xl text-[#f5f5f5]/80 max-w-2xl mx-auto mb-10">
            Transform your outdated bathroom into a beautiful, comfortable space designed around
            your home, your style, and your routine.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-sm mx-auto sm:max-w-none mb-12">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center gap-2 bg-[#1565c0] hover:bg-[#1e88e5] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg shadow-[#1565c0]/25"
            >
              Book My Free Consultation
            </a>
            <a
              href="tel:+17144871860"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#f5f5f5]/70 hover:border-[#f5f5f5] text-[#f5f5f5] font-semibold text-lg px-8 py-4 rounded-lg transition-all hover:bg-[#1a1a1a]"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              (714) 487-1860
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#f5f5f5]/70">
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#1565c0]" aria-hidden="true">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              Licensed &amp; Insured
            </span>
            <span className="text-[#f5f5f5]/30 hidden sm:block">|</span>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-amber-400" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              5-Star Rated (80+ Reviews)
            </span>
            <span className="text-[#f5f5f5]/30 hidden sm:block">|</span>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#1565c0]" aria-hidden="true">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
              </svg>
              Financing Available
            </span>
          </div>
        </div>
      </section>

      {/* ─── 2. LEAD FORM ────────────────────────────────────────────────── */}
      <section
        id="consultation-form"
        className="py-16 bg-[#1a1a1a]"
        aria-labelledby="form-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: value prop */}
            <div>
              <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Free Design Consultation &amp; Estimate
              </p>
              <h2
                id="form-heading"
                className="text-3xl sm:text-4xl font-black text-[#f5f5f5] leading-tight mb-6"
              >
                Your bathroom should be a space
                <br />
                <span className="text-[#1e88e5]">you&apos;re proud to walk into.</span>
              </h2>
              <p className="text-[#a0a0a0] text-lg leading-relaxed mb-8">
                Ulloa Construction transforms outdated bathrooms into luxury spaces with beautiful
                finishes, thoughtful details, and a process built around your vision. We&apos;re local
                to Orange County, licensed and insured, and we&apos;ll give you a clear estimate before
                any work begins.
              </p>

              <ul className="space-y-4 mb-10" role="list">
                {[
                  "Free in-home consultation — no pressure, no obligation",
                  "Detailed written estimate before any work starts",
                  "One licensed crew from demo to final install",
                  "Financing available for qualified homeowners",
                  "CSLB #1144906 · Full liability & workers&apos; comp insurance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-[#1565c0] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span
                      className="text-[#f5f5f5] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>

              <a
                href="tel:+17144871860"
                className="inline-flex items-center gap-3 group"
                aria-label="Call Ulloa Construction at (714) 487-1860"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1565c0]/15 border border-[#1565c0]/30 flex items-center justify-center group-hover:bg-[#1565c0]/25 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1565c0]" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#f5f5f5] font-bold text-lg">(714) 487-1860</p>
                  <p className="text-[#a0a0a0] text-sm">Call or text — we answer quickly</p>
                </div>
              </a>
            </div>

            {/* Right: form */}
            <div className="bg-[#0f0f0f] rounded-3xl p-8 border border-[#2a2a2a]">
              <h3 className="text-xl font-bold text-[#f5f5f5] mb-2">
                Schedule Your Free Consultation
              </h3>
              <p className="text-[#a0a0a0] text-sm mb-6">
                Takes 60 seconds. We&apos;ll reach out within 24 hours to confirm your appointment.
              </p>
              <BathroomLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. BEFORE / AFTER ───────────────────────────────────────────── */}
      <section
        className="py-16 bg-[#0f0f0f]"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Real Work. Real Orange County Homes.
            </p>
            <h2
              id="gallery-heading"
              className="text-3xl sm:text-4xl font-black text-[#f5f5f5] mb-4"
            >
              See What&apos;s Possible{" "}
              <span className="text-[#1e88e5]">in Your Bathroom</span>
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto text-lg">
              Drag the slider to compare. This is a real bathroom we transformed — from an outdated
              space into a clean, comfortable, luxury bathroom.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <BeforeAfterSlider
              beforeSrc="/images/IMG_1088.jpg"
              afterSrc="/images/IMG_1089.jpg"
              beforeAlt="Bathroom before remodel — outdated tile and fixtures in Orange County home"
              afterAlt="Luxury bathroom after remodel by Ulloa Construction in Orange County, CA"
              label="Ulloa Construction — Orange County Bathroom Transformation"
            />
          </div>

          {/* Project gallery grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { src: "/images/20250204_150949.jpg", alt: "Bathroom remodel project by Ulloa Construction" },
              { src: "/images/20230526_175036.jpg", alt: "Custom bathroom renovation in Orange County" },
              { src: "/images/gallery-3.jpg", alt: "Luxury bathroom remodel — Ulloa Construction OC" },
              { src: "/images/gallery-4.jpg", alt: "Bathroom tile and vanity project in Orange County" },
              { src: "/images/20200922_173905.jpg", alt: "Walk-in shower remodel by Ulloa Construction" },
              { src: "/images/431122808612452824.jpeg", alt: "Master bathroom renovation in Orange County, CA" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#1a1a1a]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-[#606060] text-sm mt-6">
            Ask about our portfolio of completed bathroom projects during your free consultation.
          </p>
        </div>
      </section>

      {/* ─── 4. BENEFITS ─────────────────────────────────────────────────── */}
      <section
        className="py-16 bg-[#1a1a1a]"
        aria-labelledby="benefits-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Why Homeowners Choose Ulloa Construction
            </p>
            <h2
              id="benefits-heading"
              className="text-3xl sm:text-4xl font-black text-[#f5f5f5]"
            >
              A Better Bathroom Remodel{" "}
              <span className="text-[#1e88e5]">Experience</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((card) => (
              <div
                key={card.title}
                className="bg-[#0f0f0f] rounded-2xl p-6 border border-[#2a2a2a] hover:border-[#1565c0]/40 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1565c0]/10 border border-[#1565c0]/20 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 fill-[#1565c0]"
                      aria-hidden="true"
                    >
                      <path d={card.iconPath} />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-[#f5f5f5] text-lg mb-3 text-center">
                  {card.title}
                </h3>
                <p
                  className="text-[#a0a0a0] text-sm leading-relaxed text-center"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. PROCESS ──────────────────────────────────────────────────── */}
      <section
        className="py-16 bg-[#0f0f0f]"
        aria-labelledby="process-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Simple. Clear. No Surprises.
            </p>
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl font-black text-[#f5f5f5]"
            >
              How Your Bathroom Remodel{" "}
              <span className="text-[#1e88e5]">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2a2a2a] flex gap-5 items-start"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-[#1565c0] flex items-center justify-center flex-shrink-0 font-black text-white text-lg"
                  aria-hidden="true"
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-[#f5f5f5] text-lg mb-2">{step.title}</h3>
                  <p
                    className="text-[#a0a0a0] text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: step.description }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center gap-2 bg-[#1565c0] hover:bg-[#1e88e5] text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg shadow-[#1565c0]/25"
            >
              Start With a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ─── 6. REVIEWS ──────────────────────────────────────────────────── */}
      <section
        className="py-16 bg-[#1a1a1a]"
        aria-labelledby="reviews-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Real Reviews from Real Clients
            </p>
            <h2
              id="reviews-heading"
              className="text-3xl sm:text-4xl font-black text-[#f5f5f5] mb-4"
            >
              What Orange County Homeowners{" "}
              <span className="text-[#1e88e5]">Say About Their Bathrooms</span>
            </h2>
            <div className="inline-flex items-center gap-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-full px-6 py-3">
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-amber-400"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-[#f5f5f5] font-bold text-sm">4.9 stars</span>
              <span className="text-[#a0a0a0] text-sm">across 80+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-[#0f0f0f] rounded-2xl p-6 border border-[#2a2a2a]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="flex gap-0.5"
                    role="img"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 24 24"
                        className={`w-4 h-4 ${i < review.rating ? "fill-amber-400" : "fill-[#2a2a2a]"}`}
                        aria-hidden="true"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 bg-[#d32323]/15 text-[#d32323] text-xs font-semibold px-2 py-0.5 rounded-full">
                    Yelp
                  </span>
                </div>
                <blockquote className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                    aria-hidden="true"
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-[#f5f5f5] text-sm block">
                      {review.name}
                    </cite>
                    <span className="text-[#a0a0a0] text-xs">
                      {review.city} &middot; {review.project}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#a0a0a0] mt-8 text-sm">
            Serving homeowners throughout Orange County, from Anaheim to San Clemente.
          </p>
        </div>
      </section>

      {/* ─── 7. FAQ ──────────────────────────────────────────────────────── */}
      <section
        className="py-16 bg-[#0f0f0f]"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-black text-[#f5f5f5]"
            >
              Bathroom Remodeling{" "}
              <span className="text-[#1e88e5]">FAQs</span>
            </h2>
          </div>

          <div className="space-y-3" role="list">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden group"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-[#f5f5f5] font-semibold text-base select-none list-none hover:bg-[#0f0f0f]/40 transition-colors">
                  <span>{faq.question}</span>
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-[#1565c0] flex-shrink-0 ml-4 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p
                    className="text-[#a0a0a0] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. FINAL CTA ────────────────────────────────────────────────── */}
      <section
        className="py-24 bg-[#1565c0] relative overflow-hidden"
        aria-labelledby="final-cta-heading"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-white/30" aria-hidden="true" />
        <div className="absolute -top-32 left-1/4 w-64 h-64 bg-black/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80 font-semibold text-sm uppercase tracking-widest mb-4">
            Orange County&apos;s Trusted Bathroom Remodeler
          </p>
          <h2
            id="final-cta-heading"
            className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6"
          >
            Ready to Love Your
            <br />
            Bathroom Again?
          </h2>
          <p className="text-white/80 text-xl leading-relaxed mb-4 max-w-xl mx-auto">
            Schedule your free design consultation and estimate with Ulloa Construction today.
          </p>
          <p className="text-white/60 text-base mb-10">
            Financing available &middot; No pressure &middot; CSLB #1144906
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f5f5f5] text-[#1565c0] font-bold text-lg px-10 py-4 rounded-xl transition-all hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Book My Free Consultation
            </a>
            <a
              href="tel:+17144871860"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 hover:border-white text-white font-semibold text-lg px-10 py-4 rounded-xl transition-all w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              (714) 487-1860
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
