/**
* Template Name: iPortfolio - v1.5.1
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '#m-button-no', function(e) {

    var vHeight = $(window).height();
    var vWidth = $(window).width();
    $("#m-button-no").offset({ top: Math.floor(Math.random() * vHeight), left: Math.floor(Math.random() * vWidth) });
  });


})(jQuery);