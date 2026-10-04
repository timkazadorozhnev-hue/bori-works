import { useMemo, useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import SectionHead from '../ui/SectionHead';
import ProjectCard from '../projects/ProjectCard';
import './Projects.css';

// Чередование размеров создаёт «журнальную» раскладку вместо одинаковой сетки.
const SIZE_PATTERN = ['wide', 'tall', 'tall', 'wide'];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const { t, content } = useLang();
  const { projects, projectCategories } = content;

  // Показываем только категории, в которых есть проекты.
  const categories = useMemo(
    () => projectCategories.filter((c) => c.key === 'all' || projects.some((p) => p.category === c.key)),
    [projects, projectCategories],
  );

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionHead
          index="02"
          eyebrow={t.projects.eyebrow}
          title={[t.projects.title[0], <span className="serif" key="s">{t.projects.title[1]}</span>]}
          aside={t.projects.aside}
        />

        <div className="projects__filter" role="tablist" aria-label={t.projects.filterLabel}>
          {categories.map((c) => {
            const count = c.key === 'all' ? projects.length : projects.filter((p) => p.category === c.key).length;
            return (
              <button
                key={c.key}
                role="tab"
                aria-selected={filter === c.key}
                className={`projects__tab ${filter === c.key ? 'is-active' : ''}`}
                onClick={() => setFilter(c.key)}
              >
                {c.label}
                <sup>{count}</sup>
              </button>
            );
          })}
        </div>

        <div className="projects__grid" key={filter}>
          {visible.map((project, i) => {
            const size = SIZE_PATTERN[i % SIZE_PATTERN.length];
            return (
              <div key={project.slug} className={`projects__cell projects__cell--${size} ${i % 2 ? 'is-right' : 'is-left'}`}>
                <ProjectCard project={project} index={i} size={size} delay={(i % 2) * 0.1} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
