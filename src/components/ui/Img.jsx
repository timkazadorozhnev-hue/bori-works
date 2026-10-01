import { useState } from 'react';
import { buildSrcSet } from '../../utils/media';
import './Img.css';

/**
 * Изображение с ленивой загрузкой, srcset для Unsplash и плавным проявлением.
 * priority — для изображений первого экрана (грузятся сразу).
 */
export default function Img({ src, alt = '', sizes = '100vw', priority = false, className = '', ...rest }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      srcSet={buildSrcSet(src)}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`img ${loaded ? 'is-loaded' : ''} ${className}`}
      {...rest}
    />
  );
}
