# JSA Website

The public-facing website for **JSA — JavaScript Analytics**. This repository is separate from the main application repository and contains the landing page, feature overview, documentation, example workflows, release overview, roadmap, project information, and contribution guide.

- **Live application:** https://jsa-pearl.vercel.app
- **Application source:** https://github.com/munachi-me/JSA.git
- **Website repository:** https://github.com/munachi-me/JSA-Website.git

## Stack

- React 18
- Vite 6
- React Router
- Lucide React
- Responsive custom CSS

JavaScript is used for the application code. No backend or environment variables are required for the initial static website.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Pages

- `/` — Home / landing page
- `/features` — Capability overview and detailed feature descriptions
- `/docs` and `/docs/:slug` — Searchable user documentation
- `/examples` — Practical example workflows
- `/releases` — Release information and links to source history
- `/roadmap` — Directional roadmap
- `/about` — About the project
- `/contributing` — Contribution guidance

## Content accuracy

The feature descriptions are intentionally version-aware. They describe known capability areas without guaranteeing that every operation is available in every release. The release page identifies v0.5.2 as the latest known version based on project context available when this site was assembled; verify the main repository and current application before treating the changelog as an audited record. Update `src/data/content.js` as releases and verified capabilities change.

## Design notes

The website follows JSA's dark, blue-accented identity and uses responsive layouts, reduced-motion support, semantic landmarks, visible focus styles from browser defaults, and a mobile navigation menu. The dashboard shown on the home page is an **illustrative mock preview**, not a screenshot or live data from the application.

## License

MIT. See [LICENSE](./LICENSE).
