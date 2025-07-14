import { useEffect } from 'react';
import { initFadeIn } from '../assets/js/animations';

export default function useFadeIn() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    initFadeIn();
  }, []);
}
