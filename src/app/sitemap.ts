import type { MetadataRoute } from "next";
import { serviceSlugList } from "@/lib/services";
import { locationSlugList } from "@/lib/locations";
import { blogSlugList } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ulloa-construction.com";
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugList.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const locationPages: MetadataRoute.Sitemap = locationSlugList.map((city) => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugList.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages];
}
