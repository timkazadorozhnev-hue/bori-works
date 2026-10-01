import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { ArrowIcon } from '../components/ui/Icons';
import './NotFoundPage.css';

export default function NotFoundPage() {
  usePageMeta({ title: 'Страница не найдена' });

  return (
    <section className="notfound">
      <div className="container">
        <p className="eyebrow">Ошибка 404 · Сцена вырезана при монтаже</p>
        <h1 className="h-display notfound__code">404</h1>
        <p className="h-lg notfound__text">
          Такой страницы нет. <span className="serif">Но у нас есть много других историй.</span>
        </p>
        <Link to="/" className="btn btn--solid">
          На главную <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
