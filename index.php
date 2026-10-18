<?php
/**
 * Main Template Entry Point (index.php)
 *
 * @package AVR_Web_Consulting
 */

get_header(); ?>

<div class="bg-slate-50/60 border-b border-slate-200/60 py-12 lg:py-16">
    <div class="container-page">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#22a7e0] mb-2">
            <?php esc_html_e('Insights & Knowledge Base', 'avr-web-consulting'); ?>
        </p>
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            <?php
            if (is_home() && !is_front_page()) {
                single_post_title();
            } elseif (is_archive()) {
                the_archive_title();
            } elseif (is_search()) {
                printf(esc_html__('Search Results for: %s', 'avr-web-consulting'), '<span class="text-[#22a7e0]">' . get_search_query() . '</span>');
            } else {
                esc_html_e('Latest Insights on SEO, AI Search & Growth', 'avr-web-consulting');
            }
            ?>
        </h1>
        <p class="mt-4 max-w-2xl text-base sm:text-lg text-slate-600">
            <?php esc_html_e('Actionable guides, case studies, and strategic playbooks on Generative Engine Optimization, Local SEO, Answer Engine visibility, and full-stack web development.', 'avr-web-consulting'); ?>
        </p>
    </div>
</div>

<div class="container-page py-12 lg:py-16">
    <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
        <!-- Main Content Loop -->
        <div>
            <?php if (have_posts()) : ?>
                <div class="grid gap-8 sm:grid-cols-2">
                    <?php while (have_posts()) : the_post(); ?>
                        <article id="post-<?php the_ID(); ?>" <?php post_class('card-interactive flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-cyan-400 hover:shadow-lg'); ?>>
                            <div>
                                <?php if (has_post_thumbnail()) : ?>
                                    <a href="<?php the_permalink(); ?>" class="block overflow-hidden rounded-xl aspect-[16/9] mb-4 bg-slate-100">
                                        <?php the_post_thumbnail('medium_large', array('class' => 'w-full h-full object-cover transition-transform duration-500 hover:scale-105')); ?>
                                    </a>
                                <?php endif; ?>

                                <div class="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-2.5">
                                    <span class="text-[#22a7e0] font-bold uppercase tracking-wider">
                                        <?php
                                        $categories = get_the_category();
                                        if (!empty($categories)) {
                                            echo esc_html($categories[0]->name);
                                        } else {
                                            esc_html_e('Article', 'avr-web-consulting');
                                        }
                                        ?>
                                    </span>
                                    <span>&bull;</span>
                                    <time datetime="<?php echo esc_attr(get_the_date('c')); ?>"><?php echo esc_html(get_the_date()); ?></time>
                                </div>

                                <h2 class="text-xl font-bold tracking-tight text-slate-900 hover:text-[#22a7e0] transition-colors leading-snug">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h2>

                                <div class="mt-3 text-sm text-slate-600 leading-relaxed">
                                    <?php the_excerpt(); ?>
                                </div>
                            </div>

                            <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                                <a href="<?php the_permalink(); ?>" class="inline-flex items-center gap-1.5 text-sm font-semibold text-[#22a7e0] group-hover:underline">
                                    <span><?php esc_html_e('Read article', 'avr-web-consulting'); ?></span>
                                    <svg class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                                <span class="text-xs text-slate-400">
                                    <?php printf(esc_html__('By %s', 'avr-web-consulting'), get_the_author()); ?>
                                </span>
                            </div>
                        </article>
                    <?php endwhile; ?>
                </div>

                <!-- Pagination -->
                <div class="mt-12 flex justify-center">
                    <?php
                    the_posts_pagination(array(
                        'mid_size'           => 2,
                        'prev_text'          => __('&larr; Previous', 'avr-web-consulting'),
                        'next_text'          => __('Next &rarr;', 'avr-web-consulting'),
                        'screen_reader_text' => __('Posts navigation', 'avr-web-consulting'),
                    ));
                    ?>
                </div>

            <?php else : ?>
                <div class="rounded-2xl border border-slate-200 bg-white p-10 text-center">
                    <h2 class="text-xl font-bold text-slate-900"><?php esc_html_e('No articles found', 'avr-web-consulting'); ?></h2>
                    <p class="mt-2 text-sm text-slate-600"><?php esc_html_e('We could not find any posts matching your criteria. Try searching or check back soon.', 'avr-web-consulting'); ?></p>
                    <div class="mt-6 max-w-sm mx-auto">
                        <?php get_search_form(); ?>
                    </div>
                </div>
            <?php endif; ?>
        </div>

        <!-- Sidebar / Aside -->
        <aside class="space-y-8">
            <!-- Free Audit Box -->
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span class="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-[#22a7e0]">
                    <?php esc_html_e('No obligation', 'avr-web-consulting'); ?>
                </span>
                <h3 class="mt-3 text-lg font-bold text-slate-900">
                    <?php esc_html_e('Request an SEO & AI Audit', 'avr-web-consulting'); ?>
                </h3>
                <p class="mt-2 text-xs leading-relaxed text-slate-600">
                    <?php esc_html_e('Send us your website URL and top competitors. We reply within one business day with keyword gaps and an AI visibility baseline.', 'avr-web-consulting'); ?>
                </p>
                <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="mt-5 flex h-11 w-full items-center justify-center rounded-xl bg-[#22a7e0] text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#1995cb] transition-colors">
                    <?php esc_html_e('Get Free Audit', 'avr-web-consulting'); ?>
                </a>
            </div>

            <!-- Categories -->
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 class="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                    <?php esc_html_e('Browse by Topic', 'avr-web-consulting'); ?>
                </h3>
                <ul class="space-y-2 text-sm list-none p-0 m-0">
                    <?php
                    wp_list_categories(array(
                        'title_li'   => '',
                        'show_count' => true,
                    ));
                    ?>
                </ul>
            </div>
        </aside>
    </div>
</div>

<?php get_footer(); ?>
