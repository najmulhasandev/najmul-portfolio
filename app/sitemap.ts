import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";
import { PROJECTS_UPDATED, SITE_URL, UPDATED } from "@/lib/site";

// lastmod reflects real content changes only: the home page uses UPDATED, project pages use
// PROJECTS_UPDATED. changeFrequency and priority are left out on purpose, Google ignores both.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: new Date(UPDATED) },
    ...PROJECTS.map((p) => ({
      url: `${SITE_URL}/projects/${p.slug}`,
      lastModified: new Date(PROJECTS_UPDATED),
    })),
  ];
}
