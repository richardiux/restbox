/*
 * RestBox - Simple overlay to work with jQuery and Rails 
 * By Richard Millan
 * Copyright (c) 2009
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 * Borrowed ideas from: Slimbox v2.02 - The ultimate lightweight Lightbox clone 
                                        Christophe Beyls <http://www.digitalia.be>
*/

(function($) {
  // Global variables, accessible to Overlay only
  
  var win = $(window), options, images, activeURL, middle, centerWidth, centerHeight, documentElement = document.documentElement, ie6 = !window.XMLHttpRequest,
    operaFix = window.opera && (document.compatMode == "CSS1Compat") && ($.browser.version >= 9.3), documentElement = document.documentElement,

  // Preload images
  preload = {}, preloadClose = new Image(),

  // DOM elements
  overlay, center, box, close;
  
  /*
    Initialization
  */

  $(function() {
    // Append the Slimbox HTML code at the bottom of the document
    $("body").append(
      $([
        overlay = $('<div id="overlay_screen" />')[0],
        center = $('<div id="RB_window" />')[0]
      ]).css("display", "none")
    );
    
    box = $('<div id="overlay_box" />').appendTo(center);
    close_div = $('<div id="close" />')
    loading = $('<div class="loading">Loading...</div>')
  });
  
  /*
    API
  */

  // Open RestBox with the specified parameters
  $.restbox = function(_options) {
    options = $.extend({
      overlayOpacity: 0.6,      // 1 is opaque, 0 is completely transparent (change the color in the CSS file)
      overlayFadeDuration: 400, // Duration of the overlay fade-in and fade-out animations (in milliseconds)
      closeKeys: [27, 88, 67],  // Array of keycodes to close Slimbox, default: Esc (27), 'x' (88), 'c' (67)
      content: $(loading),
      resizeDuration: 400,     // Duration of each of the box resize animations (in milliseconds)
      resizeEasing: "swing",     // "swing" is jQuery's default easing
      class_name: ''
    }, _options);
    
    // loading_flag = _options.content ? false : true

    middle = win.scrollTop() + ((operaFix ? documentElement.clientHeight : win.height()) / 2);
    $(center).css({top: Math.max(0, middle - (centerHeight / 2)), width: centerWidth, height: centerHeight, marginLeft: -centerWidth/2}).show();
    compatibleOverlay = ie6 || (overlay.currentStyle && (overlay.currentStyle.position != "fixed"));
    if (compatibleOverlay) overlay.style.position = "absolute";
    $(overlay).css("opacity", options.overlayOpacity).fadeIn(options.overlayFadeDuration);

    $(center).html(options.content);
    
    if (_options.content) {
      $(center).prepend('<div id="close" />')
      $(center).find('div#close').click(function(){close()})
    }
    
    $('div#overlay_screen').click(function(){close()})
    
    // position();
    setup(1);
    
    return false;
  };
  
  $.RB_close = function() {
    close();
  }
  
  
  $.fn.restbox = function(_options) {
    return this.unbind("click").click(function() {
       $.restbox(_options);
       jQuery.ajax({
           url: this.href,
           dataType: "script"
       });
       return false;
    })
  }
  
  /*
    Internal functions
  */
  
  function keyDown(event) {
    var code = event.keyCode, fn = $.inArray;
    // Prevent default keyboard action (like navigating inside the page)
    return (fn(code, options.closeKeys) >= 0) ? close()
      // : (fn(code, options.nextKeys) >= 0) ? next()
      // : (fn(code, options.previousKeys) >= 0) ? previous()
      // : false;
      : true;
  }

  function position() {
    var l = win.scrollLeft(), w = operaFix ? documentElement.clientWidth : win.width();
    $(center).css("left", l + (w / 2));
    if (compatibleOverlay) $(overlay).css({left: l, top: win.scrollTop(), width: w, height: win.height()});
  }
    
  function setup(open) {
    var fn = open ? "bind" : "unbind";
    win[fn]("scroll resize", position);
    $(document)[fn]("keydown", keyDown);
  }
  
  function close() {
    if ($(center).is(':visible')) {
      $(center).hide();
      $(overlay).stop().fadeOut(options.overlayFadeDuration, setup);
    }
    return false;
  }
  
  // Initialize restbox
  
  $(function() {
    $(".restbox").restbox({});
  })
  
})(jQuery);