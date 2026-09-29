import type { CSSProperties, ReactNode } from 'react'

/**
 * Props for theme-aware heading and text.
 */
export interface TypographyProps {
  /** Content. */
  children?: ReactNode
  /** Optional class name. */
  className?: string
  /** Optional inline style. */
  style?: CSSProperties
}

/**
 * Heading that uses `--color-text-primary`. Use for page titles.
 */
export function PageTitle({ children, className, style }: TypographyProps) {
  return (
    <h1
      className={`m-0 text-4xl font-semibold leading-tight text-text-primary ${className ?? ''}`}
      style={style}
    >
      {children}
    </h1>
  )
}

/**
 * Secondary text that uses `--color-text-secondary`. Use for descriptions and captions.
 */
export function PageText({ children, className, style }: TypographyProps) {
  return (
    <p className={`m-0 text-text-secondary ${className ?? ''}`} style={style}>
      {children}
    </p>
  )
}
