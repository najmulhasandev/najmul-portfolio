"use client";

import Link from "next/link";
import { useState } from "react";
import { Close, Menu } from "./Icons";
import { MAILTO } from "@/lib/site";

const LINKS = [
  { href: "/#services", label: "What I do" },
  { href: "/#work", label: "Work" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#skills", label: "Stack" },
  { href: "/#writing", label: "Writing" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="wrap nav-row">
        <Link href="/" className="brand" aria-label="Najmul Hasan, home" onClick={close}>
          <span className="brand-mark" aria-hidden="true">NH</span>
          Najmul Hasan
        </Link>
        <nav className="nav" aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <a className="btn btn-primary btn-sm" href={MAILTO}>Hire me</a>
        </nav>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
      <nav id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`} aria-label="Mobile">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={close}>{l.label}</Link>
        ))}
        <a className="btn btn-primary" href={MAILTO} onClick={close}>Hire me</a>
      </nav>
    </header>
  );
}
