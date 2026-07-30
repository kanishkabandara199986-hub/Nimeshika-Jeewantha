import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  pulse?: boolean
  icon?: ReactNode
  className?: string
  disabled?: boolean
  'aria-label'?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-olive text-ivory-DEFAULT border border-olive hover:bg-olive-dark hover:border-olive-dark shadow-sm',
  outline:
    'bg-transparent text-olive border border-olive hover:bg-olive hover:text-ivory-DEFAULT',
  ghost:
    'bg-transparent text-charcoal-muted border border-charcoal-muted/30 hover:border-charcoal-muted hover:text-charcoal',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-xs tracking-[0.2em]',
  md: 'px-7 py-3 text-xs tracking-[0.25em]',
  lg: 'px-9 py-4 text-sm tracking-[0.25em]',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  pulse = false,
  icon,
  className = '',
  disabled = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-body font-medium uppercase rounded-full
    transition-all duration-300
    cursor-pointer select-none
    focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${pulse ? 'animate-pulse-soft' : ''}
    ${className}
  `

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.03, y: -1 },
    whileTap: disabled ? {} : { scale: 0.97 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {icon && <span className="text-base">{icon}</span>}
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
      aria-label={ariaLabel}
      type="button"
      {...motionProps}
    >
      {icon && <span className="text-base">{icon}</span>}
      {children}
    </motion.button>
  )
}
