(() => {
  'use strict';
  async function copyText(value) {
    if (navigator.clipboard?.writeText) {
      try { await navigator.clipboard.writeText(value); return; } catch {}
    }
    const previous = document.activeElement;
    const field = document.createElement('textarea');
    field.value = value;
    field.setAttribute('readonly', '');
    field.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    document.body.append(field);
    try {
      field.select();
      if (!document.execCommand('copy')) throw new Error('Copy unavailable');
    } finally {
      field.remove();
      previous?.focus({ preventScroll: true });
    }
  }
  const status = document.createElement('span');
  status.className = 'copy-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  document.body.append(status);
  document.addEventListener('click', async event => {
    const button = event.target.closest('button.copy-code');
    if (!button || button.disabled) return;
    const code = document.getElementById(button.getAttribute('aria-controls'))?.querySelector('code');
    if (!code) return;
    const label = button.querySelector('[data-copy-label]');
    button.disabled = true;
    try {
      await copyText(code.textContent.replace(/\r?\n$/, ''));
      label.textContent = 'Copied!';
      status.textContent = 'Code copied to clipboard.';
    } catch {
      label.textContent = 'Copy failed';
      status.textContent = 'Copy failed. Select the code to copy it manually.';
    } finally {
      button.disabled = false;
      clearTimeout(button.copyReset);
      button.copyReset = setTimeout(() => {
        label.textContent = 'Copy';
        status.textContent = '';
      }, 2200);
    }
  });
})();
