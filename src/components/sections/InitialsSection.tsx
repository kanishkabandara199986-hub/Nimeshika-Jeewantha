import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { Divider } from '@/components/ui/Divider'
import { scaleIn, slideUp, staggerContainer } from '@/animations/variants'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function InitialsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="initials"
      ref={ref}
      className="section-pad px-6 bg-ivory"
      aria-label="Couple initials"
    >
      <motion.div
        className="max-w-sm mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Monogram */}
        <motion.div
          variants={scaleIn}
          className="flex items-center justify-center gap-6 mb-6"
        >
          <span className="font-heading text-[6rem] lg:text-[8rem] font-light text-charcoal leading-none tracking-widest">
            {weddingConfig.groomInitial}
          </span>

          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-14 lg:h-18 bg-charcoal opacity-30" />
            <motion.div
              animate={prefersReduced ? {} : { scale: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2 h-2 rounded-full bg-gold"
            />
            <div className="w-px h-14 lg:h-18 bg-charcoal opacity-30" />
          </div>

          <span className="font-heading text-[6rem] lg:text-[8rem] font-light text-charcoal leading-none tracking-widest">
            {weddingConfig.brideInitial}
          </span>
        </motion.div>

        {/* Divider */}
        <motion.div variants={slideUp} className="flex justify-center mb-6">
          <Divider variant="gold" width={160} />
        </motion.div>

        {/* Our Wedding text */}
        <motion.p
          variants={slideUp}
          className="font-body text-sm tracking-[0.45em] uppercase text-charcoal-muted"
        >
          Our Wedding
        </motion.p>
      </motion.div>
    </section>
  )
}
