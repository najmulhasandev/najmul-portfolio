#!/usr/bin/env python3
"""
Builds public/resume/Najmul-Hasan-Resume.pdf and .html from one data source.

  pip install reportlab
  python3 scripts/build-resume.py

Project bullets come from lib/projects.ts so the resume never drifts from the site.
The resume shows ONE contact detail: hire@najmulhasan.dev. No phone number is printed.
If you ever need one for a single private copy, run:  RESUME_PHONE="+880..." python3 scripts/build-resume.py
and do NOT commit that output.
"""
import html
import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

NAME = "Najmul Hasan"
ROLE = "Full-Stack & React Native Developer"
LOCATION = "Dhaka, Bangladesh"
EMAIL = "hire@najmulhasan.dev"
SITE = "hire.najmulhasan.dev"
GITHUB = "github.com/najmulhasandev"
LINKEDIN = "linkedin.com/in/najmulhasandev"
CERT_URL = "https://drive.google.com/file/d/1npAH6Q-1M70o7lRlyuFjzFLO0IYJ8M11/view?usp=sharing"


def phone() -> str:
    # Opt-in only, from the environment. Nothing is read from disk, so a number can never be committed by accident.
    return os.environ.get("RESUME_PHONE", "")


def load_projects():
    src = (ROOT / "lib" / "projects.ts").read_text(encoding="utf-8")
    m = re.search(r"export const PROJECTS: Project\[\] = (\[.*?\n\]);", src, re.S)
    if not m:
        sys.exit("Could not find the PROJECTS array in lib/projects.ts")
    return {p["slug"]: p for p in json.loads(m.group(1))}


SUMMARY = (
    "Full-stack developer (MERN and React Native) focused on building and stabilizing real-world "
    "applications: designing APIs, handling authentication and resolving production-level issues such as "
    "API mismatches and state synchronization. Available for freelance and part-time work."
)

SKILLS = [
    ("Frontend", "React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS"),
    ("Mobile", "React Native, Expo, NativeWind"),
    ("Backend", "Node.js, Express.js, REST APIs, JWT authentication, Socket.IO"),
    ("Data", "MongoDB, Supabase (PostgreSQL), Firebase, Firestore"),
    ("Integrations", "Stripe, Claude API, GitHub REST API, Web Push, Brevo, Cloudinary"),
    ("Tools", "Git, GitHub, Postman, Vercel, Python"),
]

PROJECT_ORDER = [
    ("railmate", 2),
    ("badar-uddin-welfare", 2),
    ("microtask-platform", 2),
    ("livecollab", 1),
    ("devfolio-analyzer", 1),
]

EXPERIENCE = [
    (
        "Freelance Full-Stack & React Native Developer",
        "Self-employed, remote",
        "2025 – Present",
        ["Mobile apps, web apps, backends and Telegram bots for clients, plus my own products such as RailMate Bangladesh."],
    ),
    (
        "Data Entry Specialist",
        "Nation IT Limited",
        "2024 – June 2025",
        ["Maintained high data accuracy and consistency, improving attention to detail and structured workflow handling."],
    ),
    (
        "Computer Operator",
        "IT Solution Feni",
        "2015 – 2017",
        ["IT support, computer operations, troubleshooting and system maintenance."],
    ),
]
EDUCATION = [
    ("BBA, Accounting & Finance", "City College Dhaka, Bangladesh", "2019 – 2023"),
    ("Complete Web Development Course", "Programming Hero", "2025 – 2026"),
]
LANGUAGES = "Bengali (native), English (fluent), Hindi (fluent), Arabic (fluent)"


def build_model():
    projects = load_projects()
    out = []
    for slug, n in PROJECT_ORDER:
        p = projects[slug]
        meta = p["status"] or ""
        host = (p["live"] or "").replace("https://", "").rstrip("/")
        title = p["name"] + (f" ({meta})" if meta else "")
        sub = ", ".join(p["stack"][:6]) + (f"  |  {host}" if host else "")
        out.append((title, sub, [p["tagline"]] + p["features"][: n - 1]))
    return out


