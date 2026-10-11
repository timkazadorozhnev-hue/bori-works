/**
 * Projects — English version.
 * Keys match `slug` in src/data/projects.js; covers, stills, year and category
 * are taken from the Russian file. Any field missing here falls back to Russian.
 */
export const projectCategoriesEn = {
  all: 'All',
  film: 'Film',
  series: 'Series',
  commercial: 'Commercials',
  music: 'Music videos',
  documentary: 'Documentary',
};

export const projectsEn = {
  'grazhdane-kryshi': {
    title: 'Citizens of the Roof',
    type: 'Feature film',
    genre: 'Drama',
    duration: '88 min',
    short: 'A homeless young man and an autistic boy search for their place in the world. A moving drama about support and love.',
    description: [
      'A homeless young man and an autistic boy search for their place in the world. A moving drama about support and love.',
    ],
    credits: [
      { role: 'Director', name: 'Gulshat Smagulova' },
      { role: 'Producer', name: 'Aliya Sharipbayeva' },
    ],
    facts: [
      { label: 'Country', value: 'Kazakhstan' },
      { label: 'Kazakh title', value: 'Шатырдағы екеу' },
    ],
  },
};
