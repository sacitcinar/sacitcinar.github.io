(() => {
  'use strict';
  async function sizeReferenceTables() {
    const list = document.querySelector('.cs-category-list');
    if (!list) return;
    if (document.fonts?.ready) await document.fonts.ready;
    const widths = [0, 0];
    list.querySelectorAll('.cs-reference-table tr').forEach(row => {
      [...row.cells].forEach((cell, column) => {
        const range = document.createRange();
        range.selectNodeContents(cell);
        const style = getComputedStyle(cell);
        const width = range.getBoundingClientRect().width +
          parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        widths[column] = Math.max(widths[column], Math.ceil(width));
      });
    });
    // One shared measurement across every category; allow only cell padding and borders.
    (list.closest('.cs-detail-layout') || list).style.setProperty('--cs-command-width', `${widths[0] + 1}px`);
    (list.closest('.cs-detail-layout') || list).style.setProperty('--cs-table-width', `${widths[0] + widths[1] + 3}px`);
  }
  function positionCategoryRail() {
    const layout = document.querySelector('.cs-detail-layout');
    const list = document.querySelector('.cs-category-list');
    const rail = document.querySelector('.cs-toc-rail');
    if (!layout || !list || !rail) return;
    if (matchMedia('(max-width: 1199px)').matches) { rail.style.removeProperty('left'); return; }
    const available = list.getBoundingClientRect().left - layout.getBoundingClientRect().left;
    const railWidth = rail.getBoundingClientRect().width;
    rail.style.left = `${Math.min(0, available - railWidth - 22)}px`;
  }
  sizeReferenceTables().then(positionCategoryRail);
  addEventListener('resize', positionCategoryRail);
  document.addEventListener('portfolio:languagechange', () => sizeReferenceTables().then(positionCategoryRail));
  const toc = document.querySelector('.cs-toc');
  const links = [...document.querySelectorAll('.cs-toc nav a')];
  const targets = links.map(link => document.getElementById(link.hash.slice(1)));
  const narrow = matchMedia('(max-width: 1199px)');
  function setTocMode() { if (toc) toc.open = !narrow.matches; }
  setTocMode();
  narrow.addEventListener('change', setTocMode);
  let scheduled = false;
  let clickedCategory = null;
  function clearClickedCategory() { clickedCategory = null; }
  addEventListener('wheel', clearClickedCategory, {passive: true});
  addEventListener('touchstart', clearClickedCategory, {passive: true});
  addEventListener('pointerdown', clearClickedCategory, {passive: true});
  addEventListener('keydown', event => {
    if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) clearClickedCategory();
  });
  function updateCategory() {
    scheduled = false;
    let active = 0;
    targets.forEach((target, index) => {
      if (target && target.getBoundingClientRect().top <= 150) active = index;
    });
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 3) active = targets.length - 1;
    if (clickedCategory !== null) active = clickedCategory;
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  links.forEach((link, index) => link.addEventListener('click', event => {
    event.preventDefault();
    clickedCategory = index;
    updateCategory();
    if (narrow.matches && toc) toc.open = false;
    targets[index]?.scrollIntoView({block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
  }));
  addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateCategory); }
  }, {passive: true});
  updateCategory();
})();
