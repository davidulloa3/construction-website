import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Ulloa Construction in Anaheim, CA. Get a free estimate for your Orange County remodeling project — kitchen, bathroom, interior, or room addition. CSLB Lic. #1144906. Call (657) 400-2896.",
  alternates: {
    canonical: "https://ulloaonstruction.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
