import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, Heart, PackageSearch, ShoppingBasket } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProductMark } from '../components/ProductMark';
import QuantityStepper from '../components/QuantityStepper';
import { getProductById } from '../data/products';
import { addToCart } from '../redux/cartSlice';
import { toggleFavorite } from '../redux/favoritesSlice';
import { selectIsFavorite } from '../redux/selectors';
import { formatPrice, cn } from '../lib/utils';

const CATEGORY_VARIANT = {
  Plants: 'sage',
  Socks: 'lavender',
  Accessories: 'golden',
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = getProductById(id);
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(Number(id)));

  // Local state: this quantity selector only matters until "Add to basket"
  // is pressed, so it doesn't belong in the Redux store.
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <PackageSearch className="mx-auto h-16 w-16 text-muted/30" strokeWidth={1} />
        <h1 className="mt-4 font-display text-2xl font-bold text-forest">Item not on the shelf</h1>
        <p className="mt-2 italic text-muted">Perhaps it was sold, or never existed.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-wider text-coral hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Return to shop
        </Link>
      </div>
    );
  }

  const soldOut = product.stock <= 0;

  const handleAddToCart = () => {
    if (soldOut) return;
    dispatch(addToCart({ productId: product.id, quantity }));
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted hover:text-coral transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to catalogue
      </Link>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Card className="retro-border retro-shadow overflow-hidden">
          <div className="relative aspect-[4/5]">
            <ProductMark icon={product.icon} accent={product.accent} iconClassName="h-24 w-24" />
            <button
              type="button"
              onClick={() => dispatch(toggleFavorite(product.id))}
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-cream/90 border border-border text-muted hover:text-coral transition-colors"
            >
              <Heart className={cn('h-5 w-5', isFavorite && 'fill-coral text-coral')} />
            </button>
          </div>
        </Card>

        <div className="flex flex-col justify-center">
          {product.category && (
            <Badge variant={CATEGORY_VARIANT[product.category] ?? 'muted'} className="mb-5 w-fit">
              {product.category}
            </Badge>
          )}
          <h1 className="font-display text-3xl font-bold leading-tight text-forest md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted italic md:text-lg">
            {product.description}
          </p>

          <div className="mt-8 flex items-baseline gap-3 border-t-2 border-forest/80 pt-6">
            <span className="font-display text-4xl font-bold text-coral">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <p className="mt-3 text-sm">
            <span className={soldOut ? 'text-coral font-medium' : 'text-sage-dark font-medium'}>
              {soldOut ? 'Currently unavailable' : `${product.stock} remaining on shelf`}
            </span>
          </p>

          {!soldOut && (
            <div className="mt-6">
              <QuantityStepper
                quantity={quantity}
                max={product.stock}
                onIncrement={() => setQuantity((q) => Math.min(q + 1, product.stock))}
                onDecrement={() => setQuantity((q) => Math.max(q - 1, 1))}
              />
            </div>
          )}

          <div className="mt-8">
            <Button onClick={handleAddToCart} size="lg" variant="primary" disabled={soldOut} className="gap-2">
              <ShoppingBasket className="h-5 w-5" strokeWidth={1.5} />
              {soldOut ? 'Sold out' : justAdded ? 'Added!' : 'Add to basket'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
