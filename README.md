# BORI WORKS — сайт кинокомпании

React + Vite. Без UI-библиотек и тяжёлых зависимостей: анимации на CSS и IntersectionObserver.

## Запуск

```bash
npm install       # установка зависимостей
npm run dev       # режим разработки → http://localhost:5173
npm run build     # production-сборка в папку dist/ (перед ней генерируется sitemap.xml)
npm run preview   # просмотр production-сборки → http://localhost:4173
```

## Где менять контент

| Что | Файл |
| --- | --- |
| Название, логотип, контакты, соцсети, фон hero, showreel, домен | `src/config/site.js` |
| Пункты меню | `src/config/site.js` → `navigation` |
| Тексты «О компании», цифры, география | `src/data/about.js` |
| Проекты (+ категории фильтра) | `src/data/projects.js` |
| Услуги | `src/data/services.js` |
| Команда | `src/data/team.js` |
| Новости | `src/data/news.js` |
| Цвета, шрифты, отступы | `src/styles/global.css` (`:root`) |
| SEO по умолчанию, OG-теги, JSON-LD | `index.html` |

### Изображения и видео
Сейчас используются заглушки с Unsplash через `unsplash('id')`. Чтобы поставить свои,
положите файлы в `public/images/...` и укажите путь строкой: `cover: '/images/projects/film.jpg'`.

- **Hero-видео**: `site.hero.video = '/video/hero.mp4'` (poster останется как превью).
- **Showreel**: `site.showreel.video` (mp4) или `site.showreel.embed` (YouTube embed-URL).
- **Трейлер проекта**: добавьте проекту поле `video: '/video/trailer.mp4'` — на странице появится кнопка.

### Логотип
`site.logo.image = '/logo.svg'` — вместо текстового логотипа будет выведено изображение.

### Форма обратной связи
Скопируйте `.env.example` в `.env` и задайте `VITE_CONTACT_ENDPOINT` (Formspree, свой API и т.п.) —
форма отправит JSON `{ name, email, company, message }` POST-запросом. Без переменной форма работает в демо-режиме.
Логика — в `src/services/contactService.js`.

## Публикация на своём домене
1. Замените `https://boriworks.com` на ваш домен в `src/config/site.js`, `index.html` и `public/robots.txt`.
2. `npm run build` и загрузите содержимое `dist/` на хостинг.
3. SPA-маршруты (`/projects/...`) уже настроены для Netlify (`public/_redirects`), Vercel (`vercel.json`)
   и Apache (`public/.htaccess`). Для nginx: `try_files $uri /index.html;`.

## Структура
```
src/
  config/site.js          глобальные настройки
  data/                   контент (проекты, команда, новости, услуги, о компании)
  components/
    layout/               Header, Footer, Logo, Layout, ScrollManager
    sections/             Hero, About, Projects, Services, Showreel, Team, News, Contact
    projects/             ProjectCard
    contact/              ContactForm
    ui/                   Reveal, RevealText, Img, VideoModal, SectionHead, Counter, Icons
  pages/                  HomePage, ProjectPage, NewsArticlePage, PrivacyPage, NotFoundPage
  hooks/                  useInView, usePageMeta, useLockBody
  services/               contactService (отправка формы)
  utils/                  media (Unsplash/srcset), format (даты)
  styles/global.css       дизайн-токены и общие стили
scripts/generate-sitemap.js
```
