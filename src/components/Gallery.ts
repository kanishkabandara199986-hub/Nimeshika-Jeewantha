import { weddingData } from '../data';

/**
 * Gallery Component
 * Displays "Captured Moments" section featuring 3 romantic photos (3v.jpeg, 1.jpeg, 5v.jpeg).
 * Mobile-first design, optimized for fast loading and smooth visual presentation.
 */
export function createGalleryComponent(): HTMLElement {
  const gallerySection = document.createElement('section');
  gallerySection.className = 'section-wrapper';
  gallerySection.id = 'gallery';

  const photos = weddingData.gallery.capturedMoments;

  const photoCardsHtml = photos.map((photo, index) => {
    const delayClass = `delay-${index + 1}`;
    // Distinct elegant frame shapes for an editorial layout
    const frameShapeStyle = index === 1 
      ? 'border-radius: 24px; height: 460px;' 
      : 'border-radius: 160px 160px 24px 24px; height: 480px;';

    return `
      <div class="reveal-fade-up ${delayClass}">
        <div class="gallery-item parallax-target" data-speed="${0.03 * (index % 2 === 0 ? 1 : -1)}" style="${frameShapeStyle} margin: 0 auto; width: 100%; box-shadow: 0 20px 45px rgba(251, 111, 146, 0.18); border: 1px solid var(--glass-border);">
          <div class="gallery-img-wrap img-mask-reveal">
            <img 
              src="${photo.url}" 
              alt="${photo.alt}" 
              class="gallery-img"
              loading="lazy"
              decoding="async"
              width="400"
              height="530"
            />
            <div class="gallery-overlay"></div>
            <div class="gallery-caption" style="font-family: var(--font-heading); font-size: 1.35rem; color: #ffe5ec; font-style: italic;">
              ${photo.caption}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  gallerySection.innerHTML = `
    <!-- Section Header -->
    <div class="section-header reveal-fade-up">
      <span class="section-subtitle">Captured Moments</span>
      <h2 class="section-title text-gradient">Love & Memories</h2>
    </div>

    <!-- 3-Photo Responsive Gallery Grid -->
    <div class="gallery-grid">
      ${photoCardsHtml}
    </div>
  `;

  return gallerySection;
}
