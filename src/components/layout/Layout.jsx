import Header from './Header';
import Footer from './Footer';
import ScrollManager from './ScrollManager';

export default function Layout({ children }) {
  return (
    <>
      <a href="#main" className="visually-hidden">
        Перейти к содержимому
      </a>
      <ScrollManager />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
