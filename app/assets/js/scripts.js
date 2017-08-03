/*!
 * dr-shine
 * Project for Dr. Shine Marble and Restoration.
 * http://www.drshine.net
 * @author Eli Nahon
 * @version 1.0.0
 * Copyright 2017.  licensed.
 */
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
