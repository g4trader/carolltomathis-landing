<?php
/**
 * The template for displaying comments
 *
 * @package CarollTomathis
 */

if (post_password_required()) {
    return;
}
?>

<div class="comments-area">
    <?php if (have_comments()) : ?>
        <h3 class="comments-title">
            <?php
            $comment_count = get_comments_number();
            if ($comment_count == 1) {
                printf(__('Um comentário', 'carolltomathis'));
            } else {
                printf(__('%s comentários', 'carolltomathis'), number_format_i18n($comment_count));
            }
            ?>
        </h3>

        <ol class="comment-list">
            <?php
            wp_list_comments(array(
                'style'       => 'ol',
                'short_ping'  => true,
                'callback'    => 'carolltomathis_comment',
            ));
            ?>
        </ol>

        <?php
        the_comments_pagination(array(
            'prev_text' => __('&larr; Comentários anteriores', 'carolltomathis'),
            'next_text' => __('Próximos comentários &rarr;', 'carolltomathis'),
        ));
        ?>
    <?php endif; ?>

    <?php
    if (!comments_open() && get_comments_number() && post_type_supports(get_post_type(), 'comments')) :
    ?>
        <p class="no-comments"><?php _e('Comentários estão fechados.', 'carolltomathis'); ?></p>
    <?php endif; ?>

    <?php
    comment_form(array(
        'title_reply'          => __('Deixe um comentário', 'carolltomathis'),
        'title_reply_to'       => __('Deixe uma resposta para %s', 'carolltomathis'),
        'cancel_reply_link'    => __('Cancelar resposta', 'carolltomathis'),
        'label_submit'         => __('Enviar comentário', 'carolltomathis'),
        'comment_field'        => '<p class="comment-form-comment"><label for="comment">' . __('Comentário', 'carolltomathis') . '</label><textarea id="comment" name="comment" cols="45" rows="8" required></textarea></p>',
    ));
    ?>
</div>

<?php
/**
 * Custom comment callback
 */
function carolltomathis_comment($comment, $args, $depth) {
    if ('div' === $args['style']) {
        $tag       = 'div';
        $add_below = 'comment';
    } else {
        $tag       = 'li';
        $add_below = 'div-comment';
    }
    ?>
    <<?php echo $tag; ?> <?php comment_class(empty($args['has_children']) ? '' : 'parent'); ?> id="comment-<?php comment_ID(); ?>">
    <div class="comment">
        <div class="comment-author vcard">
            <?php
            if ($args['avatar_size'] != 0) {
                echo get_avatar($comment, $args['avatar_size']);
            }
            ?>
            <cite class="comment-author"><?php comment_author_link(); ?></cite>
        </div>

        <?php if ($comment->comment_approved == '0') : ?>
            <em class="comment-awaiting-moderation"><?php _e('Seu comentário está aguardando moderação.', 'carolltomathis'); ?></em>
            <br />
        <?php endif; ?>

        <div class="comment-meta commentmetadata">
            <span class="comment-date">
                <a href="<?php echo htmlspecialchars(get_comment_link($comment->comment_ID)); ?>">
                    <?php
                    printf(
                        __('%1$s às %2$s', 'carolltomathis'),
                        get_comment_date(),
                        get_comment_time()
                    );
                    ?>
                </a>
            </span>
            <?php edit_comment_link(__('(Editar)', 'carolltomathis'), '  ', ''); ?>
        </div>

        <div class="comment-content">
            <?php comment_text(); ?>
        </div>

        <div class="reply">
            <?php
            comment_reply_link(array_merge($args, array(
                'add_below' => $add_below,
                'depth'     => $depth,
                'max_depth' => $args['max_depth'],
            )));
            ?>
        </div>
    </div>
    <?php
}
?>

