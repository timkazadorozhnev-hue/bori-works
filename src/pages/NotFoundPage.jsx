import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { ArrowIcon } from '../components/ui/Icons';
import './NotFoundPage.css';

export default function NotFoundPage() {
  const { t, lp } = useLang();
  usePageMeta({ title: t.notFound.title, notFound: true });

  return (
    <section className="notfound">
      <div className="container">
        <p className="eyebrow">{t.notFound.eyebrow}</p>
        <h1 className="h-display notfound__code">404</h1>
        <p className="h-lg notfound__text">
          {t.notFound.text[0]} <span className="serif">{t.notFound.text[1]}</span>
        </p>
        <Link to={lp('/')} className="btn btn--solid">
          {t.notFound.home} <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
