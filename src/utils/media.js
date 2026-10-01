/**
 * Помощник для изображений-заглушек с Unsplash.
 *
 * Чтобы заменить изображение на своё, в файлах данных просто укажите
 * обычный путь вместо вызова unsplash():
 *   cover: '/images/projects/my-film.jpg'      // файл из папки public/images
 *   cover: 'https://cdn.example.com/still.jpg' // или любой внешний URL
 */
export const unsplash = (id, width = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;

const UNSPLASH_RE = /^https:\/\/images\.unsplash\.com\//;

/** Строит srcset для Unsplash-URL; для остальных URL возвращает undefined. */
export function buildSrcSet(src, widths = [480, 800, 1200, 1600, 2200]) {
  if (!src || !UNSPLASH_RE.test(src)) return undefined;
  return widths
    .map((w) => `${src.replace(/([?&])w=\d+/, `$1w=${w}`)} ${w}w`)
    .join(', ');
}
