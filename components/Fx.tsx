"use client";

import { useEffect } from "react";

/**
 * Site-wide progressive enhancement, mounted once in the layout:
 *  - scroll reveal for [data-reveal] (never used above the fold)
 *  - cursor spotlight on .spot cards
 *  - count-up for [data-count]
 *  - border under the sticky header once the page scrolls
 * Everything is visible without JS, and all motion is skipped for reduced-motion users.
 */
export default function Fx() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --- reveal ---
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let io: IntersectionObserver | null = null;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );
      items.forEach((el) => io!.observe(el));
    }

    // --- count up ---
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    let co: IntersectionObserver | null = null;
    if (!reduce && "IntersectionObserver" in window) {
      co = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            const el = e.target as HTMLElement;
            co?.unobserve(el);
            const end = Number(el.dataset.count);
            const suffix = el.dataset.suffix ?? "";
            const fmt = new Intl.NumberFormat("en-US");
            const t0 = performance.now();
            const dur = 1100;
            const tick = (t: number) => {
              const p = Math.min(1, (t - t0) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              el.textContent = fmt.format(Math.round(end * eased)) + suffix;
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        },
        { threshold: 0.6 },
      );
      counters.forEach((el) => co!.observe(el));
    }

    // --- spotlight ---
    const onMove = (ev: PointerEvent) => {
      const card = (ev.target as HTMLElement | null)?.closest<HTMLElement>(".spot");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${ev.clientX - r.left}px`);
      card.style.setProperty("--my", `${ev.clientY - r.top}px`);
    };
    if (!reduce) document.addEventListener("pointermove", onMove, { passive: true });

    // --- header border ---
    const header = document.querySelector<HTMLElement>(".site-header");
    const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    root.classList.add("fx-ready");
    return () => {
      io?.disconnect();
      co?.disconnect();
      document.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
