import { cn } from '../lib/utils';

export default function CategoryFilter({ categories, value, onChange }) {
  const options = ['All', ...categories];

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={cn(
            'retro-border px-3 py-1.5 text-xs uppercase tracking-[0.15em] transition-colors',
            value === option
              ? 'bg-forest text-cream'
              : 'bg-card text-forest hover:bg-cream-dark',
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
