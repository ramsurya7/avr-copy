<?php
/**
 * Front Page Template (front-page.php)
 * Matches all elements, cards, interactive sections, and design from the React application.
 *
 * @package AVR_Web_Consulting
 */

get_header(); ?>

<!-- 1. Video / Atmospheric Hero Section -->
<section class="relative isolate overflow-hidden bg-[#0b0f17] text-white">
    <?php
    $video_url = avr_get_option('avr_hero_video_url');
    if (empty($video_url)) {
        $video_url = get_template_directory_uri() . '/public/avr.mp4';
    }
    ?>
    <video
        autoplay
        loop
        muted
        playsinline
        preload="metadata"
        poster="<?php echo esc_url(get_template_directory_uri() . '/public/image1.jpg'); ?>"
        class="absolute inset-0 h-full w-full object-cover opacity-35 motion-reduce:hidden"
        aria-hidden="true"
        tabindex="-1"
    >
        <source src="<?php echo esc_url($video_url); ?>" type="video/mp4">
    </video>

    <!-- Dark gradient overlay for text legibility -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#0b0f17]/95 via-[#0b0f17]/85 to-[#0b0f17]/60" aria-hidden="true"></div>

    <!-- Ambient cyan lighting -->
    <div class="pointer-events-none absolute -top-24 right-1/4 h-[32rem] w-[32rem] rounded-full bg-[#22a7e0]/20 blur-[130px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-[#22a7e0]/15 blur-[100px]" aria-hidden="true"></div>

    <div class="container-page relative flex min-h-[32rem] sm:min-h-[38rem] lg:min-h-[44rem] flex-col justify-center py-16 sm:py-20">
        <p class="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/95 backdrop-blur transition-all duration-300 hover:border-[#22a7e0]/60 hover:bg-white/15">
            <span class="h-2 w-2 rounded-full bg-[#22a7e0] animate-pulse"></span>
            <?php echo esc_html(avr_get_option('avr_hero_badge', 'Full-service digital marketing agency')); ?>
        </p>

        <h1 class="mt-6 max-w-4xl font-display text-3xl min-[380px]:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white break-words">
            <?php echo esc_html(avr_get_option('avr_hero_headline', 'Grow Your Business With Smarter Digital Marketing')); ?>
        </h1>

        <p class="mt-5 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-slate-200">
            <?php echo esc_html(avr_get_option('avr_hero_subtitle', 'AVR Web Consulting helps businesses build stronger online visibility, attract qualified traffic, generate leads, and grow through SEO, advertising, content marketing, and web development.')); ?>
        </p>

        <p class="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-slate-300">
            <?php esc_html_e('Now expanding into AI Search, Advanced Web Development & Business Automation.', 'avr-web-consulting'); ?>
        </p>

        <div class="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto">
            <a href="<?php echo esc_url(home_url(avr_get_option('avr_hero_cta_url', '/contact/'))); ?>" class="btn-shimmer inline-flex items-center justify-center rounded-full bg-[#22a7e0] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:bg-[#1995cb] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 touch-target-min">
                <span><?php echo esc_html(avr_get_option('avr_hero_cta_text', 'Request a digital audit')); ?></span>
                <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>

            <a href="<?php echo esc_url(avr_get_option('avr_whatsapp', 'https://wa.me/919182543249')); ?>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-[#22a7e0]/60 transition-all duration-200 touch-target-min">
                <?php esc_html_e('WhatsApp', 'avr-web-consulting'); ?>
            </a>

            <a href="tel:<?php echo esc_attr(avr_get_option('avr_phone', '+919182543249')); ?>" class="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-[#22a7e0]/60 transition-all duration-200 touch-target-min">
                <?php printf(esc_html__('Call %s', 'avr-web-consulting'), esc_html(avr_get_option('avr_phone', '+91-9182543249'))); ?>
            </a>
        </div>
    </div>
</section>

