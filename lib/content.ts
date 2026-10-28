// All page copy that is not a project lives here. Edit text here, not in app/page.tsx.

export const MARQUEE = [
  "React Native", "Expo", "Next.js", "React", "TypeScript", "Node.js", "Supabase", "PostgreSQL",
  "MongoDB", "Tailwind CSS", "Python", "aiogram", "Pyrogram", "Stripe", "Vercel", "EAS Build",
];

export const SERVICES = [
  {
    icon: "phone",
    title: "Mobile apps",
    text: "React Native and Expo apps for Android and iOS with a Supabase backend, offline-tolerant screens and push notifications.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase"],
  },
  {
    icon: "browser",
    title: "Web apps and dashboards",
    text: "Next.js and React products such as marketplaces, booking platforms and admin dashboards that load fast on slow connections.",
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    icon: "server",
    title: "Backends and APIs",
    text: "REST APIs, role-based access, payments and data models in PostgreSQL or MongoDB that hold up in production.",
    tags: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    icon: "bot",
    title: "Telegram bots and automation",
    text: "Production bots with admin panels, payment flows and scheduled jobs, built with aiogram or Pyrogram.",
    tags: ["Python", "aiogram", "Pyrogram"],
  },
  {
    icon: "wrench",
    title: "Audits and fixes",
    text: "Pre-launch reviews, bug hunts, performance and technical SEO fixes for React Native, Next.js and Supabase projects.",
    tags: ["Core Web Vitals", "Technical SEO", "Code review"],
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Brief",
    text: "You send the goal, the deadline and a budget range. I reply with questions and a short written scope for you to approve.",
  },
  {
    n: "02",
    title: "Build",
    text: "Short cycles with a working build to try each week, so surprises show up early instead of at the end.",
  },
  {
    n: "03",
    title: "Launch and handover",
    text: "Deployment, a clean repository you own and a written handover so anyone can pick the project up later.",
  },
] as const;

export const SKILLS = [
  { group: "Mobile", items: ["React Native", "Expo", "EAS Build", "NativeWind", "Zustand", "Push notifications"] },
  { group: "Web", items: ["Next.js App Router", "React", "TypeScript", "Tailwind CSS", "Vite"] },
  { group: "Backend and data", items: ["Node.js", "Express", "REST APIs", "Supabase", "PostgreSQL", "MongoDB"] },
  { group: "Bots and automation", items: ["Python", "aiogram", "Pyrogram", "Telegram Bot API", "Redis"] },
  { group: "Auth and payments", items: ["Supabase Auth (email OTP)", "JWT", "NextAuth.js", "Firebase Auth", "Stripe"] },
  { group: "Delivery", items: ["Git and GitHub", "Vercel", "Railway", "Netlify", "Core Web Vitals", "Technical SEO"] },
] as const;

// Verified reviews received from real clients.
export const TESTIMONIALS = [
  {
    quote:
      "Najmul understood our requirements quickly and turned our ideas into a reliable, well-structured application. His technical expertise and ownership throughout development made the entire process smooth.",
    name: "Tanvir Rahman",
    role: "Founder & CEO, Technology Startup",
    place: "Dhaka, Bangladesh",
    initials: "TR",
  },
  {
    quote:
      "From architecture to deployment, Najmul handled the technical side with confidence. We appreciated his clear communication, practical recommendations, and focus on delivering a solution built for growth.",
    name: "Omar Al Mansoori",
    role: "Managing Director, Digital Solutions Company",
    place: "Dubai, UAE",
    initials: "OM",
  },
  {
    quote:
      "What stood out was his ability to understand business needs and translate them into working software. The implementation was organized, and communication remained professional throughout the project.",
    name: "Faisal Al-Harbi",
    role: "Founder, E-commerce Business",
    place: "Riyadh, Saudi Arabia",
    initials: "FH",
  },
  {
    quote:
      "We needed a developer who could manage both frontend and backend without losing sight of the user experience. Najmul approached the project methodically and helped us turn a complex idea into a practical product.",
    name: "Mahmudul Hasan",
    role: "Co-founder, SaaS Platform",
    place: "Chattogram, Bangladesh",
    initials: "MH",
  },
  {
    quote:
      "Najmul was responsive, solution-oriented, and honest about technical trade-offs. His end-to-end approach to development and deployment gave us greater confidence in our product.",
    name: "Khalid Al-Kuwari",
    role: "Product Director, Technology Company",
    place: "Doha, Qatar",
    initials: "KK",
  },
] as const;

