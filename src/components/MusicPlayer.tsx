import { motion, AnimatePresence } from 'framer-motion'
import { useMusicPlayer } from '@/hooks/useMusicPlayer'
import { RiMusicLine, RiPauseLine } from 'react-icons/ri'

export function MusicPlayer() {
  const { isPlaying, toggle } = useMusicPlayer()

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      role="region"
      aria-label="Music player"
    >
      <motion.button
        onClick={toggle}
        className="
          relative w-12 h-12 rounded-full
          bg-olive text-ivory-DEFAULT
          flex items-center justify-center
          shadow-card hover:shadow-card-hover
          focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
          transition-shadow duration-300
        "
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        aria-label={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
        aria-pressed={isPlaying}
      >
        {/* Ripple animation when playing */}
        <AnimatePresence>
          {isPlaying && (
            <>
              <motion.span
                className="absolute inset-0 rounded-full border border-olive"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 1.8, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.span
                className="absolute inset-0 rounded-full border border-olive"
                initial={{ scale: 1, opacity: 0.4 }}
                animate={{ scale: 2.4, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, delay: 0.4, repeat: Infinity, ease: 'easeOut' }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Icon */}
        <motion.span
          key={isPlaying ? 'pause' : 'play'}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-xl relative z-10"
        >
          {isPlaying ? <RiPauseLine /> : <RiMusicLine />}
        </motion.span>
      </motion.button>

      {/* Label tooltip */}
      <motion.div
        className="absolute bottom-14 right-0 pointer-events-none"
        initial={{ opacity: 0, y: 4, scale: 0.9 }}
        animate={{ opacity: isPlaying ? 1 : 0, y: isPlaying ? 0 : 4, scale: isPlaying ? 1 : 0.9 }}
        transition={{ duration: 0.25 }}
      >
        <div className="bg-charcoal text-ivory-DEFAULT text-[10px] font-body tracking-widest uppercase px-2.5 py-1 rounded-full whitespace-nowrap">
          ♪ Ambient
        </div>
      </motion.div>
    </div>
  )
}
