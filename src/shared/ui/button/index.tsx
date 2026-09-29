import type { MouseEventHandler, ReactNode } from 'react'

/**
 * Props for the shared Button component.
 * Primary uses the accent theme tokens; default uses the surface tokens.
 */
export interface ButtonProps {
  /** Visual variant: primary (accent) or default (neutral). */
  variant?: 'primary' | 'default'
  /** Button content. */
  children?: ReactNode
  /** Click handler. */
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  /** If set, renders as a link. */
  href?: string
  /** Disabled state. */
  disabled?: boolean
  /** Control size. */
  size?: 'large' | 'middle' | 'small'
  /** Optional class name. */
  className?: string
}

const variantClass = {
  primary:
    'border-accent bg-accent text-page-bg hover:border-accent-hover hover:bg-accent-hover',
  default:
    'border-border bg-surface text-text-primary hover:border-accent hover:bg-surface-elevated',
} as const

const sizeClass = {
  large: 'h-10 px-4 text-base',
  middle: 'h-8 px-3 text-sm',
  small: 'h-6 px-2 text-xs',
} as const

function buttonClass(
  variant: NonNullable<ButtonProps['variant']>,
  size: NonNullable<ButtonProps['size']>,
  className?: string,
) {
  return [
    'inline-flex items-center justify-center rounded-md border font-medium transition-colors',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
    'disabled:cursor-not-allowed disabled:opacity-50',
    variantClass[variant],
    sizeClass[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')
}

/**
 * Shared primary/default button. Colors come from the theme tokens in index.css.
 */
export function Button({
  variant = 'default',
  children,
  onClick,
  href,
  disabled,
  size = 'middle',
  className,
}: ButtonProps) {
  const classes = buttonClass(variant, size, className)

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-disabled={disabled || undefined}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
