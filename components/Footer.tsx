import Link from 'next/link';

const WHATSAPP_LINK =
  "https://wa.me/555184002284?text=Oi%20Carol,%20vim%20do%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.";

export default function Footer() {
  return (
    <footer className="border-t border-champagne/10 bg-cocoa/50 backdrop-blur-sm">
      <div className="section py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Sobre */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-champagne mb-4">
              Carol Tomathis
            </h3>
            <p className="text-sm text-champagne/70 leading-relaxed">
              Mentora de relacionamentos para mulheres fortes que decidiram viver relações igualmente fortes.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-champagne mb-4">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-champagne/70 hover:text-champagne transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm text-champagne/70 hover:text-champagne transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-champagne/70 hover:text-champagne transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-champagne/70 hover:text-champagne transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-champagne mb-4">
              Contato
            </h3>
            <ul className="space-y-2 text-sm text-champagne/70">
              <li>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-champagne transition-colors"
                >
                  WhatsApp: +55 (51) 8400-2284
                </a>
              </li>
              <li>
                <a 
                  href="mailto:mentoria@carolltomathis.com.br"
                  className="hover:text-champagne transition-colors"
                >
                  E-mail: mentoria@carolltomathis.com.br
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/carolltomathis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-champagne transition-colors"
                >
                  Instagram: @carolltomathis
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-champagne/10 text-center">
          <p className="text-xs text-champagne/50">
            © {new Date().getFullYear()} Carol Tomathis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

