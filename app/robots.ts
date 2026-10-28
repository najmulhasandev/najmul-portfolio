import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // /resume/ is NOT disallowed on purpose: it carries an X-Robots-Tag noindex header (next.config.ts),
  // and crawlers can only obey that header if they are allowed to fetch the file.
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
