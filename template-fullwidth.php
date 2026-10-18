<?php
/**
 * Template Name: Full Width Page
 *
 * @package AVR_Web_Consulting
 */

get_header(); ?>

<main id="main-content" class="w-full">
    <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <?php the_content(); ?>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
