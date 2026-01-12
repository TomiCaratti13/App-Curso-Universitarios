import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './assets/css/style.css';

export const Year2025 = () => {
  return (
    <div className="app-2025">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
