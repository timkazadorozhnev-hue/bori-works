import { useCallback, useState } from 'react';
import { site } from '../../config/site';
import { useLang } from '../../i18n/LanguageContext';
import Reveal from '../ui/Reveal';
import Img from '../ui/Img';
import VideoModal from '../ui/VideoModal';
import { PlayIcon } from '../ui/Icons';
import './Showreel.css';

export default function Showreel() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const { title, duration, poster, video, embed } = site.showreel;

  return (
    <section className="showreel" aria-label="Showreel">
      <Reveal className="showreel__frame" variant="fade">
        <button className="showreel__button" onClick={() => setOpen(true)} aria-label={t.showreel.watch(title)}>
          <span className="showreel__media media">
            <Img src={poster} alt="" sizes="100vw" />
          </span>

          <span className="showreel__label showreel__label--left">
            <span className="eyebrow">Showreel</span>
          </span>
          <span className="showreel__label showreel__label--right">{duration}</span>

          <span className="showreel__center">
            <span className="showreel__title">
              <span>Watch</span>
              <span className="showreel__play">
                <PlayIcon />
              </span>
              <span>Reel</span>
            </span>
            <span className="showreel__sub">{title} — {t.showreel.sub}</span>
          </span>
        </button>
      </Reveal>

      <VideoModal open={open} onClose={close} video={video} embed={embed} poster={poster} title={title} />
    </section>
  );
}
