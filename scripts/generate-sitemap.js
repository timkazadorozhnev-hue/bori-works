/**
 * Генерирует public/sitemap.xml из данных сайта (проекты, новости).
 * Запускается автоматически перед `npm run build` (скрипт prebuild).
 * Домен берётся из src/config/site.js → site.url.
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { site } from '../src/config/site.js';
import { projects } from '../src/data/projects.js';
import { news } from '../src/data/news.js';

const today = new Date().toISOString().slice(0, 10);

const urls = [
  { loc: '/', priority: '1.0', lastmod: today },
  ...projects.map((p) => ({ loc: `/projects/${p.slug}`, priority: '0.8', lastmod: today })),
  ...news.map((n) => ({ loc: `/news/${n.slug}`, priority: '0.6', lastmod: n.date })),
  { loc: '/privacy', priority: '0.2', lastmod: today },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url><loc>${site.url}${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`)
  .join('\n')}
</urlset>
`;

const out = fileURLToPath(new URL('../public/sitemap.xml', import.meta.url));
writeFileSync(out, xml);
console.log(`sitemap.xml: ${urls.length} URL`);
