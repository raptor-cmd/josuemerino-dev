<div align="center">

# Josué Merino — Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Site-josuemerino.dev-00E5FF?style=for-the-badge&logo=vercel&logoColor=black)](https://josuemerino.dev)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-181717?style=for-the-badge&logo=github)](https://github.com/raptor-cmd/josuemerino-dev)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-A855F7?style=for-the-badge)](LICENSE)

> *Building intelligent systems through technical precision and architectural excellence.*

</div>

---

## ✨ Features

- **Dark / Light mode** — View Transitions API with clip-path animation, persisted in `localStorage`
- **ES / EN i18n** — Full bilingual support via `react-i18next`, auto-detected from browser
- **GSAP animations** — ScrollTrigger reveals, typewriter hero, stagger grids, animated counters
- **Formspree contact form** — No backend needed; submissions forwarded to email
- **Code splitting** — Every section is `React.lazy()` + `Suspense` for optimal load time
- **Fully responsive** — Tested at 320px · 768px · 1280px
- **WCAG AA accessible** — Focus-visible, aria-labels, prefers-reduced-motion support

---

## 🛠 Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Framework** | React 19 · Vite 8 · TypeScript 6 (strict) |
| **Styling** | Tailwind CSS v3 · CSS custom properties |
| **Animations** | GSAP 3 · @gsap/react · ScrollTrigger |
| **State** | Zustand 5 |
| **i18n** | react-i18next · i18next-browser-languagedetector |
| **Contact** | Formspree (zero-backend) |
| **Icons** | Lucide React |
| **SEO** | React Helmet Async |
| **Deploy** | GitHub Pages · gh-pages · GitHub Actions CI/CD |

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/raptor-cmd/josuemerino-dev.git
cd josuemerino-dev

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# → Edit .env with your real Formspree ID

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌍 Environment Variables

Create a `.env` file at the project root (copy from `.env.example`):

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_FORMSPREE_ID` | Your Formspree form ID (e.g. `xpwzabcd`) | ✅ Yes |

**Getting your Formspree ID:**
1. Sign up at [formspree.io](https://formspree.io) (free)
2. Create a new form → copy the form ID
3. Add it to your `.env` file
4. Add the same value as a **GitHub Secret** (`VITE_FORMSPREE_ID`) for CI/CD

> ⚠️ Never commit your `.env` file — it is listed in `.gitignore`

---

## 📦 Deploy

### Option 1 — Windsurf `/deploy` command
Type `/deploy` in the Windsurf chat panel. It will build and push to `gh-pages` automatically.

### Option 2 — Manual
```bash
npm run deploy
```

### Option 3 — GitHub Actions (automatic)
Push to `main` → the CI/CD pipeline in `.github/workflows/deploy.yml` builds and deploys automatically.

**One-time GitHub setup:**
- Repo → **Settings → Pages** → Source: `gh-pages` branch
- Repo → **Settings → Secrets → Actions** → Add `VITE_FORMSPREE_ID`

---

## 📁 Project Structure

```
src/
├── assets/images/       # Profile photo (WebP)
├── components/
│   ├── ui/              # Button, Badge, Card, SectionTitle, AnimatedCounter
│   ├── layout/          # Navbar, Footer
│   └── sections/        # Hero, About, Services, Experience, TechStack, Contact
├── constants/           # cv-data.ts — single source of truth
├── hooks/               # useTheme, useLanguage, useScrollAnimation
├── i18n/                # es.json, en.json, i18next config
├── store/               # Zustand (theme + language)
├── types/               # cv.types.ts, global.types.ts
└── utils/               # gsap-helpers.ts
```

---

## 📄 License

MIT © 2025 [Josué Daniel Merino Pineda](https://josuemerino.dev)
