# Virestis

A small e-commerce storefront for plants and peculiar socks, built as a lab
project to practice **React.js** fundamentals and **Redux** global state
management.

> **Student:** Naceri Rim Serine
> **Application / store name:** Virestis
> **Description:** A component-based React storefront where visitors can
> browse a catalogue of plants and socks, search/filter/sort
> the catalogue, manage a shopping basket, and save favorites — all backed
> by a Redux store. No backend, database, or authentication is used; the
> product catalogue is static data (`src/data/products.js`), as specified
> by the lab brief.

## Technologies used

| Tool / Library | Purpose |
| --- | --- |
| [React 19](https://react.dev) | UI library (components, JSX, props, state, events) |
| [Vite](https://vitejs.dev) | Dev server / build tool |
| [Redux Toolkit](https://redux-toolkit.js.org) | Global store, slices (actions + reducers) |
| [React-Redux](https://react-redux.js.org) | Connects React components to the Redux store (`useSelector`/`useDispatch`) |
| [React Router](https://reactrouter.com) | Client-side navigation between pages |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [lucide-react](https://lucide.dev) | Icons |

## Main React components

- `Navbar` — brand, navigation links, live cart/favorites counts, dark-mode toggle, mobile menu.
- `HeroSection` — landing banner on the home page.
- `ProductCard` — catalogue tile with add-to-cart and favorite toggle (`props`-driven).
- `ProductMark` — illustrated placeholder tile for a product (icon + accent color).
- `SearchBar`, `CategoryFilter`, `SortSelect` — controlled filter inputs for the catalogue (local state lives in `HomePage`, passed down via props).
- `QuantityStepper` — reusable +/- quantity control, used on both the product page and the cart.
- `CartItemRow` — a single line item in the basket, dispatches Redux actions to update/remove itself.
- `Footer`, `Badge`, `Button`, `Card` — small presentational building blocks.

## Pages (routes)

| Route | Component | Description |
| --- | --- | --- |
| `/` | `HomePage` | Catalogue with search, category filter, and sort |
| `/product/:id` | `ProductDetailPage` | Product details, quantity picker, add to basket |
| `/cart` | `CartPage` | Basket contents, quantity management, totals, clear basket |
| `/favorites` | `FavoritesPage` | Saved/favorited products |
| `*` | `NotFoundPage` | Fallback 404 |

## Redux state managed

The store (`src/redux/store.js`) combines three slices, each created with
Redux Toolkit's `createSlice` (which generates the action creators and the
reducer together):

- **`cart`** (`cartSlice.js`) — array of `{ productId, quantity }`.
  Actions: `addToCart`, `removeFromCart`, `incrementQuantity`,
  `decrementQuantity`, `setQuantity`, `clearCart`.
- **`favorites`** (`favoritesSlice.js`) — array of favorited product ids.
  Actions: `toggleFavorite`, `clearFavorites`.
- **`theme`** (`themeSlice.js`) — `'light' | 'dark'`. Actions: `toggleTheme`, `setTheme`.

`src/redux/selectors.js` combines the normalized cart/favorites state with
the static product catalogue (e.g. `selectCartDetails`, `selectCartCount`,
`selectCartSubtotal`, `selectCartSavings`, `selectFavoriteProducts`).

**Local component state** (`useState`) is used anywhere global access isn't
needed: the search/category/sort controls on the home page, the quantity
selector before adding to cart, and the mobile menu toggle in the navbar.

## Implemented features

Required:
- Multiple reusable components, JSX, props, local state, and event handling.
- Product catalogue with product details, add/remove from cart, and a
  dynamically updating UI as the Redux cart state changes.
- A Redux store with actions and reducers, read via `useSelector` and
  updated via `useDispatch` from React components.

Optional (implemented):
- 🔍 Product search
- 🏷️ Category filtering (Plants / Socks / Accessories)
- 📄 Product detail pages
- 🔢 Quantity management (stock-aware stepper, both on the product page and in the cart)
- 💰 Cart subtotal + savings total
- ❤️ Favorites (Redux-backed, with its own page)
- ↕️ Product sorting (price / name)
- 🌗 Dark / light mode (Redux-backed, persisted)
- 🧭 Simple navigation (React Router)
- 💾 LocalStorage persistence for cart, favorites, and theme
- 🏷️ Discount display (strikethrough original price + "Sale" stamp on select items)

## Instructions for running the application

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# production build
npm run build

# preview the production build
npm run preview
```

No environment variables, database, or backend setup is required — this
lab intentionally ships with a static in-memory/local-storage product and
cart model. A backend, database, authentication, and payment system are
expected in a later lab.
