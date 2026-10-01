import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation, site } from '../../config/site';
import { useLockBody } from '../../hooks/useLockBody';
import Logo from './Logo';
import './Header.css';

/** Отслеживает, какая секция главной сейчас на экране (подсветка пункта меню). */
function useActiveSection(enabled) {
  const [active, setActive] = useState('top');

  useEffect(() => {
    if (!enabled) return undefined;
    const ids = navigation.map((n) => n.hash);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(isHome);

  useLockBody(open);

  // Фон при прокрутке и скрытие шапки при движении вниз.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 40);
        setHidden(y > 400 && y > lastY + 4);
        if (y < lastY - 4 || y <= 400) setHidden(false);
        lastY = y;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Закрываем меню при смене страницы и по Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);
  const cls = ['header', scrolled && 'is-scrolled', hidden && !open && 'is-hidden', open && 'is-open']
    .filter(Boolean)
    .join(' ');

  return (
    <header className={cls}>
      <div className="header__bar container">
        <Logo onClick={close} />

        <nav className="header__nav" aria-label="Основная навигация">
          <ul>
            {navigation.slice(1).map((item) => (
              <li key={item.hash}>
                <Link
                  to={{ pathname: '/', hash: `#${item.hash}` }}
                  className={`header__link ${active === item.hash ? 'is-active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link to={{ pathname: '/', hash: '#contact' }} className="header__cta">
          Обсудить проект
        </Link>

        <button
          className="header__burger"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Мобильное меню */}
      <div id="mobile-menu" className="mmenu" aria-hidden={!open} inert={!open}>
        <nav className="mmenu__nav container" aria-label="Мобильная навигация">
          <ol>
            {navigation.map((item, i) => (
              <li key={item.hash} style={{ '--i': i }}>
                <Link to={{ pathname: '/', hash: `#${item.hash}` }} onClick={close}>
                  <span className="mmenu__num">{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mmenu__foot container">
          <a href={`mailto:${site.contacts.email}`}>{site.contacts.email}</a>
          <a href={`tel:${site.contacts.phoneHref}`}>{site.contacts.phone}</a>
        </div>
      </div>
    </header>
  );
}
