import { redirect } from 'next/navigation';

export default function BlogPage() {
  // A partir de agora, toda a listagem de conteúdos do blog é feita
  // diretamente no WordPress. Mantemos a rota /blog na Vercel apenas
  // como um redirecionamento permanente para o blog oficial.
  redirect('https://carolltomathis.com.br/blog');
}

