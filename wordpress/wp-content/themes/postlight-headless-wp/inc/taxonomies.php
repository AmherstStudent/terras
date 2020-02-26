<?php

/** 
 * Setting up series, and issue taxonomies
 * 
 */
function custom_taxonomies() {
    if ( ! taxonomy_exists( 'series' ) ) {
        register_taxonomy(
            'series',
            'post',
            array(
                'hierarchical' => true,
                'labels' => array(
                    'name' => _x( 'Series', 'taxonomy general name' ),
                    'singular_name' => _x( 'Series', 'taxonomy singular name' ),
                    'search_items' => __( 'Search Series' ),
                    'all_items' => __( 'All Series' ),
                    'parent_item' => __( 'Parent Series' ),
                    'parent_item_colon' => __( 'Parent Series:' ),
                    'edit_item' => __( 'Edit Series' ),
                    'view_item' => __( 'View Series' ),
                    'update_item' => __( 'Update Series' ),
                    'add_new_item' => __( 'Add New Series' ),
                    'new_item_name' => __( 'New Series Name' ),
                    'menu_name' => __( 'Series' ),
                ),
                'public' => true,
                'show_admin_column' => true,
                'show_in_nav_menus' => true,
                'query_var' => true,
                'rewrite' => true,
                'show_in_rest'  => true,
            )
        );
    }
}

// Add largo logo to login page
function largo_custom_login_logo() {
	echo '
		<style type="text/css">
			.login h1 a {
			  background-image: url(' . get_template_directory_uri() . '/img/largo-login-logo.png) !important;
			  background-size:  164px 169px;
			  height: 169px;
			  width: 164px;
			}
		</style>
	';
}
add_action('login_head', 'largo_custom_login_logo');

// Move dropdown to the publish metabox 
if ( ! Largo()->is_plugin_active( 'co-authors-plus' ) ) {
	function largo_move_author_to_publish_metabox() {
		global $post_ID;
		$post = get_post( $post_ID );
		printf( '<div id="author" class="misc-pub-section" style="padding: 8px 10px;">%s: ', __( 'Author', 'largo' ) );
		post_author_meta_box( $post );
		echo '</div>';
	}
	add_action( 'post_submitbox_misc_actions', 'largo_move_author_to_publish_metabox' );
}

// Add to REST API for mutliple authors
 
if ( function_exists('get_coauthors') ) {
    add_action( 'rest_api_init', 'custom_register_coauthors' );
    function custom_register_coauthors() {
        register_rest_field( 'post',
            'coauthors',
            array(
                'get_callback'    => 'custom_get_coauthors',
                'update_callback' => null,
                'schema'          => null,
            )
        );
    }
 
    function custom_get_coauthors( $object, $field_name, $request ) {
        $coauthors = get_coauthors($object['id']);
 
        $authors = array();
        foreach ($coauthors as $author) {
            $authors[] = array(
                'display_name' => $author->display_name,
                'user_nicename' => $author->user_nicename
            );
        };
 
        return $authors;
    }
}

// Taxoomies file 
<?php

/**
 * Check if the Series taxonomy is enabled
 *
 * Is the series equivalent of the WordPress function is_category();
 * We didn't call the function is_series() because it needs the largo_ prefix.
 *
 * @uses global $post
 * @uses largo_is_series_enabled
 * @since 0.4
 * @return bool Whether or not the Series taxonomy option is enabled in the Theme Options > Advanced
 */
function largo_is_series_enabled() {
	$series_enabled = of_get_option( 'series_enabled' );
	return !empty( $series_enabled );
}

/**
 * Check if Series landing pages are enabled
 *
 * @since 0.5.2
 * @return bool Whether or not the Series Landing Page  option is enabled in the Theme Options > Advanced
 */
function largo_is_series_landing_enabled() {
	$series_landing_enabled = of_get_option( 'custom_landing_enabled' );
	return !empty( $series_landing_enabled );
}

/**
 * Register the prominence and series custom taxonomies
 * Insert the default terms
 *
 * @uses  largo_is_series_enabled
 * @since 0.3
 */