<!-- 2. Who We Are Section -->
<section class="py-14 lg:py-20 bg-white">
    <div class="container-page">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start">
            <div>
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#22a7e0] mb-2">
                    <?php esc_html_e('Who we are', 'avr-web-consulting'); ?>
                </p>
                <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    <?php esc_html_e('A digital marketing agency focused on sustainable online growth', 'avr-web-consulting'); ?>
                </h2>
                <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                    <?php esc_html_e('We help businesses improve their online presence, reach the right audience, and turn digital visibility into business growth through SEO, advertising, social media, content, and web development.', 'avr-web-consulting'); ?>
                </p>

                <!-- Quick Answer Block for AI & Search Engines -->
                <div class="mt-8 relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-cyan-50/50 p-6 sm:p-8">
                    <p class="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#22a7e0]">
                        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <?php esc_html_e('Quick answer', 'avr-web-consulting'); ?>
                    </p>
                    <p class="font-display text-lg font-bold text-slate-900 mb-2">
                        <?php esc_html_e('What is AVR Web Consulting?', 'avr-web-consulting'); ?>
                    </p>
                    <p class="text-base text-slate-700 leading-relaxed">
                        <?php esc_html_e('AVR Web Consulting is a full-service digital marketing agency in Visakhapatnam, India. We help businesses improve their online presence through SEO, advertising, social media marketing, content marketing, and web design and development, with advanced capabilities in AI search, custom full-stack development, AI agents, and business automation.', 'avr-web-consulting'); ?>
                    </p>
                </div>
            </div>

            <!-- Visual Card with team strategy image -->
            <div class="group relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 shadow-sm transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-xl hover:shadow-[#22a7e0]/10">
                <div class="overflow-hidden rounded-[1.375rem]">
                    <img
                        src="<?php echo esc_url(get_template_directory_uri() . '/public/image1.jpg'); ?>"
                        alt="<?php esc_attr_e('AVR Web Consulting team planning a digital marketing strategy around a conference table', 'avr-web-consulting'); ?>"
                        class="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>

        <!-- Metric Highlight Bar -->
        <div class="mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-4 sm:p-8">
            <div class="p-3">
                <dt class="text-xs font-semibold uppercase tracking-wider text-slate-500"><?php echo esc_html(avr_get_option('avr_stat_1_txt', 'Search visibility')); ?></dt>
                <dd class="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums"><?php echo esc_html(avr_get_option('avr_stat_1_num', 'SEO')); ?></dd>
            </div>
            <div class="p-3">
                <dt class="text-xs font-semibold uppercase tracking-wider text-slate-500"><?php echo esc_html(avr_get_option('avr_stat_2_txt', 'Customer acquisition')); ?></dt>
                <dd class="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums"><?php echo esc_html(avr_get_option('avr_stat_2_num', 'Ads')); ?></dd>
            </div>
            <div class="p-3">
                <dt class="text-xs font-semibold uppercase tracking-wider text-slate-500"><?php echo esc_html(avr_get_option('avr_stat_3_txt', 'Brand authority')); ?></dt>
                <dd class="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums"><?php echo esc_html(avr_get_option('avr_stat_3_num', 'Content')); ?></dd>
            </div>
            <div class="p-3">
                <dt class="text-xs font-semibold uppercase tracking-wider text-slate-500"><?php echo esc_html(avr_get_option('avr_stat_4_txt', 'Digital experiences')); ?></dt>
                <dd class="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums"><?php echo esc_html(avr_get_option('avr_stat_4_num', 'Web')); ?></dd>
            </div>
        </div>
    </div>
</section>

