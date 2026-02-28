# Link

In-app navigation link using react-router. Styled with `--color-accent` and `--color-accent-hover` for consistency with buttons and design. **No hardcoded colors.**

## Props

| Prop        | Type             | Description        |
|------------|------------------|--------------------|
| `to`       | `string`         | Target path        |
| `children` | `ReactNode`      | Link content       |
| `className`| `string`         | Optional CSS class |
| `style`    | `CSSProperties`  | Optional inline style |

## Theme tokens

- `--color-accent` (default), `--color-accent-hover` (hover).

## Example

```tsx
import { Link } from '@/shared/ui'

<Link to="/projects">Projects</Link>
```

## Rules

- Do not add hardcoded hex/rgb. Use theme variables only.
