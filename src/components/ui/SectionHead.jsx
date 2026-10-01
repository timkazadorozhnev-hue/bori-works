import Reveal from './Reveal';
import { RevealLines } from './RevealText';
import './SectionHead.css';

/**
 * Шапка секции: индекс, eyebrow, заголовок (массив строк) и необязательный текст справа.
 */
export default function SectionHead({ index, eyebrow, title, aside, children }) {
  return (
    <header className="shead">
      <Reveal className="shead__meta" variant="fade">
        {index && <span className="shead__index">{index}</span>}
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <div className="shead__row">
        <RevealLines lines={title} className="h-xl shead__title" />
        {(aside || children) && (
          <Reveal className="shead__aside" delay={0.2}>
            {aside && <p className="muted">{aside}</p>}
            {children}
          </Reveal>
        )}
      </div>
    </header>
  );
}
