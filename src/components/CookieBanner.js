import { useEffect, useState } from 'react';
import { initCookieBanner } from '../assets/js/banner';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('cookiesAccepted')) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible) {
      initCookieBanner();
    }
  }, [visible]);
  if (!visible) return null;
  return (
    <aside
      id="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-modal="true"
      aria-describedby="cookie-banner-text"
      className="fixed bottom-0 left-0 right-0 bg-blue-100 p-4 flex justify-between items-center"
    >
      <span id="cookie-banner-text" className="text-sm text-gray-700">
        Мы используем cookie. Подробнее в <a href="/privacy-policy">Политике обработки данных</a>.
      </span>
      <button
        id="cookie-accept"
        className="btn min-h-[44px]"
        aria-label="Принять cookie"
      >
        Принять
      </button>
    </aside>
  );
}
