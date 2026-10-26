import { useDispatch } from 'react-redux';
import { Trash2 } from 'lucide-react';
import { Card } from './ui/Card';
import { ProductMark } from './ProductMark';
import QuantityStepper from './QuantityStepper';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cartSlice';
import { formatPrice } from '../lib/utils';

export default function CartItemRow({ item }) {
  const dispatch = useDispatch();
  const { product, quantity, lineTotal } = item;

  return (
    <Card className="retro-border retro-shadow flex gap-4 p-4 sm:gap-6 sm:p-5">
      <div className="retro-border h-20 w-20 shrink-0 overflow-hidden sm:h-24 sm:w-24">
        <ProductMark icon={product.icon} accent={product.accent} iconClassName="h-9 w-9" />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display font-semibold text-forest">{product.name}</h3>
            <p className="text-sm text-muted">{formatPrice(product.price)} each</p>
          </div>
          <p className="font-bold text-coral">{formatPrice(lineTotal)}</p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <QuantityStepper
            quantity={quantity}
            max={product.stock}
            onIncrement={() => dispatch(incrementQuantity(product.id))}
            onDecrement={() => dispatch(decrementQuantity(product.id))}
          />
          <button
            type="button"
            onClick={() => dispatch(removeFromCart(product.id))}
            className="flex items-center gap-1.5 text-sm text-muted hover:text-coral transition-colors"
          >
            <Trash2 className="h-4 w-4" />
            Remove
          </button>
        </div>
      </div>
    </Card>
  );
}
