---
description: Deploy portfolio to GitHub Pages
---

Deploy the portfolio site to GitHub Pages via the gh-pages package.

Make sure your `.env` file exists with `VITE_FORMSPREE_ID` set before deploying.

// turbo
1. Run the deploy command:
```
npm run deploy
```

This will:
- Build the project (`tsc -b && vite build`)
- Push the `dist/` folder to the `gh-pages` branch on GitHub
- The live site at `josuemerino.dev` will update within ~1 minute
