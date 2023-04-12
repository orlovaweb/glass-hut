$(function () {
    $(".slider__inner").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [{
      
            breakpoint: 300,
            settings: "unslick" // destroys slick
      
        }]

    });
    // $('input, select').styler();
    $('.burger-menu').on('click',  function(){
        $('.header__nav-list').slideToggle();
        $('.burger-menu').toggleClass('close');
      });
});