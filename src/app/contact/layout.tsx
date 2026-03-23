import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Ulloa Construction in Anaheim, CA. Get a free estimate for your Orange County construction project — remodeling, flooring, roofing, kitchen, bathroom & more. Call (657) 400-2896.",
  alternates: {
    canonical: "https://ulloaonstruction.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
