import { cn } from '../../lib/utils';

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn('border border-border bg-card shadow-[var(--shadow)]', className)}
      {...props}
    >
      {children}
    </div>
  );
}
