export function initCookieBanner() {
  if (typeof window === 'undefined' || !window.localStorage) return;
  const banner = document.getElementById('cookie-banner');
  const btn = document.getElementById('cookie-accept');
  if (!banner || !btn) return;
  if (localStorage.getItem('cookiesAccepted')) {
    banner.style.display = 'none';
    return;
  }
  btn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    banner.style.display = 'none';
  });
}
