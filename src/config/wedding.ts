// ─────────────────────────────────────────────
//  Wedding Configuration — All editable content
// ─────────────────────────────────────────────

export const weddingConfig = {
  // Couple
  groomFirstName: 'Rafaela',
  brideFirstName: 'Josué',
  groomInitial: 'R',
  brideInitial: 'J',
  coupleName: 'Rafaela & Josué',

  // Date — Sunday, August 16 2026
  date: {
    day: 16,
    month: 'August',
    monthShort: 'AUG',
    year: 2026,
    dayOfWeek: 'Sunday',
    iso: '2026-08-16',
  },

  // Bible verse
  verse: {
    text: '"Three things will last forever — faith, hope, and love, and the greatest of these is love."',
    reference: '1 Corinthians 13:13',
  },

  // Invitation body copy
  invitationText:
    'With great joy and grateful hearts, together with our parents, we invite you to share in the celebration of our love as we unite in marriage.',

  // Parents
  parents: {
    groom: {
      label: 'Parents of the Groom',
      names: ['Mr. Carlos Mendes', '& Mrs. Lucia Mendes'],
    },
    bride: {
      label: 'Parents of the Bride',
      names: ['Mr. André Souza', '& Mrs. Juliana Souza'],
    },
  },

  // Venues
  ceremony: {
    time: '5:00 PM',
    label: 'Religious Ceremony',
    venue: 'Saint Patrick Church',
    address: '123 Green Valley Road',
    city: 'Lisbon, State of Grace 01234',
    mapsUrl: 'https://maps.google.com/?q=Saint+Patrick+Church+Lisbon',
  },

  reception: {
    time: '6:30 PM',
    label: 'Reception',
    venue: 'Villa das Flores',
    address: '456 Garden Lane',
    city: 'Lisbon, State of Grace 01234',
    mapsUrl: 'https://maps.google.com/?q=Villa+das+Flores+Lisbon',
  },

  // Timeline events
  timeline: [
    { time: '5:00 PM', event: 'Ceremony', icon: 'church' },
    { time: '6:30 PM', event: 'Welcome Cocktail', icon: 'cocktail' },
    { time: '7:45 PM', event: "Couple's Entrance", icon: 'couple' },
    { time: '8:00 PM', event: 'Dinner', icon: 'dinner' },
    { time: '9:00 PM', event: 'Party', icon: 'party' },
    { time: '3:30 AM', event: 'Farewell', icon: 'farewell' },
  ],

  // Reserved seats
  reservedSeats: 2,

  // Gift information
  gift: {
    message:
      'Your presence is the greatest gift of all. However, if you wish to honor us with a gift, a monetary contribution will be warmly appreciated.',
    envelopeLabel: 'Gift Envelopes',
  },

  // RSVP
  rsvp: {
    deadline: 'March 1st, 2026',
    message: 'Please confirm your attendance by March 1st, 2026.',
    whatsappNumber: '+5511999999999',
    whatsappText: encodeURIComponent(
      'Hello! I would like to confirm my attendance at Rafaela & Josué\'s wedding on August 16, 2026.'
    ),
  },

  // Closing message
  closingMessage: 'We look forward to celebrating with you',
  adultsOnly: 'Adults Only, Please',
  adultsOnlyNote:
    'We hope you understand our special day is an adults-only celebration.',

  // Footer / Brand
  brand: 'AreOne',
  footerYear: 2026,

  // Photos
  photos: {
    hero: '/assets/2.jpeg',
    couple: '/assets/2.jpeg',
    capturedMoments: [
      '/assets/3v.jpeg',
      '/assets/1.jpeg',
      '/assets/5v.jpeg',
    ],
    closing: '/assets/5v.jpeg',
  },
} as const

export type WeddingConfig = typeof weddingConfig
