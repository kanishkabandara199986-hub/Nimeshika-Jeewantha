import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('reveal'), 1600)
    const t2 = setTimeout(() => {
      setPhase('done')
      onComplete()
    }, 2800)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ivory"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Botanical decoration */}
          <motion.svg
            width="200"
            height="100"
            viewBox="0 0 200 100"
            fill="none"
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <path d="M20 70 Q60 40 100 25 Q140 10 180 20" stroke="#7C9A7E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <ellipse cx="45" cy="52" rx="12" ry="6" fill="#A8BFA9" opacity="0.7" transform="rotate(-40 45 52)" />
            <ellipse cx="75" cy="36" rx="14" ry="7" fill="#7C9A7E" opacity="0.65" transform="rotate(-50 75 36)" />
            <ellipse cx="110" cy="22" rx="11" ry="5.5" fill="#A8BFA9" opacity="0.6" transform="rotate(-45 110 22)" />
            <ellipse cx="148" cy="14" rx="12" ry="6" fill="#7C9A7E" opacity="0.7" transform="rotate(-35 148 14)" />
            <circle cx="100" cy="24" r="3" fill="#C9A96E" opacity="0.5" />
          </motion.svg>

          {/* Initials */}
          <motion.div
            className="flex items-center gap-4 mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-heading text-5xl font-light text-charcoal tracking-widest">
              {weddingConfig.groomInitial}
            </span>
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-6 bg-gold" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <div className="w-px h-6 bg-gold" />
            </div>
            <span className="font-heading text-5xl font-light text-charcoal tracking-widest">
              {weddingConfig.brideInitial}
            </span>
          </motion.div>

          <motion.p
            className="font-body text-xs tracking-[0.35em] uppercase text-charcoal-muted mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our Wedding
          </motion.p>

          {/* Progress bar */}
          <motion.div className="w-32 h-px bg-ivory-dark overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-sage"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
          </motion.div>

          <motion.p
            className="font-body text-xs text-charcoal-muted mt-4 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.6, 0] }}
            transition={{ duration: 1.8, times: [0, 0.2, 0.8, 1], repeat: Infinity }}
          >
            Loading...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
