import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { redirectToStoredLang } from './i18n/config';
// Глобальные стили подключаются первыми, чтобы стили компонентов могли их переопределять.
import './styles/global.css';
import App from './App';

// Возвращаем посетителя на ранее выбранный язык до первого рендера (без мигания).
redirectToStoredLang();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
