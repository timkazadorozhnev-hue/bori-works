import { useEffect } from 'react';

/** Блокирует прокрутку страницы, пока active === true (меню, модальные окна). */
export function useLockBody(active) {
  useEffect(() => {
    if (!active) return undefined;
    document.body.classList.add('is-locked');
    return () => document.body.classList.remove('is-locked');
  }, [active]);
}
