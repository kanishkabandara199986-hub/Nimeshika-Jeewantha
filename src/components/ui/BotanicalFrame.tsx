import { motion } from 'framer-motion'
import type { Transition } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface BotanicalFrameProps {
  position?: 'top' | 'bottom' | 'top-left' | 'top-right' | 'both'
  opacity?: number
  scale?: number
  className?: string
}

const floatTransition = (duration: number, delay = 0): Transition => ({
  duration,
  repeat: Infinity,
  ease: 'easeInOut' as const,
  delay,
})

export function BotanicalFrame({
  position = 'top',
  opacity = 0.85,
  scale = 1,
  className = '',
}: BotanicalFrameProps) {
  const prefersReduced = useReducedMotion()

  const BranchSVG = ({ flip = false, rotate = 0 }: { flip?: boolean; rotate?: number }) => (
    <svg
      width="220"
      height="160"
      viewBox="0 0 220 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `scaleX(${flip ? -1 : 1}) rotate(${rotate}deg) scale(${scale})`,
        opacity,
        transformOrigin: 'center',
      }}
    >
      {/* Main stem */}
      <path
        d="M20 140 Q60 100 100 70 Q140 40 180 20"
        stroke="#7C9A7E"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Branch 1 */}
      <path d="M60 108 Q75 88 90 78" stroke="#7C9A7E" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Branch 2 */}
      <path d="M90 84 Q108 66 118 58" stroke="#7C9A7E" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Branch 3 */}
      <path d="M125 55 Q142 38 152 30" stroke="#7C9A7E" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Leaves */}
      <ellipse cx="48" cy="96" rx="14" ry="7" fill="#A8BFA9" opacity="0.7" transform="rotate(-40 48 96)" />
      <ellipse cx="75" cy="75" rx="16" ry="8" fill="#7C9A7E" opacity="0.65" transform="rotate(-55 75 75)" />
      <ellipse cx="100" cy="58" rx="13" ry="6" fill="#A8BFA9" opacity="0.6" transform="rotate(-45 100 58)" />
      <ellipse cx="130" cy="42" rx="15" ry="7" fill="#7C9A7E" opacity="0.7" transform="rotate(-60 130 42)" />
      <ellipse cx="160" cy="26" rx="12" ry="6" fill="#A8BFA9" opacity="0.55" transform="rotate(-50 160 26)" />

      {/* Small berries */}
      <circle cx="90" cy="68" r="3.5" fill="#7C9A7E" opacity="0.5" />
      <circle cx="118" cy="50" r="2.5" fill="#C9A96E" opacity="0.4" />
      <circle cx="152" cy="24" r="3" fill="#7C9A7E" opacity="0.45" />

      {/* Extra decorative leaves */}
      <ellipse cx="65" cy="110" rx="10" ry="5" fill="#5A7A5C" opacity="0.5" transform="rotate(-30 65 110)" />
      <ellipse cx="145" cy="35" rx="11" ry="5.5" fill="#A8BFA9" opacity="0.6" transform="rotate(-65 145 35)" />
    </svg>
  )

  if (position === 'top') {
    return (
      <motion.div
        className={`pointer-events-none select-none ${className}`}
        animate={prefersReduced ? {} : { y: [0, -8, 0], rotate: [-1, 1, -1] }}
        transition={prefersReduced ? {} : floatTransition(6)}
      >
        <BranchSVG />
      </motion.div>
    )
  }

  if (position === 'top-left') {
    return (
      <motion.div
        className={`pointer-events-none select-none ${className}`}
        animate={prefersReduced ? {} : { y: [0, -6, 0] }}
        transition={prefersReduced ? {} : floatTransition(7)}
      >
        <BranchSVG />
      </motion.div>
    )
  }

  if (position === 'top-right') {
    return (
      <motion.div
        className={`pointer-events-none select-none ${className}`}
        animate={prefersReduced ? {} : { y: [0, -6, 0] }}
        transition={prefersReduced ? {} : floatTransition(5.5, 0.5)}
      >
        <BranchSVG flip />
      </motion.div>
    )
  }

  if (position === 'bottom') {
    return (
      <motion.div
        className={`pointer-events-none select-none ${className}`}
        animate={prefersReduced ? {} : { y: [0, 6, 0] }}
        transition={prefersReduced ? {} : floatTransition(6)}
      >
        <BranchSVG rotate={180} flip />
      </motion.div>
    )
  }

  // 'both'
  return (
    <div className={`pointer-events-none select-none flex justify-between ${className}`}>
      <motion.div
        animate={prefersReduced ? {} : { y: [0, -8, 0] }}
        transition={prefersReduced ? {} : floatTransition(6)}
      >
        <BranchSVG />
      </motion.div>
      <motion.div
        animate={prefersReduced ? {} : { y: [0, -8, 0] }}
        transition={prefersReduced ? {} : floatTransition(5.5, 0.8)}
      >
        <BranchSVG flip />
      </motion.div>
    </div>
  )
}
