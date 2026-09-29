import type { ReactNode } from 'react'

export interface TagProps {
  children?: ReactNode
  className?: string
}

/** Compact label used for project type and technology tags. */
export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded border border-border bg-surface-elevated px-2 py-0.5 text-xs leading-5 text-text-secondary ${className ?? ''}`}
    >
      {children}
    </span>
  )
}
