<?php
/**
 * The template for displaying standard pages
 *
 * @package AVR_Web_Consulting
 */

get_header(); ?>

<div class="bg-slate-50/70 border-b border-slate-200/60 py-10 lg:py-14">
    <div class="container-page">
        <!-- Breadcrumbs -->
        <nav aria-label="Breadcrumb" class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="hover:text-[#22a7e0]"><?php esc_html_e('Home', 'avr-web-consulting'); ?></a>
            <span class="mx-2 text-slate-400">/</span>
            <span class="text-slate-800"><?php the_title(); ?></span>
        </nav>

        <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
            <div>
                <?php
                $eyebrow = get_post_meta(get_the_ID(), '_avr_eyebrow', true);
                if (empty($eyebrow)) {
                    $eyebrow = __('AVR Web Consulting', 'avr-web-consulting');
                }
                ?>
                <p class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#22a7e0]">
                    <?php echo esc_html($eyebrow); ?>
                </p>

                <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.08]">
                    <?php the_title(); ?>
                </h1>

                <?php if (has_excerpt()) : ?>
                    <p class="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
                        <?php echo get_the_excerpt(); ?>
                    </p>
                <?php endif; ?>

                <?php
                $quick_answer = get_post_meta(get_the_ID(), '_avr_quick_answer', true);
                if (!empty($quick_answer)) :
                    ?>
                    <div class="mt-6 rounded-2xl border border-cyan-500/30 bg-cyan-50/60 p-5 text-sm sm:text-base leading-relaxed text-slate-800">
                        <p class="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#22a7e0]">
                            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span><?php esc_html_e('Quick Overview', 'avr-web-consulting'); ?></span>
                        </p>
                        <p class="text-slate-700"><?php echo esc_html($quick_answer); ?></p>
                    </div>
                <?php endif; ?>
            </div>

            <?php if (has_post_thumbnail()) : ?>
                <div class="group relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 shadow-sm transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-xl hover:shadow-[#22a7e0]/10">
                    <div class="overflow-hidden rounded-[1.375rem]">
                        <?php the_post_thumbnail('large', array('class' => 'w-full aspect-[16/9] object-cover transition-transform duration-500 ease-out group-hover:scale-105')); ?>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>

<div class="container-page py-12 lg:py-16">
    <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
        <main class="min-w-0">
            <?php
            while (have_posts()) : the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class('prose prose-slate max-w-none text-base leading-relaxed text-slate-700'); ?>>
                    <?php the_content(); ?>
                </article>
                <?php
            endwhile;
            ?>
        </main>

        <aside class="space-y-6 lg:sticky lg:top-28">
            <!-- Quick Navigation Card -->
            <div class="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                <h3 class="text-xs font-bold uppercase tracking-[0.16em] text-slate-800 mb-3">
                    <?php esc_html_e('Explore Services', 'avr-web-consulting'); ?>
                </h3>
                <ul class="space-y-2 text-sm list-none p-0 m-0">
                    <li><a href="<?php echo esc_url(home_url('/seo-services/')); ?>" class="block text-slate-600 hover:text-[#22a7e0] font-medium transition-colors"><?php esc_html_e('Search Engine Optimization (SEO)', 'avr-web-consulting'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/ai-seo/')); ?>" class="block text-slate-600 hover:text-[#22a7e0] font-medium transition-colors"><?php esc_html_e('AI SEO & Answer Engine Optimization', 'avr-web-consulting'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/web-design-development/')); ?>" class="block text-slate-600 hover:text-[#22a7e0] font-medium transition-colors"><?php esc_html_e('Web Design & WordPress Development', 'avr-web-consulting'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/paid-advertising/')); ?>" class="block text-slate-600 hover:text-[#22a7e0] font-medium transition-colors"><?php esc_html_e('Paid Advertising & PPC', 'avr-web-consulting'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/pricing/')); ?>" class="block text-slate-600 hover:text-[#22a7e0] font-medium transition-colors"><?php esc_html_e('Pricing & Retainer Plans', 'avr-web-consulting'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/faqs/')); ?>" class="block text-slate-600 hover:text-[#22a7e0] font-medium transition-colors"><?php esc_html_e('Frequently Asked Questions', 'avr-web-consulting'); ?></a></li>
                </ul>
            </div>

            <!-- Free Consultation Widget -->
            <div class="rounded-2xl border border-cyan-500/30 bg-cyan-50/60 p-5">
                <h4 class="font-display text-sm font-bold text-slate-900"><?php esc_html_e('Request a Free Audit', 'avr-web-consulting'); ?></h4>
                <p class="mt-1.5 text-xs text-slate-600 leading-relaxed"><?php esc_html_e('Get personalized analysis of your website rankings, technical health, and AI search presence.', 'avr-web-consulting'); ?></p>
                <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="mt-4 flex h-10 w-full items-center justify-center rounded-xl bg-[#22a7e0] text-xs font-bold text-white shadow-sm hover:bg-[#1995cb] transition-colors">
                    <?php esc_html_e('Book Consultation', 'avr-web-consulting'); ?>
                </a>
            </div>
        </aside>
    </div>
</div>

<!-- Bottom CTA Band -->
<section class="border-t border-slate-200 bg-gradient-to-br from-[#0b0f17] via-[#0d1424] to-[#0b0f17] py-14 text-white">
    <div class="container-page flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
            <h3 class="text-2xl font-bold text-white"><?php esc_html_e('Need custom guidance for your business?', 'avr-web-consulting'); ?></h3>
            <p class="mt-1 text-sm text-slate-300"><?php esc_html_e('Talk to our specialists in Visakhapatnam. We reply within one business day.', 'avr-web-consulting'); ?></p>
        </div>
        <div class="flex gap-3">
            <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn-shimmer inline-flex items-center justify-center rounded-full bg-[#22a7e0] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#1995cb] transition-colors whitespace-nowrap">
                <?php esc_html_e('Book Consultation', 'avr-web-consulting'); ?>
            </a>
            <a href="<?php echo esc_url(avr_get_option('avr_whatsapp', 'https://wa.me/919182543249')); ?>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors whitespace-nowrap">
                <?php esc_html_e('WhatsApp', 'avr-web-consulting'); ?>
            </a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
