# Tag

Compact label for project type and technology badges. Uses surface and border theme tokens. **No hardcoded colors.**

## Props

| Prop        | Type        | Description        |
|------------|-------------|--------------------|
| `children` | `ReactNode` | Label text         |
| `className`| `string`    | Optional CSS class |

## Theme tokens

- `--color-surface-elevated`, `--color-border`, `--color-text-secondary`

## Example

```tsx
import { Tag } from '@/shared/ui'

<Tag>TypeScript</Tag>
```

## Rules

- Do not add hardcoded hex/rgb. Use theme variables only.
