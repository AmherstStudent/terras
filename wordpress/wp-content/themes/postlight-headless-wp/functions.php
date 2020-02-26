<?php
/**
 * Theme for the Postlight Headless WordPress Starter Kit.
 *
 * Read more about this project at:
 * https://postlight.com/trackchanges/introducing-postlights-wordpress-react-starter-kit
 *
 * @package  Postlight_Headless_WP
 */

// Frontend origin.


add_theme_support( 'post-thumbnails' );

/**
 * Register support for Gutenberg wide images in your theme
 */
function mytheme_setup() {
  add_theme_support( 'align-wide' );
}
add_action( 'after_setup_theme', 'mytheme_setup' );

// Add largo logo to login page
function custom_login_logo() {
	echo '
		<style type="text/css">
			.login h1 a {
			  background-image: url("https://amherststudent.com/static/logo.svg") !important;
			  background-size:  164px 169px;
			  height: 169px;
			  width: 164px;
			}
		</style>
	';
}
add_action('login_head', 'custom_login_logo');

require_once 'inc/frontend-origin.php';

// ACF commands.
require_once 'inc/class-acf-commands.php';

// Logging functions.
require_once 'inc/log.php';

// CORS handling.
require_once 'inc/cors.php';

// Admin modifications.
require_once 'inc/admin.php';

// Add Menus.
require_once 'inc/menus.php';

// Add Headless Settings area.
require_once 'inc/acf-options.php';

// Add GraphQL resolvers.
require_once 'inc/graphql/resolvers.php';



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
                'show_in_graphql' => true,
                'graphql_single_name' => 'Series',
                'graphql_plural_name' => 'SeriesN',
            )
        );
    }
    
	if ( ! taxonomy_exists( 'issue' ) ) {
        register_taxonomy(
            'issue',
            'post',
            array(
                'hierarchical' => true,
                'labels' => array(
                    'name' => _x( 'Issue', 'taxonomy general name' ),
                    'singular_name' => _x( 'Issue', 'taxonomy singular name' ),
                    'search_items' => __( 'Search Issues' ),
                    'all_items' => __( 'All Issues' ),
                    'parent_item' => __( 'Parent Issue' ),
                    'parent_item_colon' => __( 'Parent Issue:' ),
                    'edit_item' => __( 'Edit Issue' ),
                    'view_item' => __( 'View Issue' ),
                    'update_item' => __( 'Update Issue' ),
                    'add_new_item' => __( 'Add New Issue' ),
                    'new_item_name' => __( 'New Issue Name' ),
                    'menu_name' => __( 'Issues' ),
                ),
                'show_in_graphql' => true,
                'graphql_single_name' => 'Issue',
                'graphql_plural_name' => 'Issues',
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
add_action('init', 'custom_taxonomies');

/** 
 * Adding Issuu Field for Issue Taxonomy
 * @return void
 */

 function issue_add_issuu($term) {
    ?>
     <div class="form-field">
        <label for="issuu">Add issuu link</label>
        <input type="text" name="issuu" value="">
    </div>
    <?php
 }
 add_action('issue_add_form_fields', 'issue_add_issuu', 10, 2);

 /**
  * Edit Issuu field for issue taxonomy
  * @return void
  */

 function issue_edit_issuu( $term ) {
    // put the term ID into a variable
    $t_id = $term->term_id;

    $term_issuu = get_term_meta( $t_id, ‘issuu’, true );
    ?>

    <tr class=”form-field”>
    <th><label for="issuu">Add issuu link</label></th>
    <td>

    <input type=”text” name="issuu" id="issuu" value=”<?php echo esc_attr( $term_issuu ) ? esc_attr( $term_issuu ) : ”; ?>”>
    </td>
    </tr>
    <?php
 }

add_action( 'issue_edit_form_fields', 'issue_edit_issuu', 10 );

/**
* Saving Issue link of issue
*/

function issue_save_issuu($term_id){
    if ( isset( $_POST[‘issuu’] ) ) {
        $term_issuu = $_POST[‘issuu’];
        if( $term_image ) {
            update_term_meta( $term_id, ‘issuu’, $term_issuu );
        }
    }
}

add_action( 'edited_issue', 'issue_save_issuu' );
add_action( 'create_issue', 'issue_save_issuu' );

add_action( 'graphql_register_types', function() {
  register_graphql_field( 'Issue', 'issuu', [
     'type' => 'String',
     'description' => __( 'The Issuu link', 'wp-graphql' ),
     'resolve' => function( $issue ) {
       $issuu = get_post_meta( $issue->term_id, 'issuu', true );
       return ! empty( $issuu ) ? $issuu : ' ';
     }
  ] );
} );

/**
   * Add ability to add class year, and job title/ byline. 
   */
  
  function more_profile_options($user) {
    ?>
    <h3>More profile information</h3>
      <tr>
        <th><label for="job_title">Title, or role</label></th>
        <td>
          <input 
          type="text" 
          name="job_title" 
          id="job_title" 
          value="<?php echo esc_attr( get_the_author_meta( 'job_title', $user->ID ) ); ?>" class="regular-text" 
          />
          <br />
          <span class="description">Please enter your job title</span>
        </td>
      </tr>
    <?php
  }
  add_action( 'show_user_profile', 'more_profile_options' );
  add_action( 'edit_user_profile', 'more_profile_options' );

  function save_more_profile_options($user_id) {
    update_user_meta($user_id, 'job_title', $_POST['job_title']);
  }

  add_action('personal_options_update', 'save_more_profile_options');
  add_action('edit_user_profile_update', 'save_more_profile_options');
  

 /**
  * Add CoAuthorPlus to Graphql
  *@return void
  */
  add_action( 'graphql_register_types', 'register_coauthors_type' );

  function register_coauthors_type() {
    register_graphql_object_type( 'CoAuthor', [
      'description' => __( "Article co-authors"),
      'fields' => [
        'display_name' => [
            'type' => 'String',
            'description' => __('The name of the author'),
        ],
        'id' => [
            'type' => 'ID',
            'description' => __( 'The author ID'),
        ],
        'slug' => [
            'type' => 'String',
            'description' => __( 'This is the author permalink' ),
        ],
        // 'avatar' => [
        //   'type' => 'String',
        //   'description' => __( 'This is the author description' ),
        // ],
        'avatar' => [
          'type' => 'String',
          'description' => __( 'Author avatar link.' ),
        ],
        'bio' => [
          'type' => 'String',
          'description' => __( 'This is the author description' ),
        ],
        'job_title' => [
          'type' => 'String',
          'description' => __('Author role, or job title')
        ]
      ],
    ] );
    
    register_graphql_field( 'Post', 'CoAuthors', [
      'type' => [ 'list_of' => 'CoAuthor' ],
      'description' => __( 'The Issuu link', 'wp-graphql' ),
      'resolve' => function( $post ) {
        $coauthors = get_coauthors($post->ID);
        $authors = array();
        foreach ($coauthors as $author) {
           $authors[] = array(
               'display_name' => $author->display_name,
               'id' => $author->ID,
               'slug' => $author->user_nicename,
               'bio' => $author->description,
               'avatar' => get_avatar_url($author->ID),
               'job_title' => get_the_author_meta('job_title', $author->ID)
           );
        };
        return ! empty( $authors ) ? $authors : ' ';
      }
   ] );


  }

  

    
