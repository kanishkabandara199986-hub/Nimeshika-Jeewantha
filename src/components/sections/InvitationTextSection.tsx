import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { Divider } from '@/components/ui/Divider'
import { staggerContainer, slideUp } from '@/animations/variants'

export function InvitationTextSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <section
      id="invitation"
      ref={ref}
      className="section-pad px-6 bg-cream"
      aria-label="Wedding invitation text"
    >
      <motion.div
        className="max-w-sm mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={slideUp} className="flex justify-center mb-8">
          <Divider variant="botanical" className="w-full" />
        </motion.div>

        <motion.p
          variants={slideUp}
          className="font-body text-sm lg:text-base text-charcoal-light leading-loose uppercase tracking-widest"
        >
          {weddingConfig.invitationText}
        </motion.p>

        <motion.div variants={slideUp} className="flex justify-center mt-8">
          <Divider variant="botanical" className="w-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
