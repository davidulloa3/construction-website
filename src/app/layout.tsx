import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ulloaonstruction.com"),
  title: {
    default: "Ulloa Construction | Anaheim, CA Contractor",
    template: "%s | Ulloa Construction - Anaheim, CA Contractor",
  },
  description:
    "Ulloa Construction — 20+ years serving Orange County, CA. Expert in flooring, remodeling, kitchen renovations, roofing, and more. Licensed & insured. Call (657) 400-2896.",
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
    url: "https://ulloaonstruction.com",
    siteName: "Ulloa Construction",
    title: "Ulloa Construction | Anaheim, CA Contractor",
    description:
      "20+ years serving Orange County. Expert contractor for remodeling, flooring, roofing & more. Call (657) 400-2896.",
    images: [
      {
        url: "/api/image?type=hero",
        width: 1600,
        height: 900,
        alt: "Ulloa Construction - Anaheim CA Contractor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ulloa Construction | Anaheim, CA Contractor",
    description:
      "20+ years serving Orange County. Expert contractor for remodeling, flooring, roofing & more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
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
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
