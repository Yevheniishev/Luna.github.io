$(document).ready(function () {
    $('.header__mob').click(function() {
        $('.header__burger').toggleClass('header__burger--active');
        $('.header__nav').toggleClass('header__nav--active');
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
       
      