<!-- 3. Core Services Grid -->
<section class="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/60" id="services">
    <div class="container-page">
        <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#22a7e0] mb-2">
                <?php esc_html_e('Services', 'avr-web-consulting'); ?>
            </p>
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                <?php esc_html_e('Digital Marketing Services That Drive Growth', 'avr-web-consulting'); ?>
            </h2>
            <p class="mt-4 text-base sm:text-lg text-slate-600">
                <?php esc_html_e('From SEO and paid advertising to content marketing and web development, AVR Web Consulting provides the core digital services businesses need to build visibility, attract customers, and grow online.', 'avr-web-consulting'); ?>
            </p>
        </div>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <!-- Service 1: SEO -->
            <a href="<?php echo esc_url(home_url('/seo-services/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('SEO Services', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Improve search visibility, technical website health, local discovery, and relevant organic traffic across your target markets.', 'avr-web-consulting'); ?>
                    </p>
                    <ul class="mt-4 space-y-2 list-none p-0 m-0">
                        <li class="flex gap-2 text-sm text-slate-700">
                            <span class="text-[#22a7e0] font-bold">&check;</span> <?php esc_html_e('Global SEO', 'avr-web-consulting'); ?>
                        </li>
                        <li class="flex gap-2 text-sm text-slate-700">
                            <span class="text-[#22a7e0] font-bold">&check;</span> <?php esc_html_e('Local SEO', 'avr-web-consulting'); ?>
                        </li>
                        <li class="flex gap-2 text-sm text-slate-700">
                            <span class="text-[#22a7e0] font-bold">&check;</span> <?php esc_html_e('Technical SEO', 'avr-web-consulting'); ?>
                        </li>
                        <li class="flex gap-2 text-sm text-slate-700">
                            <span class="text-[#22a7e0] font-bold">&check;</span> <?php esc_html_e('GEO Targeting SEO', 'avr-web-consulting'); ?>
                        </li>
                        <li class="flex gap-2 text-sm text-slate-700">
                            <span class="text-[#22a7e0] font-bold">&check;</span> <?php esc_html_e('Local Citations & GMB', 'avr-web-consulting'); ?>
                        </li>
                    </ul>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0] group-hover:underline">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>

            <!-- Service 2: Advertising -->
            <a href="<?php echo esc_url(home_url('/paid-advertising/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Advertising', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Reach relevant audiences, attract targeted traffic, and support lead generation through carefully managed campaigns.', 'avr-web-consulting'); ?>
                    </p>
                    <ul class="mt-4 space-y-2 list-none p-0 m-0">
                        <li class="flex gap-2 text-sm text-slate-700">
                            <span class="text-[#22a7e0] font-bold">&check;</span> <?php esc_html_e('Google Ads', 'avr-web-consulting'); ?>
                        </li>
                        <li class="flex gap-2 text-sm text-slate-700">
                            <span class="text-[#22a7e0] font-bold">&check;</span> <?php esc_html_e('Social Media Ads', 'avr-web-consulting'); ?>
                        </li>
                        <li class="flex gap-2 text-sm text-slate-700">
                            <span class="text-[#22a7e0] font-bold">&check;</span> <?php esc_html_e('Social Media Marketing', 'avr-web-consulting'); ?>
                        </li>
                    </ul>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0] group-hover:underline">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>

            <!-- Service 3: Content Marketing -->
            <a href="<?php echo esc_url(home_url('/content-marketing/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Content Marketing', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Build authority and audience engagement with useful content, clear brand communication, and relevant link strategies.', 'avr-web-consulting'); ?>
                    </p>
                    <ul class="mt-4 space-y-2 list-none p-0 m-0">
                        <li class="flex gap-2 text-sm text-slate-700">
                            <span class="text-[#22a7e0] font-bold">&check;</span> <?php esc_html_e('Blogging & Copywriting', 'avr-web-consulting'); ?>
                        </li>
                        <li class="flex gap-2 text-sm text-slate-700">
                            <span class="text-[#22a7e0] font-bold">&check;</span> <?php esc_html_e('Guest Posting & Link Building', 'avr-web-consulting'); ?>
                        </li>
                    </ul>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0] group-hover:underline">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>

            <!-- Service 4: Web Design & Development -->
            <a href="<?php echo esc_url(home_url('/web-design-development/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Web Design & Development', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Create a credible, responsive online presence designed for usability, conversions, online sales, and business growth.', 'avr-web-consulting'); ?>
                    </p>
                    <ul class="mt-4 space-y-2 list-none p-0 m-0">
                        <li class="flex gap-2 text-sm text-slate-700">
                            <span class="text-[#22a7e0] font-bold">&check;</span> <?php esc_html_e('WordPress Development', 'avr-web-consulting'); ?>
                        </li>
                        <li class="flex gap-2 text-sm text-slate-700">
                            <span class="text-[#22a7e0] font-bold">&check;</span> <?php esc_html_e('E-commerce Development', 'avr-web-consulting'); ?>
                        </li>
                    </ul>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0] group-hover:underline">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>
        </div>
    </div>
</section>

