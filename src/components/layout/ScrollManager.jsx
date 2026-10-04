import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Управляет прокруткой при навигации:
 * - ссылка с hash (/#projects) — прокрутка к секции (плавно на той же странице, мгновенно при переходе со страницы на страницу);
 * - обычный переход — наверх страницы;
 * - переключение языка (state.keepScroll) — позиция прокрутки сохраняется.
 */
export default function ScrollManager() {
  const { pathname, hash, key, state } = useLocation();
  const prevPath = useRef(pathname);

  useEffect(() => {
    const samePage = prevPath.current === pathname;
    prevPath.current = pathname;
    if (state?.keepScroll) return undefined;
    const behavior = samePage ? 'smooth' : 'instant';

    const id = hash.replace('#', '');
    if (!id || id === 'top') {
      window.scrollTo({ top: 0, behavior: id ? behavior : 'instant' });
      return undefined;
    }

    // Ждём кадр, чтобы новая страница успела отрисоваться.
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior });
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash, key]);

  return null;
}
