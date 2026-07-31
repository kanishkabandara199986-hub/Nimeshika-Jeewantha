import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { PhotoReveal } from '@/components/ui/PhotoReveal'

export function CouplePhotoSection() {
  const ref = useRef<HTMLElement>(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [-30, 30])

  return (
    <section
      id="couple-photo"
      ref={ref}
      className="relative section-pad px-4 lg:px-8 bg-ivory overflow-hidden"
      aria-label="Couple photograph"
    >
      {/* Faint botanical corners */}
      <div className="absolute top-0 left-0 opacity-20 pointer-events-none">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
          <path d="M10 130 Q40 80 80 50 Q110 25 130 10" stroke="#ff8fab" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <ellipse cx="35" cy="95" rx="12" ry="6" fill="#ffc2d1" opacity="0.8" transform="rotate(-45 35 95)" />
          <ellipse cx="65" cy="65" rx="14" ry="7" fill="#ff8fab" opacity="0.7" transform="rotate(-55 65 65)" />
          <ellipse cx="100" cy="35" rx="10" ry="5" fill="#ffc2d1" opacity="0.7" transform="rotate(-40 100 35)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 opacity-20 pointer-events-none" style={{ transform: 'scaleX(-1)' }}>
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
          <path d="M10 130 Q40 80 80 50 Q110 25 130 10" stroke="#ff8fab" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <ellipse cx="35" cy="95" rx="12" ry="6" fill="#ffc2d1" opacity="0.8" transform="rotate(-45 35 95)" />
          <ellipse cx="65" cy="65" rx="14" ry="7" fill="#ff8fab" opacity="0.7" transform="rotate(-55 65 65)" />
          <ellipse cx="100" cy="35" rx="10" ry="5" fill="#ffc2d1" opacity="0.7" transform="rotate(-40 100 35)" />
        </svg>
      </div>

      <div className="max-w-lg mx-auto">
        <motion.div style={{ y }}>
          <PhotoReveal
            src={weddingConfig.photos.couple}
            alt="Couple photograph"
            aspectRatio="aspect-[4/5]"
            className="w-full"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
