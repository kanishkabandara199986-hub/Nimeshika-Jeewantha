import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Divider } from '@/components/ui/Divider'
import { staggerContainer, slideUp, scaleIn } from '@/animations/variants'
import { RiGiftLine, RiMailLine } from 'react-icons/ri'

export function GiftSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <section
      id="gifts"
      ref={ref}
      className="section-pad px-6 bg-ivory"
      aria-label="Gift information"
    >
      <div className="max-w-sm mx-auto text-center">
        <SectionTitle eyebrow="Gifts" title="Gift Suggestion" className="mb-8" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col items-center gap-6"
        >
          {/* Gift icon */}
          <motion.div
            variants={scaleIn}
            className="w-14 h-14 rounded-full bg-cream flex items-center justify-center text-2xl text-sage border border-sage/20"
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
            transition={{ duration: 0.5 }}
            aria-hidden="true"
          >
            <RiGiftLine />
          </motion.div>

          {/* Message */}
          <motion.p variants={slideUp} className="font-body text-sm text-charcoal-muted leading-relaxed">
            {weddingConfig.gift.message}
          </motion.p>

          <motion.div variants={slideUp} className="w-full">
            <Divider variant="gold" width={100} className="mx-auto mb-6" />
          </motion.div>

          {/* Envelope icon + label */}
          <motion.div
            variants={slideUp}
            className="flex flex-col items-center gap-3"
          >
            <p className="font-body text-[10px] uppercase tracking-[0.3em] text-charcoal-muted">
              {weddingConfig.gift.envelopeLabel}
            </p>
            <motion.div
              className="text-3xl text-gold"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              <RiMailLine />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
