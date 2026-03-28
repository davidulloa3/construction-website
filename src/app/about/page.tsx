import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ulloa Construction — a licensed Orange County remodeling contractor specializing in kitchens, bathrooms, interior remodeling, and additions. CSLB Lic. #1144906. Honest pricing. Clear communication.",
  alternates: {
    canonical: "https://ulloaonstruction.com/about",
  },
};

const values = [
  {
    title: "CSLB Licensed #1144906 & Fully Insured",
    description:
      "You're protected from day one. Our California contractor's license and full insurance coverage mean you can move forward with confidence.",
  },
  {
    title: "Clean, Respectful Crews",
    description:
      "We treat your home like it's our own — organized job sites, daily clean-up, and crews who show up on time and work with care.",
  },
  {
    title: "Clear, Transparent Pricing",
    description:
      "No surprise line items or hidden costs. You get a detailed scope with clear allowances so you know exactly what you're investing in before work starts.",
  },
  {
    title: "Direct Owner Communication",
    description:
      "You'll work directly with the owner throughout your project — not a sales rep or a dispatcher. Your questions get real answers from someone who cares.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#0f0f0f] py-20 relative overflow-hidden" aria-labelledby="about-page-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1565c0]/10 to-transparent opacity-50" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">Our Story</p>
              <h1 id="about-page-heading" className="text-5xl sm:text-6xl font-black text-[#f5f5f5] mb-4">
                Orange County&apos;s Trusted
                <span className="text-amber-400"> Remodeling Contractor</span>
              </h1>
              <p className="text-amber-400 text-sm font-medium mb-6">CSLB Lic. #1144906 — Licensed & Insured</p>
              <p className="text-xl text-[#a0a0a0] leading-relaxed">
                Ulloa Construction is a locally-owned remodeling company built on honest
                pricing, reliable communication, and craftsmanship that stands up over time.
                We specialize in the work that matters most — kitchens, bathrooms, interiors,
                and additions.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery-5.jpg"
                alt="Ulloa Construction completed bathroom remodel in Orange County California"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="py-10 bg-[#1a1a1a] border-y border-[#2a2a2a]" aria-label="Credentials and certifications">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "CSLB License", value: "#1144906", icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" },
              { label: "General Contractor", value: "Class B", icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" },
              { label: "OC Seismic Code", value: "Certified", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" },
              { label: "Fully Insured", value: "Liability + Workers' Comp", icon: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" },
            ].map((cred) => (
              <div key={cred.label} className="flex items-start gap-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl p-4">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path d={cred.icon} />
                </svg>
                <div>
                  <p className="text-[#f5f5f5] font-bold text-sm">{cred.value}</p>
                  <p className="text-[#a0a0a0] text-xs mt-0.5">{cred.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#0f0f0f]" aria-labelledby="story-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="story-heading" className="text-3xl font-black text-[#f5f5f5] mb-8 text-center">
            The Contractor You <span className="text-amber-500">Actually Deserve</span>
          </h2>
          {/* Pull quote accent bar */}
          <div className="border-l-4 border-amber-500 pl-6 mb-8">
            <p className="text-[#a0a0a0] text-lg leading-relaxed italic">
              Homeowners deserve a contractor who shows up, communicates clearly, and gets the work done right.
            </p>
          </div>
          <div className="space-y-6 text-[#a0a0a0] text-lg leading-relaxed">
            <p>
              Ulloa Construction was built around a simple idea: homeowners deserve a
              contractor who shows up, communicates clearly, and gets the work done right.
              No runaround, no hidden costs, no endless wait for a callback.
            </p>
            <p>
              We specialize in kitchens, bathrooms, interior remodeling, and room additions —
              the projects that directly impact how your family lives every day. Our team
              handles design consultation, permitting, and construction so you&apos;re not
              juggling multiple contractors or chasing down answers.
            </p>
            <p>
              Every estimate comes with a detailed scope and clear allowances. Every project
              gets daily clean-up and consistent communication. And every finished job gets
              a final walkthrough where we address every item on your punch list before we
              call it done.
            </p>
            <p>
              We serve Anaheim, Irvine, Anaheim, Fullerton, Garden Grove, Santa Ana, Yorba
              Linda, Orange, and the surrounding Orange County area. CSLB Lic. #1144906.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#1a1a1a]" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="values-heading" className="text-4xl font-black text-[#f5f5f5]">
              Why Homeowners Choose Us
            </h2>
            <p className="text-[#a0a0a0] mt-3 text-lg">
              The things that matter on every project
            </p>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-[#0f0f0f] rounded-2xl p-6 border border-[#2a2a2a]">
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-amber-500 rounded-full" aria-hidden="true" />
                </div>
                <dt className="font-bold text-[#f5f5f5] text-base mb-2">{value.title}</dt>
                <dd className="text-[#a0a0a0] text-sm leading-relaxed">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#0f0f0f]" aria-labelledby="stats-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">Ulloa Construction by the numbers</h2>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "CSLB #1144906", label: "Licensed & Insured" },
              { value: "5-Star", label: "Yelp Reviews" },
              { value: "4", label: "Core Specialties" },
              { value: "100%", label: "Satisfaction Guaranteed" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-3xl font-black text-amber-400">{stat.value}</span>
                  <span className="block text-[#a0a0a0] mt-1 text-sm">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a1a] py-16" aria-label="Contact Ulloa Construction">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#f5f5f5] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[#a0a0a0] mb-8 text-lg">
            Contact us today for a free, no-obligation estimate on your Orange County remodeling project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16574002896"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              aria-label="Call Ulloa Construction at (657) 400-2896"
            >
              (657) 400-2896
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-[#1565c0] hover:bg-[#1565c0] text-[#f5f5f5] hover:text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
