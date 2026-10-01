import { Link } from 'react-router-dom';
import { navigation, site } from '../../config/site';
import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p className="muted">
              {site.tagline}. Фильмы, сериалы, реклама и музыкальные клипы — от идеи до премьеры.
            </p>
          </div>

          <nav className="footer__col" aria-label="Навигация в подвале">
            <h3 className="footer__title">Навигация</h3>
            <ul>
              {navigation.map((item) => (
                <li key={item.hash}>
                  <Link to={{ pathname: '/', hash: `#${item.hash}` }} className="link-line">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h3 className="footer__title">Соцсети</h3>
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
            <h3 className="footer__title">Контакты</h3>
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
              <li className="muted">{site.contacts.address}</li>
            </ul>
          </div>
        </div>

        <div className="footer__wordmark" aria-hidden="true">
          {site.name}
        </div>

        <div className="footer__bottom">
          <span>© {year} {site.name}. Все права защищены.</span>
          <Link to="/privacy" className="link-line">
            Политика конфиденциальности
          </Link>
          <Link to={{ pathname: '/', hash: '#top' }} className="footer__up">
            Наверх ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
