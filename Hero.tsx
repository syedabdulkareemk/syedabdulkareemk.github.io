import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
    secondary?: {
      text: string;
      href: string;
    };
  };
}

export function Hero({ title, subtitle, description, cta }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 opacity-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 py-20">
        {subtitle && (
          <p className="text-sm md:text-base font-semibold text-primary mb-4 uppercase tracking-wider">
            {subtitle}
          </p>
        )}

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
          {title}
        </h1>

        {description && (
          <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            {description}
          </p>
        )}

        {cta && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={cta.href}
              className="px-8 py-3 bg-primary text-background font-semibold rounded-md hover:bg-primary-dark transition-colors"
            >
              {cta.text}
            </Link>
            {cta.secondary && (
              <Link
                href={cta.secondary.href}
                className="px-8 py-3 border border-primary text-primary font-semibold rounded-md hover:bg-primary/10 transition-colors"
              >
                {cta.secondary.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
