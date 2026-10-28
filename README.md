# Najmul Hasan: hire portfolio

The portfolio I send to recruiters and freelance clients. Live at **https://hire.najmulhasan.dev**.

Full-stack and React Native developer in Dhaka, Bangladesh, available for freelance and part-time work.
Contact: **hire@najmulhasan.dev** (the only contact detail on the site).

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · plain CSS (no framework) · self-hosted fonts · Vercel.
No client-side data fetching and no database: every page is statically generated.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # privacy check + production build
npm run typecheck
npm run lint
```

## Where things live

| To change | Edit |
|---|---|
| Name, role, email, profile links, domain, SEO title and description | `lib/site.ts` |
| Services, skills, reviews, experience, education, FAQ, articles | `lib/content.ts` |
| Projects and case studies | `lib/projects.ts` (+ images in `public/img/projects/`) |
| Page layout and section order | `app/page.tsx` |
| JSON-LD (Person, ProfessionalService, WebSite, ProfilePage, ItemList) | `lib/schema.ts` |
| Colors, spacing, typography | `app/globals.css` (tokens at the top) |
| Resume (PDF + HTML) | `scripts/build-resume.py`, then `npm run resume` |

After a content change, bump `UPDATED` in `lib/site.ts` so the sitemap and schema `dateModified` move.

## SEO setup

- One canonical URL per page, `metadataBase` from `SITE_URL`, Open Graph and Twitter cards, generated 1200x630 share image.
- JSON-LD graph on the home page; `BreadcrumbList` + `CreativeWork` on each project page.
- `sitemap.xml` and `robots.txt` generated from the same constants.
- Self-hosted, preloaded fonts, statically generated HTML, lazy-loaded screenshots, no layout shift on the hero.
- `/resume/*` is served with `X-Robots-Tag: noindex` so the home page is what ranks, not the PDF.

## Privacy rule

The site shows one contact detail: `hire@najmulhasan.dev`. No phone number, no WhatsApp, no personal email.
`npm run check:privacy` runs before every build and fails it if one of those (or the retired GitHub handle) appears in the source.
The resume script prints no phone number unless you pass `RESUME_PHONE` for a private copy.

## Deploy

Import the repository in Vercel (framework: Next.js, no environment variables needed), add the domain
`hire.najmulhasan.dev`, and point a `CNAME` for `hire` to `cname.vercel-dns.com` in Cloudflare (DNS only, not proxied).

## Related

- Personal site and blog: https://najmulhasan.dev
- GitHub: https://github.com/najmulhasandev
