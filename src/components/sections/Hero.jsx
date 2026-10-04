import { Link } from 'react-router-dom';
import { site } from '../../config/site';
import { useLang } from '../../i18n/LanguageContext';
import { buildSrcSet } from '../../utils/media';
import { RevealLines } from '../ui/RevealText';
import Reveal from '../ui/Reveal';
import { ArrowIcon } from '../ui/Icons';
import './Hero.css';

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
        {/* Тонирование, дрейфующий туман и виньетка — атмосфера кадра */}
        <div className="hero__tint" />
        <div className="hero__fog hero__fog--back" />
        <div className="hero__fog hero__fog--front" />
        <div className="hero__shade" />
      </div>

      <div className="hero__content container">
        <Reveal className="hero__eyebrow" variant="fade" delay={0.2}>
          {t.hero.eyebrow}
        </Reveal>

        <RevealLines as="h1" className="hero__title" lines={['Bori Works']} delay={0.35} />

        <RevealLines as="p" className="hero__slogan" lines={t.hero.slogan} delay={0.6} step={0.1} />

        <Reveal className="hero__actions" delay={1}>
          <Link to={{ pathname: home, hash: '#projects' }} className="btn btn--solid">
            {t.hero.ctaProjects} <ArrowIcon />
          </Link>
          <Link to={{ pathname: home, hash: '#contact' }} className="hero__link link-line">
            {t.hero.ctaContact}
          </Link>
        </Reveal>
      </div>

      <Reveal className="hero__bottom container" variant="fade" delay={1.2}>
        <span className="hero__est">Est. 2014 · Moscow</span>
        <ul className="hero__cats">
          {t.hero.categories.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <Link to={{ pathname: home, hash: '#about' }} className="hero__scroll" aria-label={t.hero.scrollLabel}>
          <span>Scroll</span>
          <i />
        </Link>
      </Reveal>
    </section>
  );
}
