import type { Metadata } from "next";
import "./globals.css";

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
      </body>
    </html>
  );
}