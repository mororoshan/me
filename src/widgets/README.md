# Widgets layer

Composite blocks used by pages: header, footer, project grid, project card. **Widgets may import from `shared`, `entities`, and `features` — not from `pages` or `app`.**

## Widgets

| Widget         | Purpose |
|----------------|---------|
| **header**     | Nav links (Home, Projects) and language switcher (EN / RU). Uses `Link` from react-router, theme variables. |
| **footer**     | Copyright and optional links. Uses `useTranslation()`. |
| **project-card** | Renders a single `Project`: title (link to detail), type badge, description, tags, link. Uses Ant Card and theme colors. |
| **project-grid** | Imports project list from `entities/project`, maps to `ProjectCard`. Responsive CSS grid. |

## Allowed imports

- `shared` (config, i18n, ui)
- `entities` (e.g. `entities/project` for type and data)
- `features` (e.g. language-switcher if extracted)

## References

- [portfolio-fsd-layers.mdc](.cursor/rules/portfolio-fsd-layers.mdc)
