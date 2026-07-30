import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface Leaf {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  speed: number
  amplitude: number
  phase: number
  opacity: number
  color: string
}

const LEAF_COLORS = ['#7C9A7E', '#A8BFA9', '#5A7A5C', '#C9A96E', '#8AA88C']

function generateLeaves(count: number): Leaf[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 8 + Math.random() * 16,
    rotation: Math.random() * 360,
    speed: 3 + Math.random() * 4,
    amplitude: 8 + Math.random() * 16,
    phase: Math.random() * Math.PI * 2,
    opacity: 0.15 + Math.random() * 0.2,
    color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
  }))
}

interface FloatingLeavesProps {
  count?: number
  className?: string
}

export function FloatingLeaves({ count = 12, className = '' }: FloatingLeavesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const leavesRef = useRef<Leaf[]>(generateLeaves(count))
  const rafRef = useRef<number>(0)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let startTime: number | null = null

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    const drawLeaf = (ctx: CanvasRenderingContext2D, leaf: Leaf, t: number) => {
      const cw = canvas.offsetWidth
      const ch = canvas.offsetHeight
      const x = (leaf.x / 100) * cw
      const yBase = (leaf.y / 100) * ch
      const y = yBase + Math.sin(t / leaf.speed + leaf.phase) * leaf.amplitude

      ctx.save()
      ctx.globalAlpha = leaf.opacity
      ctx.translate(x, y)
      ctx.rotate(
        ((leaf.rotation + Math.sin(t / leaf.speed + leaf.phase) * 15) * Math.PI) / 180
      )

      // Draw leaf shape
      ctx.fillStyle = leaf.color
      ctx.beginPath()
      ctx.moveTo(0, -leaf.size / 2)
      ctx.bezierCurveTo(
        leaf.size / 2, -leaf.size / 4,
        leaf.size / 2, leaf.size / 4,
        0, leaf.size / 2
      )
      ctx.bezierCurveTo(
        -leaf.size / 2, leaf.size / 4,
        -leaf.size / 2, -leaf.size / 4,
        0, -leaf.size / 2
      )
      ctx.fill()

      // Vein
      ctx.strokeStyle = 'rgba(255,255,255,0.25)'
      ctx.lineWidth = 0.5
      ctx.beginPath()
      ctx.moveTo(0, -leaf.size / 2)
      ctx.lineTo(0, leaf.size / 2)
      ctx.stroke()

      ctx.restore()
    }

    const animate = (ts: number) => {
      if (!startTime) startTime = ts
      const t = (ts - startTime) / 1000

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      leavesRef.current.forEach((leaf) => drawLeaf(ctx, leaf, t))
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [prefersReduced])

  if (prefersReduced) return null

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      aria-hidden="true"
    />
  )
}