function largo_custom_taxonomies() {

	/*
	 * Register the "Post Prominence" taxonomy, which is used to determine where posts display
	 */
	if ( !taxonomy_exists( 'prominence' ) ) {
		register_taxonomy(
			'prominence',
			'post',
			array(
				'hierarchical'  => true,
				'labels'        => array(
					'name'              => _x( 'Post Prominence', 'taxonomy general name' ),
					'singular_name'     => _x( 'Post Prominence', 'taxonomy singular name' ),
					'search_items'      => __( 'Search Post Prominences' ),
					'all_items'         => __( 'All Post Prominences' ),
					'parent_item'       => __( 'Parent Post Prominence' ),
					'parent_item_colon' => __( 'Parent Post Prominence:' ),
					'edit_item'         => __( 'Edit Post Prominence' ),
					'view_item'         => __( 'View Post Prominence' ),
					'update_item'       => __( 'Update Post Prominence' ),
					'add_new_item'      => __( 'Add New Post Prominence' ),
					'new_item_name'     => __( 'New Post Prominence Name' ),
					'menu_name'         => __( 'Post Prominence' ),
				),
				'query_var'     => true,
				'rewrite'       => true,
				'show_in_rest'  => true,
			)
		);
	}

	$termsDefinitions = array(
		array(
			'name' => __( 'Featured in Category', 'largo' ),
			'description' => __( 'This will allow you to designate a story to appear more prominently on category archive pages.', 'largo' ),
			'slug' => 'category-featured'
		),
		array(
			'name' => __( 'Homepage Featured', 'largo' ),
			'description' => __( 'Add this label to posts to display them in the featured area on the homepage.', 'largo' ),
			'slug' => 'homepage-featured'
		)
	);

	if (largo_is_series_enabled()) {
		$termsDefinitions[] = array(
			'name' => __( 'Featured in Series', 'largo' ),
			'description' => __( 'Select this option to allow this post to float to the top of any/all series landing pages sorting by Featured first.', 'largo' ),
			'slug' => 'series-featured'
		);
	}

	$largoProminenceTerms = apply_filters( 'largo_prominence_terms', $termsDefinitions );

	$changed = false;
	$terms = get_terms( 
		'prominence', 
		array(
			'hide_empty' => false,
			'fields' => 'all'
		)
	);
	$names = array_map( function( $arg ) { return $arg->name; }, $terms );

	$term_ids = array();
	foreach ( $largoProminenceTerms as $term ) {
		if ( !in_array( $term['name'], $names ) ) {
			wp_insert_term(
				$term['name'], 'prominence',
				array(
					'description' => $term['description'],
					'slug' => $term['slug']
				)
			);
			$changed = true;
		}
	}

	if ( $changed ) {
		delete_option('prominence_children');
	}

	do_action( 'largo_after_create_prominence_taxonomy', $largoProminenceTerms );

	/*
	 * Register the "Post Types" taxonomy, used for icons. This is not enabled by default in Largo.
	 *
	 * Replaces Largo_Term_Icons::register_post_type and unregister_post_types_taxonomy()
	 * @since 0.5.5
	 * @link https://github.com/INN/Largo/issues/1173
	 */
	if ( !taxonomy_exists('post-type') ) {
		$enabled = ( ! of_get_option( 'post_types_enabled' ) == 0 );
		register_taxonomy(
			'post-type',
			array( 'post' ),
			array(
				'label' => __( 'Post Types', 'largo' ),
				'labels' => array(
					'name' => __( 'Post Types', 'largo' ),
					'singular_name' => __( 'Post Type', 'largo' ),
					'all_items' => __( 'All Post Types', 'largo' ),
					'edit_item' => __( 'Edit Post Type', 'largo' ),
					'update_item' => __( 'Update Post Type', 'largo' ),
					'view_item' => __( 'View Post Type', 'largo' ),
					'add_new_item' => __( 'Add New Post Type', 'largo' ),
					'new_item_name' => __( 'New Post Type Name', 'largo' ),
					'search_items' => __( 'Search Post Type'),
				),
				'public' => $enabled,
				'show_admin_column' => $enabled,
				'show_in_nav_menus' => $enabled,
				'hierarchical' => true,
				'show_in_rest'  => true,
			)
		);
	}

	/**
	 * Register the "Series" taxonomy, used to group posts together by ongoing coverage. This is not enabled by default in Largo.
	 *
	 */
	if ( ! taxonomy_exists( 'series' ) ) {
		$series_enabled = largo_is_series_enabled();
		register_taxonomy(
			'series',
			'post',
			array(
				'hierarchical' => true,
				'labels' => array(
					'name' => _x( 'Series', 'taxonomy general name' ),
					'singular_name' => _x( 'Series', 'taxonomy singular name' ),
					'search_items' => __( 'Search Series' ),
					'all_items' => __( 'All Series' ),
					'parent_item' => __( 'Parent Series' ),
					'parent_item_colon' => __( 'Parent Series:' ),
					'edit_item' => __( 'Edit Series' ),
					'view_item' => __( 'View Series' ),
					'update_item' => __( 'Update Series' ),
					'add_new_item' => __( 'Add New Series' ),
					'new_item_name' => __( 'New Series Name' ),
					'menu_name' => __( 'Series' ),
				),
				'public' => $series_enabled,
				'show_admin_column' => $series_enabled,
				'show_in_nav_menus' => $series_enabled,
				'query_var' => true,
				'rewrite' => true,
				'show_in_rest'  => true,
			)
		);
	}
}
add_action( 'init', 'largo_custom_taxonomies' );


/**
 * Determines whether a post is in a series.
 * Expects to be called from within The Loop.
 * Is the series equivalent of the WordPress function is_category();
 * We didn't call the function is_series() because it needs the largo_ prefix.
 *
 * @uses global $post
 * @uses largo_is_series_enabled
 * @return bool
 * @since 0.3
 */
function largo_post_in_series( $post_id = NULL ) {
	if ( ! largo_is_series_enabled() ) return false;
	global $post;
	$the_id = ( $post_id ) ? $post_id : $post->ID ;
	$features = get_the_terms( $the_id, 'series' );
	return ( $features ) ? true : false;
}

/**
 * Outputs custom taxonomy terms attached to a post
 *
 * @return array of terms
 * @since 0.3
 */
function largo_custom_taxonomy_terms( $post_id ) {
	$taxonomies = apply_filters( 'largo_custom_taxonomies', array( 'series' ) );
	$post_terms = array();
	foreach ( $taxonomies as $tax ) {
		if ( taxonomy_exists( $tax ) ) {
			$terms = get_the_terms( $post_id, $tax );
			if ( $terms )
				$post_terms = array_merge( $post_terms, $terms );
		}
	}
	return $post_terms;
}

