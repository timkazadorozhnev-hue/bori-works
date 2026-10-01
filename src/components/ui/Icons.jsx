/* Набор небольших SVG-иконок без внешних зависимостей. */

export const ArrowIcon = ({ className = 'btn__arrow' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

export const ArrowUpRightIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true" width="14" height="14">
    <path d="M4 12L12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

export const PlayIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
  </svg>
);

export const CloseIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" width="22" height="22">
    <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

export const ChevronIcon = ({ direction = 'right', className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    width="20"
    height="20"
    style={{ transform: direction === 'left' ? 'rotate(180deg)' : undefined }}
  >
    <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);
