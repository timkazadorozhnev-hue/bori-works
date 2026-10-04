import { Fragment } from 'react';
import { site } from '../config/site';
import { useLang } from '../i18n/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { RevealLines } from '../components/ui/RevealText';
import './TextPage.css';

/**
 * Политика конфиденциальности — демонстрационный текст (src/i18n/locales/*.js → privacy).
 * Перед публикацией согласуйте финальную редакцию с юристом.
 */
export default function PrivacyPage() {
  const { t } = useLang();
  const p = t.privacy;

  usePageMeta({ title: p.title, description: p.description });

  return (
    <article className="tpage">
      <div className="container tpage__narrow">
        <p className="eyebrow">{p.eyebrow}</p>
        <RevealLines as="h1" className="h-xl tpage__title" lines={p.heading} />

        <div className="tpage__content">
          <p className="tpage__lead">{p.lead}</p>

          {p.sections.map((s) => (
            <Fragment key={s.title}>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </Fragment>
          ))}

          <h2>{p.rights.title}</h2>
          <p>
            {p.rights.text} <a href={`mailto:${site.contacts.email}`}>{site.contacts.email}</a>.
          </p>

          <h2>{p.contacts.title}</h2>
          <p>
            {site.name}, {t.contacts.address}. {p.contacts.phone}:{' '}
            <a href={`tel:${site.contacts.phoneHref}`}>{site.contacts.phone}</a>.
          </p>
        </div>
      </div>
    </article>
  );
}