/**
 * Output format for the series custom taxonomy at the bottom of single posts
 *
 * @param $term array the term we want to output
 * @since 0.3
 */
if ( ! function_exists( 'largo_term_to_label' ) ) {
	function largo_term_to_label( $term ) {
	    return sprintf( '<div class="series-label"><h5><a href="%1$s">%2$s</a><a class="rss-link" href="%3$s"></a></h5><p>%4$s</p></div>',
	    	get_term_link( $term, $term->taxonomy ),
	    	esc_attr( $term->name ),
	    	get_term_feed_link( $term->term_id, $term->taxonomy ),
	    	esc_attr( strip_tags ( $term->description )
	    ));
	}
}

/**
 * Helper function for getting posts in proper landing-page order for a series
 *
 * @uses largo_is_series_enabled
 * @param integer series term id
 * @param integer number of posts to fetch, defaults to all
 * @since 0.4
 */
function largo_get_series_posts( $series_id, $number = -1 ) {

	// If series are not enabled, then there are no posts in a series.
	if ( !largo_is_series_enabled() ) return;

	// get the cf-tax-landing
	$args = array(
		'post_type' => 'cftl-tax-landing',
		'posts_per_page' => 1,
		'tax_query' => array( array(
			'taxonomy' => 'series',
			'field' => 'id',
			'terms' => $series_id
		)),
	);
	$landing = new WP_Query( $args );

	$series_args = array(
		'post_type' 		=> 'post',
		'tax_query' => array(
			array(
				'taxonomy' => 'series',
				'field' => 'id',
				'terms' => $series_id
			)
		),
		'order' 			=> 'DESC',
		'orderby' 		=> 'date',
		'posts_per_page' 	=> $number
	);

	if ( $landing->found_posts ) {
		$landing->next_post();
		$order = get_post_meta( $landing->post->ID, 'post_order', TRUE );
		switch ( $order ) {
			case 'ASC':
				$series_args['order'] = 'ASC';
				break;
			case 'custom':
				$series_args['orderby'] = 'series_custom';
				break;
			case 'featured, DESC':
			case 'featured, ASC':
				$series_args['orderby'] = $order;
				break;
		}
	}

	$series_posts = new WP_Query( $series_args );

	if ( $series_posts->found_posts ) return $series_posts;

	return false;

}

/**
* Filter: post_type_link
*
* Filter post permalinks for the Landing Page custom post type.
* Replace direct post link with the link for the associated
* Series taxonomy term, using the most recently created term
* if multiple are set.
*
* This filter overrides the wp-taxonomy-landing filter,
* which attempts to use the link for ANY term from ANY taxonomy.
* Largo really only cares about the Series taxonomy.
*
* @since 0.5
* @return filtered $post_link, replacing a Landing Page link with its Series link as needed
*/
function largo_series_landing_link( $post_link, $post ) {
	// Get configuration setting for Custom Landing Pages
	$opt_custom_landing_enabled = of_get_option( 'custom_landing_enabled', 0 );
	$custom_landing_enabled = !empty( $opt_custom_landing_enabled );

	// Only process Landing Page post type when Series Landing Pages are enabled
	if ( "cftl-tax-landing" == $post->post_type && $custom_landing_enabled ) {
		// Get all series taxonomy terms for this landing page
		$series_terms = wp_get_object_terms(
			$post->ID,
			'series',
			array(
				'orderby' => 'term_id',
				'order' => 'DESC',
				'fields' => 'slugs'
			)
		);
		// Only proceed if we successfully found at least 1 series term
		if ( ! is_wp_error( $series_terms ) && ! empty( $series_terms ) ) {
			// Get the link for the first series term
			// (ordered by the highest ID in the case of multiple terms)
			$term_link = get_term_link( $series_terms[0], 'series' );
			// Only proceed if we successfully found the term link
			if ( ! is_wp_error( $term_link ) && strlen( trim( $term_link ) ) ) {
				$post_link = esc_url( $term_link );
			}
		}
	}
	// Return the filtered link
	return $post_link;
}
// wp-taxonomy-landing library filters at priority 10.
// We must filter AFTER that.
add_filter( 'post_type_link', 'largo_series_landing_link', 22, 2 );

/**
 * Helper to get the Series Landing Page for a given series.
 *
 * @param Object|id|string $series
 * @return array An array of all WP_Post objects answering the description of this series. May be 0, 1 or conceivably many.
 */
function largo_get_series_landing_page_by_series( $series ) {
	if ( ! is_object( $series ) ) {
		if ( is_int( $series ) ) {
			$series = get_term( $series, $taxonomy );
		} else {
			$series = get_term_by( 'slug', $series, $taxonomy );
		}
	}

	// get the cftl-tax-landing
	$args = array(
		'post_type' => 'cftl-tax-landing',
		'posts_per_page' => 1,
		'tax_query' => array( array(
			'taxonomy' => 'series',
			'field' => 'id',
			'terms' => $series->term_id
		)),
	);

	$landing = new WP_Query( $args );

	return $landing->posts;
}

/// ReLATED contnet
<?php

/**
 * Show related tags and subcategories for each main category
 * Used on category.php to display a list of related terms
 *
 * @since 0.5.5
 * @return String HTML '' if there are no related topics or a UL if there are related topics
 */

