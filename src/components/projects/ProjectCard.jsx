import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import Img from '../ui/Img';
import Reveal from '../ui/Reveal';
import { ArrowUpRightIcon } from '../ui/Icons';
import './ProjectCard.css';

/**
 * Карточка проекта в галерее. size: 'wide' | 'tall' | 'poster' — задаёт ширину и пропорции кадра в мозаике.
 * Если у проекта есть внешняя ссылка (project.link), карточка ведёт на неё в новой вкладке.
 */
export default function ProjectCard({ project, index, size = 'wide', delay = 0 }) {
  const { t, lp } = useLang();
  const external = Boolean(project.link);
  const linkProps = external
    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer', 'aria-label': t.card.openExternal(project.title, project.year) }
    : { to: lp(`/projects/${project.slug}`), 'aria-label': t.card.open(project.title, project.year) };
  const CardLink = external ? 'a' : Link;

  return (
    <Reveal as="article" className={['pcard', `pcard--${size}`, external && 'pcard--external'].filter(Boolean).join(' ')} delay={delay}>
      <CardLink className="pcard__link" {...linkProps}>
        <div className="pcard__media media">
          <Img
            src={project.cover}
            alt={project.title}
            sizes={
              size === 'wide'
                ? '(max-width: 760px) 100vw, 58vw'
                : size === 'poster'
                  ? '(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 34vw'
                  : '(max-width: 760px) 100vw, 40vw'
            }
          />

          <div className="pcard__overlay">
            <span className="pcard__num">{String(index + 1).padStart(2, '0')}</span>
            <div className="pcard__info">
              <p className="pcard__type">
                {project.type} <span>·</span> {project.genre}
              </p>
              <div className="pcard__head">
                <h3 className="pcard__title">{project.title}</h3>
                <span className="pcard__year">{project.year}</span>
              </div>
            </div>
            <span className="pcard__view" aria-hidden="true">
              {external ? (
                <>
                  {t.card.external} <ArrowUpRightIcon />
                </>
              ) : (
                t.card.view
              )}
            </span>
          </div>
        </div>

        <p className="pcard__short">{project.short}</p>
      </CardLink>
    </Reveal>
  );
}
