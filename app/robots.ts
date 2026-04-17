import type { MetadataRoute } from "next";

import { portfolioData } from "@/lib/portfolio-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${portfolioData.person.website}/sitemap.xml`,
  };
}
