import { useCallback, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import Img from '../components/ui/Img';
import Reveal from '../components/ui/Reveal';
import { RevealLines } from '../components/ui/RevealText';
import VideoModal from '../components/ui/VideoModal';
import { ChevronIcon, PlayIcon } from '../components/ui/Icons';
import NotFoundPage from './NotFoundPage';
import './ProjectPage.css';

export default function ProjectPage() {
  const { slug } = useParams();
  const { t, content, lp } = useLang();
  const { projects } = content;
  const project = projects.find((p) => p.slug === slug);
  const [videoOpen, setVideoOpen] = useState(false);
  const closeVideo = useCallback(() => setVideoOpen(false), []);

  usePageMeta(
    project ? { title: project.title, description: project.short, image: project.cover } : { title: t.project.notFound, notFound: true },
  );

  if (!project) return <NotFoundPage />;

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const [still1, ...otherStills] = project.stills ?? [];

  return (
    <article className="project">
      {/* Обложка */}
      <header className="project__hero">
        <div className="project__hero-media media">
          <Img src={project.cover} alt={project.title} priority sizes="100vw" />
        </div>
        <div className="project__hero-content container">
          <Reveal variant="fade" delay={0.1}>
            <Link to={{ pathname: lp('/'), hash: '#projects' }} className="back-link">
              <ChevronIcon direction="left" /> {t.project.back}
            </Link>
          </Reveal>
          <div>
            <Reveal variant="fade" delay={0.2}>
              <p className="eyebrow">{project.type}</p>
            </Reveal>
            <RevealLines as="h1" className="h-display project__title" lines={[project.title]} delay={0.25} />
          </div>
          {project.video && (
            <button className="project__play" onClick={() => setVideoOpen(true)}>
              <span>
                <PlayIcon />
              </span>
              {t.project.trailer}
            </button>
          )}
        </div>
      </header>

      {/* Основная информация */}
      <div className="container">
        <dl className="project__meta">
          {[
            [t.project.year, project.year],
            [t.project.format, project.type],
            [t.project.genre, project.genre],
            [t.project.duration, project.duration],
          ].map(([label, value], i) => (
            <Reveal key={label} delay={i * 0.06}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </Reveal>
          ))}
        </dl>

        <div className="project__body">
          <div className="project__text">
            {project.description.map((p, i) => (
              <Reveal as="p" key={i} className={i === 0 ? 'project__lead' : 'muted'} delay={i * 0.08}>
                {p}
              </Reveal>
            ))}
          </div>
          {project.facts?.length > 0 && (
            <Reveal as="aside" className="project__facts" delay={0.15}>
              <h2 className="eyebrow">{t.project.details}</h2>
              <dl>
                {project.facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </div>

      {/* Кадры */}
      {still1 && (
        <section className="project__stills container" aria-label={t.project.stillsLabel}>
          <Reveal className="media zoom project__still project__still--wide">
            <Img src={still1} alt={t.project.still(project.title, 1)} sizes="(max-width: 760px) 100vw, 90vw" />
          </Reveal>
          {otherStills.map((s, i) => (
            <Reveal key={s} className="media zoom project__still" delay={i * 0.1}>
              <Img src={s} alt={t.project.still(project.title, i + 2)} sizes="(max-width: 760px) 100vw, 45vw" />
            </Reveal>
          ))}
        </section>
      )}

      {/* Команда проекта */}
      {project.credits?.length > 0 && (
        <section className="project__credits container" aria-label={t.project.credits}>
          <Reveal as="h2" className="eyebrow">
            {t.project.credits}
          </Reveal>
          <ul>
            {project.credits.map((c, i) => (
              <Reveal as="li" key={c.role + c.name} delay={i * 0.05}>
                <span className="muted">{c.role}</span>
                <span>{c.name}</span>
              </Reveal>
            ))}
          </ul>
        </section>
      )}

      {/* Следующий проект */}
      <Link to={lp(`/projects/${next.slug}`)} className="project__next">
        <div className="project__next-media media">
          <Img src={next.cover} alt="" sizes="100vw" />
        </div>
        <div className="project__next-content container">
          <span className="eyebrow">{t.project.next}</span>
          <span className="h-xl">{next.title}</span>
          <span className="project__next-arrow" aria-hidden="true">
            <ChevronIcon />
          </span>
        </div>
      </Link>

      {project.video && (
        <VideoModal open={videoOpen} onClose={closeVideo} video={project.video} poster={project.cover} title={project.title} />
      )}
    </article>
  );
}
