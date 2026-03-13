import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity">
          XILVER GAMES
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/games" className="text-sm font-medium hover:text-primary transition-colors">
            Games
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <Link href="/about" className="text-xs font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/games" className="text-xs font-medium hover:text-primary transition-colors">
            Games
          </Link>
        </div>
      </nav>
    </header>
  );
}
