# Arun P Divakaran — Cloud, AI & Digital Transformation

A premium, enterprise-grade personal consulting website built with **React 19 + Vite + Tailwind CSS**, featuring Framer Motion animations, a React Three Fiber 3D hero, dark/light mode, and SEO optimization.

> **Tagline:** Cloud • AI • Digital Transformation
> _Helping businesses scale through Cloud, AI, and modern technology._

---

## Tech Stack

| Area      | Tools |
|-----------|-------|
| Framework | React 19, Vite 6 |
| Styling   | Tailwind CSS 3 (custom design tokens, dark mode) |
| Animation | Framer Motion, React Three Fiber + drei (Three.js) |
| Routing   | React Router v7 (code-split routes) |
| Data      | TanStack React Query v5 |
| Icons     | Lucide React |
| SEO       | Custom dependency-free `<Seo />` + JSON-LD schema, Open Graph & Twitter tags |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev          # http://localhost:5173

# 3. Production build
npm run build

# 4. Preview the production build
npm run preview
```

> Requires Node.js 18+.

## Project Structure

```
arun-consulting/
├── index.html                 # SEO meta, OG tags, fonts, base JSON-LD
├── vite.config.js             # Aliases (@/) + manual chunk splitting
├── tailwind.config.js         # Brand palette, fonts, keyframes
├── postcss.config.js
└── src/
    ├── main.jsx               # Providers: Query, Theme, Router
    ├── App.jsx                # Routes (lazy-loaded pages)
    ├── index.css              # Design tokens + Tailwind layers
    ├── context/
    │   └── ThemeContext.jsx   # Dark/light mode (persisted)
    ├── lib/
    │   ├── Seo.jsx            # Per-page SEO + JSON-LD
    │   └── motion.js          # Shared Framer Motion variants
    ├── hooks/
    │   └── useScrollTop.js
    ├── data/
    │   └── content.js         # All site content (services, solutions, etc.)
    ├── components/
    │   ├── layout/            # Navbar (glassmorphism), Footer, Layout
    │   ├── three/             # HeroScene (R3F particle field + AI nodes)
    │   ├── ui/                # Button, Counter, Reveal, SectionHeading…
    │   └── sections/          # Hero, About, Services, Solutions, TechStack,
    │                          # Industries, CaseStudies, Process, Blog, Contact
    └── pages/                 # One file per route
```

## Features

- **Animated 3D hero** — React Three Fiber particle field + floating AI nodes (lazy-loaded, performance-capped DPR).
- **Glassmorphism navbar** — sticky, transparent → frosted on scroll, animated active underline, mobile overlay menu.
- **Dark / light mode** — class-based, system-preference aware, persisted to `localStorage`.
- **Scroll & motion** — staggered reveals, animated counters, marquee tech strip, page transitions.
- **Full content** — Services, Solutions, Industries, Tech Stack, Case Studies, Process, Blog, and a validated Contact form (React Query mutation).
- **SEO** — title/description/canonical per route, Open Graph + Twitter cards, `ProfessionalService` & `Person` JSON-LD, `robots.txt`.
- **Performance** — code-split routes, isolated Three.js/Motion chunks, lazy loading, `prefers-reduced-motion` support.
- **Accessible** — semantic landmarks, focus-visible outlines, ARIA labels, keyboard-friendly.

## Customization

- **Content:** edit `src/data/content.js` (services, solutions, blog, case studies, contact details).
- **Brand colors / fonts:** `tailwind.config.js` and the `:root` / `.dark` tokens in `src/index.css`.
- **Contact form:** swap the simulated `submitLead` in `src/components/sections/Contact.jsx` for a real endpoint (e.g. Formspree, Resend, or your API).
- **Domain:** update the `BASE_URL` in `src/lib/Seo.jsx` and the canonical/OG URLs in `index.html`.

## Contact

- **Email:** arupdivakar@gmail.com
- **Phone / WhatsApp:** +965 66564873

---

© Arun P Divakaran. All rights reserved.
