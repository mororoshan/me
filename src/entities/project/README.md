# Project entity

Project type and hardcoded project list for use by pages and widgets (e.g. project grid, project card, project detail).

## Project type

Defined in `model/types.ts`:

| Field         | Type                              | Description                    |
|---------------|-----------------------------------|--------------------------------|
| `id`          | `string`                          | Stable ID for routing          |
| `title`       | `string`                          | Display title                  |
| `description` | `string`                          | Short description              |
| `tags`        | `string[]`                        | Tags for filtering/display     |
| `link?`       | `string`                          | Optional URL (repo, demo)      |
| `type`        | `'handwritten' \| 'vibe-coded'`   | Project origin                 |

## Data

The list lives in **`entities/project/model/data.ts`**. Export: `projects` (array of `Project`).

To add or edit projects, update that file. Use stable `id`s (e.g. `project-1`, `project-2`) suitable for routes like `/projects/project-1`.

## Translation

**Choice:** Project **title** and **description** are stored as raw text in the entity. Only **labels** (e.g. "Handwritten", "Vibe-coded", "Projects", empty state) are translated in the UI via `useTranslation()` and keys from `shared/i18n` (e.g. `projects.handwritten`, `projects.vibeCoded`, `projects.title`, `projects.empty`). Widgets that render a project use the entity’s title/description as-is and translate the type badge and other labels.

## Rules

- **entities/project** does not import from `features`, `widgets`, or `pages`. It may import from `shared` only if needed (currently it does not).
