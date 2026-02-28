# Project (detail) page

Single project view at `/projects/:id`. Renders title, type badge, description, tags, and link from `entities/project`. Redirects to `/projects` if `id` is missing or not found.

## Translation keys

- `project.backToProjects` — back link label
- `project.link` — link label
- `project.type` — type label (heading)
- `project.tags` — tags label
- `projects.handwritten` / `projects.vibeCoded` — type badge text

## Dependencies

- `react-router-dom` (`useParams`, `Link`, `useNavigate`)
- `react-i18next` (`useTranslation`)
- `antd` (`Typography`, `Tag`, `Button`)
- `entities/project` (`projects` list)
