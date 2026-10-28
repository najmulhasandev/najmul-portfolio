import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, UPDATED } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(UPDATED), changeFrequency: "monthly", priority: 1 },
    ...PROJECTS.map((p) => ({
      url: `${SITE_URL}/projects/${p.slug}`,
      lastModified: new Date(UPDATED),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
