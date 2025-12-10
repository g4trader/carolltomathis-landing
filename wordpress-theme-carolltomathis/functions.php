<?php
/**
 * Caroll Tomathis Theme Functions
 *
 * @package CarollTomathis
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Theme Setup
 */
function carolltomathis_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    add_theme_support('custom-logo');
    add_theme_support('responsive-embeds');
    add_theme_support('wp-block-styles');
    add_theme_support('align-wide');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'carolltomathis'),
    ));
    
    // Set content width
    $GLOBALS['content_width'] = 1200;
}
add_action('after_setup_theme', 'carolltomathis_setup');

/**
 * Enqueue Scripts and Styles
 */
function carolltomathis_scripts() {
    // Enqueue theme stylesheet
    wp_enqueue_style('carolltomathis-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
    
    // Enqueue Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap', array(), null);
    
    // Enqueue theme JavaScript
    wp_enqueue_script('carolltomathis-script', get_template_directory_uri() . '/js/theme.js', array(), wp_get_theme()->get('Version'), true);
    
    // Add comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'carolltomathis_scripts');

/**
 * Register Widget Areas
 */
function carolltomathis_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'carolltomathis'),
        'id'            => 'sidebar-1',
        'description'   => __('Adicione widgets aqui.', 'carolltomathis'),
        'before_widget' => '<section id="%1$s" class="widget %2$s card-soft">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'carolltomathis_widgets_init');

/**
 * Custom Excerpt Length
 */
function carolltomathis_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'carolltomathis_excerpt_length');

/**
 * Custom Excerpt More
 */
function carolltomathis_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'carolltomathis_excerpt_more');

/**
 * Add WhatsApp Link Constant
 */
define('WHATSAPP_LINK', 'https://wa.me/555184002284?text=Oi%20Carol,%20vim%20do%20seu%20site%20e%20quero%20saber%20mais%20sobre%20a%20mentoria.');

/**
 * Custom Post Meta
 */
function carolltomathis_posted_on() {
    $time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
    
    $time_string = sprintf(
        $time_string,
        esc_attr(get_the_date('c')),
        esc_html(get_the_date('j \d\e F \d\e Y'))
    );
    
    return $time_string;
}

/**
 * Get Post Category
 */
function carolltomathis_post_category() {
    $categories = get_the_category();
    if (!empty($categories)) {
        return esc_html($categories[0]->name);
    }
    return '';
}

/**
 * Add Body Classes
 */
function carolltomathis_body_classes($classes) {
    if (is_singular()) {
        $classes[] = 'singular';
    }
    if (is_home() || is_archive()) {
        $classes[] = 'blog-archive';
    }
    return $classes;
}
add_filter('body_class', 'carolltomathis_body_classes');

/**
 * Customize Archive Title
 */
function carolltomathis_archive_title($title) {
    if (is_category()) {
        $title = single_cat_title('', false);
    } elseif (is_tag()) {
        $title = single_tag_title('', false);
    } elseif (is_author()) {
        $title = '<span class="vcard">' . get_the_author() . '</span>';
    } elseif (is_post_type_archive()) {
        $title = post_type_archive_title('', false);
    } elseif (is_tax()) {
        $title = single_term_title('', false);
    }
    return $title;
}
add_filter('get_the_archive_title', 'carolltomathis_archive_title');

/**
 * Add www to URL if not present
 */
function carolltomathis_add_www($url) {
    $parsed = parse_url($url);
    if (isset($parsed['host']) && strpos($parsed['host'], 'www.') !== 0) {
        $parsed['host'] = 'www.' . $parsed['host'];
        $url = '';
        if (isset($parsed['scheme'])) {
            $url .= $parsed['scheme'] . '://';
        }
        $url .= $parsed['host'];
        if (isset($parsed['port'])) {
            $url .= ':' . $parsed['port'];
        }
        if (isset($parsed['path'])) {
            $url .= $parsed['path'];
        }
        if (isset($parsed['query'])) {
            $url .= '?' . $parsed['query'];
        }
        if (isset($parsed['fragment'])) {
            $url .= '#' . $parsed['fragment'];
        }
    }
    return $url;
}

/**
 * Default Menu Function - Always shows all menu items
 */
function carolltomathis_default_menu() {
    echo '<ul class="nav-menu">';
    
    // Home
    $is_home = is_front_page();
    $home_class = $is_home ? 'current-menu-item' : '';
    echo '<li><a href="' . esc_url(home_url('/')) . '" class="' . $home_class . '">Home</a></li>';
    
    // Sobre - sempre mostrar, mesmo se a página não existir, com www
    $sobre_page = get_page_by_path('sobre');
    $sobre_url = $sobre_page ? get_permalink($sobre_page) : home_url('/sobre');
    $sobre_url = carolltomathis_add_www($sobre_url);
    $is_sobre = is_page('sobre');
    $sobre_class = $is_sobre ? 'current-menu-item' : '';
    echo '<li><a href="' . esc_url($sobre_url) . '" class="' . $sobre_class . '">Sobre</a></li>';
    
    // Contato - sempre mostrar, mesmo se a página não existir, com www
    $contato_page = get_page_by_path('contato');
    $contato_url = $contato_page ? get_permalink($contato_page) : home_url('/contato');
    $contato_url = carolltomathis_add_www($contato_url);
    $is_contato = is_page('contato');
    $contato_class = $is_contato ? 'current-menu-item' : '';
    echo '<li><a href="' . esc_url($contato_url) . '" class="' . $contato_class . '">Contato</a></li>';
    
    // Blog
    $blog_url = get_permalink(get_option('page_for_posts'));
    if (!$blog_url) {
        $blog_url = home_url('/blog');
    }
    $is_blog = (is_home() && !is_front_page()) || is_category() || is_tag() || is_single() || is_archive() || is_search();
    $blog_class = $is_blog ? 'current-menu-item' : '';
    echo '<li><a href="' . esc_url($blog_url) . '" class="' . $blog_class . '">Blog</a></li>';
    
    echo '</ul>';
}

/**
 * Add Support for Custom Logo
 */
function carolltomathis_custom_logo_setup() {
    $defaults = array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array('site-title', 'site-description'),
    );
    add_theme_support('custom-logo', $defaults);
}
add_action('after_setup_theme', 'carolltomathis_custom_logo_setup');

