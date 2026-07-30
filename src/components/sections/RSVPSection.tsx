import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Button } from '@/components/ui/Button'
import { Divider } from '@/components/ui/Divider'
import { staggerContainer, slideUp } from '@/animations/variants'
import { RiWhatsappLine } from 'react-icons/ri'

export function RSVPSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  const whatsappUrl = `https://wa.me/${weddingConfig.rsvp.whatsappNumber}?text=${weddingConfig.rsvp.whatsappText}`

  return (
    <section
      id="rsvp"
      ref={ref}
      className="relative section-pad px-6 bg-cream overflow-hidden"
      aria-label="RSVP confirmation"
    >
      {/* Subtle background watercolor blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(168, 191, 169, 0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-sm mx-auto text-center">
        <SectionTitle
          eyebrow="Confirmation"
          title="RSVP"
          className="mb-8"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col items-center gap-6"
        >
          <motion.p variants={slideUp} className="font-body text-sm text-charcoal-muted leading-relaxed">
            {weddingConfig.rsvp.message}
          </motion.p>

          <motion.div variants={slideUp}>
            <Button
              href={whatsappUrl}
              variant="primary"
              size="lg"
              pulse
              icon={<RiWhatsappLine />}
              aria-label="Send RSVP via WhatsApp"
            >
              Send Message
            </Button>
          </motion.div>

          <motion.div variants={slideUp} className="mt-4">
            <Divider variant="botanical" className="w-48 mx-auto mb-6" />
            <p className="font-heading text-lg lg:text-xl font-light text-charcoal mb-2">
              {weddingConfig.adultsOnly}
            </p>
            <p className="font-body text-sm text-charcoal-muted leading-relaxed">
              {weddingConfig.adultsOnlyNote}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
