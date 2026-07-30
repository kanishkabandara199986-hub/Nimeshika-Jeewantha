import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface PhotoRevealProps {
  src: string
  alt: string
  aspectRatio?: string
  className?: string
  priority?: boolean
}

export function PhotoReveal({
  src,
  alt,
  aspectRatio = 'aspect-[3/4]',
  className = '',
  priority = false,
}: PhotoRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReduced = useReducedMotion()
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-lg shadow-card ${aspectRatio} ${className}`}
    >
      {/* Loading shimmer */}
      {!loaded && (
        <div className="absolute inset-0 img-shimmer rounded-lg" />
      )}

      {/* Mask reveal overlay */}
      <motion.div
        className="absolute inset-0 bg-ivory z-10 origin-top"
        initial={{ scaleY: 1 }}
        animate={inView ? { scaleY: 0 } : { scaleY: 1 }}
        transition={
          prefersReduced
            ? { duration: 0 }
            : { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
        }
        style={{ transformOrigin: 'top' }}
      />

      {/* Image */}
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
        transition={
          prefersReduced
            ? { duration: 0 }
            : { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 }
        }
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}
