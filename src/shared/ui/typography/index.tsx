import type { ReactNode } from 'react'

/**
 * Props for theme-aware heading and text.
 */
export interface TypographyProps {
  /** Content. */
  children?: ReactNode
  /** Optional class name. */
  className?: string
  /** Optional inline style (merged with theme color). */
  style?: React.CSSProperties
}

/**
 * Heading that uses `--color-text-primary`. Use for page titles.
 *
 * @example
 * ```tsx
 * import { PageTitle } from '@/shared/ui'
 * <PageTitle>Welcome</PageTitle>
 * ```
 */
export function PageTitle({ children, className, style }: TypographyProps) {
  return (
    <h1
      className={className}
      style={{ color: 'var(--color-text-primary)', margin: 0, ...style }}
    >
      {children}
    </h1>
  )
}

/**
 * Secondary text that uses `--color-text-secondary`. Use for descriptions, captions.
 *
 * @example
 * ```tsx
 * import { PageText } from '@/shared/ui'
 * <PageText>Short intro here.</PageText>
 * ```
 */
export function PageText({ children, className, style }: TypographyProps) {
  return (
    <p
      className={className}
      style={{ color: 'var(--color-text-secondary)', margin: 0, ...style }}
    >
      {children}
    </p>
  )
}
