import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesGrid from "@/components/ServicesGrid";
import ZigzagTimeline from "@/components/ZigzagTimeline";
import AboutSnapshot from "@/components/AboutSnapshot";
import FeaturedProjects from "@/components/FeaturedProjects";
import TransformationsSection from "@/components/TransformationsSection";
import Testimonials from "@/components/Testimonials";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Ulloa Construction | Anaheim & Orange County Remodeling Contractor",
  description:
    "Ulloa Construction. Professional Anaheim remodeling contractor. Kitchens, bathrooms, interior remodeling and room additions in Orange County, CA. CSLB Lic. #1144906. Call (714) 487-1860.",
  alternates: { canonical: "https://www.ulloa-construction.com" },
};

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a kitchen remodel cost in Orange County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen remodels in Orange County typically range from $15,000 to $80,000 depending on scope. A budget cosmetic refresh runs $15,000 to $25,000. A mid-range full remodel runs $30,000 to $60,000. High-end custom kitchens can exceed $80,000. Ulloa Construction provides free written estimates for all Orange County kitchen projects.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a bathroom remodel cost in Anaheim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bathroom remodel costs in Anaheim and Orange County range from $10,000 for a cosmetic update to $65,000 or more for a full master bathroom overhaul with a walk-in shower, soaking tub, and heated floors. A mid-range full remodel typically runs $18,000 to $35,000. Call (714) 487-1860 for a free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need permits for a remodel in Orange County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most remodeling projects in Orange County that involve electrical, plumbing, or structural changes require permits. This includes kitchen remodels, bathroom renovations, room additions, and ADU construction. Ulloa Construction handles all permit applications and city inspections on your behalf so you don't have to navigate the building department yourself.",
      },
    },
    {
      "@type": "Question",
      name: "How do I verify a contractor's license in California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to cslb.ca.gov and enter the contractor's CSLB license number. You will see whether the license is active, what work classifications it covers, and whether there are any disciplinary actions on file. Ulloa Construction holds CSLB License #1144906, which is active, in good standing, and verifiable at cslb.ca.gov right now.",
      },
    },
    {
      "@type": "Question",
      name: "Can I build an ADU on my Orange County property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most single-family properties in Orange County can accommodate at least one ADU under current California law. In addition to a standard ADU up to 1,200 square feet, many properties qualify for a Junior ADU (JADU) up to 500 square feet converted from existing interior space. Ulloa Construction evaluates your specific property and lot during a free initial consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a room addition take in Anaheim or Orange County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Room addition projects in Orange County typically take 4 to 9 months from initial design through final inspection. Planning and permit processing takes 1 to 3 months, and construction takes 2 to 6 months depending on scope. Ulloa Construction provides a detailed schedule before work begins so you know what to expect at every phase.",
      },
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Contractor"],
      "@id": "https://www.ulloa-construction.com/#business",
      name: "Ulloa Construction",
      description:
        "Licensed and insured general contractor serving Anaheim and Orange County, CA. Specializing in kitchen remodeling, bathroom remodeling, interior remodeling, and room additions/ADUs. CSLB Lic. #1144906.",
      url: "https://www.ulloa-construction.com",
      telephone: "+1-714-487-1860",
      email: "info@ulloa-construction.com",
      priceRange: "$$",
      image: "https://www.ulloa-construction.com/images/hero.jpg",
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
      areaServed: [
        { "@type": "City", name: "Aliso Viejo" },
        { "@type": "City", name: "Anaheim" },
        { "@type": "City", name: "Brea" },
        { "@type": "City", name: "Buena Park" },
        { "@type": "City", name: "Costa Mesa" },
        { "@type": "City", name: "Cypress" },
        { "@type": "City", name: "Dana Point" },
        { "@type": "City", name: "Fountain Valley" },
        { "@type": "City", name: "Fullerton" },
        { "@type": "City", name: "Garden Grove" },
        { "@type": "City", name: "Huntington Beach" },
        { "@type": "City", name: "Irvine" },
        { "@type": "City", name: "La Habra" },
        { "@type": "City", name: "La Palma" },
        { "@type": "City", name: "Laguna Beach" },
        { "@type": "City", name: "Laguna Hills" },
        { "@type": "City", name: "Laguna Niguel" },
        { "@type": "City", name: "Laguna Woods" },
        { "@type": "City", name: "Lake Forest" },
        { "@type": "City", name: "Los Alamitos" },
        { "@type": "City", name: "Mission Viejo" },
        { "@type": "City", name: "Newport Beach" },
        { "@type": "City", name: "Orange" },
        { "@type": "City", name: "Placentia" },
        { "@type": "City", name: "Rancho Santa Margarita" },
        { "@type": "City", name: "San Clemente" },
        { "@type": "City", name: "San Juan Capistrano" },
        { "@type": "City", name: "Santa Ana" },
        { "@type": "City", name: "Seal Beach" },
        { "@type": "City", name: "Stanton" },
        { "@type": "City", name: "Tustin" },
        { "@type": "City", name: "Villa Park" },
        { "@type": "City", name: "Westminster" },
        { "@type": "City", name: "Yorba Linda" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Remodeling Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Remodeling", areaServed: "Orange County, CA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Renovation", areaServed: "Orange County, CA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Remodeling", areaServed: "Orange County, CA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Room Additions & ADUs", areaServed: "Orange County, CA" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "80",
        bestRating: "5",
      },
      sameAs: [
        "https://www.yelp.com/biz/ulloa-construction-anaheim",
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd).replace(/</g, "\\u003c") }}
      />
      <HeroSection />
      <TrustBar />
      <PainPointsSection />
      <ServicesGrid />
      <ZigzagTimeline />
      <AboutSnapshot />
      <FeaturedProjects />
      <TransformationsSection />
      <Testimonials />
      <ServiceAreaSection />
      <CTABanner />
    </>
  );
}
