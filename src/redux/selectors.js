import { products } from '../data/products';

function findProduct(productId) {
  return products.find((p) => p.id === productId) ?? null;
}

// Combines the normalized cart slice (productId + quantity) with the static
// product catalogue to produce ready-to-render cart rows.
export function selectCartDetails(state) {
  return state.cart.items
    .map((item) => {
      const product = findProduct(item.productId);
      if (!product) return null;
      return {
        ...item,
        product,
        lineTotal: product.price * item.quantity,
      };
    })
    .filter(Boolean);
}

export function selectCartCount(state) {
  return state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
}

export function selectCartSubtotal(state) {
  return selectCartDetails(state).reduce(
    (sum, item) => sum + item.lineTotal,
    0,
  );
}

export function selectCartSavings(state) {
  return selectCartDetails(state).reduce((sum, item) => {
    if (!item.product.originalPrice) return sum;
    return (
      sum + (item.product.originalPrice - item.product.price) * item.quantity
    );
  }, 0);
}

export function selectFavoriteProducts(state) {
  return state.favorites.ids
    .map((id) => findProduct(id))
    .filter(Boolean);
}

export function selectIsFavorite(productId) {
  return (state) => state.favorites.ids.includes(productId);
}
