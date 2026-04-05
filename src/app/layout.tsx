import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ulloa-construction.com"),
  title: {
    default: "Ulloa Construction | Anaheim & Orange County Remodeling Contractor",
    template: "%s | Ulloa Construction - Orange County Remodeling",
  },
  description:
    "Ulloa Construction — Professional remodeling contractor in Anaheim & Orange County, CA. Kitchens, bathrooms, interior remodeling, and room additions. CSLB Lic. #1144906. Call (714) 487-1860.",
  verification: {
  google: "KM50ZedxSPc-CqOQn6FSSKes52HZGzhoGIYtkYdU1PA",
},
keywords: [
    "construction",
    "contractor",
    "Anaheim",
    "Orange County",
    "remodeling",
    "flooring",
    "kitchen renovation",
    "bathroom remodel",
    "roofing",
    "Southern California",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ulloa-construction.com",
    siteName: "Ulloa Construction",
    title: "Ulloa Construction | Anaheim & Orange County Remodeling Contractor",
    description:
      "Professional remodeling contractor in Orange County. Kitchens, bathrooms, interiors & additions. CSLB Lic. #1144906. Call (714) 487-1860.",
    images: [
      { url: "/favicon.png", alt: "Ulloa Construction" },
      {
        url: "/images/hero.jpg",
        width: 1600,
        height: 900,
        alt: "Ulloa Construction - Anaheim CA Contractor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulloa Construction | Anaheim & Orange County Remodeling Contractor",
    description:
      "Professional remodeling contractor in Orange County. Kitchens, bathrooms, interiors & additions. CSLB Lic. #1144906.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pb-14 lg:pb-0">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
