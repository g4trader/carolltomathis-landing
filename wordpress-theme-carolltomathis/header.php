<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div class="grain-overlay"></div>

<header class="site-header">
    <div class="section">
        <nav class="header-content main-navigation">
            <!-- Logo -->
            <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo" rel="home">
                Caroll Tomathis
            </a>

            <!-- Botão de menu mobile (hambúrguer) -->
            <button class="mobile-menu-toggle" aria-label="<?php esc_attr_e('Abrir menu', 'carolltomathis'); ?>" aria-expanded="false" aria-controls="primary-menu">
                <span class="mobile-menu-bar"></span>
                <span class="mobile-menu-bar"></span>
                <span class="mobile-menu-bar"></span>
            </button>

            <!-- Menu -->
            <?php
            // Verificar se há menu registrado
            if (has_nav_menu('primary')) {
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class'     => 'nav-menu',
                    'menu_id'        => 'primary-menu',
                    'container'      => false,
                    'container_class'=> '',
                    'container_id'   => '',
                    'fallback_cb'    => 'carolltomathis_default_menu',
                    'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                    'item_spacing'   => 'discard',
                ));
            } else {
                // Menu padrão se não houver menu configurado
                carolltomathis_default_menu();
            }
            ?>
        </nav>
    </div>
</header>

<main class="site-main">