function largo_get_related_topics_for_category( $obj ) {
	$MAX_RELATED_TOPICS = 5;

	if ( !isset( $obj->post_type ) ) {
		$obj->post_type = 0;
	}

	if ( $obj->post_type ) {
		if ( $obj->post_type == 'nav_menu_item' ) {
			$cat_id = $obj->object_id;
		}
	} else {
		$cat_id = $obj->cat_ID;
	}

	// spit out the subcategories
	$outarray = array();
	$cats = _subcategories_for_category( $cat_id );

	foreach ( $cats as $c ) {
		$outarray[] = sprintf( '<li><a href="%s">%s</a></li>',
			get_category_link( $c->term_id ), $c->name
		);
	}

	if ( count( $cats ) < $MAX_RELATED_TOPICS ) {
		$tags = _tags_associated_with_category( $cat_id,
			$MAX_RELATED_TOPICS - count( $cats ) );

		foreach ( $tags as $t ) {
			$outarray[] = sprintf( '<li><a href="%s">%s</a></li>',
				get_tag_link( $t->term_id ), $t->name
			);
		}
	}

	$out = '';

	// Generate the <ul>
	if ( count( $outarray ) > 0 ) {
		$out = "<ul>";
		$title_ul = apply_filters( 'largo_related_topics_title_ul', __( 'Related Topics:' , 'largo' ) );
		$out .= '<li><strong>' . $title_ul . '</strong></li>';
		$out .= join( '', $outarray );
		$out .= "</ul>";
	}

	return $out;
}

function _tags_associated_with_category( $cat_id, $max = 5 ) {
    $query = new WP_Query( array(
        'posts_per_page'         => 100,
        'cat'                    => $cat_id,
        'update_post_meta_cache' => false,
        'no_found_rows'          => true,
    ) );

    // Get a list of the tags used in posts in this category.
    $tags = array();
    $tag_objs = array();

    foreach ( $query->posts as $post ) {
        $ptags = get_the_tags( $post->ID );
        if ( $ptags ) {
            foreach ( $ptags as $tag ) {
                if ( isset( $tags[$tag->term_id] ) ) {
                	$tags[ $tag->term_id ]++;
                } else {
                	$tags[ $tag->term_id ] = 0;
                }
                $tag_objs[ $tag->term_id ] = $tag;
            }
        }
    }

    // Sort the most popular and get the $max results, or all results
    // if max is -1
    arsort( $tags, SORT_NUMERIC );
    if ( $max == -1 ) {
        $tag_keys = array_keys( $tags );
    }
    else {
		$temporary_array_keys = array_keys( $tags );
		$tag_keys = array_splice( $temporary_array_keys, 0, $max );
    }

    // Create an array of the selected tag objects
    $return_tags = array();
    foreach ( $tag_keys as $tk ) {
        array_push( $return_tags, $tag_objs[ $tk ] );
    }

    return $return_tags;
}

function _subcategories_for_category( $cat_id ) {
    // XXX: could also use get_term_children().  not sure which is better.
    $cats = get_categories( array(
        'child_of' => $cat_id,
    ) );

    return $cats;
}

/**
 * Provides topics (categories and tags) related to the current post in The
 * Loop.
 *
 * @param int $max The maximum number of topics to return.
 * @return array of term objects.
 * @since 1.0
 */
function largo_get_post_related_topics( $max = 5 ) {
    $cats = get_the_category();
    $tags = get_the_tags();

    $topics = array();
    if ( $cats ) {
        foreach ( $cats as $cat ) {
            if ( $cat->name == 'Uncategorized' ) {
                continue;
            }
            $posts = largo_get_recent_posts_for_term( $cat, 3, 2 );
            if ( $posts ) {
                $topics[] = $cat;
            }
        }
    }

    if ( $tags ) {
        foreach ( $tags as $tag ) {
            $posts = largo_get_recent_posts_for_term( $tag, 3, 2 );
            if ( $posts ) {
                $topics[] = $tag;
            }
        }
    }

    $topics = apply_filters( 'largo_get_post_related_topics', $topics, $max );

    return array_slice( $topics, 0, $max );
}

/**
 * Provides the recent posts for a term object (category, post_tag, etc).
 * @uses global $post
 * @param object    $term   A term object.
 * @param int       $max    Maximum number of posts to return.
 * @param int       $min    Minimum number of posts. If not met, returns false.
 * @param Array     $post__not_in Array of integer post IDs to be excluded from the query
 * @return array|false of post objects.
 * @since 1.0
 */
function largo_get_recent_posts_for_term( $term, $max = 5, $min = 1, $post__not_in = array() ) {
    global $post;

    $query_args = array(
        'posts_per_page' 			=> $max,
        'orderby' 				=> 'date',
        'order' 				=> 'DESC',
        'ignore_sticky_posts' 	=> 1,
        'post__not_in' => $post__not_in,
    );

    // Exclude the current post if we're inside The Loop
    // On the homepage, this excludes the most-recently-published post
    if ( $post->ID ) {
        $query_args[ 'post__not_in' ] = array_merge( array( $post->ID ), $query_args[ 'post__not_in' ] );
    }

    if ( $term->taxonomy == 'post_tag' ) {
        // have to use tag__in because tag_id doesn't seem to work.
        $query_args[ 'tag__in' ] = array( $term->term_id );
    }
    elseif ( $term->taxonomy == 'category' ) {
        $query_args[ 'cat' ] = $term->term_id;
    }
    elseif ( $term->taxonomy == 'series' ) {
        $query_args[ 'series' ] = $term->slug;
    }

		//if this is a fake term, just grab post ids
		if ( $term->term_id == -90 && $post ) {
			$post_ids = preg_split( '#\s*,\s*#', get_post_meta( $post->ID, 'largo_custom_related_posts', true ) );
			$query_args[ 'post__in' ] = $post_ids;
			$query_args[ 'orderby' ] = 'post__in';
			$query_args['posts_per_page'] = count( $post_ids );
		}

    $query_args = apply_filters( 'largo_get_recent_posts_for_term_query_args', $query_args, $term, $max, $min, $post );

    $query = new WP_Query( $query_args );

    if ( count( $query->posts ) < $min ) {
        return false;
    }

    return $query->posts;
}

