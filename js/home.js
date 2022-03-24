function animateMyLine(myLine) {
var path = document.querySelector(myLine);
var length = path.getTotalLength();
// Clear any previous transition
path.style.transition = path.style.WebkitTransition = 'none';
// Set up the starting positions
path.style.strokeDasharray = length + ' ' + length;
path.style.strokeDashoffset = length;
//console.log(length);
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
path.getBoundingClientRect();
// Define our transition
path.style.transition = path.style.WebkitTransition =
  'stroke-dashoffset 3s ease-in-out';
path.style.strokeDashoffset = '0';
}

$.fn.isInViewport2 = function() {
  var elementTop2 = $(this).offset().top; - 300;
  //var elementBottom2 = elementTop2 + $(this).outerHeight();
  var viewportTop2 = $(window).scrollTop();
  var viewportBottom2 = viewportTop2 + $(window).height() ;
  return elementTop2 < viewportBottom2;
};


$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};


$(window).on('resize scroll load', function() { 
	
if ($(window).scrollTop() <= 1) {
  $('#top_bar').removeClass('sticky');
}	
else {
  $('#top_bar').addClass('sticky');      
}

// Animated Line 1 
if ($('#homelines1').isInViewport2()) {
if (!$('#homelines1').hasClass('lineAnimated')) {
  $('#homelines1').addClass('lineAnimated');
  animateMyLine('#homelines1 .homelines-desktop path'); 
  animateMyLine('#homelines1 .homelines-mobile path');
}
}

// Animated Line 2 
if ($('#homelines2').isInViewport2()) {
if (!$('#homelines2').hasClass('lineAnimated')) {
  $('#homelines2').addClass('lineAnimated');
  animateMyLine('#homelines2 .homelines-desktop path'); 
  animateMyLine('#homelines2 .homelines-mobile path');
}
}

// Animated Line 3 
if ($('#homelines3').isInViewport2()) {
if (!$('#homelines3').hasClass('lineAnimated')) {
  $('#homelines3').addClass('lineAnimated');
  animateMyLine('#homelines3 .homelines-desktop path'); 
  animateMyLine('#homelines3 .homelines-mobile path');
}
}

// Animated Line 4 
if ($('#homelines4').isInViewport2()) {
if (!$('#homelines4').hasClass('lineAnimated')) {
  $('#homelines4').addClass('lineAnimated');
  animateMyLine('#homelines4 .homelines-desktop path'); 
  animateMyLine('#homelines4 .homelines-mobile path');
}
}

// Animated Line 5 
if ($('#homelines5').isInViewport2()) {
if (!$('#homelines5').hasClass('lineAnimated')) {
  $('#homelines5').addClass('lineAnimated');
  animateMyLine('#homelines5 .homelines-desktop path'); 
  animateMyLine('#homelines5 .homelines-mobile path');
}
}

// Animated Line 6 
if ($('#homelines6').isInViewport2()) {
if (!$('#homelines6').hasClass('lineAnimated')) {
  $('#homelines6').addClass('lineAnimated');
  animateMyLine('#homelines6 .homelines-desktop path'); 
  animateMyLine('#homelines6 .homelines-mobile path');
}
}




// Section 2 
if ($('#home_section2-animate1').isInViewport()) {
  $('#home_section2-animate1 p').addClass('animated fadeIn');
}

// Section 3
if ($('#home_spotlight-childers').isInViewport()) {
  $('#home_spotlight-childers .home_spotlight-content').addClass('animated fadeIn');
}
if ($('#home_spotlight-rajamohan').isInViewport()) {
  $('#home_spotlight-rajamohan .home_spotlight-content').addClass('animated fadeIn');
}

// Section 4
if ($('#home_spotlight-johnson').isInViewport()) {
  $('#home_spotlight-johnson .home_spotlight-content').addClass('animated fadeIn');
}
if ($('#home_spotlight-grosso').isInViewport()) {
  $('#home_spotlight-grosso .home_spotlight-content').addClass('animated fadeIn');
}
if ($('#home_spotlight-cooper').isInViewport()) {
  $('#home_spotlight-cooper .home_spotlight-content').addClass('animated fadeIn');
}

// Section 5
if ($('#home_spotlight-hines').isInViewport()) {
  $('#home_spotlight-hines .home_spotlight-content').addClass('animated fadeIn');
}
if ($('#home_spotlight-gonzalez').isInViewport()) {
  $('#home_spotlight-gonzalez .home_spotlight-content').addClass('animated fadeIn');
}
if ($('#home_spotlight-warnick').isInViewport()) {
  $('#home_spotlight-warnick .home_spotlight-content').addClass('animated fadeIn');
}

// Section 6
if ($('#home_spotlight-butler').isInViewport()) {
  $('#home_spotlight-butler .home_spotlight-content').addClass('animated fadeIn');
}
if ($('#home_spotlight-krivanek').isInViewport()) {
  $('#home_spotlight-krivanek .home_spotlight-content').addClass('animated fadeIn');
}


// Section 2 
if ($('#home_section7-animate1').isInViewport()) {
  $('#home_section7-animate1').addClass('animated fadeIn');
}



/*

if ($('#holder1_animate1').isInViewport()) {
  $('#holder1_animate1 p').addClass('animated fadeIn');
}
if ($('#holder2_animate1').isInViewport()) {
  $('#holder2_animate1 p').addClass('animated fadeIn');
}
if ($('#holder3_animate1').isInViewport()) {
  $('#holder3_animate1 p').addClass('animated fadeIn');
}
if ($('#holder4_animate1').isInViewport()) {
  $('#holder4_animate1 p').addClass('animated fadeIn');
}
if ($('#holder5_animate1').isInViewport()) {
  $('#holder5_animate1 p').addClass('animated fadeIn');
}
if ($('#holder6_animate1').isInViewport()) {
  $('#holder6_animate1 p').addClass('animated fadeIn');
}
*/

});


$('body').on('click', '#arrow', function() {
    $('html, body').animate({
        scrollTop: $("#home_section2").offset().top
    }, 700);
}); 