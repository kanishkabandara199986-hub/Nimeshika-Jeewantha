import { useCallback, useEffect, useRef, useState } from 'react'

export function useMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const audio = new Audio('/audio/ambient.mp3')
    audio.loop = true
    audio.volume = 0.35
    audioRef.current = audio

    audio.addEventListener('canplaythrough', () => setIsLoaded(true))
    audio.addEventListener('error', () => setIsLoaded(false))

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {})
    }
  }, [isPlaying])

  return { isPlaying, isLoaded, toggle }
}
