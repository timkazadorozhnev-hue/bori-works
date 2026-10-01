import { useInView } from '../../hooks/useInView';

/**
 * Обёртка для плавного появления при прокрутке.
 * variant: 'up' (по умолчанию) — slide-up + fade, 'fade' — только прозрачность.
 */
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView();
  const classes = ['reveal', variant === 'fade' && 'reveal--fade', inView && 'is-visible', className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag ref={ref} className={classes} style={{ '--delay': `${delay}s`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
