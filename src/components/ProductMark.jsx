import { Leaf, Sprout, TreeDeciduous, Flower2, Package, Droplets } from 'lucide-react';
import { SockIcon } from './icons/SockIcon';
import { cn } from '../lib/utils';

const ICONS = {
  leaf: Leaf,
  sprout: Sprout,
  tree: TreeDeciduous,
  fern: Flower2,
  pot: Package,
  'watering-can': Droplets,
  sock: SockIcon,
};

const ACCENTS = {
  sage: 'bg-sage/15 text-sage-dark',
  coral: 'bg-coral/15 text-coral',
  golden: 'bg-golden/20 text-forest',
  lavender: 'bg-lavender/15 text-lavender',
  teal: 'bg-teal/15 text-teal',
  muted: 'bg-cream-dark text-muted',
};

/**
 * Illustrated placeholder tile used instead of a product photo. Keeps the
 * catalogue visually consistent without depending on external images.
 */
export function ProductMark({ icon, accent = 'sage', className, iconClassName = 'h-16 w-16' }) {
  const Icon = ICONS[icon] ?? Leaf;
  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center',
        ACCENTS[accent] ?? ACCENTS.sage,
        className,
      )}
    >
      <Icon className={iconClassName} strokeWidth={1} />
    </div>
  );
}
