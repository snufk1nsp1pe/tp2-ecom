import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Heart, ShoppingBasket } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { ProductMark } from './ProductMark';
import { addToCart } from '../redux/cartSlice';
import { toggleFavorite } from '../redux/favoritesSlice';
import { selectIsFavorite } from '../redux/selectors';
import { formatPrice, cn } from '../lib/utils';

const CATEGORY_VARIANT = {
  Plants: 'sage',
  Socks: 'lavender',
  Accessories: 'golden',
};

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(product.id));
  const soldOut = product.stock <= 0;

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (soldOut) return;
    dispatch(addToCart({ productId: product.id, quantity: 1 }));
  };

  const handleToggleFavorite = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(toggleFavorite(product.id));
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <Card className="retro-border retro-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all overflow-hidden">
        <div className="relative aspect-[4/5] overflow-hidden border-b border-border bg-cream-dark">
          <ProductMark icon={product.icon} accent={product.accent} />

          {product.category && (
            <div className="absolute left-0 top-0">
              <Badge
                variant={CATEGORY_VARIANT[product.category] ?? 'muted'}
                className="rounded-none border-0 border-r border-b"
              >
                {product.category}
              </Badge>
            </div>
          )}

          <button
            type="button"
            onClick={handleToggleFavorite}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center bg-cream/90 border-b border-l border-border text-muted hover:text-coral transition-colors"
          >
            <Heart
              className={cn('h-4 w-4', isFavorite && 'fill-coral text-coral')}
            />
          </button>

          {product.originalPrice && (
            <div className="stamp absolute bottom-3 right-3 bg-cream/90 px-2 py-1 text-[0.6rem] font-bold uppercase">
              Sale
            </div>
          )}

          {soldOut && (
            <div className="absolute inset-0 flex items-center justify-center bg-cream/70">
              <span className="border border-forest px-3 py-1 text-xs uppercase tracking-[0.2em] text-forest">
                Sold out
              </span>
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="font-display text-lg font-semibold text-forest group-hover:text-coral transition-colors line-clamp-1">
            {product.name}
          </h3>

          <div className="mt-3 flex items-end justify-between border-t-2 border-forest/80 pt-3">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-xl font-bold text-coral">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-muted line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={soldOut}
              aria-label="Add to basket"
              className="flex items-center gap-1 text-xs uppercase tracking-[0.15em] text-muted hover:text-coral transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ShoppingBasket className="h-4 w-4" strokeWidth={1.5} />
              Add
            </button>
          </div>
        </div>
      </Card>
    </Link>
  );
}
