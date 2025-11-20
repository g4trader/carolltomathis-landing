import type { Metadata } from "next";
import "./globals.css";

const WHATSAPP_LINK =
  "https://wa.me/555184002284?text=Oi%20Carol,%20vim%20do%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.";

export const metadata: Metadata = {
  title: "Mentoria de Relacionamentos | Carol Tomathis",
  description:
    "Transforme sua vida amorosa com a mentoria de relacionamentos da Carol Tomathis. Atendimento acolhedor e prático com foco no seu próximo capítulo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}

        {/* Botão flutuante de WhatsApp */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          className="fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-soft transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          aria-label="Falar com a Carol no WhatsApp"
        >
          <span className="text-2xl">💬</span>
        </a>
      </body>
    </html>
  );
}