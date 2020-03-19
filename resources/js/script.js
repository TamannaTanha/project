
//COUNTER UP

$('.num').counterUp({
    delay: 100,
    time: 5000
});

//USED FOR HUMBERGAR MENU

$('.nav-icon').click(function(){
    $('.menu-container').slideDown('slow');
});
$('.close-btn').click(function(){
    $('.menu-container').slideUp('slow');
});

$('.slide').click(function(){
    $('.menu-container').slideUp('slow');
});

//STICKY MENU

$(window).on('scroll', function(){
    if($(window).scrollTop()){
            $('nav').addClass('sticky');
       }else {
            $('nav').removeClass('sticky');
       }
});

//MIX IT UP

var mixer = mixitup('.grid-work-container');


