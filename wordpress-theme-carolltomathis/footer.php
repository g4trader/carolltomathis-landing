</main><!-- .site-main -->

<footer class="site-footer">
    <div class="section">
        <div class="footer-content">
            <!-- Sobre -->
            <div class="footer-section">
                <h3>Caroll Tomathis</h3>
                <p>Mentora de relacionamentos para mulheres fortes que decidiram viver relações igualmente fortes.</p>
            </div>

            <!-- Links -->
            <div class="footer-section">
                <h3>Links</h3>
                <ul>
                    <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
                    <?php
                    $sobre_page = get_page_by_path('sobre');
                    if ($sobre_page) {
                        echo '<li><a href="' . esc_url(get_permalink($sobre_page)) . '">Sobre</a></li>';
                    }
                    $contato_page = get_page_by_path('contato');
                    if ($contato_page) {
                        echo '<li><a href="' . esc_url(get_permalink($contato_page)) . '">Contato</a></li>';
                    }
                    $blog_url = get_permalink(get_option('page_for_posts'));
                    if (!$blog_url) {
                        $blog_url = home_url('/');
                    }
                    echo '<li><a href="' . esc_url($blog_url) . '">Blog</a></li>';
                    ?>
                </ul>
            </div>

            <!-- Contato -->
            <div class="footer-section">
                <h3>Contato</h3>
                <ul>
                    <li>
                        <a href="<?php echo esc_url(WHATSAPP_LINK); ?>" target="_blank" rel="noopener noreferrer">
                            WhatsApp: +55 (51) 8400-2284
                        </a>
                    </li>
                    <li>
                        <a href="mailto:mentoria@carolltomathis.com.br">
                            E-mail: mentoria@carolltomathis.com.br
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/carolltomathis/" target="_blank" rel="noopener noreferrer">
                            Instagram: @carolltomathis
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Copyright -->
        <div class="footer-copyright">
            <p>&copy; <?php echo date('Y'); ?> Caroll Tomathis. Todos os direitos reservados.</p>
        </div>
    </div>
</footer>

<!-- Botão flutuante de WhatsApp -->
<a href="<?php echo esc_url(WHATSAPP_LINK); ?>" 
   target="_blank" 
   class="whatsapp-button" 
   aria-label="<?php esc_attr_e('Falar com a Caroll no WhatsApp', 'carolltomathis'); ?>">
    <span>💬</span>
</a>

<?php wp_footer(); ?>

</body>
</html>

