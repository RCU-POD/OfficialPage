
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	// $(window).on('load', function() {
 //        // Animate loader off screen
 //        $(".preloader").fadeOut("slow");;
 //    });
	
	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

    //-------- Active Sticky Js ----------//
     $(".sticky-header").sticky({topSpacing:0});
     
     // -------   Active Mobile Menu-----//

     $(".mobile-btn").on('click', function(e){
        e.preventDefault();
        $(".main-menu").slideToggle();
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });
     $(".main-menu li a").on('click', function(e){
        e.preventDefault();
        $(".mobile-menu").slideUp();
        $(".mobile-btn span").toggleClass("lnr-menu lnr-cross");
    });
     

    // $(function(){
    //     $('#Container').mixItUp();
    // });
    var mixer = mixitup('#filter-content');
    $(".controls .filter").on('click', function(event){
        $(".controls .filter").removeClass('active');
        $(this).addClass('active');
    });
    // Add smooth scrolling to Menu links
         $(".main-menu li a, .smooth").on('click', function(event) {
                if (this.hash !== "") {
                  event.preventDefault();
                  var hash = this.hash;
                  $('html, body').animate({
                    scrollTop: $(hash).offset().top - (-10)
                }, 600, function(){
                 
                    window.location.hash = hash;
                });
            } 
        });

    $('.active-testimonial-carousel').owlCarousel({
        loop:true,
        dot: true,
        items: 3,
        margin: 30,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
             }
        }
    })
     // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert'); // alert div for show alert message

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'mail.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.html(''); // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });

     $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });
 });
(function ($){

    $.fn.bekeyProgressbar = function(options){

        options = $.extend({
            animate     : true,
          animateText : true
        }, options);

        var $this = $(this);
      
        var $progressBar = $this;
        var $progressCount = $progressBar.find('.progressBar-percentage-count');
        var $circle = $progressBar.find('.progressBar-circle');
        var percentageProgress = $progressBar.attr('data-progress');
        var percentageRemaining = (100 - percentageProgress);
        var percentageText = $progressCount.parent().attr('data-progress');
      
        //Calcule la circonférence du cercle
        var radius = $circle.attr('r');
        var diameter = radius * 2;
        var circumference = Math.round(Math.PI * diameter);

        //Calcule le pourcentage d'avancement
        var percentage =  circumference * percentageRemaining / 100;

        $circle.css({
          'stroke-dasharray' : circumference,
          'stroke-dashoffset' : percentage
        })
        
        //Animation de la barre de progression
        if(options.animate === true){
          $circle.css({
            'stroke-dashoffset' : circumference
          }).animate({
            'stroke-dashoffset' : percentage
          }, 3000 )
        }
        
        //Animation du texte (pourcentage)
        if(options.animateText == true){
 
          $({ Counter: 0 }).animate(
            { Counter: percentageText },
            { duration: 3000,
             step: function () {
               $progressCount.text( Math.ceil(this.Counter) + '');
             }
            });

        }else{
          $progressCount.text( percentageText + '');
        }
      
    };

})(jQuery);

$(document).ready(function(){
  
  $('.progressBar--animateNone').bekeyProgressbar({
    animate : false,
    animateText : false
  });
  
  $('.progressBar--animateCircle').bekeyProgressbar({
    animate : true,
    animateText : false
  });
  
  $('.progressBar--animateText').bekeyProgressbar({
    animate : false,
    animateText : true
  });
  
  $('.progressBar--animateAll').bekeyProgressbar();
  
});

// configuration for the slider
$(document).ready(function(){
  $('.slider1').bxSlider();
  $('a.bx-next').addClass('fa');
  $('a.bx-prev').addClass('fa');
});

$(document).ready(function(){
  $('.slider2').bxSlider();
  $('a.bx-next').addClass('fa');
  $('a.bx-prev').addClass('fa');
});

/*JS Code for Our Projects Section*/
$(".image1").click(function(){
  setModalInfo(".imagenp1","Fotografia: 1");
})
$(".image2").click(function(){
  setModalInfo(".imagenp2","Fotografia: 2");
})
$(".image3").click(function(){
  setModalInfo(".imagenp3","Fotografia: 3");
})
$(".image4").click(function(){
  setModalInfo(".imagenp4","Fotografia: 4");
})
$(".image5").click(function(){
  setModalInfo(".imagenp5","Fotografia: 5");
})
$(".image6").click(function(){
  setModalInfo(".imagenp6","Fotografia: 6");
})

var setModalInfo = function(image,text)
{
  var img = $(image).css('background-image');
  img = img.replace('url(','').replace(')','').replace(/\"/gi, "");   
  $(".image-modal-proyectos").attr("src", img);
  $(".text-modal").text(text);
}