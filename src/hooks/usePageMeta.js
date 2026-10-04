import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../config/site';
import { DEFAULT_LANG, LANGUAGES, localizePath } from '../i18n/config';
import { useLang } from '../i18n/LanguageContext';

/** Картинка для превью ссылок, если у страницы нет своей (логотип на тёмном фоне). */
const DEFAULT_OG_IMAGE = `${site.url}/og-image.jpg`;

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** hreflang-ссылки на языковые версии страницы; для несуществующих страниц — удаляются. */
function setAlternates(pathname, enabled) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
  if (!enabled) return;
  const entries = [...LANGUAGES.map((l) => [l, l]), ['x-default', DEFAULT_LANG]];
  entries.forEach(([hreflang, l]) => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = hreflang;
    link.href = `${site.url}${localizePath(pathname, l)}`;
    document.head.appendChild(link);
  });
}

/**
 * Обновляет title, description, canonical, hreflang и OG-теги для текущей страницы.
 * notFound — страница 404: альтернативные языковые версии не указываются.
 */
export function usePageMeta({ title, description, image, notFound = false } = {}) {
  const { pathname } = useLocation();
  const { lang, t } = useLang();

  useEffect(() => {
    const fullTitle = title ? `${title} — ${site.name}` : t.meta.title;
    const desc = description || t.meta.description;
    const url = `${site.url}${pathname}`;

    document.title = fullTitle;
    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image || DEFAULT_OG_IMAGE);
    setMeta('property', 'og:locale', t.meta.ogLocale);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'twitter:image', image || DEFAULT_OG_IMAGE);

    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', url);
    setAlternates(pathname, !notFound);
  }, [title, description, image, pathname, notFound, lang, t]);
}
