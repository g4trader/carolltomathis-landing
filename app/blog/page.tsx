import Link from 'next/link';
import { getAllArticles } from '../../lib/articles';

export default function BlogPage() {
  const articles = getAllArticles();

  // Função para formatar data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

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
            {articles.map((article) => (
              <article
                key={article.slug}
                className="card-soft hover:border-champagne/30 transition-colors"
              >
                <Link href={`/blog/${article.slug}`} className="block">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-champagne/60">
                      <span className="badge-pill text-[10px]">{article.category}</span>
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-champagne">
                      {article.title}
                    </h2>
                    <p className="text-sm text-champagne/80 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:text-emerald/80 transition-colors">
                      Ler mais
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Mensagem caso não haja posts */}
          {articles.length === 0 && (
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

