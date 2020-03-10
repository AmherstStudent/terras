<?php

$csvFile = file('../somefile.csv');
$data = [];
foreach ($csvFile as $line) {
    $data[] = str_getcsv($line);
    $author = data[0];
    $author_title = data[1];
    $content = data[9];
    $slug = slugify($title)
    $authors = [];
    $category_name = "."; // add index
    $category = get_categories(array('name' => $category_name))[0] 

    if (strpos($author, "and")) {
        $authors = explode("and", $author);
        if (strpos())
        // check if jobs
        // for loop 
    }
    else {

    }
}

function slugify($string){
    return strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $string), '-'));
}

$author = data[0]

if (strpos($author,"and")) {
    // Do a for loop to add author with getAuthor ($author_slug)
    authors = explode("and", $author)    
} 
else {
     

}
// Add to the 
// - set_post_thumbnail( $post_ID, $thumbnail_id );
// function setFeaturedImage 
function addImage($image_link){

}

function getIssue($issue_num){
    // if 
    // else 
}
function getSection($section_name){

}


function getAuthors($authors_name, $jobs){
    $authors = [];
    $jobs = [];
    if (strpos($author, "and")) {
        $authors = explode("and", $author);
        if (strpos($jobs, "and")) {
            $jobs = explode("and", $author);
            
        }
    } else {

    }

}

function getAuthor($author_slug) {
    // If there is an "and", split in two

    if ($author_slug) {
        $author = get_user_by( 'slug', $author_slug );

        // If no user exists with that slug, let's make one!
        if (!$author) {
            $userdata = array(
                'user_login' 	=>  $author_slug,
                'user_pass'  	=>  bin2hex(openssl_random_pseudo_bytes(4)),
                'display_name'	=>  $page->author,
            );
            wp_insert_user( $userdata );

            $author = get_user_by( 'slug', $author_slug );
        }
    }
}

function createPost ($post) {

    $args=array(
        'name'           => $post->the_slug,
        'post_type'      => 'post',
        'post_status'    => 'publish',
        'posts_per_page' => 1
    );
    $myPosts = get_posts( $args );
    if ( $myPosts ) {
        error_log(print_r('Skipping import for duplicate content because a page already exists from '.$page->old_url, true));
        continue;
    } else {
        $import_data = array (
            'post_type'     => 'post',
            'post_status'   => 'publish',
            'post_title'	=> $post->title,
            'excerpt'       => excerpt,
            'post_date'     => $postdate,
            'post_category' => $post_category,
            'post_content'  => $post_content,
        )
        

        

    }
    // $args = array (
    //     'post_type' => 'post',
    //     'post_status' => 'any',
    //     'meta_key' => 'old_url',
    //     'meta_value' => $post->old_url,
    // );
    $existing_page_query = new WP_Query($args);

    if ($existing_page_query->have_posts()) {
        error_log(print_r('Skipping import for duplicate content because a page already exists from '.$page->old_url, true));
        continue;

    } else {
        $import_data = array(
            'post_type'     => 'page',
            'post_title'	=> $post->title,
            'post_content'  => $post->content,
            'post_status'   => 'publish',
            'meta_input'    => array(
                'old_url'   => $page->old_url,
            ),
            'post_category' 
            // 'post_date'		=> $page->publish_date,
            // 'post_excerpt' => 

            // OPTIONAL ARGS
            // 'post_name'		=> $page->page_slug,
            // 'post_author'	=> $author->get('ID'),
            // 'post_category'	=> $categories,
        );
        $new_post = wp_insert_post($import_data, true);

        if (is_wp_error($new_post)) {
            error_log(print_r($new_post, true));
        }
    }

}

function importPages($pages, $categories){

}