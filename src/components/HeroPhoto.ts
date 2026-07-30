import { weddingData } from '../data';

/**
 * Hero Photo Component
 * Displays the primary luxury arched couple portrait right below Hero and above Our Story.
 */
export function createHeroPhotoComponent(): HTMLElement {
  const photoSection = document.createElement('section');
  photoSection.className = 'section-wrapper narrow';
  photoSection.id = 'hero-photo';
  photoSection.style.paddingTop = '40px';
  photoSection.style.paddingBottom = '40px';

  photoSection.innerHTML = `
    <div class="reveal-fade-up">
      <div class="gallery-item portrait-hero parallax-target" data-speed="-0.06" style="margin: 0 auto; max-width: 580px; box-shadow: 0 25px 60px rgba(0,0,0,0.65); border: 1px solid var(--glass-border);">
        <div class="gallery-img-wrap img-mask-reveal">
          <img 
            src="${weddingData.gallery.heroPortrait.url}" 
            alt="${weddingData.gallery.heroPortrait.alt}" 
            class="gallery-img"
            loading="eager"
            decoding="async"
          />
          <div class="gallery-overlay"></div>
          <div class="gallery-caption" style="font-family: var(--font-heading); font-size: 1.5rem; color: var(--gold-light); font-style: italic;">
            ${weddingData.couple.brideName} & ${weddingData.couple.groomName}
          </div>
        </div>
      </div>
    </div>
  `;

  return photoSection;
}
