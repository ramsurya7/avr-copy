<?php
/**
 * Template Name: Interactive FAQs
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
        <p class="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
            <?php esc_html_e('Clear answers regarding our digital marketing methodology, AI SEO, Generative Engine Optimization (GEO), web development, and pricing.', 'avr-web-consulting'); ?>
        </p>
    </div>
</div>

<div class="container-page py-12 lg:py-20">
    <?php while (have_posts()) : the_post(); ?>
        <?php if (!empty(get_the_content())) : ?>
            <div class="prose max-w-none mb-12">
                <?php the_content(); ?>
            </div>
        <?php endif; ?>
    <?php endwhile; ?>

    <div class="max-w-4xl mx-auto space-y-12">
        <!-- Section 1: AI Search & SEO -->
        <div>
            <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                <?php esc_html_e('AI Search, GEO & LLM Optimization', 'avr-web-consulting'); ?>
            </h2>
            <div class="avr-accordion space-y-3">
                <div class="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                    <button type="button" class="avr-accordion-trigger flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-[#22a7e0] transition-colors" aria-expanded="false">
                        <span><?php esc_html_e('What is Generative Engine Optimization (GEO)?', 'avr-web-consulting'); ?></span>
                        <svg class="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div class="avr-accordion-content hidden px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        <?php esc_html_e('GEO is the strategic practice of structuring your content, brand entity, and digital authority so that AI answer engines (ChatGPT, Google AI Overviews, Perplexity, and Claude) cite and recommend your business in direct conversational responses.', 'avr-web-consulting'); ?>
                    </div>
                </div>

                <div class="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                    <button type="button" class="avr-accordion-trigger flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-[#22a7e0] transition-colors" aria-expanded="false">
                        <span><?php esc_html_e('Does AI SEO replace traditional SEO?', 'avr-web-consulting'); ?></span>
                        <svg class="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div class="avr-accordion-content hidden px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        <?php esc_html_e('No, it builds upon it. Generative AI retrieval models rely directly on high-authority web indexes. Strong technical SEO, schema graphs, and backlinks form the foundational corpus from which LLMs pull citations.', 'avr-web-consulting'); ?>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 2: Engagements & Operations -->
        <div>
            <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                <?php esc_html_e('Contracts & Project Delivery', 'avr-web-consulting'); ?>
            </h2>
            <div class="avr-accordion space-y-3">
                <div class="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                    <button type="button" class="avr-accordion-trigger flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-[#22a7e0] transition-colors" aria-expanded="false">
                        <span><?php esc_html_e('Are contracts fixed or month-to-month?', 'avr-web-consulting'); ?></span>
                        <svg class="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div class="avr-accordion-content hidden px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        <?php esc_html_e('We operate on quarterly 3-month strategic agreements with monthly billing. This provides adequate velocity to engineer rankings and citations while keeping accountability high.', 'avr-web-consulting'); ?>
                    </div>
                </div>

                <div class="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                    <button type="button" class="avr-accordion-trigger flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-[#22a7e0] transition-colors" aria-expanded="false">
                        <span><?php esc_html_e('How do I receive project updates?', 'avr-web-consulting'); ?></span>
                        <svg class="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div class="avr-accordion-content hidden px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        <?php esc_html_e('Every client has direct access to a dedicated lead strategist via Slack or WhatsApp, with weekly sprint tracking and bi-weekly executive video reviews.', 'avr-web-consulting'); ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>
