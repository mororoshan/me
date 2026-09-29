# Project card widget

Renders a single project: title (link to `/projects/:id`), type badge (handwritten / vibe-coded), description, tags, and optional external link. Uses shared UI and theme tokens.

## Props

- `project: Project` — project from `entities/project`

## Dependencies

- `react-i18next` (`useTranslation`)
- `shared/ui` (`Link`, `Tag`)
- `entities/project` (`Project` type)

## Translation keys

- `projects.handwritten`, `projects.vibeCoded`
- `project.link`
