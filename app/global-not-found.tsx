import NotFound from './(public)/not-found';
import RootDocument from '@/components/RootDocument';
import { rootMetadata } from '@/lib/root-metadata';
import './globals.css';

export const metadata = rootMetadata;

export default function GlobalNotFound() {
  return (
    <RootDocument>
      <NotFound />
    </RootDocument>
  );
}
