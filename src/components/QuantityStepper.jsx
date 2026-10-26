import { Minus, Plus } from 'lucide-react';

export default function QuantityStepper({
  quantity,
  onIncrement,
  onDecrement,
  min = 1,
  max = Infinity,
}) {
  return (
    <div className="flex items-center gap-1 bg-cream-dark/50 p-1">
      <button
        type="button"
        onClick={onDecrement}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="flex h-8 w-8 items-center justify-center text-forest hover:text-coral disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-8 text-center text-sm font-medium">{quantity}</span>
      <button
        type="button"
        onClick={onIncrement}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className="flex h-8 w-8 items-center justify-center text-forest hover:text-coral disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
