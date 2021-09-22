const hand = document.querySelector('.emoji.wave-hand');

function waveOnLoad() {
    hand.classList.add('wave');
    setTimeout(function() {
        hand.classList.remove('wave');
    }, 2000);
}

setTimeout(function() {
    waveOnLoad();
}, 1000);

hand.addEventListener('mouseover', function() {
hand.classList.add('wave');
});

hand.addEventListener('mouseout', function() {
hand.classList.remove('wave');
});

$('.toggled-nav-wrapper').on('click', function(e){
    e.stopPropagation();
  });

$('.nav-toggle-open-wrapper, .nav-toggle-close-wrapper, header .nav-toggle-body-overlay').on('click', function(){
  $('html').toggleClass('nav-open');
});
//Smooth Scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});