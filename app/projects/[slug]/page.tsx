import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { breadcrumbs } from "@/lib/schema";
import { ArrowUpRight, Github, Mail } from "@/components/Icons";
import { PROJECTS, getProject, isLive } from "@/lib/projects";
import { MAILTO, SITE_NAME, SITE_URL, abs } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const description = `${p.tagline} Case study by ${SITE_NAME}: ${p.stack.slice(0, 4).join(", ")}.`;
  const title = `${p.name}: ${p.category} Case Study`;
  return {
    title,
    description,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/projects/${p.slug}`,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [{ url: `/img/projects/${p.image}.webp`, width: 1280, height: p.imgH, alt: `Screenshot of ${p.name}` }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${SITE_NAME}`, description, images: [`/img/projects/${p.image}.webp`] },
  };
}

const AREA_LABEL: Record<string, string> = { frontend: "Frontend", backend: "Backend", database: "Database", auth: "Auth" };

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = PROJECTS.findIndex((x) => x.slug === p.slug);
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/projects/${p.slug}#project`,
    name: p.name,
    headline: p.tagline,
    description: p.overview,
    url: `${SITE_URL}/projects/${p.slug}`,
    image: abs(`/img/projects/${p.image}.webp`),
    ...(p.slug === "petcare-system" ? {} : { author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: SITE_NAME } }),
    keywords: p.stack.join(", "),
    ...(p.live ? { sameAs: [p.live] } : {}),
  };

  return (
    <article className="section detail">
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbs([{ name: "Home", path: "/" }, { name: "Work", path: "/#work" }, { name: p.name, path: `/projects/${p.slug}` }])} />
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link> / <Link href="/#work">Work</Link> / <span aria-current="page">{p.name}</span>
        </nav>

        <header className="detail-hero">
          {p.status && <span className={`badge${isLive(p.status) ? " green" : ""}`}>{p.status}</span>}
          <h1>{p.name}</h1>
          <p className="lead">{p.tagline}</p>
          <div className="row-btns">
            {p.live && (
              <a className="btn btn-primary btn-sm" href={p.live} target="_blank" rel="noopener noreferrer">
                Live site <ArrowUpRight />
              </a>
            )}
            {p.code && (
              <a className="btn btn-sm" href={p.code} target="_blank" rel="noopener noreferrer">
                <Github /> Source code
              </a>
            )}
          </div>
        </header>

        <figure className="shot detail-shot">
          <div className="shot-bar" aria-hidden="true"><i /><i /><i />{p.live && <span>{new URL(p.live).host}</span>}</div>
          <Image
            src={`/img/projects/${p.image}.webp`}
            alt={`Screenshot of ${p.name}`}
            width={1280}
            height={p.imgH}
            sizes="(max-width: 1200px) 100vw, 1160px"
            priority
            unoptimized
          />
        </figure>

        <div className="detail-cols" style={{ marginTop: 56 }}>
          <div>
            <section>
              <h2>Overview</h2>
              <p>{p.overview}</p>
            </section>
            <section>
              <h2>What it does</h2>
              <ul className="checks">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>Problems and how I solved them</h2>
              <div className="pairs">
                {p.challenges.map((c, k) => (
                  <div key={c} className="card pair">
                    <h3>Problem</h3>
                    <p>{c}</p>
                    {p.solutions[k] && (
                      <>
                        <h3 className="fix">Fix</h3>
                        <p>{p.solutions[k]}</p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="side" aria-label="Project details">
            <div className="card">
              <h3>Stack</h3>
              <dl>
                {Object.entries(p.tech).map(([area, items]) => (
                  <div key={area}>
                    <dt>{AREA_LABEL[area] ?? area}</dt>
                    <dd>{items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="card cta-card" style={{ display: "block" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", textTransform: "none", letterSpacing: "-0.01em", color: "var(--text)" }}>
                Want something like this?
              </h3>
              <p>I take on freelance and part-time projects. Send a short brief.</p>
              <a className="btn btn-primary btn-sm" style={{ marginTop: 16 }} href={MAILTO}>
                <Mail /> Hire me
              </a>
            </div>
          </aside>
        </div>

        <nav className="next-prev" aria-label="More projects">
          <Link className="card spot" href={`/projects/${prev.slug}`} rel="prev">
            <small>← Previous</small>
            <b>{prev.name}</b>
          </Link>
          <Link className="card spot" href={`/projects/${next.slug}`} rel="next">
            <small>Next →</small>
            <b>{next.name}</b>
          </Link>
        </nav>
      </div>
    </article>
  );
}
