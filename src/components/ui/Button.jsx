import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const variants = {
  primary:
    'retro-border retro-shadow bg-coral text-cream border-coral hover:bg-coral-light hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all',
  secondary:
    'retro-border retro-shadow bg-sage text-cream border-sage hover:bg-sage-light hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all',
  outline:
    'retro-border retro-shadow border-forest/30 text-forest bg-transparent hover:border-coral hover:text-coral hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all',
  ghost:
    'border border-transparent text-forest hover:text-coral hover:bg-cream-dark/60 transition-all',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs uppercase tracking-wider',
  md: 'px-5 py-2.5 text-sm uppercase tracking-wider',
  lg: 'px-7 py-3.5 text-sm uppercase tracking-widest',
};

export const Button = forwardRef(function Button(
  {
    className,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled,
    children,
    ...props
  },
  ref,
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-sm',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
      {children}
    </button>
  );
});
