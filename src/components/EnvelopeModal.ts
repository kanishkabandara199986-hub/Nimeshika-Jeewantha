import { weddingData } from '../data';

/**
 * Envelope & Loading Screen Component
 * Renders an initial luxury loading screen and an interactive "Open Invitation" envelope with royal gold wax seal.
 */
export function createEnvelopeComponent(onOpen: () => void): HTMLElement {
  const overlay = document.createElement('div');
  overlay.id = 'invitation-envelope-overlay';
  overlay.className = 'envelope-overlay';

  overlay.innerHTML = `
    <!-- Luxury Loading Screen State -->
    <div id="envelope-loader" class="envelope-loader-content">
      <div class="loader-monogram text-gradient">N & J</div>
      <div class="loader-sparkle pulse-glow">✦</div>
      <span class="loader-text">Preparing Invitation...</span>
      <div class="loader-bar-wrap">
        <div class="loader-bar-fill"></div>
      </div>
    </div>

    <!-- Interactive Open Invitation Envelope Card -->
    <div id="envelope-card" class="envelope-card-container" style="display: none;">
      <!-- Outer Envelope Body -->
      <div class="envelope-wrapper">
        <div class="envelope-back"></div>
        <div class="envelope-flap" id="envelope-flap">
          <svg viewBox="0 0 500 200" preserveAspectRatio="none" class="flap-svg">
            <path d="M0,0 L250,150 L500,0 Z" fill="#1b3819" stroke="#d4af37" stroke-width="2"/>
          </svg>
        </div>

        <!-- Envelope Front Card -->
        <div class="envelope-inner-card glass-card">
          <span class="envelope-to">You Are Cordially Invited</span>
          
          <div class="botanical-divider" style="margin: 16px 0;">
            <div class="line"></div>
            <svg class="leaf-icon" viewBox="0 0 24 24" style="width: 24px; height: 24px;">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <div class="line"></div>
          </div>

          <h1 class="envelope-names text-gradient">${weddingData.couple.brideName} & ${weddingData.couple.groomName}</h1>
          <p class="envelope-date">${weddingData.date.dayOfWeek}, ${weddingData.date.fullDate}</p>

          <!-- Interactive Royal Gold Wax Seal Button -->
          <div class="wax-seal-container" id="wax-seal-btn">
            <div class="wax-seal">
              <span class="wax-monogram">N & J</span>
            </div>
            <span class="wax-seal-hint">Tap to Open</span>
          </div>

          <div style="margin-top: 24px;">
            <button id="open-invitation-btn" class="btn-luxury" style="width: 100%; max-width: 280px;">
              <span>Open Invitation</span>
              <svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach event listeners for opening the envelope
  setTimeout(() => {
    const loader = overlay.querySelector('#envelope-loader') as HTMLElement;
    const card = overlay.querySelector('#envelope-card') as HTMLElement;

    // Simulate luxury loader progress
    if (loader && card) {
      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
          card.style.display = 'block';
          card.classList.add('reveal-fade-up', 'is-visible');
        }, 400);
      }, 1200);
    }

    const triggerOpen = () => {
      const flap = overlay.querySelector('#envelope-flap') as HTMLElement;
      const waxSeal = overlay.querySelector('#wax-seal-btn') as HTMLElement;

      if (waxSeal) waxSeal.classList.add('seal-open-anim');
      if (flap) flap.classList.add('flap-open-anim');

      overlay.classList.add('overlay-exit-anim');

      setTimeout(() => {
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        setTimeout(() => {
          overlay.remove();
          onOpen();
        }, 700);
      }, 600);
    };

    const waxBtn = overlay.querySelector('#wax-seal-btn');
    const openBtn = overlay.querySelector('#open-invitation-btn');

    if (waxBtn) waxBtn.addEventListener('click', triggerOpen);
    if (openBtn) openBtn.addEventListener('click', triggerOpen);
  }, 50);

  return overlay;
}
