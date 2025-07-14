import { useEffect, useState } from 'react';
import Alert from '../ui/Alert';
import Button from '../ui/Button';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('cookiesAccepted')) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;
  return (
    <Alert
      id="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-modal="true"
      aria-describedby="cookie-banner-text"
      className="fixed bottom-0 left-0 right-0 flex justify-between items-center"
    >
      <span id="cookie-banner-text" className="text-sm text-gray-700">
        Мы используем cookie. Подробнее в <a href="/privacy-policy">Политике обработки данных</a>.
      </span>
      <Button
        id="cookie-accept"
        aria-label="Принять cookie"
        onClick={() => {
          localStorage.setItem('cookiesAccepted', 'true');
          setVisible(false);
        }}
      >
        Принять
      </Button>
    </Alert>
  );
}
