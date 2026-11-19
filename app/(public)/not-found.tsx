import Link from 'next/link';

/**
 * Shared by every route under the public layout, including the Google Ads
 * landings. Keep it free of the marketing chrome. prefetch is off so this
 * boundary does not download the homepage bundle on every offer page.
 */
export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-center text-text-primary">
      <div>
        <h1 className="text-3xl font-bold" style={{ marginBottom: 0 }}>
          Page not found
        </h1>
        <p className="mt-3 text-base text-text-secondary">This page is not on the site.</p>
        <Link
          href="/"
          prefetch={false}
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg bg-divider px-5 font-bold text-white"
        >
          KindKey Home Buyers
        </Link>
      </div>
    </main>
  );
}
