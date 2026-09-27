# Zaviaar Rizvi · Personal Portfolio

A responsive portfolio featuring my experience, projects, skills and education. Built with **React 19**, **Tailwind CSS 4**, **Vite**, **Lucide React** and **React Icons**. The original site's dark green styling is preserved in `src/legacy.css`, while Tailwind handles reusable utility classes and responsive skill tiles.

## Run locally

Install [Node.js](https://nodejs.org/) (LTS version recommended), then:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. **Do not open `index.html` directly**: React uses the Vite development server.

## Production build

```bash
npm run build
npm run preview
```

The optimized site is generated in `dist/`. Only the contents of `dist/` are served when deployed. The source code stays in this repository.

## Publish to GitHub Pages

1. Create a public repository named **`zaviaar22.github.io`**, or use the existing one.
2. Commit and push this entire project, including `.github/workflows/deploy.yml`, to the `main` branch. `node_modules/` and `dist/` are excluded by `.gitignore`.
3. Open the repository's **Settings → Pages**, then under **Build and deployment → Source**, select **GitHub Actions**. The included workflow automatically installs dependencies, builds with Vite and publishes `dist/` on every push to `main`.
4. Wait for the **Deploy portfolio** run to finish under the Actions tab, then open **https://zaviaar22.github.io/**. GitHub may prompt you to enable Actions for a new repository.

**Important:** This is a Vite app, not a plain HTML website. Selecting “Deploy from a branch” with `/ (root)` would publish the *source* instead of the built website. Use **GitHub Actions** as described above.

If you use a different repository name (e.g. `portfolio`), update `base` in `vite.config.js` to `'/portfolio/'` and update the asset paths in `src/data/portfolio.js`, `src/components/Hero.jsx`, and `index.html` accordingly. The provided settings target the user-site repository only.

## Edit content

- **Contact, social links, experience, projects and skill lists:** `src/data/portfolio.js`
- **Individual sections:** `src/components/`
- **Portrait, resume and favicon:** `public/assets/`
- **Styles:** `src/legacy.css` (original site design), `src/index.css` (new extensions and Tailwind import)

## Project links

- [Neuralinq ITS](https://github.com/Zaviaar22/Neuralinq-ITS)
- [Treasure Collector](https://github.com/Zaviaar22/Treasure-Collector)

## Code quality

```bash
npm run check
npm run format
```

The interface supports dark and light themes, keyboard-focusable technology icons with hover/focus labels, mobile navigation, reduced-motion preferences and responsive grids. All brand icons ship as SVG React components, without live third-party image requests.

*Replace the small placeholder-quality portrait with a high-resolution photo when available. Review your publicly downloadable resume and contact information before publishing.*
