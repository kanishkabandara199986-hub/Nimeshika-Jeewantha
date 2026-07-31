/**
 * Wedding Invitation Data Model
 * Strictly typed invitation parameters for Nimeshika & Jeewantha
 */

export interface CoupleInfo {
  brideName: string;
  groomName: string;
  displayAmpersand: string;
}

export interface DateInfo {
  dayOfWeek: string;
  fullDate: string;
  isoDate: string;
}

export interface VenueInfo {
  name: string;
  street: string;
  suburb: string;
  district: string;
  googleMapsUrl: string;
  mapButtonText: string;
}

export interface ContactInfo {
  phoneDisplay: string;
  phoneRaw: string;
  assistanceText: string;
}

export interface GalleryPhoto {
  url: string;
  alt: string;
  caption?: string;
}

export interface WeddingData {
  couple: CoupleInfo;
  date: DateInfo;
  venue: VenueInfo;
  contact: ContactInfo;
  story: {
    title: string;
    subtitle: string;
    content: string;
  };
  gallery: {
    heroPortrait: GalleryPhoto;
    capturedMoments: GalleryPhoto[];
  };
  quote: {
    lines: string[];
  };
  thankYou: {
    mainHeading: string;
    subHeading: string;
  };
}

export const weddingData: WeddingData = {
  couple: {
    brideName: 'Nimeshika',
    groomName: 'Jeewantha',
    displayAmpersand: '&',
  },
  date: {
    dayOfWeek: 'Thursday',
    fullDate: '13 August 2026',
    isoDate: '2026-08-13',
  },
  venue: {
    name: 'Capital Resort Inn',
    street: 'Bibile Road',
    suburb: 'Hulandawa',
    district: 'Monaragala',
    googleMapsUrl: 'https://maps.app.goo.gl/MATc39ULgNZpxWgx8',
    mapButtonText: 'View on Google Maps',
  },
  contact: {
    phoneDisplay: '0777162719',
    phoneRaw: '+94777162719',
    assistanceText: 'If guests need assistance',
  },
  story: {
    title: 'Our Story',
    subtitle: 'A Garden of Memories',
    content: `Surrounded by the serene natural beauty and timeless warmth of Sri Lanka, our journey together began as a quiet melody of shared dreams and unspoken understanding. Through every season, our love bloomed into a partnership rooted in devotion, joy, and deep harmony. We invite you to step into our story as we embark on this sacred lifetime commitment.`,
  },
  gallery: {
    heroPortrait: {
      url: '/assets/2.jpeg',
      alt: 'Nimeshika & Jeewantha Main Wedding Portrait',
      caption: 'Nimeshika & Jeewantha',
    },
    capturedMoments: [
      {
        url: '/assets/3.jpeg',
        alt: 'Nimeshika & Jeewantha Captured Moment 1',
        caption: 'Cherished Moments',
      },
      {
        url: '/assets/1.jpeg',
        alt: 'Nimeshika & Jeewantha Captured Moment 2',
        caption: 'Love & Harmony',
      },
      {
        url: '/assets/5.jpeg',
        alt: 'Nimeshika & Jeewantha Captured Moment 3',
        caption: 'Forever & Always',
      },
    ],
  },
  quote: {
    lines: [
      'Two hearts,',
      'One beautiful journey,',
      'Forever begins here.'
    ]
  },
  thankYou: {
    mainHeading: 'We look forward to celebrating with you.',
    subHeading: 'Thank you for being part of our special day.',
  }
};
