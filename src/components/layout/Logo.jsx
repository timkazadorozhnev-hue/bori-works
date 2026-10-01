import { Link } from 'react-router-dom';
import { site } from '../../config/site';
import './Logo.css';

/**
 * Логотип компании. Если в config/site.js задан logo.image — выводится изображение,
 * иначе — текстовый логотип.
 */
export default function Logo({ className = '', onClick }) {
  const { text, image, width, height } = site.logo;

  return (
    <Link to={{ pathname: '/', hash: '#top' }} className={`logo ${className}`} onClick={onClick} aria-label={`${site.name} — на главную`}>
      {image ? (
        <img src={image} alt={site.name} width={width} height={height} className="logo__img" />
      ) : (
        <span className="logo__text">
          {text.split(' ').map((part, i) => (
            <span key={i} className={i === 0 ? 'logo__strong' : 'logo__light'}>
              {part}
            </span>
          ))}
        </span>
      )}
    </Link>
  );
}
