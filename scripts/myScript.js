$(document).ready(function(){

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  const topButton = $("#backToTop");
  topButton.on("click", function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});

const $animation_elements = $('.animation-elements');
const $window = $(window);

function check_if_in_view() {
  const window_height = $window.height();
  const window_top_position = $window.scrollTop();
  const window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    const $element = $(this);
    const element_height = $element.outerHeight();
    const element_top_position = $element.offset().top;
    const element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_top_position <= window_bottom_position) && (element_bottom_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}
