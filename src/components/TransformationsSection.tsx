import BeforeAfterSlider from "./BeforeAfterSlider";

const transformations = [
  {
    label: "Kitchen",
    beforeSrc: "/images/948faca5-dc3e-439f-94ed-5275d9ba7f87.png",
    afterSrc: "/images/IMG_0671.HEIC",
    beforeAlt: "Outdated kitchen before Ulloa Construction remodel in Anaheim CA",
    afterAlt: "Modern luxury kitchen remodel completed by Ulloa Construction in Orange County CA",
  },
  {
    label: "Bathroom",
    beforeSrc: "/images/IMG_1088.jpg",
    afterSrc: "/images/IMG_1089.jpg",
    beforeAlt: "Dated bathroom before renovation by Ulloa Construction in Orange County CA",
    afterAlt: "Spa-style bathroom renovation completed by Ulloa Construction in Orange Hills CA",
  },
  {
    label: "Laundry Room",
    beforeSrc: "/images/IMG_1091.jpg",
    afterSrc: "/images/IMG_1090.jpg",
    beforeAlt: "Interior space before remodel by Ulloa Construction in Orange County CA",
    afterAlt: "Modern interior remodel completed by Ulloa Construction in Anaheim CA",
  },
];

export default function TransformationsSection() {
  return (
    <section
      className="py-24 bg-[#0f0f0f]"
      aria-labelledby="transformations-heading"
      id="transformations"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Before & After
          </p>
          <h2
            id="transformations-heading"
            className="text-4xl sm:text-5xl font-black text-[#f5f5f5] mb-4"
          >
            Real Projects.
            <br />
            <span className="text-amber-500">Real Results.</span>
          </h2>
          <p className="text-[#a0a0a0] text-lg max-w-xl mx-auto">
            Drag the slider to see the transformation — real projects across Orange County.
          </p>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((t) => (
            <BeforeAfterSlider
              key={t.label}
              beforeSrc={t.beforeSrc}
              afterSrc={t.afterSrc}
              beforeAlt={t.beforeAlt}
              afterAlt={t.afterAlt}
              label={t.label}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 border-2 border-[#1565c0] hover:bg-[#1565c0] text-[#f5f5f5] hover:text-white font-semibold px-7 py-3 rounded-xl transition-all"
          >
            View Full Portfolio
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
