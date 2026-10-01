import { Link } from 'react-router-dom';
import Img from '../ui/Img';
import Reveal from '../ui/Reveal';
import './ProjectCard.css';

/**
 * Карточка проекта в галерее. size: 'wide' | 'tall' — задаёт пропорции кадра.
 */
export default function ProjectCard({ project, index, size = 'wide', delay = 0 }) {
  return (
    <Reveal as="article" className={`pcard pcard--${size}`} delay={delay}>
      <Link to={`/projects/${project.slug}`} className="pcard__link" aria-label={`${project.title}, ${project.year} — открыть проект`}>
        <div className="pcard__media media">
          <Img
            src={project.cover}
            alt={project.title}
            sizes={size === 'wide' ? '(max-width: 760px) 100vw, 58vw' : '(max-width: 760px) 100vw, 40vw'}
          />
          <span className="pcard__view" aria-hidden="true">
            Смотреть
          </span>
        </div>

        <div className="pcard__info">
          <span className="pcard__num">{String(index + 1).padStart(2, '0')}</span>
          <div className="pcard__head">
            <h3 className="pcard__title">{project.title}</h3>
            <span className="pcard__year">{project.year}</span>
          </div>
          <p className="pcard__type">
            {project.type} <span>·</span> {project.genre}
          </p>
          <p className="pcard__short">{project.short}</p>
        </div>
      </Link>
    </Reveal>
  );
}
