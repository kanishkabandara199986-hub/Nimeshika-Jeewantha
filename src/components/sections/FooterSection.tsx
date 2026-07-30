import { motion } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { BotanicalFrame } from '@/components/ui/BotanicalFrame'
import { Divider } from '@/components/ui/Divider'
import { fadeIn } from '@/animations/variants'

export function FooterSection() {
  return (
    <footer
      id="footer"
      className="relative pt-16 pb-12 px-6 bg-cream overflow-hidden text-center"
      aria-label="Footer"
    >
      {/* Botanical frame */}
      <div className="flex justify-center mb-6">
        <BotanicalFrame position="both" opacity={0.7} className="w-full max-w-xs" />
      </div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="max-w-sm mx-auto"
      >
        {/* Brand name */}
        <p className="font-script text-4xl lg:text-5xl text-charcoal mb-4">
          {weddingConfig.brand}
        </p>

        <Divider variant="botanical" className="w-48 mx-auto mb-6" />

        {/* Date */}
        <p className="font-heading text-sm lg:text-base font-light text-charcoal tracking-[0.3em] uppercase mb-2">
          {weddingConfig.date.dayOfWeek}, {weddingConfig.date.month} {weddingConfig.date.day}
        </p>
        <p className="font-heading text-sm font-light text-charcoal-muted tracking-widest uppercase mb-8">
          {weddingConfig.date.year}
        </p>

        {/* Closing quote */}
        <p className="font-body text-xs italic text-charcoal-muted mb-8">
          "{weddingConfig.verse.reference}"
        </p>

        {/* Copyright */}
        <p className="font-body text-[10px] text-charcoal-muted/50 tracking-widest uppercase">
          © {weddingConfig.footerYear} {weddingConfig.groomFirstName} & {weddingConfig.brideFirstName}
        </p>
      </motion.div>
    </footer>
  )
}
