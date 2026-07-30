import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { Divider } from '@/components/ui/Divider'
import { staggerContainer, slideUp, scaleIn } from '@/animations/variants'

export function BibleVerseSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-100px' })

  return (
    <section
      id="verse"
      ref={ref}
      className="relative section-pad px-6 overflow-hidden bg-cream"
      aria-label="Bible verse"
    >
      {/* Subtle background botanical */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
        <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
          <ellipse cx="200" cy="150" rx="180" ry="110" fill="#7C9A7E" />
        </svg>
      </div>

      <motion.div
        className="relative max-w-lg mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Decorative quote mark */}
        <motion.div
          variants={scaleIn}
          className="font-heading text-8xl text-gold opacity-20 leading-none mb-2 select-none"
          aria-hidden="true"
        >
          "
        </motion.div>

        <motion.blockquote
          variants={staggerContainer}
          className="font-heading text-xl lg:text-2xl xl:text-3xl font-light italic text-charcoal leading-relaxed"
        >
          {weddingConfig.verse.text
            .replace(/^"|"$/g, '')
            .split(' — ')
            .map((part, i) => (
              <motion.span key={i} variants={slideUp} className="block">
                {i === 0 ? `"${part} —` : `${part}"`}
              </motion.span>
            ))}
        </motion.blockquote>

        <motion.div variants={slideUp} className="mt-8 flex justify-center">
          <Divider variant="gold" width={100} />
        </motion.div>

        <motion.cite
          variants={slideUp}
          className="not-italic font-body text-xs tracking-[0.3em] uppercase text-charcoal-muted mt-6 block"
        >
          {weddingConfig.verse.reference}
        </motion.cite>
      </motion.div>
    </section>
  )
}
