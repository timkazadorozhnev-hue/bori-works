import { site } from '../../config/site';
import { useLang } from '../../i18n/LanguageContext';
import Reveal from '../ui/Reveal';
import { RevealLines } from '../ui/RevealText';
import ContactForm from '../contact/ContactForm';
import { ArrowUpRightIcon } from '../ui/Icons';
import './Contact.css';

export default function Contact() {
  const { email, phones, mapUrl } = site.contacts;
  const { t } = useLang();
  const { address } = t.contacts;

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <Reveal className="contact__meta" variant="fade">
          <span className="shead__index">05</span>
          <span className="eyebrow">{t.contact.eyebrow}</span>
        </Reveal>

        <RevealLines
          as="h2"
          className="contact__title"
          lines={[t.contact.title[0], <span className="serif" key="s">{t.contact.title[1]}</span>]}
        />

        <div className="contact__grid">
          <div className="contact__info">
            <Reveal className="contact__block">
              <span className="contact__label">{t.contact.newProjects}</span>
              <a href={`mailto:${email}`} className="contact__big link-line">
                {email}
              </a>
            </Reveal>
            <Reveal className="contact__block" delay={0.05}>
              <span className="contact__label">{t.contact.phone}</span>
              <ul className="contact__phones">
                {phones.map((p) => (
                  <li key={p.region}>
                    <span className="contact__region">{p.region}</span>
                    <a href={`tel:${p.href}`} className="contact__big link-line">
                      {p.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="contact__block" delay={0.1}>
              <span className="contact__label">{t.contact.address}</span>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="contact__addr">
                {address} <ArrowUpRightIcon />
              </a>
            </Reveal>
            <Reveal className="contact__block" delay={0.15}>
              <span className="contact__label">{t.contact.socials}</span>
              <ul className="contact__socials">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="contact__form" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
