import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleBySlug, getAllArticleSlugs } from '../../../lib/articles';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Artigo não encontrado',
    };
  }

  return {
    title: `${article.title} | Blog - Caroll Tomathis`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Formatar data para exibição
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Processar conteúdo - converter quebras de linha em parágrafos
  const processContent = (content: string) => {
    const paragraphs = content
      .split('\n\n')
      .filter(p => p.trim().length > 0)
      .map(p => p.trim());

    return paragraphs;
  };

  const paragraphs = processContent(article.content);

  return (
    <main className="relative pb-20">
      <article className="section pt-12 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Botão de voltar */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-champagne/70 hover:text-champagne transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para o blog
          </Link>

          {/* Cabeçalho do artigo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-champagne/60">
              <span className="badge-pill text-[10px]">{article.category}</span>
              <span>{formatDate(article.date)}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-champagne">
              {article.title}
            </h1>
            {article.excerpt && (
              <p className="text-lg text-champagne/80 leading-relaxed">
                {article.excerpt}
              </p>
            )}
          </div>

          {/* Conteúdo do artigo */}
          <div className="card-soft prose prose-invert max-w-none">
            <div className="space-y-6 text-champagne/90 leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Rodapé do artigo */}
          <div className="pt-8 border-t border-champagne/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald hover:text-emerald/80 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Ver todos os artigos
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}


