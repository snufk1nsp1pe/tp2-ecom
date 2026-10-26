import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import ProductCard from '../components/ProductCard';
import { selectFavoriteProducts } from '../redux/selectors';

export default function FavoritesPage() {
  const favorites = useSelector(selectFavoriteProducts);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-forest">Your Favorites</h1>
      <p className="mt-1 text-sm italic text-muted">
        {favorites.length > 0
          ? `${favorites.length} item${favorites.length > 1 ? 's' : ''} you keep coming back to`
          : "You haven't favorited anything yet"}
      </p>

      {favorites.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="retro-border retro-shadow mt-8 flex flex-col items-center justify-center bg-card px-8 py-20 text-center">
          <Heart className="h-12 w-12 text-muted/40" strokeWidth={1} />
          <p className="mt-4 font-display text-xl text-forest">No favorites yet</p>
          <p className="mt-2 text-sm italic text-muted">
            Tap the heart icon on any product to save it here.
          </p>
          <Link to="/" className="mt-6">
            <Button variant="primary">Browse the shop</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
