import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingBasket, Heart, Menu, X, Moon, Sun } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { toggleTheme } from '../redux/themeSlice';
import { selectCartCount } from '../redux/selectors';
import { cn } from '../lib/utils';

const LINKS = [
  { to: '/', label: 'Shop' },
  { to: '/favorites', label: 'Favorites' },
  { to: '/cart', label: 'Basket' },
];

export default function Navbar() {
  // Mobile menu open/closed is purely local, component-only UI state.
  const [mobileOpen, setMobileOpen] = useState(false);

  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const favoritesCount = useSelector((state) => state.favorites.ids.length);
  const themeMode = useSelector((state) => state.theme.mode);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-forest/10 bg-cream">
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <BrandMark className="h-12 w-8 text-sage transition-colors group-hover:text-coral" />
          <div>
            <span className="font-display text-xl font-bold tracking-tight text-forest">
              Virestis
            </span>
            <span className="hidden text-[0.6rem] uppercase tracking-[0.25em] text-muted sm:block">
              Plants &amp; Socks
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-1.5 text-sm tracking-wide transition-colors',
                  isActive ? 'text-coral' : 'text-forest/80 hover:text-coral',
                )
              }
            >
              {link.label === 'Basket' && <ShoppingBasket className="h-4 w-4" strokeWidth={1.5} />}
              {link.label === 'Favorites' && <Heart className="h-4 w-4" strokeWidth={1.5} />}
              {link.label}
              {link.label === 'Basket' && cartCount > 0 && (
                <span className="rounded-full bg-coral px-1.5 text-[0.65rem] font-bold text-cream">
                  {cartCount}
                </span>
              )}
              {link.label === 'Favorites' && favoritesCount > 0 && (
                <span className="rounded-full bg-coral px-1.5 text-[0.65rem] font-bold text-cream">
                  {favoritesCount}
                </span>
              )}
            </NavLink>
          ))}

          <button
            type="button"
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle dark mode"
            className="text-forest/80 hover:text-coral transition-colors"
          >
            {themeMode === 'dark' ? (
              <Sun className="h-4 w-4" strokeWidth={1.5} />
            ) : (
              <Moon className="h-4 w-4" strokeWidth={1.5} />
            )}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => dispatch(toggleTheme())}
            aria-label="Toggle dark mode"
            className="p-2 text-forest"
          >
            {themeMode === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            className="p-2 text-forest"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'md:hidden border-t-2 border-forest/10 bg-cream overflow-hidden transition-all duration-300',
          mobileOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="flex flex-col gap-3 px-4 py-4">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-sm text-forest"
            >
              {link.label}
              {link.label === 'Basket' && cartCount > 0 && (
                <span className="rounded-full bg-coral px-1.5 text-[0.65rem] font-bold text-cream">
                  {cartCount}
                </span>
              )}
              {link.label === 'Favorites' && favoritesCount > 0 && (
                <span className="rounded-full bg-coral px-1.5 text-[0.65rem] font-bold text-cream">
                  {favoritesCount}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
