import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base: P = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export const ArrowUpRight = (p: P) => (
  <svg {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Mail = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 8 8 6 8-6" /></svg>
);
export const Download = (p: P) => (
  <svg {...base} {...p}><path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" /></svg>
);
export const Menu = (p: P) => (
  <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = (p: P) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Copy = (p: P) => (
  <svg {...base} {...p}><rect x="9" y="9" width="11" height="11" rx="2.5" /><path d="M5 15V6.5A2.5 2.5 0 0 1 7.5 4H15" /></svg>
);
export const Phone = (p: P) => (
  <svg {...base} {...p}><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></svg>
);
export const Browser = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="4.5" width="18" height="15" rx="2.5" /><path d="M3 9h18M7 6.8h.01M10 6.8h.01" /></svg>
);
export const Server = (p: P) => (
  <svg {...base} {...p}><rect x="3.5" y="4" width="17" height="6.5" rx="2" /><rect x="3.5" y="13.5" width="17" height="6.5" rx="2" /><path d="M7.5 7.2h.01M7.5 16.8h.01" /></svg>
);
export const Bot = (p: P) => (
  <svg {...base} {...p}><rect x="4" y="8" width="16" height="11" rx="3" /><path d="M12 4v4M9 13h.01M15 13h.01M9.5 16.2h5" /></svg>
);
export const Wrench = (p: P) => (
  <svg {...base} {...p}><path d="M14.5 6.5a4 4 0 0 0 4.9 4.9L20.5 12.5 12.5 20.5a2.1 2.1 0 0 1-3-3l8-8" /><path d="m15 7 2-2 2 2-2 2" /></svg>
);
export const Pin = (p: P) => (
  <svg {...base} {...p}><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" /><circle cx="12" cy="10" r="2.4" /></svg>
);
export const Clock = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
);
export const Spark = (p: P) => (
  <svg {...base} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></svg>
);
export const Github = (p: P) => (
  <svg {...base} {...p}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg>
);
export const Linkedin = (p: P) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10.5V16M8 7.8h.01M12 16v-5.5m0 2.2c0-1.4 1-2.2 2.2-2.2s1.8.8 1.8 2.2V16" /></svg>
);
