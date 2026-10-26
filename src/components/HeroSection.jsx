import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="retro-border retro-shadow bg-card overflow-hidden px-8 py-12 md:px-12 md:py-16">
        <h1 className="font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-forest md:text-6xl lg:text-[4.25rem]">
          <em className="not-italic text-sage">Plants</em> for the aesthetics.
          <br />
          <em className="not-italic text-coral">Socks</em> for the
          <span className="italic text-golden"> personality</span>.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          We sell two things and we sell them well: greenery that actually
          survives your watering schedule, and socks strange enough to start
          conversations.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#shop">
            <Button size="lg" variant="primary">
              Enter the shop
            </Button>
          </a>
          <Link to="/favorites">
            <Button size="lg" variant="outline">
              View favorites
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
