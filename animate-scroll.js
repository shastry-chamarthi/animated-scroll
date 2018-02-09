/*
 * jQuery Animate Scroll
 * Anchor navigation tool
 *  author: Sathyanarayana Shastry Chamarthi
 */
'use strict';
(function($){
  $.fn.animateScroll = function(options){
    var defaults = {
      target: "body", 
      scrollContainer: "body", 
      scrollPadding: 0,
      duration: 5000
    }

    console.log('options are ', options);
    options = $.extend(defaults, options); 
    console.log('options are ', options);
    // Bind scrolling on this element with associated event
    $(this).on("click", function(e) {
      $(options.target).animate({
        scrollTop: $($(this).attr("href")).offset().top + $(options.scrollContainer).scrollTop() + options.scrollPadding
      }, options.duration);
      // Prevents default action
      return false; 
    });
  }  
})(jQuery);