import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { BotanicalFrame } from '@/components/ui/BotanicalFrame'
import { slideUp, staggerContainer, scaleIn } from '@/animations/variants'

export function CoupleNamesSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <section
      id="couple-names"
      ref={ref}
      className="relative section-pad px-6 bg-cream overflow-hidden"
      aria-label="Couple names"
    >
      {/* Botanical frame top */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <BotanicalFrame position="both" opacity={0.6} className="w-full px-4" />
      </div>

      <motion.div
        className="relative z-10 max-w-sm mx-auto text-center pt-16"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Groom's script name */}
        <motion.h2
          variants={scaleIn}
          className="font-script text-[4.5rem] lg:text-[6rem] text-charcoal leading-tight"
        >
          {weddingConfig.groomFirstName}
        </motion.h2>

        {/* Ampersand */}
        <motion.p
          variants={slideUp}
          className="font-script text-5xl lg:text-6xl text-gold leading-none my-2"
          aria-hidden="true"
        >
          &amp;
        </motion.p>

        {/* Bride's script name */}
        <motion.h2
          variants={scaleIn}
          className="font-script text-[4.5rem] lg:text-[6rem] text-charcoal leading-tight"
        >
          {weddingConfig.brideFirstName}
        </motion.h2>

        {/* Invitation tagline */}
        <motion.div variants={slideUp} className="mt-10">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-charcoal-muted">
            We have the honor of inviting
          </p>
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-charcoal-muted">
            you to our wedding
          </p>
        </motion.div>
      </motion.div>

      {/* Botanical frame bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none rotate-180">
        <BotanicalFrame position="both" opacity={0.5} className="w-full px-4" />
      </div>
    </section>
  )
}