<!-- 4. SEO Services Showcase Grid -->
<section class="py-16 lg:py-24 bg-white">
    <div class="container-page">
        <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#22a7e0] mb-2">
                <?php esc_html_e('SEO services', 'avr-web-consulting'); ?>
            </p>
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                <?php esc_html_e('Build a Stronger Search Presence', 'avr-web-consulting'); ?>
            </h2>
            <p class="mt-4 text-base sm:text-lg text-slate-600">
                <?php esc_html_e('Our SEO services improve technical website health, local and global discovery, geographic relevance, and the ability to attract useful organic traffic.', 'avr-web-consulting'); ?>
            </p>
        </div>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <a href="<?php echo esc_url(home_url('/seo-services/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('SEO Services Overview', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('A coordinated strategy for stronger organic visibility, relevant traffic, and a healthier search presence.', 'avr-web-consulting'); ?>
                    </p>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0]">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>

            <a href="<?php echo esc_url(home_url('/seo-services/global-seo/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Global SEO', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Build visibility across countries and languages with market-aware research, site structure, and content.', 'avr-web-consulting'); ?>
                    </p>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0]">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>

            <a href="<?php echo esc_url(home_url('/seo-services/local-seo/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Local SEO', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Strengthen local discovery for people searching for relevant services in your city or service area.', 'avr-web-consulting'); ?>
                    </p>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0]">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>

            <a href="<?php echo esc_url(home_url('/seo-services/technical-seo/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Technical SEO', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Improve crawling, indexing, site performance, structured data, and the technical health of your website.', 'avr-web-consulting'); ?>
                    </p>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0]">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>

            <a href="<?php echo esc_url(home_url('/seo-services/geo-targeting-seo/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('GEO Targeting SEO', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Target specific cities, regions, or countries with geographically relevant pages and search signals.', 'avr-web-consulting'); ?>
                    </p>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0]">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>

            <a href="<?php echo esc_url(home_url('/seo-services/local-citations-gmb/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Local Citations & GMB', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Improve business information consistency and local presence through citations and Google Business Profile support.', 'avr-web-consulting'); ?>
                    </p>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0]">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>
        </div>
    </div>
</section>

<!-- 5. Advertising, Content & Websites Showcase -->
<section class="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/60">
    <div class="container-page">
        <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#22a7e0] mb-2">
                <?php esc_html_e('Advertising, content & websites', 'avr-web-consulting'); ?>
            </p>
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                <?php esc_html_e('Turn Visibility Into Meaningful Business Activity', 'avr-web-consulting'); ?>
            </h2>
            <p class="mt-4 text-base sm:text-lg text-slate-600">
                <?php esc_html_e('Our advertising, content, and website services work together to reach audiences, communicate value, build trust, and support conversion.', 'avr-web-consulting'); ?>
            </p>
        </div>

        <div class="mt-10 grid gap-5 lg:grid-cols-3">
            <a href="<?php echo esc_url(home_url('/paid-advertising/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Advertising', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Google Ads, Social Media Ads, and Social Media Marketing help businesses reach relevant audiences, generate targeted visits, and create measurable lead opportunities.', 'avr-web-consulting'); ?>
                    </p>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0]">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>

            <a href="<?php echo esc_url(home_url('/content-marketing/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Content Marketing', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Blogging, copywriting, guest posting, and relevant link building support communication, engagement, authority, SEO, and organic visibility.', 'avr-web-consulting'); ?>
                    </p>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0]">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>

            <a href="<?php echo esc_url(home_url('/web-design-development/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Web Design & Development', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('WordPress and e-commerce development create responsive, usable experiences that support credibility, conversions, online sales, and digital growth.', 'avr-web-consulting'); ?>
                    </p>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0]">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>
        </div>
    </div>
</section>

