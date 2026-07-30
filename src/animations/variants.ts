import type { Variants } from 'framer-motion'

// ── Fade In ──────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

// ── Slide Up ─────────────────────────────────────
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

// ── Slide Up Fast ────────────────────────────────
export const slideUpFast: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

// ── Scale In ─────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

// ── Slide from Left ──────────────────────────────
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

// ── Slide from Right ─────────────────────────────
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

// ── Stagger Container ────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

// ── Stagger Container Slow ───────────────────────
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
}

// ── Mask Reveal (clip-path) ───────────────────────
export const maskReveal: Variants = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
  },
}

// ── Photo Reveal ─────────────────────────────────
export const photoReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
}

// ── Floating (ambient loop) ───────────────────────
export const floatLoop = {
  y: [0, -14, 0],
  rotate: [-2, 2, -2],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

// ── Reduced motion variants helper ───────────────
export function respectsReducedMotion<T extends Variants>(
  variants: T,
  prefersReduced: boolean
): T {
  if (!prefersReduced) return variants
  // Collapse all animation to instant no-op
  const reduced: Variants = {}
  for (const key of Object.keys(variants)) {
    reduced[key] = { opacity: key === 'hidden' ? 0 : 1, transition: { duration: 0 } }
  }
  return reduced as T
}
