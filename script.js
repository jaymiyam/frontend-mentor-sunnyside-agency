const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
const header = document.querySelector('.header');

navToggle.addEventListener('click', () => {
  primaryNav.toggleAttribute('data-visible');
  primaryNav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', 'true')
    : navToggle.setAttribute('aria-expanded', 'false');
});

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 500) {
    header.style.backgroundColor = 'var(--color-light-cyan)';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});
