import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, blogSlugList, getBlogPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogSlugList.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Ulloa Construction`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://ulloa-construction.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Ulloa Construction",
      url: "https://ulloa-construction.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Ulloa Construction",
      url: "https://ulloa-construction.com",
      logo: {
        "@type": "ImageObject",
        url: "https://ulloa-construction.com/icon.png",
      },
    },
  };

  // Related posts: up to 2 other posts
  const allPosts = getBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="pt-16 bg-[#0f0f0f] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Breadcrumb ────────────────────────────────────────── */}
      <nav
        className="bg-[#0f0f0f] border-b border-[#2a2a2a] py-4"
        aria-label="Breadcrumb"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-[#a0a0a0]">
            <li>
              <Link
                href="/blog"
                className="hover:text-[#f5f5f5] transition-colors"
              >
                Blog
              </Link>
            </li>
            <li aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 fill-current"
                aria-hidden="true"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </li>
            <li className="text-[#f5f5f5] truncate" aria-current="page">
              {post.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Article ───────────────────────────────────────────── */}
      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f5f5f5] leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#a0a0a0]">
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
              <span aria-hidden="true">·</span>
              <span>Ulloa Construction Team</span>
            </div>
          </header>

          {/* Body */}
          <div
            className="
              space-y-4
              [&_h2]:text-[#f5f5f5] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3
              [&_p]:text-[#a0a0a0] [&_p]:leading-relaxed
              [&_ul]:text-[#a0a0a0] [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
              [&_li]:leading-relaxed
              [&_strong]:text-[#f5f5f5] [&_strong]:font-semibold
            "
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* CTA */}
          <div className="mt-12 bg-[#1a1a1a] border border-[#1565c0]/40 rounded-xl p-8">
            <p className="text-[#f5f5f5] font-bold text-xl mb-3">
              Ready to start your project?
            </p>
            <p className="text-[#a0a0a0] mb-6">
              Get a free estimate from Ulloa Construction, serving Anaheim and
              all of Orange County. CSLB Lic. #1144906.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1565c0] hover:bg-[#1976d2] text-white font-bold px-7 py-3.5 rounded-lg transition-colors"
            >
              Get a Free Estimate
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
      </article>

      {/* ── Related Posts ─────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section
          className="py-12 bg-[#1a1a1a] border-t border-[#2a2a2a]"
          aria-labelledby="related-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="related-heading"
              className="text-2xl font-black text-[#f5f5f5] mb-8"
            >
              More Remodeling Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="bg-[#0f0f0f] border border-[#2a2a2a] hover:border-[#1565c0] rounded-xl p-6 flex flex-col transition-all hover:shadow-[0_0_24px_rgba(21,101,192,0.15)]"
                >
                  <div className="text-[#a0a0a0] text-xs mb-3">
                    <time dateTime={related.date}>
                      {new Date(related.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        timeZone: "UTC",
                      })}
                    </time>
                    <span aria-hidden="true"> · </span>
                    <span>{related.readTime}</span>
                  </div>
                  <h3 className="text-[#f5f5f5] font-bold text-base leading-snug mb-3 flex-grow">
                    {related.title}
                  </h3>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4">
                    {related.excerpt}
                  </p>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#1565c0] hover:text-[#1976d2] font-semibold text-sm transition-colors mt-auto"
                    aria-label={`Read more: ${related.title}`}
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
      )}
    </div>
  );
}
