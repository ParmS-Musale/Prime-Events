# Prime Events — Luxury Event Management Website

Live demo: https://prime-events21.vercel.app

An elegant, production-ready marketing website for a luxury event management and premium decor service. Built with modern React and Next.js conventions, optimized for visual polish, accessibility, and fast delivery.

## Table of Contents

- About
- Features
- Tech Stack
- Quick Start
- Environment
- Important Scripts
- Project Structure
- Assets & Images
- Deployment
- Contributing
- Troubleshooting
- License & Contact

## About

This repository contains a statically-rendered, visually-rich landing site intended for presenting services, portfolio items, testimonials, and contact channels for a premium event-management brand.

The design emphasizes cinematic visuals (glassmorphism, gold accent gradients, dark backgrounds), smooth entrance and timeline animations (Framer Motion + GSAP), and an accessible responsive layout for desktop and mobile.

## Features

- Polished landing page hero with CTA and responsive layout
- Glassmorphic navigation with scroll-spy and mobile drawer
- Section-based architecture: About, Services, Portfolio, Process, Testimonials, Contact
- Animated reveals using Framer Motion for simple transitions
- GSAP timelines for advanced typographic and sequence animations
- Masonry-style portfolio gallery with lightbox overlays
- Floating WhatsApp FAB and integrated contact form
- Optimized images and fonts configured for Next.js
- Ready-to-deploy on Vercel with modern image optimizations

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS v4
- Framer Motion
- GSAP
- Lucide Icons
- Node.js + npm

## Quick Start

Prerequisites

- Node.js 18+ (recommended)
- npm 9+ or yarn

Clone and install

```bash
git clone https://github.com/ParmS-Musale/Prime-Events.git
cd Prime-Events/prime-events-web
npm install
```

Run development server

```bash
npm run dev
```

Build for production

```bash
npm run build
npm run start
```

Open your browser at `http://localhost:3000` (or the port reported by Next.js).

## Environment

This project does not require any secret environment variables to run locally for the marketing site. If you integrate third-party services (forms, analytics, CMS), add a `.env.local` at the project root and document the variables here (example below):

```env
# Example environment variables
# NEXT_PUBLIC_CONTACT_WHATSAPP="+1234567890"
# NEXT_PUBLIC_ANALYTICS_ID="G-XXXXXXXX"
```

Add any API keys to `.env.local` and never commit secret keys into the repository.

## Important Scripts

- `npm run dev` — Starts Next.js in development mode
- `npm run build` — Builds the production site
- `npm run start` — Runs the production build locally
- `npm run lint` — Runs ESLint (if configured)

Check `package.json` for the full list of scripts.

## Project Structure

- `public/` — Static assets and images
- `src/app/` — Next.js App Router pages and layout (`layout.tsx`, `page.tsx`, `globals.css`)
- `src/components/` — Reusable UI sections and components (HeroSection, AboutSection, ServicesSection, PortfolioSection, ProcessSection, TestimonialsSection, ContactSection, Footer, Navbar, WhatsAppFAB)
- `stitch_prime_events_luxury_ui/` — Design assets and generated stitch exports (design references)
- `next.config.ts` — Next.js configuration (image remote patterns, experimental flags)
- `tailwind.config.ts` — Tailwind configuration
- `package.json` — Project metadata and scripts

Typical component examples:

- `src/components/HeroSection.tsx` — Hero area with primary CTA
- `src/components/PortfolioSection.tsx` — Masonry gallery + modal
- `src/components/WhatsAppFAB.tsx` — Floating WhatsApp button and link

## Assets & Images

- Place static images in `public/assets/` and reference with `/assets/...` in components.
- The project also includes a stitched design export in `stitch_prime_events_luxury_ui/` for design reference and source images.

## Deployment

This site is optimized for deployment to Vercel. If you link this repository to a Vercel project, the `build` step will run automatically, and the site will be published.

Steps (Vercel)

1. Connect the GitHub repository to Vercel
2. Set the root directory to `prime-events-web` (if deploying from the monorepo root)
3. Ensure the build command is `npm run build` and the output directory is the default (Next.js)

Alternatively, you can host the static build on any platform that supports Next.js.

## Contributing

Contributions are welcome. To propose changes:

1. Fork the repository and create a feature branch
2. Add clear, focused commits
3. Open a pull request with a description of your changes

Coding guidelines

- Follow existing code style (TypeScript + Tailwind conventions)
- Run linting before opening PRs

## Troubleshooting

- If the dev server fails to start, delete `node_modules` and reinstall: `rm -rf node_modules && npm install` (on Windows use PowerShell or Git Bash)
- Check `next.config.ts` for image domain patterns if remote images fail to load

## License

This project is released under the MIT License.

## Contact

- Maintainer: Parmeshwar Musale (ParmS-Musale)
- Project: https://github.com/ParmS-Musale/Prime-Events

If you need help or want a custom deployment, open an issue or contact the maintainer via GitHub.
