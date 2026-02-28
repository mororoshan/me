# Button

Primary and default action button. Wraps Ant Design `Button`; primary variant uses theme tokens `--color-accent` and `--color-accent-hover` (via app `ConfigProvider`). **No hardcoded colors.**

## Props

| Prop       | Type                                      | Default    | Description                    |
|------------|-------------------------------------------|------------|--------------------------------|
| `variant`  | `'primary' \| 'default'`                  | `'default'`| Visual style                   |
| `children` | `ReactNode`                               | —          | Button content                 |
| `onClick`  | `MouseEventHandler<HTMLButtonElement>`   | —          | Click handler                  |
| `href`     | `string`                                  | —          | If set, renders as link       |
| `disabled` | `boolean`                                 | `false`    | Disabled state                 |
| `size`     | `'large' \| 'middle' \| 'small'`          | —          | Ant size                       |
| `className`| `string`                                  | —          | Optional CSS class             |

## Theme tokens

- **Primary**: `--color-accent`, `--color-accent-hover` (via Ant `colorPrimary`, `colorPrimaryHover` in ConfigProvider).

## Example

```tsx
import { Button } from '@/shared/ui'

<Button variant="primary" onClick={handleSave}>Save</Button>
<Button variant="default" href="/projects">Projects</Button>
<Button variant="primary" disabled>Submit</Button>
```

## Rules

- Do not add hardcoded hex/rgb in this component. Use theme variables only.
