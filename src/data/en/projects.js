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
  'severnyi-predel': {
    title: 'Northern Limit',
    type: 'Feature film',
    genre: 'Drama',
    duration: '118 min',
    short:
      'A meteorologist stays behind at a shuttered high-altitude station to wait for his missing brother. Winter leaves him no choice.',
    description: [
      '“Northern Limit” is an intimate drama about two brothers separated by twelve years of silence and one snowbound winter. The film was shot on expedition at an altitude of 2,400 metres, almost entirely in natural light.',
      'We built the production around the weather: the shooting schedule was reworked every evening, and a small crew of 28 lived at the station alongside the characters. That closeness is what gave the film its stillness and honesty.',
    ],
    credits: [
      { role: 'Director', name: 'Boris Arsenyev' },
      { role: 'Producer', name: 'Maria Kovaleva' },
      { role: 'Director of Photography', name: 'Daniil Vetrov' },
      { role: 'Composer', name: 'Ulyana Sorina' },
      { role: 'Production Designer', name: 'Igor Lemekhov' },
    ],
    facts: [
      { label: 'Format', value: 'Digital 4K, 2.39:1' },
      { label: 'Locations', value: 'Kabardino-Balkaria, Mount Elbrus' },
      { label: 'Festivals', value: 'Official Competition, 2025' },
    ],
  },
  'gorod-posle-polunochi': {
    title: 'City After Midnight',
    type: 'Series, 8 episodes',
    genre: 'Neo-noir, thriller',
    duration: '8 × 52 min',
    short:
      'A night-shift taxi driver becomes the only witness to a disappearance the city would rather not notice.',
    description: [
      'An eight-episode neo-noir about a city that lives by night. Each episode is one night and one ride, after which the hero can never return to his old life.',
      'The series was shot over 64 days, 51 of them night shoots. For the car scenes we used LED screens with pre-shot plates, which let us keep the living light of the city while retaining full control over the performances.',
    ],
    credits: [
      { role: 'Showrunner', name: 'Maria Kovaleva' },
      { role: 'Director', name: 'Alina Merts' },
      { role: 'Director of Photography', name: 'Daniil Vetrov' },
      { role: 'Writer', name: 'Eva Lanskaya' },
    ],
    facts: [
      { label: 'Platform', value: 'Streaming service' },
      { label: 'Shooting days', value: '64' },
      { label: 'Technology', value: 'Virtual production, LED volume' },
    ],
  },
  velocity: {
    title: 'Velocity',
    type: 'Advertising campaign',
    genre: 'Automotive brand',
    duration: '60 / 30 / 15 sec',
    short: 'A brand campaign for a new electric sedan: speed, silence and the city at dawn.',
    description: [
      'A launch campaign for a premium electric sedan. The core idea was to show speed without the sound of an engine: the rhythm of the film is set by the breathing of the city and the edit.',
      'The shoot took three days, using a Russian Arm and a high-speed camera. We delivered the hero film, TV and digital cutdowns, and a series of vertical videos for social media.',
    ],
    credits: [
      { role: 'Director', name: 'Alina Merts' },
      { role: 'Producer', name: 'Timur Zalessky' },
      { role: 'Cinematographer', name: 'Daniil Vetrov' },
      { role: 'Colour grading', name: 'BORI Post' },
    ],
    facts: [
      { label: 'Client', value: 'Automotive brand' },
      { label: 'Agency', value: 'Independent creative agency' },
      { label: 'Reach', value: '24 million views' },
    ],
  },
  neon: {
    title: 'Neon',
    type: 'Music video',
    genre: 'Electronic',
    duration: '3:48',
    short:
      'A manifesto on freedom on the dance floor, shot in a single take at a live concert in front of 4,000 people.',
    description: [
      '“Neon” was filmed during a real concert: one camera, one continuous take and 4,000 fans who became both the extras and co-authors of the video.',
      'The challenge was to synchronise the lighting, pyrotechnics and Steadicam moves with the live performance. We held two technical rehearsals and captured the video on the third — and last possible — take.',
    ],
    credits: [
      { role: 'Director', name: 'Lev Ognev' },
      { role: 'Producer', name: 'Timur Zalessky' },
      { role: 'Steadicam', name: 'Artyom Rysev' },
      { role: 'Lighting Designer', name: 'Kira Belova' },
    ],
    facts: [
      { label: 'Artist', value: 'Electronic duo' },
      { label: 'Technique', value: 'Single take, Steadicam' },
      { label: 'Awards', value: 'Music Video of the Year, 2024' },
    ],
  },
  'pesok-i-vremya': {
    title: 'Sand and Time',
    type: 'Documentary film',
    genre: 'Documentary',
    duration: '86 min',
    short:
      'A year in the life of the desert’s last nomadic families — a story about what remains when the roads disappear.',
    description: [
      'A documentary filmed over 14 months across five expeditions. We followed three families who continue to live as nomads, even though the world around them settled long ago.',
      'The film was shot by a minimal crew of four. Our principle was non-intervention: not a single staged scene, not a single line of voice-over.',
    ],
    credits: [
      { role: 'Director', name: 'Eva Lanskaya' },
      { role: 'Producer', name: 'Maria Kovaleva' },
      { role: 'Cinematographer', name: 'Artyom Rysev' },
      { role: 'Sound', name: 'Oleg Shapoval' },
    ],
    facts: [
      { label: 'Shooting period', value: '14 months' },
      { label: 'Countries', value: 'Mongolia, Kazakhstan' },
      { label: 'Festivals', value: 'International documentary competition' },
    ],
  },
  'tishina-lesa': {
    title: 'Silence of the Forest',
    type: 'Short film',
    genre: 'Mystical drama',
    duration: '24 min',
    short:
      'A girl follows her forester father into a misty forest and finds there what grown-ups stopped noticing long ago.',
    description: [
      'A short film that became the studio’s laboratory for a new visual language: fog, practical effects and almost no dialogue.',
      'The film won awards at seven festivals and became the basis for a feature-length project that is now in development.',
    ],
    credits: [
      { role: 'Director', name: 'Boris Arsenyev' },
      { role: 'Writer', name: 'Eva Lanskaya' },
      { role: 'Cinematographer', name: 'Daniil Vetrov' },
      { role: 'Composer', name: 'Ulyana Sorina' },
    ],
    facts: [
      { label: 'Format', value: '35 mm, 1.66:1' },
      { label: 'Awards', value: '7 festival awards' },
      { label: 'Status', value: 'Feature version in development' },
    ],
  },
  orbit: {
    title: 'Orbit',
    type: 'Brand film',
    genre: 'Technology',
    duration: '2:30',
    short:
      'A brand film for a technology company about satellite communications and the people who connect the planet.',
    description: [
      'A two-minute film about how satellite communications are changing everyday life — from a polar station to a school in a mountain village.',
      'The project combined documentary footage shot in four regions with fully CG orbital sequences created by our post-production studio.',
    ],
    credits: [
      { role: 'Director', name: 'Lev Ognev' },
      { role: 'Producer', name: 'Timur Zalessky' },
      { role: 'CG Supervisor', name: 'Kira Belova' },
    ],
    facts: [
      { label: 'Client', value: 'Technology company' },
      { label: 'VFX', value: '42 shots, BORI Post' },
      { label: 'Locations', value: '4 regions' },
    ],
  },
  'finalnyi-ryvok': {
    title: 'Final Sprint',
    type: 'Commercial',
    genre: 'Sport',
    duration: '45 sec',
    short: 'A spot for a sports brand about the one second athletes train for their entire lives.',
    description: [
      'A campaign for a sports brand ahead of a major international event. At its heart is not victory, but the second before the start, in which everything that came before is compressed.',
      'We filmed real athletes in the stadium and on the track, shooting at up to 1,000 frames per second to stretch a single moment into a whole story.',
    ],
    credits: [
      { role: 'Director', name: 'Alina Merts' },
      { role: 'Producer', name: 'Timur Zalessky' },
      { role: 'Cinematographer', name: 'Artyom Rysev' },
    ],
    facts: [
      { label: 'Client', value: 'Sports brand' },
      { label: 'Filming', value: 'High-speed, 1,000 fps' },
      { label: 'Media', value: 'TV, digital, OOH' },
    ],
  },
};