<!-- 6. How We Help Businesses Grow (5-Step Journey) -->
<section class="py-16 lg:py-24 bg-white">
    <div class="container-page">
        <div class="max-w-3xl mx-auto text-center">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#22a7e0] mb-2">
                <?php esc_html_e('How we help businesses grow', 'avr-web-consulting'); ?>
            </p>
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                <?php esc_html_e('A Connected Journey From Discovery to Digital Progress', 'avr-web-consulting'); ?>
            </h2>
        </div>

        <ol class="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-5 list-none p-0">
            <li class="h-full">
                <div class="group relative h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg hover:-translate-y-1">
                    <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#22a7e0]/10 font-display text-sm font-bold text-[#22a7e0] transition-all duration-300 group-hover:bg-[#22a7e0] group-hover:text-white">
                        01
                    </span>
                    <h3 class="mt-3 font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Get found', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('SEO, Local SEO, Technical SEO, and useful content make your business easier to discover.', 'avr-web-consulting'); ?>
                    </p>
                </div>
            </li>

            <li class="h-full">
                <div class="group relative h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg hover:-translate-y-1">
                    <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#22a7e0]/10 font-display text-sm font-bold text-[#22a7e0] transition-all duration-300 group-hover:bg-[#22a7e0] group-hover:text-white">
                        02
                    </span>
                    <h3 class="mt-3 font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Get traffic', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Google Ads and social media marketing help attract relevant visitors to your digital presence.', 'avr-web-consulting'); ?>
                    </p>
                </div>
            </li>

            <li class="h-full">
                <div class="group relative h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg hover:-translate-y-1">
                    <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#22a7e0]/10 font-display text-sm font-bold text-[#22a7e0] transition-all duration-300 group-hover:bg-[#22a7e0] group-hover:text-white">
                        03
                    </span>
                    <h3 class="mt-3 font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Build authority', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Content, blogging, guest posting, and relevant link building strengthen your online presence.', 'avr-web-consulting'); ?>
                    </p>
                </div>
            </li>

            <li class="h-full">
                <div class="group relative h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg hover:-translate-y-1">
                    <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#22a7e0]/10 font-display text-sm font-bold text-[#22a7e0] transition-all duration-300 group-hover:bg-[#22a7e0] group-hover:text-white">
                        04
                    </span>
                    <h3 class="mt-3 font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Convert visitors', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Professional websites and e-commerce experiences help turn interest into enquiries and sales.', 'avr-web-consulting'); ?>
                    </p>
                </div>
            </li>

            <li class="h-full">
                <div class="group relative h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg hover:-translate-y-1">
                    <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#22a7e0]/10 font-display text-sm font-bold text-[#22a7e0] transition-all duration-300 group-hover:bg-[#22a7e0] group-hover:text-white">
                        05
                    </span>
                    <h3 class="mt-3 font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Adapt to AI', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-2 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('AI SEO, AI visibility, custom development, and automation help your business prepare for digital change.', 'avr-web-consulting'); ?>
                    </p>
                </div>
            </li>
        </ol>
    </div>
</section>

