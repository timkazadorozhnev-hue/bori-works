import { unsplash } from '../utils/media.js';

/**
 * Глобальные настройки сайта: название, логотип, контакты, соцсети, медиа.
 * Меняйте значения здесь — компоненты подхватят их автоматически.
 */
export const site = {
  name: 'BORI WORKS',
  // Домен для canonical/OG. Замените на свой перед публикацией.
  url: 'https://boriworks.com',
  tagline: 'Кинокомпания полного цикла',
  description:
    'BORI WORKS — продакшн-компания полного цикла: художественные фильмы, сериалы, рекламные ролики, музыкальные клипы, документальное кино и постпродакшн.',

  /**
   * Логотип: волк, смотрящий на звёзды (public/logo.png — белый знак на прозрачном фоне,
   * вырезан из исходного макета без изменения формы). Если image: null — выводится текстовый вариант.
   */
  logo: {
    text: 'BORI WORKS',
    image: '/logo.png',
    width: 480,
    height: 283,
  },

  contacts: {
    email: 'boriworks@gmail.com',
    phone: '+7 (701) 218-77-88',
    phoneHref: '+77012187788',
    address: 'Москва, Берсеневская наб., 6, стр. 3',
    addressNote: 'Пн–Пт, 10:00–19:00',
    mapUrl: 'https://yandex.ru/maps/?text=Москва%2C%20Берсеневская%20набережная%2C%206с3',
  },

  socials: [
    { label: 'Instagram', short: 'IG', url: 'https://instagram.com/boriworks' },
    { label: 'Vimeo', short: 'VI', url: 'https://vimeo.com/boriworks' },
    { label: 'YouTube', short: 'YT', url: 'https://youtube.com/@boriworks' },
    { label: 'Telegram', short: 'TG', url: 'https://t.me/boriworks' },
  ],

  /**
   * Hero: фон первого экрана.
   * video — ссылка на mp4/webm (например '/video/hero.mp4'). Если пусто — показывается poster.
   */
  hero: {
    video: '',
    // Ночное звёздное небо над горным хребтом
    poster: unsplash('1519681393784-d120267933ba', 2400),
  },

  /**
   * Showreel. Поддерживаются три варианта (используется первый заполненный):
   *   video — прямая ссылка на mp4 (например '/video/showreel.mp4');
   *   embed — ссылка для iframe (YouTube: https://www.youtube.com/embed/ID, Vimeo: https://player.vimeo.com/video/ID).
   * Сейчас подключён короткий демонстрационный ролик с лицензией CC0.
   */
  showreel: {
    title: 'Showreel 2026',
    duration: '02:14',
    poster: unsplash('1492691527719-9d1e07e534b4', 2400),
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    embed: '',
  },
};

/** Пункты навигации. hash — id секции на главной странице. */
export const navigation = [
  { label: 'Главная', hash: 'top' },
  { label: 'О компании', hash: 'about' },
  { label: 'Проекты', hash: 'projects' },
  { label: 'Услуги', hash: 'services' },
  { label: 'Команда', hash: 'team' },
  { label: 'Новости', hash: 'news' },
  { label: 'Контакты', hash: 'contact' },
];
