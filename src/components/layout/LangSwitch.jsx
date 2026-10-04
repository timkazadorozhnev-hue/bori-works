import { Link, useLocation } from 'react-router-dom';
import { LANGUAGES, localizePath, storeLang } from '../../i18n/config';
import { useLang } from '../../i18n/LanguageContext';
import './LangSwitch.css';

const NAMES = { ru: 'Русский', en: 'English' };

/**
 * Переключатель RU / EN. Ведёт на ту же страницу на другом языке
 * (с сохранением якоря и позиции прокрутки) и запоминает выбор.
 */
export default function LangSwitch({ className = '' }) {
  const { lang, t } = useLang();
  const { pathname, search, hash } = useLocation();

  return (
    <nav className={`lswitch ${className}`} aria-label={t.langSwitch.label}>
      {LANGUAGES.map((l, i) => {
        const active = l === lang;
        return (
          <span key={l} className="lswitch__item">
            {i > 0 && (
              <span className="lswitch__sep" aria-hidden="true">
                /
              </span>
            )}
            <Link
              to={{ pathname: localizePath(pathname, l), search, hash }}
              state={{ keepScroll: true }}
              className={`lswitch__link ${active ? 'is-active' : ''}`}
              aria-current={active ? 'true' : undefined}
              aria-label={NAMES[l]}
              hrefLang={l}
              lang={l}
              onClick={() => storeLang(l)}
            >
              {l.toUpperCase()}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
