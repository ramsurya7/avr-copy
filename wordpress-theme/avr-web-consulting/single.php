<?php
/**
 * The template for displaying all single posts
 *
 * @package AVR_Web_Consulting
 */

get_header(); ?>

<div class="bg-slate-50/70 border-b border-slate-200/60 py-12 lg:py-16">
    <div class="container-page max-w-4xl">
        <!-- Breadcrumbs -->
        <nav aria-label="Breadcrumb" class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="hover:text-[#22a7e0]"><?php esc_html_e('Home', 'avr-web-consulting'); ?></a>
            <span class="mx-2 text-slate-400">/</span>
            <a href="<?php echo esc_url(home_url('/blog/')); ?>" class="hover:text-[#22a7e0]"><?php esc_html_e('Blog', 'avr-web-consulting'); ?></a>
            <span class="mx-2 text-slate-400">/</span>
            <span class="text-slate-800"><?php the_title(); ?></span>
        </nav>

        <div class="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-4">
            <span class="rounded-full bg-cyan-100 px-3 py-1 text-[#22a7e0] uppercase tracking-wider font-bold">
                <?php
                $cats = get_the_category();
                echo !empty($cats) ? esc_html($cats[0]->name) : esc_html__('Strategy', 'avr-web-consulting');
                ?>
            </span>
            <span>&bull;</span>
            <time datetime="<?php echo esc_attr(get_the_date('c')); ?>"><?php echo esc_html(get_the_date()); ?></time>
            <span>&bull;</span>
            <span><?php printf(esc_html__('By %s', 'avr-web-consulting'), esc_html(get_the_author())); ?></span>
        </div>

        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
            <?php the_title(); ?>
        </h1>
    </div>
</div>

<div class="container-page max-w-4xl py-12 lg:py-16">
    <?php while (have_posts()) : the_post(); ?>
        <?php if (has_post_thumbnail()) : ?>
            <div class="card-interactive rounded-3xl overflow-hidden mb-10 shadow-md">
                <?php the_post_thumbnail('full', array('class' => 'w-full h-auto object-cover')); ?>
            </div>
        <?php endif; ?>

        <article id="post-<?php the_ID(); ?>" <?php post_class('prose prose-slate max-w-none text-base leading-relaxed text-slate-800'); ?>>
            <?php the_content(); ?>
        </article>

        <!-- Author Card -->
        <div class="mt-14 rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <?php echo get_avatar(get_the_author_meta('ID'), 72, '', '', array('class' => 'rounded-full ring-2 ring-[#22a7e0]/30 shrink-0')); ?>
            <div>
                <h4 class="font-display text-base font-bold text-slate-900"><?php the_author(); ?></h4>
                <p class="text-xs font-semibold text-[#22a7e0] uppercase tracking-wider"><?php esc_html_e('Digital Strategist · AVR Web Consulting', 'avr-web-consulting'); ?></p>
                <p class="mt-2 text-sm text-slate-600 leading-relaxed">
                    <?php echo esc_html(get_the_author_meta('description') ?: __('Specialist in AI Search Visibility, Generative Engine Optimization, and technical SEO frameworks at AVR Web Consulting.', 'avr-web-consulting')); ?>
                </p>
            </div>
        </div>

        <!-- Post Navigation -->
        <div class="mt-10 pt-8 border-t border-slate-200 flex items-center justify-between gap-4 text-sm font-semibold">
            <div class="prev-post">
                <?php previous_post_link('%link', '&larr; %title'); ?>
            </div>
            <div class="next-post text-right">
                <?php next_post_link('%link', '%title &rarr;'); ?>
            </div>
        </div>
    <?php endwhile; ?>
</div>

<?php get_footer(); ?>