# ----------------------------------------------------------------------------- HTML
def build_html(projects, tel):
    e = html.escape
    contact = [LOCATION, f'<a href="mailto:{EMAIL}">{EMAIL}</a>']
    if tel:
        contact.append(e(tel))
    contact += [SITE, GITHUB, LINKEDIN]
    parts = [f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>{NAME} | {ROLE} | Resume</title>
<style>
:root{{--ink:#111827;--mut:#4b5563;--line:#d1d5db;--acc:#0f766e}}
*{{box-sizing:border-box}}
body{{margin:0;background:#f3f4f6;color:var(--ink);font:15px/1.55 -apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}}
.page{{max-width:820px;margin:24px auto;padding:44px 52px;background:#fff;box-shadow:0 8px 30px rgba(0,0,0,.08)}}
h1{{margin:0;font-size:30px;letter-spacing:-.02em}}
.role{{margin:2px 0 10px;color:var(--acc);font-weight:600;font-size:16px}}
.contact{{display:flex;flex-wrap:wrap;gap:4px 14px;color:var(--mut);font-size:13px}}
.contact a{{color:inherit}}
h2{{margin:24px 0 8px;padding-bottom:4px;border-bottom:1px solid var(--line);font-size:12.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--acc)}}
.row{{display:flex;justify-content:space-between;gap:16px;align-items:baseline}}
.row b{{font-size:15px}} .row span{{color:var(--mut);font-size:13px;white-space:nowrap}}
.sub{{color:var(--mut);font-size:13px}}
ul{{margin:4px 0 12px;padding-left:18px}} li{{margin:2px 0}}
.skills p{{margin:3px 0}} .skills b{{display:inline-block;min-width:96px}}
.bar{{max-width:820px;margin:20px auto 0;display:flex;gap:10px;justify-content:flex-end;padding:0 8px}}
.bar a{{padding:8px 16px;border-radius:8px;background:#111827;color:#fff;text-decoration:none;font-size:14px}}
@media print{{body{{background:#fff}}.page{{margin:0;box-shadow:none;padding:0}}.bar{{display:none}}@page{{margin:16mm}}}}
@media(max-width:600px){{.page{{padding:28px 20px;margin:0}}.row{{flex-direction:column;gap:0}}}}
</style></head><body>
<div class="bar"><a href="Najmul-Hasan-Resume.pdf" download>Download PDF</a><a href="#" onclick="window.print();return false">Print</a></div>
<main class="page">
<h1>{NAME}</h1><div class="role">{ROLE}</div>
<div class="contact">{"".join(f"<span>{c}</span>" for c in contact)}</div>
<h2>Summary</h2><p>{e(SUMMARY)}</p>
<h2>Skills</h2><div class="skills">{"".join(f"<p><b>{e(k)}</b>{e(v)}</p>" for k, v in SKILLS)}</div>
<h2>Projects</h2>"""]
    for title, sub, bullets in projects:
        parts.append(f'<div class="row"><b>{e(title)}</b></div><div class="sub">{e(sub)}</div><ul>'
                     + "".join(f"<li>{e(b)}</li>" for b in bullets) + "</ul>")
    parts.append("<h2>Experience</h2>")
    for role, org, when, bullets in EXPERIENCE:
        parts.append(f'<div class="row"><b>{e(role)}, {e(org)}</b><span>{e(when)}</span></div><ul>'
                     + "".join(f"<li>{e(b)}</li>" for b in bullets) + "</ul>")
    parts.append("<h2>Education</h2>")
    for deg, org, when in EDUCATION:
        extra = f' (<a href="{CERT_URL}">certificate</a>)' if "Course" in deg else ""
        parts.append(f'<div class="row"><b>{e(deg)}</b><span>{e(when)}</span></div><div class="sub">{e(org)}{extra}</div><br>')
    parts.append(f"<h2>Languages</h2><p>{e(LANGUAGES)}</p></main></body></html>")
    return "".join(parts)


# ----------------------------------------------------------------------------- PDF
def build_pdf(projects, tel, path):
    from reportlab.lib import colors
    from reportlab.lib.enums import TA_LEFT
    from reportlab.lib.pagesizes import A4
    from reportlab.lib.styles import ParagraphStyle
    from reportlab.lib.units import mm
    from reportlab.pdfbase import pdfmetrics
    from reportlab.pdfbase.ttfonts import TTFont
    from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer

    fdir = Path("/usr/share/fonts/truetype/liberation")
    reg, bold = fdir / "LiberationSans-Regular.ttf", fdir / "LiberationSans-Bold.ttf"
    if reg.exists() and bold.exists():
        pdfmetrics.registerFont(TTFont("Body", str(reg)))
        pdfmetrics.registerFont(TTFont("Body-Bold", str(bold)))
        F, FB = "Body", "Body-Bold"
    else:
        F, FB = "Helvetica", "Helvetica-Bold"

    ink, mut, acc = colors.HexColor("#111827"), colors.HexColor("#4b5563"), colors.HexColor("#0f766e")
    st = lambda **k: ParagraphStyle("s", fontName=k.pop("font", F), textColor=k.pop("color", ink), **k)
    name = st(fontSize=24, leading=28, font=FB)
    role = st(fontSize=12.5, leading=16, color=acc, font=FB)
    small = st(fontSize=9, leading=12.5, color=mut)
    h2 = st(fontSize=9, leading=12, color=acc, font=FB, spaceBefore=7, spaceAfter=2)
    body = st(fontSize=9.5, leading=12.7, alignment=TA_LEFT)
    bold_s = st(fontSize=10.2, leading=13.5, font=FB)
    bullet = st(fontSize=9.3, leading=12.1, leftIndent=11, bulletIndent=1)

    def esc(s):
        return html.escape(s, quote=False)

    story = [Paragraph(NAME, name), Paragraph(ROLE, role), Spacer(1, 3)]
    contact = [LOCATION, f'<a href="mailto:{EMAIL}" color="#4b5563">{EMAIL}</a>'] + ([esc(tel)] if tel else []) + [SITE, GITHUB, LINKEDIN]
    story.append(Paragraph("  |  ".join(contact), small))

    def section(title):
        story.append(Paragraph(title.upper(), h2))
        story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#d1d5db"), spaceAfter=4))

    section("Summary")
    story.append(Paragraph(esc(SUMMARY), body))
    section("Skills")
    for k, v in SKILLS:
        story.append(Paragraph(f"<font name='{FB}'>{esc(k)}:</font> {esc(v)}", body))
    section("Projects")
    for title, sub, bullets in projects:
        block = [Paragraph(esc(title), bold_s), Paragraph(esc(sub), small)]
        block += [Paragraph(esc(b), bullet, bulletText="•") for b in bullets]
        block.append(Spacer(1, 4))
        story.append(KeepTogether(block))
    section("Experience")
    for r, org, when, bullets in EXPERIENCE:
        story.append(Paragraph(f"{esc(r)}, {esc(org)}  <font color='#4b5563' size='9'>({esc(when)})</font>", bold_s))
        story += [Paragraph(esc(b), bullet, bulletText="•") for b in bullets]
    section("Education")
    for deg, org, when in EDUCATION:
        extra = f' (<a href="{CERT_URL}" color="#0f766e">certificate</a>)' if "Course" in deg else ""
        story.append(Paragraph(f"{esc(deg)}  <font color='#4b5563' size='9'>({esc(when)})</font>", bold_s))
        story.append(Paragraph(esc(org) + extra, small))
        story.append(Spacer(1, 3))
    section("Languages")
    story.append(Paragraph(esc(LANGUAGES), body))

    doc = SimpleDocTemplate(
        str(path), pagesize=A4, leftMargin=17 * mm, rightMargin=17 * mm, topMargin=12 * mm, bottomMargin=11 * mm,
        title=f"{NAME} | {ROLE} | Resume", author=NAME, subject="Resume",
    )
    doc.build(story)


def main():
    tel = phone()
    projects = build_model()
    outdir = ROOT / "public" / "resume"
    outdir.mkdir(parents=True, exist_ok=True)
    (outdir / "Najmul-Hasan-Resume.html").write_text(build_html(projects, tel), encoding="utf-8")
    build_pdf(projects, tel, outdir / "Najmul-Hasan-Resume.pdf")
    print("wrote", outdir / "Najmul-Hasan-Resume.pdf", "and .html (phone included:", bool(tel), ")")


if __name__ == "__main__":
    sys.exit(main())
