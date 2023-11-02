// Put your application javascript here
jQuery(document).ready(function($) {

    /*--------------------------------------------------------------
    >>> Banner Slider
    ----------------------------------------------------------------*/
    if ($('.banner-section').length > 0) {
        var swiper = new Swiper(".banner-section", {
            parallax: true,
            speed: 700,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }


    gsap.utils.toArray(".hom_about_image_sec .left_image,.our_mission_image_loop figure").forEach(function(container) {
        let image = container.querySelector("img");
    
        gsap.to(image, {
            y: () => image.offsetHeight - container.offsetHeight,
            ease: "none",
            scrollTrigger: {
            trigger: container,
            scrub: true,
            pin: false,
            markers: false,
            invalidateOnRefresh: true
            },
        }); 
    });
    gsap.registerPlugin(ScrollTrigger);

});