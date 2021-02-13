/**
* Template Name: Mentor - v3.0.0
* Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

//**automatic navigation slide js start
//let slide_counter =1;
//setInterval(function(){
//  document.getElementById("radio" + slide_counter).checked = true;
//  counter++;
//});
//automatic navigation slide js end


//start form validation ------------------------------------------------------------------------------------------------
function submit(){

  let text = document.getElementById("email").value;

 let testing = /^([a-z A-Z 0-9 \.-]+)@([a-z A-Z 0-9]+).([a-z]{2,20}).([a-z]{2,20})$/ ;

  if (firstname.value.trim() == "" || firstname.value == null){
    document.getElementById("firstlabel").style.color = 'red';
    //document.getElementById("firstlabel").style.textAlign ="left";
     document.getElementById("firstlabel").innerHTML = 'Your Name is required!';
     document.getElementsByName("firstname")[0].value="";
     document.getElementsByName("firstname")[0].placeholder="Your Name";
     document.getElementById("firstlabel").style.marginTop = "10px";
     document.getElementById("firstlabel").style.marginBottom = "0px";

  }
 /* else if (middleinitial.value.trim() == "" || middleinitial.value == null){
    document.getElementById("firstlabel").innerHTML = "";
    document.getElementById("middlelabel").style.color = 'red';
  //  document.getElementById("middlelabel").style.text-align ="left";
     document.getElementById("middlelabel").innerHTML = 'Middle Initial is required!';
     document.getElementsByName("middleinitial")[0].value="";
     document.getElementsByName("middleinitial")[0].placeholder="Middle Initial";
     document.getElementById("middlelabel").style.marginTop = "15px";
     document.getElementById("middlelabel").style.marginBottom = "0px";
  } */
/*  else if (lastname.value.trim() == "" || lastname.value == null){
    document.getElementById("middlelabel").innerHTML = "";
    document.getElementById("lastlabel").style.color = 'red';
  //  document.getElementById("middlelabel").style.text-align ="left";
     document.getElementById("lastlabel").innerHTML = 'Last Name is required!';
     document.getElementsByName("lastname")[0].value="";
     document.getElementsByName("lastname")[0].placeholder="Last Name";
     document.getElementById("lastlabel").style.marginTop = "15px";
     document.getElementById("lastlabel").style.marginBottom = "0px";
  } */
  else if (textarea.value.trim() == "" || textarea.value == null){           //email.value.trim() == "" || email.value == null //fix this boolean
    document.getElementById("firstlabel").innerHTML = "";
    document.getElementById("textarealabel").style.color = 'red';
  //  document.getElementById("middlelabel").style.text-align ="left";
     document.getElementById("textarealabel").innerHTML = 'Message is required!';
     document.getElementsByName("textarea")[0].value="";
     document.getElementsByName("textarea")[0].placeholder="Enter any info, suggestions, or feedbacks for Us.....";
     document.getElementById("textarealabel").style.marginTop = "15px";
     document.getElementById("textarealabel").style.marginBottom = "0px";
     document.getElementById("emaillabel").innerHTML = "";
  }
  else if (testing.test(text)){           //email.value.trim() == "" || email.value == null //fix this boolean
    document.getElementById("emaillabel").innerHTML = "";
    document.getElementById("error").style.opacity ="0";
    document.getElementById("error").style.visibility ="hidden";
    setTimeout(function () {
      document.getElementById("popup").style.visibility ="visible";
      document.getElementById("popup").style.opacity ="100";
    }, 400);
    document.getElementById("welcome").innerHTML =firstname.value  + " " + middlename.value  + " " + lastname.value + ", Welcome to MCM!";
  }
  else{
    document.getElementById("lastlabel").innerHTML = "";
    document.getElementById("emaillabel").style.color = 'red';
  //  document.getElementById("middlelabel").style.text-align ="left";
     document.getElementById("emaillabel").innerHTML = "Invalid Email Address";
     document.getElementsByName("email")[0].value="";
     document.getElementsByName("email")[0].placeholder="Email Address";
     document.getElementById("emaillabel").style.marginTop = "15px";
     document.getElementById("emaillabel").style.marginBottom = "0px";
     document.getElementById("textarealabel").innerHTML = "";
   }
}

