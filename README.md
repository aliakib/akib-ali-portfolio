# Akib Ali — Personal Engineering Portfolio (V1)

A clean, modern, light-first personal portfolio website built for **Akib Ali**, Full Stack Engineer. Designed to showcase real production systems, full-stack architectural growth, AI integrations and professional work without superficial gimmicks or unnecessary visual bloat.

---

## 🌟 Overview

The primary objective of this portfolio is to communicate engineering capability, credibility and progressive system-level growth to recruiters, hiring managers and enterprise clients within 30–60 seconds of landing on the site.

### Signature Narrative Evolution
1. **Stage 1 — Iqra Learning Tree**: Solo full-stack architecture, RBAC middleware, REST APIs and Google Drive storage integration (transition from creating UI screens to understanding complete software systems).
2. **Stage 2 — Master-O (InspireOne Technologies)**: SDE II contributions to a B2B SaaS platform serving 500+ enterprise clients & 10,000+ daily active users, Azure OpenAI (GPT-4) content pipelines, Redis caching for 100K+ daily API requests and winner of the **Engineering Masterpiece Award**.
3. **Stage 3 — PitchLynx**: Low-latency real-time voice platform with Socket.IO bidirectional WebSockets (<200ms round-trip latency), OpenAI API context analysis, AWS Docker containerization and GitHub Actions CI/CD pipelines.
4. **Stage 4 — Daikcell**: Production multi-channel sales and inventory management platform integrating Amazon SP-API, Saleor, Shiprocket, MySQL, Prisma ORM and Redis.

---

## 🛠️ Tech Stack & Architectural Rationale

| Category | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 14 (App Router) | Pre-renders static HTML (SSG) out-of-the-box for each route (`/` and `/projects/[id]`), ensuring instant load speeds and dedicated OpenGraph preview metadata per project case study. |
| **Language** | TypeScript (Strict) | Enforces strict type contracts across data models, project case studies and UI components to prevent runtime errors and ensure code maintainability. |
| **Styling** | Tailwind CSS | Provides utility-first styling with tight control over typography hierarchy, custom accent colors (`#4f46e5`), subtle borders, light shadows and responsive breakpoints. |
| **Animation** | Framer Motion | Used strictly for subtle, non-intrusive micro-interactions (fade-ins on scroll entry and slight card hovers). Adheres strictly to `prefers-reduced-motion`. |
| **Icons** | Lucide React | Clean, lightweight SVG iconography maintaining consistent stroke weights across the design system. |
| **Data Layer** | Decoupled Data Modules (`src/data/*.ts`) | Separates UI components from copy and project content, allowing effortlessly defensible resume updates without touching component logic. |

---

## 🎯 Technical Decisions & Trade-Offs

### 1. Next.js App Router (SSG) vs. Vite Single Page Application (SPA)
* **Decision**: Selected Next.js App Router with Static Site Generation (SSG).
* **Trade-Off**: Next.js introduces slightly more framework overhead during build time compared to a bare Vite setup.
* **Why**: Client-side SPAs (Vite) struggle with page-specific OpenGraph meta cards when links like `/projects/daikcell` are shared on LinkedIn or Twitter. Next.js pre-renders each case study as static HTML with custom metadata tags at build time while maintaining ultra-fast static hosting capabilities.

### 2. Content-Focused Light-First Theme vs. Flashy 3D / Dark Glassmorphism
* **Decision**: Designed a clean, light-first theme featuring generous whitespace, crisp charcoal typography (`text-slate-900`) and subtle indigo accents.
* **Trade-Off**: Omits heavy 3D canvases (Three.js), glowing particles and fake terminal overlays.
* **Why**: Heavy 3D graphics and particle effects slow down initial page renders, distract recruiters from reading project impact and can feel gimmicky. A content-focused, highly scannable layout highlights real production achievements, system design decisions and measurable outcomes.

### 3. Decoupled Data Layer vs. Inline Hardcoded JSX
* **Decision**: All project case studies, journey stages, skills and work experiences live in strictly-typed TypeScript data modules (`src/data/`).
* **Trade-Off**: Requires defining TypeScript interfaces and prop types before writing UI components.
* **Why**: Decoupling content from rendering allows updating project metrics, skills, or links without touching visual components, keeping the codebase modular and easy to maintain.

### 4. Restrained Framer Motion vs. Heavy Canvas Animations
* **Decision**: Wrapped all scroll entry animations inside a custom `MotionWrapper` supporting `useReducedMotion()`.
* **Trade-Off**: Avoids scroll-jacked timeline controls or physics-heavy particle simulations.
* **Why**: Ensures the website remains 100% accessible, responsive and functional even when animations are disabled or on lower-powered mobile devices.

---

## 📁 Repository Structure

```
akib-ali-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css              # Tailwind directives & smooth scroll rules
│   │   ├── layout.tsx               # Root layout with SEO meta & JSON-LD Schema
│   │   ├── page.tsx                 # Main single-page portfolio view (All 10 sections)
│   │   └── projects/
│   │       └── [id]/
│   │           └── page.tsx         # Dynamic SSG route for project case studies
│   ├── components/
│   │   ├── Navbar.tsx               # Sticky header with backdrop blur & mobile drawer
│   │   ├── Hero.tsx                 # Main hero section & core stack bar
│   │   ├── JourneyTimeline.tsx      # Signature 4-stage visual engineering timeline
│   │   ├── FeaturedProjects.tsx     # Primary highlight (Daikcell) + project grid
│   │   ├── ExperienceSection.tsx    # Professional roles (Master-O SDE II, Daikcell, etc.)
│   │   ├── SkillsSection.tsx        # Categorized technical competencies
│   │   ├── ExploringSection.tsx     # Active learning areas (AI Agents, RAG, WebSockets)
│   │   ├── AboutSection.tsx         # Story, Awards, & BCA Education
│   │   ├── ContactSection.tsx       # Contact CTAs with one-click email copy
│   │   ├── Footer.tsx               # Minimal footer
│   │   ├── CaseStudyView.tsx        # Technical case study renderer
│   │   └── MotionWrapper.tsx        # Framer Motion accessible animation wrappers
│   ├── data/
│   │   ├── profile.ts               # Personal bio, contact links, awards, & education
│   │   ├── journey.ts               # Signature narrative progression stages
│   │   ├── projects.ts              # Detailed technical case study data
│   │   ├── experience.ts           # Work history details & achievements
│   │   └── skills.ts               # Technical skill categories & current topics
│   └── lib/
│       └── utils.ts                 # Utility helpers (clsx + tailwind-merge)
├── tailwind.config.js               # Custom colors & typography configuration
├── next.config.js                   # Next.js configuration
├── tsconfig.json                    # TypeScript strict mode configuration
└── package.json                     # Dependencies & build scripts
```

---

## 🚀 Local Setup & Build Instructions

### Prerequisites
- Node.js v18.0.0 or higher
- npm v9.0.0 or higher

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/aliakib/akib-ali-portfolio.git
   cd akib-ali-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
   This command type-checks, lints and pre-renders static HTML pages for all routes (`/`, `/projects/daikcell`, `/projects/pitchlynx`, `/projects/master-o`, `/projects/iqra-learning-tree`).

---

## 📄 License & Ownership

Designed and developed by **Akib Ali**. Open for personal portfolio reference and engineering inspiration.
