import './styles/main.css';
import './styles/animations.css';

import { createEnvelopeComponent } from './components/EnvelopeModal';
import { createHeroComponent } from './components/Hero';
import { createHeroPhotoComponent } from './components/HeroPhoto';
import { createStoryComponent } from './components/Story';
import { createGalleryComponent } from './components/Gallery';
import { createDetailsComponent } from './components/Details';
import { createQuoteComponent } from './components/Quote';
import { createFooterComponent } from './components/Footer';

import {
  initSmoothScroll,
  initCanvasBotanicals,
  initScrollAnimations,
  initAudioPlayer,
} from './animations';

/**
 * Main Application Initializer
 * Assembles modular TypeScript UI components, mounts Loading & Envelope Modal, and activates luxury animation systems.
 */
function initApp(): void {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  // Create semantic main wrapper for accessibility
  const mainContent = document.createElement('main');
  mainContent.id = 'main-content';

  // Mount components in structural order
  mainContent.appendChild(createHeroComponent());
  mainContent.appendChild(createHeroPhotoComponent());
  mainContent.appendChild(createStoryComponent());
  mainContent.appendChild(createGalleryComponent());
  mainContent.appendChild(createDetailsComponent());
  mainContent.appendChild(createQuoteComponent());
  mainContent.appendChild(createFooterComponent());

  appContainer.innerHTML = '';
  appContainer.appendChild(mainContent);

  // Initialize Animation & Interactive Engines
  initSmoothScroll();
  initCanvasBotanicals();
  initScrollAnimations();
  initAudioPlayer();

  // Mount Loading Screen & Interactive "Open Invitation" Envelope Modal
  const envelopeModal = createEnvelopeComponent(() => {
    // When invitation is opened, trigger music audio play
    const audioBtn = document.querySelector('.audio-control-btn') as HTMLButtonElement;
    if (audioBtn) {
      audioBtn.click();
    }
  });

  document.body.appendChild(envelopeModal);
}

// Execute when DOM content is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
