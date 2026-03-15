import type { MetadataRoute } from "next";
import { sideHustles, getAllCategories } from "./lib/side-hustles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://side-hustle-calculator-xi.vercel.app";

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sideHustles.map((h) => ({
      url: `${base}/${h.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...getAllCategories().map((cat) => ({
      url: `${base}/category/${cat.toLowerCase().replace(/\s+/g, "-")}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
