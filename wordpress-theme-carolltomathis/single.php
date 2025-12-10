<?php
/**
 * The template for displaying single posts
 *
 * @package CarollTomathis
 */

get_header();
?>

<article class="section pt-12 pb-20">
    <div class="max-w-4xl mx-auto space-y-8">
        <!-- Botão de voltar -->
        <a href="<?php echo esc_url(get_permalink(get_option('page_for_posts'))); ?>" class="back-link">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <?php _e('Voltar para o blog', 'carolltomathis'); ?>
        </a>

        <?php while (have_posts()) : the_post(); ?>
            <!-- Cabeçalho do artigo -->
            <div class="single-post-header space-y-4">
                <div class="post-meta">
                    <?php
                    $category = carolltomathis_post_category();
                    if ($category) {
                                        echo '<span class="badge-pill" style="font-size: 10px;">' . esc_html($category) . '</span>';
                    }
                    ?>
                    <span><?php echo carolltomathis_posted_on(); ?></span>
                </div>
                
                <h1 class="font-display text-4xl font-bold leading-tight text-champagne" style="font-size: 2.5rem;">
                    <?php the_title(); ?>
                </h1>
                
                <?php if (has_excerpt()) : ?>
                    <p class="text-lg leading-relaxed" style="color: rgba(249, 229, 216, 0.8);">
                        <?php the_excerpt(); ?>
                    </p>
                <?php endif; ?>
            </div>

            <!-- Imagem destacada -->
            <?php if (has_post_thumbnail()) : ?>
                <div class="post-thumbnail">
                    <?php the_post_thumbnail('large', array('class' => 'w-full rounded-3xl', 'style' => 'box-shadow: var(--shadow-card);')); ?>
                </div>
            <?php endif; ?>

            <!-- Conteúdo do artigo -->
            <div class="card-soft single-post-content">
                <?php
                the_content();
                
                wp_link_pages(array(
                    'before' => '<div class="page-links">' . __('Páginas:', 'carolltomathis'),
                    'after'  => '</div>',
                ));
                ?>
            </div>

            <!-- Rodapé do artigo -->
            <div class="single-post-footer">
                <a href="<?php echo esc_url(get_permalink(get_option('page_for_posts'))); ?>" class="post-link">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <?php _e('Ver todos os artigos', 'carolltomathis'); ?>
                </a>
            </div>

            <!-- Comentários -->
            <?php
            if (comments_open() || get_comments_number()) {
                comments_template();
            }
            ?>

        <?php endwhile; ?>
    </div>
</article>

<?php
get_footer();

