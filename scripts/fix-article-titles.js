const fs = require('fs');
const path = require('path');

const artigosDir = path.join(process.cwd(), 'artigos');
const outputDir = path.join(process.cwd(), 'data', 'artigos');

// Função para criar título correto do nome do arquivo
function createTitle(filename) {
  return filename
    .replace(/\.pdf$/i, '')
    .replace(/_/g, ' ')
    .trim();
}

// Função para criar excerpt baseado no título
function createExcerpt(title, category, filename) {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('autoestima') || lowerTitle.includes('amor próprio')) {
    return 'Descubra como fortalecer sua autoestima no amor e construir relacionamentos mais saudáveis baseados no amor próprio e autoconfiança.';
  }
  if (lowerTitle.includes('relacionamento') && lowerTitle.includes('saudável')) {
    return 'Aprenda estratégias práticas para construir relacionamentos mais saudáveis, equilibrados e felizes em sua vida.';
  }
  if (lowerTitle.includes('insegurança')) {
    return 'Explore como identificar e resolver inseguranças no amor, construindo relações mais seguras e confiantes.';
  }
  if (lowerTitle.includes('padrões') || lowerTitle.includes('por que')) {
    return 'Entenda os padrões que se repetem em seus relacionamentos e descubra como transformá-los para viver relações mais felizes.';
  }
  
  return 'Leia este artigo para descobrir mais sobre relacionamentos, autoconhecimento e crescimento pessoal.';
}

async function fixTitles() {
  const files = fs.readdirSync(artigosDir);
  const pdfFiles = files.filter(file => file.toLowerCase().endsWith('.pdf'));
  
  const articles = [];
  
  console.log('Corrigindo títulos dos artigos...\n');
  
  for (const file of pdfFiles) {
    const slug = file
      .replace(/\.pdf$/i, '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    const title = createTitle(file);
    
    // Determinar categoria
    const lowerTitle = title.toLowerCase();
    let category = 'Relacionamentos';
    if (lowerTitle.includes('autoestima') || lowerTitle.includes('amor próprio')) {
      category = 'Autoestima';
    } else if (lowerTitle.includes('insegurança')) {
      category = 'Autoconhecimento';
    } else if (lowerTitle.includes('padrões') || lowerTitle.includes('por que')) {
      category = 'Padrões';
    }
    
    const excerpt = createExcerpt(title, category, file);
    
    // Ler arquivo existente para preservar conteúdo se houver
    const articleFile = path.join(outputDir, `${slug}.json`);
    let existingContent = '';
    let existingArticle = null;
    
    if (fs.existsSync(articleFile)) {
      existingArticle = JSON.parse(fs.readFileSync(articleFile, 'utf8'));
      existingContent = existingArticle.content || '';
    }
    
    // Criar artigo corrigido
    const article = {
      slug,
      title,
      excerpt,
      content: existingContent || `Conteúdo do artigo "${title}" será extraído em breve.`,
      filename: file,
      date: existingArticle?.date || new Date().toISOString().split('T')[0],
      category
    };
    
    // Salvar arquivo corrigido
    fs.writeFileSync(articleFile, JSON.stringify(article, null, 2), 'utf8');
    
    articles.push({
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      date: article.date,
      category: article.category
    });
    
    console.log(`✓ ${file} -> "${title}"`);
  }
  
  // Atualizar lista de artigos
  const articlesListFile = path.join(outputDir, 'list.json');
  fs.writeFileSync(articlesListFile, JSON.stringify(articles, null, 2), 'utf8');
  
  console.log(`\n✓ Títulos corrigidos para ${articles.length} artigos.`);
  return articles;
}

fixTitles().catch(console.error);

