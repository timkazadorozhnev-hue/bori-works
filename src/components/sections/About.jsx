import { useLang } from '../../i18n/LanguageContext';
import Reveal from '../ui/Reveal';
import { RevealWords } from '../ui/RevealText';
import Img from '../ui/Img';
import Counter from '../ui/Counter';
import './About.css';

export default function About() {
  const { t, content } = useLang();
  const { about } = content;

  return (
    <section id="about" className="about section">
      <div className="container">
        <Reveal className="about__meta" variant="fade">
          <span className="shead__index">01</span>
          <span className="eyebrow">{about.eyebrow}</span>
        </Reveal>

        <RevealWords as="h2" text={about.statement} className="about__statement" />

        <div className="about__grid">
          <Reveal className="about__visual">
            <div className="media zoom about__img-main">
              <Img src={about.image} alt={t.about.imageAlt} sizes="(max-width: 900px) 100vw, 55vw" />
            </div>
            <div className="media zoom about__img-small">
              <Img src={about.imageSecondary} alt={t.about.imageSecondaryAlt} sizes="(max-width: 900px) 50vw, 22vw" />
            </div>
          </Reveal>

          <div className="about__text">
            {about.intro.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 0.1} className={i === 0 ? 'about__lead' : 'muted'}>
                {p}
              </Reveal>
            ))}

            <dl className="about__stats">
              {about.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08} className="about__stat">
                  <dt className="visually-hidden">{s.label}</dt>
                  <dd>
                    <span className="about__stat-num">
                      <Counter value={s.value} suffix={s.suffix} />
                    </span>
                    <span className="about__stat-label">{s.label}</span>
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>

        <div className="about__approach">
          <Reveal as="h3" className="eyebrow about__subhead">
            {t.about.approach}
          </Reveal>
          <ol className="about__pillars">
            {about.approach.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 0.1} className="about__pillar">
                <span className="about__pillar-num">0{i + 1}</span>
                <h4 className="h-lg">{a.title}</h4>
                <p className="muted">{a.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="about__geo">
          <h3 className="eyebrow about__subhead">{t.about.geography}</h3>
          <ul className="about__cities">
            {about.geography.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
