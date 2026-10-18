<?php
/**
 * The Header for AVR Web Consulting Theme
 *
 * @package AVR_Web_Consulting
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class('bg-white text-slate-900 font-sans antialiased selection:bg-cyan-500 selection:text-white min-h-screen flex flex-col justify-between'); ?>>
<?php wp_body_open(); ?>

<a class="screen-reader-text" href="#main-content">
    <?php esc_html_e('Skip to content', 'avr-web-consulting'); ?>
</a>

<!-- Header Navigation -->
<header class="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 transition-all duration-200">
    <div class="container-page flex h-16 items-center justify-between gap-3 sm:gap-4 lg:h-20">
        <!-- Brand Unit -->
        <?php
        $custom_logo_id = get_theme_mod('custom_logo');
        $logo_url = '';
        if ($custom_logo_id) {
            $logo_data = wp_get_attachment_image_src($custom_logo_id, 'full');
            if ($logo_data && !empty($logo_data[0])) {
                $logo_url = $logo_data[0];
            }
        }
        if (empty($logo_url)) {
            $fallback_logo = get_template_directory_uri() . '/1790648464804.png';
            if (!file_exists(get_template_directory() . '/1790648464804.png')) {
                $fallback_logo = get_template_directory_uri() . '/public/1790648464804.png';
            }
            $logo_url = $fallback_logo;
        }
        ?>
        <a href="<?php echo esc_url(home_url('/')); ?>" class="site-branding flex items-center gap-2.5 sm:gap-3.5 min-w-0 shrink group py-1" rel="home">
            <img
                src="<?php echo esc_url($logo_url); ?>"
                alt="<?php echo esc_attr(get_bloginfo('name')); ?> logo"
                class="site-logo custom-logo h-8 sm:h-11 md:h-12 w-auto max-h-8 sm:max-h-11 md:max-h-12 max-w-[180px] sm:max-w-[220px] object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
                style="height: 44px; max-height: 48px; width: auto; max-width: 220px; object-fit: contain; display: inline-block;"
                width="48"
                height="48"
            />
            <span class="flex flex-col justify-center min-w-0">
                <span class="site-title truncate text-sm font-bold tracking-tight text-slate-900 sm:text-lg lg:text-xl leading-tight">
                    <?php bloginfo('name'); ?>
                </span>
                <span class="site-description mt-0.5 truncate text-[9px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[11px] lg:text-[11.5px] leading-tight hidden min-[380px]:block">
                    <?php bloginfo('description'); ?>
                </span>
            </span>
        </a>

        <!-- Desktop Navigation -->
        <nav aria-label="<?php esc_attr_e('Primary Menu', 'avr-web-consulting'); ?>" class="hidden items-center gap-1 xl:flex shrink-0">
            <?php
            if (has_nav_menu('primary')) {
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'flex items-center gap-1',
                    'fallback_cb'    => 'avr_default_menu',
                    'depth'          => 2,
                ));
            } else {
                avr_default_menu();
            }
            ?>
        </nav>

        <!-- Right Header Action & Mobile Trigger -->
        <div class="flex items-center gap-2 sm:gap-3 shrink-0">
            <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="hidden sm:inline-flex items-center justify-center rounded-full bg-[#22a7e0] px-5 py-2.5 text-xs lg:text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1995cb] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 touch-target-min">
                <?php esc_html_e('Request Audit', 'avr-web-consulting'); ?>
            </a>

            <!-- Mobile & Tablet Hamburger Button -->
            <button
                type="button"
                id="mobile-menu-trigger"
                class="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 xl:hidden touch-manipulation"
                aria-expanded="false"
                aria-controls="mobile-drawer"
                aria-label="<?php esc_attr_e('Toggle navigation menu', 'avr-web-consulting'); ?>"
            >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </div>
</header>

<!-- Mobile Drawer Backdrop & Panel -->
<div id="mobile-drawer-backdrop" class="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 opacity-0 pointer-events-none xl:hidden" aria-hidden="true"></div>

<div
    id="mobile-drawer"
    class="fixed inset-y-0 right-0 z-50 w-full max-w-sm sm:max-w-md bg-white p-6 shadow-2xl transition-transform duration-300 ease-out translate-x-full overflow-y-auto xl:hidden flex flex-col justify-between"
    role="dialog"
    aria-modal="true"
    aria-label="<?php esc_attr_e('Mobile Navigation', 'avr-web-consulting'); ?>"
>
    <div>
        <div class="flex items-center justify-between border-b border-slate-100 pb-4">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-2.5 min-w-0" rel="home">
                <img
                    src="<?php echo esc_url($logo_url); ?>"
                    alt="<?php echo esc_attr(get_bloginfo('name')); ?> logo"
                    class="h-8 w-auto max-h-8 object-contain shrink-0"
                    style="height: 32px; max-height: 32px; width: auto; max-width: 140px; object-fit: contain;"
                    width="32"
                    height="32"
                />
                <span class="font-display text-base font-bold text-slate-900 truncate"><?php bloginfo('name'); ?></span>
            </a>
            <button
                type="button"
                id="mobile-menu-close"
                class="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900 touch-manipulation"
                aria-label="<?php esc_attr_e('Close navigation menu', 'avr-web-consulting'); ?>"
            >
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <nav class="mt-6 flex flex-col gap-1">
            <?php
            if (has_nav_menu('primary')) {
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'space-y-1',
                    'fallback_cb'    => 'avr_default_mobile_menu',
                ));
            } else {
                avr_default_mobile_menu();
            }
            ?>
        </nav>
    </div>

    <div class="mt-8 border-t border-slate-100 pt-6">
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="flex h-12 w-full items-center justify-center rounded-full bg-[#22a7e0] font-semibold text-white shadow-md hover:bg-[#1995cb] transition-colors">
            <?php esc_html_e('Book Free Consultation', 'avr-web-consulting'); ?>
        </a>
        <div class="mt-4 flex items-center justify-center gap-3 text-xs text-slate-500">
            <a href="tel:<?php echo esc_attr(avr_get_option('avr_phone', '+919182543249')); ?>" class="hover:text-[#22a7e0] p-2">
                <?php echo esc_html(avr_get_option('avr_phone', '+91-9182543249')); ?>
            </a>
            <span>&bull;</span>
            <a href="mailto:<?php echo esc_attr(avr_get_option('avr_email', 'info@avrwebconsulting.com')); ?>" class="hover:text-[#22a7e0] p-2">
                <?php echo esc_html(avr_get_option('avr_email', 'info@avrwebconsulting.com')); ?>
            </a>
        </div>
    </div>
</div>

<main id="main-content" class="flex-1 focus:outline-none" tabindex="-1">
