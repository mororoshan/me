# App layer

The **app** layer is the application shell: entry point, router, and global providers.

## Purpose

- **Entry**: `main.tsx` is the Vite/React entry (referenced from `index.html`). It mounts the root with `createRoot`, `StrictMode`, global styles (`index.css`), and `RouterProvider` with the app router.
- **Shell**: `App.tsx` is the layout component (language switcher + `<Outlet />`). Route-matched page content renders inside the outlet.
- **Routing**: Centralized in `routes.tsx`; uses `createBrowserRouter` with `basename` from `shared/config` (base path for GitHub Pages). Pages are lazy-loaded with `React.lazy()` and wrapped in `<Suspense>`.

## Files

| File          | Role |
|---------------|------|
| `main.tsx`    | Entry: `createRoot`, `StrictMode`, imports i18n and CSS, renders `Providers` → `RouterProvider router={router}`. |
| `App.tsx`     | Layout: language switcher and `<Outlet />` for route children. |
| `App.css`     | Styles for the app shell. |
| `routes.tsx`  | Route config: `createBrowserRouter` with `/` (Home), `/projects`, `/projects/:id`, `*` (NotFound). Lazy-loaded page components. |
| `providers.tsx`| Ant Design `ConfigProvider` (theme + locale). Router and MobX will be extended here in later phases as needed. |

## Routes

| Path           | Page        | Description |
|----------------|------------|-------------|
| `/`            | Home       | Index page (`pages/home`). |
| `/projects`    | Projects   | Projects list (`pages/projects`). |
| `/projects/:id`| Project    | Single project view (`pages/project`). |
| `*`            | Not found  | 404 page (`pages/not-found`). |

**Base path**: Router uses `basename` from `shared/config` (`basePath`), which must match Vite `base` and the GitHub Pages repo path. **GitHub Pages SPA**: requires `base` in Vite config and a copy of `index.html` to `404.html` after build (handled in Phase 10).

## References

- [Portfolio FSD Plan](.cursor/plans/portfolio_fsd_plan_233a3af2.plan.md) §2 (layout), §3 (routing)
- [portfolio-conventions.mdc](.cursor/rules/portfolio-conventions.mdc)
