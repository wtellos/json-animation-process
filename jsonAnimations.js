//Enter JS below
    // Play the animation when hovered:

    // $('#FourBlocks_FrontPage').on('mouseenter', function() {
    //     animation.play();
    //     console.log('Animation played');
    // });

    // $('#FourBlocks_FrontPage').on('mouseleave', function() {
    //     animation.stop();
    //     console.log('Animation stopped');
    // });

   // animation.play();
   
jQuery(document).ready(function( $ ){

    var animations = [
        {
            container: document.getElementById('warp-1'), 
            path: '/wp-content/themes/yootheme-childelearning/js/json-animations/json_CircleAnimation_One.json'
        },
        {
            container: document.getElementById('warp-2'), 
            path: '/wp-content/themes/yootheme-childelearning/js/json-animations/json_CircleAnimation_Two.json'
        }
    ];

    animations.forEach(function(animationData) {
        var animation = lottie.loadAnimation({
            container: animationData.container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: animationData.path
        });

        animation.play();
    });

});
