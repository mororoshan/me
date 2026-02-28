# Shared UI

Reusable UI components for widgets and pages. **All components use only `@theme` variables** from `src/index.css` and must have a README + JSDoc in their folder.

## Components

| Component   | Purpose |
|------------|---------|
| **Button** | Primary/default action button. Uses `--color-accent`, `--color-accent-hover`. [→ button/README.md](./button/README.md) |
| **Link**   | In-app nav link with accent colors. [→ link/README.md](./link/README.md) |
| **PageTitle** | Heading with `--color-text-primary`. [→ typography/README.md](./typography/README.md) |
| **PageText**  | Paragraph with `--color-text-secondary`. [→ typography/README.md](./typography/README.md) |

## Rules

- Each component lives in its own folder with `index.tsx` and **README.md** (purpose, props, theme tokens, example).
- **No hardcoded hex/rgb** in components; use `var(--color-*)` from `@theme` only.
- Shared UI does not import from `entities`, `features`, `widgets`, or `pages`.

## References

- [portfolio-theme-colors.mdc](.cursor/rules/portfolio-theme-colors.mdc)
- [Portfolio FSD Plan](.cursor/plans/portfolio_fsd_plan_233a3af2.plan.md) §6
