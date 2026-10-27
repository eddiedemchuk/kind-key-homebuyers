import Image from 'next/image';

const HOUSE_ALT = 'House KindKey bought in the Puget Sound area';

const HOUSES_BOUGHT = [
  '/houses/house-01.webp',
  '/houses/house-02.webp',
  '/houses/house-03.webp',
  '/houses/house-04.webp',
  '/houses/house-05.webp',
] as const;

export default function HousesBought() {
  return (
    <section className="mt-8" aria-labelledby="houses-bought-heading">
      <h2 id="houses-bought-heading" className="text-xl font-bold">
        Houses we&apos;ve bought
      </h2>
      <ul className="mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-1">
        {HOUSES_BOUGHT.map((src) => (
          <li
            key={src}
            className="relative h-56 w-44 shrink-0 snap-start overflow-hidden rounded-lg"
          >
            <Image src={src} alt={HOUSE_ALT} fill sizes="176px" className="object-cover" />
          </li>
        ))}
      </ul>
    </section>
  );
}
