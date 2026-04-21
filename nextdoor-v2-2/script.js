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
