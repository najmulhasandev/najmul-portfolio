import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CopyEmail from "@/components/CopyEmail";
import { ArrowUpRight, Bot, Browser, Clock, Download, Github, Linkedin, Mail, Phone, Pin, Server, Spark, Wrench } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import ProjectGrid from "@/components/ProjectGrid";
import {
  ARTICLES, EDUCATION, EXPERIENCE, FAQ, MARQUEE, SERVICES, SKILLS, STEPS, TESTIMONIALS,
} from "@/lib/content";
import { PROJECTS, isLive } from "@/lib/projects";
import { ScreenWall } from "@/components/device-showcase";
import { wallScreens } from "@/lib/showcase-screens";
import { homeGraph } from "@/lib/schema";
import {
  BLOG, CERTIFICATE, EMAIL, GITHUB, LINKEDIN, MAILTO, MAIN_SITE, RESUME_PDF, UPWORK,
} from "@/lib/site";

const ICONS = { phone: Phone, browser: Browser, server: Server, bot: Bot, wrench: Wrench } as const;

export const metadata: Metadata = { alternates: { canonical: "/" } };

const fmt = (d: string) =>
  new Date(`${d}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export default function Home() {
  const featured = PROJECTS.find((p) => p.slug === "railmate")!;
  const liveCount = PROJECTS.filter((p) => isLive(p.status)).length;
  const [lead, ...rest] = TESTIMONIALS;

  return (
    <>
      <JsonLd data={homeGraph()} />

      {/* HERO */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <h1 className="h1 rise" style={{ ["--d" as string]: "0.08s" }}>
              Mobile apps and web products that <span className="grad-text">actually ship.</span>
            </h1>
            <p className="lead rise" style={{ ["--d" as string]: "0.16s" }}>
              I&apos;m <strong>Najmul Hasan</strong>, a full-stack and React Native developer in Dhaka. I build{" "}
              <strong>mobile apps, web apps, backends and Telegram bots</strong> for founders and teams who need working
              software, not a demo.
            </p>
            <div className="hero-cta rise" style={{ ["--d" as string]: "0.24s" }}>
              <a className="btn btn-primary" href={MAILTO}><Mail /> Hire me</a>
              <a className="btn" href="#work">See my work</a>
              <a className="btn" href={RESUME_PDF} target="_blank" rel="noopener noreferrer"><Download /> Resume</a>
            </div>
            <p className="hero-meta rise" style={{ ["--d" as string]: "0.32s" }}>
              <span><Pin /> Dhaka, Bangladesh · Remote</span>
              <span><Clock /> Replies within 24 hours</span>
              <span><Spark /> English and Bangla</span>
            </p>
          </div>
          <div className="portrait rise" style={{ ["--d" as string]: "0.2s" }}>
            <div className="portrait-ring">
              <Image
                src="/img/najmul-hasan.webp"
                alt="Portrait of Najmul Hasan, full-stack and React Native developer"
                width={640}
                height={640}
                priority
                unoptimized
                sizes="(max-width: 980px) 240px, 400px"
              />
            </div>
            <span className="float-chip c1"><i style={{ background: "var(--teal)" }} /> React Native</span>
            <span className="float-chip c2"><i style={{ background: "var(--violet)" }} /> Next.js</span>
            <span className="float-chip c3"><i style={{ background: "var(--pink)" }} /> Supabase</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="wrap" data-reveal>
        <div className="stats">
          <div className="stat"><b data-count={PROJECTS.length}>{PROJECTS.length}</b><span>projects in this portfolio</span></div>
          <div className="stat"><b data-count={liveCount}>{liveCount}</b><span>products live in production</span></div>
          <div className="stat"><b data-count={TESTIMONIALS.length}>{TESTIMONIALS.length}</b><span>reviews from real clients</span></div>
          <div className="stat"><b>24h</b><span>typical reply time</span></div>
        </div>
      </div>

      <div className="marquee" style={{ marginTop: 56 }} aria-label="Technologies I work with">
        <div className="marquee-track">
          {MARQUEE.map((t) => <span key={t}>{t}</span>)}
          {MARQUEE.map((t) => <span key={`${t}-2`} aria-hidden="true">{t}</span>)}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="wrap">
          <header className="section-head" data-reveal>
            <span className="eyebrow">What I do</span>
            <h2 className="h2">One developer for the whole product</h2>
            <p className="sub">From the first screen to the deployed backend, so you work with one person instead of coordinating three.</p>
          </header>
          <div className="bento">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <article key={s.title} className="card spot" data-reveal style={{ ["--d" as string]: `${i * 0.06}s` }}>
                  <span className="ico"><Icon /></span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul className="tags" aria-label={`${s.title} technologies`}>
                    {s.tags.map((t) => <li key={t} className="tag">{t}</li>)}
                  </ul>
                </article>
              );
            })}
            <article className="card cta-card" data-reveal>
              <div>
                <h3>Not sure which one you need?</h3>
                <p>Send two lines about the project. I reply with questions, a rough scope and a time estimate.</p>
              </div>
              <a className="btn btn-primary" href={MAILTO}><Mail /> Hire me</a>
            </article>
          </div>

          <ol className="steps" style={{ marginTop: 16 }} aria-label="How a project runs">
            {STEPS.map((s, i) => (
              <li key={s.n} className="card" data-reveal style={{ ["--d" as string]: `${i * 0.08}s` }}>
                <span className="num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WORK */}
      <section className="section" id="work">
        <div className="wrap">
          <header className="section-head" data-reveal>
            <span className="eyebrow">Selected work</span>
            <h2 className="h2">Products that real people use</h2>
            <p className="sub">Live apps, production systems and focused builds. Each one has a short case study with the problems and the fixes.</p>
          </header>

          <article className="card featured" data-reveal>
            <div>
              <span className="badge green">{featured.status} in production</span>
              <h3>{featured.name}</h3>
              <p className="about">{featured.overview}</p>
              <div className="facts">
                <div><b>137</b><span>trains covered</span></div>
                <div><b>1,225</b><span>stops in the dataset</span></div>
                <div><b>2</b><span>languages: Bangla and English</span></div>
                <div><b>Live</b><span>in production at railmatebd.com</span></div>
              </div>
              <div className="row-btns">
                <Link className="btn btn-primary" href={`/projects/${featured.slug}`}>Read the case study <ArrowUpRight /></Link>
                {featured.live && <a className="btn" href={featured.live} target="_blank" rel="noopener noreferrer">Open the live site <ArrowUpRight /></a>}
              </div>
            </div>
            <div className="shot">
              <div className="shot-bar"><i /><i /><i /><span>railmatebd.com</span></div>
              <Image
                src={`/img/projects/${featured.image}.webp`}
                alt="Screenshot of RailMate Bangladesh"
                width={1280}
                height={featured.imgH}
                sizes="(max-width: 980px) 100vw, 560px"
                loading="lazy"
                unoptimized
              />
            </div>
          </article>

          <ProjectGrid projects={PROJECTS} />
        </div>
      </section>

      {/* SCREEN WALL */}
      <ScreenWall
        eyebrow="Shipped work"
        title="From first idea to a product people use."
        screens={wallScreens}
      />

      {/* REVIEWS */}
      <section className="section" id="reviews">
        <div className="wrap">
          <header className="section-head" data-reveal>
            <span className="eyebrow">Client reviews</span>
            <h2 className="h2">What clients say</h2>
            <p className="sub">Five reviews from founders and directors in Bangladesh and the Gulf.</p>
          </header>
          <div className="quotes">
            {[lead, ...rest].map((t, i) => (
              <figure key={t.name} className={`quote card${i === 0 ? " lead-quote" : ""}`} data-reveal style={{ ["--d" as string]: `${(i % 2) * 0.08}s` }}>
                <span className="qmark" aria-hidden="true">“</span>
                <blockquote><p>{t.quote}</p></blockquote>
                <figcaption>
                  <span className="avatar" aria-hidden="true">{t.initials}</span>
                  <span>
                    <b>{t.name}</b>
                    <small>{t.role} · {t.place}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="wrap">
          <header className="section-head" data-reveal>
            <span className="eyebrow">Stack</span>
            <h2 className="h2">Tools I use every week</h2>
          </header>
          <div className="skills">
            {SKILLS.map((g, i) => (
              <section key={g.group} className="card spot" data-reveal style={{ ["--d" as string]: `${(i % 3) * 0.06}s` }}>
                <h3>{g.group}</h3>
                <ul className="tags">
                  {g.items.map((t) => <li key={t} className="tag">{t}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* WRITING */}
      <section className="section" id="writing">
        <div className="wrap">
          <header className="section-head" data-reveal>
            <span className="eyebrow">Writing</span>
            <h2 className="h2">How I think about the work</h2>
            <p className="sub">Technical write-ups from real projects: what broke, what fixed it, and the code.</p>
          </header>
          <div className="articles">
            {ARTICLES.map((a) => (
              <a key={a.slug} className="article card spot" href={`${BLOG}/${a.slug}`} target="_blank" rel="noopener noreferrer" data-reveal>
                <div>
                  <h3>{a.title}</h3>
                  <small>{fmt(a.date)} · najmulhasan.dev</small>
                </div>
                <ArrowUpRight />
              </a>
            ))}
          </div>
          <div className="row-btns">
            <a className="btn" href={BLOG} target="_blank" rel="noopener noreferrer">All articles <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="wrap about-grid">
          <div data-reveal>
            <span className="eyebrow">About</span>
            <h2 className="h2" style={{ marginBottom: 22 }}>The developer behind the work</h2>
            <p>
              I&apos;m <strong>Najmul Hasan</strong>, a developer based in Dhaka. I build the whole product: the mobile app,
              the web app, the backend and the glue between them.
            </p>
            <p>
              My flagship project is <strong>RailMate Bangladesh</strong>, a bilingual railway companion app that is live in
              production. I own its product thinking, architecture and engineering, so I know what it takes to keep real users
              happy after launch.
            </p>
            <p>
              My background in <strong>business administration</strong> helps me ask product questions early, flag risks plainly
              and keep scope honest. I work remotely in English and Bangla, on Dhaka time (UTC+6).
            </p>
            <div className="row-btns">
              <a className="btn" href={GITHUB} target="_blank" rel="noopener noreferrer"><Github /> GitHub</a>
              <a className="btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer"><Linkedin /> LinkedIn</a>
              <a className="btn" href={MAIN_SITE} target="_blank" rel="noopener noreferrer">Personal site <ArrowUpRight /></a>
            </div>
          </div>
          <div data-reveal style={{ ["--d" as string]: "0.1s" }}>
            <h3 className="eyebrow" style={{ marginBottom: 22 }}>Experience</h3>
            <ul className="timeline">
              {EXPERIENCE.map((e) => (
                <li key={e.title}>
                  <time>{e.when}</time>
                  <h3>{e.title}</h3>
                  <p>{e.where}</p>
                  <p>{e.text}</p>
                </li>
              ))}
            </ul>
            <h3 className="eyebrow" style={{ margin: "44px 0 22px" }}>Education</h3>
            <ul className="timeline">
              {EDUCATION.map((e) => (
                <li key={e.title}>
                  <h3>{e.title}</h3>
                  <p>
                    {e.where}
                    {"cert" in e && e.cert && (
                      <> · <a href={CERTIFICATE} target="_blank" rel="noopener noreferrer">View certificate</a></>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="wrap">
          <header className="section-head" data-reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="h2">Before you write to me</h2>
          </header>
          <div className="faq" data-reveal>
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>
                  {f.a}
                  {f.q === "Do you work through Upwork?" && (
                    <> <a href={UPWORK} target="_blank" rel="noopener noreferrer">Open my Upwork profile</a>.</>
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="wrap">
          <div className="final" data-reveal>
            <span className="eyebrow">Let&apos;s talk</span>
            <h2>Have something you want built?</h2>
            <p>Send two lines about it. I reply within 24 hours with questions and a rough plan.</p>
            <div className="row-btns">
              <a className="btn btn-primary" href={MAILTO}><Mail /> Email me</a>
              <CopyEmail email={EMAIL} />
              <a className="btn" href={UPWORK} target="_blank" rel="noopener noreferrer">Hire on Upwork <ArrowUpRight /></a>
              <a className="btn" href={RESUME_PDF} target="_blank" rel="noopener noreferrer"><Download /> Resume (PDF)</a>
            </div>
            <p className="mail-line">{EMAIL}</p>
          </div>
        </div>
      </section>
    </>
  );
}
