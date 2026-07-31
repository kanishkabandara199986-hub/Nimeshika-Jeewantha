import { weddingData } from '../data';

/**
 * Story Component
 * Renders "Our Story" section with romantic narrative and botanical flourishes.
 */
export function createStoryComponent(): HTMLElement {
  const storySection = document.createElement('section');
  storySection.className = 'section-wrapper narrow';
  storySection.id = 'story';

  storySection.innerHTML = `
    <div class="story-card glass-card reveal-fade-up">
      <!-- Section Header -->
      <div class="section-header">
        <span class="section-subtitle">${weddingData.story.subtitle}</span>
        <h2 class="section-title text-gradient">${weddingData.story.title}</h2>
      </div>

      <!-- Botanical Floral Ornament -->
      <div class="botanical-divider">
        <div class="line"></div>
        <svg class="leaf-icon" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" opacity="0.3"/>
          <path d="M17 8C13 8 9 10 7 14c2-.5 4-1 6-.5-1.5 1.5-3 3.5-3.5 5.5 2-1 4.5-2.5 5.5-4.5 1-2 1.5-4.5 1-6.5z"/>
        </svg>
        <div class="line"></div>
      </div>

      <!-- Story Narrative Body -->
      <p class="story-text">
        "${weddingData.story.content}"
      </p>

      <!-- Signature Touch -->
      <div style="margin-top: 36px; font-family: var(--font-heading); font-size: 1.8rem; color: var(--gold-primary); font-style: italic;">
        ${weddingData.couple.brideName} & ${weddingData.couple.groomName}
      </div>
    </div>
  `;

  return storySection;
}
