import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { slideFromLeft, slideFromRight, staggerContainer, slideUp } from '@/animations/variants'

export function ParentsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <section
      id="parents"
      ref={ref}
      className="section-pad px-6 bg-ivory"
      aria-label="Parents of the couple"
    >
      <motion.div
        className="max-w-sm mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Small heart divider */}
        <motion.div variants={slideUp} className="flex justify-center mb-10">
          <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
            <path
              d="M12 20.5C12 20.5 2 14 2 7.5C2 4.46 4.46 2 7.5 2C9.24 2 10.91 2.81 12 4.08C13.09 2.81 14.76 2 16.5 2C19.54 2 22 4.46 22 7.5C22 14 12 20.5 12 20.5Z"
              fill="#fb6f92"
              opacity="0.6"
            />
          </svg>
        </motion.div>

        {/* Two-column parents */}
        <div className="grid grid-cols-2 gap-6 text-center">
          <motion.div variants={slideFromLeft}>
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-charcoal-muted mb-3 border-b border-gold/30 pb-2">
              {weddingConfig.parents.groom.label}
            </p>
            {weddingConfig.parents.groom.names.map((name, i) => (
              <p key={i} className="font-heading text-sm lg:text-base font-light text-charcoal leading-relaxed">
                {name}
              </p>
            ))}
          </motion.div>

          <motion.div variants={slideFromRight}>
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-charcoal-muted mb-3 border-b border-gold/30 pb-2">
              {weddingConfig.parents.bride.label}
            </p>
            {weddingConfig.parents.bride.names.map((name, i) => (
              <p key={i} className="font-heading text-sm lg:text-base font-light text-charcoal leading-relaxed">
                {name}
              </p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
