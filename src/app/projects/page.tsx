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
    image: "/images/gallery-2.jpg",
    description:
      "Complete kitchen transformation with custom white shaker cabinetry, quartz waterfall island, and premium Wolf appliances. This Orange County home now has the kitchen of its owners' dreams.",
    highlights: ["Custom cabinetry", "Quartz countertops", "New electrical layout", "Tile backsplash"],
  },
  {
    title: "Custom Living Room & Accent Wall",
    location: "Yorba Linda, CA",
    category: "Interior",
    year: "2024",
    image: "/images/gallery-10.jpg",
    description:
      "Full living room transformation featuring a custom geometric diamond accent wall, new hardwood flooring, recessed lighting, and a built-in TV mount with concealed wiring.",
    highlights: ["Custom accent wall", "Hardwood floors", "Recessed lighting", "TV mount install"],
  },
  {
    title: "Master Bathroom Spa Retreat",
    location: "Irvine, CA",
    category: "Bathroom",
    year: "2023",
    image: "/images/gallery-3.jpg",
    description:
      "A dated master bathroom transformed into a luxurious spa retreat with heated stone floors, frameless glass shower, freestanding soaking tub, and custom floating vanity.",
    highlights: ["Heated floors", "Frameless glass shower", "Soaking tub", "Custom vanity"],
  },
  {
    title: "Custom Built-In & LED Shelving",
    location: "Anaheim, CA",
    category: "Interior",
    year: "2023",
    image: "/images/gallery-6.jpg",
    description:
      "Custom floor-to-ceiling built-in shelving with integrated LED strip lighting in a modern entryway. Precision carpentry with a sleek, contemporary finish.",
    highlights: ["Floor-to-ceiling built-ins", "LED lighting", "Custom carpentry", "Modern finish"],
  },
  {
    title: "Double Vanity Bathroom Remodel",
    location: "Fullerton, CA",
    category: "Bathroom",
    year: "2023",
    image: "/images/gallery-4.jpg",
    description:
      "Complete bathroom remodel featuring a custom double vanity with vessel sinks, natural stone accent wall, walk-in shower with bench, and warm sconce lighting.",
    highlights: ["Double vessel sinks", "Stone accent wall", "Walk-in shower", "Custom vanity"],
  },
  {
    title: "Open Concept Kitchen Remodel",
    location: "Garden Grove, CA",
    category: "Kitchen",
    year: "2022",
    image: "/images/gallery-8.jpg",
    description:
      "Transformed a compartmentalized 1980s floor plan into a modern open-concept kitchen and dining space. White shaker cabinets, chandelier lighting, and hardwood floors throughout.",
    highlights: ["Open concept layout", "White shaker cabinets", "Chandelier lighting", "Hardwood floors"],
  },
];

const categories = ["All", "Kitchen", "Bathroom", "New Construction", "Addition", "Remodeling", "Commercial"];

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-[#0f0f0f] py-20 relative overflow-hidden" aria-labelledby="projects-page-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c0392b]/10 to-transparent opacity-50" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">Our Work</p>
          <h1 id="projects-page-heading" className="text-5xl sm:text-6xl font-black text-[#f5f5f5] mb-6">
            Featured Projects
            <br />
            <span className="text-amber-400">Across Orange County</span>
          </h1>
          <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto">
            Browse our portfolio of completed construction projects throughout Anaheim, Irvine,
            Yorba Linda, Fullerton, and the greater Orange County area.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <nav className="bg-[#0f0f0f] border-b border-[#2a2a2a] sticky top-16 z-30" aria-label="Filter projects by category">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex gap-1 py-3 overflow-x-auto" role="list">
            {categories.map((cat) => (
              <li key={cat}>
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors cursor-default ${
                    cat === "All"
                      ? "bg-amber-500 text-white"
                      : "text-[#a0a0a0] hover:text-[#f5f5f5]"
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
      <section className="py-16 bg-[#1a1a1a]" aria-label="Project portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {projects.map((project) => (
              <li key={project.title}>
                <article className="bg-[#0f0f0f] rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/40 transition-shadow duration-300 border border-[#2a2a2a]">
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={`${project.title} - Ulloa Construction project in ${project.location}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="bg-[#1a1a1a]/90 text-[#a0a0a0] text-xs font-medium px-2.5 py-1 rounded-full">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h2 className="font-bold text-[#f5f5f5] text-xl leading-snug">
                        {project.title}
                      </h2>
                    </div>
                    <p className="text-[#a0a0a0] text-sm flex items-center gap-1 mb-3">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      {project.location}
                    </p>
                    <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="flex flex-wrap gap-2" role="list" aria-label="Project highlights">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#a0a0a0] text-xs px-2.5 py-1 rounded-full"
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
      <section className="bg-[#0f0f0f] py-16 border-t border-[#2a2a2a]" aria-label="Start your project">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#f5f5f5] mb-4">
            Your Project Could Be Next
          </h2>
          <p className="text-[#a0a0a0] mb-8">
            Ready to transform your Anaheim or Orange County home? Let's talk about your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17144871860"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              aria-label="Call (714) 487-1860"
            >
              (714) 487-1860
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-[#f5f5f5]/30 hover:border-[#f5f5f5] text-[#f5f5f5] font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
