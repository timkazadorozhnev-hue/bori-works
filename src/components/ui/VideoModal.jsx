import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLang } from '../../i18n/LanguageContext';
import { useLockBody } from '../../hooks/useLockBody';
import { CloseIcon } from './Icons';
import './VideoModal.css';

/**
 * Полноэкранный видеоплеер.
 * video — прямая ссылка на mp4/webm, embed — ссылка для iframe (YouTube/Vimeo).
 */
export default function VideoModal({ open, onClose, video, embed, poster, title: titleProp }) {
  const { t } = useLang();
  const title = titleProp || t.video.title;
  const closeRef = useRef(null);
  useLockBody(open);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  let player;
  if (video) {
    player = <video src={video} poster={poster} controls autoPlay playsInline />;
  } else if (embed) {
    const sep = embed.includes('?') ? '&' : '?';
    player = (
      <iframe
        src={`${embed}${sep}autoplay=1`}
        title={title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    );
  } else {
    player = (
      <div className="vmodal__empty">
        <p className="eyebrow">{t.video.soon}</p>
        <p className="h-lg">{t.video.soonText}</p>
      </div>
    );
  }

  return createPortal(
    <div className="vmodal" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <button ref={closeRef} className="vmodal__close" onClick={onClose} aria-label={t.video.close}>
        <CloseIcon />
      </button>
      <div className="vmodal__frame" onClick={(e) => e.stopPropagation()}>
        {player}
      </div>
    </div>,
    document.body,
  );
}
