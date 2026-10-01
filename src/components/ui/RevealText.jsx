import { useInView } from '../../hooks/useInView';

/**
 * Появление текста построчно (lines) — каждая строка «выезжает» из-под маски.
 * Передайте массив строк: lines={['Первая строка', 'Вторая']}.
 */
export function RevealLines({ as: Tag = 'h2', lines, className = '', delay = 0, step = 0.08 }) {
  const [ref, inView] = useInView();
  return (
    <Tag ref={ref} className={`${className} ${inView ? 'is-visible' : ''}`}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          <span style={{ '--delay': `${delay + i * step}s` }}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

/** Появление текста по словам — для больших абзацев-манифестов. */
export function RevealWords({ as: Tag = 'p', text, className = '' }) {
  const [ref, inView] = useInView();
  const words = text.split(' ');
  return (
    <Tag ref={ref} className={`words ${className} ${inView ? 'is-visible' : ''}`} aria-label={text}>
      {words.map((w, i) => (
        <span className="word" aria-hidden="true" style={{ '--i': i }} key={i}>
          {w}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}
