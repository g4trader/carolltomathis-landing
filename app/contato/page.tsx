const WHATSAPP_LINK =
  "https://wa.me/555184002284?text=Oi%20Carol,%20vim%20do%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.";

export default function ContatoPage() {
  return (
    <main className="relative pb-20">
      <section className="section pt-12 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <p className="text-label">Contato</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-champagne">
              Entre em contato
            </h1>
            <p className="text-base sm:text-lg text-champagne/80">
              Vamos conversar sobre como posso te ajudar no seu recomeço amoroso.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* WhatsApp */}
            <div className="card-soft space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-emerald/20 flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-champagne">WhatsApp</h3>
                  <p className="text-sm text-champagne/70">Resposta rápida</p>
                </div>
              </div>
              <p className="text-sm text-champagne/80">
                +55 (51) 8400-2284
              </p>
              <a
                href={WHATSAPP_LINK}
                className="btn-primary w-full text-center"
                target="_blank"
              >
                Abrir WhatsApp
              </a>
            </div>

            {/* E-mail */}
            <div className="card-soft space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-emerald/20 flex items-center justify-center">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-champagne">E-mail</h3>
                  <p className="text-sm text-champagne/70">Resposta em até 48h</p>
                </div>
              </div>
              <p className="text-sm text-champagne/80">
                mentoria@carolltomathis.com.br
              </p>
              <a
                href="mailto:mentoria@carolltomathis.com.br"
                className="btn-secondary w-full text-center"
              >
                Enviar E-mail
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="card-dark bg-cocoa/80 p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-emerald/20 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <h3 className="font-semibold text-champagne">Instagram</h3>
                <p className="text-sm text-champagne/70">Conteúdo diário</p>
              </div>
            </div>
            <p className="text-sm text-champagne/80">
              Acompanhe reflexões, áudios e cortes de aulas sobre relacionamentos,
              limites e autoestima no Instagram.
            </p>
            <a
              href="https://www.instagram.com/carolltomathis/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              Ver perfil no Instagram
            </a>
          </div>

          {/* Informação sobre mentoria */}
          <div className="card-soft space-y-4">
            <h3 className="text-lg font-semibold text-champagne">
              Sobre a mentoria
            </h3>
            <p className="text-sm text-champagne/80 leading-relaxed">
              A primeira conversa é gratuita e sem compromisso. É um momento para
              você entender seu momento, suas necessidades e como a mentoria pode
              te ajudar. Valores e formas de pagamento são combinados diretamente,
              respeitando a sua realidade.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

