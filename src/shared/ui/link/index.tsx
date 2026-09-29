import type { CSSProperties, ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'

/**
 * Props for the shared Link component.
 * Uses theme tokens `--color-accent` and `--color-accent-hover`.
 */
export interface LinkProps {
  /** Target path (react-router path). */
  to: string
  /** Link content. */
  children?: ReactNode
  /** Optional class name. */
  className?: string
  /** Optional inline style. */
  style?: CSSProperties
}

/**
 * Styled link for in-app navigation.
 */
export function Link({ to, children, className, style }: LinkProps) {
  return (
    <RouterLink
      to={to}
      className={`font-medium text-accent no-underline hover:text-accent-hover ${className ?? ''}`}
      style={style}
    >
      {children}
    </RouterLink>
  )
}

export default Link
