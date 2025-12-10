# Guia de Instalação - Tema WordPress Caroll Tomathis

## 📦 Passo a Passo de Instalação

### 1. Preparação

Antes de instalar, certifique-se de que você tem:
- WordPress 5.0 ou superior instalado
- Acesso ao painel administrativo do WordPress
- Acesso FTP ou ao gerenciador de arquivos do servidor (opcional)

### 2. Instalação via Painel WordPress (Recomendado)

1. **Acesse o painel administrativo** do WordPress
2. Vá em **Aparência > Temas**
3. Clique em **Adicionar novo**
4. Clique em **Enviar tema**
5. Clique em **Escolher arquivo** e selecione o arquivo ZIP do tema
6. Clique em **Instalar agora**
7. Após a instalação, clique em **Ativar**

### 3. Instalação via FTP

1. **Extraia a pasta do tema** do arquivo ZIP
2. **Conecte-se ao servidor** via FTP (use FileZilla, Cyberduck ou similar)
3. Navegue até: `/wp-content/themes/`
4. **Faça upload da pasta** `wordpress-theme-carolltomathis`
5. No WordPress, vá em **Aparência > Temas**
6. Encontre o tema "Caroll Tomathis" e clique em **Ativar**

### 4. Configuração Inicial

#### 4.1. Criar Menu de Navegação

1. Vá em **Aparência > Menus**
2. Clique em **Criar um novo menu**
3. Dê um nome ao menu (ex: "Menu Principal")
4. Adicione páginas/itens ao menu:
   - Home (link para página inicial)
   - Sobre (se tiver página)
   - Contato (se tiver página)
   - Blog (link para página de posts)
5. Marque a opção **Menu Principal** em "Localização do tema"
6. Clique em **Salvar menu**

#### 4.2. Configurar Página de Posts

1. Vá em **Configurações > Leitura**
2. Em "Sua página inicial exibe", escolha:
   - **Uma página estática** (se quiser uma página inicial customizada)
   - **Seus últimos posts** (se quiser que o blog seja a página inicial)
3. Se escolher página estática, selecione:
   - **Página inicial**: Escolha a página que será a home
   - **Página de posts**: Escolha ou crie uma página para o blog
4. Clique em **Salvar alterações**

#### 4.3. Adicionar Logo (Opcional)

1. Vá em **Aparência > Personalizar**
2. Clique em **Identidade do Site**
3. Em "Logo", clique em **Selecionar logo**
4. Faça upload da imagem do logo
5. Ajuste o tamanho se necessário
6. Clique em **Publicar**

### 5. Personalização do WhatsApp

O link do WhatsApp está configurado em `functions.php`. Para alterar:

1. Acesse o arquivo `functions.php` do tema
2. Localize a linha:
   ```php
   define('WHATSAPP_LINK', 'https://wa.me/555184002284?text=...');
   ```
3. Altere o número e a mensagem conforme necessário
4. Salve o arquivo

**Nota**: Se você fizer alterações diretamente no arquivo, elas serão perdidas quando o tema for atualizado. Considere criar um child theme para personalizações.

### 6. Criar Child Theme (Recomendado para Personalizações)

Para fazer alterações personalizadas sem perder ao atualizar o tema:

1. Crie uma nova pasta: `/wp-content/themes/carolltomathis-child/`
2. Crie um arquivo `style.css` com:
   ```css
   /*
   Theme Name: Caroll Tomathis Child
   Template: wordpress-theme-carolltomathis
   */
   @import url('../wordpress-theme-carolltomathis/style.css');
   
   /* Suas personalizações aqui */
   ```
3. Crie um arquivo `functions.php` com:
   ```php
   <?php
   function carolltomathis_child_enqueue_styles() {
       wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
   }
   add_action('wp_enqueue_scripts', 'carolltomathis_child_enqueue_styles');
   ?>
   ```
4. Ative o child theme em **Aparência > Temas**

### 7. Verificação

Após a instalação, verifique:

- ✅ O tema está ativo
- ✅ O menu aparece no topo do site
- ✅ O rodapé está visível
- ✅ O botão do WhatsApp aparece no canto inferior direito
- ✅ Os posts do blog estão sendo exibidos corretamente
- ✅ O design está igual ao site principal

### 8. Screenshot do Tema (Opcional)

Para adicionar uma imagem de preview do tema:

1. Capture uma tela do tema em funcionamento
2. Redimensione para 1200x900 pixels
3. Salve como `screenshot.png`
4. Coloque na pasta raiz do tema: `/wordpress-theme-carolltomathis/screenshot.png`

## 🆘 Solução de Problemas

### O menu não aparece
- Verifique se criou um menu em **Aparência > Menus**
- Certifique-se de que o menu está atribuído à localização "Menu Principal"

### O design não está correto
- Limpe o cache do navegador (Ctrl+F5 ou Cmd+Shift+R)
- Verifique se o tema está ativo
- Desative plugins de cache temporariamente

### Erro ao ativar o tema
- Verifique se o WordPress está atualizado
- Verifique se o PHP é 7.4 ou superior
- Verifique os logs de erro do servidor

### Botão WhatsApp não aparece
- Verifique se o arquivo `footer.php` está presente
- Verifique se não há erros de JavaScript no console do navegador

## 📞 Suporte

Para mais ajuda, consulte o README.md ou entre em contato através do site da Caroll Tomathis.