/**
 * Determine if a post has either categories or tags
 *
 * @return bool true is a post has categories or tags
 * @since 1.0
 */
function largo_has_categories_or_tags() {
	if ( get_the_tags() ) {
		return true;
	}

	$cats = get_the_category();
	if ( $cats ) {
		foreach ( $cats as $cat ) {
			if ( $cat->name != 'Uncategorized' ) {
				return true;
			}
		}
	}

	return false;
}

/**
 * Return (or echo) a list of categories and tags
 *
 * @param $max int number of categories and tags to return
 * @param $echo bool echo the output or return it (default: echo)
 * @param $link bool return the tags and category links or just the terms themselves
 * @param $use_icon bool include the tag icon or not (used on single.php)
 * @param $separator string to use as a separator between list items
 * @param $item_wrapper string html tag to use as a wrapper for elements in the output
 * @param $exclude array of term ids to exclude
 * @return array of category and tag links
 * @since 1.0
 * @todo consider prioritizing tags by popularity?
 */
if ( ! function_exists( 'largo_categories_and_tags' ) ) {
	function largo_categories_and_tags( $max = 5, $echo = true, $link = true, $use_icon = false, $separator = ', ', $item_wrapper = 'span', $exclude = array(), $rss = false ) {
		$cats = get_the_category();
		$tags = get_the_tags();
		$icon = '';
		$output = array();

		// if $use_icon is true, include the markup for the tag icon
		if ( $use_icon === true )
			$icon = '<i class="icon-white icon-tag"></i>';
		elseif ( $use_icon )
			$icon = '<i class="icon-white icon-' . esc_attr( $use_icon ) . '"></i>';

		if ( $cats ) {
			foreach ( $cats as $cat ) {

				// skip uncategorized and any others in the array of terms to exclude
				if ( $cat->name == 'Uncategorized' || in_array( $cat->term_id, $exclude ) )
					continue;

				if ( $link ) {
					$output[] = sprintf(
						__( '<%1$s class="post-category-link %6$s"><a href="%2$s" title="Read %3$s in the %4$s category">%5$s%4$s</a></%1$s>', 'largo' ),
						$item_wrapper,
						( $rss ? get_category_feed_link( $cat->term_id ) : get_category_link( $cat->term_id ) ),
						of_get_option( 'posts_term_plural' ),
						$cat->name,
						$icon,
						sprintf(
							'%1$s-%2$s',
							$cat->taxonomy,
							$cat->slug
						)
					);
				} else {
					$output[] = $cat->name;
				}
			}
		}

		if ( $tags ) {
			foreach ( $tags as $tag ) {

				if ( in_array( $tag->term_id, $exclude ) )
					continue;

				if ( $link ) {
					$output[] = sprintf(
						__( '<%1$s class="post-tag-link %6$s"><a href="%2$s" title="Read %3$s tagged with: %4$s">%5$s%4$s</a></%1$s>', 'largo' ),
						$item_wrapper,
						( $rss ?  get_tag_feed_link( $tag->term_id ) : get_tag_link( $tag->term_id ) ),
						of_get_option( 'posts_term_plural' ),
						$tag->name,
						$icon,
						sprintf(
							'%1$s-%2$s',
							$tag->taxonomy,
							$tag->slug
						)
					);
				} else {
					$output[] = $tag->name;
				}
			}
		}

		if ( $echo )
			echo implode( $separator, array_slice( $output, 0, $max ) );

		return $output;
	}
}

/**
 * Returns (and optionally echoes) the 'top term' for a post, falling back to a category if one wasn't specified
 *
 * @param array|string $options Settings for post id, echo, link, use icon, wrapper and exclude
 */