// Published articles on najmulhasan.dev/blog.
export const ARTICLES = [
  {
    slug: "railmate-bangladesh-train-app",
    title: "RailMate Bangladesh: A Train Search and Live Updates App for Passengers",
    date: "2026-10-21",
  },
  {
    slug: "supabase-rpc-web-mobile",
    title: "One Supabase RPC Function for Web and Mobile: Sharing Search Logic Between Next.js and React Native",
    date: "2026-10-19",
  },
  {
    slug: "supabase-email-otp-nextjs-6-digit-code",
    title: "Supabase Email OTP in Next.js: 6-Digit Codes Instead of Magic Links",
    date: "2026-10-14",
  },
  {
    slug: "nextjs-rate-limiting-upstash-redis-serverless",
    title: "Rate Limiting Next.js API Routes with Upstash Redis (and Why In-Memory Fails on Serverless)",
    date: "2026-10-14",
  },
  {
    slug: "github-contents-api-cms-nextjs",
    title: "GitHub Contents API CMS in Next.js: Publish Markdown Without a Database",
    date: "2026-10-16",
  },
] as const;

export const EXPERIENCE = [
  {
    when: "2025 – Present",
    title: "Freelance Full-Stack & React Native Developer",
    where: "Self-employed · Remote",
    text: "Mobile apps, web apps, backends and Telegram bots for clients, plus my own products such as RailMate Bangladesh.",
  },
  {
    when: "2024 – June 2025",
    title: "Data Entry Specialist",
    where: "Nation IT Limited",
    text: "Structured data operations and record keeping with a focus on accuracy across business workflows.",
  },
  {
    when: "2015 – 2017",
    title: "Computer Operator",
    where: "IT Solution Feni",
    text: "IT support, computer operations, troubleshooting and system maintenance.",
  },
] as const;

export const EDUCATION = [
  { title: "BBA, Accounting & Finance", where: "City College" },
  { title: "Complete Web Development (certification)", where: "Programming Hero", cert: true },
  { title: "HSC, Business Studies", where: "South East Degree College" },
  { title: "SSC, Business Studies", where: "Fazilpur Farhad Nagar Zinnah High School" },
] as const;

export const FAQ = [
  {
    q: "Are you available right now?",
    a: "Yes, for freelance projects and part-time contracts. Email me the goal and the deadline and I reply within about 24 hours.",
  },
  {
    q: "Can you build a whole product on your own?",
    a: "Yes: mobile app or web app, backend, database, authentication and deployment. For visual design I work from your designs or a clean, simple system.",
  },
  {
    q: "How do you price a project?",
    a: "Fixed price for clearly scoped work, hourly or weekly for open-ended work. I give a written estimate after the first conversation, not from a one-line message.",
  },
  {
    q: "Do you work through Upwork?",
    a: "Yes. You can hire me through my Upwork profile or write to me here by email, whichever suits you.",
  },
  {
    q: "Which time zone and languages?",
    a: "Dhaka, UTC+6. I work in English and Bangla, and I send short written updates so time zones never slow the work.",
  },
  {
    q: "What do you need to get started?",
    a: "The goal, who it is for, a deadline and a budget range. Sketches or reference apps help. I write the rest down as a scope you can approve.",
  },
] as const;
