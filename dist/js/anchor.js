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
           
            

