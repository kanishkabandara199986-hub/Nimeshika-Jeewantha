import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { Divider } from '@/components/ui/Divider'
import { staggerContainer, slideUp, scaleIn } from '@/animations/variants'

export function WeddingDateSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <section
      id="date"
      ref={ref}
      className="section-pad px-6 bg-ivory"
      aria-label="Wedding date"
    >
      <motion.div
        className="max-w-xs mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Month */}
        <motion.p
          variants={slideUp}
          className="font-body text-xs uppercase tracking-[0.5em] text-charcoal-muted mb-4"
        >
          {weddingConfig.date.month}
        </motion.p>

        {/* Date card with animated border */}
        <motion.div
          variants={scaleIn}
          className="relative inline-flex items-center gap-6 border border-charcoal/20 rounded-sm px-10 py-5 mb-4"
        >
          {/* Animated corner accents */}
          <motion.div
            className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.4 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.4 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.4 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.4 }}
          />

          <p className="font-body text-xs uppercase tracking-[0.3em] text-charcoal-muted">
            {weddingConfig.date.dayOfWeek}
          </p>

          <div className="w-px h-10 bg-charcoal/20" />

          <span className="font-heading text-6xl lg:text-7xl font-light text-charcoal leading-none">
            {weddingConfig.date.day}
          </span>

          <div className="w-px h-10 bg-charcoal/20" />

          <p className="font-body text-xs uppercase tracking-[0.3em] text-charcoal-muted">
            {weddingConfig.date.year}
          </p>
        </motion.div>

        {/* Small botanical divider */}
        <motion.div variants={slideUp} className="flex justify-center mt-6">
          <Divider variant="botanical" className="w-48" />
        </motion.div>
      </motion.div>
    </section>
  )
}
