# Shubham Tiwari — Portfolio

Personal portfolio site: blockchain engineer, smart contracts, DeFi, and ZK. Built with React and Vite, deployed on GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output is in `dist/`. Preview with `npm run preview`.

## Deploy (GitHub Pages)

- **Live site:** [https://illusioncoder7.github.io/shubham.portfolio/](https://illusioncoder7.github.io/shubham.portfolio/)
- Push to `main`; the GitHub Action **Deploy to GitHub Pages** builds and deploys from `dist/`.
- Base path is set to `/shubham.portfolio/` in `vite.config.js` for this repo.

## Project layout

- `src/App.jsx` — Main app, sections, nav, and base URL helper for assets
- `src/data/resume.js` — Profile, experience, education, tech stacks, about copy
- `src/components/` — SocialIcons, BlockchainSideDecor
- `src/index.css` — Global and section styles (V4 theme)
- `public/` — Static assets: images, nav icons (`public/icons/`), tech stack icons (`public/tech-icons/`), resume PDF

## Tech

- React 19, Vite 7
- No router; single page with section IDs and hash links
- CSS-only animations (scroll reveal, typewriter logo, nav tooltips)
