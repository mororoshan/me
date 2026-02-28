# App layer

The **app** layer is the application shell: entry point, root component, and (in later phases) router and global providers.

## Purpose

- **Entry**: `main.tsx` is the Vite/React entry (referenced from `index.html`). It mounts the root with `createRoot`, `StrictMode`, and global styles (`index.css`).
- **Root UI**: `index.tsx` is the app entry component that renders the root tree (currently `<App />`). Routing and global providers will be added in later phases.
- **Shell**: `App.tsx` is the main shell component (moved from the previous `src/App.tsx`). It will be extended with layout, header, footer, and route outlet when routing is added.

## Files

| File        | Role                                                                 |
|------------|----------------------------------------------------------------------|
| `main.tsx` | Entry script: `createRoot`, `StrictMode`, imports global CSS, renders `<App />` from `index.tsx`. |
| `index.tsx`| App entry component: exports the root component (currently wraps `App`). |
| `App.tsx`  | Main shell component (root UI until routing is added).               |
| `App.css`  | Styles for the app shell.                                           |

## Later phases

- **Routing**: Centralized in this layer (e.g. `routes.tsx` or inside `providers.tsx`); lazy-loaded pages; `BrowserRouter` with base path for GitHub Pages.
- **Providers**: `providers.tsx` will wrap the app with router, MobX `Provider`, and Ant Design `ConfigProvider`.
- Placeholder pages (home, projects, not-found) will be added in the pages layer and wired in the router.

## References

- [Portfolio FSD Plan](.cursor/plans/portfolio_fsd_plan_233a3af2.plan.md) §2 (layout), §3 (routing)
- [portfolio-conventions.mdc](.cursor/rules/portfolio-conventions.mdc)
