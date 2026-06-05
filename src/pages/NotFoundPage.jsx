import { Link } from 'react-router-dom';
import Seo from '@/lib/Seo';
import Button from '@/components/ui/Button';

export default function NotFoundPage() {
  return (
    <>
      <Seo path="/404" title="Page not found" />
      <section className="container-px flex min-h-[70vh] flex-col items-center justify-center text-center">
        <span className="font-display text-8xl font-bold text-gradient">404</span>
        <h1 className="mt-4 font-display text-2xl font-bold">Page not found</h1>
        <p className="mt-2 max-w-sm text-muted">The page you're looking for doesn't exist or has moved.</p>
        <Button to="/" className="mt-8">Back to home</Button>
      </section>
    </>
  );
}
