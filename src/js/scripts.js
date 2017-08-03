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

    $('#lightgallery').lightGallery();

    $('.slider').slider();

  });

})(jQuery, window, document);
