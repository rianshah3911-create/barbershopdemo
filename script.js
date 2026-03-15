const reveals = document.querySelectorAll('.reveal');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const heroImage = document.querySelector('.hero-image');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 0.05, 0.35)}s`;
  observer.observe(el);
});

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

window.addEventListener('scroll', () => {
  const offset = window.scrollY * 0.18;
  if (heroImage) heroImage.style.transform = `scale(1.2) translateY(${offset}px)`;
});
