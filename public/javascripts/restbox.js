/*
 * RestBox - Simple overlay to work with jQuery and Rails
 * Copyright (c) 2009
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

(function($) {
  
  // initialize
  $(function() {
    content = 'loading...'
    $('body').append('<div id=\'restbox_screen\'></div>\n<div id=\'restbox_container\'><div id=\'restbox_content\'></div></div>');
  });
  
  // set defaults
  $.restbox = function(options) {
    
    options = $.extend({
      loadingClass: "restbox_loading",
      width: "350px",
      content: $(content)
    }, options);
      
  // just fade screen in, load content when reqest includes content param
  if (options.content.length != 0) {
    $('div#restbox_container div#restbox_content').removeClass(options.loadingClass).html(options.content);      

  } else {
    $('div#restbox_screen').fadeIn(120, function() {
      $('div#restbox_container').show()
      $('div#restbox_container div#restbox_content').width(options.width).addClass(options.loadingClass).html(content);
      $('div#restbox_container div#restbox_content').css({top: -($('div#restbox_content').height() + 100) / 2});
      $('div#restbox_container div#restbox_content').animate({opacity: "100"}, 3000);
    });
  }
};

// load content
$.fn.restbox = function(options) {
  return this.unbind("click").click(function(event) {
    $.restbox(options);
    $.ajax({
      url: this.href,
      dataType: "script"
    });
    event.preventDefault();
  })
}

// initialize
$(function() {
  $(".restbox").restbox({});
});
  
})(jQuery);