<!-- 7. Advanced Capabilities & AI Search Platforms -->
<section class="border-t border-slate-200/80 bg-slate-50/70 py-16 lg:py-24">
    <div class="container-page">
        <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#22a7e0] mb-2">
                <?php esc_html_e('The next evolution of search', 'avr-web-consulting'); ?>
            </p>
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                <?php esc_html_e('AI SEO & AI Search Visibility', 'avr-web-consulting'); ?>
            </h2>
            <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <?php esc_html_e('Search is evolving beyond traditional search engines. Our AI SEO services help businesses structure and optimize their digital presence for emerging AI-driven discovery experiences.', 'avr-web-consulting'); ?>
            </p>
        </div>

        <div class="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
            <div>
                <div class="grid gap-4 sm:grid-cols-2">
                    <a href="<?php echo esc_url(home_url('/ai-seo/')); ?>" class="group card-interactive block h-full rounded-2xl bg-white p-5 border border-slate-200 shadow-sm transition-all duration-200 hover:border-[#22a7e0]">
                        <h3 class="font-display text-base font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                            <?php esc_html_e('AI SEO Overview', 'avr-web-consulting'); ?>
                        </h3>
                        <p class="mt-2 text-sm leading-relaxed text-slate-600">
                            <?php esc_html_e('Connect established SEO foundations with emerging AI-driven discovery opportunities.', 'avr-web-consulting'); ?>
                        </p>
                    </a>

                    <a href="<?php echo esc_url(home_url('/ai-seo/answer-engine-optimization/')); ?>" class="group card-interactive block h-full rounded-2xl bg-white p-5 border border-slate-200 shadow-sm transition-all duration-200 hover:border-[#22a7e0]">
                        <h3 class="font-display text-base font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                            <?php esc_html_e('Answer Engine Optimization', 'avr-web-consulting'); ?>
                        </h3>
                        <p class="mt-2 text-sm leading-relaxed text-slate-600">
                            <?php esc_html_e('Structure clear, useful answers that answer engines can understand and retrieve.', 'avr-web-consulting'); ?>
                        </p>
                    </a>

                    <a href="<?php echo esc_url(home_url('/ai-seo/geo-seo/')); ?>" class="group card-interactive block h-full rounded-2xl bg-white p-5 border border-slate-200 shadow-sm transition-all duration-200 hover:border-[#22a7e0]">
                        <h3 class="font-display text-base font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                            <?php esc_html_e('GEO SEO', 'avr-web-consulting'); ?>
                        </h3>
                        <p class="mt-2 text-sm leading-relaxed text-slate-600">
                            <?php esc_html_e('Generative Engine Optimization for clearer entities, sourceable information, and AI discovery.', 'avr-web-consulting'); ?>
                        </p>
                    </a>

                    <a href="<?php echo esc_url(home_url('/ai-seo/llm-seo/')); ?>" class="group card-interactive block h-full rounded-2xl bg-white p-5 border border-slate-200 shadow-sm transition-all duration-200 hover:border-[#22a7e0]">
                        <h3 class="font-display text-base font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                            <?php esc_html_e('LLM SEO', 'avr-web-consulting'); ?>
                        </h3>
                        <p class="mt-2 text-sm leading-relaxed text-slate-600">
                            <?php esc_html_e('Improve content structure and context for discovery through large language model experiences.', 'avr-web-consulting'); ?>
                        </p>
                    </a>

                    <a href="<?php echo esc_url(home_url('/ai-seo/llmo/')); ?>" class="group card-interactive block h-full rounded-2xl bg-white p-5 border border-slate-200 shadow-sm transition-all duration-200 hover:border-[#22a7e0]">
                        <h3 class="font-display text-base font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                            <?php esc_html_e('LLMO', 'avr-web-consulting'); ?>
                        </h3>
                        <p class="mt-2 text-sm leading-relaxed text-slate-600">
                            <?php esc_html_e('Make important business information easier for language models to interpret and retrieve.', 'avr-web-consulting'); ?>
                        </p>
                    </a>

                    <a href="<?php echo esc_url(home_url('/ai-seo/ai-visibility/')); ?>" class="group card-interactive block h-full rounded-2xl bg-white p-5 border border-slate-200 shadow-sm transition-all duration-200 hover:border-[#22a7e0]">
                        <h3 class="font-display text-base font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                            <?php esc_html_e('AI Visibility', 'avr-web-consulting'); ?>
                        </h3>
                        <p class="mt-2 text-sm leading-relaxed text-slate-600">
                            <?php esc_html_e('Strengthen the signals that support visibility opportunities across AI-powered search.', 'avr-web-consulting'); ?>
                        </p>
                    </a>
                </div>

                <div class="mt-8">
                    <a href="<?php echo esc_url(home_url('/ai-seo/')); ?>" class="btn-shimmer inline-flex items-center justify-center rounded-full bg-[#22a7e0] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#1995cb] transition-colors">
                        <span><?php esc_html_e('Explore AI SEO services', 'avr-web-consulting'); ?></span> &rarr;
                    </a>
                </div>
            </div>

            <!-- AI Platforms Graphic Card -->
            <div class="group relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-xl hover:shadow-[#22a7e0]/10">
                <img
                    src="<?php echo esc_url(get_template_directory_uri() . '/public/image2.jpeg'); ?>"
                    alt="<?php esc_attr_e('AI search platforms covered by AVR Web Consulting: ChatGPT, Gemini, Claude, DeepSeek, Perplexity and Grok', 'avr-web-consulting'); ?>"
                    loading="lazy"
                    class="w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div class="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    <div class="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-center text-xs font-semibold text-slate-800">ChatGPT (OpenAI)</div>
                    <div class="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-center text-xs font-semibold text-slate-800">Google Gemini</div>
                    <div class="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-center text-xs font-semibold text-slate-800">Perplexity AI</div>
                    <div class="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-center text-xs font-semibold text-slate-800">Claude (Anthropic)</div>
                    <div class="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-center text-xs font-semibold text-slate-800">Microsoft Copilot</div>
                    <div class="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-center text-xs font-semibold text-slate-800">xAI Grok</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 8. Custom Digital Solutions: Advanced Full-Stack Web Development -->
