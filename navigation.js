(() => {
  'use strict';
  const views = {
    home: '/index.html', about: '/about.html', research: '/research.html',
    projects: '/projects.html', writeups: '/write-ups.html', cheatsheets: '/cheat-sheets.html'
  };
  const stateKey = 'portfolio.menu';
  const isShell = location.pathname === '/' || location.pathname === '/index.html';
  let current = document.body.dataset.sectionPage || 'about';
  let requestId = 0;
  let observer;
  let updateContactState = null;
  let contactFramePending = false;
  addEventListener('scroll', () => {
    if (contactFramePending) return;
    contactFramePending = true;
    requestAnimationFrame(() => {
      contactFramePending = false;
      updateContactState?.();
    });
  }, { passive: true });
  const cached = new Map();
  const storage = {
    get() { try { return sessionStorage.getItem(stateKey); } catch { return null; } },
    set(value) { try { sessionStorage.setItem(stateKey, value); } catch {} }
  };
  function activeSection(section) {
    if (section === 'about') section = 'home';
    document.querySelectorAll('nav [data-section]').forEach(link => {
      const selected = link.dataset.section === section;
      link.classList.toggle('active', selected);
      if (selected) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }
  function updateResearchCount() {
    const label = document.querySelector('[data-research-count]');
    if (!label) return;
    const count = document.querySelectorAll('main .project-list .research-card').length;
    label.textContent = `${count} ${count === 1 ? 'result' : 'results'}`;
    updateResearchPagination();
  }
  function updateResearchPagination() {
    const main = document.querySelector('main');
    const pagination = main?.querySelector('[data-research-pagination]');
    if (!pagination) return;
    const cards = [...main.querySelectorAll('.project-list .research-card')];
    const totalPages = Math.max(1, Math.ceil(cards.length / 10));
    const page = Math.max(1, Math.min(totalPages, Number(main.dataset.researchPage) || 1));
    main.dataset.researchPage = String(page);
    cards.forEach((card, index) => { card.hidden = index < (page - 1) * 10 || index >= page * 10; });
    pagination.querySelectorAll('[data-research-page]').forEach(button => {
      if (Number(button.dataset.researchPage) === page) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    pagination.querySelector('[data-research-step="-1"]').disabled = page === 1;
    pagination.querySelector('[data-research-step="1"]').disabled = page === totalPages;
    pagination.querySelector('[data-research-range]').textContent = `${(page - 1) * 10 + 1}–${Math.min(page * 10, cards.length)} of ${cards.length}`;
  }
  function bindContact() {
    bindLatestContents();
    observer?.disconnect();
    updateContactState = null;
    const contact = document.getElementById('contact');
    if (!contact) return;
    updateContactState = () => {
      if (!contact.isConnected) return;
      const bounds = contact.getBoundingClientRect();
      const headerBottom = document.querySelector('.site-header')?.getBoundingClientRect().bottom || 0;
      const atBottom = scrollY > 0 && innerHeight + scrollY >= document.documentElement.scrollHeight - 3;
      const inContact = bounds.bottom > headerBottom &&
        (bounds.top <= headerBottom + 100 || (atBottom && bounds.top < innerHeight));
      activeSection(inContact ? 'contact' : current);
    };
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(updateContactState, { threshold: [0, 0.35, 1] });
      observer.observe(contact);
    }
    updateContactState();
  }

  function bindLatestContents() {
    const list = document.querySelector('[data-latest-list]');
    if (!list) return;
    [...list.children].forEach((item, index) => { item.hidden = index >= 6; });
  }
  function updateWriteupFilters() {
    const main = document.querySelector('main');
    if (!main?.querySelector('[data-writeup-filters]')) return;
    const platform = main.dataset.writeupPlatform || 'all';
    const type = main.dataset.writeupType || 'all';
    main.querySelector('[data-writeup-types]').hidden = platform !== 'htb';
    main.querySelectorAll('[data-writeup-platform]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.writeupPlatform === platform));
    });
    main.querySelectorAll('[data-writeup-type]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.writeupType === type));
    });
    let count = 0;
    main.querySelectorAll('.writeup-card').forEach(card => {
      const matches = (platform === 'all' || card.dataset.platform === platform)
        && (platform !== 'htb' || type === 'all' || card.dataset.type === type);
      card.hidden = !matches;
      if (matches) count++;
    });
    main.querySelector('[data-writeup-count]').textContent = `${count} ${count === 1 ? 'result' : 'results'}`;
    main.querySelector('[data-writeup-empty]').hidden = count > 0;
  }
  function clearError() { document.getElementById('navigation-error')?.remove(); }
  function showError(section) {
    clearError();
    const message = document.createElement('div');
    message.id = 'navigation-error';
    message.className = 'navigation-error';
    message.setAttribute('role', 'alert');
    message.append('This section could not load. ');
    const retry = document.createElement('button');
    retry.type = 'button';
    retry.textContent = 'Try again';
    retry.addEventListener('click', () => navigate(section));
    message.append(retry);
    document.querySelector('main').prepend(message);
  }
  async function navigate(section, { initial = false } = {}) {
    const contactRequested = section === 'contact';
    const target = contactRequested ? 'about' : section;
    if (!views[target]) return;
    if (!isShell) {
      storage.set(section);
      location.assign('/');
      return;
    }
    const mine = ++requestId;
    const oldMain = document.querySelector('main');
    clearError();
    oldMain.setAttribute('aria-busy', 'true');
    try {
      if (target !== current) {
        let page = cached.get(target);
        if (!page) {
          const response = await fetch(views[target]);
          if (!response.ok) throw new Error('Section unavailable');
          page = new DOMParser().parseFromString(await response.text(), 'text/html');
          if (!page.querySelector('main')) throw new Error('Section content missing');
          cached.set(target, page);
        }
        if (mine !== requestId) return;
        observer?.disconnect();
        const nextMain = document.importNode(page.querySelector('main'), true);
        nextMain.removeAttribute('aria-busy');
        oldMain.replaceWith(nextMain);
        document.body.className = page.body.className;
        current = target;
        document.body.dataset.sectionPage = target;
        document.title = target === 'home' ? 'Mehmet Sacit Çınar' : page.title;
        const description = page.querySelector('meta[name="description"]');
        if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description.content);
      }
      if (mine !== requestId) return;
      storage.set(section);
      activeSection(section);
      document.title = {home:'Mehmet Sacit Çınar', about:'Mehmet Sacit Çınar', contact:'Contact', research:'Research', projects:'Projects', writeups:'Writeups', cheatsheets:'Codex'}[section] || document.title;
      bindContact();
      updateResearchCount();
      updateWriteupFilters();
      const main = document.querySelector('main');
      main.removeAttribute('aria-busy');
      if (!initial) {
        main.setAttribute('tabindex', '-1');
        main.focus({ preventScroll: true });
      }
      if (contactRequested) {
        document.getElementById('contact')?.scrollIntoView({
          behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
      } else if (!initial) window.scrollTo({ top: 0, behavior: 'instant' });
    } catch {
      if (mine === requestId) {
        document.querySelector('main').removeAttribute('aria-busy');
        showError(section);
      }
    }
  }
  document.addEventListener('click', event => {
    const researchPage = event.target.closest('button[data-research-page], button[data-research-step]');
    if (researchPage) {
      const main = researchPage.closest('main');
      main.dataset.researchPage = researchPage.dataset.researchPage || String((Number(main.dataset.researchPage) || 1) + Number(researchPage.dataset.researchStep));
      updateResearchPagination();
      main.querySelector('.projects-intro')?.scrollIntoView({ behavior: 'auto', block: 'start' });
      return;
    }
    const filter = event.target.closest('button[data-writeup-platform], button[data-writeup-type]');
    if (filter) {
      const main = filter.closest('main');
      if (filter.dataset.writeupPlatform) {
        main.dataset.writeupPlatform = filter.dataset.writeupPlatform;
        main.dataset.writeupType = 'all';
      } else main.dataset.writeupType = filter.dataset.writeupType;
      updateWriteupFilters();
      return;
    }
    const link = event.target.closest('a[data-section]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(link.dataset.section);
  });
  activeSection(current);
  bindContact();
  updateResearchCount();
  updateWriteupFilters();
  if (isShell) {
    const saved = storage.get();
    const start = location.hash === '#contact' ? 'contact' : saved;
    if (start && (views[start] || start === 'contact')) navigate(start, { initial: true });
  }
})();
