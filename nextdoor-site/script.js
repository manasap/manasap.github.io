const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.getElementById('year');

yearEl.textContent = new Date().getFullYear();

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    productCards.forEach((card) => {
      const category = card.dataset.category;
      const show = filter === 'all' || category === filter;
      card.classList.toggle('hidden', !show);
    });
  });
});

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});
