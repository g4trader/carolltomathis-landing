import Link from 'next/link';
import { fetchWordPressPosts, POSTS_PER_PAGE } from '../../lib/wordpress';

interface BlogListingProps {
  currentPage: number;
}

function stripHtml(html: string): string {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

export default async function BlogListing({ currentPage }: BlogListingProps) {
  const page = currentPage > 0 ? currentPage : 1;
  const { posts, totalPages } = await fetchWordPressPosts(page, POSTS_PER_PAGE);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const hasPrev = page > 1;
  const hasNext = totalPages > page;

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
                className="card-soft hover:border-champagne/30 transition-colors"
              >
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-champagne/60">
                      <span className="badge-pill text-[10px]">Blog</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-champagne">
                      {stripHtml(post.title.rendered)}
                    </h2>
                    <p className="text-sm text-champagne/80 leading-relaxed">
                      {stripHtml(post.excerpt.rendered)}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:text-emerald/80 transition-colors">
                      Ler no blog
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="card-soft text-center py-12">
              <p className="text-champagne/70">
                Nenhum artigo encontrado no momento.
              </p>
            </div>
          )}

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-8 border-t border-champagne/10 text-sm text-champagne/80">
              <div>
                Página {page} de {totalPages}
              </div>
              <div className="flex items-center gap-3">
                {hasPrev ? (
                  <Link
                    href={page === 2 ? '/blog' : `/blog/page/${page - 1}`}
                    className="text-champagne/80 hover:text-champagne transition-colors"
                  >
                    ← Anterior
                  </Link>
                ) : (
                  <span className="text-champagne/40">← Anterior</span>
                )}

                {hasNext ? (
                  <Link
                    href={`/blog/page/${page + 1}`}
                    className="text-champagne/80 hover:text-champagne transition-colors"
                  >
                    Próxima →
                  </Link>
                ) : (
                  <span className="text-champagne/40">Próxima →</span>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}


