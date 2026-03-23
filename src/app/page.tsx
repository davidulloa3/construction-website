import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSnapshot from "@/components/AboutSnapshot";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Ulloa Construction | Anaheim, CA Contractor",
  description:
    "Ulloa Construction — 20+ years serving Anaheim and all of Orange County, CA. Flooring, remodeling, kitchen renovations, roofing & more. Licensed & insured. Call (657) 400-2896.",
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
        "Licensed and insured general contractor serving Anaheim and Orange County, CA for 20+ years. Specializing in remodeling, flooring, kitchen renovations, bathrooms, new construction, roofing, and more.",
      url: "https://ulloaonstruction.com",
      telephone: "+1-657-400-2896",
      priceRange: "$$",
      image: "https://ulloaonstruction.com/api/image?type=hero",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Anaheim",
        addressRegion: "CA",
        postalCode: "92806",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.8353,
        longitude: -117.9145,
      },
      areaServed: [
        { "@type": "City", name: "Anaheim", containedInPlace: { "@type": "State", name: "California" } },
        { "@type": "City", name: "Brea" },
        { "@type": "City", name: "Buena Park" },
        { "@type": "City", name: "Fullerton" },
        { "@type": "City", name: "Garden Grove" },
        { "@type": "City", name: "Huntington Beach" },
        { "@type": "City", name: "Irvine" },
        { "@type": "City", name: "Orange" },
        { "@type": "City", name: "Santa Ana" },
        { "@type": "City", name: "Yorba Linda" },
        { "@type": "City", name: "San Juan Capistrano" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "07:30",
          closes: "17:30",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Construction Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flooring Installation", areaServed: "Orange County, CA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Remodeling", areaServed: "Orange County, CA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Renovation", areaServed: "Orange County, CA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Remodel", areaServed: "Orange County, CA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Home Construction", areaServed: "Orange County, CA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Room Additions", areaServed: "Orange County, CA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roofing", areaServed: "Orange County, CA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Painting", areaServed: "Orange County, CA" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "87",
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
      <ServicesGrid />
      <AboutSnapshot />
      <FeaturedProjects />
      <Testimonials />
      <ServiceAreaSection />
      <CTABanner />
    </>
  );
}
