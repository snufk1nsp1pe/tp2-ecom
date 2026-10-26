import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const themeMode = useSelector((state) => state.theme.mode);

  // Reflect the global theme slice onto the <html> element so the
  // light/dark CSS variables defined in index.css take effect everywhere.
  useEffect(() => {
    document.documentElement.classList.toggle('dark', themeMode === 'dark');
  }, [themeMode]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
