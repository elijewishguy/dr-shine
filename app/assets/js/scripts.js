/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
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
