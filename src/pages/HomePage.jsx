import { useMemo, useState } from 'react';
import { PackageSearch } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import SortSelect from '../components/SortSelect';
import { products, CATEGORIES } from '../data/products';

export default function HomePage() {
  // All of this is local component state: it only affects what this page
  // renders and nothing else in the app needs to read or change it.
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('default');

  const visibleProducts = useMemo(() => {
    let list = products;

    if (category !== 'All') {
      list = list.filter((product) => product.category === category);
    }

    const query = search.trim().toLowerCase();
    if (query) {
      list = list.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query),
      );
    }

    const sorted = [...list];
    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    if (sort === 'name-asc') sorted.sort((a, b) => a.name.localeCompare(b.name));

    return sorted;
  }, [search, category, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <HeroSection />

      <section id="shop" className="mt-24 scroll-mt-28">
        <div className="vintage-rule px-6 py-5 md:px-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-forest">the catalogue</h2>
            <p className="text-xsm italic text-muted">everything on the shelves</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SearchBar value={search} onChange={setSearch} />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <CategoryFilter categories={CATEGORIES} value={category} onChange={setCategory} />
            <SortSelect value={sort} onChange={setSort} />
          </div>
        </div>

        {visibleProducts.length === 0 ? (
          <div className="mt-12 retro-border flex flex-col items-center gap-2 bg-card px-8 py-20 text-center">
            <PackageSearch className="h-12 w-12 text-muted/40" strokeWidth={1} />
            <p className="font-display text-2xl text-forest">Shelves are bare</p>
            <p className="text-sm italic text-muted">
              Nothing matches that search. Try a different term or category.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
