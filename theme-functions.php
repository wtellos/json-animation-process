<?php
function load_custom_js_scripts() {
    wp_enqueue_script(
        'custom-script-1',
        get_stylesheet_directory_uri() . '/js/bodymovin.js',
        [], // No dependencies
        null, // No versioning
        true // Load in footer
    );

    wp_enqueue_script(
        'custom-script-2', 
        get_stylesheet_directory_uri() . '/js/jsonAnimations.js',
        [], // No dependencies
        null, // No versioning
        true // Load in footer
    );

}
add_action( 'wp_enqueue_scripts', 'load_custom_js_scripts' );

