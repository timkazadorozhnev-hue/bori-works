import { unsplash } from '../utils/media.js';

/**
 * Глобальные настройки сайта: название, логотип, контакты, соцсети, медиа.
 * Меняйте значения здесь — компоненты подхватят их автоматически.
 */
export const site = {
  name: 'BORI WORKS',
  // Домен для canonical/OG. Замените на свой перед публикацией.
  url: 'https://www.boriworks.com',
  tagline: 'Кинокомпания полного цикла',
  // SEO: заголовок главной и описание сайта для поисковых систем (русская версия)
  seoTitle: 'BORI WORKS — профессиональное кинопроизводство',
  description:
    'Объединяем мастеров режиссуры, драматургии и операторского искусства для создания глубоких художественных, документальных и музыкальных кинолент.',

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
    email: 'boriworks.info@gmail.com',
    phone: '+7 (701) 218-77-88',
    phoneHref: '+77012187788',
    // Телефоны по странам: выводятся в разделе «Контакты» и в футере
    phones: [
      { region: 'RU', phone: '+7 (912) 516-86-29', href: '+79125168629' },
      { region: 'KZ', phone: '+7 (701) 218-77-88', href: '+77012187788' },
    ],
    address: 'Алматы',
    mapUrl: 'https://yandex.ru/maps/?text=Алматы',
  },

  socials: [
    { label: 'Instagram', short: 'IG', url: 'https://www.instagram.com/boriworks.world' },
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
};

/** Пункты навигации. hash — id секции на главной странице. */
export const navigation = [
  { label: 'Главная', hash: 'top' },
  { label: 'О компании', hash: 'about' },
  { label: 'Проекты', hash: 'projects' },
  { label: 'Услуги', hash: 'services' },
  { label: 'Команда', hash: 'team' },
  { label: 'Контакты', hash: 'contact' },
];
