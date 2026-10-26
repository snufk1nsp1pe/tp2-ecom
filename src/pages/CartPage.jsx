import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingBasket, Trash2 } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import CartItemRow from '../components/CartItemRow';
import { clearCart } from '../redux/cartSlice';
import {
  selectCartDetails,
  selectCartSubtotal,
  selectCartSavings,
} from '../redux/selectors';
import { formatPrice } from '../lib/utils';

export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartDetails);
  const subtotal = useSelector(selectCartSubtotal);
  const savings = useSelector(selectCartSavings);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-forest">Your Basket</h1>
      <p className="mt-1 text-sm italic text-muted">
        {items.length > 0
          ? `${items.length} item${items.length > 1 ? 's' : ''} awaiting purchase`
          : 'Nothing here yet, go waste your money on our products'}
      </p>

      {items.length > 0 ? (
        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <CartItemRow key={item.productId} item={item} />
          ))}

          <Card className="retro-border retro-shadow mt-8 overflow-hidden p-6">
            {savings > 0 && (
              <div className="flex items-center justify-between text-sm text-sage-dark">
                <span>You're saving</span>
                <span className="font-semibold">{formatPrice(savings)}</span>
              </div>
            )}
            <div className="mt-2 flex items-center justify-between">
              <span className="text-lg font-medium text-forest">Total</span>
              <span className="font-display text-3xl font-bold text-coral">
                {formatPrice(subtotal)}
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="primary"
                className="flex-1 gap-2"
                onClick={() =>
                  window.alert(
                    'Checkout is not part of this lab: it will be wired up once a backend and payment system are introduced.',
                  )
                }
              >
                Checkout
              </Button>
              <Button size="lg" variant="outline" onClick={() => dispatch(clearCart())} className="gap-2">
                <Trash2 className="h-4 w-4" />
                Clear basket
              </Button>
            </div>
          </Card>
        </div>
      ) : (
        <div className="retro-border retro-shadow mt-8 flex flex-col items-center justify-center bg-card px-8 py-20 text-center">
          <ShoppingBasket className="h-12 w-12 text-muted/40" strokeWidth={1} />
          <p className="mt-4 font-display text-xl text-forest">Basket is empty</p>
          <p className="mt-2 text-sm italic text-muted">
            Wander the catalogue. Pick a fern or a pair of socks.
          </p>
          <Link to="/" className="mt-6">
            <Button variant="primary">Browse the shop</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
