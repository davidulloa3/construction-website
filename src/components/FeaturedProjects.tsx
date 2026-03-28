import Link from "next/link";

const projects = [
  {
    title: "Modern Kitchen Renovation",
    location: "Anaheim Hills, CA",
    category: "Kitchen",
    image: "/images/gallery-1.jpg",
    description:
      "Complete kitchen transformation with custom cabinetry, quartz countertops, and premium appliances.",
  },
  {
    title: "Home Theater & Remodel",
    location: "Yorba Linda, CA",
    category: "Interior",
    image: "/images/gallery-7.jpg",
    description:
      "Custom home theater room with tiered seating, acoustic design, and full interior renovation.",
  },
  {
    title: "Luxury Bathroom Remodel",
    location: "Irvine, CA",
    category: "Bathroom",
    image: "/images/gallery-3.jpg",
    description:
      "Spa-inspired master bathroom with heated floors, frameless glass shower, and custom vanity.",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      className="py-24 bg-[#0f0f0f]"
      aria-labelledby="projects-heading"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6">
          <div>
            <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Our Portfolio
            </p>
            <h2
              id="projects-heading"
              className="text-4xl sm:text-5xl font-black text-[#f5f5f5]"
            >
              Featured Projects
              <br />
              <span className="text-amber-500">Across Orange County</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="flex-shrink-0 inline-flex items-center gap-2 border-2 border-[#c0392b] hover:bg-[#c0392b] text-[#f5f5f5] hover:text-white font-semibold px-6 py-3 rounded-xl transition-all"
            aria-label="View all construction projects by Ulloa Construction"
          >
            View All Projects
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current"
              aria-hidden="true"
            >
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </Link>
        </div>

        {/* Project cards */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          {projects.map((project) => (
            <li key={project.title}>
              <article className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#2a2a2a]">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.title} - Ulloa Construction project in ${project.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[#a0a0a0] text-sm mb-2">
                      {project.description}
                    </p>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1 text-amber-400 text-sm font-semibold"
                      aria-label={`View details of ${project.title} project`}
                    >
                      View Project
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 fill-current"
                        aria-hidden="true"
                      >
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 bg-[#1a1a1a]">
                  <h3 className="font-bold text-[#f5f5f5] text-lg mb-1 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#a0a0a0] text-sm flex items-center gap-1">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 fill-current"
                      aria-hidden="true"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {project.location}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
