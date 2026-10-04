import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { formatDate } from '../../utils/format';
import SectionHead from '../ui/SectionHead';
import Reveal from '../ui/Reveal';
import Img from '../ui/Img';
import { ArrowUpRightIcon } from '../ui/Icons';
import './News.css';

export default function News() {
  const { t, content, lang, lp } = useLang();
  const [featured, ...rest] = content.news;

  return (
    <section id="news" className="news section">
      <div className="container">
        <SectionHead
          index="05"
          eyebrow={t.news.eyebrow}
          title={[t.news.title[0], <span className="serif" key="s">{t.news.title[1]}</span>]}
          aside={t.news.aside}
        />

        {featured && (
          <Reveal as="article" className="news-feat">
            <Link to={lp(`/news/${featured.slug}`)} className="news-feat__link">
              <div className="news-feat__media media">
                <Img src={featured.image} alt="" sizes="(max-width: 900px) 100vw, 60vw" />
              </div>
              <div className="news-feat__body">
                <div className="news__meta">
                  <time dateTime={featured.date}>{formatDate(featured.date, lang)}</time>
                  <span>{featured.category}</span>
                </div>
                <h3 className="h-lg news-feat__title">{featured.title}</h3>
                <p className="muted">{featured.excerpt}</p>
                <span className="news__more">
                  {t.news.read} <ArrowUpRightIcon />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="news__grid">
          {rest.map((item, i) => (
            <Reveal as="article" className="news-card" key={item.slug} delay={i * 0.1}>
              <Link to={lp(`/news/${item.slug}`)} className="news-card__link">
                <div className="news-card__media media">
                  <Img src={item.image} alt="" sizes="(max-width: 760px) 100vw, 33vw" />
                </div>
                <div className="news__meta">
                  <time dateTime={item.date}>{formatDate(item.date, lang)}</time>
                  <span>{item.category}</span>
                </div>
                <h3 className="news-card__title">{item.title}</h3>
                <p className="news-card__excerpt">{item.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
