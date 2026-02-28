# Shared layer

Reusable UI, utilities, config, and i18n used by other FSD layers. **Shared does not import from `entities`, `features`, `widgets`, or `pages`.**

## Subfolders

| Folder    | Purpose |
|-----------|--------|
| **config** | App config (e.g. `basePath` for router). Import from `shared/config`. |
| **lib**    | Shared utilities and helpers (router helpers, classnames, etc.). Import from `shared/lib`. |
| **ui**     | Reusable UI components (buttons, layout, typography). Each component has its own README and uses only `@theme` colors. Import from `shared/ui`. |
| **i18n**   | i18next config and EN/RU locale files. Initialized in app before React; use `useTranslation()` in UI. Import from `shared/i18n`. |

## Rules

- **No reverse imports**: Nothing in `shared` may import from `entities`, `features`, `widgets`, or `pages`.
- **Barrel exports**: Other layers import from `shared/config`, `shared/lib`, `shared/ui`, `shared/i18n` (index files) rather than internal paths.

## References

- [Portfolio FSD Plan](.cursor/plans/portfolio_fsd_plan_233a3af2.plan.md) §2
- [portfolio-conventions.mdc](.cursor/rules/portfolio-conventions.mdc) | [portfolio-fsd-layers.mdc](.cursor/rules/portfolio-fsd-layers.mdc)
