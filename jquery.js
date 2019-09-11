$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: false,
    autoplayTimeout: 15000,
    dotsEach: true,
    navText: [
       '<i class="fa fa-angle-left" aria-hidden="true"></i>',
       '<i class="fa fa-angle-right" aria-hidden="true"></i>'
   ],
    navContainer: '.owl-carousel',
    responsive:{
        0:{items:1},
        730:{items:2},
        1000:{items:3}
    },

})
