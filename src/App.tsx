import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'

import { useLenis } from '@/hooks/useLenis'
import { LoadingScreen } from '@/components/sections/LoadingScreen'
import { HeroSection } from '@/components/sections/HeroSection'
import { BibleVerseSection } from '@/components/sections/BibleVerseSection'
import { InitialsSection } from '@/components/sections/InitialsSection'
import { CouplePhotoSection } from '@/components/sections/CouplePhotoSection'
import { InvitationTextSection } from '@/components/sections/InvitationTextSection'
import { ParentsSection } from '@/components/sections/ParentsSection'
import { CoupleNamesSection } from '@/components/sections/CoupleNamesSection'
import { WeddingDateSection } from '@/components/sections/WeddingDateSection'
import { CeremonySection } from '@/components/sections/CeremonySection'
import { ReceptionSection } from '@/components/sections/ReceptionSection'
import { TimelineSection } from '@/components/sections/TimelineSection'
import { SeatReservationSection } from '@/components/sections/SeatReservationSection'
import { GiftSection } from '@/components/sections/GiftSection'
import { RSVPSection } from '@/components/sections/RSVPSection'
import { ClosingPhotoSection } from '@/components/sections/ClosingPhotoSection'
import { FooterSection } from '@/components/sections/FooterSection'
import { MusicPlayer } from '@/components/MusicPlayer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  // Initialize Lenis smooth scroll
  useLenis()

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {/* Main invitation */}
      <main
        id="main-content"
        className="relative min-h-screen bg-ivory"
        aria-label="Wedding invitation"
      >
        <HeroSection />
        <BibleVerseSection />
        <InitialsSection />
        <CouplePhotoSection />
        <InvitationTextSection />
        <ParentsSection />
        <CoupleNamesSection />
        <WeddingDateSection />
        <CeremonySection />
        <ReceptionSection />
        <TimelineSection />
        <SeatReservationSection />
        <GiftSection />
        <RSVPSection />
        <ClosingPhotoSection />
        <FooterSection />
      </main>

      {/* Sticky music player */}
      <MusicPlayer />
    </>
  )
}

export default App
