import type { MetadataRoute } from "next";
import { listPublishedBlogs } from "@/lib/blogApi";

const BASE_URL = "https://www.shantieyetech.com";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/doctors",
  "/services",
  "/services/cataract",
  "/services/glaucoma",
  "/services/retina",
  "/services/lasik",
  "/services/keratoconus",
  "/services/pediatric-eye-care",
  "/services/squint",
  "/blogs",
  "/privacy-policy",
  "/terms-conditions",
  "/cookie-policy",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.7,
  }));

  try {
    const { items } = await listPublishedBlogs({ limit: 100 });
    for (const blog of items) {
      entries.push({
        url: `${BASE_URL}/blogs/${blog.slug}`,
        lastModified: blog.updated_at ? new Date(blog.updated_at) : new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    }
  } catch {
    // Blog service unavailable at build/request time — static routes still ship.
  }

  return entries;
}
