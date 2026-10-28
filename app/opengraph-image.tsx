import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ROLE, SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME}, ${ROLE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const font = await readFile(path.join(process.cwd(), "assets/space-grotesk-700.woff"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#06080d",
          backgroundImage:
            "radial-gradient(circle at 10% 0%, rgba(46,230,197,0.35), rgba(46,230,197,0) 55%), radial-gradient(circle at 100% 100%, rgba(142,124,255,0.4), rgba(142,124,255,0) 55%)",
          color: "#edf1fa",
          fontFamily: "Space Grotesk",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30, fontWeight: 700 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(115deg,#2ee6c5,#8e7cff)",
              color: "#05100d",
              fontSize: 28,
            }}
          >
            NH
          </div>
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, lineHeight: 1.04, fontWeight: 700, letterSpacing: -2 }}>{ROLE}</div>
          <div style={{ marginTop: 26, fontSize: 34, color: "#a3afc6" }}>
            Mobile apps, web apps and backends. Freelance and part-time.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#2ee6c5" }}>hire.najmulhasan.dev</div>
      </div>
    ),
    { ...size, fonts: [{ name: "Space Grotesk", data: font, weight: 700, style: "normal" }] },
  );
}
