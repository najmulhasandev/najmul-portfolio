import { BLOG, GITHUB, LINKEDIN, RESUME_PDF, SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-row">
        <p>
          © {new Date().getFullYear()} {SITE_NAME}. Built with Next.js and a lot of coffee.
        </p>
        <nav className="foot-links" aria-label="Footer">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={BLOG} target="_blank" rel="noopener noreferrer">Blog</a>
          <a href={RESUME_PDF} target="_blank" rel="noopener noreferrer">Resume (PDF)</a>
          <a href="#top">Back to top ↑</a>
        </nav>
      </div>
    </footer>
  );
}
