// ================= LANGUAGE SWITCHING =================
function switchLang(lang) {
  const body = document.body;
  const buttons = document.querySelectorAll('.lang-toggle button');

  if (lang === 'fr') {
    body.classList.add('french');
    buttons[0].classList.add('active');
    buttons[1].classList.remove('active');
    document.documentElement.lang = 'fr';
  } else {
    body.classList.remove('french');
    buttons[1].classList.add('active');
    buttons[0].classList.remove('active');
    document.documentElement.lang = 'en';
  }
}

// ================= FAQ TOGGLE =================
function toggleFAQ(element) {
  const wasActive = element.classList.contains('active');

  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
  });

  if (!wasActive) {
    element.classList.add('active');
  }
}

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ================= REVEAL ON SCROLL =================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.content-section, .timeline').forEach(el => observer.observe(el));

  // Hero animation
  setTimeout(() => {
    const heroContainer = document.querySelector('.hero .container');
    if (heroContainer) {
      heroContainer.style.opacity = '1';
      heroContainer.style.transform = 'translateY(0)';
    }
  }, 300);

  // Parallax effect
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-background-video');
    const heroOverlay = document.querySelector('.hero-overlay');

    if (hero && scrolled < 800) {
      hero.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.5}px))`;
      if (heroOverlay) {
        heroOverlay.style.opacity = Math.min(0.6 + (scrolled / 1000), 0.85);
      }
    }
  });
});
