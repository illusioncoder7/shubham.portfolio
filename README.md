# Shubham Tiwari — Portfolio

Personal portfolio site: blockchain engineer, smart contracts, DeFi, and ZK. Built with React and Vite, deployed on GitHub Pages. **Live at [shubhamtiwari.com.np](https://shubhamtiwari.com.np).**

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

- **Live site (custom domain):** [https://shubhamtiwari.com.np](https://shubhamtiwari.com.np)
- Also available at: [https://illusioncoder7.github.io/shubham.portfolio/](https://illusioncoder7.github.io/shubham.portfolio/) (asset paths may differ; custom domain is canonical).
- Push to `main`; the GitHub Action **Deploy to GitHub Pages** builds and deploys from `dist/`.
- Base path in `vite.config.js` is `/` for the custom domain; `public/CNAME` sets `shubhamtiwari.com.np` for GitHub Pages.

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
