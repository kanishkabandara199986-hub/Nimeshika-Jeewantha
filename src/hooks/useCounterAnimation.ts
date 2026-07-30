import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useReducedMotion } from './useReducedMotion'

export function useCounterAnimation(target: number, inView: boolean) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (!inView || !ref.current) return
    const el = ref.current

    if (prefersReduced) {
      el.textContent = String(target)
      return
    }

    // GSAP counter via proxy object
    const counter = { val: 0 }
    gsap.to(counter, {
      val: target,
      duration: 1.8,
      ease: 'power2.out',
      onUpdate() {
        if (el) {
          el.textContent = String(Math.round(counter.val))
        }
      },
    })
  }, [inView, target, prefersReduced])

  return ref
}
