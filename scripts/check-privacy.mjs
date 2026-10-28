// Fails `npm run build` if a phone number, WhatsApp link, personal email or retired handle
// ends up in the source. This site shows ONE contact detail: hire@najmulhasan.dev.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOT = process.cwd();
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", ".vercel", "fonts"]);
const TEXT_EXT = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".json", ".md", ".html", ".css", ".txt", ".svg", ".py", ".yml", ".yaml"]);
const SELF = "scripts/check-privacy.mjs";

const RULES = [
  { name: "Bangladesh phone number", re: /(\+?88[\s-]?)?\b01[3-9][\s-]?\d{4}[\s-]?\d{4}\b/ },
  { name: "international phone number (+880)", re: /\+\s?880[\s-]?\d/ },
  { name: "WhatsApp link", re: /wa\.me\/|api\.whatsapp\.com|whatsapp:\/\//i },
  { name: "tel: link", re: /href\s*=\s*["']?tel:/i },
  { name: "personal email", re: /@(gmail|yahoo|outlook|hotmail)\.com/i },
  { name: "personal email (known)", re: /najmulhasanshahin/i },
  { name: "retired handle", re: /najmulcodes/i },
];

const hits = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const path = join(dir, name);
    const st = statSync(path);
    if (st.isDirectory()) { walk(path); continue; }
    const rel = path.slice(ROOT.length + 1).replaceAll("\\", "/");
    if (rel === SELF || !TEXT_EXT.has(extname(name))) continue;
    const text = readFileSync(path, "utf8");
    for (const { name: label, re } of RULES) {
      const m = text.match(re);
      if (m) hits.push(`${rel}: ${label} (${m[0].trim().slice(0, 40)})`);
    }
  }
}
walk(ROOT);

if (hits.length) {
  console.error("\nPrivacy check failed. Remove these before building:\n  " + hits.join("\n  ") + "\n");
  process.exit(1);
}
console.log("Privacy check passed: no phone, WhatsApp, personal email or retired handle in the source.");
