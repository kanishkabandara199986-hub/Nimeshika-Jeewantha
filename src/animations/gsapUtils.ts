import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(ScrollTrigger)

// DrawSVGPlugin requires a paid Club GreenSock license.
// We use a CSS stroke-dashoffset fallback here.
try {
  gsap.registerPlugin(DrawSVGPlugin)
} catch {
  // DrawSVGPlugin not available — fallback used
}

// ── SVG Line Draw (stroke-dashoffset method) ─────
export function animateSVGLine(
  el: SVGElement,
  trigger: Element,
  options: { duration?: number; delay?: number } = {}
) {
  const { duration = 1.4, delay = 0 } = options
  const length = (el as SVGGeometryElement).getTotalLength?.() ?? 200

  gsap.set(el, {
    strokeDasharray: length,
    strokeDashoffset: length,
    opacity: 1,
  })

  return gsap.to(el, {
    strokeDashoffset: 0,
    duration,
    delay,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })
}

// ── Parallax background helper ───────────────────
export function createParallax(
  el: HTMLElement,
  trigger: Element,
  strength = 0.2
) {
  return gsap.to(el, {
    yPercent: strength * 100,
    ease: 'none',
    scrollTrigger: {
      trigger,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}

// ── GSAP timeline sequence builder ───────────────
export function buildTimelineSequence(
  items: HTMLElement[],
  line: HTMLElement | null,
  options: { stagger?: number; duration?: number } = {}
) {
  const { stagger = 0.25, duration = 0.6 } = options
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: items[0],
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
  })

  if (line) {
    tl.fromTo(
      line,
      { scaleY: 0, transformOrigin: 'top center' },
      { scaleY: 1, duration: duration * items.length, ease: 'power2.out' }
    )
  }

  tl.fromTo(
    items,
    { opacity: 0, x: -24 },
    { opacity: 1, x: 0, duration, stagger, ease: 'power2.out' },
    line ? `-=${duration * items.length * 0.7}` : 0
  )

  return tl
}
