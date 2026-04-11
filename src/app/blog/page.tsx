import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Construction & Remodeling Tips | Ulloa Construction Blog",
  description:
    "Expert remodeling tips, cost guides, and home improvement advice for Orange County homeowners from Ulloa Construction in Anaheim, CA.",
  alternates: { canonical: "https://ulloa-construction.com/blog" },
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="pt-16 bg-[#0f0f0f] min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="bg-[#0f0f0f] border-b border-[#2a2a2a] py-20"
        aria-labelledby="blog-hero-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 text-[#1565c0] text-sm font-semibold tracking-widest uppercase mb-5 bg-[#1565c0]/10 border border-[#1565c0]/20 px-4 py-1.5 rounded-full">
            Ulloa Construction. Anaheim, CA
          </p>
          <h1
            id="blog-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#f5f5f5] leading-tight mb-6"
          >
            Remodeling Tips &amp; Guides
          </h1>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
            Expert advice on kitchen remodels, bathroom renovations, roofing,
            flooring, and everything construction written for Orange County homeowners by our
            team at Ulloa Construction.
          </p>
        </div>
      </section>

      {/* ── Post Grid ─────────────────────────────────────────── */}
      <section className="py-16" aria-label="Blog posts">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#1565c0] rounded-xl p-6 flex flex-col transition-all hover:shadow-[0_0_24px_rgba(21,101,192,0.15)]"
              >
                <div className="flex items-center gap-3 text-[#a0a0a0] text-sm mb-4">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      timeZone: "UTC",
                    })}
                  </time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-[#f5f5f5] font-bold text-lg leading-snug mb-3 flex-grow">
                  {post.title}
                </h2>

                <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-[#1565c0] hover:text-[#1976d2] font-semibold text-sm transition-colors mt-auto"
                  aria-label={`Read more: ${post.title}`}
                >
                  Read More
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="py-16 bg-[#1565c0]" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Serving Anaheim and all of Orange County. CSLB Lic. #1144906.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f5f5f5] text-[#1565c0] font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:+17144871860"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              (714) 487-1860
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
