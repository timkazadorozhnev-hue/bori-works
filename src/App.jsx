import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { DEFAULT_LANG, LANGUAGES } from './i18n/config';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

// Внутренние страницы загружаются по требованию — главная остаётся лёгкой.
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const NewsArticlePage = lazy(() => import('./pages/NewsArticlePage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Русская версия — по исходным адресам (/), остальные языки — под префиксом (/en).
const bases = LANGUAGES.map((lang) => (lang === DEFAULT_LANG ? '/' : `/${lang}`));

export default function App() {
  const location = useLocation();

  return (
    <LanguageProvider>
      <Layout>
        <Suspense fallback={<div className="page-fallback" />}>
          {/* key по pathname перезапускает анимацию перехода между страницами */}
          <div className="page" key={location.pathname}>
            <Routes location={location}>
              {bases.map((base) => (
                <Route key={base} path={base}>
                  <Route index element={<HomePage />} />
                  <Route path="projects/:slug" element={<ProjectPage />} />
                  <Route path="news/:slug" element={<NewsArticlePage />} />
                  <Route path="privacy" element={<PrivacyPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              ))}
            </Routes>
          </div>
        </Suspense>
      </Layout>
    </LanguageProvider>
  );
}
