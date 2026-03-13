import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">Xilver Games</h3>
            <p className="text-sm text-foreground/70">Creating immersive gaming experiences and interactive worlds.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Games
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-primary">Connect</h4>
            <p className="text-sm text-foreground/70 mb-2">Follow us on social media for updates and announcements.</p>
            <div className="flex gap-3">
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 19c11 0 17-9 17-17v-1c1-1 2-2 3-3-1 0-2 1-3 1 1-1 2-2 3-3-1 0-2 1-3 1 1-1 2-2 3-3-1 0-2 1-3 1" />
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <span className="sr-only">Discord</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.492c-1.53-.752-3.646-.91-3.646-.91s-.182-.214-.398-.52a14.768 14.768 0 00-3.273 0c-.216.306-.398.52-.398.52s-2.117.158-3.646.91c-1.052.512-2.313 2.093-2.313 4.914v5.604c0 0 1.344 2.328 3.883 2.434.276-.384.457-.834.579-1.324a4.07 4.07 0 01-.666-1.258c.353.268.816.564 1.405.783-.6.278-1.24.664-1.797 1.22.59.09 1.211.137 1.855.137.645 0 1.266-.047 1.856-.137-.557-.556-1.197-.942-1.798-1.22.589-.219 1.052-.515 1.405-.783a4.07 4.07 0 01-.667 1.258c.122.49.303.94.579 1.324 2.539-.106 3.883-2.434 3.883-2.434v-5.604c0-2.82-1.26-4.402-2.313-4.914z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-foreground/50">
            © {currentYear} Xilver Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
