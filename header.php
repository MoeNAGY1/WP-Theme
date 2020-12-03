<?php
/**
 * MoeNAGY.dev // Header
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?> ?><?php bloginfo('name'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title('&raquo;','true','right'); ?><?php bloginfo('name'); ?></title>
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <link href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;900&family=Montserrat&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://use.fontawesome.com/790cdebb81.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js"></script>
    <?php wp_head(); ?>
</head>

<!-- //////////////// BODY & HEADER BEGIN //////////////// -->

<body <?php body_class(); ?>>
    <header>
        <div class="cursor"></div>
        <div class="cursor-follower"></div>

        <div class="nav_wrapper">
            <a href="https://www.cst4708.moenagy.dev">
                <div class="logo">
                    Moe<span>N</span>AGY
                </div>
            </a>

            <div class="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class="header_wrapper">
            <div class="scroll_down social-link"><?php echo get_the_title(); ?>
            </div>
        </div>

        <div class="navigation__overlay">
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <div class="navigation__items">
                <div class="navigation__container">
                    <?php
						wp_nav_menu( array(
							'theme_location'	=> 'primary',
                            'menu'              => 'Menu',
							'container'			=> 'navigation__container ',
							'container_class'	=> 'navigation__items link ',
							'menu_class'		=> 'navigation__link link '
						) );
					?>
                </div>
            </div>

            <div class="navigation__social">
                <a href="#" class="social-link">
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
                <a href="#" class="social-link">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#" class="social-link">
                    <i class="fa fa-github" aria-hidden="true"></i>
                </a>
            </div>

            <div class="copyright-wrapper">
                <p class="copyright">..::All rights reserved ©2020 | MoeNAGY.dev::..</p>
            </div>
        </div>
    </header>
