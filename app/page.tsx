const WHATSAPP_LINK =
  "https://wa.me/555184002284?text=Oi%20Carol,%20vim%20do%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.";

export default function Page() {
  return (
    <main className="min-h-screen pb-20">
      {/* HERO */}
      <section className="section pt-10 pb-20 lg:flex lg:items-center lg:gap-16">
        <div className="relative flex-1 space-y-6">
          <span className="badge-pill">
            Mentoria de Relacionamentos • Mulheres Fortes merecem Relações Fortes
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
            Seu próximo relacionamento{" "}
            <span className="text-brand-400">
              não precisa repetir a mesma história.
            </span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-slate-300">
            Você não precisa adivinhar sozinha o que deu errado. A mentoria da
            Carol Tomathis foi criada para mulheres que querem um relacionamento
            saudável, consciente e possível. Aqui, você recebe orientação prática
            para fechar ciclos, curar feridas e escolher melhor.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={WHATSAPP_LINK} className="btn-primary" target="_blank">
              Falar com a Carol no WhatsApp
            </a>
            <a href="#mentoria" className="btn-secondary">
              Ver como a mentoria funciona
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/10 text-[11px] text-brand-200">
                1
              </span>
              <span>Atendimento on-line, individual ou em grupo.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/10 text-[11px] text-brand-200">
                2
              </span>
              <span>Foco em mulheres em fase de recomeço amoroso.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/10 text-[11px] text-brand-200">
                3
              </span>
              <span>Triagem gratuita pelo WhatsApp antes de iniciar.</span>
            </div>
          </div>
        </div>

        <div className="relative mt-10 lg:mt-0 flex-1 flex justify-center">
          <div className="relative h-[380px] w-[280px] sm:h-[420px] sm:w-[320px] lg:h-[460px] lg:w-[340px]">
            <div className="absolute -inset-4 rounded-[2.4rem] bg-gradient-to-br from-brand-500/40 via-slate-900 to-slate-900 blur-3xl" />
            <div className="relative h-full w-full rounded-[2.4rem] border border-slate-700/60 bg-slate-900/80 shadow-soft overflow-hidden">
              <img
                src="/carol-hero.jpg"
                alt="Carol Tomathis falando em público com microfone na mão."
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="section pb-16 space-y-10">
        <header className="max-w-3xl space-y-3">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Para quem é a mentoria da Carol?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Para mulheres que estão cansadas de repetir padrões, carregar culpa
            sozinhas e sentir que sempre escolhem a pessoa errada. Se você está
            em alguma destas fases, essa mentoria foi pensada para você:
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Você acabou de sair de um relacionamento",
              desc: "Sente que perdeu o chão, alterna entre saudade e raiva, e quer entender o que aconteceu para não reviver esse ciclo.",
            },
            {
              title: "Você já está em outro relacionamento",
              desc: "Tem medo de repetir a história, percebe gatilhos aparecendo e quer aprender a se posicionar com mais clareza.",
            },
            {
              title: "Você quer ficar bem com você",
              desc: "Antes de qualquer relação, seu foco é reconstruir a autoestima, reorganizar limites e aprender a se priorizar.",
            },
          ].map((item) => (
            <div key={item.title} className="card-soft space-y-2">
              <h3 className="text-sm font-semibold text-slate-50">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE + METODOLOGIA */}
      <section
        id="mentoria"
        className="section pb-16 grid gap-10 lg:grid-cols-[1.1fr,1fr] items-start"
      >
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Quem é a Carol Tomathis na prática?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Carol Tomathis é mentora de relacionamentos e criadora de conteúdos
            que ajudam mulheres a transformar segundos relacionamentos em
            relações mais conscientes. Nas redes, ela fala de limites, amor
            próprio e escolhas maduras, com a frase que guia o seu trabalho:
            mulheres fortes merecem relações fortes.
          </p>
          <p className="text-sm sm:text-base text-slate-300">
            No Instagram, Carol reúne mais de 3 mil pessoas acompanhando sua
            rotina, aulas e reflexões sobre vida amorosa, recomeços e
            autoconhecimento. Cada mentoria nasce dessa vivência direta com as
            dúvidas reais das mulheres que chegam até ela todos os dias.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card-soft space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
                Etapa 1
              </p>
              <h3 className="text-sm font-semibold">Levantamento da sua história</h3>
              <p className="text-xs text-slate-300">
                Um encontro para mapear o que você já viveu, quais padrões se
                repetem e o que dói hoje. É daqui que nasce seu plano de
                mudança.
              </p>
            </div>
            <div className="card-soft space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
                Etapa 2
              </p>
              <h3 className="text-sm font-semibold">Ferramentas emocionais</h3>
              <p className="text-xs text-slate-300">
                Exercícios, perguntas guiadas e práticas entre sessões para que
                você se observe, crie clareza e fortaleça limites saudáveis.
              </p>
            </div>
            <div className="card-soft space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
                Etapa 3
              </p>
              <h3 className="text-sm font-semibold">Decisões mais conscientes</h3>
              <p className="text-xs text-slate-300">
                Você aprende a se posicionar, dizer não, negociar e escolher
                relações que respeitem quem você é hoje.
              </p>
            </div>
            <div className="card-soft space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
                Etapa 4
              </p>
              <h3 className="text-sm font-semibold">Apoio durante o processo</h3>
              <p className="text-xs text-slate-300">
                Acompanhamento próximo, com espaço seguro para dúvidas, recaídas
                e pequenas vitórias que fazem toda a diferença.
              </p>
            </div>
          </div>
        </div>

        <aside className="card-soft space-y-4">
          <h3 className="text-sm font-semibold text-slate-50">
            Pacote atual de mentoria
          </h3>
          <p className="text-xs text-slate-300">
            • Encontros on-line semanais{" "}
            <br />
            • Sessões de 60 minutos via vídeo
            <br />
            • Materiais de apoio enviados após as sessões
            <br />
            • Contato de suporte entre os encontros pelo WhatsApp
          </p>
          <p className="text-xs text-slate-400">
            Os detalhes de valores e formas de pagamento são combinados
            diretamente com a Carol, de forma personalizada para a sua realidade.
          </p>
          <a href={WHATSAPP_LINK} className="btn-primary w-full" target="_blank">
            Quero conversar sobre valores no WhatsApp
          </a>
          <div className="text-[11px] text-slate-500 space-y-1">
            <p>WhatsApp: +55 (51) 8400-2284</p>
            <p>E-mail: mentoria@carolltomathis.com.br</p>
            <p>Instagram: @carolltomathis</p>
          </div>
        </aside>
      </section>

      {/* CAROL NO INSTAGRAM */}
      <section className="section pb-16 space-y-8">
        <header className="max-w-3xl space-y-3">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Carol em ação no Instagram
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A rotina da Carol também acontece ao vivo nos Reels, com conversas
            diretas sobre segundos relacionamentos, limites e escolhas mais
            maduras. Veja alguns conteúdos que as seguidoras mais salvam:
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "A mulher durona e as máscaras emocionais",
              url: "https://www.instagram.com/reel/CyjQJzbPwmC/embed",
            },
            {
              title: "Quando a briga vira silêncio que afasta",
              url: "https://www.instagram.com/reel/DPBsrqNDNw4/embed",
            },
            {
              title: "Para entrar em um relacionamento de verdade",
              url: "https://www.instagram.com/reel/DQorUa1ADRs/embed",
            },
          ].map((reel) => (
            <div key={reel.url} className="space-y-2">
              <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl border border-slate-800 bg-black/40">
                <iframe
                  src={reel.url}
                  className="h-full w-full"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  title={reel.title}
                ></iframe>
              </div>
              <p className="text-xs text-slate-200">{reel.title}</p>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <a
            href="https://www.instagram.com/carolltomathis/"
            target="_blank"
            className="text-xs font-semibold text-brand-200 underline underline-offset-4"
          >
            Ver o perfil completo da Carol no Instagram
          </a>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section pb-16 space-y-8">
        <header className="max-w-3xl space-y-3">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            O que as alunas dizem depois da mentoria
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Os nomes abaixo são fictícios para preservar a privacidade das
            clientes, mas os relatos refletem a transformação real de quem
            escolheu se priorizar.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              name: "Marina, 38 anos",
              text: "Eu achava que o problema era sempre eu. Hoje eu entendo meus limites, parei de aceitar migalhas e estou em paz, mesmo solteira.",
            },
            {
              name: "Patrícia, 42 anos",
              text: "Repetia o mesmo tipo de relação há anos. Na mentoria, enxerguei meus padrões e tive coragem de terminar um relacionamento que só me drenava.",
            },
            {
              name: "Renata, 33 anos",
              text: "Comecei a mentoria para superar o fim do casamento. Terminei mais forte, consciente e pronta para construir qualquer relação a partir de mim.",
            },
          ].map((item) => (
            <div key={item.name} className="card-soft flex flex-col gap-3">
              <p className="text-xs text-slate-300">“{item.text}”</p>
              <p className="text-[11px] font-semibold text-brand-200">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section pb-20 space-y-8">
        <header className="max-w-3xl space-y-3">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Dúvidas rápidas sobre a mentoria
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Se ainda ficou alguma pergunta na sua mente, estas respostas podem
            ajudar. E, se preferir, é só chamar a Carol no WhatsApp.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Preciso estar em um relacionamento para fazer a mentoria?",
              a: "Não. Muitas alunas chegam recém-separadas ou solteiras. O foco é você, sua história e como se relacionar melhor consigo e com o outro.",
            },
            {
              q: "Quanto tempo dura o processo?",
              a: "O formato mais comum é de encontros semanais por alguns meses, mas a duração ideal é alinhada caso a caso, de acordo com seus objetivos.",
            },
            {
              q: "A mentoria substitui terapia?",
              a: "Não. A mentoria é um espaço de orientação, reflexão guiada e prática. Ela pode caminhar junto com um processo terapêutico, se você desejar.",
            },
            {
              q: "Consigo parcelar o investimento?",
              a: "Sim, o pagamento pode ser combinado diretamente com a Carol. No primeiro contato no WhatsApp vocês alinham valores, formas e datas.",
            },
          ].map((item) => (
            <div key={item.q} className="card-soft space-y-2">
              <h3 className="text-sm font-semibold text-slate-50">
                {item.q}
              </h3>
              <p className="text-xs text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-sm sm:text-base text-slate-300">
            Se você sentiu um “é sobre mim” enquanto lia esta página, não ignore
            essa intuição. Uma conversa de alguns minutos no WhatsApp pode ser
            o primeiro passo para um próximo capítulo muito mais leve.
          </p>
          <a href={WHATSAPP_LINK} className="btn-primary" target="_blank">
            Quero falar com a Carol agora
          </a>
        </div>
      </section>
    </main>
  );
}