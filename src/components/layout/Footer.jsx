import { Link } from 'react-router-dom';
import { navigation, site } from '../../config/site';
import { useLang } from '../../i18n/LanguageContext';
import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t, lp } = useLang();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p className="muted">
              {t.meta.tagline}. {t.footer.about}
            </p>
          </div>

          <nav className="footer__col" aria-label={t.footer.navLabel}>
            <h3 className="footer__title">{t.footer.nav}</h3>
            <ul>
              {navigation.map((item) => (
                <li key={item.hash}>
                  <Link to={{ pathname: lp('/'), hash: `#${item.hash}` }} className="link-line">
                    {t.nav[item.hash]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h3 className="footer__title">{t.footer.socials}</h3>
            <ul>
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="link-line">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">{t.footer.contacts}</h3>
            <ul>
              <li>
                <a href={`mailto:${site.contacts.email}`} className="link-line">
                  {site.contacts.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.contacts.phoneHref}`} className="link-line">
                  {site.contacts.phone}
                </a>
              </li>
              <li className="muted">{t.contacts.address}</li>
            </ul>
          </div>
        </div>

        <div className="footer__wordmark" aria-hidden="true">
          {site.name}
        </div>

        <div className="footer__bottom">
          <span>© {year} {site.name}. {t.footer.rights}</span>
          <Link to={lp('/privacy')} className="link-line">
            {t.footer.privacy}
          </Link>
          <Link to={{ pathname: lp('/'), hash: '#top' }} className="footer__up">
            {t.footer.up}
          </Link>
        </div>
      </div>
    </footer>
  );
}
