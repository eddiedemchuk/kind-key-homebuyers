import Link from 'next/link';
import type { CityNearby } from '@/data/cities';
import type { CityIntentBlock } from '@/data/expansionCityIntent';

export default function CityIntentBody({
  block,
  nearby = [],
}: {
  block: CityIntentBlock;
  nearby?: CityNearby[];
}) {
  return (
    <div className="max-w-none text-text-secondary">
      {block.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 64)} className="mb-4 text-lg">
          {paragraph}
        </p>
      ))}
      <h3 className="mb-3 text-xl font-semibold text-text-primary">Related pages</h3>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-lg">
        {block.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="font-semibold text-divider hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
        {nearby.map((city) => (
          <li key={city.slug}>
            <Link
              href={`/areas/${city.slug}`}
              className="font-semibold text-divider hover:underline"
            >
              Sell a house in {city.name}
            </Link>
            {': '}
            {city.relation}
          </li>
        ))}
      </ul>
      <p className="text-lg">
        Call{' '}
        <a href="tel:+12065195463" className="font-semibold text-divider hover:underline">
          (206) 519-5463
        </a>{' '}
        or{' '}
        <Link href="/cash-offer" className="font-semibold text-divider hover:underline">
          request a cash offer
        </Link>
        . You can say no after you see the number.
      </p>
    </div>
  );
}
