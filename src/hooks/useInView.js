import { useEffect, useRef, useState } from 'react';

/**
 * Один общий IntersectionObserver на все элементы — дешевле, чем по наблюдателю на элемент.
 * Элемент помечается видимым один раз (анимации появления не повторяются).
 */
const callbacks = new WeakMap();
let observer = null;

function getObserver() {
  if (observer || typeof window === 'undefined') return observer;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const cb = callbacks.get(entry.target);
        if (cb) cb();
        observer.unobserve(entry.target);
        callbacks.delete(entry.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
  );
  return observer;
}

export function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }
    const obs = getObserver();
    callbacks.set(el, () => setInView(true));
    obs.observe(el);
    return () => {
      obs.unobserve(el);
      callbacks.delete(el);
    };
  }, []);

  return [ref, inView];
}
