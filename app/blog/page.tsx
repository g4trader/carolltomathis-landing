export default function BlogPage() {
  // Exemplo de posts - você pode substituir por dados reais de uma API ou CMS
  const posts = [
    {
      id: 1,
      title: "Como identificar padrões em relacionamentos",
      excerpt: "Entenda como reconhecer comportamentos que se repetem e como quebrar ciclos negativos.",
      date: "15 de Janeiro, 2024",
      category: "Relacionamentos"
    },
    {
      id: 2,
      title: "O que é um relacionamento consciente?",
      excerpt: "Descubra como construir relações mais saudáveis e alinhadas com quem você é hoje.",
      date: "10 de Janeiro, 2024",
      category: "Autoconhecimento"
    },
    {
      id: 3,
      title: "Estabelecendo limites saudáveis",
      excerpt: "Aprenda a colocar limites claros sem perder a conexão e o respeito no relacionamento.",
      date: "5 de Janeiro, 2024",
      category: "Limites"
    }
  ];

  return (
    <main className="relative pb-20">
      <section className="section pt-12 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <p className="text-label">Blog</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-champagne">
              Artigos e Reflexões
            </h1>
            <p className="text-base sm:text-lg text-champagne/80">
              Conteúdo sobre relacionamentos, recomeços e autoconhecimento.
            </p>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="card-soft hover:border-champagne/30 transition-colors cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-champagne/60">
                    <span className="badge-pill text-[10px]">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-champagne">
                    {post.title}
                  </h2>
                  <p className="text-sm text-champagne/80 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:text-emerald/80 transition-colors"
                  >
                    Ler mais
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Mensagem caso não haja posts */}
          {posts.length === 0 && (
            <div className="card-soft text-center py-12">
              <p className="text-champagne/70">
                Em breve, novos artigos serão publicados aqui.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

