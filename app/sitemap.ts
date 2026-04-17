import type { MetadataRoute } from "next";

import { portfolioData } from "@/lib/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: portfolioData.person.website,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
