/**
* Template Name: iPortfolio - v1.5.1
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {

  var count = 200;
  var fireDefaults = {
    origin: { y: 0.7 }
  };

  var heartDefaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ['#f93963', '#a10864', '#ee0b93']
  };

  var heart = confetti.shapeFromPath({
    path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
    matrix: [0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666, -5.533333333333333]
  });

  function fire(particleRatio, opts) {
    confetti({
      ...fireDefaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('mouseenter', '#m-button-no', function(e) {
    var vHeight = $(window).height();
    var vWidth = $(window).width();
    $(this).offset({ top: Math.floor(Math.random() * vHeight), left: Math.floor(Math.random() * vWidth) });
    
  });

  $(document).on('click', '#m-button-yes', function(e) {
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
  
      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    function shoot() {
      confetti({
        ...heartDefaults,
        particleCount: 40,
        scalar: 2,
        shapes: [heart]
      });
    
      confetti({
        ...heartDefaults,
        particleCount: 10,
        scalar: 2.75,
        shapes: [heart]
      });
    }
    
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  });

})(jQuery);
