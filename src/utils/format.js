const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

/** '2026-09-12' → '12 сентября 2026 г.' без «г.» */
export const formatDate = (iso) =>
  dateFormatter.format(new Date(`${iso}T12:00:00`)).replace(/\s?г\.$/, '');

export const pad = (n) => String(n).padStart(2, '0');
