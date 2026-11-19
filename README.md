# Forge & Pixel — Next.js, TypeScript & Tailwind CSS v4

A modern, high-performance website migrated from static HTML to **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## 🚀 Features

- **Next.js App Router**: Optimized layout, metadata, viewport configuration, and React 19 support.
- **Clerk Authentication**: Integrated with `@clerk/nextjs` (Core 3 `<Show>` authentication components, modal sign-in, user button, and dedicated `/sign-in` and `/sign-up` catch-all routes).
- **Tailwind CSS v4**: Built with modern CSS-first theme configuration (`@theme`), PostCSS integration, and responsive design utilities.
- **TypeScript**: Strict type-checking across all components.
- **Interactive Components**:
  - `Navbar`: Sticky blurred navigation with responsive mobile menu toggle.
  - `Hero`: Eye-catching typography, call-to-actions, and stats cards.
  - `Paths`: Dual starting points for product sellers and food ordering businesses.
  - `Services`: Trimmed highlight reel of four hero features (food ordering, bookings, shop, checkout) linking to the full feature list.
  - `Features` (`/features`): The complete feature list, grouped by category (food & takeaway, bookings, selling products, payments, marketing).
  - `Process`: 4-step clear project breakdown.
  - `Comparison`: High-contrast subscription comparison table.
  - `Pricing`: Transparent fixed tiers with featured badge highlighting.
  - `Faq`: Interactive animated FAQ accordions.
  - `Contact`: Interactive inquiry form with feedback states and email dispatch.
  - `DemoStores`: Live preview cards covering the three service categories, each linking to its Vercel deployment plus deep links (menu, reservations, kitchen display, admin).
  - `Footer`: Dynamic year and back-to-top navigation.

## 🔐 Clerk Authentication Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Get your Clerk API keys from [dashboard.clerk.com](https://dashboard.clerk.com) and add them to `.env.local`:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```

## 🛠️ Getting Started

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized static / server production build:

```bash
npm run build
```

To run the production server:

```bash
npm run start
```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind v4 import & custom @theme tokens
│   │   ├── layout.tsx       # Root layout with fonts & metadata
│   │   ├── page.tsx         # Main landing page combining sections
│   │   └── features/
│   │       └── page.tsx     # Full feature list grouped by category
│   └── components/
│       ├── Comparison.tsx   # Subscription vs custom build comparison
│       ├── Contact.tsx      # Contact form & details
│       ├── DemoStores.tsx   # Live demo store cards, deep links & highlights modal
│       ├── Faq.tsx          # Collapsible FAQ items
│       ├── Footer.tsx       # Site footer
│       ├── Hero.tsx         # Hero banner & statistics
│       ├── Navbar.tsx       # Header with mobile menu
│       ├── Paths.tsx        # Starting point cards
│       ├── Pricing.tsx      # Pricing cards
│       ├── Process.tsx      # 4-step development process
│       └── Services.tsx     # Homepage feature highlight reel
│   └── lib/
│       ├── clerk.ts         # Clerk enablement check
│       └── features.ts      # Feature catalogue shared by both sections
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # Tailwind CSS v4 PostCSS plugin
├── tsconfig.json            # TypeScript configuration
└── package.json
```
