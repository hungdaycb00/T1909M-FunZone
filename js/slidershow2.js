var owl = $('.owl-carousel'); // save reference to variable

owl.owlCarousel({

loop:true,
margin:10,
autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:true,
responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }

});
