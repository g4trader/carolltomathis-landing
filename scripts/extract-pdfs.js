const fs = require('fs');
const path = require('path');
const PDFParser = require('pdf2json');

const artigosDir = path.join(process.cwd(), 'artigos');
const outputDir = path.join(process.cwd(), 'data', 'artigos');

// Criar diretório de saída se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Função para criar slug a partir do nome do arquivo
function createSlug(filename) {
  return filename
    .replace(/\.pdf$/i, '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9]+/g, '-') // Substitui caracteres especiais por hífen
    .replace(/^-+|-+$/g, ''); // Remove hífens no início e fim
}

// Função para extrair título do nome do arquivo
function extractTitle(filename) {
  return filename
    .replace(/\.pdf$/i, '')
    .replace(/_/g, ' ')
    .trim();
}

// Função para limpar texto extraído do PDF (remove espaços excessivos entre letras)
function cleanExtractedText(text) {
  if (!text) return '';
  
  // Remove espaços múltiplos entre caracteres (ex: "A u t o e s t i m a" -> "Autoestima")
  // Mas preserva espaços entre palavras
  let cleaned = text
    // Remove espaços entre letras individuais (padrão: letra espaço letra)
    .replace(/([a-zA-ZÀ-ÿ])\s+([a-zA-ZÀ-ÿ])/g, '$1$2')
    // Limpa espaços múltiplos
    .replace(/\s+/g, ' ')
    // Remove espaços no início e fim de linhas
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n')
    .trim();
  
  return cleaned;
}

// Função para extrair categoria baseado no título
function extractCategory(title) {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('autoestima') || lowerTitle.includes('amor próprio')) {
    return 'Autoestima';
  }
  if (lowerTitle.includes('relacionamento') || lowerTitle.includes('saudável')) {
    return 'Relacionamentos';
  }
  if (lowerTitle.includes('insegurança')) {
    return 'Autoconhecimento';
  }
  if (lowerTitle.includes('padrões') || lowerTitle.includes('por que')) {
    return 'Padrões';
  }
  return 'Relacionamentos';
}

// Função para extrair título do conteúdo
function extractTitleFromContent(content) {
  const lines = content.split('\n').filter(line => line.trim().length > 0);
  if (lines.length > 0) {
    // Retorna a primeira linha significativa como título
    const firstLine = lines[0].trim();
    if (firstLine.length > 10 && firstLine.length < 150) {
      return firstLine;
    }
  }
  return null;
}

// Função para extrair resumo/excerpt do conteúdo
function extractExcerpt(content, maxLength = 200) {
  const lines = content.split('\n').filter(line => line.trim().length > 20);
  if (lines.length > 0) {
    let excerpt = lines[0].trim();
    if (excerpt.length > maxLength) {
      excerpt = excerpt.substring(0, maxLength);
      // Tenta cortar em um ponto final, vírgula ou espaço
      const lastPeriod = excerpt.lastIndexOf('.');
      const lastComma = excerpt.lastIndexOf(',');
      const lastSpace = excerpt.lastIndexOf(' ');
      const cutPoint = Math.max(lastPeriod, lastComma, lastSpace);
      if (cutPoint > maxLength * 0.7) {
        excerpt = excerpt.substring(0, cutPoint + 1);
      }
      excerpt += '...';
    }
    return excerpt;
  }
  // Se não conseguir extrair, tenta pegar as primeiras palavras do conteúdo
  const words = content.split(/\s+/).filter(w => w.length > 0);
  if (words.length > 0) {
    let excerpt = words.slice(0, 30).join(' ');
    if (excerpt.length > maxLength) {
      excerpt = excerpt.substring(0, maxLength) + '...';
    }
    return excerpt;
  }
  return 'Descubra mais sobre este tema importante.';
}

