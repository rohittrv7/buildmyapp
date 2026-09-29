# BuildMyApp by Ravana ⚡

> **Official Website & Domain:** [buildmyapp.store](https://buildmyapp.store)  
> **Developer:** Ravana (Independent App Developer)  
> **Contact:** [rohittrv7@gmail.com](mailto:rohittrv7@gmail.com) · [WhatsApp (+91 8227910516)](https://wa.me/918227910516)

A high-performance, dark luxury web application and portfolio built for **BuildMyApp by Ravana**. It showcases mobile apps, full-stack web platforms, native desktop software, ready-made digital downloads, and transparent client engineering workflows.

---

## 🚀 Key Highlights & Pages

- **Home (`/`)**: 10 distinct rhythmic sections designed with individual layouts and atmosphere:
  1. **Full-Screen Fluid Hero** — *"Your idea. Built properly."* with staggered mask reveal animations.
  2. **Marquee Strip** — Infinite continuous ticker highlighting core tech tools.
  3. **What I Build** — Compact 4-platform horizontal overview.
  4. **Featured Work** — Asymmetric 3-card layout (prominent main card + stacked side cards).
  5. **Live Counters** — Animated metric counters for shipped projects, platforms, support days, and source ownership.
  6. **Workflow Timeline** — 4-step connected horizontal delivery roadmap.
  7. **Why Work With Me** — Left sticky heading paired with a 2x2 frosted card grid.
  8. **Store Teaser** — Wide featured banner for instant software downloads.
  9. **Pricing Teaser** — Single-line transparent pricing strip starting from ₹15,000.
  10. **Final CTA** — Glowing conversion hub with direct WhatsApp integration.

- **Portfolio (`/portfolio` & `/portfolio/$slug`)**:
  - Full-screen `PageHero` with dynamic project counter (`RAVANA — INDEPENDENT SOFTWARE · N PROJECTS`).
  - Interactive platform filter pills (All, Android, Web, Desktop) with animated card transitions.
  - Redesigned luxury project cards with 16:10 fixed aspect ratio covers, tag truncation, and stable hover lift.
  - Dedicated rich showcase for **Digital Teaching Board** (`/portfolio/digital-teaching-board`).

- **Services (`/services`)**:
  - 2x2 Bento grid with numbered cards (`01`–`04`), rounded glass icons, benefit pills, and tech chips.
  - 1-click **"Build this"** button that pre-fills the project builder form (`/build-my-app?type=...`).

- **Store (`/store` & `/store/$slug`)**:
  - Ready-made utilities, browser planners, and templates available for immediate download.

- **Process (`/process`)**:
  - Simple 4-stage transparent client roadmap from idea to launch and 30-day post-delivery support.

- **About (`/about`)**:
  - Developer background, philosophy, verified tools, and direct contact details.

---

## 🛠️ Technology Stack

- **Framework**: [TanStack Start](https://tanstack.com/router) (SSR + File-based Routing + Server Functions)
- **UI Library**: React 19
- **Bundler & Build**: [Vite](https://vitejs.dev/) + [Nitro](https://nitro.unjs.io/)
- **Styling**: Vanilla CSS + [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (Framer Motion) with `prefers-reduced-motion` compliance
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Space Grotesk (Headings) + DM Sans (Body) + Monospace (Labels)
- **Palette**: Dark luxury aesthetic — Ink dark base (`oklch(0.13 0.008 130)`), Volt green accent (`oklch(0.91 0.22 126)`), and Frosted glass (`oklch(0.22 0.012 130 / 78%)`).

---

## 💻 Local Development

### 1. Prerequisites
- Node.js 18+ (Node 20 or 22 recommended)
- npm or bun

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will start locally at `http://localhost:8081` (or next available port).

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to `buildmyapp.store`

The project uses Nitro with Cloudflare / Vercel compatibility.

### Option A: Vercel Deployment (Recommended)
1. Initialize a git repository and push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for buildmyapp"
   git branch -M main
   git remote add origin https://github.com/<your-username>/buildmyapp.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository. Vercel will automatically detect TanStack Start / Vite.
4. Click **Deploy**.
5. In project settings, navigate to **Domains** and add `buildmyapp.store`.
6. Add the DNS records provided by Vercel in your domain manager (e.g. GoDaddy / Hostinger):
   - **A Record**: Host `@` pointing to `76.76.21.21`
   - **CNAME**: Host `www` pointing to `cname.vercel-dns.com`

### Option B: Cloudflare Workers / Pages
Since the project outputs `.output/server/wrangler.json`, you can deploy directly:
```bash
npx wrangler deploy
```
Then attach `buildmyapp.store` under **Custom Domains** in your Cloudflare dashboard.

---

## 📁 Project Structure

```text
buildapp/
├── public/                 # Static assets & ready-made downloadable files
│   └── downloads/          # Downloadable HTML templates & utilities
├── src/
│   ├── assets/             # Images, mockups, screenshots
│   ├── components/         # Reusable UI & Layout components
│   │   ├── site.tsx        # SiteLayout, SectionHeading, Header & Footer
│   │   ├── PageHero.tsx    # Reusable full-screen luxury PageHero
│   │   ├── ProjectCard.tsx # Dark luxury project card
│   │   ├── ServiceCard.tsx # 2x2 Bento service card
│   │   └── ui/             # Radix primitives & accessible UI
│   ├── data/
│   │   ├── site.ts         # Central projects, products, and site metadata
│   │   ├── services.ts     # Core service definitions & benefits
│   │   └── pricing.ts      # Simple pricing tiers
│   ├── routes/             # TanStack file-based routes
│   │   ├── index.tsx       # Home page (10 distinct sections)
│   │   ├── portfolio.tsx   # Portfolio listing + dynamic route wrapper
│   │   ├── portfolio.$slug.tsx # Project details & showcase
│   │   ├── services.tsx    # Services Bento page
│   │   ├── store.tsx       # Store listing & downloads
│   │   ├── process.tsx     # 4-step workflow page
│   │   ├── about.tsx       # About page
│   │   └── contact.tsx     # Contact & inquiry form
│   └── styles.css          # Design system tokens, utilities, and animations
├── package.json
└── vite.config.ts
```

---

## 📄 License & Ownership

© 2026 **BuildMyApp by Ravana**. All rights reserved.  
Source code is proprietary to Ravana. Client builds receive 100% full source ownership upon project handover.
