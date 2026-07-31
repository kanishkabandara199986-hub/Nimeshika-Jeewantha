import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { PhotoReveal } from '@/components/ui/PhotoReveal'
import { slideUp, staggerContainer } from '@/animations/variants'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function ClosingPhotoSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [-20, 20])

  return (
    <section
      id="closing"
      ref={ref}
      className="relative section-pad px-4 lg:px-8 bg-ivory overflow-hidden"
      aria-label="Closing photo"
    >
      {/* Background botanical watercolor */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="300" height="400" viewBox="0 0 300 400" fill="none">
          <ellipse cx="250" cy="200" rx="200" ry="300" fill="#ffc2d1" />
        </svg>
      </div>

      <motion.div
        className="max-w-lg mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Closing text */}
        <motion.div variants={slideUp} className="text-center mb-10">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-charcoal-muted mb-4">
            ✦
          </p>
          <p className="font-heading text-xl lg:text-2xl font-light text-charcoal uppercase tracking-[0.2em]">
            {weddingConfig.closingMessage}
          </p>
        </motion.div>

        {/* Closing photo */}
        <motion.div style={{ y }}>
          <PhotoReveal
            src={weddingConfig.photos.closing}
            alt="Couple closing photograph"
            aspectRatio="aspect-[4/5]"
            className="w-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
