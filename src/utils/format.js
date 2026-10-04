const LOCALES = { ru: 'ru-RU', en: 'en-GB' };
const formatters = {};

/** '2026-09-12' → '12 сентября 2026' (ru, без «г.») или '12 September 2026' (en) */
export function formatDate(iso, lang = 'ru') {
  const locale = LOCALES[lang] ?? LOCALES.ru;
  formatters[locale] ??= new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' });
  return formatters[locale].format(new Date(`${iso}T12:00:00`)).replace(/\s?г\.$/, '');
}

export const pad = (n) => String(n).padStart(2, '0');
