"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Christina C.",
    city: "Anaheim, CA",
    rating: 5,
    text: "We had an excellent experience with David & David. From start to finish, they truly went above and beyond to make sure everything was done right. The team was professional and paid close attention to every detail. This was our first remodel project and we had heard some nightmare stories so we were pretty nervous going in but our close friends recommended the Ulloas and we are so glad they did. They completed the project on time and stayed within the agreed budget, which is rare and greatly appreciated. Any questions or concerns we had were addressed quickly, and they made the entire process smooth and stress-free. The quality of the work exceeded our expectations, and we couldn’t be happier with the final result. We highly recommend David & David to anyone looking for a trustworthy and skilled remodeling team.",
    project: "Kitchen Remodel",
    source: "Google",
  },
  {
    name: "Susan H.",
    city: "Fullerton, CA",
    rating: 5,
    text: "We were beyond pleased with the work David and his team did on remodeling our entire bathroom!! Their skills, work ethic, communication and quality of work were top notch. We felt confident in the work they were doing and they did not disappoint! The overall experience was exceptional! We would highly recommend ULLOA Construction and would not hesitate to use them again for future work to be done at our home.",
    project: "Bathroom Renovation",
    source: "Yelp",
  },
  {
    name: "William T.",
    city: "Tustin, CA",
    rating: 5,
    text: "I can't say enough good things about Ulloa Construction. David and his team have done a number of projects at our home over the years, and we have always had an outstanding experience. After buying our home, we were very nervous about finding a contractor that we could trust, and from the first projects, Ulloa Construction was committed to getting every detail right. They have helped us to remodel the kitchen, bathrooms, family room, and flooring throughout the house. Their craftsmanship really stands out, especially in the details of custom woodworking and tile installations that they completed for my home. It is clear that they take great pride in their work and we always feel that the value delivered exceeds our expectations. If you're looking for a contractor who's professional, talented, and trustworthy, I highly recommend Ulloa Construction. We'll definitely be calling them again for future projects.",
    project: "Multple Projects",
    source: "Yelp",
  },
  {
    name: "Joanna D.",
    city: "Tustin, CA",
    rating: 5,
    text: "I have used Ulloa Construction many times over the years and have always had excellent results. David and his crew are always professional, trustworthy and dependable. They have done small projects for me such as a toilet leak that required a new toilet and dry wall repair to a whole house remodel that included a kitchen, 3 bathrooms, new floors, paint and much more. All of it was excellent work.",
    project: "Entire Home Remodel",
    source: "Yelp",
  },
  {
    name: "Joel A.",
    city: "Orange Hills, CA",
    rating: 5,
    text: "I couldn't be happier with the work David Ulloa and his crew did on our home. David remodeled our kitchen, master bathroom, walk-in closet, and laundry room. My wife and I were so impressed with the quality of the work that we kept adding more projects along the way. He went on to remodel our bar, paint every room in the house, re-stain our family room cabinets and stairwell banister, and update all of our old incandescent can lights to LED throughout the home. It was a major project that lasted several months, and David exceeded every expectation. From start to finish, David was fair-priced, super clean, and punctual--qualities that are surprisingly hard to find in many contractors today. He always took the time to listen to our concerns, walk us through options, and make sure we felt comfortable with every step of the process. One thing I truly appreciated was that there were no surprise charges. Everything was transparent and exactly as discussed. David's crew is incredibly skilled, efficient, and able to perform most trades in-house, which kept the project moving quickly and smoothly. Their workmanship is excellent, and they were always respectful of our home. Since the major remodel, I've hired David several more times--for a plumbing leak, drywall repairs, and additional painting--and his responsiveness has been just as impressive. He got back to me immediately and had the repairs completed within a few days. If you're looking for a contractor who is honest, reliable, detail-oriented, and delivers high-quality work, I highly recommend David. I will absolutely be using him again for future projects.",
    project: "Bathroom and Kitchen Remodel",
    source: "Yelp",
  },
  {
    name: "Allison K.",
    city: "Tustin, CA",
    rating: 5,
    text: "Ulloa Construction has done many projects for us over the past 10 years. David and his team did our full master bathroom and laundry room remodels, and has built beautiful built-ins and custom cabinets and drawers for us (along with many other projects). They always do amazing work, are efficient and keep the project area very clean. Their prices are reasonable and they are great to work with!",
    project: "Bathroom Remodel",
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
            {/* TODO: Replace GOOGLE_PLACE_ID with the actual Place ID from Google Business Profile */}
            <a
              href="https://g.page/r/CQwy5TTLqeqkEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-xs text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
              aria-label="View Ulloa Construction reviews on Google"
            >
              View Google Reviews
            </a>
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

          {/* Review CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
            {/* TODO: Replace GOOGLE_PLACE_ID with the actual Place ID from Google Business Profile */}
            <a
              href="https://g.page/r/CQwy5TTLqeqkEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1565c0] hover:bg-[#1e88e5] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              aria-label="Leave Ulloa Construction a review on Google"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
              Leave Us a Google Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
