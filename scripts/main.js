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



jQuery(document).on("ready",function () {
	
});


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
  $(".page-header .contact ul").addClass("active");
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
