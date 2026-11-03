export const siteNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/areas', label: 'Areas' },
  { href: '/success', label: 'Success Stories' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function isActivePath(pathname: string | null | undefined, href: string) {
  if (!pathname) return false;
  if (href === '/') {
    return pathname === '/';
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
