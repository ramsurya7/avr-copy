<?php
/**
 * Template Name: Service Showcase
 *
 * @package AVR_Web_Consulting
 */

get_header(); ?>

<div class="bg-slate-50/70 border-b border-slate-200/60 py-12 lg:py-16">
    <div class="container-page">
        <nav aria-label="Breadcrumb" class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="hover:text-[#22a7e0]"><?php esc_html_e('Home', 'avr-web-consulting'); ?></a>
            <span class="mx-2 text-slate-400">/</span>
            <span class="text-slate-800"><?php the_title(); ?></span>
        </nav>

        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
            <?php the_title(); ?>
        </h1>

        <?php if (has_excerpt()) : ?>
            <p class="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
                <?php echo get_the_excerpt(); ?>
            </p>
        <?php else : ?>
            <p class="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
                <?php esc_html_e('Customized digital growth solutions combining technical execution, content architecture, and AI search visibility.', 'avr-web-consulting'); ?>
            </p>
        <?php endif; ?>

        <!-- Quick Answer Box for AI Engine Optimization (AEO / GEO) -->
        <div class="mt-8 max-w-3xl rounded-2xl border border-cyan-500/30 bg-cyan-50/60 p-6 sm:p-7 text-slate-900 shadow-sm">
            <p class="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#22a7e0]">
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span><?php esc_html_e('Strategic Overview', 'avr-web-consulting'); ?></span>
            </p>
            <p class="text-sm sm:text-base leading-relaxed text-slate-700">
                <?php
                if (get_post_meta(get_the_ID(), '_avr_quick_answer', true)) {
                    echo esc_html(get_post_meta(get_the_ID(), '_avr_quick_answer', true));
                } else {
                    esc_html_e('Our service framework directly targets high-intent commercial keywords, technical crawl efficiency, and generative AI search indexing to deliver predictable revenue pipeline growth.', 'avr-web-consulting');
                }
                ?>
            </p>
        </div>
    </div>
</div>

