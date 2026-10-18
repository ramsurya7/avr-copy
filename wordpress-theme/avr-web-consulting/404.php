<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package AVR_Web_Consulting
 */

get_header(); ?>

<div class="container-page py-24 lg:py-32 flex flex-col items-center justify-center text-center">
    <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#22a7e0]"><?php esc_html_e('Error 404', 'avr-web-consulting'); ?></p>
    <h1 class="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
        <?php esc_html_e('Page Not Found', 'avr-web-consulting'); ?>
    </h1>
    <p class="mt-4 max-w-md text-base text-slate-600">
        <?php esc_html_e('The page you are looking for does not exist, has been moved, or is temporarily unavailable.', 'avr-web-consulting'); ?>
    </p>

    <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-shimmer inline-flex items-center justify-center rounded-full bg-[#22a7e0] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#1995cb] transition-colors">
            <?php esc_html_e('Back to Home', 'avr-web-consulting'); ?>
        </a>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
            <?php esc_html_e('Contact Support', 'avr-web-consulting'); ?>
        </a>
    </div>
</div>

<?php get_footer(); ?>
