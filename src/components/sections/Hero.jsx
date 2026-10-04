import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../../config/site';
import { useLang } from '../../i18n/LanguageContext';
import { pad } from '../../utils/format';
import { buildSrcSet } from '../../utils/media';
import { RevealLines } from '../ui/RevealText';
import Reveal from '../ui/Reveal';
import { ArrowIcon } from '../ui/Icons';
import './Hero.css';

/** Бегущий таймкод 24 fps — обновляется через ref, без ререндеров React. */
function Timecode() {
  const ref = useRef(null);
  useEffect(() => {
    const start = performance.now();
    const id = setInterval(() => {
      const t = (performance.now() - start) / 1000;
      const frames = Math.floor((t % 1) * 24);
      const s = Math.floor(t) % 60;
      const m = Math.floor(t / 60) % 60;
      const h = Math.floor(t / 3600);
      if (ref.current) ref.current.textContent = `${pad(h)}:${pad(m)}:${pad(s)}:${pad(frames)}`;
    }, 1000 / 24);
    return () => clearInterval(id);
  }, []);
  return <span ref={ref}>00:00:00:00</span>;
}

export default function Hero() {
  const { video, poster } = site.hero;
  const { t, lp } = useLang();
  const home = lp('/');

  return (
    <section id="top" className="hero" aria-label="BORI WORKS">
      <div className="hero__media" aria-hidden="true">
        {video ? (
          <video src={video} poster={poster} autoPlay muted loop playsInline preload="auto" />
        ) : (
          <img src={poster} srcSet={buildSrcSet(poster)} sizes="100vw" alt="" fetchPriority="high" decoding="async" />
        )}
        <div className="hero__shade" />
      </div>

      <div className="hero__frame container" aria-hidden="true">
        <span className="hero__corner hero__corner--tl" />
        <span className="hero__corner hero__corner--tr" />
        <span className="hero__corner hero__corner--bl" />
        <span className="hero__corner hero__corner--br" />
      </div>

      <div className="hero__content container">
        <Reveal className="hero__meta" variant="fade" delay={0.2}>
          <span className="hero__rec">
            <i /> REC
          </span>
          <Timecode />
          <span className="hero__est">Est. 2014 · Moscow</span>
        </Reveal>

        <div className="hero__main">
          <RevealLines
            as="h1"
            className="h-display hero__title"
            lines={['Bori', 'Works']}
            delay={0.3}
            step={0.12}
          />
          <div className="hero__side">
            <RevealLines
              as="p"
              className="hero__slogan serif"
              lines={t.hero.slogan}
              delay={0.6}
            />
            <Reveal className="hero__actions" delay={0.9}>
              <Link to={{ pathname: home, hash: '#projects' }} className="btn btn--solid">
                {t.hero.ctaProjects} <ArrowIcon />
              </Link>
              <Link to={{ pathname: home, hash: '#contact' }} className="btn">
                {t.hero.ctaContact}
              </Link>
            </Reveal>
          </div>
        </div>

        <Reveal className="hero__bottom" variant="fade" delay={1.1}>
          {t.hero.categories.map((c) => (
            <span key={c}>{c}</span>
          ))}
          <Link to={{ pathname: home, hash: '#about' }} className="hero__scroll" aria-label={t.hero.scrollLabel}>
            <span>Scroll</span>
            <i />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
