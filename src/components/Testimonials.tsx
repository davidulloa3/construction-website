"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Carlos M.",
    city: "Anaheim, CA",
    rating: 5,
    text: "Ulloa Construction remodeled our kitchen in the Anaheim Hills area and the result was beyond what we imagined. From the initial consultation to the final walkthrough, every detail was handled professionally. We've already referred them to two neighbors.",
    project: "Kitchen Remodel",
    source: "Google",
  },
  {
    name: "Jennifer L.",
    city: "Fullerton, CA",
    rating: 5,
    text: "We had our master bathroom completely renovated and couldn't be happier. The team was respectful of our home, always on time, and finished ahead of schedule. The tilework is immaculate. Will definitely use them again for our kitchen.",
    project: "Bathroom Renovation",
    source: "Yelp",
  },
  {
    name: "Robert T.",
    city: "Orange, CA",
    rating: 5,
    text: "Added a 400 sqft room addition to our home. David and his crew navigated the permit process smoothly and kept us updated every step of the way. The addition looks like it was always part of the house. Outstanding craftsmanship.",
    project: "Room Addition",
    source: "Google",
  },
  {
    name: "Sandra P.",
    city: "Irvine, CA",
    rating: 5,
    text: "Had new flooring installed throughout the entire first floor. The team was clean, efficient, and the LVP they recommended looks incredible. Very fair pricing compared to three other quotes we got. Highly recommend for any OC homeowner.",
    project: "Flooring Installation",
    source: "Yelp",
  },
  {
    name: "Michael R.",
    city: "Huntington Beach, CA",
    rating: 5,
    text: "Replaced all our windows and two exterior doors. The difference in energy efficiency is noticeable immediately. Professional crew, no mess left behind, and the quality of materials is top notch. Great local company.",
    project: "Window & Door Installation",
    source: "Google",
  },
  {
    name: "Lisa C.",
    city: "Santa Ana, CA",
    rating: 5,
    text: "We needed emergency roof repair after a storm and Ulloa Construction came out the next day. Fair quote, fast work, and no leaks since. Honest and reliable — exactly what you want from a contractor. They've earned a customer for life.",
    project: "Roofing",
    source: "Yelp",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`w-4 h-4 ${i < rating ? "fill-amber-400" : "fill-[#2a2a2a]"}`}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function SourceBadge({ source }: { source: string }) {
  if (source === "Yelp") {
    return (
      <span className="inline-flex items-center gap-1 bg-[#d32323]/15 text-[#d32323] text-xs font-semibold px-2 py-0.5 rounded-full">
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        Yelp
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 bg-blue-500/15 text-blue-400 text-xs font-semibold px-2 py-0.5 rounded-full">
      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
      Google
    </span>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section className="py-24 bg-[#1a1a1a]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Real Reviews from Real Clients
          </p>
          <h2 id="testimonials-heading" className="text-4xl sm:text-5xl font-black text-[#f5f5f5]">
            What Orange County
            <br />
            <span className="text-amber-400">Homeowners Say</span>
          </h2>
          {/* Summary bar */}
          <div className="mt-6 inline-flex items-center gap-3 bg-[#0f0f0f] border border-[#2a2a2a] rounded-full px-6 py-3">
            <div className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-amber-400" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-[#f5f5f5] font-bold text-sm">4.9 stars</span>
            <span className="text-[#a0a0a0] text-sm">across 80+ reviews</span>
          </div>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActive(i)}
              className={`text-left bg-[#0f0f0f] rounded-2xl p-6 border transition-all ${
                i === active
                  ? "border-amber-500 shadow-[0_0_20px_rgba(21,101,192,0.2)]"
                  : "border-[#2a2a2a] hover:border-[#3a3a3a]"
              }`}
              aria-pressed={i === active}
            >
              <div className="flex items-center justify-between mb-3">
                <StarRating rating={t.rating} />
                <SourceBadge source={t.source} />
              </div>
              <blockquote className="text-[#a0a0a0] text-sm leading-relaxed mb-4 line-clamp-4">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center text-white font-black text-sm flex-shrink-0" aria-hidden="true">
                  {t.name[0]}
                </div>
                <div>
                  <cite className="not-italic font-bold text-[#f5f5f5] text-sm block">{t.name}</cite>
                  <span className="text-[#a0a0a0] text-xs">{t.city} — {t.project}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Active testimonial full view */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#0f0f0f] rounded-3xl p-8 sm:p-10 border border-amber-500/30 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-white font-black text-xl" aria-hidden="true">
                  {testimonials[active].name[0]}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <StarRating rating={testimonials[active].rating} />
                  <SourceBadge source={testimonials[active].source} />
                </div>
                <blockquote className="text-[#f5f5f5] text-lg leading-relaxed">
                  &ldquo;{testimonials[active].text}&rdquo;
                </blockquote>
                <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <cite className="not-italic font-bold text-[#f5f5f5]">
                    {testimonials[active].name}
                  </cite>
                  <span className="hidden sm:block text-[#2a2a2a]">·</span>
                  <span className="text-[#a0a0a0] text-sm">{testimonials[active].city}</span>
                  <span className="hidden sm:block text-[#2a2a2a]">·</span>
                  <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {testimonials[active].project}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`View testimonial ${i + 1} of ${testimonials.length}`}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all ${
                    i === active ? "w-6 h-2 bg-amber-500" : "w-2 h-2 bg-[#2a2a2a] hover:bg-[#a0a0a0]"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#2a2a2a] hover:border-amber-500 hover:text-amber-500 text-[#a0a0a0] flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#2a2a2a] hover:border-amber-500 hover:text-amber-500 text-[#a0a0a0] flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Yelp CTA */}
          <div className="mt-8 text-center">
            <a
              href="https://yelp.com/biz/ulloa-construction-anaheim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#d32323] hover:bg-[#b81c1c] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              aria-label="View all Ulloa Construction reviews on Yelp"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              View All Reviews on Yelp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
