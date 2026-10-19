// Keep the navigation aligned with the visible About section.
const contactSection = document.getElementById('contact');
const aboutLink = document.querySelector('nav a[href="index.html#about"]');
const contactLink = document.querySelector('nav a[href="index.html#contact"]');
if (contactSection && aboutLink && contactLink && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(([entry]) => {
    const isContact = entry.isIntersecting;
    aboutLink.classList.toggle('active', !isContact);
    contactLink.classList.toggle('active', isContact);
    aboutLink.removeAttribute('aria-current');
    contactLink.removeAttribute('aria-current');
    (isContact ? contactLink : aboutLink).setAttribute('aria-current', 'location');
  }, { threshold: 0.35 });
  observer.observe(contactSection);
}
// On About, preserve the current page and use the native smooth anchor scroll.
for (const link of [aboutLink, contactLink]) {
  if (link) link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const hash = new URL(link.href).hash;
    if (!document.querySelector(hash)) return;
    event.preventDefault();
    if (window.location.hash === hash) document.querySelector(hash).scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    else window.location.hash = hash;
  });
}
