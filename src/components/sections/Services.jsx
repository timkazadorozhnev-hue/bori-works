import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import SectionHead from '../ui/SectionHead';
import Reveal from '../ui/Reveal';
import Img from '../ui/Img';
import { ArrowIcon } from '../ui/Icons';
import './Services.css';

/**
 * Услуги в виде крупного типографического списка.
 * Desktop: при наведении за курсором следует превью-кадр.
 * Все устройства: клик раскрывает описание направления.
 */
export default function Services() {
  const { t, content, lp } = useLang();
  const { services } = content;
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(0);
  const previewRef = useRef(null);
  const listRef = useRef(null);
  const frame = useRef(0);

  const onMove = (e) => {
    if (!previewRef.current || !listRef.current) return;
    cancelAnimationFrame(frame.current);
    const { clientX, clientY } = e;
    frame.current = requestAnimationFrame(() => {
      const rect = listRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      previewRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    });
  };

  return (
    <section id="services" className="services section">
      <div className="container">
        <SectionHead
          index="03"
          eyebrow={t.services.eyebrow}
          title={[t.services.title[0], <span className="serif" key="s">{t.services.title[1]}</span>]}
          aside={t.services.aside}
        />

        <div
          className="services__list"
          ref={listRef}
          onMouseMove={onMove}
          onMouseLeave={() => setHovered(null)}
        >
          <div className={`services__preview ${hovered !== null ? 'is-visible' : ''}`} ref={previewRef} aria-hidden="true">
            {services.map((s, i) => (
              <div key={s.id} className={`services__preview-img ${hovered === i ? 'is-active' : ''}`}>
                <Img src={s.image} alt="" sizes="360px" />
              </div>
            ))}
          </div>

          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <Reveal
                key={s.id}
                className={`service ${isOpen ? 'is-open' : ''} ${hovered !== null && hovered !== i ? 'is-dimmed' : ''}`}
                delay={i * 0.04}
                onMouseEnter={() => setHovered(i)}
              >
                <button
                  className="service__head"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`service-${s.id}`}
                >
                  <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="service__title">{s.title}</h3>
                  <span className="service__toggle" aria-hidden="true" />
                </button>
                <div className="service__body" id={`service-${s.id}`} role="region">
                  <div className="service__body-inner">
                    <div className="service__content">
                      <p>{s.text}</p>
                      <ul className="service__tags">
                        {s.tags.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="service__thumb media">
                      <Img src={s.image} alt={s.title} sizes="(max-width: 760px) 100vw, 30vw" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="services__cta">
          <p className="h-lg">
            {t.services.ctaText[0]} <span className="serif">{t.services.ctaText[1]}</span>
          </p>
          <Link to={{ pathname: lp('/'), hash: '#contact' }} className="btn">
            {t.services.cta} <ArrowIcon />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
