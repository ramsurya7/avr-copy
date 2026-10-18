<?php
/**
 * AVR Web Consulting Theme Functions
 *
 * @package AVR_Web_Consulting
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

define('AVR_THEME_VERSION', '1.1.0');

/**
 * Theme Setup
 */
function avr_theme_setup() {
    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(1200, 675, true);

    // Custom logo support.
    add_theme_support('custom-logo', array(
        'height'      => 60,
        'width'       => 240,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Switch default core markup for search form, comment form, etc. to HTML5.
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Responsive embeds & Gutenberg wide align
    add_theme_support('responsive-embeds');
    add_theme_support('align-wide');
    add_theme_support('editor-styles');
    add_editor_style('style.css');

    // Register navigation menus.
    register_nav_menus(array(
        'primary' => __('Primary Navigation', 'avr-web-consulting'),
        'footer'  => __('Footer Navigation', 'avr-web-consulting'),
    ));

    // Starter Content for Fresh WordPress Installations
    add_theme_support('starter-content', array(
        'options' => array(
            'show_on_front'  => 'page',
            'page_on_front'  => '{{home}}',
            'page_for_posts' => '{{blog}}',
        ),
        'posts' => array(
            'home' => array(
                'post_type'    => 'page',
                'post_title'   => _x('Home', 'Theme starter content', 'avr-web-consulting'),
                'template'     => 'front-page.php',
            ),
            'about' => array(
                'post_type'    => 'page',
                'post_title'   => _x('About Us', 'Theme starter content', 'avr-web-consulting'),
                'post_content' => '<!-- wp:paragraph --><p>AVR Web Consulting is a hybrid digital marketing and SEO consultancy based in Visakhapatnam, Andhra Pradesh, India. We combine traditional high-converting technical SEO with future-proof Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and LLM search visibility.</p><!-- /wp:paragraph -->',
            ),
            'seo-services' => array(
                'post_type'    => 'page',
                'post_title'   => _x('SEO Services', 'Theme starter content', 'avr-web-consulting'),
                'template'     => 'template-service.php',
            ),
            'ai-seo' => array(
                'post_type'    => 'page',
                'post_title'   => _x('AI SEO & Visibility', 'Theme starter content', 'avr-web-consulting'),
                'template'     => 'template-service.php',
            ),
            'web-design-development' => array(
                'post_type'    => 'page',
                'post_title'   => _x('Web Design & Development', 'Theme starter content', 'avr-web-consulting'),
                'template'     => 'template-service.php',
            ),
            'pricing' => array(
                'post_type'    => 'page',
                'post_title'   => _x('Pricing Packages', 'Theme starter content', 'avr-web-consulting'),
                'template'     => 'template-pricing.php',
            ),
            'faqs' => array(
                'post_type'    => 'page',
                'post_title'   => _x('Frequently Asked Questions', 'Theme starter content', 'avr-web-consulting'),
                'template'     => 'template-faqs.php',
            ),
            'contact' => array(
                'post_type'    => 'page',
                'post_title'   => _x('Contact Us', 'Theme starter content', 'avr-web-consulting'),
                'template'     => 'template-contact.php',
            ),
            'blog' => array(
                'post_type'    => 'page',
                'post_title'   => _x('Blog & Guides', 'Theme starter content', 'avr-web-consulting'),
            ),
        ),
        'nav_menus' => array(
            'primary' => array(
                'name'  => __('Primary Navigation', 'avr-web-consulting'),
                'items' => array(
                    'page_home',
                    'page_seo-services',
                    'page_ai-seo',
                    'page_web-design-development',
                    'page_pricing',
                    'page_about',
                    'page_contact',
                ),
            ),
        ),
    ));
}
add_action('after_setup_theme', 'avr_theme_setup');

/**
 * Enqueue scripts and styles.
 */
function avr_enqueue_scripts() {
    // 1. Google Font: Plus Jakarta Sans
    wp_enqueue_style(
        'avr-google-fonts',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap',
        array(),
        null
    );

    // 2. Enqueue Tailwind build if available
    $tailwind_css_path = get_template_directory() . '/assets/css/main.css';
    if (file_exists($tailwind_css_path)) {
        wp_enqueue_style(
            'avr-tailwind-build',
            get_template_directory_uri() . '/assets/css/main.css',
            array('avr-google-fonts'),
            filemtime($tailwind_css_path)
        );
    }

    // 3. Main theme stylesheet (style.css)
    $style_deps = array('avr-google-fonts');
    if (file_exists($tailwind_css_path)) {
        $style_deps[] = 'avr-tailwind-build';
    }
    wp_enqueue_style(
        'avr-theme-style',
        get_stylesheet_uri(),
        $style_deps,
        AVR_THEME_VERSION
    );

    // 4. Interactive JavaScript
    $theme_js_path = get_template_directory() . '/assets/js/theme.js';
    if (file_exists($theme_js_path)) {
        wp_enqueue_script(
            'avr-theme-js',
            get_template_directory_uri() . '/assets/js/theme.js',
            array(),
            filemtime($theme_js_path),
            true
        );

        wp_localize_script('avr-theme-js', 'avr_ajax_obj', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce'    => wp_create_nonce('avr_inquiry_nonce'),
        ));
    }
}
add_action('wp_enqueue_scripts', 'avr_enqueue_scripts');

/**
 * Customizer Controls
 * Complete live editing for Hero section, Company details, Statistics, and Social Links.
 */
function avr_customize_register($wp_customize) {
    // PANEL: AVR Theme Options
    $wp_customize->add_panel('avr_theme_options', array(
        'title'       => __('AVR Theme Customizer', 'avr-web-consulting'),
        'description' => __('Customize hero copy, company contacts, stats counters, and social links.', 'avr-web-consulting'),
        'priority'    => 25,
    ));

    // SECTION 1: Hero Section
    $wp_customize->add_section('avr_hero_section', array(
        'title'    => __('Hero Section (Front Page)', 'avr-web-consulting'),
        'panel'    => 'avr_theme_options',
        'priority' => 10,
    ));

    $wp_customize->add_setting('avr_hero_badge', array(
        'default'           => 'Full-service digital marketing agency',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('avr_hero_badge', array(
        'label'    => __('Badge Text', 'avr-web-consulting'),
        'section'  => 'avr_hero_section',
        'type'     => 'text',
    ));

    $wp_customize->add_setting('avr_hero_headline', array(
        'default'           => 'Grow Your Business With Smarter Digital Marketing',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('avr_hero_headline', array(
        'label'    => __('Hero Headline', 'avr-web-consulting'),
        'section'  => 'avr_hero_section',
        'type'     => 'text',
    ));

    $wp_customize->add_setting('avr_hero_subtitle', array(
        'default'           => 'AVR Web Consulting helps businesses build stronger online visibility, attract qualified traffic, generate leads, and grow through SEO, advertising, content marketing, and web development.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('avr_hero_subtitle', array(
        'label'    => __('Hero Subtitle / Description', 'avr-web-consulting'),
        'section'  => 'avr_hero_section',
        'type'     => 'textarea',
    ));

    $wp_customize->add_setting('avr_hero_video_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('avr_hero_video_url', array(
        'label'       => __('Custom Video MP4 URL', 'avr-web-consulting'),
        'description' => __('Leave blank to use default agency video (avr.mp4).', 'avr-web-consulting'),
        'section'     => 'avr_hero_section',
        'type'        => 'url',
    ));

    $wp_customize->add_setting('avr_hero_cta_text', array(
        'default'           => 'Request a digital audit',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('avr_hero_cta_text', array(
        'label'    => __('Primary CTA Button Text', 'avr-web-consulting'),
        'section'  => 'avr_hero_section',
        'type'     => 'text',
    ));

    $wp_customize->add_setting('avr_hero_cta_url', array(
        'default'           => '/contact/',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('avr_hero_cta_url', array(
        'label'    => __('Primary CTA Button URL', 'avr-web-consulting'),
        'section'  => 'avr_hero_section',
        'type'     => 'text',
    ));

    // SECTION 2: Company Information
    $wp_customize->add_section('avr_company_info', array(
        'title'    => __('Company Information & Contacts', 'avr-web-consulting'),
        'panel'    => 'avr_theme_options',
        'priority' => 20,
    ));

    $wp_customize->add_setting('avr_phone', array(
        'default'           => '+91-9182543249',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('avr_phone', array(
        'label'    => __('Phone Number', 'avr-web-consulting'),
        'section'  => 'avr_company_info',
        'type'     => 'text',
    ));

    $wp_customize->add_setting('avr_email', array(
        'default'           => 'info@avrwebconsulting.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('avr_email', array(
        'label'    => __('Email Address', 'avr-web-consulting'),
        'section'  => 'avr_company_info',
        'type'     => 'email',
    ));

    $wp_customize->add_setting('avr_whatsapp', array(
        'default'           => 'https://wa.me/919182543249',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('avr_whatsapp', array(
        'label'    => __('WhatsApp URL / Number', 'avr-web-consulting'),
        'section'  => 'avr_company_info',
        'type'     => 'url',
    ));

    $wp_customize->add_setting('avr_address', array(
        'default'           => 'Hero Showroom Lane, D No: 43-18-16, Venkatarajunagar, TSN Colony, Beside Sri Ram Insurance, Dondaparthy, Visakhapatnam – 530016, Andhra Pradesh, India',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('avr_address', array(
        'label'    => __('Office Address', 'avr-web-consulting'),
        'section'  => 'avr_company_info',
        'type'     => 'textarea',
    ));

    $wp_customize->add_setting('avr_hours', array(
        'default'           => 'Monday – Saturday: 9:00 AM – 7:00 PM IST',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('avr_hours', array(
        'label'    => __('Working Hours', 'avr-web-consulting'),
        'section'  => 'avr_company_info',
        'type'     => 'text',
    ));

    // SECTION 3: Statistics Counters
    $wp_customize->add_section('avr_stats_section', array(
        'title'    => __('Statistics & Counters', 'avr-web-consulting'),
        'panel'    => 'avr_theme_options',
        'priority' => 30,
    ));

    $stats_defaults = array(
        'avr_stat_1_num' => '98%',
        'avr_stat_1_txt' => 'Client Retention Rate',
        'avr_stat_2_num' => '250+',
        'avr_stat_2_txt' => 'SEO & Growth Campaigns',
        'avr_stat_3_num' => '12x',
        'avr_stat_3_txt' => 'Average Organic ROI',
        'avr_stat_4_num' => '24h',
        'avr_stat_4_txt' => 'Fast Audit Turnaround',
    );

    foreach ($stats_defaults as $key => $default_val) {
        $wp_customize->add_setting($key, array(
            'default'           => $default_val,
            'sanitize_callback' => 'sanitize_text_field',
        ));
        $wp_customize->add_control($key, array(
            'label'   => ucwords(str_replace(array('avr_', '_'), array('', ' '), $key)),
            'section' => 'avr_stats_section',
            'type'    => 'text',
        ));
    }
}
add_action('customize_register', 'avr_customize_register');

/**
 * Helper to get customizer option with fallback.
 */
function avr_get_option($key, $default = '') {
    return get_theme_mod($key, $default);
}

/**
 * Responsive Table Filter for Gutenberg and classic content
 */
function avr_wrap_content_tables($content) {
    if (is_admin()) {
        return $content;
    }

    $pattern = '/<table(?![^>]*class=["\'][^"\']*table-wrapped)([^>]*)>(.*?)<\/table>/is';
    $replacement = '<div class="table-responsive-wrapper my-6">'
                 . '<div class="table-scroll-hint sm:hidden"><span>Swipe sideways to view table</span> &rarr;</div>'
                 . '<div class="table-scroll-container">'
                 . '<table class="table-wrapped w-full border-collapse text-left text-sm" $1>$2</table>'
                 . '</div>'
                 . '</div>';

    return preg_replace($pattern, $replacement, $content);
}
add_filter('the_content', 'avr_wrap_content_tables', 20);

/**
 * Filter excerpt length & more
 */
function avr_custom_excerpt_length($length) {
    return 28;
}
add_filter('excerpt_length', 'avr_custom_excerpt_length', 999);

function avr_excerpt_more($more) {
    return '&hellip;';
}
add_filter('excerpt_more', 'avr_excerpt_more');

/**
 * Default Desktop Navigation Menu Fallback
 */
function avr_get_nav_structure() {
    return array(
        array(
            'title'    => __('SEO Services', 'avr-web-consulting'),
            'url'      => home_url('/seo-services/'),
            'children' => array(
                array('title' => __('Global SEO', 'avr-web-consulting'), 'url' => home_url('/seo-services/global-seo/'), 'blurb' => __('Multi-country organic growth', 'avr-web-consulting')),
                array('title' => __('Local SEO', 'avr-web-consulting'), 'url' => home_url('/seo-services/local-seo/'), 'blurb' => __('Maps, GMB and near-me rankings', 'avr-web-consulting')),
                array('title' => __('Technical SEO', 'avr-web-consulting'), 'url' => home_url('/seo-services/technical-seo/'), 'blurb' => __('Crawl, index and Core Web Vitals', 'avr-web-consulting')),
                array('title' => __('GEO Targeting SEO', 'avr-web-consulting'), 'url' => home_url('/seo-services/geo-targeting-seo/'), 'blurb' => __('City and country level targeting', 'avr-web-consulting')),
                array('title' => __('Local Citations & GMB', 'avr-web-consulting'), 'url' => home_url('/seo-services/local-citations-gmb/'), 'blurb' => __('Manual citations in 3 days', 'avr-web-consulting')),
            ),
        ),
        array(
            'title'    => __('AI SEO', 'avr-web-consulting'),
            'url'      => home_url('/ai-seo/'),
            'children' => array(
                array('title' => __('Answer Engine Optimization', 'avr-web-consulting'), 'url' => home_url('/ai-seo/answer-engine-optimization/'), 'blurb' => __('Win the answer box in AI search', 'avr-web-consulting')),
                array('title' => __('GEO SEO', 'avr-web-consulting'), 'url' => home_url('/ai-seo/geo-seo/'), 'blurb' => __('Generative Engine Optimisation', 'avr-web-consulting')),
                array('title' => __('LLM SEO', 'avr-web-consulting'), 'url' => home_url('/ai-seo/llm-seo/'), 'blurb' => __('ChatGPT, Gemini, Copilot visibility', 'avr-web-consulting')),
                array('title' => __('LLMO', 'avr-web-consulting'), 'url' => home_url('/ai-seo/llmo/'), 'blurb' => __('Make content retrievable by LLMs', 'avr-web-consulting')),
                array('title' => __('AI Visibility', 'avr-web-consulting'), 'url' => home_url('/ai-seo/ai-visibility/'), 'blurb' => __('Presence across AI engines', 'avr-web-consulting')),
                array('title' => __('AI Overviews', 'avr-web-consulting'), 'url' => home_url('/ai-seo/ai-overviews/'), 'blurb' => __('Google AI summary placement', 'avr-web-consulting')),
                array('title' => __('AI Citations & Mentions', 'avr-web-consulting'), 'url' => home_url('/ai-seo/ai-citations-mentions/'), 'blurb' => __('Be the cited source', 'avr-web-consulting')),
                array('title' => __('AI Retrieval Systems', 'avr-web-consulting'), 'url' => home_url('/ai-seo/ai-retrieval-systems/'), 'blurb' => __('Machine-readable data layers', 'avr-web-consulting')),
            ),
        ),
        array(
            'title'    => __('Advertising', 'avr-web-consulting'),
            'url'      => home_url('/paid-advertising/'),
            'children' => array(
                array('title' => __('Google Ads', 'avr-web-consulting'), 'url' => home_url('/paid-advertising/google-ads/'), 'blurb' => __('Search, Shopping, PMax', 'avr-web-consulting')),
                array('title' => __('Social Media Ads', 'avr-web-consulting'), 'url' => home_url('/paid-advertising/social-media-ads/'), 'blurb' => __('Meta, LinkedIn, YouTube', 'avr-web-consulting')),
                array('title' => __('Social Media Marketing', 'avr-web-consulting'), 'url' => home_url('/paid-advertising/social-media-marketing/'), 'blurb' => __('Organic social growth', 'avr-web-consulting')),
            ),
        ),
        array(
            'title'    => __('Content', 'avr-web-consulting'),
            'url'      => home_url('/content-marketing/'),
            'children' => array(
                array('title' => __('Blogging & Copywriting', 'avr-web-consulting'), 'url' => home_url('/content-marketing/blogging-copywriting/'), 'blurb' => __('Answer-first content at scale', 'avr-web-consulting')),
                array('title' => __('Guest Posting & Link Building', 'avr-web-consulting'), 'url' => home_url('/content-marketing/guest-posting-link-building/'), 'blurb' => __('High-authority manual outreach', 'avr-web-consulting')),
            ),
        ),
        array(
            'title'    => __('Web Design', 'avr-web-consulting'),
            'url'      => home_url('/web-design-development/'),
            'children' => array(
                array('title' => __('WordPress Development', 'avr-web-consulting'), 'url' => home_url('/web-design-development/wordpress-development/'), 'blurb' => __('Fast, SEO-ready builds', 'avr-web-consulting')),
                array('title' => __('E-commerce Development', 'avr-web-consulting'), 'url' => home_url('/web-design-development/ecommerce-development/'), 'blurb' => __('Stores built to rank and convert', 'avr-web-consulting')),
                array('title' => __('Full-Stack Web Development', 'avr-web-consulting'), 'url' => home_url('/web-design-development/full-stack-web-development/'), 'blurb' => __('Custom sites & web applications', 'avr-web-consulting')),
                array('title' => __('Vibe Coding / AI-Assisted', 'avr-web-consulting'), 'url' => home_url('/web-design-development/vibe-coding-ai-assisted-development/'), 'blurb' => __('Faster builds with AI workflows', 'avr-web-consulting')),
            ),
        ),
        array(
            'title'    => __('Automation', 'avr-web-consulting'),
            'url'      => home_url('/automation-ai-agents/n8n-automation/'),
            'children' => array(
                array('title' => __('n8n Automation', 'avr-web-consulting'), 'url' => home_url('/automation-ai-agents/n8n-automation/'), 'blurb' => __('Connect tools & automate workflows', 'avr-web-consulting')),
                array('title' => __('AI Agent Development', 'avr-web-consulting'), 'url' => home_url('/automation-ai-agents/ai-agent-development/'), 'blurb' => __('Intelligent business assistants', 'avr-web-consulting')),
            ),
        ),
        array(
            'title'    => __('Company', 'avr-web-consulting'),
            'url'      => home_url('/about/'),
            'children' => array(
                array('title' => __('About Us', 'avr-web-consulting'), 'url' => home_url('/about/'), 'blurb' => __('Our story and team', 'avr-web-consulting')),
                array('title' => __('Pricing', 'avr-web-consulting'), 'url' => home_url('/pricing/'), 'blurb' => __('Tailored project plans', 'avr-web-consulting')),
                array('title' => __('Industries We Serve', 'avr-web-consulting'), 'url' => home_url('/industries/'), 'blurb' => __('10+ verticals', 'avr-web-consulting')),
                array('title' => __('Locations', 'avr-web-consulting'), 'url' => home_url('/locations/'), 'blurb' => __('India metros + global', 'avr-web-consulting')),
                array('title' => __('Case Studies', 'avr-web-consulting'), 'url' => home_url('/case-studies/'), 'blurb' => __('Real client outcomes', 'avr-web-consulting')),
                array('title' => __('Blog & Guides', 'avr-web-consulting'), 'url' => home_url('/blog/'), 'blurb' => __('AI search playbooks', 'avr-web-consulting')),
                array('title' => __('FAQs', 'avr-web-consulting'), 'url' => home_url('/faqs/'), 'blurb' => __('200+ answers', 'avr-web-consulting')),
                array('title' => __('Contact', 'avr-web-consulting'), 'url' => home_url('/contact/'), 'blurb' => __('Free consultation', 'avr-web-consulting')),
            ),
        ),
    );
}

/**
 * Default Primary Navigation Menu Fallback
 */
function avr_default_menu() {
    $nav = avr_get_nav_structure();
    echo '<ul class="menu flex items-center gap-1 list-none m-0 p-0">';
    foreach ($nav as $group) {
        $has_children = !empty($group['children']);
        echo '<li class="menu-item' . ($has_children ? ' menu-item-has-children' : '') . '">';
        echo '<a href="' . esc_url($group['url']) . '">';
        echo esc_html($group['title']);
        echo '</a>';
        if ($has_children) {
            echo '<ul class="sub-menu">';
            foreach ($group['children'] as $child) {
                echo '<li class="menu-item">';
                echo '<a href="' . esc_url($child['url']) . '" class="flex flex-col items-start gap-0.5">';
                echo '<span class="font-semibold text-slate-800">' . esc_html($child['title']) . '</span>';
                if (!empty($child['blurb'])) {
                    echo '<span class="text-[11px] text-slate-400 font-normal leading-tight">' . esc_html($child['blurb']) . '</span>';
                }
                echo '</a>';
                echo '</li>';
            }
            echo '</ul>';
        }
        echo '</li>';
    }
    echo '</ul>';
}

/**
 * Default Mobile Navigation Menu Fallback
 */
function avr_default_mobile_menu() {
    $nav = avr_get_nav_structure();
    echo '<ul class="menu space-y-1 list-none m-0 p-0">';
    foreach ($nav as $group) {
        $has_children = !empty($group['children']);
        echo '<li class="menu-item' . ($has_children ? ' menu-item-has-children' : '') . '">';
        echo '<a href="' . esc_url($group['url']) . '">';
        echo esc_html($group['title']);
        echo '</a>';
        if ($has_children) {
            echo '<ul class="sub-menu space-y-1 pl-3 my-1 border-l-2 border-slate-200">';
            foreach ($group['children'] as $child) {
                echo '<li class="menu-item">';
                echo '<a href="' . esc_url($child['url']) . '" class="text-xs py-1.5">';
                echo esc_html($child['title']);
                echo '</a>';
                echo '</li>';
            }
            echo '</ul>';
        }
        echo '</li>';
    }
    echo '</ul>';
}

/**
 * Handle Contact & Audit Form Inquiries (AJAX & Standard POST)
 */
function avr_handle_inquiry_submission() {
    if (!isset($_POST['avr_inquiry_nonce']) || !wp_verify_nonce($_POST['avr_inquiry_nonce'], 'avr_inquiry_nonce')) {
        wp_die(esc_html__('Security check failed. Please refresh and try again.', 'avr-web-consulting'));
    }

    $name    = sanitize_text_field($_POST['full_name'] ?? '');
    $email   = sanitize_email($_POST['email'] ?? '');
    $phone   = sanitize_text_field($_POST['phone'] ?? '');
    $website = esc_url_raw($_POST['website'] ?? '');
    $service = sanitize_text_field($_POST['service'] ?? 'General Consultation');
    $message = sanitize_textarea_field($_POST['message'] ?? '');

    $admin_email = avr_get_option('avr_email', get_option('admin_email'));
    $subject     = sprintf(__('New Website Inquiry from %s - AVR Web Consulting', 'avr-web-consulting'), $name);

    $body  = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Website: $website\n";
    $body .= "Service Needed: $service\n";
    $body .= "Message:\n$message\n\n";
    $body .= "--\nSent from AVR Web Consulting WordPress Theme";

    $headers = array('Content-Type: text/plain; charset=UTF-8');
    if (!empty($email)) {
        $headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
    }

    $mail_sent = wp_mail($admin_email, $subject, $body, $headers);

    if (wp_doing_ajax()) {
        if ($mail_sent) {
            wp_send_json_success(array('message' => __('Thank you! Your inquiry has been received. Our team will contact you within one business day.', 'avr-web-consulting')));
        } else {
            wp_send_json_error(array('message' => __('Could not send message at this time. Please contact us via phone or WhatsApp.', 'avr-web-consulting')));
        }
    } else {
        $redirect = wp_get_referer() ? wp_get_referer() : home_url('/contact/');
        if ($mail_sent) {
            $redirect = add_query_arg('inquiry', 'success', $redirect);
        } else {
            $redirect = add_query_arg('inquiry', 'error', $redirect);
        }
        wp_safe_redirect($redirect);
        exit;
    }
}
add_action('admin_post_avr_submit_inquiry', 'avr_handle_inquiry_submission');
add_action('admin_post_nopriv_avr_submit_inquiry', 'avr_handle_inquiry_submission');
add_action('wp_ajax_avr_submit_inquiry', 'avr_handle_inquiry_submission');
add_action('wp_ajax_nopriv_avr_submit_inquiry', 'avr_handle_inquiry_submission');

/**
 * Shortcodes for embedding dynamic contact details & inquiry form
 */
add_shortcode('avr_phone', function() {
    return esc_html(avr_get_option('avr_phone', '+91-9182543249'));
});

add_shortcode('avr_email', function() {
    return esc_html(avr_get_option('avr_email', 'info@avrwebconsulting.com'));
});

add_shortcode('avr_address', function() {
    return esc_html(avr_get_option('avr_address', 'Hero Showroom Lane, D No: 43-18-16, Venkatarajunagar, TSN Colony, Dondaparthy, Visakhapatnam – 530016, AP, India'));
});

add_shortcode('avr_whatsapp_url', function() {
    return esc_url(avr_get_option('avr_whatsapp', 'https://wa.me/919182543249'));
});

/**
 * Register Gutenberg Block Patterns Category
 */
function avr_register_block_patterns() {
    if (!function_exists('register_block_pattern_category')) {
        return;
    }

    register_block_pattern_category('avr-web-consulting', array(
        'label' => __('AVR Web Consulting', 'avr-web-consulting'),
    ));

    // Pattern 1: Service Cards Grid
    register_block_pattern('avr/service-grid', array(
        'title'       => __('AVR Service Cards Grid', 'avr-web-consulting'),
        'categories'  => array('avr-web-consulting'),
        'content'     => '<!-- wp:columns {"className":"grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"} -->
<div class="wp-block-columns grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"><!-- wp:column {"className":"card-interactive rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"} -->
<div class="wp-block-column card-interactive rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><!-- wp:heading {"level":3,"className":"text-xl font-bold text-slate-900"} -->
<h3 class="wp-block-heading text-xl font-bold text-slate-900">Technical SEO</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"className":"mt-2 text-sm text-slate-600"} -->
<p class="mt-2 text-sm text-slate-600">Enterprise crawlability, indexation fixes, Core Web Vitals, and structured Schema markup.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->
<!-- wp:column {"className":"card-interactive rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"} -->
<div class="wp-block-column card-interactive rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><!-- wp:heading {"level":3,"className":"text-xl font-bold text-slate-900"} -->
<h3 class="wp-block-heading text-xl font-bold text-slate-900">AI Search &amp; GEO</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"className":"mt-2 text-sm text-slate-600"} -->
<p class="mt-2 text-sm text-slate-600">Generative engine optimization for ChatGPT, Perplexity, Google AI Overviews, and Claude.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->
<!-- wp:column {"className":"card-interactive rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"} -->
<div class="wp-block-column card-interactive rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><!-- wp:heading {"level":3,"className":"text-xl font-bold text-slate-900"} -->
<h3 class="wp-block-heading text-xl font-bold text-slate-900">Web Development</h3>
<!-- /wp:heading -->
<!-- wp:paragraph {"className":"mt-2 text-sm text-slate-600"} -->
<p class="mt-2 text-sm text-slate-600">High-speed WordPress, Next.js, and custom web applications optimized for conversion.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->',
    ));
}
add_action('init', 'avr_register_block_patterns');
