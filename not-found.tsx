import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="relative min-h-screen flex items-center justify-center border-b border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 py-20">
          <div className="mb-8">
            <div className="text-9xl font-bold text-primary mb-4">404</div>
            <h1 className="text-5xl font-bold mb-4">Page Not Found</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="px-8 py-3 bg-primary text-background font-semibold rounded-md hover:bg-primary-dark transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/games"
              className="px-8 py-3 border border-primary text-primary font-semibold rounded-md hover:bg-primary/10 transition-colors"
            >
              Explore Games
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
