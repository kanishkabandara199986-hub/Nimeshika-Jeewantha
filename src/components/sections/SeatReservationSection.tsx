import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { useCounterAnimation } from '@/hooks/useCounterAnimation'
import { scaleIn, staggerContainer, slideUp } from '@/animations/variants'
import { RiArmchairLine } from 'react-icons/ri'

export function SeatReservationSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })
  const counterRef = useCounterAnimation(weddingConfig.reservedSeats, inView)

  return (
    <section
      id="seats"
      ref={ref}
      className="section-pad px-6 bg-cream"
      aria-label="Reserved seats"
    >
      <div className="max-w-sm mx-auto text-center">
        <SectionTitle
          eyebrow="For You"
          title="Reserved Seats"
          className="mb-10"
        />

        <motion.div
          className="flex flex-col items-center gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Chair icon */}
          <motion.div
            variants={scaleIn}
            className="text-5xl text-sage mb-2"
            aria-hidden="true"
          >
            <RiArmchairLine />
          </motion.div>

          {/* Counter */}
          <motion.div
            variants={scaleIn}
            className="flex items-end gap-3"
          >
            <div className="border border-charcoal/20 rounded-sm w-20 h-20 flex items-center justify-center bg-ivory shadow-sm">
              <span
                ref={counterRef}
                className="font-heading text-5xl font-light text-charcoal"
                aria-label={`${weddingConfig.reservedSeats} reserved seats`}
              >
                0
              </span>
            </div>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-charcoal-muted mb-3">
              Seats
            </p>
          </motion.div>

          <motion.p variants={slideUp} className="font-body text-xs text-charcoal-muted mt-2">
            Reserved especially for you
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
