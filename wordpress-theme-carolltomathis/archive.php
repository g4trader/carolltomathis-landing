<?php
/**
 * The template for displaying archive pages
 *
 * @package CarollTomathis
 */

get_header();
?>

<section class="section pt-12 pb-20">
    <div class="max-w-4xl mx-auto space-y-12">
        <div class="space-y-4">
            <p class="text-label"><?php _e('Blog', 'carolltomathis'); ?></p>
            <h1 class="font-display text-4xl font-bold leading-tight text-champagne" style="font-size: 2.5rem;">
                <?php
                if (is_category()) {
                    single_cat_title();
                } elseif (is_tag()) {
                    single_tag_title();
                } elseif (is_author()) {
                    the_author();
                } elseif (is_date()) {
                    if (is_year()) {
                        echo get_the_date('Y');
                    } elseif (is_month()) {
                        echo get_the_date('F \d\e Y');
                    } elseif (is_day()) {
                        echo get_the_date('j \d\e F \d\e Y');
                    }
                } else {
                    _e('Arquivo', 'carolltomathis');
                }
                ?>
            </h1>
            <?php
            $description = get_the_archive_description();
            if ($description) {
                echo '<p class="text-base" style="color: rgba(249, 229, 216, 0.8);">' . $description . '</p>';
            }
            ?>
        </div>

        <?php if (have_posts()) : ?>
            <div class="post-list">
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('card-soft post-card'); ?>>
                        <a href="<?php the_permalink(); ?>" class="block">
                            <div class="space-y-3">
                                <div class="post-meta">
                                    <?php
                                    $category = carolltomathis_post_category();
                                    if ($category) {
                                        echo '<span class="badge-pill" style="font-size: 10px;">' . esc_html($category) . '</span>';
                                    }
                                    ?>
                                    <span><?php echo carolltomathis_posted_on(); ?></span>
                                </div>
                                
                                <h2 class="post-title">
                                    <?php the_title(); ?>
                                </h2>
                                
                                <?php if (has_excerpt() || get_the_excerpt()) : ?>
                                    <p class="post-excerpt">
                                        <?php the_excerpt(); ?>
                                    </p>
                                <?php endif; ?>
                                
                                <span class="post-link">
                                    <?php _e('Ler mais', 'carolltomathis'); ?>
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </article>
                <?php endwhile; ?>
            </div>

            <!-- Paginação -->
            <nav class="pagination" role="navigation" aria-label="<?php esc_attr_e('Navegação de posts', 'carolltomathis'); ?>">
                <?php
                the_posts_pagination(array(
                    'mid_size'  => 2,
                    'prev_text' => __('&larr; Anterior', 'carolltomathis'),
                    'next_text' => __('Próxima &rarr;', 'carolltomathis'),
                ));
                ?>
            </nav>

        <?php else : ?>
            <div class="card-soft text-center py-12">
                <p style="color: rgba(249, 229, 216, 0.7);">
                    <?php _e('Nenhum post encontrado neste arquivo.', 'carolltomathis'); ?>
                </p>
            </div>
        <?php endif; ?>
    </div>
</section>

<?php
get_footer();

