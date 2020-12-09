(function ($) {
  "use strict";

  var nav = $("nav");
  var navHeight = nav.outerHeight();

  $(".navbar-toggler").on("click", function () {
    if (!$("#mainNav").hasClass("navbar-reduce")) {
      $("#mainNav").addClass("navbar-reduce");
    }
  });

  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  /*--/ Star ScrollTop /--*/
  $(".scrolltop-mf").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

  /*--/ Star Counter /--*/
  $(".counter").counterUp({
    delay: 15,
    time: 2000
  });

  /*--/ Circular Progress Indicator /--*/
  var circles = document.getElementsByTagName("circle");
  for (var i = 0; i < circles.length; i++) {
    var radius = circles[i].getAttribute("r");
    var value = circles[i].getAttribute("val");
    var circumference = radius * 2 * Math.PI;
    circles[i].style.strokeDasharray = `${circumference} ${circumference}`;
    circles[i].style.strokeDashoffset = `${circumference}`;
    const offset = circumference - (value / 100) * circumference;
    circles[i].style.strokeDashoffset = offset;
  }
  /*--/ Form Submit Actions /--*/
  var form = document.getElementById("form");

  function submitForm() {
    document.getElementsById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    var button = document.getElementById("submitButton");
    button.innerText = "Message Sent !";
    button.disabled = true;
  }

  if (form.addEventListener) {
    form.addEventListener("submit", submitForm, false);
  } else {
    form.attachEvent("onsubmit", submitForm);
  }

  /*--/ View More Button Handle /--*/
  var viewMore = false;
  $(".view-more-button").on("click", function () {
    viewMore = !viewMore;
    var moreDiv = document.getElementById("more-div");
    var moreButton = document.getElementById("moreButton");
    if (viewMore) {
      moreDiv.style.display = "contents";
      moreButton.innerHTML = 'View Less<i id="buttonIcon" class="fa fa-chevron-up view-more-button-icon"></i>';
    } else {
      moreDiv.style.display = "none";
      moreButton.innerHTML = 'View More<i id="buttonIcon" class="fa fa-chevron-down view-more-button-icon"></i>';
    }
  });

  /*--/ Star Scrolling nav /--*/
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - navHeight + 5
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: navHeight
  });
  /*--/ End Scrolling nav /--*/

  /*--/ Navbar Menu Reduce /--*/
  $(window).trigger("scroll");
  $(window).on("scroll", function () {
    var pixels = 50;
    var top = 1200;
    if ($(window).scrollTop() > pixels) {
      $(".navbar-expand-md").addClass("navbar-reduce");
      $(".navbar-expand-md").removeClass("navbar-trans");
    } else {
      $(".navbar-expand-md").addClass("navbar-trans");
      $(".navbar-expand-md").removeClass("navbar-reduce");
    }
    if ($(window).scrollTop() > top) {
      $(".scrolltop-mf").fadeIn(1000, "easeInOutExpo");
    } else {
      $(".scrolltop-mf").fadeOut(1000, "easeInOutExpo");
    }
  });

  /*--/ Star Typed /--*/
  if ($(".text-slider").length == 1) {
    var typed_strings = $(".text-slider-items").text();
    var typed = new Typed(".text-slider", {
      strings: typed_strings.split(","),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30
    });
  }

  /*--/ Testimonials owl /--*/
  $("#testimonial-mf").owlCarousel({
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $(".venobox").venobox();
  });
})(jQuery);
