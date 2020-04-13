<?php
/**
 * Theme for the Postlight Headless WordPress Starter Kit.
 *
 * Read more about this project at:
 * https://postlight.com/trackchanges/introducing-postlights-wordpress-react-starter-kit
 *
 * @package  Postlight_Headless_WP
 */

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

@ini_set('upload_max_size', '64M');
@ini_set('post_max_size', '64M');
@ini_set('max_execution_time', '300');

function login_logo()
{
    echo '
    <style type="text/css">
      .login h1 a {
        background-image: url("https://amherststudent.com/logo.svg") !important;
        background-size:  164px 169px;
        height: 169px;
        width: 164px;
      }
    </style>
  ';
}
function setup_theme()
{
    add_theme_support('align-wide'); // Support align-wide in Gutenberg
    add_theme_support('post-thumbnails'); // Support featured images
    // TODO: Add support for post-formats, specifcally for comics, centered-content, and galleries
    
}
add_action('after_setup_theme', 'setup_theme');
add_action('login_head', 'login_logo');

/** 
 * Adding Series, and Issue Taxonomy
 * @return void
 */
function custom_taxonomies()
{
    if (!taxonomy_exists('series'))
    {
        register_taxonomy('series', 'post', array(
            'hierarchical' => true,
            'labels' => array(
                'name' => _x('Series', 'taxonomy general name') ,
                'singular_name' => _x('Series', 'taxonomy singular name') ,
                'search_items' => __('Search Series') ,
                'all_items' => __('All Series') ,
                'parent_item' => __('Parent Series') ,
                'parent_item_colon' => __('Parent Series:') ,
                'edit_item' => __('Edit Series') ,
                'view_item' => __('View Series') ,
                'update_item' => __('Update Series') ,
                'add_new_item' => __('Add New Series') ,
                'new_item_name' => __('New Series Name') ,
                'menu_name' => __('Series') ,
            ) ,
            'public' => true,
            'show_admin_column' => true,
            'show_in_nav_menus' => true,
            'query_var' => true,
            'rewrite' => true,
            'show_in_rest' => true,
            'show_in_graphql' => true,
            'graphql_single_name' => 'Series',
            'graphql_plural_name' => 'SeriesN',
        ));
    }

    if (!taxonomy_exists('issue'))
    {
        register_taxonomy('issue', 'post', array(
            'hierarchical' => true,
            'labels' => array(
                'name' => _x('Issue', 'taxonomy general name') ,
                'singular_name' => _x('Issue', 'taxonomy singular name') ,
                'search_items' => __('Search Issues') ,
                'all_items' => __('All Issues') ,
                'parent_item' => __('Parent Issue') ,
                'parent_item_colon' => __('Parent Issue:') ,
                'edit_item' => __('Edit Issue') ,
                'view_item' => __('View Issue') ,
                'update_item' => __('Update Issue') ,
                'add_new_item' => __('Add New Issue') ,
                'new_item_name' => __('New Issue Name') ,
                'menu_name' => __('Issues') ,
            ) ,
            'show_in_graphql' => true,
            'graphql_single_name' => 'Issue',
            'graphql_plural_name' => 'Issues',
            'public' => true,
            'show_admin_column' => true,
            'show_in_nav_menus' => true,
            'query_var' => true,
            'rewrite' => true,
            'show_in_rest' => true,
        ));
    }

}
add_action('init', 'custom_taxonomies');

/** 
 * Adding Issuu Field for Issue Taxonomy
 * @return void
 */
function issue_add_issuu($term)
{
?>
     <div class="form-field">
        <label for="issuu">Add issuu link</label>
        <input type="text" name="issuu" value="">
    </div>
    <?php
}

function issue_edit_issuu($term)
{
    // put the term ID into a variable
    $t_id = $term->term_id;

    $term_issuu = get_term_meta($t_id, ‘issuu’, true);
		?>

    <tr class=”form-field”>
    <th><label for="issuu">Add issuu link</label></th>
    <td>

    <input type=”text” name="issuu" id="issuu" value=”<?php echo esc_attr($term_issuu) ? esc_attr($term_issuu) : ”; ?>”>
    </td>
    </tr>
    <?php
}

function issue_save_issuu($term_id)
{
    if (isset($_POST[‘issuu’]))
    {
        $term_issuu = $_POST[‘issuu’];
        if ($term_image)
        {
            update_term_meta($term_id, ‘issuu’, $term_issuu);
        }
    }
}

