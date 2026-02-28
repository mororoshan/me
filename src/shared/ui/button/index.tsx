import type { ReactNode, MouseEventHandler } from 'react'
import { Button as AntButton } from 'antd'

/**
 * Props for the shared Button component.
 * Uses theme variables `--color-accent` and `--color-accent-hover` for primary variant (via Ant ConfigProvider).
 */
export interface ButtonProps {
  /** Visual variant: primary (accent) or default (neutral). */
  variant?: 'primary' | 'default'
  /** Button content. */
  children?: ReactNode
  /** Click handler. */
  onClick?: MouseEventHandler<HTMLButtonElement>
  /** If set, renders as a link (Ant Button with href). */
  href?: string
  /** Disabled state. */
  disabled?: boolean
  /** Ant Design size. */
  size?: 'large' | 'middle' | 'small'
  /** Optional class name. */
  className?: string
}

/**
 * Shared primary/default button. Uses `--color-accent` and `--color-accent-hover` for primary style
 * (wired via app ConfigProvider). No hardcoded colors.
 *
 * @example
 * ```tsx
 * import { Button } from '@/shared/ui'
 * <Button variant="primary" onClick={() => {}}>Save</Button>
 * <Button variant="default" href="/projects">Projects</Button>
 * ```
 */
export function Button({
  variant = 'default',
  children,
  onClick,
  href,
  disabled,
  size,
  className,
}: ButtonProps) {
  return (
    <AntButton
      type={variant === 'primary' ? 'primary' : 'default'}
      onClick={onClick}
      href={href}
      disabled={disabled}
      size={size}
      className={className}
    >
      {children}
    </AntButton>
  )
}

export default Button
