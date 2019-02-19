$(document).ready(function () {
    $(window).scroll(function(){
        if ($(window).scrollTop() > 50) {
            $('.header').addClass('header--scrolled');
            $('.header__inner').addClass('header__inner--scrolled');
            if($('.header__burger').hasClass('header__burger--active')) {
                $('.header').removeClass('header--scrolled');
            }
        } 
        else {
            $('.header').removeClass('header--scrolled');
            $('.header__inner').removeClass('header__inner--scrolled');
        }});
    
    $('.header__mob').click(function() {
        $('.header__burger').toggleClass('header__burger--active');
        $('.header__nav').toggleClass('header__nav--active');
        if($('.header__burger').hasClass('header__burger--active')) {
            $('.header').removeClass('header--scrolled');
        } else
        if ($(window).scrollTop() > 50) {
            $('.header').addClass('header--scrolled');
        }
    })

    $('.slider').slick({
        dots: false,
        arrows: false,
        row: 1,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }}]   
              });
  
      });  
       
      