import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins safely
gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;

/**
 * Initialize Lenis Smooth Scrolling engine optimized for mobile touch responsiveness
 */
export function initSmoothScroll(): Lenis {
  const isMobile = window.innerWidth < 768;

  lenisInstance = new Lenis({
    duration: isMobile ? 1.0 : 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1.1,
    touchMultiplier: 1.8,
  });

  lenisInstance.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenisInstance?.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

/**
 * Initialize Canvas Animation for beautiful floating floral petals and golden light particles.
 * Petals sway gently with realistic physics, 3D rotation oscillation, and soft breeze drift.
 */
export function initCanvasBotanicals(): void {
  const canvas = document.getElementById('leaf-canvas') as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  interface FloatingPetal {
    x: number;
    y: number;
    size: number;
    speedY: number;
    speedX: number;
    oscillationSpeed: number;
    oscillationDistance: number;
    oscillationAngle: number;
    rotation: number;
    rotationSpeed: number;
    scaleX: number;
    scaleSpeed: number;
    opacity: number;
    color: string;
    petalType: 'petal' | 'leaf' | 'sparkle';
  }

  const petals: FloatingPetal[] = [];
  const count = window.innerWidth < 768 ? 28 : 50;

  // Romantic luxury color palette for petals: Golden cream, soft blush, and botanical green
  const petalColors = [
    '#f6e6b4', // Royal Gold Light
    '#d4af37', // Metallic Gold
    '#ecf39e', // Light Botanical Cream
    '#ffe4e1', // Soft Rose Petal Blush
    '#e6ca65', // Warm Gold Accent
  ];

  for (let i = 0; i < count; i++) {
    const isSparkle = Math.random() < 0.25;
    const isLeaf = !isSparkle && Math.random() < 0.25;

    petals.push({
      x: Math.random() * width,
      y: Math.random() * height, // Spawn immediately across visible height
      size: isSparkle ? Math.random() * 5 + 3 : Math.random() * 12 + 9,
      speedY: Math.random() * 0.9 + 0.4,
      speedX: (Math.random() - 0.5) * 0.4,
      oscillationSpeed: Math.random() * 0.025 + 0.015,
      oscillationDistance: Math.random() * 2.0 + 0.8,
      oscillationAngle: Math.random() * Math.PI * 2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.035,
      scaleX: Math.random() * 0.8 + 0.3,
      scaleSpeed: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.45 + 0.45,
      color: isSparkle ? '#ffffff' : petalColors[Math.floor(Math.random() * petalColors.length)],
      petalType: isSparkle ? 'sparkle' : isLeaf ? 'leaf' : 'petal',
    });
  }

  /**
   * Draw a realistic curved organic flower petal using Bézier curves
   */
  function drawFlowerPetal(context: CanvasRenderingContext2D, size: number) {
    context.beginPath();
    context.moveTo(0, 0);
    // Left petal curve
    context.bezierCurveTo(-size * 0.6, -size * 0.4, -size * 0.8, -size * 1.2, 0, -size * 1.5);
    // Right petal curve
    context.bezierCurveTo(size * 0.8, -size * 1.2, size * 0.6, -size * 0.4, 0, 0);
    context.fill();

    // Inner petal depth contour line
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -size * 1.1);
    context.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    context.lineWidth = 1;
    context.stroke();
  }

  /**
   * Draw a delicate botanical leaf
   */
  function drawLeaf(context: CanvasRenderingContext2D, size: number) {
    context.beginPath();
    context.moveTo(0, -size);
    context.bezierCurveTo(size * 0.5, -size * 0.5, size * 0.5, size * 0.5, 0, size);
    context.bezierCurveTo(-size * 0.5, size * 0.5, -size * 0.5, -size * 0.5, 0, -size);
    context.fill();
  }

  /**
   * Draw a glowing golden sparkle particle
   */
  function drawSparkle(context: CanvasRenderingContext2D, size: number) {
    context.beginPath();
    context.arc(0, 0, size, 0, Math.PI * 2);
    context.fillStyle = '#ffd700';
    context.shadowColor = '#f6e6b4';
    context.shadowBlur = 8;
    context.fill();
    context.shadowBlur = 0;
  }

  function render() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];

      // Physics motion updates
      p.oscillationAngle += p.oscillationSpeed;
      p.x += Math.sin(p.oscillationAngle) * p.oscillationDistance + p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;
      p.scaleX += p.scaleSpeed;

      // Flip 3D scale direction
      if (p.scaleX > 1 || p.scaleX < 0.2) {
        p.scaleSpeed = -p.scaleSpeed;
      }

      // Reset when falling past screen bottom
      if (p.y > height + 30) {
        p.y = -30;
        p.x = Math.random() * width;
        p.oscillationAngle = Math.random() * Math.PI * 2;
      }
      if (p.x > width + 30) p.x = -30;
      if (p.x < -30) p.x = width + 30;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.scale(p.scaleX, 1);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;

      if (p.petalType === 'petal') {
        drawFlowerPetal(ctx, p.size);
      } else if (p.petalType === 'leaf') {
        drawLeaf(ctx, p.size);
      } else {
        drawSparkle(ctx, p.size);
      }

    }

    requestAnimationFrame(render);
  }

  render();
}

