import fs from 'fs';
import path from 'path';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  filename: string;
  date: string;
  category: string;
}

export interface ArticlePreview {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const articlesDirectory = path.join(process.cwd(), 'data', 'artigos');

// Função para obter todos os artigos (preview)
export function getAllArticles(): ArticlePreview[] {
  try {
    const listPath = path.join(articlesDirectory, 'list.json');
    const fileContents = fs.readFileSync(listPath, 'utf8');
    const articles: ArticlePreview[] = JSON.parse(fileContents);
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading articles list:', error);
    return [];
  }
}

// Função para obter um artigo específico por slug
export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.json`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const article: Article = JSON.parse(fileContents);
    return article;
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

// Função para obter todos os slugs
export function getAllArticleSlugs(): string[] {
  const articles = getAllArticles();
  return articles.map(article => article.slug);
}


