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
  
  $.restbox_close = function() {
    $('div#restbox_screen').hide();
    $('div#restbox_container').hide();
    $('div#restbox_content').html('')
  }
    
  // set defaults
  $.restbox = function(options) {
    
    options = $.extend({
      loadingClass: "restbox_loading",
      content: $(content)
    }, options);
      
  // just fade screen in, load content when reqest includes content param
  if (options.content.length != 0) {
    $('div#restbox_container div#restbox_content').removeClass(options.loadingClass).html(options.content);      
    $('div#restbox_container div#restbox_content').css({top: -($('div#restbox_content').height() + 100) / 2});

  } else {
    $('div#restbox_screen').fadeIn(120, function() {
      $('div#restbox_container').show()
      $('div#restbox_container div#restbox_content').addClass(options.loadingClass).html(content);
      $('div#restbox_container div#restbox_content').css({top: -($('div#restbox_content').height() + 100) / 2});
      $('div#restbox_container div#restbox_content').animate({opacity: "100"}, 3000);
    });
  }
  
  close_button = $("<span id='restbox_close'></span>").click(function(event){
    $.restbox_close();
    event.preventDefault();
  });
  
  $('div#restbox_container div#restbox_content').prepend(close_button);
  
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