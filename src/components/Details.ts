import { weddingData } from '../data';

/**
 * Details Component
 * Renders venue & date details in luxury cards with SVG icons and Google Maps call to action.
 */
export function createDetailsComponent(): HTMLElement {
  const detailsSection = document.createElement('section');
  detailsSection.className = 'section-wrapper narrow';
  detailsSection.id = 'details';

  detailsSection.innerHTML = `
    <div class="glass-card reveal-fade-up" style="padding: 56px 40px;">
      <!-- Section Header -->
      <div class="section-header">
        <span class="section-subtitle">Celebration Details</span>
        <h2 class="section-title text-gradient">When & Where</h2>
      </div>

      <!-- Grid for Date & Venue Cards -->
      <div class="details-grid">
        <!-- Date Card -->
        <div class="detail-card-item reveal-fade-up delay-1">
          <div class="detail-icon-wrap">
            <!-- Calendar SVG Icon -->
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/>
            </svg>
          </div>
          <span class="detail-title">Wedding Date</span>
          <div class="detail-value">
            <span style="display: block; font-family: var(--font-body); font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.25em; color: var(--soft-olive); margin-bottom: 4px;">
              ${weddingData.date.dayOfWeek}
            </span>
            ${weddingData.date.fullDate}
          </div>
        </div>

        <!-- Venue Card -->
        <div class="detail-card-item reveal-fade-up delay-2">
          <div class="detail-icon-wrap">
            <!-- Location Pin SVG Icon -->
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <span class="detail-title">The Venue</span>
          <div class="venue-lines">
            <strong class="venue-name">${weddingData.venue.name}</strong>
            ${weddingData.venue.street}<br/>
            ${weddingData.venue.suburb}<br/>
            ${weddingData.venue.district}
          </div>
        </div>
      </div>

      <!-- Google Maps Call To Action Button -->
      <div class="details-map-action reveal-fade-up delay-3">
        <a 
          href="${weddingData.venue.googleMapsUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn-luxury"
          aria-label="View Capital Resort Inn on Google Maps"
        >
          <span>${weddingData.venue.mapButtonText}</span>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h6v2H5v12h12v-6h2v6c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2z"/>
          </svg>
        </a>
      </div>
    </div>
  `;

  return detailsSection;
}
