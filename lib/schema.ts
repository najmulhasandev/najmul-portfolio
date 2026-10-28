import { PROJECTS } from "./projects";
import {
  DESCRIPTION, DEVTO, EMAIL, GITHUB, HASHNODE, LINKEDIN, MAIN_SITE, ROLE, SITE_NAME, SITE_URL, TITLE, UPDATED, abs,
} from "./site";

const PERSON_ID = `${SITE_URL}/#person`;

/** One JSON-LD graph for the home page: Person + ProfessionalService + WebSite + ProfilePage. */
export function homeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: SITE_NAME,
        alternateName: "najmulhasandev",
        jobTitle: ROLE,
        description: DESCRIPTION,
        url: SITE_URL,
        image: abs("/profile.jpg"),
        email: EMAIL,
        address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
        knowsLanguage: ["en", "bn"],
        knowsAbout: [
          "React Native", "Expo", "Next.js", "React", "TypeScript", "Node.js", "Supabase", "PostgreSQL",
          "MongoDB", "Telegram bots", "REST APIs",
        ],
        // Verified profiles that belong to the same person. This is what lets search engines
        // treat this site, the main portfolio and the profiles as one entity.
        sameAs: [MAIN_SITE, GITHUB, LINKEDIN, DEVTO, HASHNODE],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: `${SITE_NAME}: freelance app development`,
        url: SITE_URL,
        image: abs("/img/najmul-hasan.webp"),
        provider: { "@id": PERSON_ID },
        areaServed: "Worldwide",
        availableLanguage: ["English", "Bengali"],
        serviceType: [
          "Mobile app development",
          "Web app development",
          "Backend and API development",
          "Telegram bot development",
          "Code audit and fixes",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${SITE_NAME}: Hire`,
        inLanguage: "en",
        publisher: { "@id": PERSON_ID },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: TITLE,
        inLanguage: "en",
        dateModified: UPDATED,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": PERSON_ID },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#work`,
        name: "Selected projects",
        itemListElement: PROJECTS.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/projects/${p.slug}`,
          name: p.name,
        })),
      },
    ],
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}