function largo_top_term( $options = array() ) {

	global $wpdb;

	$defaults = array(
		'post' => get_the_ID(),
		'echo' => TRUE,
		'link' => TRUE,
		'use_icon' => FALSE,
		'wrapper' => 'span', // an HTML tag ID
		'exclude' => array(),	//only for compatibility with largo_categories_and_tags
	);

	$args = wp_parse_args( $options, $defaults );

	/*
	 * Try to get a term ID
	 * Or continue using 'none' if that is the case
	 */
	$term_id = get_post_meta( $args['post'], 'top_term', TRUE );

	// Try to get the taxonomy for the term ID, but if it's 'none' for the "None" option, don't bother doing this.
	if ( !empty( $term_id ) && $term_id !== 'none' ) {
		//get the taxonomy slug
		$taxonomy = $wpdb->get_var( $wpdb->prepare( "SELECT taxonomy FROM $wpdb->term_taxonomy WHERE term_id = %d LIMIT 1", $term_id) );
	}

	// if no top_term specified, or if the top term is not in a taxonomy and the top term is not 'none',
	if ( empty( $term_id ) || ( empty( $taxonomy ) && $term_id !== 'none' ) ) {
		// Get the categories the post is in and try to use the first one as a term id
		$term_id = get_the_category( $args['post'] );
		if ( is_array( $term_id ) &&  count( $term_id ) ) {
			$term_id = $term_id[0]->term_id;
		}

		// The post isn't in a category? Try post-types if that's enabled.
		if ( empty( $term_id ) && taxonomy_exists( 'post-type' ) ) {
			$term_id = get_the_terms( $args['post'], 'post-type' );
			if ( is_array( $term_id ) &&  count( $term_id ) ) {
				$term_id = $term_id[0]->term_id;
			}
		}
	}

	/*
	 * Using the term ID, get the term and then generate some text
	 */
	if ( $term_id && $term_id !== 'none' && !empty( $taxonomy ) ) {
		$icon = ( $args['use_icon'] ) ?  '<i class="icon-white icon-tag"></i>' : '' ;	//this will probably change to a callback largo_term_icon() someday

		$link = ( $args['link'] ) ? array( '<a href="%2$s" title="Read %3$s in the %4$s category">','</a>' ) : array( '', '' ) ;

		// get the term object
		$term = get_term( $term_id, $taxonomy );

		if ( is_wp_error( $term ) ) return;

		$output = sprintf(
			'<%1$s class="post-category-link _top_term_output %6$s">'.$link[0].'%5$s%4$s'.$link[1].'</%1$s>',
			$args['wrapper'],
			get_term_link( $term ),
			of_get_option( 'posts_term_plural' ),
			$term->name,
			$icon,
			sprintf(
				'%1$s-%2$s',
				$term->taxonomy,
				$term->slug
			)
		);
	}

	/*
	 * No output?
	 * generate a link to the post's category or tags
	 */
	if (
		empty( $output )
		&& 'none' !== $term_id
		&& (int) $args['post'] === get_the_ID()
	) {

		// Can't pass a post ID to largo_categories_and_tags, so this may return the wrong links.
		$lcat_output = largo_categories_and_tags( 1, false, $args['link'], $args['use_icon'], '', $args['wrapper'], $args['exclude'] );

		if ( is_string( $lcat_output ) ) {
			$output = $lcat_output;
		} elseif ( is_array( $lcat_output ) ) {
			if ( empty( $lcat_output ) ) {
				$output = '';
			} else {
				foreach ( $lcat_output as $o ) {
					if ( empty( $o ) ) {
						continue;
					}
					if ( is_string( $o ) ) {
						$output = $o;
						break;
					}
				}
			}
		} else {
			$output = '';
		}
	}

	/*
	 * for https://github.com/INN/Largo/issues/1082, support not outputting anything
	 * @since 0.5.5
	 */
	if ( $term_id == 'none' ) {
		$output = '';
	}

	if ( $args['echo'] ) echo $output;
	return $output;
}

/**
 * Add the post's top term to the post's post_class array
 *
 * @link https://github.com/INN/Largo/issues/1119
 * @since 0.5.5
 * @filter post_class
 * @param array $classes An array of classes on the post
 * @return array
 */
function largo_post_class_top_term( $classes ) {
	global $post;
	if ( is_a( $post, 'WP_Post' ) ) {
		$top_term = get_post_meta( $post->ID, 'top_term', TRUE );
		$term = get_term_by( 'id', $top_term, 'post_tag' );

		// Don't output the class .top-term-- if there isn't a top term saved
		if ( !empty( $term ) ) {
			$classes[] = 'top-term-' . $term->taxonomy . '-' . $term->slug;
		}
	}

	return $classes;
}
add_filter( 'post_class', 'largo_post_class_top_term' );

/**
 *
 */
function largo_filter_get_post_related_topics( $topics, $max ) {
    $post = get_post();
    if ( $post ) {
        $posts = preg_split( '#\s*,\s*#', get_post_meta( $post->ID, 'largo_custom_related_posts', true ) );
        if ( !empty( $posts[0] ) ) {
            // Add a fake term with the ID of -90
            $top_posts = new stdClass();
            $top_posts->term_id = -90;
            $top_posts->name = __( 'Top Posts', 'largo' );
            array_unshift( $topics, $top_posts );
        }
    }

    return $topics;
}
add_filter( 'largo_get_post_related_topics', 'largo_filter_get_post_related_topics', 10, 2 );


/**
 *
 */
function largo_filter_get_recent_posts_for_term_query_args( $query_args, $term, $max, $min, $post ) {

    if ( $term->term_id == -90 ) {
        $posts = preg_split( '#\s*,\s*#', get_post_meta( $post->ID, 'largo_custom_related_posts', true ) );
        $query_args = array(
            'posts_per_page'        => $max,
            'orderby'               => 'post__in',
            'order'                 => 'ASC',
            'ignore_sticky_posts'   => 1,
            'post__in'              => $posts,
        );
    }

    return $query_args;
}
add_filter( 'largo_get_recent_posts_for_term_query_args', 'largo_filter_get_recent_posts_for_term_query_args', 10, 5 );


/**
 * The Largo Related class.
 * Used to dig through posts to find IDs related to the current post
 */
class Largo_Related {

	var $number;
	var $post_id;
	var $post_ids = array();
	var $post;

