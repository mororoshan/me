import type { ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'

/**
 * Props for the shared Link component.
 * Uses theme variables `--color-accent` and `--color-accent-hover` for consistency with the design.
 */
export interface LinkProps {
  /** Target path (react-router path). */
  to: string
  /** Link content. */
  children?: ReactNode
  /** Optional class name. */
  className?: string
  /** Optional inline style. */
  style?: React.CSSProperties
}

/**
 * Styled link for in-app navigation. Uses `--color-accent` and `--color-accent-hover` so links
 * match the primary action button and design system. No hardcoded colors.
 *
 * @example
 * ```tsx
 * import { Link } from '@/shared/ui'
 * <Link to="/projects">Projects</Link>
 * ```
 */
export function Link({ to, children, className, style }: LinkProps) {
  return (
    <RouterLink
      to={to}
      className={className}
      style={{
        color: 'var(--color-accent)',
        textDecoration: 'none',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--color-accent-hover)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--color-accent)'
      }}
    >
      {children}
    </RouterLink>
  )
}

export default Link
