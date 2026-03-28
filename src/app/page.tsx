import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import AboutSnapshot from "@/components/AboutSnapshot";
import FeaturedProjects from "@/components/FeaturedProjects";
import TransformationsSection from "@/components/TransformationsSection";
import Testimonials from "@/components/Testimonials";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Ulloa Construction | Tustin & Orange County Remodeling Contractor",
  description:
    "Ulloa Construction — Professional Tustin remodeling contractor. Kitchens, bathrooms, interior remodeling & room additions in Orange County, CA. CSLB Lic. #1144906. Call (714) 487-1860.",
  alternates: {
    canonical: "https://ulloaonstruction.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://ulloaonstruction.com/#business",
      name: "Ulloa Construction",
      description:
        "Licensed and insured general contractor serving Tustin and Orange County, CA. Specializing in kitchen remodeling, bathroom remodeling, interior remodeling, and room additions/ADUs. CSLB Lic. #1144906.",
      url: "https://ulloaonstruction.com",
      telephone: "+1-714-487-1860",
      email: "info@ulloa-construction.com",
      priceRange: "$$",
      image: "https://ulloaonstruction.com/images/hero.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tustin",
        addressRegion: "CA",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Tustin", containedInPlace: { "@type": "State", name: "California" } },
        { "@type": "City", name: "Irvine" },
        { "@type": "City", name: "Anaheim" },
        { "@type": "City", name: "Fullerton" },
        { "@type": "City", name: "Garden Grove" },
        { "@type": "City", name: "Santa Ana" },
        { "@type": "City", name: "Yorba Linda" },
        { "@type": "City", name: "Orange" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Remodeling Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Remodeling", areaServed: "Orange County, CA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Remodeling", areaServed: "Orange County, CA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Remodeling", areaServed: "Orange County, CA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Room Additions & ADUs", areaServed: "Orange County, CA" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "3",
        bestRating: "5",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustBar />
      <PainPointsSection />
      <ServicesGrid />
      <ProcessSection />
      <ProcessTimeline />
      <AboutSnapshot />
      <FeaturedProjects />
      <TransformationsSection />
      <Testimonials />
      <ServiceAreaSection />
      <CTABanner />
    </>
  );
}
