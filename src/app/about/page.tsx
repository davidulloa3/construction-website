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
      <section className="bg-slate-900 py-20 relative overflow-hidden" aria-labelledby="about-page-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-50" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">Our Story</p>
              <h1 id="about-page-heading" className="text-5xl sm:text-6xl font-black text-white mb-4">
                Orange County&apos;s Trusted
                <span className="text-amber-400"> Remodeling Contractor</span>
              </h1>
              <p className="text-amber-400 text-sm font-medium mb-6">CSLB Lic. #1144906 — Licensed & Insured</p>
              <p className="text-xl text-slate-300 leading-relaxed">
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

      {/* Story */}
      <section className="py-20 bg-white" aria-labelledby="story-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="story-heading" className="text-3xl font-black text-slate-900 mb-8 text-center">
            The Contractor You <span className="text-amber-500">Actually Deserve</span>
          </h2>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 text-lg leading-relaxed">
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
              We serve Tustin, Irvine, Anaheim, Fullerton, Garden Grove, Santa Ana, Yorba
              Linda, Orange, and the surrounding Orange County area. CSLB Lic. #1144906.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="values-heading" className="text-4xl font-black text-slate-900">
              Why Homeowners Choose Us
            </h2>
            <p className="text-slate-500 mt-3 text-lg">
              The things that matter on every project
            </p>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-amber-500 rounded-full" aria-hidden="true" />
                </div>
                <dt className="font-bold text-slate-900 text-base mb-2">{value.title}</dt>
                <dd className="text-slate-500 text-sm leading-relaxed">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-900" aria-labelledby="stats-heading">
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
                  <span className="block text-slate-400 mt-1 text-sm">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16" aria-label="Contact Ulloa Construction">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-500 mb-8 text-lg">
            Contact us today for a free, no-obligation estimate on your Orange County remodeling project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17144871860"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              aria-label="Call Ulloa Construction at (714) 487-1860"
            >
              (714) 487-1860
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
