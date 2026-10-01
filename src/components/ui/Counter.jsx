import { useEffect, useRef } from 'react';
import { useInView } from '../../hooks/useInView';

/** Число, которое «досчитывает» до значения при появлении на экране. */
export default function Counter({ value, suffix = '', duration = 1600 }) {
  const [ref, inView] = useInView();
  const numRef = useRef(null);

  useEffect(() => {
    if (!inView || !numRef.current) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      numRef.current.textContent = value;
      return undefined;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      if (numRef.current) numRef.current.textContent = Math.round(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      <span ref={numRef}>0</span>
      {suffix}
    </span>
  );
}
