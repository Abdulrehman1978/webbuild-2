import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const SITE_URL = "https://tax-zone.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
    { path: "/client-stories", changeFrequency: "monthly", priority: 0.6 },
    { path: "/resources", changeFrequency: "monthly", priority: 0.6 },
    { path: "/services", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/gst", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/income-tax", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/accounting", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/startup", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/export", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/finance", changeFrequency: "monthly", priority: 0.8 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, changeFrequency, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })
  );

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate ?? post.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