<section class="py-16 lg:py-24 bg-white">
    <div class="container-page">
        <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#22a7e0] mb-2">
                <?php esc_html_e('Custom digital solutions', 'avr-web-consulting'); ?>
            </p>
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                <?php esc_html_e('Advanced Full-Stack Web Development', 'avr-web-consulting'); ?>
            </h2>
            <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <?php esc_html_e('When standard website solutions are not enough, we build custom digital experiences and web applications using modern development technologies, selected around the business outcome rather than the technology itself.', 'avr-web-consulting'); ?>
            </p>
        </div>

        <!-- Technology Pills -->
        <ul class="mt-8 flex flex-wrap gap-2.5 sm:gap-3 list-none p-0 m-0">
            <?php
            $techs = array('React', 'Node.js', 'JavaScript', 'JSON', 'HTML', 'CSS', 'Python', 'Java', 'Databases', 'Full-Stack Development', 'AI-Assisted Development');
            foreach ($techs as $tech) :
                ?>
                <li class="cursor-default rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-800 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#22a7e0]/60 hover:bg-[#22a7e0]/5 hover:text-[#22a7e0]">
                    <?php echo esc_html($tech); ?>
                </li>
            <?php endforeach; ?>
        </ul>

        <div class="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto">
            <a href="<?php echo esc_url(home_url('/web-design-development/full-stack-web-development/')); ?>" class="btn-shimmer inline-flex items-center justify-center rounded-full bg-[#22a7e0] px-7 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#1995cb] transition-colors">
                <span><?php esc_html_e('Explore full-stack development', 'avr-web-consulting'); ?></span> &rarr;
            </a>
            <a href="<?php echo esc_url(home_url('/web-design-development/vibe-coding-ai-assisted-development/')); ?>" class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 hover:border-[#22a7e0] hover:text-[#22a7e0] transition-colors">
                <span><?php esc_html_e('Vibe coding & AI-assisted development', 'avr-web-consulting'); ?></span> &rarr;
            </a>
        </div>
    </div>
</section>

<!-- 9. Intelligent Operations: AI Agents & Business Automation -->
<section class="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/60">
    <div class="container-page">
        <div class="max-w-3xl">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#22a7e0] mb-2">
                <?php esc_html_e('Intelligent operations', 'avr-web-consulting'); ?>
            </p>
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                <?php esc_html_e('AI Agents & Business Automation', 'avr-web-consulting'); ?>
            </h2>
            <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <?php esc_html_e('Automate repetitive processes, connect business tools, and build intelligent workflows that help businesses operate more efficiently.', 'avr-web-consulting'); ?>
            </p>
        </div>

        <div class="mt-10 grid gap-5 md:grid-cols-3">
            <a href="<?php echo esc_url(home_url('/automation-ai-agents/n8n-automation/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('n8n Automations', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Connect business tools and automate repeatable tasks through dependable multi-step workflows.', 'avr-web-consulting'); ?>
                    </p>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0]">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>

            <a href="<?php echo esc_url(home_url('/automation-ai-agents/ai-agent-development/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('AI Agent Development', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Build focused AI agents that assist with defined business processes, information, and actions.', 'avr-web-consulting'); ?>
                    </p>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0]">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>

            <a href="<?php echo esc_url(home_url('/automation-ai-agents/n8n-automation/')); ?>" class="group card-interactive flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:border-[#22a7e0]/50 hover:shadow-lg">
                <div>
                    <h3 class="font-display text-lg font-semibold text-slate-900 transition-colors duration-200 group-hover:text-[#22a7e0]">
                        <?php esc_html_e('Business Workflow Automation', 'avr-web-consulting'); ?>
                    </h3>
                    <p class="mt-3 text-sm leading-relaxed text-slate-600">
                        <?php esc_html_e('Reduce repetitive work and improve operational efficiency by connecting systems and processes.', 'avr-web-consulting'); ?>
                    </p>
                </div>
                <span class="mt-6 inline-flex items-center text-sm font-semibold text-[#22a7e0]">
                    <?php esc_html_e('Explore', 'avr-web-consulting'); ?> &rarr;
                </span>
            </a>
        </div>
    </div>
</section>

