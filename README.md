# Portfolio

React portfolio app (Feature-Sliced Design, TypeScript, Vite, Ant Design, Tailwind, i18n EN/RU, MobX). See [.cursor/plans/portfolio_fsd_plan_233a3af2.plan.md](.cursor/plans/portfolio_fsd_plan_233a3af2.plan.md) for architecture.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

---

## Deployment (GitHub Pages)

The app is built for GitHub Pages with a **base path** and **404.html** so the SPA router works on every path.

### Build

```bash
npm run build
```

This runs `tsc -b`, `vite build`, and copies `dist/index.html` → `dist/404.html`. The `base` in [vite.config.ts](vite.config.ts) and `basePath` in [src/shared/config/index.ts](src/shared/config/index.ts) must match your repo name (e.g. `/portfolio_project/`). Assets are emitted under that base path.

### Deploy

1. **Repo settings**: In the GitHub repo, enable **Pages** (Settings → Pages) and choose source: branch (e.g. `main` or `gh-pages`) or GitHub Actions.
2. **Requirement**: `base` and 404.html are required for client-side routing: GitHub Pages serves 404.html for unknown paths, and the SPA then handles the route.
3. **Option A – push `dist` to a branch**: Build locally, then push the contents of `dist` to the `gh-pages` branch (or use the `gh-pages` package: `npx gh-pages -d dist`).
4. **Option B – GitHub Action**: Add a workflow that runs `npm run build` and publishes the `dist` folder to GitHub Pages.

See [Portfolio FSD Plan §8](.cursor/plans/portfolio_fsd_plan_233a3af2.plan.md) for deployment details.