add_action('issue_add_form_fields', 'issue_add_issuu', 10, 2);
add_action('issue_edit_form_fields', 'issue_edit_issuu', 10);
add_action('edited_issue', 'issue_save_issuu');
add_action('create_issue', 'issue_save_issuu');

add_action('graphql_register_types', function ()
{
    register_graphql_field('Issue', 'issuu', ['type' => 'String', 'description' => __('The Issuu link', 'wp-graphql') , 'resolve' => function ($issue)
    {
        $issuu = get_post_meta($issue->term_id, 'issuu', true);
        return !empty($issuu) ? $issuu : ' ';
    }
    ]);
});

/**
 * Add ability to add class year, and job title/ byline.
 * @return void
 */

function set_reporter_title($user)
{
?>
    <h3>More profile information</h3>
      <tr>
        <th><label for="reporter_title">Title, or role</label></th>
        <td>
          <input 
          type="text" 
          name="reporter_title" 
          id="reporter_title" 
          value="<?php echo esc_attr(get_the_author_meta('reporter_title', $user->ID)); ?>" class="regular-text" 
          />
          <br />
          <span class="description">Please enter your job title</span>
        </td>
      </tr>
    <?php
}

function save_more_profile_options($user_id)
{
    update_user_meta($user_id, 'reporter_title', $_POST['reporter_title']);
}

add_action('show_user_profile', 'set_reporter_title');
add_action('edit_user_profile', 'set_reporter_title');
add_action('personal_options_update', 'save_more_profile_options');
add_action('edit_user_profile_update', 'save_more_profile_options');
$meta_args = array(
    'type' => 'string',
    'description' => 'The reporter title.',
    'single' => true,
    'show_in_rest' => true,
);
register_meta('user', 'reporter_title', $meta_args);

/**
 * Add CoAuthorPlus to Graphql
 * @return void
 */

function register_coauthors_gql()
{
    register_graphql_object_type('CoAuthor', ['description' => __("Article co-authors") , 'fields' => ['display_name' => ['type' => 'String', 'description' => __('The name of the author') , ], 'id' => ['type' => 'ID', 'description' => __('The author ID') , ], 'slug' => ['type' => 'String', 'description' => __('This is the author permalink') , ], 'avatar' => ['type' => 'String', 'description' => __('Author avatar link.') , ], 'bio' => ['type' => 'String', 'description' => __('This is the author description') , ], 'reporter_title' => ['type' => 'String', 'description' => __('Author role, or job title') ]], ]);

    register_graphql_field('Post', 'CoAuthors', ['type' => ['list_of' => 'CoAuthor'], 'description' => __('List of coAuthors ', 'wp-graphql') , 'resolve' => function ($post)
    {
        $coauthors = get_coauthors($post->ID);
        $authors = array();
        foreach ($coauthors as $author)
        {
            $authors[] = array(
                'display_name' => $author->display_name,
                'id' => $author->ID,
                'slug' => $author->user_nicename,
                'bio' => $author->description,
                'avatar' => get_avatar_url($author->ID) ,
                'reporter_title' => get_the_author_meta('reporter_title', $author->ID)
            );
        };
        return !empty($authors) ? $authors : ' ';
    }
    ]);
}
add_action('graphql_register_types', 'register_coauthors_gql');




function find_coauthors($value, $field_name, $request){
    $coauthors = get_coauthors(object[$id]);
    $author = array();
    foreach ($coauthors as $author) {
        $authors[] = array(
            'id' => $author->id,
            'name' => $author->display_name,
            'slug' => $author->user_nicename,
            'reporter_title' => get_the_author_meta('reporter_title', $author->ID),
            'description' => $author->description,
            'email' => $author->user_email,
            'avatar_urls' => rest_get_avatar_urls($author->user_email)
        );
    }
    return $authors;
}
// Wait we are creating new users or are we leaving it to anote
function post_coauthors($value, $object, $request){
    // we're gonna have whole ass objects
    $postId = object[$id];
    $updateStatus = add_coauthors($postId, $value, $query_type='id');
    return $updateStatus;
}



add_action( 'rest_api_init', function(){
    register_rest_field('post', 'coauthors', array(
        'get_callback' => 'find_coauthors',
        'update_callback' => 'post_coauthors',
        'schema' => null,
    ));
} );
