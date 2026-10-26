import { cn } from '../../lib/utils';

const variants = {
  sage: 'bg-sage/10 text-sage-dark border-sage/40',
  coral: 'bg-coral/10 text-coral border-coral/40',
  lavender: 'bg-lavender/10 text-lavender border-lavender/40',
  golden: 'bg-golden/15 text-forest border-golden/50',
  teal: 'bg-teal/10 text-teal border-teal/40',
  muted: 'bg-cream-dark text-muted border-border',
};

export function Badge({ className, variant = 'sage', children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center border px-2 py-0.5 text-[0.65rem] font-bold tracking-[0.15em] uppercase',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