// Função para extrair texto do PDF usando pdf2json
function extractPDFContent(filePath) {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser(null, 1);
    
    pdfParser.on('pdfParser_dataError', errData => {
      reject(new Error(errData.parserError));
    });
    
    pdfParser.on('pdfParser_dataReady', pdfData => {
      try {
        // Extrai texto de todas as páginas
        let text = '';
        if (pdfData.Pages && pdfData.Pages.length > 0) {
          pdfData.Pages.forEach(page => {
            if (page.Texts && page.Texts.length > 0) {
              page.Texts.forEach(textItem => {
                if (textItem.R && textItem.R.length > 0) {
                  textItem.R.forEach(r => {
                    if (r.T) {
                      // Decodifica o texto (pode estar em formato URI)
                      try {
                        text += decodeURIComponent(r.T);
                      } catch (e) {
                        text += r.T;
                      }
                    }
                  });
                }
                // Adiciona espaço ou quebra de linha entre itens de texto
                if (textItem.y && textItem.prevY && Math.abs(textItem.y - textItem.prevY) > 5) {
                  text += '\n';
                } else {
                  text += ' ';
                }
              });
              text += '\n\n';
            }
          });
        }
        
        // Limpa o texto extraído
        const cleanedText = cleanExtractedText(text);
        resolve(cleanedText);
      } catch (error) {
        reject(error);
      }
    });
    
    pdfParser.loadPDF(filePath);
  });
}

async function processPDFs() {
  const files = fs.readdirSync(artigosDir);
  const pdfFiles = files.filter(file => file.toLowerCase().endsWith('.pdf'));
  
  const articles = [];
  
  console.log('Processando PDFs...\n');
  
  for (const file of pdfFiles) {
    console.log(`Processando ${file}...`);
    const filePath = path.join(artigosDir, file);
    const slug = createSlug(file);
    let title = extractTitle(file);
    const category = extractCategory(title);
    
    try {
      // Extrair conteúdo do PDF
      const content = await extractPDFContent(filePath);
      
      // Se o conteúdo foi extraído com sucesso, tentar melhorar título e excerpt
      if (content && content.trim().length > 50) {
        const titleFromContent = extractTitleFromContent(content);
        if (titleFromContent && titleFromContent.length > 10) {
          title = titleFromContent;
        }
      }
      
      const excerpt = content && content.trim().length > 50 
        ? extractExcerpt(content) 
        : `Descubra mais sobre ${title.toLowerCase()}.`;
      
      const article = {
        slug,
        title,
        excerpt,
        content: (content || '').trim() || `Conteúdo do artigo "${title}".`,
        filename: file,
        date: new Date().toISOString().split('T')[0],
        category
      };
      
      // Salvar arquivo individual do artigo
      const articleFile = path.join(outputDir, `${slug}.json`);
      fs.writeFileSync(articleFile, JSON.stringify(article, null, 2), 'utf8');
      
      articles.push({
        slug: article.slug,
        title: article.title,
        excerpt: article.excerpt,
        date: article.date,
        category: article.category
      });
      
      const contentLength = (content || '').trim().length;
      console.log(`✓ ${file} processado -> ${slug} (${contentLength} caracteres)`);
    } catch (error) {
      console.error(`✗ Erro ao processar ${file}:`, error.message);
      // Criar estrutura básica mesmo em caso de erro
      const article = {
        slug,
        title,
        excerpt: `Descubra mais sobre ${title.toLowerCase()}.`,
        content: `Erro ao extrair conteúdo do PDF. Por favor, adicione o conteúdo manualmente.`,
        filename: file,
        date: new Date().toISOString().split('T')[0],
        category
      };
      
      const articleFile = path.join(outputDir, `${slug}.json`);
      fs.writeFileSync(articleFile, JSON.stringify(article, null, 2), 'utf8');
      
      articles.push({
        slug: article.slug,
        title: article.title,
        excerpt: article.excerpt,
        date: article.date,
        category: article.category
      });
    }
  }
  
  // Salvar lista de artigos
  const articlesListFile = path.join(outputDir, 'list.json');
  fs.writeFileSync(articlesListFile, JSON.stringify(articles, null, 2), 'utf8');
  
  console.log(`\n✓ Processamento concluído! ${articles.length} artigos processados.`);
  return articles;
}

processPDFs().catch(console.error);
