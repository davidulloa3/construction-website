const steps = [
  {
    number: "01",
    title: "Consultation & Walkthrough",
    description:
      "We listen to your goals, budget, and timeline, then walk the space to understand existing conditions and options.",
  },
  {
    number: "02",
    title: "Transparent Proposal",
    description:
      "You receive a detailed scope with clear allowances and pricing. No surprise line items buried in the fine print.",
  },
  {
    number: "03",
    title: "Planning, Permits & Scheduling",
    description:
      "We coordinate trades, inspections, and materials so the project runs smoothly and your home stays as livable as possible.",
  },
  {
    number: "04",
    title: "Build & Daily Clean-Up",
    description:
      "Work is performed by experienced trades, with daily clean-up and consistent updates so you're never left guessing.",
  },
  {
    number: "05",
    title: "Final Walkthrough",
    description:
      "We review the finished work together, handle any punch-list items, and make sure you're 100% satisfied before we call it done.",
  },
];

export default function ProcessSection() {
  return (
    <section
      className="py-24 bg-[#0f0f0f]"
      aria-labelledby="process-heading"
      id="process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
            How We Work
          </p>
          <h2
            id="process-heading"
            className="text-4xl sm:text-5xl font-black text-[#f5f5f5]"
          >
            A Simple Process.
            <br />
            <span className="text-amber-500">No Surprises.</span>
          </h2>
        </div>

        <ol className="relative" role="list" aria-label="Our 5-step process">
          {/* Connecting line for desktop */}
          <div
            className="hidden lg:block absolute left-[calc(50%-1px)] top-8 bottom-8 w-px bg-[#2a2a2a]"
            aria-hidden="true"
          />

          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-0">
            {steps.map((step, i) => (
              <li
                key={step.number}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  i % 2 === 0 ? "" : "lg:direction-rtl"
                }`}
              >
                {/* Number bubble */}
                <div
                  className={`lg:flex lg:justify-end mb-4 lg:mb-0 ${
                    i % 2 === 1 ? "lg:order-2 lg:justify-start" : ""
                  }`}
                >
                  <div
                    className={`bg-[#1a1a1a] border-2 border-amber-500 rounded-2xl p-6 shadow-lg max-w-sm ${
                      i % 2 === 1 ? "lg:ml-0 lg:mr-auto" : "lg:ml-auto lg:mr-0"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl font-black text-amber-500/30 leading-none flex-shrink-0">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="font-bold text-[#f5f5f5] text-lg mb-2">
                          {step.title}
                        </h3>
                        <p className="text-[#a0a0a0] text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div
                  className={`hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                  aria-hidden="true"
                >
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg shadow-amber-500/30 z-10">
                    {i + 1}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className={`hidden lg:block ${i % 2 === 1 ? "lg:order-3" : ""}`} />
              </li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
