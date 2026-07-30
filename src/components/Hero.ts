import { weddingData } from '../data';

/**
 * Hero Component - Mobile Optimized
 * Renders the primary fullscreen invitation banner with royal gold glassmorphism panel.
 */
export function createHeroComponent(): HTMLElement {
  const heroSection = document.createElement('section');
  heroSection.className = 'hero-section';
  heroSection.id = 'hero';

  heroSection.innerHTML = `
    <!-- Royal Gold Glassmorphism Hero Panel -->
    <div class="hero-card glass-card reveal-fade-up">
      <!-- Botanical Royal Gold Corner Ornaments -->
      <svg class="corner-decor top-left" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 90 C10 40, 40 10, 90 10" stroke="#f6e6b4" stroke-width="1.5" stroke-dasharray="3 3"/>
        <circle cx="90" cy="10" r="3" fill="#d4af37"/>
        <path d="M25 75 C30 50, 50 30, 75 25" stroke="#d4af37" stroke-width="1"/>
        <circle cx="25" cy="75" r="2" fill="#f6e6b4"/>
      </svg>
      <svg class="corner-decor top-right" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 90 C10 40, 40 10, 90 10" stroke="#f6e6b4" stroke-width="1.5" stroke-dasharray="3 3"/>
        <circle cx="90" cy="10" r="3" fill="#d4af37"/>
        <path d="M25 75 C30 50, 50 30, 75 25" stroke="#d4af37" stroke-width="1"/>
      </svg>
      <svg class="corner-decor bottom-left" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 90 C10 40, 40 10, 90 10" stroke="#f6e6b4" stroke-width="1.5" stroke-dasharray="3 3"/>
        <circle cx="90" cy="10" r="3" fill="#d4af37"/>
      </svg>
      <svg class="corner-decor bottom-right" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 90 C10 40, 40 10, 90 10" stroke="#f6e6b4" stroke-width="1.5" stroke-dasharray="3 3"/>
        <circle cx="90" cy="10" r="3" fill="#d4af37"/>
      </svg>

      <!-- Invitation Tagline -->
      <span class="hero-tag">We Are Getting Married</span>

      <!-- Botanical Line Divider -->
      <div class="botanical-divider">
        <div class="line"></div>
        <svg class="leaf-icon" viewBox="0 0 24 24">
          <path d="M17,8C14,8 10,10 8,14C10,13.5 12,13 14,13.5C12.5,15 11,17 10.5,19C12.5,18 15,16.5 16,14.5C17,12.5 17.5,10 17,8Z" fill="#f6e6b4" />
        </svg>
        <div class="line"></div>
      </div>

      <!-- Main Names Display -->
      <h1 class="hero-names">
        <span class="bride-name text-gradient">${weddingData.couple.brideName}</span>
        <span class="ampersand">${weddingData.couple.displayAmpersand}</span>
        <span class="groom-name text-gradient">${weddingData.couple.groomName}</span>
      </h1>

      <!-- Date Display Block -->
      <div class="hero-date-block">
        <span class="hero-day">${weddingData.date.dayOfWeek}</span>
        <time datetime="${weddingData.date.isoDate}" class="hero-date text-gold-solid">${weddingData.date.fullDate}</time>
      </div>
    </div>

    <!-- Scroll to Discover Interactive Indicator -->
    <a href="#story" class="scroll-indicator" aria-label="Scroll to discover our story">
      <span>Scroll to Discover</span>
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
    </a>
  `;

  return heroSection;
}
