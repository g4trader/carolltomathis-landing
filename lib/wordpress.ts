export interface WPPost {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
}

const WP_BASE_URL = 'https://carolltomathis.com.br';

export const POSTS_PER_PAGE = 10;

export interface FetchPostsResult {
  posts: WPPost[];
  total: number;
  totalPages: number;
}

export async function fetchWordPressPosts(
  page: number = 1,
  perPage: number = POSTS_PER_PAGE
): Promise<FetchPostsResult> {
  const searchParams = new URLSearchParams({
    per_page: String(perPage),
    page: String(page),
    _embed: '1',
  });

  const res = await fetch(
    `${WP_BASE_URL}/wp-json/wp/v2/posts?${searchParams.toString()}`,
    {
      // Revalida a cada 60 segundos para sempre pegar posts novos
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    console.error('Erro ao buscar posts do WordPress:', res.status, res.statusText);
    return { posts: [], total: 0, totalPages: 0 };
  }

  const posts: WPPost[] = await res.json();
  const total = Number(res.headers.get('X-WP-Total') || posts.length);
  const totalPages = Number(res.headers.get('X-WP-TotalPages') || 1);

  return { posts, total, totalPages };
}


