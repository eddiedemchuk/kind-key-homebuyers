/**
 * Below-the-fold thumbnails. Image optimization is off, so these files are the
 * bytes a phone downloads. Native lazy load keeps them off the first paint.
 */
const HOUSES_BOUGHT = [
  { src: '/houses/house-01.webp', width: 400, height: 300 },
  { src: '/houses/house-02.webp', width: 400, height: 460 },
  { src: '/houses/house-03.webp', width: 400, height: 534 },
  { src: '/houses/house-04.webp', width: 400, height: 442 },
  { src: '/houses/house-05.webp', width: 400, height: 300 },
] as const;

const HOUSE_ALT = 'House KindKey bought in the Puget Sound area';

export default function HousesBought() {
  return (
    <section
      className="mt-8 [contain-intrinsic-size:auto_20rem] [content-visibility:auto]"
      aria-labelledby="houses-bought-heading"
    >
      <h2 id="houses-bought-heading" className="text-xl font-bold">
        Houses we&apos;ve bought
      </h2>
      <p className="mt-1 text-sm font-semibold leading-snug">
        A small, local family-owned business
      </p>
      <ul className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-1">
        {HOUSES_BOUGHT.map((house) => (
          <li key={house.src} className="h-56 w-44 shrink-0 snap-start overflow-hidden rounded-lg">
            {/* Native img: /_next/image is disabled, so this file is what the phone downloads. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={house.src}
              alt={HOUSE_ALT}
              width={house.width}
              height={house.height}
              loading="lazy"
              decoding="async"
              // React 18 does not map fetchPriority, so the HTML attribute has to be lowercase.
              {...{ fetchpriority: 'low' }}
              className="h-full w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
