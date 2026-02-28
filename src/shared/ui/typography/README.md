# Typography

Theme-aware heading and text. Use `--color-text-primary` and `--color-text-secondary` only. **No hardcoded colors.**

## Components

- **PageTitle**: `<h1>` with `--color-text-primary`. Use for page titles.
- **PageText**: `<p>` with `--color-text-secondary`. Use for descriptions, captions.

## Props (both)

| Prop        | Type             | Description        |
|------------|------------------|--------------------|
| `children` | `ReactNode`      | Content            |
| `className`| `string`        | Optional CSS class |
| `style`    | `CSSProperties`  | Optional inline style |

## Theme tokens

- **PageTitle**: `--color-text-primary`
- **PageText**: `--color-text-secondary`

## Example

```tsx
import { PageTitle, PageText } from '@/shared/ui'

<PageTitle>Welcome</PageTitle>
<PageText>Short intro here.</PageText>
```

## Rules

- Do not add hardcoded hex/rgb. Use theme variables only.
