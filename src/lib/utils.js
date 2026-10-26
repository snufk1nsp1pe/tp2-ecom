import clsx from 'clsx';

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}
