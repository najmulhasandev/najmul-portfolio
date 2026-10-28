import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="wrap nf">
      <div>
        <h1 className="grad-text">404</h1>
        <p className="sub" style={{ marginInline: "auto" }}>This page does not exist, but the work does.</p>
        <div className="row-btns" style={{ justifyContent: "center" }}>
          <Link className="btn btn-primary" href="/">Back to home</Link>
          <Link className="btn" href="/#work">See my work</Link>
        </div>
      </div>
    </div>
  );
}
