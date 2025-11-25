const WHATSAPP_LINK =
  "https://wa.me/555184002284?text=Oi%20Carol,%20vim%20do%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.";

export default function SobrePage() {
  return (
    <main className="relative pb-20">
      <section className="section pt-12 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-label">Sobre</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-champagne">
              Quem é a Carol
            </h1>
          </div>

          <div className="space-y-6 text-champagne/90 leading-relaxed">
            <p className="text-base sm:text-lg">
              Conteúdo diário, conversa direta e uma mentoria que nasceu da vida real.
            </p>

            <p className="text-sm sm:text-base">
              No Instagram, Carol compartilha reflexões, áudios e cortes de aulas
              sobre segundos relacionamentos, limites e autoestima. As dúvidas das
              seguidoras viraram a base da mentoria que hoje acompanha mulheres
              do Brasil inteiro no recomeço amoroso.
            </p>

            <p className="text-sm sm:text-base">
              Aqui não tem frase pronta. É olhar para a sua história com honestidade
              e delicadeza, para construir decisões mais maduras sem perder a leveza
              de acreditar no amor de novo.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 pt-8">
            <div className="card-soft space-y-3">
              <h3 className="text-lg font-semibold text-champagne">
                Missão
              </h3>
              <p className="text-sm text-champagne/80">
                Acompanhar mulheres em fase de recomeço amoroso, oferecendo orientação
                e reflexão guiada para que construam relacionamentos mais conscientes
                e saudáveis.
              </p>
            </div>

            <div className="card-soft space-y-3">
              <h3 className="text-lg font-semibold text-champagne">
                Valores
              </h3>
              <p className="text-sm text-champagne/80">
                Honestidade, delicadeza, linguagem real e sem julgamentos. Acreditar
                que é possível reescrever a própria história amorosa com consciência.
              </p>
            </div>
          </div>

          <div className="card-dark bg-cocoa/80 p-8 space-y-4 mt-8">
            <h3 className="font-display text-2xl font-semibold text-champagne">
              Para mulheres fortes que decidiram viver relações igualmente fortes.
            </h3>
            <p className="text-sm text-champagne/80">
              Se você está em um momento de recomeço e quer construir relacionamentos
              mais conscientes, entre em contato para uma conversa inicial.
            </p>
            <a
              href={WHATSAPP_LINK}
              className="btn-primary inline-block"
              target="_blank"
            >
              Falar com a Carol
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

