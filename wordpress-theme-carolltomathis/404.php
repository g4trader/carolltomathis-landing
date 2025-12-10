<?php
/**
 * The template for displaying 404 pages
 *
 * @package CarollTomathis
 */

get_header();
?>

<section class="section pt-12 pb-20">
    <div class="max-w-4xl mx-auto space-y-8 text-center">
        <div class="space-y-4">
            <h1 class="font-display text-4xl font-bold leading-tight text-champagne" style="font-size: 2.5rem;">
                <?php _e('404', 'carolltomathis'); ?>
            </h1>
            <p class="text-lg" style="color: rgba(249, 229, 216, 0.8);">
                <?php _e('Página não encontrada.', 'carolltomathis'); ?>
            </p>
            <p class="text-base" style="color: rgba(249, 229, 216, 0.7);">
                <?php _e('A página que você está procurando não existe ou foi movida.', 'carolltomathis'); ?>
            </p>
        </div>

        <div class="card-soft inline-block">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-primary">
                <?php _e('Voltar para a página inicial', 'carolltomathis'); ?>
            </a>
        </div>
    </div>
</section>

<?php
get_footer();

