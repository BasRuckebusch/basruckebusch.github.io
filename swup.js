import Swup from 'https://unpkg.com/swup@3?module';
const swup = new Swup({
  containers: ["#swup"]
});

//swup events - execute primary functions defined in-page
swup.on('animationOutStart', function() {
  $('body').addClass('loading');
  $('body').removeClass('loaded');
});

swup.on('animationInStart', function() {
  $('body').addClass('loaded');
  $('body').removeClass('loading');

  $('body').attr('id', window.location.pathname.split("/").join("").split(".").join(""));
  if ($('body').attr('id') == "") {
    $('body').attr('id', 'home');
  }
});
