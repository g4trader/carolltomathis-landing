# Tema WordPress - Caroll Tomathis

Tema WordPress personalizado criado para replicar o visual cinematográfico e elegante do site principal da Caroll Tomathis.

## 📋 Características

- **Design Cinematográfico**: Fundo escuro com efeitos de luz, textura de grão e gradientes suaves
- **Paleta de Cores**: Cores elegantes (espresso, cocoa, champagne, emerald) que transmitem sofisticação
- **Tipografia**: Playfair Display para títulos e fontes do sistema para corpo do texto
- **Totalmente Responsivo**: Adaptado para todos os dispositivos
- **Otimizado para SEO**: Estrutura semântica e otimizada
- **Botão WhatsApp Flutuante**: Acesso rápido ao contato

## 🚀 Instalação

### Método 1: Upload via WordPress Admin

1. Faça o download ou clone este repositório
2. Comprima a pasta `wordpress-theme-carolltomathis` em um arquivo ZIP
3. No WordPress, vá em **Aparência > Temas > Adicionar novo > Enviar tema**
4. Selecione o arquivo ZIP e clique em **Instalar agora**
5. Ative o tema após a instalação

### Método 2: Upload via FTP

1. Faça o download ou clone este repositório
2. Acesse seu servidor via FTP
3. Navegue até `/wp-content/themes/`
4. Faça upload da pasta `wordpress-theme-carolltomathis`
5. No WordPress, vá em **Aparência > Temas** e ative o tema "Caroll Tomathis"

## ⚙️ Configuração

### 1. Menu de Navegação

1. Vá em **Aparência > Menus**
2. Crie um novo menu ou use um existente
3. Adicione os itens desejados (Home, Sobre, Contato, Blog)
4. Selecione "Menu Principal" como localização do tema
5. Salve o menu

### 2. Logo Personalizado

1. Vá em **Aparência > Personalizar > Identidade do Site**
2. Faça upload do logo da Caroll Tomathis
3. Ajuste o tamanho se necessário
4. Salve as alterações

### 3. Página de Posts (Blog)

1. Vá em **Configurações > Leitura**
2. Selecione uma página estática para a página inicial (opcional)
3. Selecione a página que será usada para exibir os posts do blog
4. Salve as alterações

### 4. Widgets (Opcional)

O tema suporta widgets na sidebar. Para adicionar:

1. Vá em **Aparência > Widgets**
2. Arraste widgets para a área "Sidebar"
3. Os widgets aparecerão automaticamente nas páginas que suportam sidebar

## 📁 Estrutura de Arquivos

```
wordpress-theme-carolltomathis/
├── style.css          # Estilos principais do tema
├── functions.php      # Funções e configurações do tema
├── header.php         # Cabeçalho do site
├── footer.php         # Rodapé do site
├── index.php          # Template principal do blog
├── single.php         # Template de post individual
├── archive.php        # Template de arquivos (categorias, tags, etc.)
├── search.php         # Template de resultados de busca
├── 404.php            # Template de página não encontrada
├── comments.php       # Template de comentários
├── js/
│   └── theme.js      # JavaScript do tema
└── README.md         # Este arquivo
```

## 🎨 Personalização

### Cores

As cores podem ser personalizadas editando as variáveis CSS em `style.css`:

```css
:root {
  --color-espresso: #120909;
  --color-cocoa: #3b221e;
  --color-nude: #cda38a;
  --color-champagne: #f9e5d8;
  --color-blush: #e9b2a5;
  --color-emerald: #18b37f;
}
```

### WhatsApp Link

O link do WhatsApp está definido em `functions.php`. Para alterar:

```php
define('WHATSAPP_LINK', 'https://wa.me/SEU_NUMERO?text=SUA_MENSAGEM');
```

## 📱 Responsividade

O tema é totalmente responsivo e se adapta a:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🔧 Requisitos

- WordPress 5.0 ou superior
- PHP 7.4 ou superior
- Navegadores modernos (Chrome, Firefox, Safari, Edge)

## 📝 Suporte

Para suporte e dúvidas sobre o tema, entre em contato através do site da Caroll Tomathis.

## 📄 Licença

Este tema está licenciado sob a GPL v2 ou posterior.

## 🎯 Funcionalidades Implementadas

- ✅ Design cinematográfico com efeitos visuais
- ✅ Header sticky com navegação
- ✅ Footer com informações de contato
- ✅ Templates para blog, posts individuais, arquivos e busca
- ✅ Sistema de comentários estilizado
- ✅ Botão flutuante do WhatsApp
- ✅ Suporte a imagens destacadas
- ✅ Paginação de posts
- ✅ Suporte a widgets
- ✅ Menu de navegação personalizado
- ✅ Logo personalizado
- ✅ Otimização para SEO

## 🔄 Atualizações Futuras

Possíveis melhorias para versões futuras:
- Menu mobile responsivo
- Mais opções de personalização
- Suporte a mais tipos de post
- Integração com redes sociais
- Modo escuro/claro (se necessário)

---

**Desenvolvido com ❤️ para Caroll Tomathis**

