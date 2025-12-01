'use client';

import { useState, useEffect } from 'react';

const WHATSAPP_LINK =
  "https://wa.me/555184002284?text=Oi%20Carol,%20vim%20do%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.";

// Array de imagens da Carol
const carolImages = [
  {
    src: "/carol-hero.jpg",
    alt: "Caroll Tomathis falando em público com microfone"
  },
  {
    src: "/carol-1.jpg",
    alt: "Caroll Tomathis"
  },
  {
    src: "/carol-2.jpg",
    alt: "Caroll Tomathis"
  },
  {
    src: "/carol-4.jpg",
    alt: "Caroll Tomathis"
  },
  {
    src: "/carol-5.jpg",
    alt: "Caroll Tomathis"
  },
  {
    src: "/carol-6.jpg",
    alt: "Caroll Tomathis"
  }
];

const testimonials = [
  {
    name: "Marina, 38",
    role: "Empresária",
    text: "Achei que o problema era sempre eu. Hoje entendo meus padrões, coloco limites claros e nunca mais aceitei migalhas emocionais.",
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
    text: "Entrei devastada após o divórcio e saí com um mapa de quem eu sou, do que aceito e do que não negocio mais em relações.",
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

// Componente do Carrossel
function ImageCarousel({ images }: { images: typeof carolImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay: muda de slide automaticamente a cada 5 segundos
  useEffect(() => {
    if (images.length <= 1) return; // Não precisa de autoplay se houver apenas uma imagem

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full">
      {/* Efeito de brilho/glow atrás */}
      <div className="absolute -inset-8 rounded-4xl bg-gradient-to-br from-champagne/30 via-nude/40 to-blush/50 blur-3xl opacity-60" />
      
      {/* Container principal do carrossel */}
      <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] w-full overflow-hidden rounded-4xl border-2 border-champagne/30 bg-espresso/90 shadow-cinematic">
        {/* Imagens do carrossel */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Informações da Carol na parte inferior */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent px-8 pb-8 pt-20 z-10">
          <div className="space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-champagne">
              Caroll Tomathis
            </h2>
            <p className="text-sm font-semibold text-emerald mb-3">
              Mentora de Relacionamentos
            </p>
            <p className="text-sm text-champagne/90 leading-relaxed max-w-md">
              Para mulheres fortes que decidiram viver relações igualmente fortes.
            </p>
          </div>
        </div>

        {/* Botões de navegação */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-champagne/30 flex items-center justify-center text-champagne transition-all hover:scale-110"
              aria-label="Imagem anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-champagne/30 flex items-center justify-center text-champagne transition-all hover:scale-110"
              aria-label="Próxima imagem"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Indicadores de slide */}
        {images.length > 1 && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-emerald' 
                    : 'w-2 bg-champagne/40 hover:bg-champagne/60'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative pb-20">
      {/* HERO - VERSÃO 2: Foco TOTAL na Carol */}
      <section className="section pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Carrossel de Imagens da Carol */}
          <div className="relative order-2 lg:order-1">
            <ImageCarousel images={carolImages} />
          </div>

          {/* Lado Direito: Conteúdo sobre a Carol */}
          <div className="relative order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <span className="badge-pill">
                Caroll Tomathis
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-champagne">
                Quem é a Caroll
              </h1>

              <p className="text-base sm:text-lg text-champagne/90 leading-relaxed">
                Conteúdo diário, conversa direta e uma mentoria que nasceu da vida real.
              </p>

              <p className="text-base sm:text-lg text-champagne/80 leading-relaxed">
                Caroll compartilha reflexões, áudios e cortes de aulas sobre segundos relacionamentos, limites e autoestima. - A mentoria nasceu da sua própria jornada de reconstrução emocional e do desejo genuíno de ajudar outras mulheres a viverem um recomeço amoroso mais consciente.
              </p>

              <p className="text-base sm:text-lg text-champagne/80 leading-relaxed">
                Aqui não existem respostas prontas. O foco é olhar para a própria história com honestidade e delicadeza, construindo decisões mais maduras sem perder a leveza de acreditar no amor novamente.
              </p>

              {/* Elementos de autoridade da Carol */}
              <div className="card-soft bg-cocoa/60 border-champagne/25 p-5 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald">
                  Por que confiar na Caroll?
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-emerald/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald text-[10px] font-bold">✓</span>
                    </div>
                    <p className="text-sm text-champagne/90">
                      <span className="font-semibold">Experiência comprovada:</span> Acompanha mulheres do Brasil inteiro no recomeço amoroso.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-emerald/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald text-[10px] font-bold">✓</span>
                    </div>
                    <p className="text-sm text-champagne/90">
                      <span className="font-semibold">Linguagem real:</span> Sem julgamentos, com honestidade e delicadeza.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-full bg-emerald/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald text-[10px] font-bold">✓</span>
                    </div>
                    <p className="text-sm text-champagne/90">
                      <span className="font-semibold">Mentoria que nasceu da vida real:</span> Baseada nas dúvidas e necessidades reais das seguidoras.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEGUNDA DOBRA: MENTORIA */}
      <section
        id="mentoria"
        className="section pb-18 space-y-10"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">
          <div className="space-y-6">
            <div className="space-y-6">
              <p className="text-label">Mentoria de Relacionamentos</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-champagne">
                Para mulheres que escolheram não repetir a mesma história
              </h2>
              <p className="text-lg sm:text-xl text-champagne/90 leading-relaxed">
                - A mentoria da Caroll foi criada para mulheres que já viveram relacionamentos difíceis e decidiram que o próximo capítulo será diferente. Aqui, você compreende o que se repete, cura feridas que ainda doem e aprende a escolher relações que combinam com a mulher que você quer se tornar.
              </p>
              <p className="text-lg sm:text-xl text-champagne/90 leading-relaxed">
                Quando você se reconstrói por dentro, algo poderoso acontece: sua forma de amar se transforma, seus limites ganham clareza, sua autoestima se fortalece — e, desse novo lugar, você abre espaço para viver um amor que realmente faz sentido. Um amor saudável, verdadeiro, possível e alinhado com a mulher que você QUER SE tornou.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-soft space-y-2">
                <p className="text-label">Para quem é</p>
                <p className="text-sm font-semibold text-champagne">
                  Mulheres em fase de recomeço
                </p>
                <p className="text-xs text-champagne/80">
                  Separadas, recém-saídas de relações longas ou com medo de errar
                  de novo ao se abrir para alguém.
                </p>
              </div>
              <div className="card-soft space-y-2">
                <p className="text-label">Objetivo</p>
                <p className="text-sm font-semibold text-champagne">
                  Relações mais conscientes
                </p>
                <p className="text-xs text-champagne/80">
                  Não é sobre arrumar alguém a qualquer custo, é sobre arrumar o
                  seu terreno interno para se relacionar em outro nível.
                </p>
              </div>
            </div>

            {/* Lista de benefícios */}
            <div className="flex flex-wrap gap-4 text-sm text-champagne/80 pt-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cocoa text-xs font-semibold">
                  1
                </span>
                <span>Atendimento on-line, com linguagem real e sem julgamentos.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cocoa text-xs font-semibold">
                  2
                </span>
                <span>Foco em mulheres em recomeço amoroso — separadas ou já em outra relação.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cocoa text-xs font-semibold">
                  3
                </span>
                <span>Triagem gratuita pelo WhatsApp para entender seu momento antes de começar.</span>
              </div>
            </div>
          </div>

          <aside className="card-dark space-y-4">
            <p className="text-label">Pacote de mentoria</p>
            <h3 className="text-lg font-semibold text-champagne">
              Como funciona?
            </h3>
            <p className="text-xs text-champagne/80">
              Encontros ao vivo (online) em grupo, com acompanhamento direto da mentora. Grupo pequeno e acolhedor para garantir profundidade e troca real. Exercícios práticos entre os encontros, para aplicar no seu dia a dia. Espaço de escuta, partilha e suporte emocional. Acesso a materiais extras (PDFs, aulas gravadas ou ferramentas práticas).
            </p>
            <h3 className="text-lg font-semibold text-champagne">
              A Resset Relacional
            </h3>
            <p className="text-xs text-champagne/80">
              A Resset Relacional é uma mentoria online e íntima, criada para quem está vivendo (ou deseja viver) um segundo relacionamento sem repetir os mesmos erros do passado. É um espaço seguro onde falamos da vida real: A culpa por estar feliz depois de um divórcio. O medo de errar de novo. A presença dos filhos, do ex, da nova rotina. As inseguranças que surgem mesmo depois do "eu te amo". Como construir um novo "nós" sem se anular. Aqui não tem conto de fadas. Tem escuta, direção e transformação emocional.
            </p>
            <h3 className="text-lg font-semibold text-champagne">
              Essa mentoria é pra você se:
            </h3>
            <p className="text-xs text-champagne/80">
              Está em um segundo relacionamento e sente que ainda carrega traumas ou bloqueios. Quer se comunicar com mais clareza e menos silêncio acumulado. Deseja viver um novo amor, mas ainda se sente presa ao passado. Está tentando construir uma nova família, mas não sabe como incluir filhos e rotina. Quer recomeçar com verdade, não com pressa.
            </p>
            <a href={WHATSAPP_LINK} className="btn-primary w-full" target="_blank">
              Quero alinhar valores pelo WhatsApp
            </a>
            <div className="text-[11px] text-champagne/70 space-y-1">
              <p>WhatsApp: +55 (51) 8400-2284</p>
              <p>E-mail: mentoria@carolltomathis.com.br</p>
              <p>Instagram: @carolltomathis</p>
            </div>
          </aside>
        </div>
      </section>

      {/* REELS */}
      <section className="section pb-18 space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2 max-w-xl">
            <p className="text-label">Carol no Instagram</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-champagne">
              Alguns Reels que as seguidoras mais salvam.
            </h2>
            <p className="text-sm sm:text-base text-champagne/80">
              Veja um pouco do jeito da Caroll falar sobre amor, recomeços e
              limites — do jeitinho que você vai viver dentro da mentoria.
            </p>
          </div>
          <a
            href="https://www.instagram.com/carolltomathis/"
            target="_blank"
            className="text-xs font-semibold text-champagne/80 underline underline-offset-4"
          >
            Ver perfil completo no Instagram
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reels.map((reel) => (
            <div key={reel.url} className="space-y-2">
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl border border-champagne/25 bg-black/60 shadow-card">
                <iframe
                  src={reel.url}
                  className="h-full w-full"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  title={reel.title}
                ></iframe>
              </div>
              <p className="text-xs text-champagne/80">{reel.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section pb-18 space-y-6">
        <div className="space-y-2 max-w-xl">
          <p className="text-label">Depoimentos</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-champagne">
            Mulheres que decidiram não aceitar menos do que merecem.
          </h2>
          <p className="text-sm sm:text-base text-champagne/80">
            Para preservar a privacidade, usamos nomes fictícios, mas as emoções
            e transformações são reais.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="card-soft flex flex-col gap-3 bg-espresso/90"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-champagne/30">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-full w-full object-cover grayscale"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold text-champagne">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-champagne/70">{t.role}</p>
                </div>
              </div>
              <p className="text-xs text-champagne/80 leading-relaxed">
                "{t.text}"
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
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-champagne">
              Antes de dizer "sim" para a mentoria.
            </h2>
            <div className="grid gap-3">
              <div className="card-soft space-y-2">
                <h3 className="text-sm font-semibold text-champagne">
                  Preciso estar em um relacionamento para participar?
                </h3>
                <p className="text-xs text-champagne/80">
                  Não. Muitas alunas chegam recém-separadas ou solteiras. O foco
                  é você, sua história e como se relacionar melhor consigo e com
                  o outro.
                </p>
              </div>
              <div className="card-soft space-y-2">
                <h3 className="text-sm font-semibold text-champagne">
                  Quanto tempo dura o processo?
                </h3>
                <p className="text-xs text-champagne/80">
                  O formato mais comum é de encontros semanais por alguns meses,
                  mas a duração ideal é combinada a partir do seu objetivo e do
                  momento que você está vivendo.
                </p>
              </div>
              <div className="card-soft space-y-2">
                <h3 className="text-sm font-semibold text-champagne">
                  A mentoria substitui terapia?
                </h3>
                <p className="text-xs text-champagne/80">
                  Não. A mentoria é um espaço de orientação, reflexão guiada e
                  prática. Ela pode caminhar junto com um processo terapêutico,
                  se você desejar.
                </p>
              </div>
            </div>
          </div>

          <div className="card-dark bg-cocoa/90 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne/70">
              Próximo passo
            </p>
            <h3 className="font-display text-xl font-semibold text-champagne">
              Se você sentiu um "é sobre mim", não ignore essa sensação.
            </h3>
            <p className="text-sm text-champagne/80">
              Uma conversa de alguns minutos com a Caroll no WhatsApp já pode
              trazer alívio, clareza e o primeiro passo para um capítulo
              totalmente novo na sua vida amorosa.
            </p>
            <a
              href={WHATSAPP_LINK}
              className="btn-primary bg-emerald text-white hover:bg-emerald/90"
              target="_blank"
            >
              Falar com a Caroll agora pelo WhatsApp
            </a>
            <p className="text-[11px] text-champagne/70">
              Sem compromisso, sem pressão. Apenas duas mulheres conversando
              sobre o que você está vivendo hoje.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
