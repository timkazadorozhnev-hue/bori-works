import { Link, useParams } from 'react-router-dom';
import { getNewsBySlug, news } from '../data/news';
import { usePageMeta } from '../hooks/usePageMeta';
import { formatDate } from '../utils/format';
import Img from '../components/ui/Img';
import Reveal from '../components/ui/Reveal';
import { RevealLines } from '../components/ui/RevealText';
import { ChevronIcon } from '../components/ui/Icons';
import NotFoundPage from './NotFoundPage';
import './TextPage.css';

export default function NewsArticlePage() {
  const { slug } = useParams();
  const item = getNewsBySlug(slug);

  usePageMeta(item ? { title: item.title, description: item.excerpt, image: item.image } : { title: 'Новость не найдена' });

  if (!item) return <NotFoundPage />;

  const others = news.filter((n) => n.slug !== slug).slice(0, 2);

  return (
    <article className="tpage">
      <div className="container tpage__narrow">
        <Reveal variant="fade">
          <Link to={{ pathname: '/', hash: '#news' }} className="back-link tpage__back">
            <ChevronIcon direction="left" /> Все новости
          </Link>
        </Reveal>
        <Reveal className="news__meta" variant="fade" delay={0.1}>
          <time dateTime={item.date}>{formatDate(item.date)}</time>
          <span>{item.category}</span>
        </Reveal>
        <RevealLines as="h1" className="h-xl tpage__title" lines={[item.title]} delay={0.15} />
      </div>

      <Reveal className="container">
        <div className="media tpage__cover">
          <Img src={item.image} alt="" priority sizes="100vw" />
        </div>
      </Reveal>

      <div className="container tpage__narrow tpage__content">
        <p className="tpage__lead">{item.excerpt}</p>
        {item.body.map((p, i) => (
          <Reveal as="p" key={i} delay={i * 0.05}>
            {p}
          </Reveal>
        ))}
      </div>

      {others.length > 0 && (
        <aside className="container tpage__more">
          <h2 className="eyebrow">Ещё новости</h2>
          <ul>
            {others.map((n) => (
              <li key={n.slug}>
                <Link to={`/news/${n.slug}`}>
                  <time dateTime={n.date}>{formatDate(n.date)}</time>
                  <span className="h-lg">{n.title}</span>
                  <ChevronIcon />
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </article>
  );
}
