const yearEl = document.getElementById('year');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const paletteButtons = document.querySelectorAll('.palette-btn');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

menuToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

paletteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const theme = button.dataset.theme;
    document.body.setAttribute('data-theme', theme);
    paletteButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
  });
});


const heroCarousel = document.querySelector('.hero-carousel');

if (heroCarousel) {
  const slides = Array.from(heroCarousel.querySelectorAll('.hero-slide'));
  const dots = Array.from(heroCarousel.querySelectorAll('.hero-dot'));
  const prevBtn = heroCarousel.querySelector('.hero-carousel-btn.prev');
  const nextBtn = heroCarousel.querySelector('.hero-carousel-btn.next');
  let currentIndex = 0;
  let autoRotate;

  const showSlide = (index) => {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === currentIndex));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
  };

  const startAutoRotate = () => {
    clearInterval(autoRotate);
    autoRotate = setInterval(() => showSlide(currentIndex + 1), 3000);
  };

  prevBtn?.addEventListener('click', () => {
    showSlide(currentIndex - 1);
    startAutoRotate();
  });

  nextBtn?.addEventListener('click', () => {
    showSlide(currentIndex + 1);
    startAutoRotate();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      startAutoRotate();
    });
  });

  heroCarousel.addEventListener('mouseenter', () => clearInterval(autoRotate));
  heroCarousel.addEventListener('mouseleave', startAutoRotate);

  showSlide(0);
  startAutoRotate();
}
