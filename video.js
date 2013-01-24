(function () {
  var $container;

  $(document).ready(function () {
    setupAudio();
    setupVideo();
  });

  function setupVideo() {
    $container = $('.container');

    var standupcat = new Image();
    standupcat.src = "http://i.imgur.com/94Apv.gif";

    $(document).on('beat', function (e, number) {
      console.log('Beat', number);

      if (number % 4 == 0) {
        $('.standupcat').prop('src', standupcat.src);
        $('body').css('background-color', '#f00');
        makeBig($('.standupcat.small'));
      }
      if ((number + 2) % 4 == 0) {
        $('.standupcat').removeAttr('src');
        $('body').css('background-color', '#0f0');
      }

      if (number == 0) {
        position($('.standupcat').first().clone().appendTo('.container').show(), { middle: true });
      }
      if (number == 32) {
        position($('.standupcat').first().clone().appendTo('.container').show(), { left: true });
        position($('.standupcat').first().clone().appendTo('.container').show(), { right: true });
      }
      if (number == 48) {
        position($('.standupcat').first().clone().appendTo('.container').show(), { left: true, bottom: true });
        position($('.standupcat').first().clone().appendTo('.container').show(), { right: true, bottom: true });
        position($('.standupcat').first().clone().appendTo('.container').show(), { middle: true, bottom: true });
      }
      if (number == 64) {
        position($('.standupcat').first().clone().appendTo('.container').show().removeClass('small').css('height', '100%'), { middle: true });
      }
      if (number == 96) {
        $('.standupcat.small').hide();
      }
    });

    setContainerHeight();
  }

  function position($el, options) {
    if (options.middle) {
      $el.css('left', $container.width() / 2 - $el.width() / 2);
    }
    if (options.left) {
      $el.css('left', 0);
    }
    if (options.right) {
      $el.css('right', 0);
    }
    if (options.bottom) {
      $el.css('bottom', 0);
    }
  }


  function makeBig($img) {
    $img.css('height', '40%');
  }

  function setContainerHeight() {
    var height = $(window).height() * 0.9;
    var width = height * 1.5;
    $container.height(height).width(width);
  }
})();
