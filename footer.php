<?php
/**
 * The Footer for AVR Web Consulting Theme
 *
 * @package AVR_Web_Consulting
 */
?>
</main><!-- #main-content -->

<!-- Site Footer -->
<footer class="border-t border-slate-200 bg-slate-950 text-slate-300 font-sans mt-16 sm:mt-24">
    <div class="container-page py-14 lg:py-20">
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <!-- Company Info & Address -->
                <?php
                $footer_logo_id = get_theme_mod('custom_logo');
                $footer_logo_url = '';
                if ($footer_logo_id) {
                    $footer_logo_data = wp_get_attachment_image_src($footer_logo_id, 'full');
                    if ($footer_logo_data && !empty($footer_logo_data[0])) {
                        $footer_logo_url = $footer_logo_data[0];
                    }
                }
                if (empty($footer_logo_url)) {
                    $footer_logo_url = get_template_directory_uri() . '/1790648464804.png';
                }
                ?>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-3 group" rel="home">
                    <img
                        src="<?php echo esc_url($footer_logo_url); ?>"
                        alt="<?php echo esc_attr(get_bloginfo('name')); ?> logo"
                        class="h-10 sm:h-12 w-auto max-h-12 object-contain bg-transparent transition-transform duration-200 group-hover:scale-105"
                        style="height: 44px; max-height: 48px; width: auto; max-width: 200px; object-fit: contain; display: inline-block;"
                        loading="lazy"
                        width="48"
                        height="48"
                    />
                    <span class="text-xl font-bold tracking-tight text-white"><?php bloginfo('name'); ?></span>
                </a>
                <p class="mt-4 text-sm leading-relaxed text-slate-400">
                    <?php esc_html_e('Hybrid digital marketing agency combining traditional technical SEO with modern AEO, GEO, and AI visibility strategies for sustainable growth.', 'avr-web-consulting'); ?>
                </p>
                <div class="mt-6 space-y-2 text-xs text-slate-400">
                    <p class="leading-relaxed">
                        <strong class="text-white"><?php esc_html_e('Address:', 'avr-web-consulting'); ?></strong><br>
                        <?php echo esc_html(avr_get_option('avr_address', 'Hero Showroom Lane, D No: 43-18-16, Venkatarajunagar, TSN Colony, Dondaparthy, Visakhapatnam – 530016, AP, India')); ?>
                    </p>
                    <p>
                        <strong class="text-white"><?php esc_html_e('Phone:', 'avr-web-consulting'); ?></strong>
                        <a href="tel:<?php echo esc_attr(avr_get_option('avr_phone', '+919182543249')); ?>" class="hover:text-[#22a7e0] ml-1">
                            <?php echo esc_html(avr_get_option('avr_phone', '+91-9182543249')); ?>
                        </a>
                    </p>
                    <p>
                        <strong class="text-white"><?php esc_html_e('Email:', 'avr-web-consulting'); ?></strong>
                        <a href="mailto:<?php echo esc_attr(avr_get_option('avr_email', 'info@avrwebconsulting.com')); ?>" class="hover:text-[#22a7e0] ml-1">
                            <?php echo esc_html(avr_get_option('avr_email', 'info@avrwebconsulting.com')); ?>
                        </a>
                    </p>
                </div>
            </div>

            <!-- SEO & AI Services -->
            <div>
                <h4 class="font-display text-sm font-bold uppercase tracking-wider text-white">
                    <?php esc_html_e('Services', 'avr-web-consulting'); ?>
                </h4>
                <ul class="mt-4 space-y-2.5 text-sm list-none p-0 m-0">
                    <li><a href="<?php echo esc_url(home_url('/seo-services/global-seo/')); ?>" class="hover:text-white transition-colors"><?php esc_html_e('Global SEO', 'avr-web-consulting'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/seo-services/local-seo/')); ?>" class="hover:text-white transition-colors"><?php esc_html_e('Local Citations & GMB', 'avr-web-consulting'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/ai-seo/aeo/')); ?>" class="hover:text-white transition-colors"><?php esc_html_e('Answer Engine (AEO)', 'avr-web-consulting'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/ai-seo/geo/')); ?>" class="hover:text-white transition-colors"><?php esc_html_e('Generative Engine (GEO)', 'avr-web-consulting'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/ai-seo/llm-seo/')); ?>" class="hover:text-white transition-colors"><?php esc_html_e('LLM SEO & Visibility', 'avr-web-consulting'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/web-design-development/')); ?>" class="hover:text-white transition-colors"><?php esc_html_e('Web Design & WordPress', 'avr-web-consulting'); ?></a></li>
                </ul>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="font-display text-sm font-bold uppercase tracking-wider text-white">
                    <?php esc_html_e('Company', 'avr-web-consulting'); ?>
                </h4>
                <ul class="mt-4 space-y-2.5 text-sm list-none p-0 m-0">
                    <li><a href="<?php echo esc_url(home_url('/about/')); ?>" class="hover:text-white transition-colors"><?php esc_html_e('About Us', 'avr-web-consulting'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/pricing/')); ?>" class="hover:text-white transition-colors"><?php esc_html_e('Pricing Packages', 'avr-web-consulting'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/case-studies/')); ?>" class="hover:text-white transition-colors"><?php esc_html_e('Case Studies', 'avr-web-consulting'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/faqs/')); ?>" class="hover:text-white transition-colors"><?php esc_html_e('Frequently Asked Questions', 'avr-web-consulting'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/blog/')); ?>" class="hover:text-white transition-colors"><?php esc_html_e('Blog & Guides', 'avr-web-consulting'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/contact/')); ?>" class="hover:text-white transition-colors"><?php esc_html_e('Contact Us', 'avr-web-consulting'); ?></a></li>
                </ul>
            </div>

            <!-- Free Consultation Card -->
            <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                    <span class="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-[#22a7e0]">
                        <?php esc_html_e('Response within 24h', 'avr-web-consulting'); ?>
                    </span>
                    <h5 class="mt-3 font-display text-base font-bold text-white">
                        <?php esc_html_e('Ready to grow online?', 'avr-web-consulting'); ?>
                    </h5>
                    <p class="mt-2 text-xs leading-relaxed text-slate-400">
                        <?php esc_html_e('Request a free SEO, citation, and AI visibility audit for your website today.', 'avr-web-consulting'); ?>
                    </p>
                </div>
                <div class="mt-6 space-y-2.5">
                    <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="flex h-11 w-full items-center justify-center rounded-xl bg-[#22a7e0] text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#1995cb] transition-colors">
                        <?php esc_html_e('Request Audit', 'avr-web-consulting'); ?>
                    </a>
                    <a href="<?php echo esc_url(avr_get_option('avr_whatsapp', 'https://wa.me/919182543249')); ?>" target="_blank" rel="noopener noreferrer" class="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 text-xs font-semibold text-white hover:bg-slate-700 transition-colors">
                        <span><?php esc_html_e('Chat on WhatsApp', 'avr-web-consulting'); ?></span>
                    </a>
                </div>
            </div>
        </div>

        <div class="mt-12 border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; <?php echo esc_html(date('Y')); ?> <?php bloginfo('name'); ?>. <?php esc_html_e('All rights reserved.', 'avr-web-consulting'); ?></p>
            <div class="flex gap-4">
                <a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>" class="hover:text-slate-400"><?php esc_html_e('Privacy Policy', 'avr-web-consulting'); ?></a>
                <span>&bull;</span>
                <a href="<?php echo esc_url(home_url('/terms-of-service/')); ?>" class="hover:text-slate-400"><?php esc_html_e('Terms of Service', 'avr-web-consulting'); ?></a>
                <span>&bull;</span>
                <a href="<?php echo esc_url(home_url('/sitemap/')); ?>" class="hover:text-slate-400"><?php esc_html_e('Sitemap', 'avr-web-consulting'); ?></a>
            </div>
        </div>
    </div>
</footer>

<!-- Floating Contact Action Buttons (Phone & Tablet Accessible) -->
<div class="floating-contact-wrap animate-float-subtle">
    <!-- WhatsApp Trigger -->
    <a
        href="<?php echo esc_url(avr_get_option('avr_whatsapp', 'https://wa.me/919182543249')); ?>"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="<?php esc_attr_e('Chat on WhatsApp', 'avr-web-consulting'); ?>"
        class="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-transparent transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        style="filter: drop-shadow(0 4px 12px rgba(37,211,102,0.35));"
    >
        <span class="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366]/20 animate-pulse-ring" aria-hidden="true"></span>
        <svg class="h-10 w-10 sm:h-12 sm:w-12 text-[#25D366] fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.884 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.414z" />
        </svg>
    </a>

    <!-- Phone Call Trigger -->
    <a
        href="tel:<?php echo esc_attr(avr_get_option('avr_phone', '+919182543249')); ?>"
        aria-label="<?php esc_attr_e('Call AVR Web Consulting', 'avr-web-consulting'); ?>"
        class="group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#22a7e0] text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-[#22a7e0] focus:ring-offset-2"
    >
        <svg class="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
    </a>
</div>

<?php wp_footer(); ?>
</body>
</html>
