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
    "Ulloa Construction — Professional Anaheim remodeling contractor. Kitchens, bathrooms, interior remodeling & room additions in Orange County, CA. CSLB Lic. #1144906. Call (657) 400-2896.",
  alternates: { canonical: "https://ulloaonstruction.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://ulloaonstruction.com/#business",
      name: "Ulloa Construction",
      description:
        "Licensed and insured general contractor serving Anaheim and Orange County, CA. Specializing in kitchen remodeling, bathroom remodeling, interior remodeling, and room additions/ADUs. CSLB Lic. #1144906.",
      url: "https://ulloaonstruction.com",
      telephone: "+1-657-400-2896",
      email: "info@ulloa-construction.com",
      priceRange: "$$",
      image: "https://ulloaonstruction.com/images/hero.jpg",
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
        { "@type": "City", name: "Anaheim" },
        { "@type": "City", name: "Fullerton" },
        { "@type": "City", name: "Orange" },
        { "@type": "City", name: "Irvine" },
        { "@type": "City", name: "Huntington Beach" },
        { "@type": "City", name: "Santa Ana" },
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