function reset(){
  document.getElementsByName("firstname")[0].value="";
  document.getElementsByName("firstname")[0].placeholder="Your Name";
  document.getElementsByName("middleinitial")[0].value="";
  document.getElementsByName("middleinitial")[0].placeholder="Contact Number";
  document.getElementsByName("lastname")[0].value="";
  document.getElementsByName("lastname")[0].placeholder="Your Concern";
  document.getElementsByName("email")[0].value="";
  document.getElementsByName("email")[0].placeholder="Email Address";
  document.getElementById("firstlabel").innerHTML = "";
  document.getElementById("middlelabel").innerHTML = "";
  document.getElementById("lastlabel").innerHTML = "";
  document.getElementById("emaillabel").innerHTML = "";
  document.getElementById("textarealabel").innerHTML = "";
  document.getElementsByName("textarea")[0].value="";
  document.getElementsByName("textarea")[0].placeholder="Enter any info, suggestions, or feedbacks for Us.....";
}

function back(){
  document.getElementById("popup").style.opacity ="0";
  document.getElementById("popup").style.visibility ="hidden";
  setTimeout(function () {
    document.getElementById("error").style.visibility ="visible";
    document.getElementById("error").style.opacity ="100"; }, 400)
    document.getElementsByName("firstname")[0].value="";
    document.getElementsByName("firstname")[0].placeholder="Your Name";
    document.getElementsByName("middleinitial")[0].value="";
    document.getElementsByName("middleinitial")[0].placeholder="Contact Number";
    document.getElementsByName("lastname")[0].value="";
    document.getElementsByName("lastname")[0].placeholder="Your Concern";
    document.getElementsByName("email")[0].value="";
    document.getElementsByName("email")[0].placeholder="Email Address";
    document.getElementById("firstlabel").innerHTML = "";
    document.getElementById("middlelabel").innerHTML = "";
    document.getElementById("lastlabel").innerHTML = "";
    document.getElementById("emaillabel").innerHTML = "";
    document.getElementById("textarealabel").innerHTML = "";
    document.getElementsByName("textarea")[0].value="";
    document.getElementsByName("textarea")[0].placeholder="Enter any info, suggestions, or feedbacks for Us.....";
}
//end form validation ------------------------------------------------------------------------------------------------

//banner and slider js ------------------------------------------------------------------------------------------------

function banner1(){
document.getElementById("banner4").style.opacity ="0";
document.getElementById("banner4").style.visibility ="hidden";
setTimeout(function () {
  document.getElementById("banner").style.visibility ="visible";
  document.getElementById("banner").style.opacity ="100"; }, 10)
}

function banner2(){
document.getElementById("banner").style.opacity ="0";
document.getElementById("banner").style.visibility ="hidden";
setTimeout(function () {
  document.getElementById("banner2").style.visibility ="visible";
  document.getElementById("banner2").style.opacity ="100"; }, 10)
}

function banner3(){
document.getElementById("banner2").style.opacity ="0";
document.getElementById("banner2").style.visibility ="hidden";
setTimeout(function () {
  document.getElementById("banner3").style.visibility ="visible";
  document.getElementById("banner3").style.opacity ="100"; }, 10)
}

function banner4(){
document.getElementById("banner3").style.opacity ="0";
document.getElementById("banner3").style.visibility ="hidden";
setTimeout(function () {
  document.getElementById("banner4").style.visibility ="visible";
  document.getElementById("banner4").style.opacity ="100"; }, 10)
}


//end banner and slider js ------------------------------------------------------------------------------------------------
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      }
    }
  });

  // Init AOS
  $(window).on('load', function() {
    AOS.init({
      duration: 1000,
      once: true
    });
  });

})(jQuery);
