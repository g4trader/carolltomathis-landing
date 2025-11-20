const WHATSAPP_LINK =
  "https://wa.me/555184002284?text=Oi%20Carol,%20vim%20do%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.";

const testimonials = [
  {
    name: "Marina, 38",
    role: "Empresária",
    text: "Achei que o problema era sempre eu. Hoje tenho clareza sobre meus padrões e nunca mais aceitei menos do que eu mereço.",
    img: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Patrícia, 42",
    role: "Psicóloga",
    text: "A mentoria me deu coragem para encerrar um relacionamento que me drenava e começar um ciclo muito mais saudável comigo mesma.",
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Renata, 33",
    role: "Advogada",
    text: "Eu entrei devastada após o divórcio e saí com um mapa de quem eu sou, do que aceito e do que não negocio mais em relações.",
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const reels = [
  {
    title: "A mulher durona e as máscaras emocionais",
    url: "https://www.instagram.com/reel/CyjQJzbPwmC/embed"
  },
  {
    title: "Quando a briga vira silêncio que afasta",
    url: "https://www.instagram.com/reel/DPBsrqNDNw4/embed"
  },
  {
    title: "Para entrar em um relacionamento de verdade",
    url: "https://www.instagram.com/reel/DQorUa1ADRs/embed"
  }
];

export default function Page() {
  return (
    <main className="text-brand-deep">
      {/* HERO */}
      <section className="section pt-10 pb-20 lg:flex lg:items-center lg:gap-16">
        <div className="relative flex-1 space-y-6">
          <span className="badge-pill">
            Carol Tomathis • Mentoria de Relacionamentos
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-brand-deep">
            Seu segundo relacionamento pode ser{" "}
            <span className="underline decoration-brand-nude decoration-[8px] underline-offset-[10px]">
              o mais consciente da sua vida.
            </span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-brand-deep/80">
            A mentoria da Carol foi criada para mulheres que já viveram
            relacionamentos difíceis e decidiram que não vão repetir a mesma
            história. Aqui você entende seus padrões, cura feridas abertas e
            aprende a escolher relações que conversem com a mulher que você é
            hoje.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP_LINK} className="btn-primary" target="_blank">
              Quero falar com a Carol agora
            </a>
            <a href="#mentoria" className="btn-secondary">
              Ver como a mentoria funciona
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-brand-deep/70 pt-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-blush/80 text-[11px] font-semibold">
                1
              </span>
              <span>Atendimento on-line, com linguagem real e sem julgamentos.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-blush/80 text-[11px] font-semibold">
                2
              </span>
              <span>Foco em mulheres que estão recomeçando a vida amorosa.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-blush/80 text-[11px] font-semibold">
                3
              </span>
              <span>Triagem gratuita pelo WhatsApp para entender seu momento.</span>
            </div>
          </div>
        </div>

        <div className="relative mt-10 lg:mt-0 flex-1 flex justify-center">
          <div className="relative h-[420px] w-[300px] sm:h-[460px] sm:w-[320px] lg:h-[500px] lg:w-[360px]">
            <div className="absolute -inset-4 rounded-[2.4rem] bg-gradient-to-br from-white via-brand-blush/80 to-brand-nude/80 opacity-90 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] border border-white/70 bg-white/70 shadow-soft backdrop-blur">
              <img
                src="/carol-hero.jpg"
                alt="Carol Tomathis falando em público com microfone na mão."
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/20 to-transparent px-5 pb-5 pt-16 text-sm text-white">
                <p className="font-semibold">Carol Tomathis</p>
                <p className="text-xs text-white/80">
                  Mentora de relacionamentos para mulheres fortes que decidiram
                  viver relações igualmente fortes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO QUEM É A CAROL */}
      <section className="section pb-16 grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">
        <div className="space-y-6">
          <p className="text-label">Quem é a Carol</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-brand-deep">
            Conteúdo diário, conversa direta e uma mentoria que nasceu da vida real.
          </h2>
          <p className="text-sm sm:text-base text-brand-deep/80">
            No Instagram, Carol compartilha todos os dias reflexões, aulas ao
            vivo e recortes de conversas sobre segundos relacionamentos,
            autoestima e limites. As dúvidas das seguidoras viraram base da
            mentoria que hoje acompanha mulheres do Brasil inteiro.
          </p>
          <p className="text-sm sm:text-base text-brand-deep/80">
            Nada de frases prontas ou clichês. A proposta é olhar para a sua
            história com honestidade e delicadeza, para construir decisões mais
            maduras sem perder a leveza de acreditar no amor de novo.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-soft space-y-2">
              <p className="text-label">Para quem é</p>
              <p className="text-sm font-semibold">Mulheres em fase de recomeço</p>
              <p className="text-xs text-brand-deep/80">
                Separadas, recém-saídas de relações longas ou com medo de errar
                de novo ao conhecer alguém.
              </p>
            </div>
            <div className="card-soft space-y-2">
              <p className="text-label">Objetivo</p>
              <p className="text-sm font-semibold">Relacionamentos mais conscientes</p>
              <p className="text-xs text-brand-deep/80">
                Não é sobre “arrumar alguém”, e sim sobre arrumar o terreno
                interno para se relacionar em outro nível.
              </p>
            </div>
          </div>
        </div>

        <aside className="card-soft space-y-4">
          <p className="text-label">Pacote de mentoria</p>
          <h3 className="text-lg font-semibold text-brand-deep">
            Um acompanhamento estruturado, mas leve, para o seu recomeço.
          </h3>
          <p className="text-xs text-brand-deep/80">
            • Encontros on-line semanais{" "}
            <br />
            • Sessões de 60 minutos via vídeo
            <br />
            • Exercícios e materiais enviados após as sessões
            <br />
            • Suporte pontual pelo WhatsApp entre os encontros
          </p>
          <p className="text-xs text-brand-deep/70">
            Valores e formas de pagamento são combinados diretamente com a
            Carol, respeitando a sua realidade. O primeiro passo é uma conversa
            rápida pelo WhatsApp.
          </p>
          <a href={WHATSAPP_LINK} className="btn-primary w-full" target="_blank">
            Quero alinhar valores pelo WhatsApp
          </a>
          <div className="text-[11px] text-brand-deep/80 space-y-1">
            <p>WhatsApp: +55 (51) 8400-2284</p>
            <p>E-mail: mentoria@carolltomathis.com.br</p>
            <p>Instagram: @carolltomathis</p>
          </div>
        </aside>
      </section>

      {/* REELS */}
      <section className="section pb-16 space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2 max-w-xl">
            <p className="text-label">Carol no Instagram</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-deep">
              Alguns Reels que as seguidoras mais salvam.
            </h2>
            <p className="text-sm sm:text-base text-brand-deep/80">
              Veja um pouco do jeito da Carol falar sobre amor, recomeços e
              limites — exatamente como será a sua experiência dentro da mentoria.
            </p>
          </div>
          <a
            href="https://www.instagram.com/carolltomathis/"
            target="_blank"
            className="text-xs font-semibold text-brand-deep underline underline-offset-4"
          >
            Ver perfil completo no Instagram
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reels.map((reel) => (
            <div key={reel.url} className="space-y-2">
              <div className="aspect-[9/16] w-full overflow-hidden rounded-3xl border border-white/60 bg-black/40 shadow-soft">
                <iframe
                  src={reel.url}
                  className="h-full w-full"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  title={reel.title}
                ></iframe>
              </div>
              <p className="text-xs text-brand-deep/90">{reel.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS COM IMAGENS */}
      <section className="section pb-16 space-y-6">
        <div className="space-y-2 max-w-xl">
          <p className="text-label">Depoimentos</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-brand-deep">
            Mulheres que decidiram não aceitar menos do que merecem.
          </h2>
          <p className="text-sm sm:text-base text-brand-deep/80">
            Para preservar a privacidade, usamos nomes fictícios, mas os
            relatos e emoções são reais.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="card-soft flex flex-col gap-3 bg-white/70"
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-semibold text-brand-deep">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-brand-deep/70">{t.role}</p>
                </div>
              </div>
              <p className="text-xs text-brand-deep/80 leading-relaxed">
                “{t.text}”
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ + CTA FINAL */}
      <section className="section pb-20 space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">
          <div className="space-y-4">
            <p className="text-label">Dúvidas rápidas</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-deep">
              Antes de dizer “sim” para a mentoria.
            </h2>
            <div className="grid gap-3">
              <div className="card-soft bg-white/70 space-y-2">
                <h3 className="text-sm font-semibold text-brand-deep">
                  Preciso estar em um relacionamento para participar?
                </h3>
                <p className="text-xs text-brand-deep/80">
                  Não. Muitas alunas chegam recém-separadas ou solteiras. O foco
                  é você, sua história e como se relacionar melhor consigo e com
                  o outro.
                </p>
              </div>
              <div className="card-soft bg-white/70 space-y-2">
                <h3 className="text-sm font-semibold text-brand-deep">
                  Quanto tempo dura o processo?
                </h3>
                <p className="text-xs text-brand-deep/80">
                  O formato mais comum é de encontros semanais por alguns meses,
                  mas a duração ideal é combinada a partir do seu objetivo e do
                  momento que você está vivendo.
                </p>
              </div>
              <div className="card-soft bg-white/70 space-y-2">
                <h3 className="text-sm font-semibold text-brand-deep">
                  A mentoria substitui terapia?
                </h3>
                <p className="text-xs text-brand-deep/80">
                  Não. A mentoria é um espaço de orientação, reflexão guiada e
                  prática. Ela pode caminhar junto com um processo terapêutico,
                  se você desejar.
                </p>
              </div>
            </div>
          </div>

          <div className="card-soft bg-brand-deep text-white space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
              Próximo passo
            </p>
            <h3 className="text-xl font-semibold">
              Se você sentiu um “é sobre mim”, não ignore essa sensação.
            </h3>
            <p className="text-sm text-white/80">
              Uma conversa de alguns minutos com a Carol no WhatsApp já pode
              trazer alívio, clareza e o primeiro passo para um capítulo
              totalmente novo na sua vida amorosa.
            </p>
            <a
              href={WHATSAPP_LINK}
              className="btn-primary bg-white text-brand-deep hover:bg-brand-blush hover:text-brand-deep"
              target="_blank"
            >
              Falar com a Carol agora pelo WhatsApp
            </a>
            <p className="text-[11px] text-white/70">
              Sem compromisso, sem pressão. Apenas duas mulheres conversando
              sobre o que você está vivendo hoje.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}