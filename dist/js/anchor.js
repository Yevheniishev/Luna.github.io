function onScroll () {
    var scrollTop = $(document).scrollTop();
    $('.header__nav-link').each(function(){
      var hash = $(this).attr("href");
      var target = $(hash);
      if (target.position().top <= scrollTop && target.position().top + target.outerHeight() > scrollTop) {
          $('.header__nav-link--active').removeClass("active");
          $(this).addClass("header__nav-link--active");
          } else {
          $(this).removeClass("header__nav-link--active");
          }
          });
  }
   $(document).ready(function(){
    $(document).on("scroll", onScroll);
    $(".header__nav").on("click","a", function (event) {
        event.preventDefault();
        $(document).off("scroll");
        $('.header__nav-link--active').removeClass('header__nav-link--active')
        $(this).addClass('header__nav-link--active');
        var hash  = $(this).attr('href');
        var target  = $(hash);
        $("html, body").animate({scrollTop: target.offset().top - 50 }, 700, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
            });
            });
            });

