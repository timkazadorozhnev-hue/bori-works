import { about } from '../data/about.js';
import { news } from '../data/news.js';
import { projectCategories, projects } from '../data/projects.js';
import { services } from '../data/services.js';
import { team } from '../data/team.js';
import { aboutEn } from '../data/en/about.js';
import { newsEn } from '../data/en/news.js';
import { projectCategoriesEn, projectsEn } from '../data/en/projects.js';
import { servicesEn } from '../data/en/services.js';
import { teamEn } from '../data/en/team.js';

/**
 * Контент разделов на нужном языке.
 * Русские данные — основа (изображения, порядок, slug); переводы накладываются поверх
 * по slug/id. Если для какого-то поля перевода нет, остаётся русский текст.
 */
const ru = { about, news, projectCategories, projects, services, team };

const byIndex = (base, tr = []) => base.map((item, i) => ({ ...item, ...tr[i] }));
const byKey = (base, tr, key) => base.map((item) => ({ ...item, ...tr[item[key]] }));

const en = {
  about: {
    ...about,
    ...aboutEn,
    stats: byIndex(about.stats, aboutEn.stats),
    approach: byIndex(about.approach, aboutEn.approach),
  },
  news: byKey(news, newsEn, 'slug'),
  projectCategories: projectCategories.map((c) => ({ ...c, label: projectCategoriesEn[c.key] ?? c.label })),
  projects: byKey(projects, projectsEn, 'slug'),
  services: byKey(services, servicesEn, 'id'),
  team: byKey(team, teamEn, 'id'),
};

const content = { ru, en };

export const getContent = (lang) => content[lang] ?? ru;
