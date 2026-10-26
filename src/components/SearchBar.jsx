import { Search, X } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search the catalogue..."
        className="retro-border w-full bg-card py-2.5 pl-9 pr-9 text-sm text-forest placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-coral/40"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-coral"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
