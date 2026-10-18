<?php
/**
 * Template Name: Contact & Audit Request
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
            <?php esc_html_e('Get in touch with our digital marketing and SEO specialists in Visakhapatnam. Request a free audit or schedule a strategy discussion.', 'avr-web-consulting'); ?>
        </p>
    </div>
</div>

<div class="container-page py-12 lg:py-16">
    <?php if (isset($_GET['inquiry']) && $_GET['inquiry'] === 'success') : ?>
        <div class="mb-8 rounded-2xl border border-emerald-500/30 bg-emerald-50 p-6 text-emerald-900">
            <div class="flex items-center gap-3">
                <svg class="h-6 w-6 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                    <h3 class="text-base font-bold"><?php esc_html_e('Thank you! Your inquiry was sent successfully.', 'avr-web-consulting'); ?></h3>
                    <p class="text-xs text-emerald-700 mt-0.5"><?php esc_html_e('Our team will review your website and reply within one business day.', 'avr-web-consulting'); ?></p>
                </div>
            </div>
        </div>
    <?php elseif (isset($_GET['inquiry']) && $_GET['inquiry'] === 'error') : ?>
        <div class="mb-8 rounded-2xl border border-rose-500/30 bg-rose-50 p-6 text-rose-900">
            <p class="text-sm font-semibold"><?php esc_html_e('Could not send message. Please reach out to us directly via WhatsApp or Phone.', 'avr-web-consulting'); ?></p>
        </div>
    <?php endif; ?>

    <div class="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
        <!-- Interactive Inquiry Form -->
        <div class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
            <h2 class="text-2xl font-bold tracking-tight text-slate-900">
                <?php esc_html_e('Send an Inquiry / Request an Audit', 'avr-web-consulting'); ?>
            </h2>
            <p class="mt-2 text-sm text-slate-600">
                <?php esc_html_e('Fill out the form below and we will prepare an initial competitor and keyword analysis for your website.', 'avr-web-consulting'); ?>
            </p>

            <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="POST" id="avr-contact-form" class="mt-8 space-y-5">
                <input type="hidden" name="action" value="avr_submit_inquiry">
                <?php wp_nonce_field('avr_inquiry_nonce', 'avr_inquiry_nonce'); ?>

                <div class="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label for="full_name" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                            <?php esc_html_e('Full Name *', 'avr-web-consulting'); ?>
                        </label>
                        <input
                            type="text"
                            name="full_name"
                            id="full_name"
                            required
                            placeholder="<?php esc_attr_e('John Doe', 'avr-web-consulting'); ?>"
                            class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#22a7e0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#22a7e0]/20 transition-all"
                        >
                    </div>

                    <div>
                        <label for="email" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                            <?php esc_html_e('Email Address *', 'avr-web-consulting'); ?>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="<?php esc_attr_e('name@company.com', 'avr-web-consulting'); ?>"
                            class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#22a7e0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#22a7e0]/20 transition-all"
                        >
                    </div>
                </div>

                <div class="grid gap-5 sm:grid-cols-2">
                    <div>
                        <label for="phone" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                            <?php esc_html_e('Phone / WhatsApp Number', 'avr-web-consulting'); ?>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="<?php esc_attr_e('+91 91825 43249', 'avr-web-consulting'); ?>"
                            class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#22a7e0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#22a7e0]/20 transition-all"
                        >
                    </div>

                    <div>
                        <label for="website" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                            <?php esc_html_e('Website URL', 'avr-web-consulting'); ?>
                        </label>
                        <input
                            type="url"
                            name="website"
                            id="website"
                            placeholder="<?php esc_attr_e('https://yourwebsite.com', 'avr-web-consulting'); ?>"
                            class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#22a7e0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#22a7e0]/20 transition-all"
                        >
                    </div>
                </div>

                <div>
                    <label for="service" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        <?php esc_html_e('Service Needed', 'avr-web-consulting'); ?>
                    </label>
                    <select
                        name="service"
                        id="service"
                        class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#22a7e0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#22a7e0]/20 transition-all"
                    >
                        <option value="AI SEO &amp; Visibility"><?php esc_html_e('AI SEO &amp; Generative Engine Visibility (GEO / AEO)', 'avr-web-consulting'); ?></option>
                        <option value="Global &amp; Technical SEO"><?php esc_html_e('Global &amp; Technical SEO Audit', 'avr-web-consulting'); ?></option>
                        <option value="Local Citations &amp; GMB"><?php esc_html_e('Local SEO &amp; Google Business Profile', 'avr-web-consulting'); ?></option>
                        <option value="Full-Stack Web Design"><?php esc_html_e('WordPress / Full-Stack Web Development', 'avr-web-consulting'); ?></option>
                        <option value="Google &amp; Social Ads"><?php esc_html_e('Paid Advertising (Google &amp; Meta Ads)', 'avr-web-consulting'); ?></option>
                        <option value="General Consultation"><?php esc_html_e('General Consultation', 'avr-web-consulting'); ?></option>
                    </select>
                </div>

                <div>
                    <label for="message" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        <?php esc_html_e('Project Goals / Message', 'avr-web-consulting'); ?>
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows="4"
                        placeholder="<?php esc_attr_e('Tell us about your target keywords, competitors, or project timeline...', 'avr-web-consulting'); ?>"
                        class="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#22a7e0] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#22a7e0]/20 transition-all"
                    ></textarea>
                </div>

                <div id="avr-form-status" class="hidden text-sm font-semibold"></div>

                <button
                    type="submit"
                    id="avr-submit-btn"
                    class="btn-shimmer flex h-12 w-full sm:w-auto px-8 items-center justify-center rounded-full bg-[#22a7e0] font-bold text-white shadow-md shadow-cyan-500/20 hover:bg-[#1995cb] transition-all touch-target-min cursor-pointer"
                >
                    <?php esc_html_e('Submit Request', 'avr-web-consulting'); ?>
                </button>
            </form>
        </div>

        <!-- Office & Direct Contact Aside -->
        <div class="space-y-6">
            <div class="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                    <span class="text-xs font-bold uppercase tracking-wider text-[#22a7e0]">
                        <?php esc_html_e('Direct Channels', 'avr-web-consulting'); ?>
                    </span>
                    <h3 class="mt-1 text-xl font-bold text-slate-900">
                        <?php esc_html_e('Connect Directly', 'avr-web-consulting'); ?>
                    </h3>
                </div>

                <div class="space-y-4 text-sm text-slate-700">
                    <div class="flex items-start gap-3">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-[#22a7e0]">
                            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-xs font-bold uppercase tracking-wider text-slate-400"><?php esc_html_e('Telephone', 'avr-web-consulting'); ?></p>
                            <a href="tel:<?php echo esc_attr(avr_get_option('avr_phone', '+919182543249')); ?>" class="font-semibold text-slate-900 hover:text-[#22a7e0]">
                                <?php echo esc_html(avr_get_option('avr_phone', '+91-9182543249')); ?>
                            </a>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-[#22a7e0]">
                            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-xs font-bold uppercase tracking-wider text-slate-400"><?php esc_html_e('Email Address', 'avr-web-consulting'); ?></p>
                            <a href="mailto:<?php echo esc_attr(avr_get_option('avr_email', 'info@avrwebconsulting.com')); ?>" class="font-semibold text-slate-900 hover:text-[#22a7e0]">
                                <?php echo esc_html(avr_get_option('avr_email', 'info@avrwebconsulting.com')); ?>
                            </a>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.884 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.414z" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-xs font-bold uppercase tracking-wider text-slate-400"><?php esc_html_e('Instant WhatsApp', 'avr-web-consulting'); ?></p>
                            <a href="<?php echo esc_url(avr_get_option('avr_whatsapp', 'https://wa.me/919182543249')); ?>" target="_blank" rel="noopener noreferrer" class="font-semibold text-emerald-700 hover:underline">
                                <?php esc_html_e('Open WhatsApp Chat &rarr;', 'avr-web-consulting'); ?>
                            </a>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-[#22a7e0]">
                            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-xs font-bold uppercase tracking-wider text-slate-400"><?php esc_html_e('Office Location', 'avr-web-consulting'); ?></p>
                            <p class="font-medium text-slate-700 text-xs leading-relaxed mt-0.5">
                                <?php echo esc_html(avr_get_option('avr_address', 'Hero Showroom Lane, D No: 43-18-16, Venkatarajunagar, TSN Colony, Dondaparthy, Visakhapatnam – 530016, AP, India')); ?>
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-[#22a7e0]">
                            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-xs font-bold uppercase tracking-wider text-slate-400"><?php esc_html_e('Business Hours', 'avr-web-consulting'); ?></p>
                            <p class="font-medium text-slate-700 text-xs mt-0.5">
                                <?php echo esc_html(avr_get_option('avr_hours', 'Monday – Saturday: 9:00 AM – 7:00 PM IST')); ?>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>
