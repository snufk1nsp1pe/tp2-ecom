import { ArrowUpDown } from 'lucide-react';

const OPTIONS = [
  { value: 'default', label: 'Featured' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'name-asc', label: 'Name: A to Z' },
];

export default function SortSelect({ value, onChange }) {
  return (
    <label className="flex items-center gap-2 text-sm text-muted">
      <ArrowUpDown className="h-4 w-4" />
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="retro-border bg-card py-2 pl-2 pr-6 text-xs uppercase tracking-wider text-forest focus:outline-none focus:ring-2 focus:ring-coral/40"
      >
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
