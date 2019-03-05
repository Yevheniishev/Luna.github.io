var introCircle = anime ({
    targets: '.intro__circle',
    duration: 800,
    easing: 'easeInCubic',
    opacity: [0,1], 
    translateY: ['100px','0px']
})
var introTitle = anime ({
    targets: '.intro__title',
    duration: 800,
    delay: 400,
    easing: 'easeInCubic',
    opacity: [0,1],
    translateY: ['100px','0px']
})
var introMain = anime ({
    targets: '.intro__main-title',
    duration: 800,
    delay: 500,
    easing: 'easeInCubic',
    opacity: [0,0.5], 
    translateY: ['100px','0px']
})
var introRows = anime ({
    targets: '.intro__rows',
    duration: 800,
    delay: 600,
    easing: 'easeInCubic',
    opacity: [0,1], 
    translateY: ['100px','0px']
})

AOS.init ();
// var controller = new ScrollMagic.Controller();
// var AboutRight = new ScrollMagic.Scene({
//   triggerElement: '.about__right',
//   offset: -250,
// })
// .setClassToggle('.about__right', 'fade-in')
// .addTo(controller);

// var AboutLeft = new ScrollMagic.Scene ({
//     triggerElement: '.about__left',
//     offset: -250
// })
// .setClassToggle('.about__left', 'fade-in')
// .addTo(controller);

// var photo = new ScrollMagic.Scene ({
//     triggerElement: '.photo',
//     offset: -250,
// })
// .setClassToggle('.photo', 'fade-top')
// .addTo(controller); 

