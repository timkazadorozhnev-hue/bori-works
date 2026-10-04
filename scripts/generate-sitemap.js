/**
 * Генерирует public/sitemap.xml из данных сайта (проекты, новости).
 * Запускается автоматически перед `npm run build` (скрипт prebuild).
 * Домен берётся из src/config/site.js → site.url.
 * Каждая страница выводится на всех языках сайта (/..., /en/...) со ссылками hreflang.
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { site } from '../src/config/site.js';
import { projects } from '../src/data/projects.js';
import { news } from '../src/data/news.js';
import { DEFAULT_LANG, LANGUAGES, localizePath } from '../src/i18n/config.js';

const today = new Date().toISOString().slice(0, 10);

const pages = [
  { loc: '/', priority: '1.0', lastmod: today },
  ...projects.map((p) => ({ loc: `/projects/${p.slug}`, priority: '0.8', lastmod: today })),
  ...news.map((n) => ({ loc: `/news/${n.slug}`, priority: '0.6', lastmod: n.date })),
  { loc: '/privacy', priority: '0.2', lastmod: today },
];

const alternates = (loc) =>
  [...LANGUAGES.map((l) => [l, l]), ['x-default', DEFAULT_LANG]]
    .map(([hreflang, l]) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${site.url}${localizePath(loc, l)}"/>`)
    .join('\n');

const urls = LANGUAGES.flatMap((lang) =>
  pages.map((p) => ({ ...p, href: `${site.url}${localizePath(p.loc, lang)}` })),
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.href}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <priority>${u.priority}</priority>\n${alternates(u.loc)}\n  </url>`,
  )
  .join('\n')}
</urlset>
`;

const out = fileURLToPath(new URL('../public/sitemap.xml', import.meta.url));
writeFileSync(out, xml);
console.log(`sitemap.xml: ${urls.length} URL`);
