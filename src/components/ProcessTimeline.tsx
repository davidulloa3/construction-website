import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "We visit your home, assess the project in person, and discuss your vision, budget, and timeline. No cost and no pressure.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Custom Proposal",
    description:
      "You receive a detailed written estimate with materials, timeline, and total cost. Clear allowances, no hidden line items, no surprises.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Expert Build",
    description:
      "Our licensed Orange County crew gets to work with daily job-site updates, strict quality checkpoints, and clean practices throughout.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description:
      "We walk through every detail with you before considering the job done. Every punch-list item is resolved before we leave.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
  },
];

export default function ProcessTimeline() {
  return (
    <section
      className="py-20 bg-[#1a1a1a]"
      aria-labelledby="process-timeline-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2
            id="process-timeline-heading"
            className="text-4xl sm:text-5xl font-black text-[#f5f5f5]"
          >
            Simple Steps.
            <br />
            <span className="text-amber-500">No Surprises.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-[#2a2a2a]"
            aria-hidden="true"
          />

          <ol
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6"
            role="list"
          >
            {steps.map((step, i) => (
              <li key={step.number} className="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center">
                {/* Number bubble */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#1565c0] flex items-center justify-center text-white lg:mx-auto mb-0 lg:mb-5">
                    <span className="font-black text-sm">{step.number}</span>
                  </div>
                </div>

                {/* Mobile connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="lg:hidden absolute left-6 top-12 w-px h-full bg-[#2a2a2a]"
                    aria-hidden="true"
                  />
                )}

                {/* Content */}
                <div className="lg:px-2 pb-8 lg:pb-0">
                  <div className="text-amber-500 mb-2 hidden lg:block">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-[#f5f5f5] text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
            aria-label="Start with a free consultation"
          >
            Start with a Free Consultation
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
