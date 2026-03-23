import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ulloa Construction — 20+ years serving Anaheim and Orange County, CA. Family-owned contractor built on trust, quality, and deep local expertise in Southern California building codes.",
  alternates: {
    canonical: "https://ulloaonstruction.com/about",
  },
};

const team = [
  {
    name: "Carlos Ulloa",
    role: "Founder & Lead Contractor",
    bio: "Born and raised in Anaheim, CA, Carlos has been building homes across Orange County for over 20 years. His deep knowledge of SoCal building codes and seismic requirements is unmatched.",
  },
  {
    name: "Miguel Ulloa",
    role: "Project Manager",
    bio: "Miguel oversees all active projects across Orange County, ensuring timelines are met and quality standards are exceeded on every build.",
  },
  {
    name: "Rosa Martinez",
    role: "Design Consultant",
    bio: "Rosa works with OC homeowners to translate their vision into actionable plans, specializing in kitchen and bathroom design for Southern California living.",
  },
];

const values = [
  {
    title: "Built on Trust",
    description:
      "We've built our reputation one project at a time. In Orange County, word travels fast — and our clients keep coming back and sending their neighbors our way.",
  },
  {
    title: "Local Knowledge",
    description:
      "We know Anaheim. We know Orange County. We know California building codes, seismic requirements, and the climate challenges unique to Southern California construction.",
  },
  {
    title: "Quality Above All",
    description:
      "We never cut corners. Every project — from a small bathroom upgrade in Brea to a new home build in Yorba Linda — receives the same meticulous attention to detail.",
  },
  {
    title: "Community First",
    description:
      "We're your neighbors. Our team lives and works in OC, and we're invested in the quality of construction throughout our community.",
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
              <h1 id="about-page-heading" className="text-5xl sm:text-6xl font-black text-white mb-6">
                Anaheim's Trusted
                <span className="text-amber-400"> Construction Team</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                For over 20 years, Ulloa Construction has been building, renovating, and improving
                homes across Orange County, CA. We started with a simple belief: every homeowner
                deserves a contractor they can trust.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/api/image?type=crew"
                alt="Ulloa Construction professional team in Anaheim, Orange County California"
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
            How Ulloa Construction <span className="text-amber-500">Came to Be</span>
          </h2>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Ulloa Construction was founded in Anaheim, CA over two decades ago by Carlos Ulloa,
              a third-generation builder who grew up watching his family transform homes throughout
              Orange County. What started as a small operation focused on flooring and remodeling
              has grown into a full-service construction company trusted by hundreds of OC homeowners.
            </p>
            <p>
              Our tagline — "Built on trust, quality, and reliability" — isn't marketing copy.
              It's a commitment we've made to every client from Brea to San Juan Capistrano. We've
              built our reputation one project at a time, and we intend to keep it that way.
            </p>
            <p>
              What sets us apart from other Orange County contractors is our deep roots in the
              community. We're not a franchise operation or a national chain. We're your neighbors.
              Our crews know the specific building code requirements in Anaheim, understand the
              seismic considerations unique to Southern California, and have relationships with the
              best local suppliers throughout OC.
            </p>
            <p>
              Whether you're planning a kitchen renovation in Garden Grove, a new home construction
              in Yorba Linda, or a bathroom upgrade in Irvine, you'll work directly with our
              experienced team — not a subcontractor you've never met.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="values-heading" className="text-4xl font-black text-slate-900">
              What We Stand For
            </h2>
            <p className="text-slate-500 mt-3 text-lg">
              The principles that guide every project in Orange County
            </p>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-amber-500 rounded-full" aria-hidden="true" />
                </div>
                <dt className="font-bold text-slate-900 text-lg mb-2">{value.title}</dt>
                <dd className="text-slate-500 text-sm leading-relaxed">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
              The People Behind the Work
            </p>
            <h2 id="team-heading" className="text-4xl font-black text-slate-900">
              Meet the Ulloa Construction Team
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {team.map((member) => (
              <li key={member.name}>
                <article className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center">
                  <div
                    className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white font-black text-2xl"
                    aria-hidden="true"
                  >
                    {member.name[0]}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{member.name}</h3>
                  <p className="text-amber-500 text-sm font-medium mt-1 mb-4">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-900" aria-labelledby="stats-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">Ulloa Construction by the numbers</h2>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "Years in Orange County" },
              { value: "500+", label: "Projects Completed" },
              { value: "12", label: "Services Offered" },
              { value: "100%", label: "Client Satisfaction Goal" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-4xl font-black text-amber-400">{stat.value}</span>
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
            Ready to Work With Orange County's Best?
          </h2>
          <p className="text-slate-500 mb-8 text-lg">
            Contact the Ulloa Construction team in Anaheim today for a free consultation.
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
