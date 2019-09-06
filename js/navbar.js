$(document).ready(function () {
    var link1 = document.querySelector('.link1')
    var link2 = document.querySelector('.link2')
    var link3 = document.querySelector('.link3')
    var link4 = document.querySelector('.link4')
    var link5 = document.querySelector('.link5')
    var link6 = document.querySelector('.link6')
    var link7 = document.querySelector('.link7')
    var link8 = document.querySelector('.link8')
  
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      navbar.style.top = "0px";
      navbar.style.backgroundColor = '#FFFFFF';
      link1.style.color ='#2E2D2C';
      link2.style.color ='#2E2D2C';
      link3.style.color ='#2E2D2C';
      link4.style.color ='#2E2D2C';
      link5.style.color ='#2E2D2C';
      link6.style.color ='#2E2D2C';
      link7.style.color ='#2E2D2C';
      link8.style.color ='#2E2D2C';
  
    } else {
      navbar.style.position = 'fixed';
      navbar.style.backgroundColor = '#2E2D2C';
      link1.style.color ='#FFFFFF';
      link2.style.color ='#FFFFFF';
      link3.style.color ='#FFFFFF';
      link4.style.color ='#FFFFFF';
      link5.style.color ='#FFFFFF';
      link6.style.color ='#FFFFFF';
      link7.style.color ='#FFFFFF';
      link8.style.color ='#FFFFFF';
    }
  }
  
  
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