	/**
	 * Constructor.
	 * Sets up essential parameters for retrieving related posts
	 *
	 * @access public
	 *
	 * @param integer $number optional The number of post IDs to fetch. Defaults to 1
	 * @param integer $post_id optional The ID of the post to get related posts about. If not provided, defaults to global $post
	 * @return null
	 */
	function __construct( $number = 1, $post_id = '' ) {

		if ( ! empty( $number ) ) {
			$this->number = $number;
		}

		if ( ! empty( $post_id ) ) {
			$this->post_id = $post_id;
		} else {
			$this->post_id = get_the_ID();
		}

		$this->post = get_post( $this->post_id );
	}

	/**
	 * Array sorter for organizing terms by # of posts they have
	 *
	 * @param object $a First WP term object
	 * @param object $b Second WP term object
	 * @return integer
	 */
	function popularity_sort( $a, $b ) {
		if ( $a->count == $b->count ) return 0;
		return ( $a->count < $b->count ) ? -1 : 1;
	}

	/**
	 * Performs cleanup of IDs list prior to returning it. Also applies a filter.
	 *
	 * @access protected
	 *
	 * @return array The final array of related post IDs
	 */
	protected function cleanup_ids() {
		//make things unique just to be safe
		$ids = array_unique( $this->post_ids );

		//truncate to desired length
		$ids = array_slice( $ids, 0, $this->number );

		//run filters
		return apply_filters( 'largo_related_posts', $ids );
	}

	/**
	 * Fetches posts contained within the series(es) this post resides in. Feeds them into $this->post_ids array
	 *
	 * @access protected
	 * @see largo_series_custom_order
	 */
	protected function get_series_posts() {

		//try to get posts by series, if this post is in a series
		$series = get_the_terms( $this->post_id, 'series' );

		if ( is_array( $series ) ) {

			//loop thru all the series this post belongs to
			foreach ( $series as $term ) {
				//start to build our query of posts in this series
				// get the posts in this series, ordered by rank or (if missing?) date
				$args = array(
					'post_type' => 'post',
					'posts_per_page' => $this->number,
					'taxonomy' => 'series',
					'term' => $term->slug,
					'orderby' => 'date',
					'order' => 'ASC',
					'ignore_sticky_posts' => 1,
					'post__not_in' => array( $this->post_id ),
					'date_query' => array(
						'after' => $this->post->post_date,
					),
				);

				// see if there's a post that has the sort order info for this series
				$cftl_query = new WP_Query( array(
					'post_type' => 'cftl-tax-landing',
					'tax_query' => array (
						'series' => $term->slug,
					),
					'posts_per_page' => 1
				));

				if ( $cftl_query->have_posts() ) {
					$cftl_query->next_post();
					$has_order = get_post_meta( $cftl_query->post->ID, 'post_order', TRUE );
					if ( !empty( $has_order ) ) {
						switch ( $has_order ) {
							case 'ASC':
								$args['order'] = 'ASC';
								break;
							// 'series_custom' and 'featured' are custom ones, caught with largo_series_custom_order in inc/wp-taxonomy-landing/functions/cftl-series-order.php
							case 'custom':
								$args['orderby'] = 'series_custom';
								break;
							case 'featured, DESC':
							case 'featured, ASC':
								$args['orderby'] = $has_order;
								break;
						}
					}
				}

				// build the query with the sort defined
				$series_query = new WP_Query( $args );

				// If not enough posts were added from after this post, look before this post
				if ( count( $series_query->posts ) < $this->number ) {

					// Store the returned posts from the after query
					$this->add_from_query( $series_query );

					// Change it to look backwards
					$args['date_query'] = array(
						'before' => $this->post->post_date,
					);

					// rerun the query
					$series_query = new WP_Query( $args );
				}

				// Store the posts
				if ( $series_query->have_posts() ) {
					$this->add_from_query( $series_query );
					if ( $this->have_enough_posts() ) {
						break;
					}
				}
			}
		}
	}

	/**
	 * Fetches posts contained within the categories and tags this post has. Feeds them into $this->post_ids array
	 *
	 * @access protected
	 */
	protected function get_term_posts() {

		//we've gone back and forth through all the post's series, now let's try traditional taxonomies	
		$taxonomies = array();
		foreach ( array( 'category', 'post_tag' ) as $_taxonomy ) {
			$_terms = get_object_term_cache( $this->post_id, $_taxonomy );

			if ( false === $_terms ) {
				$_terms = wp_get_object_terms( $this->post_id, $_taxonomy );
				wp_cache_add( $this->post_id, $taxonomies, $_taxonomy . '_relationships' );
			}
			
			if ( is_array( $_terms ) ) {
				$taxonomies = array_merge( $taxonomies, $_terms );
			}
		}

		//loop thru taxonomies, much like series, and get posts
		if ( is_array( $taxonomies ) ) {
			//sort by popularity
			usort( $taxonomies, array( __CLASS__, 'popularity_sort' ) );

			foreach ( $taxonomies as $term ) {
				$args = array(
					'post_type' => 'post',
					'posts_per_page' => $this->number,
					'orderby' => 'date',
					'order' => 'DESC',
					'ignore_sticky_posts' => 1,
					'post__not_in' => array( $this->post_id ),
					'date_query' => array(
						'after' => $this->post->post_date,
					),
					'tax_query' => array(
						array(
							'taxonomy' => $term->taxonomy,
							'terms' => $term->slug,
							'field' => 'slug',
						)
					)
				);

				// run the query
				$term_query = new WP_Query( $args );

				// If not enough posts were added from after this post, look before this post
				if ( count( $term_query->posts ) < $this->number ) {

					// Store the returned posts from the after query
					$this->add_from_query( $term_query );

					// Change it to look backwards
					$args['date_query'] = array(
						'before' => $this->post->post_date,
					);

					// rerun the query
					$term_query = new WP_Query( $args );
				}

				// Store the returned posts
				if ( $term_query->have_posts() ) {
					$this->add_from_query( $term_query );
					if ( $this->have_enough_posts() ) {
						break;
					}
				}
			} // foreach
		}
	}

