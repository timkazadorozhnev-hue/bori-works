import { useLang } from '../../i18n/LanguageContext';
import Header from './Header';
import Footer from './Footer';
import ScrollManager from './ScrollManager';

export default function Layout({ children }) {
  const { t } = useLang();

  return (
    <>
      <a href="#main" className="visually-hidden">
        {t.layout.skipLink}
      </a>
      <ScrollManager />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
