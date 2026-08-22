import type { MetadataRoute } from "next";
import { blogSlugList } from "@/lib/blog";
import { cityServiceParams } from "@/lib/cityServices";
import { locationSlugList } from "@/lib/locations";
import { getService, serviceSlugList } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ulloa-construction.com";
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugList
    // Exclude keyword-variant pages that canonicalize to another service, so
    // the sitemap only advertises canonical URLs.
    .filter((slug) => !getService(slug)?.canonicalSlug)
    .map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const locationPages: MetadataRoute.Sitemap = locationSlugList.map((city) => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const cityServicePages: MetadataRoute.Sitemap = cityServiceParams().map(
    ({ city, service }) => ({
      url: `${baseUrl}/locations/${city}/${service}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }),
  );

  const blogPages: MetadataRoute.Sitemap = blogSlugList.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...cityServicePages,
    ...blogPages,
  ];
}
