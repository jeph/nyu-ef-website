
$(document).ready(function(){
  lineScroll();
  
  $window.on('scroll', navShadow);
  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  const topButton = $('#backToTop');
  topButton.on('click', function(){
    $('html, body').animate({ scrollTop: 0 }, 'slow');
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
    if ((element_top_position <= window_bottom_position) || (element_bottom_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}


// function that adds nav shadow on scroll
function navShadow(){
  console.log($(window).scrollTop());
  if($(window).scrollTop() >= 100) {
    $("#navbar-container").css("box-shadow", "0 5px 5px grey");
  } else{
    $("#navbar-container").css("box-shadow", "none");
  }

}


function lineScroll(){
  // Get the id of the <path> element and the length of <path>
  const line = document.getElementById("line");
  const length = line.getTotalLength();

  // The start position of the drawing
  line.style.strokeDasharray = length;

  // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
  line.style.strokeDashoffset = length;

  // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
  window.addEventListener("scroll", myFunction);

  function myFunction() {
    let scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    let draw = length * scrollpercent;

    // Reverse the drawing (when scrolling upwards)
    line.style.strokeDashoffset = length - draw;
  }
}
