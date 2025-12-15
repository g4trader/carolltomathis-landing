'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/' || pathname === '/v2';
    }
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-champagne/10 bg-espresso/95 backdrop-blur-sm">
      <nav className="section flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="font-display text-xl font-semibold text-champagne hover:text-nude transition-colors">
          Caroll Tomathis
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-emerald' 
                  : 'text-champagne/80 hover:text-champagne'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className={`text-sm font-medium transition-colors ${
                isActive('/sobre') 
                  ? 'text-emerald' 
                  : 'text-champagne/80 hover:text-champagne'
              }`}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className={`text-sm font-medium transition-colors ${
                isActive('/contato') 
                  ? 'text-emerald' 
                  : 'text-champagne/80 hover:text-champagne'
              }`}
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors ${
                isActive('/blog') 
                  ? 'text-emerald' 
                  : 'text-champagne/80 hover:text-champagne'
              }`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

