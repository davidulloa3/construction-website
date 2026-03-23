import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects & Portfolio",
  description:
    "Browse Ulloa Construction's portfolio of completed projects across Orange County, CA — kitchen renovations, home remodels, new construction, bathrooms, and more in Anaheim and OC.",
  alternates: {
    canonical: "https://ulloaonstruction.com/projects",
  },
};

const projects = [
  {
    title: "Modern Kitchen Renovation",
    location: "Anaheim Hills, CA",
    category: "Kitchen",
    year: "2024",
    imageType: "kitchen",
    description:
      "Complete kitchen transformation with custom white shaker cabinetry, quartz waterfall island, and premium Wolf appliances. This Orange County home now has the kitchen of its owners' dreams.",
    highlights: ["Custom cabinetry", "Quartz countertops", "New electrical layout", "Tile backsplash"],
  },
  {
    title: "Custom Home Build",
    location: "Yorba Linda, CA",
    category: "New Construction",
    year: "2024",
    imageType: "frame",
    description:
      "3,200 sq ft custom home built from the ground up in Yorba Linda, Orange County. Fully seismic compliant, energy efficient, and designed for Southern California living.",
    highlights: ["Seismic compliance", "Energy-efficient systems", "3,200 sq ft", "Custom floor plan"],
  },
  {
    title: "Master Bathroom Spa Retreat",
    location: "Irvine, CA",
    category: "Bathroom",
    year: "2023",
    imageType: "bathroom",
    description:
      "A dated master bathroom transformed into a luxurious spa retreat with heated stone floors, frameless glass shower, freestanding soaking tub, and custom floating vanity.",
    highlights: ["Heated floors", "Frameless glass shower", "Soaking tub", "Custom vanity"],
  },
  {
    title: "Commercial Office Renovation",
    location: "Anaheim, CA",
    category: "Commercial",
    year: "2023",
    imageType: "commercial",
    description:
      "Full interior renovation of a 5,000 sq ft commercial office space in Anaheim. New flooring, lighting, partition walls, and complete drywall refresh for a modern workspace.",
    highlights: ["5,000 sq ft", "New flooring", "Partition walls", "Complete drywall"],
  },
  {
    title: "Second Story Addition",
    location: "Fullerton, CA",
    category: "Addition",
    year: "2023",
    imageType: "frame",
    description:
      "Added a full second story to an existing single-story home in Fullerton, OC — adding 1,400 sq ft including 3 bedrooms and 2 bathrooms while maintaining original architectural style.",
    highlights: ["1,400 sq ft added", "3 bed / 2 bath", "Permit acquired", "Matched original style"],
  },
  {
    title: "Open Concept Remodel",
    location: "Garden Grove, CA",
    category: "Remodeling",
    year: "2022",
    imageType: "crew",
    description:
      "Transformed a compartmentalized 1980s floor plan into a modern open-concept living space. Removed non-load-bearing walls, installed engineered hardwood floors, and refreshed the entire interior.",
    highlights: ["Wall removal", "Engineered hardwood", "New lighting plan", "Paint throughout"],
  },
];

const categories = ["All", "Kitchen", "Bathroom", "New Construction", "Addition", "Remodeling", "Commercial"];

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-slate-900 py-20 relative overflow-hidden" aria-labelledby="projects-page-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-50" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">Our Work</p>
          <h1 id="projects-page-heading" className="text-5xl sm:text-6xl font-black text-white mb-6">
            Featured Projects
            <br />
            <span className="text-amber-400">Across Orange County</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Browse our portfolio of completed construction projects throughout Anaheim, Irvine,
            Yorba Linda, Fullerton, and the greater Orange County area.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <nav className="bg-white border-b border-slate-100 sticky top-16 z-30" aria-label="Filter projects by category">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex gap-1 py-3 overflow-x-auto" role="list">
            {categories.map((cat) => (
              <li key={cat}>
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors cursor-default ${
                    cat === "All"
                      ? "bg-amber-500 text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Projects grid */}
      <section className="py-16 bg-slate-50" aria-label="Project portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {projects.map((project) => (
              <li key={project.title}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/api/image?type=${project.imageType}`}
                      alt={`${project.title} - Ulloa Construction project in ${project.location}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="bg-white/90 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h2 className="font-bold text-slate-900 text-xl leading-snug">
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-slate-400 text-sm flex items-center gap-1 mb-3">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {project.location}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="flex flex-wrap gap-2" role="list" aria-label="Project highlights">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="bg-slate-50 border border-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16" aria-label="Start your project">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Your Project Could Be Next
          </h2>
          <p className="text-slate-400 mb-8">
            Ready to transform your Anaheim or Orange County home? Let's talk about your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16574002896"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              aria-label="Call (657) 400-2896"
            >
              (657) 400-2896
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
