import { motion } from 'framer-motion'
import { FloatingLeaves } from '@/components/ui/FloatingLeaves'
import { BotanicalFrame } from '@/components/ui/BotanicalFrame'
import { weddingConfig } from '@/config/wedding'
import { fadeIn, slideUp, staggerContainer } from '@/animations/variants'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HeroSection() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ivory"
      aria-label="Wedding invitation hero"
    >
      {/* Ambient floating leaves */}
      <FloatingLeaves count={14} />

      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(168, 191, 169, 0.12) 0%, transparent 70%)',
        }}
      />

      {/* Top botanical decoration */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-sm"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={prefersReduced ? { duration: 0 } : { duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <BotanicalFrame position="both" opacity={0.9} className="w-full px-4" />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Bible verse */}
        <motion.div variants={fadeIn} className="mb-10 max-w-xs">
          <p className="font-body text-xs lg:text-sm italic text-charcoal-light leading-relaxed tracking-wide">
            {weddingConfig.verse.text}
          </p>
          <p className="font-body text-xs text-charcoal-muted mt-2 tracking-[0.2em] uppercase">
            {weddingConfig.verse.reference}
          </p>
        </motion.div>

        {/* Thin line */}
        <motion.div variants={slideUp} className="w-16 h-px bg-gold mb-10" />

        {/* Initials monogram */}
        <motion.div
          variants={slideUp}
          className="flex items-center gap-5 mb-4"
        >
          <span className="font-heading text-[5rem] lg:text-[7rem] font-light text-charcoal leading-none tracking-widest">
            {weddingConfig.groomInitial}
          </span>

          <div className="flex flex-col items-center gap-1.5">
            <div className="w-px h-10 lg:h-14 bg-charcoal-muted opacity-60" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <div className="w-px h-10 lg:h-14 bg-charcoal-muted opacity-60" />
          </div>

          <span className="font-heading text-[5rem] lg:text-[7rem] font-light text-charcoal leading-none tracking-widest">
            {weddingConfig.brideInitial}
          </span>
        </motion.div>

        {/* Our Wedding */}
        <motion.p
          variants={slideUp}
          className="font-body text-xs tracking-[0.5em] uppercase text-charcoal-muted mb-12"
        >
          Our Wedding
        </motion.p>

        {/* Date teaser */}
        <motion.div variants={slideUp} className="flex flex-col items-center gap-2">
          <p className="font-heading text-lg text-charcoal-light tracking-widest uppercase">
            {weddingConfig.date.dayOfWeek}, {weddingConfig.date.month} {weddingConfig.date.day}, {weddingConfig.date.year}
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={prefersReduced ? {} : { delay: 2, duration: 0.8 }}
      >
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-muted">
          Scroll
        </p>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
          animate={prefersReduced ? {} : { scaleY: [1, 0.4, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
