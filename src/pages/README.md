# Pages layer

Route-level screens composed from widgets, features, entities, and shared UI. **Pages may import from `shared`, `entities`, `features`, and `widgets` — not from `app`.**

## Pages

| Page        | Route            | Purpose |
|-------------|------------------|---------|
| **home**    | `/`              | Landing and short intro. |
| **projects**| `/projects`     | Projects list (uses project-grid widget when available). |
| **project** | `/projects/:id`  | Single project detail (title, description, tags, link). Redirects to `/projects` if id missing or invalid. |
| **not-found** | `*`            | 404 page for unknown paths. |

## Layout

Each page uses a simple layout wrapper: `max-w-3xl` or `max-w-4xl`, `mx-auto`, `px-4`, `py-8`. Typography and colors use Ant Design and `var(--color-*)` from `@theme`.

## Translation

All user-facing copy uses `useTranslation()` and keys from `shared/i18n` (e.g. `home.title`, `home.intro`, `projects.title`, `project.backToProjects`). No hardcoded strings.

## References

- [portfolio-fsd-layers.mdc](.cursor/rules/portfolio-fsd-layers.mdc)
- [Portfolio FSD Plan](.cursor/plans/portfolio_fsd_plan_233a3af2.plan.md) §2