<!-- 10. Frequently Asked Questions Accordion -->
<section class="py-16 lg:py-24 bg-white" id="faqs">
    <div class="container-page max-w-4xl mx-auto">
        <div class="text-center mb-12">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#22a7e0] mb-2">
                <?php esc_html_e('Answers & Insights', 'avr-web-consulting'); ?>
            </p>
            <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                <?php esc_html_e('AVR Web Consulting — Frequently Asked Questions', 'avr-web-consulting'); ?>
            </h2>
        </div>

        <div class="avr-accordion space-y-3">
            <?php
            $faqs = array(
                array(
                    'q' => 'What digital marketing services does AVR Web Consulting provide?',
                    'a' => 'We provide SEO, Google Ads, social media advertising and marketing, content marketing, WordPress development, and e-commerce development. We also offer AI SEO, custom full-stack development, AI agents, and business automation.',
                ),
                array(
                    'q' => 'Do you provide Local SEO and Global SEO?',
                    'a' => 'Yes. Local SEO supports discovery in specific cities and service areas, while Global SEO helps businesses build search visibility across countries and languages.',
                ),
                array(
                    'q' => 'Do you provide Google Ads and Social Media Marketing?',
                    'a' => 'Yes. We manage Google Ads, social media advertising, and organic social media marketing to help businesses reach relevant audiences and create measurable traffic and lead opportunities.',
                ),
                array(
                    'q' => 'Do you provide WordPress and E-commerce Development?',
                    'a' => 'Yes. We build responsive WordPress websites and e-commerce experiences focused on usability, credibility, conversions, and online sales functionality.',
                ),
                array(
                    'q' => 'What is AI SEO?',
                    'a' => 'AI SEO improves content structure, entity clarity, machine-readable information, and source quality to support discovery across AI-powered search and answer experiences.',
                ),
                array(
                    'q' => 'What is Answer Engine Optimization?',
                    'a' => 'Answer Engine Optimization structures content around clear questions, direct answers, supporting detail, and reliable context so answer engines can understand and retrieve it more effectively.',
                ),
                array(
                    'q' => 'How is AI SEO different from traditional SEO?',
                    'a' => 'Traditional SEO focuses on visibility in search results. AI SEO also considers how answer engines and language models interpret, retrieve, and present information. The two approaches share strong technical and content foundations.',
                ),
                array(
                    'q' => 'Do you build custom full-stack websites?',
                    'a' => 'Yes. When standard website platforms are not enough, we build custom web experiences and applications using modern front-end, server, and database technologies, including AI-assisted development workflows.',
                ),
                array(
                    'q' => 'Do you provide AI agents and n8n automation?',
                    'a' => 'Yes. We develop focused AI agents, n8n automations, and connected business workflows designed to reduce repetitive work and improve operational efficiency.',
                ),
                array(
                    'q' => 'What is the difference between GEO Targeting SEO and GEO SEO?',
                    'a' => 'GEO Targeting SEO focuses on geographic markets such as cities, regions, and countries. GEO SEO means Generative Engine Optimization and focuses on improving how information is understood in AI-driven discovery experiences.',
                ),
            );

            foreach ($faqs as $faq) :
                ?>
                <div class="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-200">
                    <button type="button" class="avr-accordion-trigger flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-[#22a7e0] transition-colors" aria-expanded="false">
                        <span class="text-base sm:text-lg pr-4"><?php echo esc_html($faq['q']); ?></span>
                        <svg class="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>
                    <div class="avr-accordion-content hidden px-5 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                        <?php echo esc_html($faq['a']); ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- 11. High-Converting CTA Band -->
<section class="relative overflow-hidden bg-gradient-to-br from-[#0b0f17] via-[#0d1424] to-[#0b0f17] py-20 lg:py-24 text-white">
    <div class="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#22a7e0]/20 blur-[120px]" aria-hidden="true"></div>
    <div class="pointer-events-none absolute -bottom-20 left-10 h-80 w-80 rounded-full bg-[#22a7e0]/10 blur-[100px]" aria-hidden="true"></div>

    <div class="container-page relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div class="max-w-2xl">
            <h2 class="text-3xl font-bold tracking-tight text-white lg:text-4xl">
                <?php esc_html_e('Ready to Grow Your Digital Presence?', 'avr-web-consulting'); ?>
            </h2>
            <p class="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
                <?php esc_html_e('Whether you need stronger search visibility, better advertising, engaging content, a new website, AI-search optimization, or business automation, AVR Web Consulting can help you build the right digital strategy.', 'avr-web-consulting'); ?>
            </p>
        </div>

        <div class="flex flex-col sm:flex-row flex-wrap gap-3 w-full lg:w-auto">
            <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="btn-shimmer inline-flex items-center justify-center rounded-full bg-[#22a7e0] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:bg-[#1995cb] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 touch-target-min">
                <span><?php esc_html_e('Book Consultation', 'avr-web-consulting'); ?></span>
                <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
            <a href="<?php echo esc_url(avr_get_option('avr_whatsapp', 'https://wa.me/919182543249')); ?>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-[#22a7e0]/60 transition-all duration-200 touch-target-min">
                <?php esc_html_e('WhatsApp', 'avr-web-consulting'); ?>
            </a>
            <a href="tel:<?php echo esc_attr(avr_get_option('avr_phone', '+919182543249')); ?>" class="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-[#22a7e0]/60 transition-all duration-200 touch-target-min">
                <?php printf(esc_html__('Call %s', 'avr-web-consulting'), esc_html(avr_get_option('avr_phone', '+91-9182543249'))); ?>
            </a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
