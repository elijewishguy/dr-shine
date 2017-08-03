/*!
 * dr-shine
 * Project for Dr. Shine Marble and Restoration.
 * http://www.drshine.net
 * @author Eli Nahon
<<<<<<< HEAD
 * @version 1.0
=======
 * @version 1.0.0
>>>>>>> Trash
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

    $('#lightgallery').lightGallery();

    $('.slider').slider();

  });

})(jQuery, window, document);
