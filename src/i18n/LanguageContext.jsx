import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getLangFromPath, localizePath } from './config';
import { getContent } from './content';
import ru from './locales/ru';
import en from './locales/en';

const dictionaries = { ru, en };
const LanguageContext = createContext(null);

/**
 * Язык определяется по адресу страницы (/en/... — английский, остальное — русский),
 * поэтому он сохраняется при переходах по ссылкам и перезагрузке.
 */
export function LanguageProvider({ children }) {
  const { pathname } = useLocation();
  const lang = getLangFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      t: dictionaries[lang],
      content: getContent(lang),
      /** Локализованный адрес: lp('/privacy') → '/en/privacy' на английской версии */
      lp: (path) => localizePath(path, lang),
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** { lang, t, content, lp } */
export const useLang = () => useContext(LanguageContext);
