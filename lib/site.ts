// Single source of truth for identity, URLs and contact. Change the domain here only.
export const SITE_URL = "https://hire.najmulhasan.dev";
export const SITE_NAME = "Najmul Hasan";
export const ROLE = "Full-Stack & React Native Developer";
export const LOCATION = "Dhaka, Bangladesh";

// The ONLY contact detail shown on the site. No phone, no WhatsApp, no personal email.
// `npm run check:privacy` fails the build if one of those slips back in.
export const EMAIL = "hire@najmulhasan.dev";
export const MAILTO = `mailto:${EMAIL}?subject=Hiring%20enquiry`;

export const MAIN_SITE = "https://najmulhasan.dev";
export const BLOG = `${MAIN_SITE}/blog`;
export const GITHUB = "https://github.com/najmulhasandev";
export const LINKEDIN = "https://www.linkedin.com/in/najmulhasandev";
export const DEVTO = "https://dev.to/najmulhasan-dev";
export const HASHNODE = "https://hashnode.com/@najmulhasan";
// Check this opens your Upwork profile (Upwork profile URLs look like /freelancers/~0123abcd...).
export const UPWORK = "https://www.upwork.com/freelancers/~014d596debbed88fb4";
export const CERTIFICATE =
  "https://drive.google.com/file/d/1npAH6Q-1M70o7lRlyuFjzFLO0IYJ8M11/view?usp=sharing";

export const RESUME_PDF = "/resume/Najmul-Hasan-Resume.pdf";
export const RESUME_HTML = "/resume/Najmul-Hasan-Resume.html";

export const TITLE = `${SITE_NAME} | ${ROLE} for Hire`; // 59 characters
export const DESCRIPTION =
  "Freelance full-stack and React Native developer in Dhaka. Mobile apps, web apps, backends and Telegram bots built with Next.js, Node.js and Supabase.";

// Bump when the page content really changes (used for sitemap and schema dateModified).
export const UPDATED = "2026-10-31"; // home page content last changed (bump only on real changes)
export const PROJECTS_UPDATED = "2026-10-27"; // project pages content last changed

export function abs(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
