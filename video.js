(function () {
  var $container;

  $(document).ready(function () {
    setupAudio();
    setupVideo();
  });

  function setupVideo() {
    $container = $('.container');

    var img = new Image();
    img.src = "http://i.imgur.com/94Apv.gif";

    $(document).on('beat', function (e, number) {
      console.log('Beat', number);

      if (number % 4 == 0) {
        $('img').show();
        $('img').prop('src', img.src);
        $('body').css('background-color', '#f00');
        makeBig($('img'));
      }
      if ((number + 2) % 4 == 0) {
        $('img').removeAttr('src');
        $('body').css('background-color', '#0f0');
      }

      if (number % 32 == 0 && number > 0) {
        $('img').first().clone().appendTo('.container');
      }
    });

    setContainerHeight();
  }


  function makeBig($img) {
    $img.css('height', '50%');
  }

  function setContainerHeight() {
    var height = $(window).height() * 0.9;
    var width = height * 1.5;
    $container.height(height).width(width);
  }
})();
