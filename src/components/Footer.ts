import { weddingData } from '../data';

/**
 * Footer Component
 * Renders Section 5 (Thank You & Contact Assistance) and minimal site footer.
 */
export function createFooterComponent(): HTMLElement {
  const container = document.createElement('div');
  container.id = 'footer-container';

  container.innerHTML = `
    <!-- Section 5: Thank You & Contact -->
    <section class="section-wrapper narrow" id="thank-you">
      <div class="thank-you-card glass-card reveal-fade-up">
        <!-- Botanical Icon Header -->
        <div class="botanical-divider" style="margin-bottom: 24px;">
          <div class="line"></div>
          <svg class="leaf-icon" viewBox="0 0 24 24" style="width: 28px; height: 28px;">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <div class="line"></div>
        </div>

        <h2 class="thank-you-main text-gradient">${weddingData.thankYou.mainHeading}</h2>
        <p class="thank-you-sub">${weddingData.thankYou.subHeading}</p>

        <!-- Contact Assistance Phone Section -->
        <div style="margin-top: 32px;" class="reveal-fade-up delay-2">
          <span style="display: block; font-family: var(--font-body); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.25em; color: var(--soft-olive); margin-bottom: 14px;">
            ${weddingData.contact.assistanceText}
          </span>
          <a href="tel:${weddingData.contact.phoneRaw}" class="contact-box" aria-label="Call for assistance at ${weddingData.contact.phoneDisplay}">
            <!-- Phone SVG Icon -->
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>${weddingData.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Minimal Site Footer -->
    <footer class="site-footer">
      <div class="footer-names">${weddingData.couple.brideName} & ${weddingData.couple.groomName}</div>
      <p class="footer-copyright">
        13 August 2026 • Monaragala, Sri Lanka<br/>
        Made with <span style="color: #ecf39e;">❤</span> for our special day
      </p>
    </footer>
  `;

  return container;
}
