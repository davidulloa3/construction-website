"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Maria G.",
    location: "Anaheim Hills, CA",
    rating: 5,
    text: "Ulloa Construction transformed our outdated kitchen into a stunning modern space. Their team was professional, on time, and the quality exceeded our expectations. As neighbors in Orange County, they truly understood our needs.",
    project: "Kitchen Renovation",
  },
  {
    name: "Robert T.",
    location: "Yorba Linda, CA",
    rating: 5,
    text: "We hired Ulloa Construction to build our custom home and couldn't be happier. Their knowledge of SoCal building codes and seismic requirements gave us peace of mind. The craftsmanship is outstanding.",
    project: "New Home Construction",
  },
  {
    name: "Jennifer C.",
    location: "Irvine, CA",
    rating: 5,
    text: "From start to finish, the Ulloa team was exceptional. Our bathroom remodel came out even better than we imagined. Communication was clear throughout the entire process. Highly recommend them for any OC contractor work.",
    project: "Bathroom Remodel",
  },
  {
    name: "David M.",
    location: "Fullerton, CA",
    rating: 5,
    text: "We've worked with several Orange County contractors before, but Ulloa Construction is in a different league. They completed our room addition on schedule and on budget. Incredible attention to detail.",
    project: "Room Addition",
  },
  {
    name: "Sarah L.",
    location: "Garden Grove, CA",
    rating: 5,
    text: "After our roof was damaged, Ulloa Construction responded quickly and had it fixed in just a few days. Professional, fair pricing, and the work looks perfect. They're our go-to contractor in Anaheim and OC.",
    project: "Roofing",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`w-4 h-4 ${i < rating ? "fill-amber-400" : "fill-slate-200"}`}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section
      className="py-24 bg-slate-900"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
            What Clients Say
          </p>
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-black text-white"
          >
            Trusted by Orange County
            <br />
            <span className="text-amber-400">Homeowners</span>
          </h2>
        </div>

        {/* Active testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-3xl p-8 sm:p-12 border border-slate-700 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div
                  className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-white font-black text-xl"
                  aria-hidden="true"
                >
                  {testimonials[active].name[0]}
                </div>
              </div>

              <div className="flex-1">
                <StarRating rating={testimonials[active].rating} />
                <blockquote className="mt-4 text-slate-200 text-lg leading-relaxed">
                  "{testimonials[active].text}"
                </blockquote>
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <cite className="not-italic font-bold text-white">
                    {testimonials[active].name}
                  </cite>
                  <span className="hidden sm:block text-slate-600">·</span>
                  <span className="text-slate-400 text-sm">
                    {testimonials[active].location}
                  </span>
                  <span className="hidden sm:block text-slate-600">·</span>
                  <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {testimonials[active].project}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div
              className="flex gap-2"
              role="tablist"
              aria-label="Testimonial navigation"
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`View testimonial ${i + 1} of ${testimonials.length}`}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all ${
                    i === active
                      ? "w-6 h-2 bg-amber-500"
                      : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* Prev/Next */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-slate-600 hover:border-amber-500 hover:text-amber-500 text-slate-400 flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full border border-slate-600 hover:border-amber-500 hover:text-amber-500 text-slate-400 flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
