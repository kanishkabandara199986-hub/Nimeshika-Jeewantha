import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { Button } from '@/components/ui/Button'
import { Divider } from '@/components/ui/Divider'
import { staggerContainer, slideUp } from '@/animations/variants'
import { RiMapPin2Line } from 'react-icons/ri'

export function CeremonySection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <section
      id="ceremony"
      ref={ref}
      className="section-pad px-6 bg-ivory"
      aria-label="Ceremony details"
    >
      <motion.div
        className="max-w-sm mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.p
          variants={slideUp}
          className="font-body text-xs uppercase tracking-[0.4em] text-charcoal-muted mb-2"
        >
          {weddingConfig.ceremony.time}
        </motion.p>

        <motion.h2
          variants={slideUp}
          className="font-heading text-2xl lg:text-3xl font-light uppercase tracking-[0.25em] text-charcoal mb-2"
        >
          {weddingConfig.ceremony.label}
        </motion.h2>

        <motion.div variants={slideUp} className="flex justify-center mb-6">
          <Divider variant="gold" width={80} />
        </motion.div>

        <motion.p variants={slideUp} className="font-heading text-lg font-light text-charcoal mb-1">
          {weddingConfig.ceremony.venue}
        </motion.p>
        <motion.p variants={slideUp} className="font-body text-sm text-charcoal-muted mb-1">
          {weddingConfig.ceremony.address}
        </motion.p>
        <motion.p variants={slideUp} className="font-body text-sm text-charcoal-muted mb-8">
          {weddingConfig.ceremony.city}
        </motion.p>

        <motion.div variants={slideUp}>
          <Button
            href={weddingConfig.ceremony.mapsUrl}
            variant="primary"
            size="md"
            icon={<RiMapPin2Line />}
            aria-label={`View location of ${weddingConfig.ceremony.venue} on Google Maps`}
          >
            View Location
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
