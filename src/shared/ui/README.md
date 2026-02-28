# Shared UI

Reusable UI components used by widgets and pages (buttons, layout, typography). **No components yet – structure only.**

## Rules

- Each component lives in its own folder (e.g. `shared/ui/button/`) with an `index.tsx` and a **README.md** (purpose, props, usage, theme tokens used).
- All components use **only `@theme` colors** from `src/index.css`; no hardcoded hex/rgb in components.
- Shared UI does not import from `entities`, `features`, `widgets`, or `pages`.

## References

- [portfolio-theme-colors.mdc](.cursor/rules/portfolio-theme-colors.mdc)
- [Portfolio FSD Plan](.cursor/plans/portfolio_fsd_plan_233a3af2.plan.md) §6
