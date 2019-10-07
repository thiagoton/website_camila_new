// Specific functions implemented

function setupAnimations() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    var minVisibleHeight = $(elem).height() * 0.2;

    if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
      // element 100% inside viewport
      return true;
    } else if ((elemBottom > docViewTop) && (elemTop < docViewTop) &&
               (elemBottom - docViewTop >= minVisibleHeight)) {
      // partial element at top of viewport
      return true;
    } else if ((elemTop < docViewBottom) && (elemBottom > docViewBottom) &&
               (docViewBottom - elemTop >= minVisibleHeight)) {
      // partial element at bottom of viewport
      return true;
    }

    return false;
  }

  function verify() {
    $('.anim-hold')
        .each(function() {
          if (isScrolledIntoView(this) === true) {
            class_name = $(this)[0].className;

            $(this).addClass('animated');
            if (class_name.includes('fadeIn')) {
              $(this).addClass('fadeIn');
            }

            if (class_name.includes('delay-1s')) {
              $(this).addClass('delay-1s');
            }
            $(this).removeClass('anim-hold');
          }
        });
  }

  // If element is scrolled into view, fade it in
  $(window).scroll(function() { verify(); });

  verify();
}