	/**
	 * Fetches recent posts. Used as a fallback when other methods have failed to fill post_ids to requested length
	 *
	 * @access protected
	 */
	protected function get_recent_posts() {

		$args = array(
			'post_type' => 'post',
			'posts_per_page' => $this->number,
			'post__not_in' => array( $this->post_id ),
		);

		$posts_query = new WP_Query( $args );

		if ( $posts_query->have_posts() ) {
			$this->add_from_query( $posts_query );
		}
	}

	/**
	 * Loops through series, terms and recent to fill array of related post IDs. Primary means of using this class.
	 *
	 * @access public
	 *
	 * @return array An array of post ids related to the given post
	 */
	public function ids() {

		//see if this post has manually set related posts
		$post_ids = get_post_meta( $this->post_id, 'largo_custom_related_posts', true );
		if ( ! empty( $post_ids ) ) {
			$this->post_ids = explode( ",", str_replace( ' ', '', $post_ids ) );
			if ( $this->have_enough_posts() ) {
				return $this->cleanup_ids();
			}
		}

		$this->get_series_posts();
		//are we done yet?
		if ( $this->have_enough_posts() ) return $this->cleanup_ids();

		$this->get_term_posts();
		//are we done yet?
		if ( $this->have_enough_posts() ) return $this->cleanup_ids();

		$this->get_recent_posts();
		return $this->cleanup_ids();
	}

	/**
	 * Takes a WP_Query result and adds the IDs to $this->post_ids
	 *
	 * @access protected
	 *
	 * @param object a WP_Query object
	 * @param boolean optional whether the query post order has been reversed yet. If not, this will loop through in both directions.
	 */
	protected function add_from_query( $q, $reversed = FALSE ) {
		// don't pick up anything until we're past our own post
		$found_ours = FALSE;

		while ( $q->have_posts() ) {
			$q->the_post();
			// add this post if it's new
			if (
				! in_array( $q->post->ID, $this->post_ids ) 	// only add it if it wasn't already there
				&& $q->post->ID != $this->post_id // do not add the id of the current post, because we do not want to ever return that
			) {
				$this->post_ids[] = (int) trim( $q->post->ID );
				// stop if we have enough
				if ( $this->have_enough_posts() ) return;
			}
		}
	}

	/**
	 * Counts to see if enough posts have been found
	 */
	protected function have_enough_posts() {
		if ( count( $this->post_ids ) >= $this->number )
			return true;

		return false;
	}
}

// AD TEMPALTE
<?php
/**
 * Adds ability to select a custom post template for single posts
 * Derived from Single Post Template 1.3 plugin by Nathan Rice (http://www.nathanrice.net/plugins)
 *
 * @since 0.3
 */
//	This function scans the template files of the active theme,
//	and returns an array of [Template Name => {file}.php]
if ( ! function_exists( 'get_post_templates' ) ) {
	function get_post_templates() {
		$theme = wp_get_theme();
		$templates = $theme->get_files( 'php', 1, true );
		$post_templates = array();
		$base = array( trailingslashit( get_template_directory() ), trailingslashit( get_stylesheet_directory() ) );
		foreach ( (array) $templates as $template ) {
			$template = WP_CONTENT_DIR . str_replace( WP_CONTENT_DIR, '', $template );
			$basename = str_replace( $base, '', $template );
			// don't allow template files in subdirectories
			// if (false !== strpos($basename, '/'))
			//	continue;
			$template_data = implode( '', file( $template ) );
			$name = '';
			if ( preg_match( '|Single Post Template:(.*)$|mi', $template_data, $name ) ) {
				$name = _cleanup_header_comment( $name[1] );
			}
			if ( ! empty( $name ) ) {
				if( basename( $template ) != basename(__FILE__) ) {
					$post_templates[trim($name)] = $basename;
				}
			}
		}
		return $post_templates;
	}
}
//	build the dropdown items
if( ! function_exists( 'post_templates_dropdown' ) ) {
	function post_templates_dropdown() {
		global $post;
		$post_templates = get_post_templates();
		foreach ( $post_templates as $template_name => $template_file ) { //loop through templates, make them options
			if ( $template_file == get_post_meta( $post->ID, '_wp_post_template', true ) ) {
				$selected = ' selected="selected"';
			} else {
				$selected = '';
			}
			$opt = '<option value="' . $template_file . '"' . $selected . '>' . $template_name . '</option>';
			echo $opt;
		}
	}
}

// Add metadata for themes, - https://github.com/Quartz/wp-graphql-meta

register_meta( 'post', 'custom-key', array(
    'type' => 'string', // number, boolean, integer or a type from WPGraphQL\Types
    'description' => 'My custom field',
    'single' => true,   // Whether to make this require a list or not.
    'show_in_rest' => true, // Required to make this field public.
) );

// Setup