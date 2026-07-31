import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { slideUp, staggerContainer } from '@/animations/variants'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  goldAccent?: boolean
  className?: string
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = true,
  goldAccent = true,
  className = '',
}: SectionTitleProps) {
  const { ref, inView } = useScrollAnimation({ threshold: 0.2 })

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <motion.p
          variants={slideUp}
          className="font-body text-xs uppercase tracking-[0.3em] text-charcoal-muted mb-3"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        variants={slideUp}
        className="font-heading text-3xl lg:text-4xl xl:text-5xl font-light text-charcoal"
      >
        {title}
      </motion.h2>

      {goldAccent && (
        <motion.div
          variants={slideUp}
          className="flex items-center justify-center gap-3 mt-4"
        >
          <div className="h-px w-12 bg-gold" />
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="2.5" fill="#fb6f92" />
            <circle cx="6" cy="6" r="5" stroke="#fb6f92" strokeWidth="0.6" fill="none" />
          </svg>
          <div className="h-px w-12 bg-gold" />
        </motion.div>
      )}

      {subtitle && (
        <motion.p
          variants={slideUp}
          className="font-body text-sm lg:text-base text-charcoal-muted mt-4 max-w-md mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