<div class="container-page py-12 lg:py-20">
    <!-- Editable page content from Gutenberg -->
    <?php while (have_posts()) : the_post(); ?>
        <?php if (!empty(get_the_content())) : ?>
            <div class="prose max-w-none mb-14">
                <?php the_content(); ?>
            </div>
        <?php endif; ?>
    <?php endwhile; ?>

    <!-- Service Deliverables & Comparison Table -->
    <div class="mt-8 mb-16">
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
            <?php esc_html_e('Deliverables & Framework Comparison', 'avr-web-consulting'); ?>
        </h2>
        <p class="text-sm text-slate-600 mb-6">
            <?php esc_html_e('Every campaign is engineered with clear milestones, weekly monitoring, and transparent reporting.', 'avr-web-consulting'); ?>
        </p>

        <div class="table-responsive-wrapper my-6">
            <div class="table-scroll-hint sm:hidden">
                <span><?php esc_html_e('Swipe horizontally to view full table', 'avr-web-consulting'); ?></span> &rarr;
            </div>
            <div class="table-scroll-container">
                <table class="table-wrapped w-full border-collapse text-left text-sm">
                    <thead>
                        <tr class="border-b border-slate-200 bg-slate-50/80">
                            <th class="p-4 font-bold text-slate-900"><?php esc_html_e('Deliverable Component', 'avr-web-consulting'); ?></th>
                            <th class="p-4 font-bold text-slate-900"><?php esc_html_e('Standard Agency Approach', 'avr-web-consulting'); ?></th>
                            <th class="p-4 font-bold text-[#22a7e0]"><?php esc_html_e('AVR Web Consulting Dual-Engine', 'avr-web-consulting'); ?></th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        <tr>
                            <td class="p-4 font-semibold text-slate-800"><?php esc_html_e('Keyword Targeting', 'avr-web-consulting'); ?></td>
                            <td class="p-4 text-slate-600"><?php esc_html_e('High-volume generic keywords with low intent', 'avr-web-consulting'); ?></td>
                            <td class="p-4 font-semibold text-slate-900 bg-cyan-50/20"><?php esc_html_e('Commercial intent + LLM conversational search queries', 'avr-web-consulting'); ?></td>
                        </tr>
                        <tr>
                            <td class="p-4 font-semibold text-slate-800"><?php esc_html_e('AI Engine Visibility', 'avr-web-consulting'); ?></td>
                            <td class="p-4 text-slate-600"><?php esc_html_e('Ignored; only classic 10 blue links targeted', 'avr-web-consulting'); ?></td>
                            <td class="p-4 font-semibold text-slate-900 bg-cyan-50/20"><?php esc_html_e('Optimized for ChatGPT, Perplexity & Google AI Overviews', 'avr-web-consulting'); ?></td>
                        </tr>
                        <tr>
                            <td class="p-4 font-semibold text-slate-800"><?php esc_html_e('Technical Performance', 'avr-web-consulting'); ?></td>
                            <td class="p-4 text-slate-600"><?php esc_html_e('Plugin bloating, slow Core Web Vitals', 'avr-web-consulting'); ?></td>
                            <td class="p-4 font-semibold text-slate-900 bg-cyan-50/20"><?php esc_html_e('Sub-second load times, schema graphs, clean Tailwind code', 'avr-web-consulting'); ?></td>
                        </tr>
                        <tr>
                            <td class="p-4 font-semibold text-slate-800"><?php esc_html_e('Reporting & ROI', 'avr-web-consulting'); ?></td>
                            <td class="p-4 text-slate-600"><?php esc_html_e('Vague monthly PDF charts', 'avr-web-consulting'); ?></td>
                            <td class="p-4 font-semibold text-slate-900 bg-cyan-50/20"><?php esc_html_e('Real-time conversions, pipeline value & AI citation tracking', 'avr-web-consulting'); ?></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Service FAQ Accordion -->
    <div class="mt-14 max-w-3xl">
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-6">
            <?php esc_html_e('Frequently Asked Questions', 'avr-web-consulting'); ?>
        </h2>

        <div class="avr-accordion space-y-3">
            <div class="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <button type="button" class="avr-accordion-trigger flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-[#22a7e0] transition-colors" aria-expanded="false">
                    <span><?php esc_html_e('How quickly can we expect measurable ranking improvements?', 'avr-web-consulting'); ?></span>
                    <svg class="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div class="avr-accordion-content hidden px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <?php esc_html_e('Initial indexing, citation fixes, and Core Web Vitals speed gains typically reflect within 3 to 6 weeks. High-intent competitive keyword clusters and generative engine answers typically scale strongly across months 2 through 4.', 'avr-web-consulting'); ?>
                </div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <button type="button" class="avr-accordion-trigger flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-[#22a7e0] transition-colors" aria-expanded="false">
                    <span><?php esc_html_e('Do you work with international businesses outside India?', 'avr-web-consulting'); ?></span>
                    <svg class="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div class="avr-accordion-content hidden px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <?php esc_html_e('Yes. Over 60% of our portfolio comprises companies across the United States, United Kingdom, UAE, and European Union, with dedicated sprint cadences and async Slack/WhatsApp communication.', 'avr-web-consulting'); ?>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Bottom CTA Band -->
<section class="border-t border-slate-200 bg-slate-900 py-14 text-white">
    <div class="container-page flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
            <h3 class="text-2xl font-bold text-white"><?php esc_html_e('Ready to scale your website visibility?', 'avr-web-consulting'); ?></h3>
            <p class="mt-1 text-sm text-slate-300"><?php esc_html_e('Request a complimentary audit. We analyze your website and reply within one business day.', 'avr-web-consulting'); ?></p>
        </div>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn-shimmer inline-flex items-center justify-center rounded-full bg-[#22a7e0] px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-cyan-500/25 hover:bg-[#1995cb] transition-colors whitespace-nowrap">
            <?php esc_html_e('Request Free Audit', 'avr-web-consulting'); ?>
        </a>
    </div>
</section>

<?php get_footer(); ?>
