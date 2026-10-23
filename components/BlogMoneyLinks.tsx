import Link from 'next/link';
import { citiesByCounty } from '@/data/cities';
import { getCitySituationLinks } from '@/data/citySituations';
import { situations } from '@/data/situations';

const intentLinks = [
  { slug: 'sell-my-house-fast', label: 'Sell fast' },
  { slug: 'cash-offer', label: 'Cash offer' },
  { slug: 'sell-house-as-is', label: 'Sell as-is' },
] as const;

export default function BlogMoneyLinks() {
  const groups = citiesByCounty();

  return (
    <section className="border-t border-divider bg-secondary py-16">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-semibold text-text-primary">
          Cities and situations KindKey buys
        </h2>
        <p className="mb-8 text-text-secondary">
          KindKey Home Buyers LLC is a principal buyer in King County, Pierce County, and Kitsap
          County, based at 640 1st St SW in Auburn. KindKey is not a real estate agent. Start with
          the city or the situation that matches the house, or{' '}
          <Link href="/cash-offer" className="font-semibold text-divider hover:underline">
            request a cash offer
          </Link>
          .
        </p>

        {groups.map((group) => (
          <div key={group.group} className="mb-8">
            <h3 className="mb-3 text-lg font-semibold text-text-primary">{group.label}</h3>
            <ul className="space-y-4">
              {group.cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/areas/${city.slug}`}
                    className="font-semibold text-divider hover:underline"
                  >
                    Sell a house in {city.name}
                  </Link>
                  <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-secondary">
                    {intentLinks.map((intent) => (
                      <li key={intent.slug}>
                        <Link
                          href={`/areas/${city.slug}/${intent.slug}`}
                          className="hover:text-divider hover:underline"
                        >
                          {intent.label}
                        </Link>
                      </li>
                    ))}
                    {getCitySituationLinks(city.slug).map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="hover:text-divider hover:underline">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <h3 className="mb-3 text-lg font-semibold text-text-primary">
          Situations across the counties
        </h3>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {situations.map((situation) => (
            <li key={situation.path}>
              <Link href={situation.path} className="text-divider hover:underline">
                {situation.h1}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
