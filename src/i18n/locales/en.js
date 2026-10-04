import { site } from '../../config/site.js';

/**
 * Interface strings — English version.
 * Keep the structure identical to ru.js.
 * Section content (projects, news, team, etc.) lives in src/data/en/.
 */
export default {
  meta: {
    tagline: 'Full-service film production company',
    description:
      'BORI WORKS is a full-service production company: feature films, series, commercials, music videos, documentaries and post-production.',
    ogLocale: 'en_US',
  },

  langSwitch: {
    label: 'Site language',
  },

  layout: {
    skipLink: 'Skip to content',
  },

  nav: {
    top: 'Home',
    about: 'About',
    projects: 'Projects',
    services: 'Services',
    team: 'Team',
    news: 'News',
    contact: 'Contact',
  },

  logo: {
    home: 'home page',
  },

  header: {
    navLabel: 'Main navigation',
    mobileNavLabel: 'Mobile navigation',
    cta: 'Discuss a project',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  footer: {
    about: 'Films, series, commercials and music videos — from first idea to premiere.',
    navLabel: 'Footer navigation',
    nav: 'Navigation',
    socials: 'Social media',
    contacts: 'Contact',
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    up: 'Back to top ↑',
  },

  contacts: {
    address: 'Bersenevskaya Embankment 6, bldg. 3, Moscow',
    addressNote: 'Mon–Fri, 10:00–19:00',
  },

  hero: {
    eyebrow: 'Independent film studio',
    slogan: ['We tell stories', 'that stay with you', 'long after the credits roll.'],
    ctaProjects: 'View projects',
    ctaContact: 'Get in touch',
    categories: ['Film', 'Series', 'Commercials', 'Music videos', 'Documentary'],
    scrollLabel: 'Scroll down',
  },

  about: {
    imageAlt: 'A lone rider on the steppe',
    imageSecondaryAlt: 'A horse in the morning mist',
    approach: 'Our approach',
    geography: 'Where we film',
  },

  projects: {
    eyebrow: 'Projects',
    title: ['Selected', 'work'],
    aside: 'Films, series, advertising campaigns and music videos we have created with directors, brands and artists.',
    filterLabel: 'Filter projects',
  },

  card: {
    view: 'View',
    open: (title, year) => `${title}, ${year} — open project`,
  },

  services: {
    eyebrow: 'Services',
    title: ['What we', 'create'],
    aside: 'Eight disciplines, one team. We can take on an entire project or join at any stage.',
    ctaText: ['Have an idea, a script or a brief?', 'Tell us about it.'],
    cta: 'Discuss a project',
  },

  showreel: {
    watch: (title) => `Watch ${title}`,
    sub: 'highlights from our work',
  },

  team: {
    eyebrow: 'Team',
    title: ['The people who', 'make the films'],
    prev: 'Previous',
    next: 'Next',
    listLabel: 'BORI WORKS team',
  },

  news: {
    eyebrow: 'News',
    title: ['Studio', 'journal'],
    aside: 'Premieres, awards, new projects and life at the studio.',
    read: 'Read',
  },

  contact: {
    eyebrow: 'Contact',
    title: ['Let’s create', 'something together'],
    newProjects: 'New projects',
    phone: 'Phone',
    address: 'Address',
    socials: 'Social media',
  },

  form: {
    name: 'Name *',
    email: 'Email *',
    company: 'Company',
    message: 'Tell us about your project *',
    consent: ['I agree to the ', 'Privacy Policy', ''],
    send: 'Send',
    sending: 'Sending…',
    sentEyebrow: 'Message sent',
    sentText: ['Thank you! We’ll get back to you', 'within one business day.'],
    sendMore: 'Send another message',
    sendError: 'Your message could not be sent. Please try again or email us directly.',
    errors: {
      name: 'Please enter your name',
      email: 'Please check your email address',
      message: 'Please tell us a little more (at least 10 characters)',
      consent: 'Please consent to the processing of your personal data',
    },
  },

  video: {
    title: 'Video',
    soon: 'Coming soon',
    soonText: 'The video will be available here shortly',
    close: 'Close video',
  },

  project: {
    notFound: 'Project not found',
    back: 'All projects',
    trailer: 'Watch trailer',
    year: 'Year',
    format: 'Format',
    genre: 'Genre',
    duration: 'Running time',
    details: 'Details',
    stillsLabel: 'Project stills',
    still: (title, n) => `${title} — still ${n}`,
    credits: 'Credits',
    next: 'Next project',
  },

  article: {
    notFound: 'Article not found',
    back: 'All news',
    more: 'More news',
  },

  notFound: {
    title: 'Page not found',
    eyebrow: 'Error 404 · This scene was cut in the edit',
    text: ['This page doesn’t exist.', 'But we have plenty of other stories.'],
    home: 'Back to home',
  },

  privacy: {
    title: 'Privacy Policy',
    description: `How ${site.name} processes and protects the personal data of website visitors.`,
    eyebrow: 'Legal',
    heading: ['Privacy', 'Policy'],
    lead: 'We treat personal data with care and use it only to respond to your enquiry.',
    sections: [
      {
        title: '1. What data we collect',
        text: 'When you submit the contact form, we receive your name, email address, company name (if provided) and the text of your message. We do not collect special categories of personal data.',
      },
      {
        title: '2. Purposes of processing',
        text: 'The data is used solely to contact you about potential collaboration, to prepare commercial proposals and to respond to your enquiries.',
      },
      {
        title: '3. Storage and protection',
        text: 'We keep data no longer than necessary to fulfil the purposes of processing and take organisational and technical measures to protect it. Data is not shared with third parties, except where required by law.',
      },
      {
        title: '4. Cookies and analytics',
        text: 'The website may use technical cookies and anonymised web analytics to improve its performance. You can disable cookies in your browser settings.',
      },
    ],
    rights: {
      title: '5. Your rights',
      text: 'You can request access to, correction or deletion of your data by writing to us at',
    },
    contacts: {
      title: '6. Contact',
      phone: 'Phone',
    },
  },
};
