import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <Compass className="mx-auto h-16 w-16 text-muted/30" strokeWidth={1} />
      <h1 className="mt-4 font-display text-3xl font-bold text-forest">Lost in the greenhouse</h1>
      <p className="mt-2 italic text-muted">That page doesn't exist.</p>
      <Link to="/" className="mt-6 inline-block">
        <Button variant="primary">Back to the shop</Button>
      </Link>
    </div>
  );
}
