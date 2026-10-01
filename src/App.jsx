import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

// Внутренние страницы загружаются по требованию — главная остаётся лёгкой.
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const NewsArticlePage = lazy(() => import('./pages/NewsArticlePage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <Suspense fallback={<div className="page-fallback" />}>
        {/* key по pathname перезапускает анимацию перехода между страницами */}
        <div className="page" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="/news/:slug" element={<NewsArticlePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Suspense>
    </Layout>
  );
}
