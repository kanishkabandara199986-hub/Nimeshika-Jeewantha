import { weddingData } from '../data';

/**
 * Gallery Component
 * Displays the second romantic couple photo in a luxury rounded frame.
 */
export function createGalleryComponent(): HTMLElement {
  const gallerySection = document.createElement('section');
  gallerySection.className = 'section-wrapper narrow';
  gallerySection.id = 'gallery';

  gallerySection.innerHTML = `
    <!-- Section Header -->
    <div class="section-header reveal-fade-up">
      <span class="section-subtitle">Captured Moments</span>
      <h2 class="section-title text-gradient">Forever & Always</h2>
    </div>

    <!-- Gallery Single/Featured Frame -->
    <div class="reveal-fade-up">
      <div class="gallery-item rounded-frame parallax-target" data-speed="0.06" style="margin: 0 auto; max-width: 620px; box-shadow: 0 25px 60px rgba(0,0,0,0.65); border: 1px solid var(--glass-border);">
        <div class="gallery-img-wrap img-mask-reveal">
          <img 
            src="${weddingData.gallery.roundedFrame.url}" 
            alt="${weddingData.gallery.roundedFrame.alt}" 
            class="gallery-img"
            loading="lazy"
            decoding="async"
          />
          <div class="gallery-overlay"></div>
          <div class="gallery-caption" style="font-family: var(--font-heading); font-size: 1.4rem; color: var(--gold-light); font-style: italic;">
            ${weddingData.gallery.roundedFrame.caption}
          </div>
        </div>
      </div>
    </div>
  `;

  return gallerySection;
}
