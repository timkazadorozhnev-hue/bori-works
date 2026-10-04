import { useCallback, useEffect, useRef, useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import SectionHead from '../ui/SectionHead';
import Img from '../ui/Img';
import Reveal from '../ui/Reveal';
import { ChevronIcon } from '../ui/Icons';
import './Team.css';

/**
 * Горизонтальная галерея команды:
 * scroll-snap + перетаскивание мышью + кнопки + индикатор прогресса.
 */
export default function Team() {
  const { t, content } = useLang();
  const { team } = content;
  const trackRef = useRef(null);
  const drag = useRef({ active: false, moved: false, x: 0, left: 0 });
  const [progress, setProgress] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });
  const [dragging, setDragging] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 0;
    setProgress(p);
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft > max - 8 });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [update]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    const card = el?.querySelector('.tcard');
    if (!card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  // Перетаскивание мышью (на тач-устройствах работает нативная прокрутка).
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    drag.current = { active: true, moved: false, x: e.clientX, left: trackRef.current.scrollLeft };
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d.active) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 4 && !d.moved) {
      d.moved = true;
      setDragging(true);
    }
    if (d.moved) trackRef.current.scrollLeft = d.left - dx;
  };
  const endDrag = () => {
    drag.current.active = false;
    setDragging(false);
  };

  return (
    <section id="team" className="team section">
      <div className="container">
        <SectionHead
          index="04"
          eyebrow={t.team.eyebrow}
          title={[t.team.title[0], <span className="serif" key="s">{t.team.title[1]}</span>]}
        >
          <div className="team__controls">
            <button className="team__btn" onClick={() => scrollByCard(-1)} disabled={edges.start} aria-label={t.team.prev}>
              <ChevronIcon direction="left" />
            </button>
            <button className="team__btn" onClick={() => scrollByCard(1)} disabled={edges.end} aria-label={t.team.next}>
              <ChevronIcon />
            </button>
          </div>
        </SectionHead>
      </div>

      <Reveal variant="fade">
        <ul
          className={`team__track ${dragging ? 'is-dragging' : ''}`}
          ref={trackRef}
          onScroll={update}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          aria-label={t.team.listLabel}
        >
          {team.map((m, i) => (
            <li className="tcard" key={m.id}>
              <div className="tcard__photo media">
                <Img src={m.photo} alt={m.name} sizes="(max-width: 640px) 78vw, 360px" draggable="false" />
                <span className="tcard__index">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="tcard__name">{m.name}</h3>
              <p className="tcard__role">{m.role}</p>
              <p className="tcard__bio">{m.bio}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="container">
        <div className="team__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${0.15 + progress * 0.85})` }} />
        </div>
      </div>
    </section>
  );
}
