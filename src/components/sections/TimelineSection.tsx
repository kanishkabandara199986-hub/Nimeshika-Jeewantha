import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { weddingConfig } from '@/config/wedding'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { buildTimelineSequence } from '@/animations/gsapUtils'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import {
  RiBuilding2Line,
  RiGlassesLine,
  RiHeartLine,
  RiRestaurantLine,
  RiMusicLine,
  RiStarLine,
} from 'react-icons/ri'

const ICON_MAP: Record<string, React.ReactNode> = {
  church: <RiBuilding2Line />,
  cocktail: <RiGlassesLine />,
  couple: <RiHeartLine />,
  dinner: <RiRestaurantLine />,
  party: <RiMusicLine />,
  farewell: <RiStarLine />,
}

export function TimelineSection() {
  const ref = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (!inView || prefersReduced) return
    const items = itemRefs.current.filter(Boolean)
    if (items.length && lineRef.current) {
      buildTimelineSequence(items, lineRef.current, { stagger: 0.2, duration: 0.55 })
    }
  }, [inView, prefersReduced])

  return (
    <section
      id="timeline"
      ref={ref}
      className="section-pad px-6 bg-ivory"
      aria-label="Wedding day itinerary"
    >
      <div className="max-w-sm mx-auto">
        <SectionTitle
          eyebrow="Schedule"
          title="Itinerary of Activities"
          className="mb-12"
        />

        <div className="relative">
          {/* Animated vertical line */}
          <div
            ref={lineRef}
            className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-sage/30 origin-top"
            aria-hidden="true"
          />

          {/* Timeline items */}
          <div className="space-y-8">
            {weddingConfig.timeline.map((item, i) => (
              <div
                key={i}
                ref={(el) => { if (el) itemRefs.current[i] = el }}
                className="flex items-center gap-5 opacity-0"
              >
                {/* Icon bubble */}
                <motion.div
                  className="relative z-10 flex-shrink-0 w-9 h-9 rounded-full bg-ivory border border-sage/40 flex items-center justify-center text-sage text-base shadow-sm"
                  whileHover={{ scale: 1.1, borderColor: '#7C9A7E' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {ICON_MAP[item.icon] ?? <RiStarLine />}
                </motion.div>

                {/* Content */}
                <div>
                  <p className="font-body text-[11px] text-charcoal-muted uppercase tracking-[0.2em]">
                    {item.time}
                  </p>
                  <p className="font-heading text-base lg:text-lg font-light text-charcoal">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
