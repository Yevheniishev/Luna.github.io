// $(document).ready(function(){
// function onScroll () {
//     var scrollTop = $(document).scrollTop();
//     $('.header__nav-link').each(function(){
//       var hash = $(this).attr("href");
//       var target = $(hash);
//       if (target.position().top <= scrollTop && target.position().top + target.outerHeight() > scrollTop) {
//           $('.header__nav-link--active').removeClass("header__nav-link--active");
//           $(this).addClass("header__nav-link--active");
//           } else {
//           $(this).removeClass("header__nav-link--active");
//           }
//           });
//   }

//   $(document).on('scroll', onScroll);
//     $(".header__nav-link").click(function (e) {
//         e.preventDefault();
//         $(document).off('scroll');
//         $('.header__nav-link--active').removeClass('header__nav-link--active')
//         $(this).addClass('header__nav-link--active');
//         var hash  = $(this).attr('href');
//         var target  = $(hash);
//         $("html, body").animate({scrollTop: target.offset().top - 20}, 700, function(target){
//             window.location.hash = target;
//             $(document).on('scroll', onScroll);
//         });    
//         });
//             });

$(document).scroll(function(){
    var sections = $('section');
sections.each(function(i,el){
   var top  = $(el).offset().top - 100;
   var bottom = top + $(el).height();
   var scroll = $(document).scrollTop();
   var id = $(el).attr('id');
   if( scroll > top && scroll < bottom){
       $('.header__nav-link--active').removeClass('header__nav-link--active');
       $('a[href="#'+id+'"]').addClass('header__nav-link--active');

   }
})
});

$(".header__nav").on("click","a", function (event) {
   event.preventDefault();
   var id  = $(this).attr('href'),
       top = $(id).offset().top;
   $('body,html').animate({scrollTop: top - 50}, 800);
});
           
            

