(function ($, window, document, undefined) {

  'use strict';

  $(function () {

    $('.carousel').owlCarousel({
      center: true,
      items: 1,
      autoplay: false,
      loop: true,
      autoplayTimeout: 4000,
      nav: false
    });


  });

})(jQuery, window, document);
