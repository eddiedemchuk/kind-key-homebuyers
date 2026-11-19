import Link from 'next/link';
import SiteChrome from '@/components/SiteChrome';

/** Full-site 404. Offer landings use a lighter not-found so this chrome stays off their bundle. */
export default function MarketingNotFound() {
  return (
    <SiteChrome>
      <section className="flex min-h-screen items-center bg-primary py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-6xl font-bold text-text-primary">404</h1>
          <h2 className="mb-6 text-3xl font-semibold text-text-primary">Page Not Found</h2>
          <p className="mb-8 text-text-secondary">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-block rounded-lg bg-divider px-6 py-3 font-semibold text-white transition-colors hover:bg-divider/90"
          >
            Return to Home
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
