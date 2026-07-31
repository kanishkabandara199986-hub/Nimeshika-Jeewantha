import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type DividerVariant = 'gold' | 'sage' | 'botanical'

interface DividerProps {
  variant?: DividerVariant
  className?: string
  width?: number
}

export function Divider({ variant = 'gold', className = '', width = 120 }: DividerProps) {
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-40px' })
  const prefersReduced = useReducedMotion()

  const color = variant === 'sage' ? '#fb6f92' : '#ff8fab'

  if (variant === 'botanical') {
    return (
      <div className={`flex items-center justify-center gap-3 ${className}`}>
        <div className="h-px flex-1 max-w-[80px]" style={{ background: color }} />
        <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
          <ellipse cx="8" cy="10" rx="7" ry="4" fill="#ffc2d1" opacity="0.7" transform="rotate(-30 8 10)" />
          <ellipse cx="16" cy="10" rx="5" ry="3" fill="#fb6f92" opacity="0.8" />
          <ellipse cx="24" cy="10" rx="7" ry="4" fill="#ffc2d1" opacity="0.7" transform="rotate(30 24 10)" />
        </svg>
        <div className="h-px flex-1 max-w-[80px]" style={{ background: color }} />
      </div>
    )
  }

  return (
    <svg
      ref={ref}
      width={width}
      height="20"
      viewBox={`0 0 ${width} 20`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible ${className}`}
      aria-hidden="true"
    >
      {/* Left line */}
      <motion.line
        x1="0"
        y1="10"
        x2={width / 2 - 14}
        y2="10"
        stroke={color}
        strokeWidth="0.8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={prefersReduced ? { duration: 0 } : { duration: 0.8, ease: 'easeOut' }}
      />
      {/* Center diamond */}
      <motion.path
        d={`M${width / 2} 5 L${width / 2 + 6} 10 L${width / 2} 15 L${width / 2 - 6} 10 Z`}
        stroke={color}
        strokeWidth="0.8"
        fill="none"
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={prefersReduced ? { duration: 0 } : { duration: 0.4, delay: 0.4, ease: 'backOut' }}
        style={{ transformOrigin: `${width / 2}px 10px` }}
      />
      {/* Right line */}
      <motion.line
        x1={width / 2 + 14}
        y1="10"
        x2={width}
        y2="10"
        stroke={color}
        strokeWidth="0.8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={prefersReduced ? { duration: 0 } : { duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      />
    </svg>
  )
}
