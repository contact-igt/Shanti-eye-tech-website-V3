import type { MetadataRoute } from "next";

const BASE_URL = "https://www.shantieyetech.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you", "/error"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
