
const ogLogoWidth = $("#eighth-annual").width();
$(document).ready(function(){
  if (document.getElementById("line") != null){
    lineScroll();
  }


  $window.on('scroll', navScroll);




  const mq = window.matchMedia( "(min-width: 900px)" );
  if (mq.matches) {
    $window.on('scroll', animateFooterLogo);
  } else{
    // $("footer").css("background-color", "#57068c");
    $('#footer-logo').attr('src', "images/whiteLogo.png");
  }

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
function navScroll(){
  const mq = window.matchMedia( "(max-width: 500px)" );

  if($(window).scrollTop() >= 100) {
    $("#navbar-container").css("box-shadow", "0 5px 5px grey");
    $(".w3-bar-item").each(function(){
      $(this).css("color", "black");
    });

    if (mq.matches) {
      $("#eighth-annual").attr("src", "images/landing-page-title-logo.png");
      $("#eighth-annual").css("padding-left", "3%");
      $("#eighth-annual").css("filter", "none");
      $("#eighth-annual").css("-webkit-filter", "none");
      $("#eighth-annual").css("width", "40%");
      $("#eighth-annual").css("border-radius", "0%");
    }



  } else{
    $("#navbar-container").css("box-shadow", "none");
    $(".w3-bar-item").each(function(){
      $(this).css("color", "gray");
    });
    if (mq.matches) {
      $("#eighth-annual").attr("src", "images/colorLogo.png");
      // $("#eighth-annual").css("filter", "progid:DXImageTransform.Microsoft.BasicImage(invert='1')");
      // $("#eighth-annual").css("-webkit-filter", "invert(100%)");
      $("#eighth-annual").css("width", ogLogoWidth);
      $("#eighth-annual").css("padding-left", "2%");
      $("#eighth-annual").css("border-radius", "0%");
    }

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

function animateFooterLogo(){
  if($(window).scrollTop() + $(window).height() >= ($(document).height()-150)){
    $("footer").addClass("purpleBackFooter");
    $('#footer-logo').attr('src', "images/whiteLogo.png");
    // $('#footer-logo').toggleClass('footerLogoAnimate');
    $('#footer-logo').css('width', "6%");
    // $("footer").css("background", "#57068c");
    // $("footer").css("-webkit-transition", "background 1s");
    // $("footer").css("transition", "background 1s");
    $("#backToTop").addClass("w3-white");
    $(".footer-grid-item a:link").css("color","#1eb0bf");
    $(".footer-grid-item i").css("color","#1eb0bf");


  } else if ($(window).scrollTop() + $(window).height() < $(document).height()){
    $("#backToTop").removeClass("w3-white");
    $('#footer-logo').attr('src', "images/colorLogo.png");
    // $("footer").css("background-color", "white");
    $("footer").removeClass("purpleBackFooter");
    $("footer").css("background-color", "white");
    $(".footer-grid-item a:link").css("color","white");
    $(".footer-grid-item i").css("color","white");
  }
}

//modal for first speakers



const first_speaker = document.getElementById('speaker1');
const second_speaker = document.getElementById('speaker2');
const third_speaker = document.getElementById('speaker3');

if ($("#speaker1") != null){
  $("#speaker1").on("click", function(){
    window.location.replace("speaker1.html");
  });

}

if ($("#speaker2") != null){
  $("#speaker2").on("click", function(){
    window.location.replace("speaker2.html");
  });
}

if ($("#speaker3") != null){
  $("#speaker3").on("click", function(){
    window.location.replace("speaker3.html");
  });
}
// if (document.getElementById('first-modal') != null){
//   var first_modal = document.getElementById('first-modal');
//   var first_modalbutton = document.getElementById('first-modalbutton');
//   var span = document.getElementsByClassName("close")[0];
//
//   first_modalbutton.onclick = function(){
//     first_modal.style.display = "block";
//   }
//
//   span.onclick = function(){
//     first_modal.style.display = "none";
//   }
//
//   window.addEventListener("click", function(event){
//     if(event.target == first_modal){
//       first_modal.style.display = "none";
//     }
//   });
//
//   //modal for second speaker
//   var second_modal = document.getElementById('second-modal');
//   var second_modalbutton = document.getElementById('second-modalbutton');
//   var span = document.getElementsByClassName("close")[1];
//
//   second_modalbutton.onclick = function(){
//     second_modal.style.display = "block";
//   }
//
//   span.onclick = function(){
//     second_modal.style.display = "none";
//   }
//
//   window.addEventListener("click", function(event){
//     if(event.target == second_modal){
//       second_modal.style.display = "none";
//     }
//   });
//
//   //modal for third speaker
//   var third_modal = document.getElementById('third-modal');
//   var third_modalbutton = document.getElementById('third-modalbutton');
//   var span = document.getElementsByClassName("close")[2];
//
//   third_modalbutton.onclick = function(){
//     third_modal.style.display = "block";
//   }
//
//   span.onclick = function(){
//     third_modal.style.display = "none";
//   }
//
//   window.addEventListener("click", function(event){
//     if(event.target == third_modal){
//       third_modal.style.display = "none";
//     }
//   });
//
// }


function grayscalePic(id){
  $(id).toggleClass("w3-grayscale");
}
