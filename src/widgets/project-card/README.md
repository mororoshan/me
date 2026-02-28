# Project card widget

Renders a single project: title (link to `/projects/:id`), type badge (handwritten / vibe-coded), description, tags, and optional external link. Uses Ant Design Card and theme variables.

## Props

- `project: Project` — project from `entities/project`

## Dependencies

- `react-router-dom` (`Link`)
- `react-i18next` (`useTranslation`)
- `antd` (`Card`, `Tag`)
- `entities/project` (`Project` type)

## Translation keys

- `projects.handwritten`, `projects.vibeCoded`
- `project.link`
