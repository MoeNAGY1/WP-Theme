<?php
/* Template Name: Full-Width Template */
get_header();
?>

<!--Section: Contact v.2-->
    <div class="container">
        

			
			<section class="main-content">

    <?php while (have_posts() ) : the_post(); ?>
    <?php the_content(); ?>
    <?php endwhile; // end of loop ?>
  
</section>
        </div>


<!--Section: Contact v.2-->


<?php get_footer(); ?>