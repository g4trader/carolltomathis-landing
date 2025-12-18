import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WHATSAPP_LINK =
  "https://wa.me/555184002284?text=Oi%20Carol,%20vim%20do%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.";

export const metadata: Metadata = {
  title: "Caroll Tomathis: Mentoria de Relacionamentos",
  description:
    "Landing page premium da mentoria de relacionamentos da Caroll Tomathis, com foco em mulheres que decidiram reescrever a própria história amorosa com consciência.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-85F9J6EZ3G"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-85F9J6EZ3G');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-espresso text-champagne antialiased flex flex-col">
        {/* Fundo cinematográfico com luz e grão */}
        <div className="fixed inset-0 -z-30 bg-gradient-to-b from-black via-espresso to-black" />
        <div className="pointer-events-none fixed inset-0 -z-20">
          <div className="absolute -left-40 top-[-10%] h-80 w-80 rounded-full bg-nude/40 blur-3xl" />
          <div className="absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-blush/40 blur-3xl" />
          <div className="absolute left-[10%] bottom-[-10%] h-80 w-80 rounded-full bg-cocoa/60 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute -inset-10 animate-grain bg-grain" />
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-champagne/15 blur-3xl animate-light-flow" />
          </div>
        </div>

        <Header />
        
        <main className="flex-1">
          {children}
        </main>

        <Footer />

        {/* Botão flutuante de WhatsApp */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          className="fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-white shadow-cinematic transition hover:bg-emerald/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald"
          aria-label="Falar com a Caroll no WhatsApp"
        >
          <span className="text-2xl">💬</span>
        </a>
      </body>
    </html>
  );
}