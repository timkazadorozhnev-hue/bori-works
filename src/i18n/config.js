/**
 * Языковые настройки сайта.
 * Русская версия живёт по исходным адресам (/, /projects/...),
 * остальные языки — под префиксом (/en, /en/projects/...).
 * Файл без JSX и браузерных зависимостей — его импортирует и скрипт генерации sitemap.
 */
export const LANGUAGES = ['ru', 'en'];
export const DEFAULT_LANG = 'ru';
export const LANG_STORAGE_KEY = 'bori-lang';

const PREFIXED = LANGUAGES.filter((l) => l !== DEFAULT_LANG);
const PREFIX_RE = new RegExp(`^/(${PREFIXED.join('|')})(?=/|$)`);

/** '/en/projects/neon' → 'en', '/projects/neon' → 'ru' */
export const getLangFromPath = (pathname) => pathname.match(PREFIX_RE)?.[1] ?? DEFAULT_LANG;

/** Адрес без языкового префикса: '/en/privacy' → '/privacy', '/en' → '/' */
export const stripLang = (pathname) => pathname.replace(PREFIX_RE, '') || '/';

/** Адрес страницы на нужном языке: localizePath('/privacy', 'en') → '/en/privacy' */
export function localizePath(path, lang) {
  const base = stripLang(path);
  if (lang === DEFAULT_LANG) return base;
  return base === '/' ? `/${lang}` : `/${lang}${base}`;
}

export function readStoredLang() {
  try {
    const value = localStorage.getItem(LANG_STORAGE_KEY);
    return LANGUAGES.includes(value) ? value : null;
  } catch {
    return null;
  }
}

export function storeLang(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    /* хранилище недоступно (приватный режим) — язык просто не запоминается */
  }
}

/**
 * Если посетитель ранее выбрал другой язык и открывает корень сайта,
 * сразу (до первого рендера) переводим его на главную этого языка.
 * Остальные адреса не трогаем: опубликованные ссылки открываются как есть.
 */
export function redirectToStoredLang() {
  if (window.location.pathname !== '/') return;
  const stored = readStoredLang();
  if (!stored || stored === DEFAULT_LANG) return;
  const { search, hash } = window.location;
  window.history.replaceState(null, '', `${localizePath('/', stored)}${search}${hash}`);
}
