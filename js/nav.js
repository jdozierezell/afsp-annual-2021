// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});





$('body').on('click', '.nav_open', function() {
var myscrollWidth = window.innerWidth - document.documentElement.clientWidth;
$('body').addClass('nav_opened');
$('body').removeClass('nav_closed');
$('#nav_toggle').addClass('nav_close');
$('#nav_toggle').removeClass('nav_open');
$('#page').css("padding-right", myscrollWidth + "px");
$('#nav_toggle').css("margin-right", myscrollWidth + "px");
$('#site_nav-holder').css("right", myscrollWidth + "px");
});

$('body').on('click', '.nav_close', function() {
$('body').removeClass('nav_opened');
$('body').addClass('nav_closed');
$('#nav_toggle').removeClass('nav_close');
$('#nav_toggle').addClass('nav_open');
$('#page').css("padding-right", "0px");
$('#nav_toggle').css("margin-right", "0px");
$('#site_nav-holder').css("right", "0px");
});