'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );
function clk_function1(){
     window.open('https://docs.google.com/forms/d/e/1FAIpQLScFLRSVmFgce0SlDVNdCIX8cKrvYYaXQutIh0Q85mvhJUNsjg/viewform  ', '_blank');
}
function clk_function(){
     window.open('https://online.vietnam2030.vn/?utm_source=sylva', '_blank');
}

$('.close-btn').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().hide();
        $.fancybox.close();
        $("#popup-register").fancybox().trigger('click');
});
$('#popup-slider .owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

jQuery(document).on("ready",function () {
	
});

$('.ui.dropdown')
  .dropdown()
;
window.onscroll = function() {
	if (document.documentElement.scrollTop > $(".page-header").outerHeight()) {
	  $(".page-header").addClass("header-fixed")
	} else {
	  $(".page-header").removeClass("header-fixed")
	}
};



$(".icon-menu").click(function(){
  $(".main-nav").addClass("active");
})
$(".main-nav .ico-close").click(function(){
  $(".main-nav").removeClass("active");
})

$(".icon-search").click(function(){
  $(".page-header .meta-center form").addClass("active");
})
$(".page-header .contact .title").click(function(){
    $("#popup-register").fancybox().trigger('click');
})
$(".register-icon").click(function(){
    $("#popup-register").fancybox().trigger('click');
})
$(document).mouseup(function(e) 
{
    var container = $(".page-header .meta-center form");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $(".page-header .meta-center form").removeClass("active");
    }
});
$(document).mouseup(function(e) 
{
    var container = $(".page-header .contact .title");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $(".page-header .contact ul").removeClass("active");
    }
});
$('.ui.checkbox').checkbox();

$(".smd-register a").click(function(){
	
	$('html,body').animate({                                                         
	    scrollTop: $(".blk-register").offset().top-$(".page-header").outerHeight()},
	    'slow');
})



$('.blk-network .owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        }
    }
})
$('.ssc-gla').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})
$(".main-nav ul li a").click(function(){
    var dataid=$(this).attr("data-id");
    $('html,body').animate({                                                         
        scrollTop: $(dataid).offset().top-$(".page-header").outerHeight()},
        'slow');
    $(".main-nav").removeClass("active");
})
$('.slider-banner').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        }
    }
})

$('.blk-fak .owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        }
    }
})
// $('.blk-team  .owl-carousel').owlCarousel({
//     loop:false,
//     margin:0,
//     nav:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         768:{
//             items:2
//         }
//     }
// })
$(".more-text").click(function(){
    $(this).parent(".text").addClass("more");
    $(this).addClass("hide")
})
$(".gg-more").click(function(){
    $(this).parent(".info").toggleClass("more");
})
$("#popup-slider").fancybox().trigger('click');
// $("#poup-cca").fancybox().trigger('click');

$('.ui.dropdown')
  .dropdown()
;
