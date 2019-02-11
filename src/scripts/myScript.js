const ogLogoWidth = $("#eighth-annual").width();
$(document).ready(function () {
  if (document.getElementById("line") != null) {
    lineScroll();
  }

  $window.on('scroll', navScroll);

  const mq = window.matchMedia("(min-width: 900px)");
  if (mq.matches) {
    $window.on('scroll', animateFooterLogo);
  } else {
    $('#footer-logo').attr('src', "images/whiteLogo.png");
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  const topButton = $('#backToTop');
  topButton.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});

const $animation_elements = $('.animation-elements');
const $window = $(window);

function check_if_in_view() {
  const window_height = $window.height();
  const window_top_position = $window.scrollTop();
  const window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function () {
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
function navScroll() {
  const mq = window.matchMedia("(max-width: 500px)");

  if ($(window).scrollTop() >= 100) {
    $("#navbar-container").css("box-shadow", "0 5px 5px grey");
    $(".w3-bar-item").each(function () {
      $(this).css("color", "black");
      $("#tickets-btn").css("background-color", "#1eb0bf");

    });

    if (mq.matches) {
      $("#eighth-annual").attr("src", "images/landing-page-title-logo.png");
      $("#eighth-annual").css("padding-left", "3%");
      $("#eighth-annual").css("filter", "none");
      $("#eighth-annual").css("-webkit-filter", "none");
      $("#eighth-annual").css("width", "40%");
      $("#eighth-annual").css("border-radius", "0%");
    }


  } else {
    $("#navbar-container").css("box-shadow", "none");
    $(".w3-bar-item").each(function () {
      $(this).css("color", "gray");
      $("#tickets-btn").css("background-color", "#ffffff");

    });
    if (mq.matches) {
      $("#eighth-annual").attr("src", "images/colorLogo.png");
      $("#eighth-annual").css("width", ogLogoWidth);
      $("#eighth-annual").css("padding-left", "2%");
      $("#eighth-annual").css("border-radius", "0%");
    }

  }

}


function lineScroll() {
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

function animateFooterLogo() {
  if ($(window).scrollTop() + $(window).height() >= ($(document).height() - 150)) {
    $("footer").addClass("purpleBackFooter");
    $('#footer-logo').attr('src', "images/whiteLogo.png");
    $('#footer-logo').css('width', "6%");
    $("#backToTop").addClass("w3-white");
    $(".footer-grid-item a:link").css("color", "#1eb0bf");
    $(".footer-grid-item i").css("color", "#1eb0bf");
  } else if ($(window).scrollTop() + $(window).height() < $(document).height()) {
    $("#backToTop").removeClass("w3-white");
    $('#footer-logo').attr('src', "images/colorLogo.png");
    $("footer").removeClass("purpleBackFooter");
    $("footer").css("background-color", "white");
    $(".footer-grid-item a:link").css("color", "white");
    $(".footer-grid-item i").css("color", "white");
  }
}

const first_speaker = document.getElementById('speaker1');
const second_speaker = document.getElementById('speaker2');
const third_speaker = document.getElementById('speaker3');

if ($("#speaker1") != null) {
  $("#speaker1").on("click", function () {
    window.location.replace("speaker1.html");
  });

}

if ($("#speaker2") != null) {
  $("#speaker2").on("click", function () {
    window.location.replace("speaker2.html");
  });
}

if ($("#speaker3") != null) {
  $("#speaker3").on("click", function () {
    window.location.replace("speaker3.html");
  });
}

function grayscalePic(id) {
  $(id).toggleClass("w3-grayscale");
}