/**
 * Initialize Scroll Reveal and Parallax animations with GSAP ScrollTrigger
 */
export function initScrollAnimations(): void {
  // Fast IntersectionObserver reveal elements on scroll
  const revealElements = document.querySelectorAll('.reveal-fade-up');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  revealElements.forEach((el) => observer.observe(el));

  // Image Mask Reveals
  const imgMasks = document.querySelectorAll('.img-mask-reveal');
  const imgObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  imgMasks.forEach((el) => imgObserver.observe(el));

  // Lightweight Parallax Effect for Gallery & Cards (Disabled on tiny screens to optimize FPS)
  if (window.innerWidth >= 768) {
    const parallaxTargets = document.querySelectorAll('.parallax-target');
    parallaxTargets.forEach((target) => {
      const speed = parseFloat(target.getAttribute('data-speed') || '0.1');

      gsap.to(target, {
        y: () => (1 - speed) * 60,
        ease: 'none',
        scrollTrigger: {
          trigger: target,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }
}

/**
 * Initialize Background MP3 Music Player (/audio/bg-music.mp3)
 */
export function initAudioPlayer(): void {
  const btn = document.createElement('button');
  btn.className = 'audio-control-btn';
  btn.setAttribute('aria-label', 'Toggle background music');
  
  const playSvg = `<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>`;
  const pauseSvg = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
  
  btn.innerHTML = playSvg;
  document.body.appendChild(btn);

  // Load the MP3 audio file from /audio/bg-music.mp3
  const audio = new Audio('/audio/bg-music.mp3');
  audio.loop = true;
  audio.volume = 0.55;

  let isPlaying = false;

  const togglePlay = () => {
    if (!isPlaying) {
      audio.play().then(() => {
        isPlaying = true;
        btn.innerHTML = pauseSvg;
        btn.classList.add('pulse-glow');
        btn.style.borderColor = '#f6e6b4';
        btn.style.boxShadow = '0 0 20px rgba(246, 230, 180, 0.8), 0 0 35px rgba(212, 175, 55, 0.4)';
      }).catch((err) => {
        console.warn('Audio playback pending user gesture:', err);
      });
    } else {
      audio.pause();
      isPlaying = false;
      btn.innerHTML = playSvg;
      btn.classList.remove('pulse-glow');
      btn.style.borderColor = '#d4af37';
      btn.style.boxShadow = 'none';
    }
  };

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePlay();
  });

  // Autoplay on first touch/click interaction to respect browser autoplay policies
  const handleFirstInteraction = () => {
    if (!isPlaying) {
      togglePlay();
    }
    window.removeEventListener('click', handleFirstInteraction);
    window.removeEventListener('touchstart', handleFirstInteraction);
  };

  window.addEventListener('click', handleFirstInteraction, { once: true });
  window.addEventListener('touchstart', handleFirstInteraction, { once: true });
}
