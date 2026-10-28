"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "./Icons";
import { FILTERS, isLive, type Project } from "@/lib/projects";

type Filter = (typeof FILTERS)[number];

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("All");
  const counts = (f: Filter) => (f === "All" ? projects.length : projects.filter((p) => p.category === f).length);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects by type">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className="chip"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
          >
            {f} <span aria-hidden="true">· {counts(f)}</span>
          </button>
        ))}
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        Showing {counts(active)} {active === "All" ? "" : active} project{counts(active) === 1 ? "" : "s"}.
      </p>
      <ul className="pgrid">
        {projects.map((p) => (
          <li key={p.slug} hidden={active !== "All" && p.category !== active} className="pcard card spot">
            <div className="thumb">
              <Image
                src={`/img/projects/${p.image}-640.webp`}
                alt={`Screenshot of ${p.name}`}
                width={640}
                height={Math.round(p.imgH / 2)}
                sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 380px"
                loading="lazy"
                unoptimized
              />
            </div>
            <div className="body">
              {p.status && <span className={`badge${isLive(p.status) ? " green" : ""}`} style={{ alignSelf: "flex-start", marginBottom: 12 }}>{p.status}</span>}
              <h3>
                <Link href={`/projects/${p.slug}`} className="cover">
                  {p.name}
                </Link>
                <ArrowUpRight />
              </h3>
              <p>{p.tagline}</p>
              <ul className="tags" aria-label="Main technologies">
                {p.stack.slice(0, 3).map((t) => (
                  <li key={t} className="tag">{t}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
