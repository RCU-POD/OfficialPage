$(document).ready(function () {
  /* For Standar Menu*/
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.style.top = "0px";
      navbar.style.backgroundColor = '#FFFFFF';
      $(".nav-s").css("color", "#000000");
    } else {
      navbar.style.position = 'fixed';
      navbar.style.backgroundColor = '#000000';
      $(".nav-s").css("color", "#FFFFFF");
    }
  }  
    
  /* For Mobile Menu*/
    $('.nav-button').click(function () {
      $('body').toggleClass('nav-open');
    });
    $('.control').click(function () {
      $('body').toggleClass('nav-open');
    }); 
  
    $('.nav-link').click(function () {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('section[id="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
      $('html, body').animate({ scrollTop: destino.offset().top }, 500);
      return false;
    });
  });