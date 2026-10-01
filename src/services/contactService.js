/**
 * Отправка формы обратной связи.
 *
 * Чтобы подключить реальную отправку, задайте переменную окружения VITE_CONTACT_ENDPOINT
 * (см. .env.example) — например, адрес Formspree, Netlify Function или собственного API.
 * Данные отправляются POST-запросом в формате JSON.
 *
 * Пока переменная не задана, форма работает в демо-режиме: запрос имитируется.
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

export const isDemoMode = !ENDPOINT;

export async function sendContactForm(data) {
  if (!ENDPOINT) {
    await new Promise((resolve) => setTimeout(resolve, 900));
    if (import.meta.env.DEV) console.info('[contact form, demo]', data);
    return { ok: true, demo: true };
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error(`Ошибка отправки: ${res.status}`);
  return { ok: true };
}
