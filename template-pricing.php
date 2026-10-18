<?php
/**
 * Template Name: Pricing & Plans
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
            <?php esc_html_e('Transparent, high-ROI retained partnerships for SEO, AI search visibility (GEO/AEO), paid media, and full-stack development.', 'avr-web-consulting'); ?>
        </p>
    </div>
</div>

<div class="container-page py-12 lg:py-20">
    <!-- Editable page content if any added via Gutenberg -->
    <?php while (have_posts()) : the_post(); ?>
        <?php if (!empty(get_the_content())) : ?>
            <div class="prose max-w-none mb-12">
                <?php the_content(); ?>
            </div>
        <?php endif; ?>
    <?php endwhile; ?>

    <!-- 3-Tier Pricing Grid -->
    <div class="grid gap-8 lg:grid-cols-3 lg:items-stretch">
        <!-- Tier 1: Starter -->
        <div class="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
            <div>
                <span class="text-xs font-bold uppercase tracking-wider text-slate-400"><?php esc_html_e('Local & Growth Stage', 'avr-web-consulting'); ?></span>
                <h3 class="mt-1 text-2xl font-bold text-slate-900"><?php esc_html_e('Local & Foundation', 'avr-web-consulting'); ?></h3>
                <p class="mt-2 text-xs text-slate-600 leading-relaxed">
                    <?php esc_html_e('Ideal for regional businesses, single-location practices, and niche service firms seeking consistent inbound calls.', 'avr-web-consulting'); ?>
                </p>

                <div class="mt-6 flex items-baseline gap-1 border-t border-slate-100 pt-6">
                    <span class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">$750</span>
                    <span class="text-xs font-semibold text-slate-500">/ month</span>
                </div>

                <ul class="mt-6 space-y-3 text-xs text-slate-600">
                    <li class="flex items-center gap-2.5">
                        <svg class="h-4 w-4 text-[#22a7e0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                        <span><?php esc_html_e('Google Business Profile management & local citations', 'avr-web-consulting'); ?></span>
                    </li>
                    <li class="flex items-center gap-2.5">
                        <svg class="h-4 w-4 text-[#22a7e0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                        <span><?php esc_html_e('Technical audit & monthly site speed monitoring', 'avr-web-consulting'); ?></span>
                    </li>
                    <li class="flex items-center gap-2.5">
                        <svg class="h-4 w-4 text-[#22a7e0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                        <span><?php esc_html_e('15 target search phrases with weekly tracking', 'avr-web-consulting'); ?></span>
                    </li>
                    <li class="flex items-center gap-2.5">
                        <svg class="h-4 w-4 text-[#22a7e0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                        <span><?php esc_html_e('2 editorial blog publications per month', 'avr-web-consulting'); ?></span>
                    </li>
                </ul>
            </div>

            <div class="mt-8 pt-6 border-t border-slate-100">
                <a href="<?php echo esc_url(home_url('/contact/?tier=foundation')); ?>" class="flex h-11 w-full items-center justify-center rounded-full border border-slate-300 font-bold text-xs uppercase tracking-wider text-slate-800 hover:border-[#22a7e0] hover:text-[#22a7e0] transition-colors">
                    <?php esc_html_e('Select Plan', 'avr-web-consulting'); ?>
                </a>
            </div>
        </div>

        <!-- Tier 2: Professional (Featured) -->
        <div class="relative flex flex-col justify-between rounded-3xl border-2 border-[#22a7e0] bg-white p-7 sm:p-8 shadow-xl">
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#22a7e0] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                <?php esc_html_e('Most Popular & Recommended', 'avr-web-consulting'); ?>
            </div>

            <div>
                <span class="text-xs font-bold uppercase tracking-wider text-[#22a7e0]"><?php esc_html_e('National & AI Search Expansion', 'avr-web-consulting'); ?></span>
                <h3 class="mt-1 text-2xl font-bold text-slate-900"><?php esc_html_e('Full SEO + AI Search Growth', 'avr-web-consulting'); ?></h3>
                <p class="mt-2 text-xs text-slate-600 leading-relaxed">
                    <?php esc_html_e('Our flagship dual engine retainer: traditional organic rankings + brand visibility inside ChatGPT, Claude, and Perplexity.', 'avr-web-consulting'); ?>
                </p>

                <div class="mt-6 flex items-baseline gap-1 border-t border-slate-100 pt-6">
                    <span class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">$1,850</span>
                    <span class="text-xs font-semibold text-slate-500">/ month</span>
                </div>

                <ul class="mt-6 space-y-3 text-xs text-slate-600">
                    <li class="flex items-center gap-2.5">
                        <svg class="h-4 w-4 text-[#22a7e0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                        <span><strong><?php esc_html_e('Everything in Foundation', 'avr-web-consulting'); ?></strong></span>
                    </li>
                    <li class="flex items-center gap-2.5">
                        <svg class="h-4 w-4 text-[#22a7e0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                        <span><?php esc_html_e('GEO, AEO & LLMO citation engineering', 'avr-web-consulting'); ?></span>
                    </li>
                    <li class="flex items-center gap-2.5">
                        <svg class="h-4 w-4 text-[#22a7e0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                        <span><?php esc_html_e('40 prioritized keyword clusters', 'avr-web-consulting'); ?></span>
                    </li>
                    <li class="flex items-center gap-2.5">
                        <svg class="h-4 w-4 text-[#22a7e0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                        <span><?php esc_html_e('Digital PR, brand citations & authoritative link acquisition', 'avr-web-consulting'); ?></span>
                    </li>
                    <li class="flex items-center gap-2.5">
                        <svg class="h-4 w-4 text-[#22a7e0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                        <span><?php esc_html_e('Dedicated account strategist with bi-weekly sprint syncs', 'avr-web-consulting'); ?></span>
                    </li>
                </ul>
            </div>

            <div class="mt-8 pt-6 border-t border-slate-100">
                <a href="<?php echo esc_url(home_url('/contact/?tier=growth')); ?>" class="btn-shimmer flex h-11 w-full items-center justify-center rounded-full bg-[#22a7e0] font-bold text-xs uppercase tracking-wider text-white shadow-md shadow-cyan-500/25 hover:bg-[#1995cb] transition-colors">
                    <?php esc_html_e('Choose Growth Retainer', 'avr-web-consulting'); ?>
                </a>
            </div>
        </div>

        <!-- Tier 3: Enterprise -->
        <div class="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
            <div>
                <span class="text-xs font-bold uppercase tracking-wider text-slate-400"><?php esc_html_e('Full Scale Enterprise', 'avr-web-consulting'); ?></span>
                <h3 class="mt-1 text-2xl font-bold text-slate-900"><?php esc_html_e('Enterprise & Multi-Region', 'avr-web-consulting'); ?></h3>
                <p class="mt-2 text-xs text-slate-600 leading-relaxed">
                    <?php esc_html_e('Full-funnel organic search, AI engine domination, international SEO (hreflang), and engineering support.', 'avr-web-consulting'); ?>
                </p>

                <div class="mt-6 flex items-baseline gap-1 border-t border-slate-100 pt-6">
                    <span class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">$3,500</span>
                    <span class="text-xs font-semibold text-slate-500">/ month</span>
                </div>

                <ul class="mt-6 space-y-3 text-xs text-slate-600">
                    <li class="flex items-center gap-2.5">
                        <svg class="h-4 w-4 text-[#22a7e0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                        <span><strong><?php esc_html_e('Everything in Growth', 'avr-web-consulting'); ?></strong></span>
                    </li>
                    <li class="flex items-center gap-2.5">
                        <svg class="h-4 w-4 text-[#22a7e0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                        <span><?php esc_html_e('Multi-country & multi-lingual SEO architecture', 'avr-web-consulting'); ?></span>
                    </li>
                    <li class="flex items-center gap-2.5">
                        <svg class="h-4 w-4 text-[#22a7e0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                        <span><?php esc_html_e('Custom full-stack web code & CMS integrations', 'avr-web-consulting'); ?></span>
                    </li>
                    <li class="flex items-center gap-2.5">
                        <svg class="h-4 w-4 text-[#22a7e0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                        <span><?php esc_html_e('Guaranteed SLA & direct Slack / WhatsApp team access', 'avr-web-consulting'); ?></span>
                    </li>
                </ul>
            </div>

            <div class="mt-8 pt-6 border-t border-slate-100">
                <a href="<?php echo esc_url(home_url('/contact/?tier=enterprise')); ?>" class="flex h-11 w-full items-center justify-center rounded-full border border-slate-300 font-bold text-xs uppercase tracking-wider text-slate-800 hover:border-[#22a7e0] hover:text-[#22a7e0] transition-colors">
                    <?php esc_html_e('Contact Enterprise Team', 'avr-web-consulting'); ?>
                </a>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>
